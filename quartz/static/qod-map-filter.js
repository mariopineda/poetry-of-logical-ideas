(() => {
  const section =
    document.querySelector(".qod-map-section")

  if (!section) return

  const courseSelect =
    section.querySelector("#qod-map-course-filter")

  const topicSelect =
    section.querySelector("#qod-map-topic-filter")

  const resetButton =
    section.querySelector("#qod-map-reset")

  const count =
    section.querySelector("#qod-map-count")

  const desktop =
    section.querySelector(".qod-map-desktop")

  const canvas =
    desktop?.querySelector(".qod-map-canvas")

  const svg =
    canvas?.querySelector("svg")

  const scroll =
    desktop?.querySelector(".qod-map-scroll")

  const desktopNodes = [
    ...section.querySelectorAll(
      ".qod-map-desktop .qod-map-node"
    ),
  ]

  const edges = [
    ...section.querySelectorAll(
      ".qod-map-desktop polyline[data-source]"
    ),
  ]

  if (
    !courseSelect ||
    !topicSelect ||
    !canvas ||
    !svg ||
    desktopNodes.length === 0
  ) {
    return
  }

  // ----------------------------------------------------------
  // Preserve original full-map geometry
  // ----------------------------------------------------------

  desktopNodes.forEach((node) => {
    node.dataset.originalLeft =
      node.style.left

    node.dataset.originalTop =
      node.style.top
  })

  edges.forEach((edge) => {
    edge.dataset.originalPoints =
      edge.getAttribute("points") || ""
  })

  const originalCanvasWidth =
    canvas.style.width

  const originalCanvasHeight =
    canvas.style.height

  const originalCanvasMinWidth =
    canvas.style.minWidth

  const originalSvgWidth =
    svg.getAttribute("width")

  const originalSvgHeight =
    svg.getAttribute("height")

  const originalViewBox =
    svg.getAttribute("viewBox")

  // ----------------------------------------------------------
  // Build Course and Topic choices automatically
  // ----------------------------------------------------------

  const courses = new Set()
  const topics = new Set()

  desktopNodes.forEach((node) => {
    const nodeCourses =
      (node.dataset.qodCourses || "")
        .split("|")
        .filter(Boolean)

    nodeCourses.forEach((course) =>
      courses.add(course)
    )

    const topic =
      node.dataset.qodTopic || ""

    if (topic) {
      topics.add(topic)
    }
  })

  ;[...courses]
    .sort((a, b) =>
      a.localeCompare(
        b,
        undefined,
        { numeric: true }
      )
    )
    .forEach((course) => {
      const option =
        document.createElement("option")

      option.value = course
      option.textContent = course

      courseSelect.appendChild(option)
    })

  ;[...topics]
    .sort((a, b) =>
      a.localeCompare(b)
    )
    .forEach((topic) => {
      const option =
        document.createElement("option")

      option.value = topic
      option.textContent = topic

      topicSelect.appendChild(option)
    })

  // ----------------------------------------------------------
  // Matching
  // ----------------------------------------------------------

  const matches = (node, course, topic) => {
    const nodeCourses =
      (node.dataset.qodCourses || "")
        .split("|")
        .filter(Boolean)

    const nodeTopic =
      node.dataset.qodTopic || ""

    const courseMatch =
      !course ||
      nodeCourses.includes(course)

    const topicMatch =
      !topic ||
      nodeTopic === topic

    return courseMatch && topicMatch
  }

  // ----------------------------------------------------------
  // Restore original full desktop map
  // ----------------------------------------------------------

  const restoreDesktopLayout = () => {
    desktopNodes.forEach((node) => {
      node.style.left =
        node.dataset.originalLeft

      node.style.top =
        node.dataset.originalTop
    })

    edges.forEach((edge) => {
      edge.setAttribute(
        "points",
        edge.dataset.originalPoints || ""
      )
    })

    canvas.style.width =
      originalCanvasWidth

    canvas.style.height =
      originalCanvasHeight

    canvas.style.minWidth =
      originalCanvasMinWidth

    if (originalSvgWidth) {
      svg.setAttribute(
        "width",
        originalSvgWidth
      )
    }

    if (originalSvgHeight) {
      svg.setAttribute(
        "height",
        originalSvgHeight
      )
    }

    if (originalViewBox) {
      svg.setAttribute(
        "viewBox",
        originalViewBox
      )
    }
  }

  // ----------------------------------------------------------
  // Compact the visible desktop QODs
  //
  // We retain their original left-to-right learning ranks,
  // but remove empty space created by filtered-out QODs.
  // ----------------------------------------------------------

  const compactDesktopLayout =
    (visibleNodes, visibleSlugs) => {

    if (visibleNodes.length === 0) {
      return
    }

    const PADDING = 24
    const HORIZONTAL_GAP = 90
    const VERTICAL_GAP = 28

    const sample = visibleNodes[0]

    const nodeWidth =
      sample.offsetWidth || 220

    const nodeHeight =
      sample.offsetHeight || 82

    // Group nodes by their original Dagre x-position.
    const columns = new Map()

    visibleNodes.forEach((node) => {
      const originalLeft =
        parseFloat(
          node.dataset.originalLeft || "0"
        )

      // Dagre nodes in the same rank share essentially
      // the same horizontal position.
      const key =
        Math.round(originalLeft / 10) * 10

      if (!columns.has(key)) {
        columns.set(key, [])
      }

      columns.get(key).push(node)
    })

    const orderedColumns =
      [...columns.entries()]
        .sort((a, b) => a[0] - b[0])

    let maximumRows = 1

    orderedColumns.forEach(
      ([, nodes], columnIndex) => {

        nodes.sort((a, b) => {
          const aTop =
            parseFloat(
              a.dataset.originalTop || "0"
            )

          const bTop =
            parseFloat(
              b.dataset.originalTop || "0"
            )

          return aTop - bTop
        })

        maximumRows =
          Math.max(
            maximumRows,
            nodes.length
          )

        nodes.forEach(
          (node, rowIndex) => {

            const left =
              PADDING +
              columnIndex *
                (nodeWidth + HORIZONTAL_GAP)

            const top =
              PADDING +
              rowIndex *
                (nodeHeight + VERTICAL_GAP)

            node.style.left =
              `${left}px`

            node.style.top =
              `${top}px`
          }
        )
      }
    )

    const canvasWidth =
      Math.max(
        320,
        PADDING * 2 +
        orderedColumns.length * nodeWidth +
        Math.max(
          0,
          orderedColumns.length - 1
        ) * HORIZONTAL_GAP
      )

    const canvasHeight =
      Math.max(
        180,
        PADDING * 2 +
        maximumRows * nodeHeight +
        Math.max(
          0,
          maximumRows - 1
        ) * VERTICAL_GAP
      )

    canvas.style.width =
      `${canvasWidth}px`

    canvas.style.height =
      `${canvasHeight}px`

    canvas.style.minWidth =
      `${canvasWidth}px`

    svg.setAttribute(
      "width",
      String(canvasWidth)
    )

    svg.setAttribute(
      "height",
      String(canvasHeight)
    )

    svg.setAttribute(
      "viewBox",
      `0 0 ${canvasWidth} ${canvasHeight}`
    )

    // Redraw visible prerequisite arrows using the
    // newly compacted node positions.
    const nodesBySlug = new Map(
      visibleNodes.map((node) => [
        node.dataset.qodSlug,
        node,
      ])
    )

    edges.forEach((edge) => {
      const source =
        nodesBySlug.get(
          edge.dataset.source
        )

      const target =
        nodesBySlug.get(
          edge.dataset.target
        )

      if (!source || !target) {
        edge.style.display = "none"
        return
      }

      edge.style.display = ""

      const sourceLeft =
        parseFloat(source.style.left)

      const sourceTop =
        parseFloat(source.style.top)

      const targetLeft =
        parseFloat(target.style.left)

      const targetTop =
        parseFloat(target.style.top)

      const sourceWidth =
        source.offsetWidth || nodeWidth

      const sourceHeight =
        source.offsetHeight || nodeHeight

      const targetHeight =
        target.offsetHeight || nodeHeight

      const startX =
        sourceLeft + sourceWidth

      const startY =
        sourceTop + sourceHeight / 2

      const endX =
        targetLeft

      const endY =
        targetTop + targetHeight / 2

      const middleX =
        startX +
        (endX - startX) / 2

      edge.setAttribute(
        "points",
        [
          `${startX},${startY}`,
          `${middleX},${startY}`,
          `${middleX},${endY}`,
          `${endX},${endY}`,
        ].join(" ")
      )
    })

    if (scroll) {
      scroll.scrollLeft = 0
      scroll.scrollTop = 0
    }
  }

  // ----------------------------------------------------------
  // Apply filters
  // ----------------------------------------------------------

  const applyFilters = () => {
    const course =
      courseSelect.value

    const topic =
      topicSelect.value

    const filtering =
      Boolean(course || topic)

    restoreDesktopLayout()

    const visibleNodes = []
    const visibleSlugs = new Set()
    const visibleUrls = new Set()

    desktopNodes.forEach((node) => {
      const visible =
        matches(node, course, topic)

      node.hidden = !visible

      if (visible) {
        visibleNodes.push(node)

        visibleSlugs.add(
          node.dataset.qodSlug
        )

        visibleUrls.add(node.href)
      }
    })

    if (filtering) {
      compactDesktopLayout(
        visibleNodes,
        visibleSlugs
      )
    } else {
      edges.forEach((edge) => {
        edge.style.display = ""
      })
    }

    // --------------------------------------------------------
    // Mobile map
    // --------------------------------------------------------

    const mobileNodes = [
      ...section.querySelectorAll(
        ".qod-map-mobile .qod-mobile-path-node"
      ),
    ]

    mobileNodes.forEach((node) => {
      node.hidden =
        !matches(node, course, topic)
    })

    ;[
      ...section.querySelectorAll(
        ".qod-mobile-tree-child"
      ),
    ]
      .reverse()
      .forEach((branch) => {
        const visible =
          branch.querySelector(
            ".qod-mobile-path-node:not([hidden])"
          )

        branch.hidden = !visible
      })

    section
      .querySelectorAll(
        ".qod-mobile-tree"
      )
      .forEach((tree) => {
        const visible =
          tree.querySelector(
            ".qod-mobile-path-node:not([hidden])"
          )

        tree.hidden = !visible
      })

    section
      .querySelectorAll(
        ".qod-mobile-related-link"
      )
      .forEach((link) => {
        link.hidden =
          !visibleUrls.has(link.href)
      })

    section
      .querySelectorAll(
        ".qod-mobile-related"
      )
      .forEach((box) => {
        const visible =
          box.querySelector(
            ".qod-mobile-related-link:not([hidden])"
          )

        box.hidden = !visible
      })

    section
      .querySelectorAll(
        ".qod-mobile-extra-prerequisite"
      )
      .forEach((note) => {
        note.hidden = filtering
      })

    section
      .querySelectorAll(
        ".qod-mobile-tree-list, .qod-mobile-other-list"
      )
      .forEach((container) => {
        const visible =
          container.querySelector(
            ".qod-mobile-path-node:not([hidden])"
          )

        container.hidden = !visible

        const heading =
          container.previousElementSibling

        if (
          heading &&
          heading.tagName === "H3"
        ) {
          heading.hidden = !visible
        }
      })

    // --------------------------------------------------------
    // Counter / reset state
    // --------------------------------------------------------

    const total =
      visibleSlugs.size

    if (count) {
      count.textContent =
        `${total} QOD${total === 1 ? "" : "s"}`
    }

    if (resetButton) {
      resetButton.disabled =
        !filtering
    }
  }

  courseSelect.addEventListener(
    "change",
    applyFilters
  )

  topicSelect.addEventListener(
    "change",
    applyFilters
  )

  if (resetButton) {
    resetButton.addEventListener(
      "click",
      () => {
        courseSelect.value = ""
        topicSelect.value = ""
        applyFilters()
      }
    )
  }

  applyFilters()
})()
