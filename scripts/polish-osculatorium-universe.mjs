/**
 * OSCULATORIUM UNIVERSE: build-time polish guard.
 * Reapplies the exact visual polish when an older Windows publisher overwrites
 * graph sources. Does not create/remove QODs or alter their relationships,
 * force simulation, input events, or rotation/ambient animation logic.
 * Runs AFTER enforce-osculatorium-universe.cjs in the Pages workflow.
 */
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const paths = {
  graph: path.join(root, 'quartz/static/qod-graph.js'),
  style: path.join(root, 'quartz/styles/qod-graph.scss'),
  builder: path.join(root, 'quartz.ts'),
  page: path.join(root, 'content/QOD Graph.md'),
}
const MARKER = 'OSC-QOD-UNIVERSE-POLISH-V1'
const original = Object.fromEntries(
  Object.entries(paths).map(([key, file]) => [key, fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n')]),
)
const updated = { ...original }

function replaceOnce(file, find, replacement, label) {
  const text = updated[file]
  const first = text.indexOf(find)
  if (first < 0 || text.indexOf(find, first + find.length) >= 0) {
    throw new Error(`Expected exactly one ${label} in ${path.relative(root, paths[file])}. Build stopped.`)
  }
  updated[file] = text.slice(0, first) + replacement + text.slice(first + find.length)
}

function ensurePresent(file, find, label) {
  if (!updated[file].includes(find)) {
    throw new Error(`${label} missing in ${path.relative(root, paths[file])}. Build stopped.`)
  }
}

// Fail closed if an unexpected upstream version replaces the known QOD renderer.
for (const name of [
  'OSC-QOD-INITIAL-FIT-V1',
  'OSC-QOD-CLICK-SELECT-V1',
  'OSC-QOD-UNIVERSE-V1',
  'OSC-QOD-GALAXY-ROTATION-V2',
]) ensurePresent('graph', name, `Required graph feature ${name}`)
ensurePresent('style', 'OSC-QOD-UNIVERSE-V1', 'Original deep-space viewport')

if (!updated.graph.includes(MARKER)) {
  replaceOnce('graph', '    // OSC-QOD-UNIVERSE-V1 â€” entirely decorative, non-interactive scenery.',
    '    // OSC-QOD-UNIVERSE-V1 - entirely decorative, non-interactive scenery.', 'mojibake comment')

  replaceOnce('graph', 'const universeStarfield = Array.from({ length: 126 }, (_, index) => {',
    'const universeStarfield = Array.from({ length: 174 }, (_, index) => {', 'starfield count')

  replaceOnce('graph', `      return {
        x: random(),
        y: random(),
        radius: 0.3 + random() * 0.8,
        alpha: 0.08 + random() * 0.23,
        depth: 0.004 + random() * 0.016,
        phase: random() * Math.PI * 2,
        warm: random() > 0.87,
      }`,
`      // Nearby stars are a little brighter and show more parallax;
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
      }`, 'starfield layering')

  replaceOnce('graph', '        ctx.fillStyle = star.warm ? "#D7BB91" : "#B8CCED"',
    '        ctx.fillStyle = star.warm ? "#E7C99D" : star.tint > 0.76 ? "#C7B8FF" : "#ABCDF4"',
    'starfield depth tint')

  replaceOnce('graph', '    function drawUniverseHalo(point, radius, colour, alpha) {\n',
    '    function drawUniverseHalo(point, radius, colour, alpha, prominence) {\n', 'halo signature')
  replaceOnce('graph', '      const outer = Math.min(36, Math.max(7, radius * 2.85))',
    '      const outer = Math.min(36, Math.max(7, radius * (2.1 + 0.8 * prominence)))',
    'halo size hierarchy')

  replaceOnce('graph', `      // Keep each course colour while making connected QODs read like stars.
      // Neighbourhood highlighting retains priority over decorative light.
      const haloVisibility = selectedNode
        ? selectionHighlighted && courseHighlighted ? 0.34 : 0.022
        : courseHighlighted ? 0.25 : 0.02
      drawUniverseHalo(point, radius, nodeColours[0], haloVisibility)`,
`      // OSC-QOD-UNIVERSE-POLISH-V1
      // Luminosity reflects mathematical connectivity without altering
      // existing node size, course colour, edges, or click hitboxes.
      const connections = degree.get(node.id) ?? 0
      const prominence = Math.min(1, Math.log2(connections + 1) / 4.5)
      const individualVariation =
        0.92 + 0.08 * Math.sin(ambientPhases.get(node.id) ?? 0)
      const haloVisibility = selectedNode
        ? selectionHighlighted && courseHighlighted
          ? (0.19 + 0.23 * prominence) * individualVariation
          : 0.012
        : courseHighlighted
          ? (0.10 + 0.27 * prominence) * individualVariation
          : 0.012
      drawUniverseHalo(point, radius, nodeColours[0], haloVisibility, prominence)`,
    'stellar luminosity')

  replaceOnce('graph', `        ctx.globalAlpha = 0.57
        ctx.fillStyle = "#F9FCFF"
        ctx.beginPath()
        ctx.arc(point.x, point.y, Math.min(1.2, radius * 0.26), 0, Math.PI * 2)`,
`        ctx.globalAlpha = 0.36 + 0.46 * prominence
        ctx.fillStyle = "#F9FCFF"
        ctx.beginPath()
        ctx.arc(point.x, point.y, 0.65 + 0.65 * prominence, 0, Math.PI * 2)`,
    'star core hierarchy')
} else {
  ensurePresent('graph', 'const prominence = Math.min(1, Math.log2(connections + 1) / 4.5)', 'Polished luminosity')
  ensurePresent('graph', 'const universeStarfield = Array.from({ length: 174 }', 'Polished starfield')
}

// Use an ASCII-only CSS Unicode escape: the browser renders U+2726 (✦).
if (!updated.style.includes(MARKER)) {
  const styleLabel = /content:\s*"[^"]*THE OSCULATORIUM UNIVERSE";/g
  const matches = [...updated.style.matchAll(styleLabel)]
  if (matches.length !== 1) throw new Error('Could not isolate the universe viewport label; build stopped.')
  updated.style = updated.style.replace(styleLabel,
    String.raw`content: "\2726  THE OSCULATORIUM UNIVERSE";`)
  updated.style += `\n/* ${MARKER}: ASCII-safe decorative star glyph. */\n`
} else {
  ensurePresent('style', String.raw`content: "\2726  THE OSCULATORIUM UNIVERSE";`, 'Correct star glyph')
}

const oldIntro = 'A playful map of the published QOD collection. Drag the questions around, zoom and pan through the network, and click any node to open the question.'
const newIntro = 'Explore a universe of interconnected mathematical ideas. Each star represents a Question of the Day. Click a star to reveal its connections; double-click to open the question. On touchscreens, select a star and use Open QOD. Drag, pan, and zoom to explore.'
if (updated.builder.includes(oldIntro)) {
  replaceOnce('builder', oldIntro, newIntro, 'QOD Graph introduction')
} else ensurePresent('builder', newIntro, 'Updated universe introduction')

// The source filename and page slug stay the same, preserving existing links.
if (updated.page.includes('title: QOD Graph')) {
  replaceOnce('page', 'title: QOD Graph', 'title: The Osculatorium Universe', 'universe page heading')
} else ensurePresent('page', 'title: The Osculatorium Universe', 'Universe page heading')

// Verify before writing any file. Never silently publish a mismatched graph.
for (const token of [MARKER, 'drawUniverseStarfield()',
  'function graphPoint(x, y)', 'function screenPoint(node)', 'function onDoubleClick(event)',
  'const prominence = Math.min(1, Math.log2(connections + 1) / 4.5)',
  'OSC-QOD-INITIAL-FIT-V1', 'OSC-QOD-GALAXY-ROTATION-V2']) {
  ensurePresent('graph', token, token)
}
ensurePresent('style', String.raw`content: "\2726  THE OSCULATORIUM UNIVERSE";`, 'Unicode-safe identity symbol')
ensurePresent('builder', newIntro, 'Correct student-facing instructions')
ensurePresent('page', 'title: The Osculatorium Universe', 'Universe title')

for (const [key, file] of Object.entries(paths)) {
  if (updated[key] !== original[key]) {
    fs.writeFileSync(file, updated[key], 'utf8')
    console.log(`Polished: ${path.relative(root, file)}`)
  } else {
    console.log(`Verified: ${path.relative(root, file)}`)
  }
}
console.log('Osculatorium Universe polish guard passed.')
