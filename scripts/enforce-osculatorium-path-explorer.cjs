"use strict";
/**
 * OSC-QOD-PATH-EXPLORER-V1
 * Enforce the two-click path explorer in the Osculatorium graph.
 * Run AFTER the Universe and Universe Polish build steps.
 * Designed to be idempotent; fails closed if the graph's source shape changes.
 */
const fs = require('node:fs');
const path = require('node:path');
const graphFile = process.argv[2] || 'quartz/static/qod-graph.js';
const MARKER = 'OSC-QOD-PATH-EXPLORER-V1';
let source = fs.readFileSync(graphFile, 'utf8').replace(/\r\n/g, '\n');

const required = [
  'OSC-QOD-CLICK-SELECT-V1',
  'OSC-QOD-INITIAL-FIT-V1',
  'OSC-QOD-GALAXY-ROTATION-V2',
  'OSC-QOD-UNIVERSE-V1',
  'OSC-QOD-UNIVERSE-POLISH-V1',
];
for (const marker of required) {
  if (!source.includes(marker)) {
    throw new Error(`Missing ${marker} in ${graphFile}; refusing to alter unfamiliar graph code.`);
  }
}

if (source.includes(MARKER)) {
  for (const token of [
    'function shortestRecordedPath(',
    'let destinationNode = null',
    'pathEdgeKeys',
    'function showSelectionPanel()',
    'About this universe & how to explore',
  ]) {
    if (!source.includes(token)) throw new Error(`Incomplete ${MARKER} installation: ${token}`);
  }
  console.log('Two-star path explorer already installed; no change.');
  process.exit(0);
}

function once(oldText, newText, label) {
  const index = source.indexOf(oldText);
  if (index < 0 || source.indexOf(oldText, index + 1) !== -1) {
    throw new Error(`Expected exactly one ${label}; source not written.`);
  }
  source = source.slice(0, index) + newText + source.slice(index + oldText.length);
}
function between(start, end, replacement, label) {
  const i = source.indexOf(start);
  if (i < 0 || source.indexOf(start, i + 1) !== -1) throw Error(`Missing/duplicate ${label} start; nothing written.`);
  const j = source.indexOf(end, i + start.length);
  if (j < 0 || source.indexOf(end, j + 1) !== -1) throw Error(`Missing/duplicate ${label} end; nothing written.`);
  source = source.slice(0, i) + replacement + source.slice(j);
}

once('    let selectedNode = null\n',
`    // ${MARKER}\n    // First click selects a starting star; next clicks change the destination.\n    let selectedNode = null\n    let destinationNode = null\n    let connectingPath = null\n    let pathNodeIds = new Set()\n    let pathEdgeKeys = new Set()\n`, 'selection state');

const help = `    // An unobtrusive explanation lives beneath the universe, not above it.
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
    for (const explanation of guideParagraphs) {
      const paragraph = document.createElement("p")
      paragraph.style.cssText = "margin:0.65rem 0 0;line-height:1.55;font-size:0.91rem"
      paragraph.textContent = explanation
      guide.appendChild(paragraph)
    }
    root.appendChild(guide)

`;
once('    toolbar.insertAdjacentElement("afterend", selectionPanel)\n\n',
 '    toolbar.insertAdjacentElement("afterend", selectionPanel)\n\n'+help, 'collapsible explanation');

const algorithms = `    function pathEdgeKey(a, b) {
      // Delimiter cannot appear in generated QOD slugs.
      return a < b ? a + "\\u0001" + b : b + "\\u0001" + a
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
`;
between('    function isInSelectedNeighbourhood(node) {','    let dragNode = null',algorithms,'pathfinding and highlight functions');

const selection = `    function showSelectionPanel() {
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

`;
between('    function setSelectedNode(node) {', '    // OSC-QOD-AMBIENT-DRIFT-V2', selection, 'selection panel and click logic');

once(`      const haloVisibility = selectedNode
        ? selectionHighlighted && courseHighlighted
          ? (0.19 + 0.23 * prominence) * individualVariation
          : 0.012
        : courseHighlighted
          ? (0.10 + 0.27 * prominence) * individualVariation
          : 0.012`,
`      const haloVisibility = selectedNode
        ? selectionHighlighted
          ? (0.19 + 0.23 * prominence) * individualVariation
          : 0.007
        : courseHighlighted
          ? (0.10 + 0.27 * prominence) * individualVariation
          : 0.012`, 'selected QOD halos');

