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

    // OSC-QOD-INITIAL-FIT-V1: render the settled, fully fitted network on the very first frame.
    // The force simulation warms up without drawing or exposing interim zoom states.
    let initialLayoutReady = false
    let initialLayoutCancelled = false
    let initialLayoutFrame = 0
    canvas.style.opacity = "0"
    canvas.style.pointerEvents = "none"

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
    // OSC-QOD-PATH-EXPLORER-V1
    // First click selects a starting star; next clicks change the destination.
    let selectedNode = null
    let destinationNode = null
    let connectingPath = null
    let pathNodeIds = new Set()
    let pathEdgeKeys = new Set()
    let lastPointerType = null

    const selectionPanel = document.createElement("div")
    selectionPanel.className = "qod-graph-selected-qod"
    selectionPanel.style.cssText =
      "display:none;align-items:center;flex-wrap:wrap;gap:0.75rem;" +
      "padding:0.8rem 1rem;margin:0.5rem 0 0.85rem;" +
      "border:1px solid var(--lightgray);border-radius:0.65rem;" +
      "background:var(--light);color:var(--dark)"
    toolbar.insertAdjacentElement("afterend", selectionPanel)

    // An unobtrusive explanation lives beneath the universe, not above it.
    selectionPanel.style.order = "5"
    selectionPanel.setAttribute("aria-live", "polite")
    const guide = document.createElement("details")
    guide.className = "qod-graph-guide"
    guide.style.cssText =
      "order:7;max-width:72rem;width:100%;margin:1.2rem 0 1.7rem;" +
      "padding:0.85rem 1rem;border:1px solid var(--lightgray);" +
      "border-radius:0.75rem;color:var(--dark);background:var(--light)"
    const guideHeading = document.createElement("summary")
    guideHeading.style.cssText = "font-weight:600;cursor:pointer"
    guideHeading.textContent = "About this universe & how to explore"
    guide.appendChild(guideHeading)
    const guideParagraphs = [
      "Each star is a published Question of the Day (QOD). Its colour identifies its mathematics course; size and brightness reflect the number of recorded connections. Lines come from the published Review First, Explore Also, and Build Toward sections.",
      "Click a star to illuminate its immediate neighbours. Click a second star to highlight one shortest recorded connection chain, including intermediate QODs. Click another star to keep the first as your starting point and change the destination. Click your starting star again, or click the destination again, to return to its immediate neighbours. Click empty space or Clear selection to reset.",
      "Double-click a star to open its QOD; on touchscreens, select a star and use the Open QOD links. Drag to reposition stars, pan empty space, and scroll or pinch to zoom. A selected path may pass through other courses even when a course filter is active.",
      "Paths use the existing links in either direction, so they reveal documented conceptual connections, not necessarily a recommended learning order. If no route is found, the published collection does not currently record one; the mathematical ideas may still be related.",
    ]
    guideParagraphs.push("Fit Graph recentres and zooms the universe without changing your selected QODs or course. Reset All clears selections and highlighted paths, shows every course, and fits the entire universe.")
    for (const explanation of guideParagraphs) {
      const paragraph = document.createElement("p")
      paragraph.style.cssText = "margin:0.65rem 0 0;line-height:1.55;font-size:0.91rem"
      paragraph.textContent = explanation
      guide.appendChild(paragraph)
    }
    root.appendChild(guide)

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

    function pathEdgeKey(a, b) {
      // Delimiter cannot appear in generated QOD slugs.
      return a < b ? a + "\u0001" + b : b + "\u0001" + a
    }

    function shortestRecordedPath(startId, endId) {
      if (startId === endId) return [startId]
      const seen = new Set([startId])
      const previous = new Map()
      const queue = [startId]
      // Breadth-first search gives the minimum number of recorded links.
      // Sorting ties makes the same QOD pair produce the same path every time.
      for (let cursor = 0; cursor < queue.length; cursor++) {
        const current = queue[cursor]
        const adjacent = Array.from(neighbourIds.get(current) || []).sort(
          (a, b) => (nodeById.get(a)?.name || a).localeCompare(
            nodeById.get(b)?.name || b, undefined,
            { numeric: true, sensitivity: "base" },
          ),
        )
        for (const next of adjacent) {
          if (seen.has(next)) continue
          seen.add(next)
          previous.set(next, current)
          if (next === endId) {
            const route = [endId]
            let step = endId
            while (step !== startId) {
              step = previous.get(step)
              route.unshift(step)
            }
            return route
          }
          queue.push(next)
        }
      }
      return null
    }

    function calculateConnectionPath() {
      connectingPath = null
      pathNodeIds = new Set()
      pathEdgeKeys = new Set()
      if (!selectedNode || !destinationNode) return
      connectingPath = shortestRecordedPath(selectedNode.id, destinationNode.id)
      pathNodeIds = new Set(
        connectingPath || [selectedNode.id, destinationNode.id],
      )
      if (!connectingPath) return
      for (let i = 1; i < connectingPath.length; i++) {
        pathEdgeKeys.add(pathEdgeKey(connectingPath[i - 1], connectingPath[i]))
      }
    }

    function isInSelectedNeighbourhood(node) {
      if (!selectedNode) return true
      if (destinationNode) return pathNodeIds.has(node.id)
      return node.id === selectedNode.id ||
        neighbourIds.get(selectedNode.id)?.has(node.id)
    }

    function linkTouchesSelection(link) {
      if (!selectedNode) return true
      if (destinationNode) {
        return pathEdgeKeys.has(pathEdgeKey(link.source.id, link.target.id))
      }
      return link.source.id === selectedNode.id ||
        link.target.id === selectedNode.id
    }
    let dragNode = null
    let panning = false
    let pointerStart = null
    let moved = false
    const activePointers = new Map()
    let pinchStart = null

    // OSC-QOD-AMBIENT-BREATH-V1
    // Gentle breathing effect; screen-space drift is added after the layout is computed.
    // The ambient effect stops on selection, during pointer gestures, when the
    // graph is offscreen, and whenever reduced motion is requested.
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    )
    let ambientMotionEnabled = true
    let ambientFrame = 0
    let graphVisible = true

    // Stable phases avoid synchronized flashing and retain the same visual
    // rhythm across page loads without storing any student information.
    const ambientPhases = new Map(
      nodes.map((node) => {
        let hash = 0
        for (const character of String(node.id)) {
          hash = (hash * 33 + character.charCodeAt(0)) >>> 0
        }
        return [node.id, (hash % 6283) / 1000]
      }),
    )

    const ambientVisibilityObserver = new IntersectionObserver(
      (entries) => {
        graphVisible = entries.some((entry) => entry.isIntersecting)
      },
      { threshold: 0.01 },
    )
    ambientVisibilityObserver.observe(viewport)

    function updateAmbientButton() {
      const button = toolbar.querySelector('button[data-qod-motion]')
      if (!button) return
      if (reducedMotionQuery.matches) {
        button.textContent = "Reduced motion"
        button.disabled = true
        button.setAttribute("aria-pressed", "false")
        return
      }
      button.disabled = false
      button.textContent = ambientMotionEnabled ? "Pause motion" : "Resume motion"
      button.setAttribute("aria-pressed", String(ambientMotionEnabled))
      button.title = "Toggle gentle node drift and breathing"
    }

    function onAmbientPreferenceChange() {
      ambientFrame = 0
      updateAmbientButton()
      draw()
    }
    reducedMotionQuery.addEventListener?.("change", onAmbientPreferenceChange)

    // About nine redraws per second; this is deliberately far below 60 fps.
    const ambientTimer = window.setInterval(() => {
      if (
        !initialLayoutReady ||
        !ambientMotionEnabled ||
        reducedMotionQuery.matches ||
        document.hidden ||
        !graphVisible ||
        selectedNode ||
        activePointers.size > 0
      ) return
      ambientFrame = performance.now()
      draw()
    }, 110)

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
      .stop()

    function matchesCourse(node) {
      return (
        !activeCourse ||
        node.courses.includes(activeCourse)
      )
    }

    function showSelectionPanel() {
      selectionPanel.replaceChildren()
      if (!selectedNode) {
        selectionPanel.style.display = "none"
        return
      }

      const details = document.createElement("div")
      details.style.cssText = "flex:1 1 250px;min-width:0"
      const name = document.createElement("strong")
      name.style.display = "block"
      name.textContent = destinationNode
        ? selectedNode.name + "  →  " + destinationNode.name
        : selectedNode.name
      const summary = document.createElement("div")
      summary.style.cssText =
        "margin-top:0.3rem;opacity:0.86;font-size:0.86rem;line-height:1.45"

      if (!destinationNode) {
        const neighbours = neighbourIds.get(selectedNode.id)?.size ?? 0
        summary.textContent =
          (selectedNode.courses.join(" · ") || "QOD") + " · " +
          neighbours + (neighbours === 1
            ? " direct connection. Select another star to trace a path."
            : " direct connections. Select another star to trace a path.")
      } else if (!connectingPath) {
        summary.textContent =
          "No recorded connection path between these two QODs. " +
          "The mathematical ideas may still be related."
      } else {
        const hops = connectingPath.length - 1
        const intermediates = Math.max(0, hops - 1)
        summary.textContent =
          "Shortest recorded path: " + hops +
          (hops === 1 ? " connection" : " connections") + " · " +
          intermediates +
          (intermediates === 1 ? " intermediate QOD" : " intermediate QODs")
        const chain = document.createElement("div")
        chain.style.cssText =
          "margin-top:0.35rem;overflow-wrap:anywhere;font-size:0.83rem;opacity:0.84"
        chain.textContent = connectingPath.map(
          (id) => nodeById.get(id)?.name || id,
        ).join(" → ")
        details.append(name, summary, chain)
      }
      if (!details.hasChildNodes()) details.append(name, summary)

      const makeOpenLink = (node, label) => {
        const open = document.createElement("a")
        open.href = node.url
        open.textContent = label
        open.style.cssText =
          "display:inline-block;padding:0.4rem 0.7rem;" +
          "border-radius:0.4rem;background:var(--secondary);" +
          "color:var(--light);text-decoration:none;font-weight:600;font-size:0.85rem"
        open.setAttribute("aria-label", "Open " + node.name)
        return open
      }

      const clear = document.createElement("button")
      clear.type = "button"
      clear.textContent = "Clear selection"
      clear.className = "qod-graph-reset-button"
      clear.addEventListener("click", () => setSelectedNode(null))

      selectionPanel.appendChild(details)
      selectionPanel.appendChild(makeOpenLink(
        selectedNode, destinationNode ? "Open starting QOD" : "Open QOD",
      ))
      if (destinationNode) {
        selectionPanel.appendChild(makeOpenLink(destinationNode, "Open destination QOD"))
      }
      selectionPanel.appendChild(clear)
      selectionPanel.style.display = "flex"
    }

    function setSelectedNode(node) {
      if (!node) {
        selectedNode = null
        destinationNode = null
      } else if (!selectedNode) {
        selectedNode = node
        destinationNode = null
      } else if (selectedNode.id === node.id || destinationNode?.id === node.id) {
        // Clicking either endpoint again returns to the first QOD's neighbours.
        destinationNode = null
      } else {
        // Third and later clicks replace only the destination.
        destinationNode = node
      }
      calculateConnectionPath()
      showSelectionPanel()
      draw()
    }

    // OSC-QOD-AMBIENT-DRIFT-V2
    // A few canvas pixels of breathing drift; underlying graph coordinates
    // and all QOD relationships remain untouched. The edges use this same
    // function, so they stay connected to their moving endpoints.
    function ambientIsActive() {
      return (
        ambientFrame > 0 &&
        ambientMotionEnabled &&
        !reducedMotionQuery.matches &&
        !selectedNode &&
        graphVisible &&
        !document.hidden
      )
    }

    // OSC-QOD-GALAXY-ROTATION-V2
    // One slow revolution in 25 minutes. Rotate only the rendered positions;
    // the underlying QOD coordinates and links are never changed.
    const GALAXY_RADIANS_PER_MS = Math.PI * 2 / (25 * 60 * 1000)
    let galaxyAngle = 0
    let galaxyLastTime = performance.now()
    let galaxyWorldCenterX = width / 2
    let galaxyWorldCenterY = height / 2
    let galaxyPivotX = width / 2
    let galaxyPivotY = height / 2

    function galaxyPaused() {
      return (
        !ambientMotionEnabled ||
        reducedMotionQuery.matches ||
        document.hidden ||
        !graphVisible ||
        !!selectedNode ||
        activePointers.size > 0 ||
        !!dragNode ||
        !!panning ||
        (typeof initialLayoutReady !== "undefined" && !initialLayoutReady)
      )
    }

    function advanceGalaxyRotation() {
      const now = performance.now()
      // Avoid a large time jump after tab suspension or a long pause.
      const elapsed = Math.min(160, Math.max(0, now - galaxyLastTime))
      galaxyLastTime = now
      if (!galaxyPaused()) {
        galaxyAngle = (galaxyAngle + elapsed * GALAXY_RADIANS_PER_MS) % (2 * Math.PI)
      }
    }

    function updateGalaxyPivot() {
      let minX = Infinity
      let maxX = -Infinity
      let minY = Infinity
      let maxY = -Infinity
      for (const node of nodes) {
        if (!Number.isFinite(node.x) || !Number.isFinite(node.y)) continue
        minX = Math.min(minX, node.x)
        maxX = Math.max(maxX, node.x)
        minY = Math.min(minY, node.y)
        maxY = Math.max(maxY, node.y)
      }
      if (!Number.isFinite(minX)) return
      galaxyWorldCenterX = (minX + maxX) / 2
      galaxyWorldCenterY = (minY + maxY) / 2
      galaxyPivotX = galaxyWorldCenterX * scale + offsetX
      galaxyPivotY = galaxyWorldCenterY * scale + offsetY
    }

    function rotateScreenPoint(x, y, angle) {
      if (angle === 0) return { x, y }
      const cosine = Math.cos(angle)
      const sine = Math.sin(angle)
      const dx = x - galaxyPivotX
      const dy = y - galaxyPivotY
      return {
        x: galaxyPivotX + dx * cosine - dy * sine,
        y: galaxyPivotY + dx * sine + dy * cosine,
      }
    }

    // Edges, dots and pointer hit tests all use this same projection.
    function screenPoint(node) {
      const point = unrotatedScreenPoint(node)
      return rotateScreenPoint(point.x, point.y, galaxyAngle)
    }

    // Convert clicks and drag positions back into the original graph space.
    function graphPoint(x, y) {
      const point = rotateScreenPoint(x, y, -galaxyAngle)
      return unrotatedGraphPoint(point.x, point.y)
    }

    // Preserve the cursor as the zoom anchor even with a rotated network.
    function setGalaxyZoomOffset(graphX, graphY, x, y, nextScale) {
      const dx = graphX - galaxyWorldCenterX
      const dy = graphY - galaxyWorldCenterY
      const cosine = Math.cos(galaxyAngle)
      const sine = Math.sin(galaxyAngle)
      offsetX = x - (
        galaxyWorldCenterX + dx * cosine - dy * sine
      ) * nextScale
      offsetY = y - (
        galaxyWorldCenterY + dx * sine + dy * cosine
      ) * nextScale
    }

    function unrotatedScreenPoint(node) {
      const x = node.x * scale + offsetX
      const y = node.y * scale + offsetY

      if (!ambientIsActive()) return { x, y }

      const phase = ambientPhases.get(node.id) ?? 0
      return {
        x: x + 3.1 * Math.sin(ambientFrame / 3200 + phase),
        y: y + 3.1 * Math.cos(ambientFrame / 3900 + phase * 1.43),
      }
    }

    function unrotatedGraphPoint(x, y) {
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
      // Hit-test the actual rendered dots, including their very small drift.
      // This keeps selecting/double-clicking accurate without touching the
      // simulation positions or any pointer gesture state.
      let closest = null
      let closestDistance = Infinity

      for (const node of nodes) {
        const point = screenPoint(node)
        const radius = clamp(node.radius * scale, 4, 20)
        const distance = Math.hypot(point.x - x, point.y - y)
        if (distance <= radius + 5 && distance < closestDistance) {
          closest = node
          closestDistance = distance
        }
      }

      return closest
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

    // OSC-QOD-UNIVERSE-V1 - entirely decorative, non-interactive scenery.
    // Deterministic star positions mean the sky does not jump on redraw.
    // The decorative stars never enter QOD hit testing or relationship data.
    const universeStarfield = Array.from({ length: 174 }, (_, index) => {
      let seed = (Math.imul(index + 23, 2654435761) >>> 0)
      const random = () => {
        seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
        return seed / 4294967296
      }
      // Nearby stars are a little brighter and show more parallax;
      // distant stars stay small and faint. Neither layer is interactive.
      const apparentDepth = random()
      return {
        x: random(),
        y: random(),
        radius: apparentDepth < 0.76
          ? 0.28 + random() * 0.42
          : 0.65 + random() * 0.66,
        alpha: apparentDepth < 0.76
          ? 0.08 + random() * 0.14
          : 0.19 + random() * 0.19,
        depth: 0.005 + apparentDepth * 0.052,
        phase: random() * Math.PI * 2,
        warm: random() > 0.88,
        tint: random(),
      }
    })

    function drawUniverseStarfield() {
      const shimmer = ambientIsActive() ? ambientFrame : 0
      const parallaxX = offsetX - width / 2
      const parallaxY = offsetY - height / 2
      ctx.save()
      for (const star of universeStarfield) {
        // Screen-space parallax: the far background moves less than the QODs.
        const x = ((star.x * width + parallaxX * star.depth) % width + width) % width
        const y = ((star.y * height + parallaxY * star.depth) % height + height) % height
        const twinkle = shimmer > 0
          ? 0.92 + 0.08 * Math.sin(shimmer / 5700 + star.phase)
          : 1
        ctx.globalAlpha = star.alpha * twinkle * (selectedNode ? 0.65 : 1)
        ctx.fillStyle = star.warm ? "#E7C99D" : star.tint > 0.76 ? "#C7B8FF" : "#ABCDF4"
        ctx.beginPath()
        ctx.arc(x, y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    function drawUniverseHalo(point, radius, colour, alpha, prominence) {
      if (alpha <= 0) return
      const outer = Math.min(36, Math.max(7, radius * (2.1 + 0.8 * prominence)))
      const halo = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, outer,
      )
      halo.addColorStop(0, "#F4F8FF")
      halo.addColorStop(0.19, colour)
      halo.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(point.x, point.y, outer, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
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

      // OSC-QOD-UNIVERSE-POLISH-V1
      // Luminosity reflects mathematical connectivity without altering
      // existing node size, course colour, edges, or click hitboxes.
      const connections = degree.get(node.id) ?? 0
      const prominence = Math.min(1, Math.log2(connections + 1) / 4.5)
      const individualVariation =
        0.92 + 0.08 * Math.sin(ambientPhases.get(node.id) ?? 0)
      const haloVisibility = selectedNode
        ? selectionHighlighted
          ? (0.19 + 0.23 * prominence) * individualVariation
          : 0.007
        : courseHighlighted
          ? (0.10 + 0.27 * prominence) * individualVariation
          : 0.012
      drawUniverseHalo(point, radius, nodeColours[0], haloVisibility, prominence)

      // More visible breathing halo, synchronized to the subtle screen-space
      // drift; dots and edges move together and remain easy to trace.
      if (ambientIsActive()) {
        const phase = ambientPhases.get(node.id) ?? 0
        const breathe = 0.5 + 0.5 * Math.sin(ambientFrame / 2200 + phase)
        ctx.save()
        ctx.globalAlpha =
          (courseHighlighted ? 1 : 0.12) * (0.075 + 0.11 * breathe)
        ctx.fillStyle = nodeColours[0]
        ctx.beginPath()
        ctx.arc(
          point.x,
          point.y,
          radius + 2.5 + 1.7 * breathe,
          0,
          Math.PI * 2,
        )
        ctx.fill()
        ctx.restore()
      }

      ctx.save()
      let nodeAlpha =
        courseHighlighted ? 1 : 0.1

      // OSC-QOD-HOVER-SOFT-V1
      // Keep the wider graph visible during hover.
      // Direct neighbours remain prominent while unrelated
      // QODs recede gently instead of disappearing.
      if (selectedNode) {
        nodeAlpha = selectionHighlighted
          ? 1
          : destinationNode ? 0.075 : (courseHighlighted ? 0.24 : 0.09)
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

      // A restrained pinpoint core gives each visible QOD a stellar sparkle.
      if (selectedNode ? selectionHighlighted : courseHighlighted) {
        ctx.save()
        ctx.globalAlpha = 0.36 + 0.46 * prominence
        ctx.fillStyle = "#F9FCFF"
        ctx.beginPath()
        ctx.arc(point.x, point.y, 0.65 + 0.65 * prominence, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // Keep selected QOD identifiable without altering its course colour.
      if (selectedNode?.id === node.id || destinationNode?.id === node.id) {
        ctx.save()
        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.arc(point.x, point.y, radius + 4, 0, Math.PI * 2)
        ctx.strokeStyle = destinationNode?.id === node.id ? "#6EE7F9" : "#F59E0B"
        ctx.lineWidth = 2.5
        ctx.stroke()
        ctx.restore()
      }
    }

    function draw() {
      advanceGalaxyRotation()
      updateGalaxyPivot()
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

      // Scenery is always behind graph relationships and QOD stars.
      drawUniverseStarfield()

      for (const link of links) {
        const source = screenPoint(link.source)
        const target = screenPoint(link.target)

        const sourceMatch = matchesCourse(
          link.source,
        )

        const targetMatch = matchesCourse(
          link.target,
        )

        const selectionConnected = linkTouchesSelection(link)

        // Normal course filtering is unchanged; an explicitly selected
        // neighbour or path may cross courses to show a real connection.
        if (activeCourse && (!sourceMatch || !targetMatch) &&
            !(selectedNode && selectionConnected)) {
          continue
        }

        const alpha = selectedNode
          ? selectionConnected ? 0.94 : (destinationNode ? 0.025 : 0.075)
          : activeCourse ? 0.42 : 0.16

        ctx.save()
        ctx.globalAlpha = alpha
        // Star-map lines work on a dark universe in BOTH page themes.
        ctx.strokeStyle = selectedNode && selectionConnected
          ? (destinationNode ? "#F5D69B" : "#C9DBFF")
          : "#82A5D3"
        ctx.fillStyle = ctx.strokeStyle
        ctx.lineWidth = selectedNode
          ? selectionConnected ? (destinationNode ? 2.15 : 1.7) : 0.55
          : activeCourse ? 0.95 : 0.75

        ctx.setLineDash([])

        ctx.beginPath()
        ctx.moveTo(source.x, source.y)
        ctx.lineTo(target.x, target.y)
        // The chosen mathematical constellation gets a soft luminous trail.
        if (selectedNode && selectionConnected) {
          ctx.save()
          ctx.globalAlpha = 0.20
          ctx.lineWidth = 4
          ctx.strokeStyle = destinationNode ? "#EDBB69" : "#85B3FF"
          ctx.stroke()
          ctx.restore()
        }
        ctx.stroke()



        ctx.restore()
      }

      for (const node of nodes) {
        drawNode(node)
      }
    }

    // OSC-QOD-UNIVERSE-STAGE-V1: only reframe when dimensions actually change.
    let universeStageOpen = false
    let universeStageReturnView = null
    let universeStageRestoreView = null

    function resize() {
      const rect = viewport.getBoundingClientRect()
      const previousWidth = width
      const previousHeight = height

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

      // The initial layout is prepared offscreen. Subsequent viewport changes
      // only reframe the same settled coordinates, without restarting the forces.
      if (initialLayoutReady) {
        if (universeStageRestoreView && !universeStageOpen) {
          // Restore the teacher's exact previous zoom/pan on closing.
          const old = universeStageRestoreView
          universeStageRestoreView = null
          scale = old.scale
          offsetX = old.offsetX + (width - old.width) / 2
          offsetY = old.offsetY + (height - old.height) / 2
          draw()
        } else if (
          Math.abs(width - previousWidth) > 0.5 ||
          Math.abs(height - previousHeight) > 0.5
        ) {
          fitGraphToView()
        } else {
          draw()
        }
      }
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

    // OSC-QOD-GRAPH-CONTROLS-V1: reset both endpoints, every highlighted path, the course filter, and the viewport.
    function resetAll() {
      setSelectedNode(null)
      setCourse(null)
      fitGraphToView()
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
      reset.textContent = "Fit Graph"
      reset.title = "Fit the graph to the window; keep the selected QODs and course filter"

      reset.addEventListener(
        "click",
        resetView,
      )

      toolbar.appendChild(reset)

      const resetAllButton = document.createElement("button")
      resetAllButton.type = "button"
      resetAllButton.className = "qod-graph-reset-button"
      resetAllButton.textContent = "Reset All"
      resetAllButton.title = "Clear both selected QODs and their path, show all courses, and fit the graph"
      resetAllButton.addEventListener("click", resetAll)
      toolbar.appendChild(resetAllButton)

      const motionButton = document.createElement("button")
      motionButton.type = "button"
      motionButton.className = "qod-graph-reset-button"
      motionButton.dataset.qodMotion = "true"
      motionButton.addEventListener("click", () => {
        ambientMotionEnabled = !ambientMotionEnabled
        if (!ambientMotionEnabled) ambientFrame = 0
        updateAmbientButton()
        draw()
      })
      toolbar.appendChild(motionButton)
      updateAmbientButton()

      const key = document.createElement("span")
      key.className = "qod-graph-link-key"
      key.textContent =
        "One star: neighbours · Two stars: shortest path · Double-click: open QOD"

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

        setGalaxyZoomOffset(
          pinchStart.graphX, pinchStart.graphY,
          centre.x, centre.y, nextScale,
        )

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

      setGalaxyZoomOffset(
        before.x, before.y, pointer.x, pointer.y, nextScale,
      )

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

    // OSC-QOD-UNIVERSE-STAGE-V1: present the *same* interactive graph in a native modal.
    // Moving the existing root keeps hit tests, selected paths and zoom tools live.
    const universeStageAnchor = document.createComment("Osculatorium graph position")
    const universeStageDialog = document.createElement("dialog")
    universeStageDialog.className = "qod-universe-stage-dialog"
    universeStageDialog.setAttribute("aria-label", "The Osculatorium Universe presentation")

    const universeStageToggle = document.createElement("button")
    universeStageToggle.type = "button"
    universeStageToggle.className = "qod-universe-stage-toggle"
    universeStageToggle.textContent = "Expand graph"
    universeStageToggle.title = "Fill the browser window with the interactive universe"
    universeStageToggle.setAttribute("aria-haspopup", "dialog")
    universeStageToggle.setAttribute("aria-expanded", "false")
    viewport.appendChild(universeStageToggle)

    function restoreUniverseStage() {
      if (!universeStageOpen) return
      universeStageOpen = false
      if (universeStageAnchor.parentNode) {
        universeStageAnchor.replaceWith(root)
      }
      universeStageDialog.remove()
      universeStageRestoreView = universeStageReturnView
      universeStageReturnView = null
      universeStageToggle.textContent = "Expand graph"
      universeStageToggle.title = "Fill the browser window with the interactive universe"
      universeStageToggle.setAttribute("aria-expanded", "false")
      requestAnimationFrame(() => {
        if (!document.contains(root)) return
        resize()
        universeStageToggle.focus({ preventScroll: true })
      })
    }

    function openUniverseStage() {
      if (universeStageOpen) return
      universeStageReturnView = { width, height, scale, offsetX, offsetY }
      universeStageOpen = true
      root.before(universeStageAnchor)
      universeStageDialog.appendChild(root)
      document.body.appendChild(universeStageDialog)
      try {
        universeStageDialog.showModal()
      } catch (error) {
        restoreUniverseStage()
        throw error
      }
      universeStageToggle.textContent = "\u00D7 Close"
      universeStageToggle.title = "Return to the ordinary graph (Esc)"
      universeStageToggle.setAttribute("aria-expanded", "true")
      requestAnimationFrame(() => {
        if (universeStageDialog.open) resize()
        universeStageToggle.focus({ preventScroll: true })
      })
    }

    function closeUniverseStage() {
      if (!universeStageOpen) return
      if (universeStageDialog.open) universeStageDialog.close()
      restoreUniverseStage()
    }

    universeStageToggle.addEventListener("click", () => {
      if (universeStageOpen) closeUniverseStage()
      else openUniverseStage()
    })
    // Native dialog Escape handling, including the browser's focus trap.
    universeStageDialog.addEventListener("close", restoreUniverseStage)

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

    if (status) {
      status.textContent = "Arranging the QOD universe..."
    }

    // Pre-compute a settled D3 force layout before the first visible frame.
    // d3.simulation.tick(n) moves the nodes without firing "tick" draw events,
    // so no intermediate layout or automatic zoom-out is ever rendered.
    simulation.alpha(1).stop()
    const initialTickTarget = 360
    const initialTicksPerFrame = 12
    let initialTicksCompleted = 0

    const finishInitialView = () => {
      if (initialLayoutCancelled || !document.contains(root)) return
      simulation.stop()
      initialLayoutReady = true
      fitGraphToView()
      canvas.style.transition = reducedMotionQuery.matches
        ? "none"
        : "opacity 280ms ease-out"
      canvas.style.pointerEvents = "auto"
      canvas.style.opacity = "1"
      if (status) {
        status.textContent =
          "Choose a starting QOD, then a second QOD to trace their shortest recorded path. Click empty space to reset."
      }
    }

    const prepareInitialView = () => {
      if (initialLayoutCancelled || !document.contains(root)) return
      try {
        const remaining = initialTickTarget - initialTicksCompleted
        simulation.tick(Math.min(initialTicksPerFrame, remaining))
        initialTicksCompleted += Math.min(initialTicksPerFrame, remaining)
        if (initialTicksCompleted < initialTickTarget) {
          initialLayoutFrame = requestAnimationFrame(prepareInitialView)
        } else {
          finishInitialView()
        }
      } catch (error) {
        console.error("Unable to pre-compute the QOD graph layout:", error)
        if (status) status.textContent = "The graph opened with a fallback layout."
        // Recover visibly rather than leaving the canvas hidden after an error.
        finishInitialView()
      }
    }

    initialLayoutFrame = requestAnimationFrame(prepareInitialView)

    cleanupCurrentGraph = () => {
      initialLayoutCancelled = true
      cancelAnimationFrame(initialLayoutFrame)
      window.clearInterval(ambientTimer)
      ambientVisibilityObserver.disconnect()
      reducedMotionQuery.removeEventListener?.("change", onAmbientPreferenceChange)
      if (universeStageOpen) closeUniverseStage()
      universeStageToggle.remove()
      universeStageDialog.remove()
      universeStageAnchor.remove()
      selectionPanel.remove()
      guide.remove()
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