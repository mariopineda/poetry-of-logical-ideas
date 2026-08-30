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

  const filters =
    section.querySelector(".qod-map-filters")

  const desktop =
    section.querySelector(".qod-map-desktop")

  const mobile =
    section.querySelector(".qod-map-mobile")

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
    !filters ||
    !desktop ||
    !mobile ||
    !canvas ||
    !svg ||
    desktopNodes.length === 0
  ) {
    return
  }

  // ----------------------------------------------------------
  // Intro prompt shown instead of the 443-node full map
  // ----------------------------------------------------------

  const prompt =
    document.createElement("div")

  prompt.className =
    "qod-map-selection-prompt"

  prompt.innerHTML = `
    <strong>Choose a course, a topic, or both to explore the QOD Learning Map.</strong>
    <span>The complete bank currently contains ${desktopNodes.length} Questions of the Day.</span>
  `

  filters.insertAdjacentElement(
    "afterend",
    prompt
  )

  // ----------------------------------------------------------
  // Metadata helpers
  // ----------------------------------------------------------

  const coursesFor = (node) =>
    (node.dataset.qodCourses || "")
      .split("|")
      .filter(Boolean)

  const topicFor = (node) =>
    node.dataset.qodTopic || ""

  const allCourses = [
    ...new Set(
      desktopNodes.flatMap(coursesFor)
    ),
  ].sort((a, b) =>
    a.localeCompare(
      b,
      undefined,
      { numeric: true }
    )
  )

  const topicsForCourse = (course) => [
    ...new Set(
      desktopNodes
        .filter(
          (node) =>
            !course ||
            coursesFor(node).includes(course)
        )
        .map(topicFor)
        .filter(Boolean)
    ),
  ].sort((a, b) =>
    a.localeCompare(b)
  )

  // ----------------------------------------------------------
  // Rebuild dropdowns from actual QOD metadata
  // ----------------------------------------------------------

  const fillCourseOptions = () => {
    courseSelect.innerHTML = ""

    const all =
      document.createElement("option")

    all.value = ""
    all.textContent = "All Courses"

    courseSelect.appendChild(all)

    allCourses.forEach((course) => {
      const option =
        document.createElement("option")

      option.value = course
      option.textContent = course

      courseSelect.appendChild(option)
    })
  }

  const fillTopicOptions = (
    course,
    requestedTopic = ""
  ) => {
    const topics =
      topicsForCourse(course)

    topicSelect.innerHTML = ""

    const all =
      document.createElement("option")

    all.value = ""
    all.textContent = "All Topics"

    topicSelect.appendChild(all)

    topics.forEach((topic) => {
      const option =
        document.createElement("option")

      option.value = topic
      option.textContent = topic

      topicSelect.appendChild(option)
    })

    if (topics.includes(requestedTopic)) {
      topicSelect.value = requestedTopic
    }
  }

  fillCourseOptions()
  fillTopicOptions("")

  // ----------------------------------------------------------
  // Filtering
  // ----------------------------------------------------------

  const matches = (node, course, topic) => {
    const courseMatch =
      !course ||
      coursesFor(node).includes(course)

    const topicMatch =
      !topic ||
      topicFor(node) === topic

    return courseMatch && topicMatch
  }

  // ----------------------------------------------------------
  // Compact filtered desktop layout
  // ----------------------------------------------------------

  const layoutFilteredMap = (
    visibleNodes
  ) => {
    if (visibleNodes.length === 0) {
      return
    }

    const PADDING = 26
    const H_GAP = 80
    const V_GAP = 24
    const STANDALONE_GAP = 60
    const STANDALONE_COLUMNS = 3

    const sample =
      visibleNodes[0]

    const NODE_WIDTH =
      sample.offsetWidth || 220

    const NODE_HEIGHT =
      sample.offsetHeight || 82

    const visibleBySlug =
      new Map(
        visibleNodes.map((node) => [
          node.dataset.qodSlug,
          node,
        ])
      )

    const visibleEdges =
      edges.filter(
        (edge) =>
          visibleBySlug.has(
            edge.dataset.source
          ) &&
          visibleBySlug.has(
            edge.dataset.target
          )
      )

    // --------------------------------------------------------
    // Build prerequisite graph
    // --------------------------------------------------------

    const parents = new Map()
    const children = new Map()

    visibleNodes.forEach((node) => {
      const slug =
        node.dataset.qodSlug

      parents.set(slug, [])
      children.set(slug, [])
    })

    visibleEdges.forEach((edge) => {
      parents
        .get(edge.dataset.target)
        .push(edge.dataset.source)

      children
        .get(edge.dataset.source)
        .push(edge.dataset.target)
    })

    const connected =
      new Set()

    visibleEdges.forEach((edge) => {
      connected.add(edge.dataset.source)
      connected.add(edge.dataset.target)
    })

    // --------------------------------------------------------
    // Compute prerequisite depth for connected nodes
    // --------------------------------------------------------

    const levelMemo =
      new Map()

    const getLevel = (
      slug,
      visiting = new Set()
    ) => {
      if (levelMemo.has(slug)) {
        return levelMemo.get(slug)
      }

      if (visiting.has(slug)) {
        return 0
      }

      const next =
        new Set(visiting)

      next.add(slug)

      const nodeParents =
        (parents.get(slug) || [])
          .filter((parent) =>
            connected.has(parent)
          )

      const level =
        nodeParents.length === 0
          ? 0
          : Math.max(
              ...nodeParents.map(
                (parent) =>
                  getLevel(parent, next) + 1
              )
            )

      levelMemo.set(slug, level)

      return level
    }

    const columns =
      new Map()

    visibleNodes
      .filter((node) =>
        connected.has(
          node.dataset.qodSlug
        )
      )
      .forEach((node) => {
        const level =
          getLevel(
            node.dataset.qodSlug
          )

        if (!columns.has(level)) {
          columns.set(level, [])
        }

        columns.get(level).push(node)
      })

    const orderedLevels = [
      ...columns.keys(),
    ].sort((a, b) => a - b)

    let connectedHeight = 0
    let connectedWidth = 0

    orderedLevels.forEach(
      (level, columnIndex) => {
        const nodes =
          columns.get(level)

        nodes.sort((a, b) =>
          a.textContent.localeCompare(
            b.textContent
          )
        )

        nodes.forEach(
          (node, rowIndex) => {
            node.style.left =
              `${
                PADDING +
                columnIndex *
                  (NODE_WIDTH + H_GAP)
              }px`

            node.style.top =
              `${
                PADDING +
                rowIndex *
                  (NODE_HEIGHT + V_GAP)
              }px`
          }
        )

        connectedHeight =
          Math.max(
            connectedHeight,
            PADDING +
              nodes.length *
                (NODE_HEIGHT + V_GAP)
          )

        connectedWidth =
          Math.max(
            connectedWidth,
            PADDING +
              (columnIndex + 1) *
                NODE_WIDTH +
              columnIndex *
                H_GAP
          )
      }
    )

    // --------------------------------------------------------
    // Pack disconnected QODs into a grid
    // --------------------------------------------------------

    const standalone =
      visibleNodes
        .filter(
          (node) =>
            !connected.has(
              node.dataset.qodSlug
            )
        )
        .sort((a, b) =>
          a.textContent.localeCompare(
            b.textContent
          )
        )

    const standaloneStartY =
      connected.size > 0
        ? connectedHeight +
          STANDALONE_GAP
        : PADDING

    standalone.forEach(
      (node, index) => {
        const column =
          index % STANDALONE_COLUMNS

        const row =
          Math.floor(
            index /
              STANDALONE_COLUMNS
          )

        node.style.left =
          `${
            PADDING +
            column *
              (NODE_WIDTH + H_GAP)
          }px`

        node.style.top =
          `${
            standaloneStartY +
            row *
              (NODE_HEIGHT + V_GAP)
          }px`
      }
    )

    const standaloneRows =
      Math.ceil(
        standalone.length /
          STANDALONE_COLUMNS
      )

    const standaloneWidth =
      standalone.length > 0
        ? PADDING +
          Math.min(
            STANDALONE_COLUMNS,
            standalone.length
          ) *
            NODE_WIDTH +
          Math.max(
            0,
            Math.min(
              STANDALONE_COLUMNS,
              standalone.length
            ) - 1
          ) *
            H_GAP
        : 0

    const standaloneHeight =
      standalone.length > 0
        ? standaloneStartY +
          standaloneRows *
            NODE_HEIGHT +
          Math.max(
            0,
            standaloneRows - 1
          ) *
            V_GAP +
          PADDING
        : 0

    const canvasWidth =
      Math.max(
        360,
        connectedWidth + PADDING,
        standaloneWidth + PADDING
      )

    const canvasHeight =
      Math.max(
        180,
        connectedHeight + PADDING,
        standaloneHeight
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

    // --------------------------------------------------------
    // Redraw prerequisite arrows
    // --------------------------------------------------------

    edges.forEach((edge) => {
      const source =
        visibleBySlug.get(
          edge.dataset.source
        )

      const target =
        visibleBySlug.get(
          edge.dataset.target
        )

      if (!source || !target) {
        edge.style.display = "none"
        return
      }

      edge.style.display = ""

      const sourceLeft =
        parseFloat(
          source.style.left
        )

      const sourceTop =
        parseFloat(
          source.style.top
        )

      const targetLeft =
        parseFloat(
          target.style.left
        )

      const targetTop =
        parseFloat(
          target.style.top
        )

      const startX =
        sourceLeft + NODE_WIDTH

      const startY =
        sourceTop +
        NODE_HEIGHT / 2

      const endX =
        targetLeft

      const endY =
        targetTop +
        NODE_HEIGHT / 2

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
  // Apply course/topic selection
  // ----------------------------------------------------------

  const applyFilters = () => {
    const course =
      courseSelect.value

    const topic =
      topicSelect.value

    const filtering =
      Boolean(course || topic)

    if (!filtering) {
      desktop.hidden = true
      mobile.hidden = true
      prompt.hidden = false

      desktopNodes.forEach(
        (node) => {
          node.hidden = false
        }
      )

      edges.forEach(
        (edge) => {
          edge.style.display = ""
        }
      )

      count.textContent =
        `${desktopNodes.length} QODs`

      resetButton.disabled = true

      return
    }

    prompt.hidden = true
    desktop.hidden = false
    mobile.hidden = false
    resetButton.disabled = false

    const visibleNodes = []
    const visibleUrls = new Set()

    desktopNodes.forEach((node) => {
      const visible =
        matches(
          node,
          course,
          topic
        )

      node.hidden = !visible

      if (visible) {
        visibleNodes.push(node)
        visibleUrls.add(node.href)
      }
    })

    layoutFilteredMap(
      visibleNodes
    )

    // --------------------------------------------------------
    // Mobile filtering
    // --------------------------------------------------------

    const mobileNodes = [
      ...section.querySelectorAll(
        ".qod-map-mobile .qod-mobile-path-node"
      ),
    ]

    mobileNodes.forEach((node) => {
      node.hidden =
        !matches(
          node,
          course,
          topic
        )
    })

    ;[
      ...section.querySelectorAll(
        ".qod-mobile-tree-child"
      ),
    ]
      .reverse()
      .forEach((branch) => {
        branch.hidden =
          !branch.querySelector(
            ".qod-mobile-path-node:not([hidden])"
          )
      })

    section
      .querySelectorAll(
        ".qod-mobile-tree"
      )
      .forEach((tree) => {
        tree.hidden =
          !tree.querySelector(
            ".qod-mobile-path-node:not([hidden])"
          )
      })

    section
      .querySelectorAll(
        ".qod-mobile-related-link"
      )
      .forEach((link) => {
        link.hidden =
          !visibleUrls.has(
            link.href
          )
      })

    section
      .querySelectorAll(
        ".qod-mobile-related"
      )
      .forEach((box) => {
        box.hidden =
          !box.querySelector(
            ".qod-mobile-related-link:not([hidden])"
          )
      })

    section
      .querySelectorAll(
        ".qod-mobile-extra-prerequisite"
      )
      .forEach((note) => {
        note.hidden = true
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

    const total =
      visibleNodes.length

    count.textContent =
      `${total} QOD${
        total === 1 ? "" : "s"
      }`
  }

  // ----------------------------------------------------------
  // Events
  // ----------------------------------------------------------

  courseSelect.addEventListener(
    "change",
    () => {
      const oldTopic =
        topicSelect.value

      fillTopicOptions(
        courseSelect.value,
        oldTopic
      )

      applyFilters()
    }
  )

  topicSelect.addEventListener(
    "change",
    applyFilters
  )

  resetButton.addEventListener(
    "click",
    () => {
      courseSelect.value = ""

      fillTopicOptions("")

      topicSelect.value = ""

      applyFilters()
    }
  )

  applyFilters()
})()