once(`      if (selectedNode) {
        nodeAlpha =
          courseHighlighted && selectionHighlighted
            ? 1
            : courseHighlighted
              ? 0.42
              : 0.12
      }`,
`      if (selectedNode) {
        nodeAlpha = selectionHighlighted
          ? 1
          : destinationNode ? 0.075 : (courseHighlighted ? 0.24 : 0.09)
      }`, 'unrelated node fading');

once('      if (courseHighlighted && (!selectedNode || selectionHighlighted)) {',
     '      if (selectedNode ? selectionHighlighted : courseHighlighted) {',
     'QOD star cores');

once('      if (selectedNode?.id === node.id) {\n        ctx.save()\n        ctx.globalAlpha = 1\n        ctx.beginPath()',
`      if (selectedNode?.id === node.id || destinationNode?.id === node.id) {
        ctx.save()
        ctx.globalAlpha = 1
        ctx.beginPath()`, 'two endpoint outlines');

once('        ctx.strokeStyle = "#F59E0B"\n        ctx.lineWidth = 2.5',
`        ctx.strokeStyle = destinationNode?.id === node.id ? "#6EE7F9" : "#F59E0B"
        ctx.lineWidth = 2.5`, 'endpoint outline colours');

once(`        // In a filtered course view, only draw connections
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
            : 0.16`,
`        const selectionConnected = linkTouchesSelection(link)

        // Normal course filtering is unchanged; an explicitly selected
        // neighbour or path may cross courses to show a real connection.
        if (activeCourse && (!sourceMatch || !targetMatch) &&
            !(selectedNode && selectionConnected)) {
          continue
        }

        const alpha = selectedNode
          ? selectionConnected ? 0.94 : (destinationNode ? 0.025 : 0.075)
          : activeCourse ? 0.42 : 0.16`, 'course-filter-aware pathway edges');

once(`        ctx.strokeStyle = selectedNode && selectionConnected
          ? "#C9DBFF"
          : "#82A5D3"`,
`        ctx.strokeStyle = selectedNode && selectionConnected
          ? (destinationNode ? "#F5D69B" : "#C9DBFF")
          : "#82A5D3"`, 'pathway edge colours');

once(`        ctx.lineWidth = selectedNode
          ? selectionConnected ? 1.7 : 0.55
          : activeCourse ? 0.95 : 0.75`,
`        ctx.lineWidth = selectedNode
          ? selectionConnected ? (destinationNode ? 2.15 : 1.7) : 0.55
          : activeCourse ? 0.95 : 0.75`, 'pathway edge widths');

once(`          ctx.strokeStyle = "#85B3FF"`,
`          ctx.strokeStyle = destinationNode ? "#EDBB69" : "#85B3FF"`, 'pathway edge halos');

once(`      key.textContent =
        "Click to select a QOD; double-click to open. The network drifts gently when unselected."`,
`      key.textContent =
        "One star: neighbours · Two stars: shortest path · Double-click: open QOD"`, 'toolbar instructions');

once(`      if (status) {
        status.textContent =
          "Click a QOD to select its connections. Double-click to open the QOD. On touchscreens, tap a QOD and use Open QOD. Click empty space to clear; drag to pan."
      }`,
`      if (status) {
        status.textContent =
          "Choose a starting QOD, then a second QOD to trace their shortest recorded path. Click empty space to reset."
      }`, 'post-load instructions');

once('      selectionPanel.remove()\n', '      selectionPanel.remove()\n      guide.remove()\n', 'SPA cleanup');

for (const token of [MARKER, 'function shortestRecordedPath(', 'function showSelectionPanel()',
                      'guide.remove()', 'pathNodeIds.has(node.id)', 'pathEdgeKeys.has(']) {
  if (!source.includes(token)) throw Error(`Final verification failed: missing ${token}`);
}
if (source.includes('const alpha = selectedNode\n          ? selectionConnected\n            ? 0.88')) {
  throw Error('Old edge-highlighting logic remains.');
}
fs.writeFileSync(graphFile, source, 'utf8');
console.log('QOD two-star path explorer ready: shortest routes, disconnected pairs, third-click retargeting, and below-graph guide.');
