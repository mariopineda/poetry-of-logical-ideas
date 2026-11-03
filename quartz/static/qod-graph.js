(() => {
  const COURSE_ORDER = [
    "Mathematics 10C",
    "Mathematics 10-3",
    "Mathematics 20-1",
    "Mathematics 20-2",
    "Mathematics 20-3",
    "Mathematics 30-1",
    "Mathematics 30-2",
    "Mathematics 30-3",
    "Mathematics 31",
  ]

  const COURSE_COLORS = {
    "Mathematics 10C": "#7048E8",
    "Mathematics 10-3": "#087AC1",
    "Mathematics 20-1": "#C026D3",
    "Mathematics 20-2": "#5B9F20",
    "Mathematics 20-3": "#008F78",
    "Mathematics 30-1": "#D97706",
    "Mathematics 30-2": "#B99A00",
    "Mathematics 30-3": "#2563EB",
    "Mathematics 31": "#D93B50",
  }

  const COURSE_ALIASES = {
    "Math 10C": "Mathematics 10C",
    "Math 10-3": "Mathematics 10-3",
    "Math 20-1": "Mathematics 20-1",
    "Math 20-2": "Mathematics 20-2",
    "Math 20-3": "Mathematics 20-3",
    "Math 30-1": "Mathematics 30-1",
    "Math 30-2": "Mathematics 30-2",
    "Math 30-3": "Mathematics 30-3",
    "Math 31": "Mathematics 31",
  }

  function canonicalCourseName(course) {
    return COURSE_ALIASES[course] ?? course
  }

  let cleanupCurrentGraph = null
  let d3Promise = null

  function loadD3() {
    if (window.d3?.forceSimulation) {
      return Promise.resolve(window.d3)
    }

    if (d3Promise) return d3Promise

    d3Promise = new Promise((resolve, reject) => {
      const existing = document.querySelector(
        'script[data-qod-graph-d3="true"]',
      )

      if (existing) {
        existing.addEventListener("load", () => resolve(window.d3), {
          once: true,
        })
        existing.addEventListener("error", reject, { once: true })
        return
      }

      const script = document.createElement("script")
      script.src =
        "https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"
      script.dataset.qodGraphD3 = "true"

      script.onload = () => resolve(window.d3)
      script.onerror = reject

      document.head.appendChild(script)
    })

    return d3Promise
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value))
  }

  async function initialiseQodGraph() {
    if (cleanupCurrentGraph) {
      cleanupCurrentGraph()
      cleanupCurrentGraph = null
    }

    const root = document.querySelector(
      ".qod-graph-page[data-qod-graph]",
    )

    if (!root) return

    const canvas = root.querySelector(".qod-graph-canvas")
    const viewport = root.querySelector(".qod-graph-viewport")
    const toolbar = root.querySelector(".qod-graph-toolbar")
    const tooltip = root.querySelector(".qod-graph-tooltip")
    const countLabel = root.querySelector(".qod-graph-count")
    const status = root.querySelector(".qod-graph-status")

    if (
      !(canvas instanceof HTMLCanvasElement) ||
      !(viewport instanceof HTMLElement) ||
      !(toolbar instanceof HTMLElement)
    ) {
      return
    }

    let data

    try {
      data = JSON.parse(
        decodeURIComponent(root.dataset.qodGraph ?? ""),
      )
    } catch {
      if (status) {
        status.textContent = "The graph data could not be read."
      }
      return
    }

    let d3

    try {
      d3 = await loadD3()
    } catch {
      if (status) {
        status.textContent =
          "The graph engine could not be loaded."
      }
      return
    }

    if (!document.contains(root)) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // The graph handles its own touch gestures.
    // One finger pans/drags; two fingers pinch to zoom.
    canvas.style.touchAction = "none"

    // OSC-QOD-GRAPH-CLARITY-V2
    // Give a 500+ node network more room on desktop while
    // keeping a practical height on smaller screens.
    viewport.style.minHeight =
      window.matchMedia("(max-width: 700px)").matches
        ? "560px"
        : "720px"

    const nodes = data.nodes.map((node) => ({
      ...node,
      courses: (node.courses ?? []).map(canonicalCourseName),
      x: undefined,
      y: undefined,
    }))

    const nodeById = new Map(
      nodes.map((node) => [node.id, node]),
    )

    const links = data.links
      .map((link) => ({
        ...link,
        source: nodeById.get(link.source),
        target: nodeById.get(link.target),
      }))
      .filter((link) => link.source && link.target)

    const degree = new Map(nodes.map((node) => [node.id, 0]))

    for (const link of links) {
      degree.set(
        link.source.id,
        (degree.get(link.source.id) ?? 0) + 1,
      )

      degree.set(
        link.target.id,
        (degree.get(link.target.id) ?? 0) + 1,
      )
    }

    for (const node of nodes) {
      node.radius =
        4 +
        Math.min(
          7,
          Math.sqrt(degree.get(node.id) ?? 0) * 1.4,
        )
    }

    let width = 900
    let height = 650
    let scale = 1
    let offsetX = 0
    let offsetY = 0
    let activeCourse = null
    // OSC-QOD-CLICK-SELECT-V1: only explicit clicks change graph highlighting.
    let selectedNode = null
    let lastPointerType = null

    const selectionPanel = document.createElement("div")
    selectionPanel.className = "qod-graph-selected-qod"
    selectionPanel.style.cssText =
      "display:none;align-items:center;flex-wrap:wrap;gap:0.75rem;" +
      "padding:0.8rem 1rem;margin:0.5rem 0 0.85rem;" +
      "border:1px solid var(--lightgray);border-radius:0.65rem;" +
      "background:var(--light);color:var(--dark)"
    toolbar.insertAdjacentElement("afterend", selectionPanel)

    const neighbourIds = new Map(
      nodes.map((node) => [node.id, new Set()]),
    )

    for (const link of links) {
      neighbourIds
        .get(link.source.id)
        ?.add(link.target.id)

      neighbourIds
        .get(link.target.id)
        ?.add(link.source.id)
    }

    function isInSelectedNeighbourhood(node) {
      if (!selectedNode) return true

      return (
        node.id === selectedNode.id ||
        neighbourIds
          .get(selectedNode.id)
          ?.has(node.id)
      )
    }

    function linkTouchesSelection(link) {
      return (
        !selectedNode ||
        link.source.id === selectedNode.id ||
        link.target.id === selectedNode.id
      )
    }
    let dragNode = null
    let panning = false
    let pointerStart = null
    let moved = false
    const activePointers = new Map()
    let pinchStart = null

    function courseClusterTarget(node) {
      const knownCourses =
        node.courses.filter((course) =>
          COURSE_ORDER.includes(course),
        )

      if (knownCourses.length === 0) {
        return {
          x: width / 2,
          y: height / 2,
        }
      }

      // Keep the course centres quite close together.
      // This creates overlapping neighbourhoods rather
      // than separate islands.
      const clusterRadius =
        Math.min(width, height) * 0.26

      let x = 0
      let y = 0

      for (const course of knownCourses) {
        const index =
          COURSE_ORDER.indexOf(course)

        const angle =
          -Math.PI / 2 +
          (index / COURSE_ORDER.length) *
            Math.PI *
            2

        x +=
          width / 2 +
          Math.cos(angle) * clusterRadius

        y +=
          height / 2 +
          Math.sin(angle) * clusterRadius
      }

      // A multi-course QOD is attracted to the average
      // position of all of its courses, naturally placing
      // it between the relevant neighbourhoods.
      return {
        x: x / knownCourses.length,
        y: y / knownCourses.length,
      }
    }

    const simulation = d3
      .forceSimulation(nodes)

      // Keep the whole graph centred as one object.
      .force(
        "center",
        d3.forceCenter(width / 2, height / 2),
      )

      // Links influence local structure, but no longer
      // dominate the layout.
      .force(
        "link",
        d3
          .forceLink(links)
          .id((node) => node.id)
          .distance(74)
          .strength(0.11),
      )

      // Local repulsion gives nodes breathing room.
      // distanceMax prevents distant nodes from pushing
      // the entire graph into long branches.
      .force(
        "charge",
        d3
          .forceManyBody()
          .strength(-72)
          .distanceMax(320),
      )

      .force(
        "collision",
        d3
          .forceCollide()
          .radius((node) => node.radius + 7)
          .strength(1)
          .iterations(2),
      )

      // Very gentle course neighbourhoods.
      .force(
        "clusterX",
        d3
          .forceX(
            (node) =>
              courseClusterTarget(node).x,
          )
          .strength(0.065),
      )

      .force(
        "clusterY",
        d3
          .forceY(
            (node) =>
              courseClusterTarget(node).y,
          )
          .strength(0.065),
      )

      .alphaDecay(0.014)
      .velocityDecay(0.38)
      .on("tick", draw)

    function matchesCourse(node) {
      return (
        !activeCourse ||
        node.courses.includes(activeCourse)
      )
    }

    function setSelectedNode(node) {
      selectedNode = node
      selectionPanel.replaceChildren()

      if (!node) {
        selectionPanel.style.display = "none"
        draw()
        return
      }

      const details = document.createElement("div")
      details.style.cssText = "flex:1 1 220px;min-width:0"
      const name = document.createElement("strong")
      name.textContent = node.name
      name.style.display = "block"

      const summary = document.createElement("span")
      summary.style.cssText = "display:block;opacity:0.8;font-size:0.85rem"
      const neighbours = neighbourIds.get(node.id)?.size ?? 0
      summary.textContent =
        (node.courses.join(" · ") || "QOD") +
        " · " + neighbours +
        (neighbours === 1 ? " direct connection" : " direct connections")
      details.append(name, summary)

      const open = document.createElement("a")
      open.href = node.url
      open.textContent = "Open QOD"
      open.style.cssText =
        "display:inline-block;padding:0.4rem 0.75rem;" +
        "border-radius:0.4rem;background:var(--secondary);" +
        "color:var(--light);text-decoration:none;font-weight:600"
      open.setAttribute("aria-label", "Open " + node.name)

      const clear = document.createElement("button")
      clear.type = "button"
      clear.textContent = "Clear selection"
      clear.className = "qod-graph-reset-button"
      clear.addEventListener("click", () => setSelectedNode(null))

      selectionPanel.append(details, open, clear)
      selectionPanel.style.display = "flex"
      draw()
    }

    function screenPoint(node) {
      return {
        x: node.x * scale + offsetX,
        y: node.y * scale + offsetY,
      }
    }

    function graphPoint(x, y) {
      return {
        x: (x - offsetX) / scale,
        y: (y - offsetY) / scale,
      }
    }

    function pointerPosition(event) {
      const rect = canvas.getBoundingClientRect()

      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    }

    function nodeAt(x, y) {
      const graph = graphPoint(x, y)

      const candidate = simulation.find(
        graph.x,
        graph.y,
        24 / scale,
      )

      if (!candidate) return null

      const point = screenPoint(candidate)
      const radius = clamp(
        candidate.radius * scale,
        4,
        20,
      )

      const distance = Math.hypot(
        point.x - x,
        point.y - y,
      )

      return distance <= radius + 5
        ? candidate
        : null
    }

    function drawArrow(x1, y1, x2, y2, radius) {
      const angle = Math.atan2(y2 - y1, x2 - x1)
      const arrow = 5

      const endX = x2 - Math.cos(angle) * radius
      const endY = y2 - Math.sin(angle) * radius

      ctx.beginPath()
      ctx.moveTo(endX, endY)
      ctx.lineTo(
        endX -
          Math.cos(angle - Math.PI / 6) * arrow,
        endY -
          Math.sin(angle - Math.PI / 6) * arrow,
      )
      ctx.lineTo(
        endX -
          Math.cos(angle + Math.PI / 6) * arrow,
        endY -
          Math.sin(angle + Math.PI / 6) * arrow,
      )
      ctx.closePath()
      ctx.fill()
    }

    function drawNode(node) {
      const point = screenPoint(node)

      const radius = clamp(
        node.radius * scale,
        3.5,
        19,
      )

      const courseHighlighted = matchesCourse(node)
      const selectionHighlighted =
        isInSelectedNeighbourhood(node)

      const colours = node.courses
        .map((course) => COURSE_COLORS[course])
        .filter(Boolean)

      const nodeColours =
        colours.length > 0 ? colours : ["#888888"]

      ctx.save()
      let nodeAlpha =
        courseHighlighted ? 1 : 0.1

      // OSC-QOD-HOVER-SOFT-V1
      // Keep the wider graph visible during hover.
      // Direct neighbours remain prominent while unrelated
      // QODs recede gently instead of disappearing.
      if (selectedNode) {
        nodeAlpha =
          courseHighlighted && selectionHighlighted
            ? 1
            : courseHighlighted
              ? 0.42
              : 0.12
      }

      ctx.globalAlpha = nodeAlpha

      if (nodeColours.length === 1) {
        ctx.beginPath()
        ctx.arc(
          point.x,
          point.y,
          radius,
          0,
          Math.PI * 2,
        )
        ctx.fillStyle = nodeColours[0]
        ctx.fill()
      } else {
        const segment =
          (Math.PI * 2) / nodeColours.length

        nodeColours.forEach((colour, index) => {
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.arc(
            point.x,
            point.y,
            radius,
            -Math.PI / 2 + index * segment,
            -Math.PI / 2 +
              (index + 1) * segment,
          )
          ctx.closePath()
          ctx.fillStyle = colour
          ctx.fill()
        })
      }

      ctx.restore()

      // Keep selected QOD identifiable without altering its course colour.
      if (selectedNode?.id === node.id) {
        ctx.save()
        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.arc(point.x, point.y, radius + 4, 0, Math.PI * 2)
        ctx.strokeStyle = "#F59E0B"
        ctx.lineWidth = 2.5
        ctx.stroke()
        ctx.restore()
      }
    }

    function draw() {
      const ratio = window.devicePixelRatio || 1

      ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0,
      )

      ctx.clearRect(0, 0, width, height)

      for (const link of links) {
        const source = screenPoint(link.source)
        const target = screenPoint(link.target)

        const sourceMatch = matchesCourse(
          link.source,
        )

        const targetMatch = matchesCourse(
          link.target,
        )

        // In a filtered course view, only draw connections
        // whose BOTH endpoint QODs belong to the selected course.
        //
        // This removes "ghost" lines leading from highlighted
        // QODs into faded QODs from other courses.
        if (
          activeCourse &&
          (!sourceMatch || !targetMatch)
        ) {
          continue
        }

        const selectionConnected =
          linkTouchesSelection(link)

        const alpha = selectedNode
          ? selectionConnected
            ? 0.88
            : 0.11
          : activeCourse
            ? 0.42
            : 0.16

        ctx.save()
        ctx.globalAlpha = alpha
        const savedTheme =
          document.documentElement.getAttribute(
            "saved-theme",
          )

        const isDark =
          savedTheme === "dark" ||
          (
            savedTheme !== "light" &&
            window.matchMedia(
              "(prefers-color-scheme: dark)",
            ).matches
          )

        // Deliberately high-contrast:
        // dark charcoal in light mode,
        // bright silver in dark mode.
        ctx.strokeStyle = isDark
          ? "#C9D0D9"
          : "#59616B"

        ctx.fillStyle = ctx.strokeStyle

        ctx.lineWidth = selectedNode
          ? selectionConnected
            ? 1.8
            : 0.65
          : activeCourse
            ? 1
            : 0.75

        ctx.setLineDash([])

        ctx.beginPath()
        ctx.moveTo(source.x, source.y)
        ctx.lineTo(target.x, target.y)
        ctx.stroke()



        ctx.restore()
      }

      for (const node of nodes) {
        drawNode(node)
      }
    }

    function resize() {
      const rect = viewport.getBoundingClientRect()

      width = Math.max(320, rect.width)
      height = Math.max(460, rect.height)

      const ratio = window.devicePixelRatio || 1

      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      simulation.force(
        "center",
        d3.forceCenter(width / 2, height / 2),
      )

      simulation.force(
        "clusterX",
        d3
          .forceX(
            (node) =>
              courseClusterTarget(node).x,
          )
          .strength(0.065),
      )

      simulation.force(
        "clusterY",
        d3
          .forceY(
            (node) =>
              courseClusterTarget(node).y,
          )
          .strength(0.065),
      )

      simulation.alpha(0.45).restart()
      draw()
    }

    function fitGraphToView(animate = false) {
      const positioned = nodes.filter(
        (node) =>
          Number.isFinite(node.x) &&
          Number.isFinite(node.y),
      )

      if (positioned.length === 0) return

      const minX = Math.min(
        ...positioned.map((node) => node.x),
      )

      const maxX = Math.max(
        ...positioned.map((node) => node.x),
      )

      const minY = Math.min(
        ...positioned.map((node) => node.y),
      )

      const maxY = Math.max(
        ...positioned.map((node) => node.y),
      )

      const graphWidth = Math.max(1, maxX - minX)
      const graphHeight = Math.max(1, maxY - minY)

      const padding = 45

      const fitScale = Math.min(
        (width - padding * 2) / graphWidth,
        (height - padding * 2) / graphHeight,
        1.35,
      )

      const centreX = (minX + maxX) / 2
      const centreY = (minY + maxY) / 2

      scale = clamp(fitScale, 0.16, 5)

      offsetX =
        width / 2 - centreX * scale

      offsetY =
        height / 2 - centreY * scale

      draw()
    }

    function resetView() {
      fitGraphToView()
    }

    function setCourse(course) {
      activeCourse = course
      if (selectedNode && course && !matchesCourse(selectedNode)) {
        setSelectedNode(null)
      }

      toolbar
        .querySelectorAll(
          "button[data-qod-course]",
        )
        .forEach((button) => {
          button.classList.toggle(
            "is-active",
            button.dataset.qodCourse ===
              (course ?? "all"),
          )
        })

      if (countLabel) {
        const highlighted = course
          ? nodes.filter((node) =>
              node.courses.includes(course),
            ).length
          : nodes.length

        countLabel.textContent = course
          ? `${highlighted} highlighted · ${nodes.length} total QODs`
          : `${nodes.length} published QODs`
      }

      draw()
    }

    function makeControls() {
      toolbar.replaceChildren()

      const allButton =
        document.createElement("button")

      allButton.type = "button"
      allButton.dataset.qodCourse = "all"
      allButton.className =
        "qod-graph-course-button is-active"
      allButton.textContent = "All"

      allButton.addEventListener("click", () =>
        setCourse(null),
      )

      toolbar.appendChild(allButton)

      for (const course of COURSE_ORDER) {
        if (
          !nodes.some((node) =>
            node.courses.includes(course),
          )
        ) {
          continue
        }

        const button =
          document.createElement("button")

        button.type = "button"
        button.dataset.qodCourse = course
        button.className =
          "qod-graph-course-button"

        const swatch =
          document.createElement("span")

        swatch.className =
          "qod-graph-course-swatch"

        swatch.style.background =
          COURSE_COLORS[course]

        const text = document.createElement("span")
        text.textContent = course

        button.append(swatch, text)

        button.addEventListener("click", () =>
          setCourse(course),
        )

        toolbar.appendChild(button)
      }

      const reset =
        document.createElement("button")

      reset.type = "button"
      reset.className =
        "qod-graph-reset-button"
      reset.textContent = "Reset view"

      reset.addEventListener(
        "click",
        resetView,
      )

      toolbar.appendChild(reset)

      const key = document.createElement("span")
      key.className = "qod-graph-link-key"
      key.textContent =
        "Click a QOD to highlight its direct connections; double-click to open"

      toolbar.appendChild(key)

      setCourse(null)
    }

    function showTooltip(node, event) {
      if (!tooltip) return

      if (!node) {
        tooltip.hidden = true
        return
      }

      tooltip.replaceChildren()

      const title = document.createElement("strong")
      title.textContent = node.name

      const courses = document.createElement("span")
      courses.textContent =
        node.courses.length > 0
          ? node.courses.join(" · ")
          : "QOD"

      tooltip.append(title, courses)

      const rect = viewport.getBoundingClientRect()

      tooltip.style.left =
        `${event.clientX - rect.left + 14}px`

      tooltip.style.top =
        `${event.clientY - rect.top + 14}px`

      tooltip.hidden = false
    }

    function beginPinch() {
      const points = Array.from(
        activePointers.values(),
      ).slice(0, 2)

      if (points.length < 2) {
        pinchStart = null
        return
      }

      const centre = {
        x: (points[0].x + points[1].x) / 2,
        y: (points[0].y + points[1].y) / 2,
      }

      const distance = Math.max(
        1,
        Math.hypot(
          points[1].x - points[0].x,
          points[1].y - points[0].y,
        ),
      )

      const graph = graphPoint(
        centre.x,
        centre.y,
      )

      pinchStart = {
        distance,
        scale,
        graphX: graph.x,
        graphY: graph.y,
      }

      if (dragNode) {
        dragNode.fx = null
        dragNode.fy = null
      }

      dragNode = null
      panning = false
      pointerStart = null
      moved = true

      simulation.alphaTarget(0)
      tooltip && (tooltip.hidden = true)
    }

    function onPointerDown(event) {
      lastPointerType = event.pointerType
      if (event.pointerType === "touch") {
        event.preventDefault()
      }

      const pointer = pointerPosition(event)

      activePointers.set(
        event.pointerId,
        pointer,
      )

      canvas.setPointerCapture(
        event.pointerId,
      )

      if (activePointers.size >= 2) {
        beginPinch()
        return
      }

      pointerStart = {
        x: pointer.x,
        y: pointer.y,
        offsetX,
        offsetY,
      }

      moved = false

      const node = nodeAt(
        pointer.x,
        pointer.y,
      )

      if (node) {
        dragNode = node
        node.fx = node.x
        node.fy = node.y

        simulation
          .alphaTarget(0.18)
          .restart()
      } else {
        panning = true
      }
    }

    function onPointerMove(event) {
      const pointer = pointerPosition(event)

      if (activePointers.has(event.pointerId)) {
        activePointers.set(
          event.pointerId,
          pointer,
        )
      }

      if (
        pinchStart &&
        activePointers.size >= 2
      ) {
        event.preventDefault()

        const points = Array.from(
          activePointers.values(),
        ).slice(0, 2)

        const centre = {
          x: (points[0].x + points[1].x) / 2,
          y: (points[0].y + points[1].y) / 2,
        }

        const distance = Math.max(
          1,
          Math.hypot(
            points[1].x - points[0].x,
            points[1].y - points[0].y,
          ),
        )

        const nextScale = clamp(
          pinchStart.scale *
            (distance / pinchStart.distance),
          0.18,
          5,
        )

        offsetX =
          centre.x -
          pinchStart.graphX * nextScale

        offsetY =
          centre.y -
          pinchStart.graphY * nextScale

        scale = nextScale
        moved = true

        tooltip && (tooltip.hidden = true)
        draw()
        return
      }

      if (pointerStart) {
        const distance = Math.hypot(
          pointer.x - pointerStart.x,
          pointer.y - pointerStart.y,
        )

        if (distance > 3) moved = true
      }

      if (dragNode) {
        const graph = graphPoint(
          pointer.x,
          pointer.y,
        )

        dragNode.fx = graph.x
        dragNode.fy = graph.y

        tooltip && (tooltip.hidden = true)
        return
      }

      if (panning && pointerStart) {
        offsetX =
          pointerStart.offsetX +
          pointer.x -
          pointerStart.x

        offsetY =
          pointerStart.offsetY +
          pointer.y -
          pointerStart.y

        draw()
        tooltip && (tooltip.hidden = true)
        return
      }

      const node = nodeAt(
        pointer.x,
        pointer.y,
      )

      // Hover is informational only; selected connections stay fixed.
      canvas.style.cursor = node ? "pointer" : "grab"
      if (event.pointerType !== "touch") {
        showTooltip(node, event)
      }
    }

    function onPointerUp(event) {
      const pointer = pointerPosition(event)

      const wasPinching =
        pinchStart !== null ||
        activePointers.size > 1

      const clickedNode =
        event.type === "pointerup" &&
        !wasPinching &&
        !moved &&
        dragNode
          ? dragNode
          : event.type === "pointerup" &&
              !wasPinching &&
              !moved
            ? nodeAt(pointer.x, pointer.y)
            : null

      if (dragNode) {
        dragNode.fx = null
        dragNode.fy = null
      }

      dragNode = null

      activePointers.delete(
        event.pointerId,
      )

      try {
        canvas.releasePointerCapture(
          event.pointerId,
        )
      } catch {}

      if (activePointers.size >= 2) {
        beginPinch()
        return
      }

      pinchStart = null

      if (
        wasPinching &&
        activePointers.size === 1
      ) {
        const remaining =
          activePointers.values().next().value

        panning = true

        pointerStart = {
          x: remaining.x,
          y: remaining.y,
          offsetX,
          offsetY,
        }

        moved = true
        simulation.alphaTarget(0)
        return
      }

      panning = false
      pointerStart = null

      if (activePointers.size === 0) {
        simulation.alphaTarget(0)
      }

      // A plain click selects the neighbourhood. Double-click navigation
      // is handled by the separate desktop dblclick listener.
      if (event.type === "pointerup" && !wasPinching && !moved) {
        setSelectedNode(clickedNode)
      }
    }

    function onDoubleClick(event) {
      // Touch screens use the always-visible Open QOD control instead.
      if (lastPointerType === "touch") return
      const pointer = pointerPosition(event)
      const node = nodeAt(pointer.x, pointer.y)
      if (!node) return
      event.preventDefault()
      setSelectedNode(node)
      window.location.href = node.url
    }

    function onWheel(event) {
      event.preventDefault()

      const pointer = pointerPosition(event)

      const before = graphPoint(
        pointer.x,
        pointer.y,
      )

      const factor =
        event.deltaY < 0 ? 1.12 : 0.89

      const nextScale = clamp(
        scale * factor,
        0.18,
        5,
      )

      offsetX =
        pointer.x -
        before.x * nextScale

      offsetY =
        pointer.y -
        before.y * nextScale

      scale = nextScale

      draw()
    }

    function onPointerLeave() {
      // Selection persists until the user clicks another QOD or empty space.
      if (!dragNode && !panning) {
        tooltip && (tooltip.hidden = true)
      }
    }

    canvas.addEventListener(
      "pointerdown",
      onPointerDown,
    )

    canvas.addEventListener(
      "pointermove",
      onPointerMove,
    )

    canvas.addEventListener(
      "pointerup",
      onPointerUp,
    )

    canvas.addEventListener(
      "pointercancel",
      onPointerUp,
    )

    canvas.addEventListener(
      "pointerleave",
      onPointerLeave,
    )

    canvas.addEventListener(
      "wheel",
      onWheel,
      { passive: false },
    )

    canvas.addEventListener("dblclick", onDoubleClick)

    const resizeObserver =
      new ResizeObserver(resize)

    resizeObserver.observe(viewport)

    const themeObserver =
      new MutationObserver(() => {
        draw()
      })

    themeObserver.observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["saved-theme"],
      },
    )

    makeControls()
    resize()

    // Let the force simulation form its initial shape,
    // then frame the complete graph automatically.
    setTimeout(() => {
      if (document.contains(root)) {
        fitGraphToView()
      }
    }, 2400)

    // Re-fit once more after the layout has settled further.
    setTimeout(() => {
      if (document.contains(root)) {
        fitGraphToView()
      }
    }, 5200)

    if (status) {
      status.textContent =
        "Click a QOD to select its connections. Double-click to open the QOD. On touchscreens, tap a QOD and use Open QOD. Click empty space to clear; drag to pan."
    }

    cleanupCurrentGraph = () => {
      selectionPanel.remove()
      resizeObserver.disconnect()
      themeObserver.disconnect()
      simulation.stop()

      canvas.removeEventListener(
        "pointerdown",
        onPointerDown,
      )

      canvas.removeEventListener(
        "pointermove",
        onPointerMove,
      )

      canvas.removeEventListener(
        "pointerup",
        onPointerUp,
      )

      canvas.removeEventListener(
        "pointercancel",
        onPointerUp,
      )

      canvas.removeEventListener(
        "pointerleave",
        onPointerLeave,
      )

      canvas.removeEventListener(
        "wheel",
        onWheel,
      )
      canvas.removeEventListener("dblclick", onDoubleClick)
    }
  }

  document.addEventListener(
    "nav",
    initialiseQodGraph,
  )

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialiseQodGraph,
      { once: true },
    )
  } else {
    initialiseQodGraph()
  }
})()