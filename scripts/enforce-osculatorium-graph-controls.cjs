'use strict'
// OSC-QOD-GRAPH-CONTROLS-V1
// Build-time patch to keep "Fit Graph" and "Reset All" distinct and reliable.
// The graph's data, relationships, animations, and viewport implementation are untouched.
const fs = require('node:fs')
const file = process.argv[2]
if (!file) throw new Error('Supply quartz/static/qod-graph.js as the argument.')
const marker = 'OSC-QOD-GRAPH-CONTROLS-V1'
const original = fs.readFileSync(file, 'utf8')
const newline = original.includes('\r\n') ? '\r\n' : '\n'
let script = original.replace(/\r\n/g, '\n')
const required = [
  'OSC-QOD-PATH-EXPLORER-V1',
  'OSC-QOD-UNIVERSE-STAGE-V1',
  'OSC-QOD-INITIAL-FIT-V1',
  'function setSelectedNode(node)',
  'function setCourse(course)',
]
for (const token of required) {
  if (!script.includes(token)) throw new Error('Incompatible graph source: ' + token)
}
if (script.includes(marker)) {
  for (const token of [
    'function resetAll() {',
    'reset.textContent = "Fit Graph"',
    'resetAllButton.textContent = "Reset All"',
    'resetAllButton.addEventListener("click", resetAll)',
    'toolbar.appendChild(resetAllButton)',
  ]) {
    if (!script.includes(token)) throw new Error('Incomplete graph-controls installation: ' + token)
  }
  console.log('Graph controls already installed and verified; no change.')
  process.exit(0)
}
function replaceOne(before, after, what) {
  const first = script.indexOf(before)
  if (first < 0 || script.indexOf(before, first + before.length) !== -1) {
    throw new Error('Expected exactly one ' + what + '; refusing to edit graph.')
  }
  script = script.slice(0, first) + after + script.slice(first + before.length)
}
// Preserve existing fitGraphToView and existing filters; compose their public actions.
replaceOne(
  '    function makeControls() {\n',
  `    // ${marker}: reset both endpoints, every highlighted path, the course filter, and the viewport.
    function resetAll() {
      setSelectedNode(null)
      setCourse(null)
      fitGraphToView()
    }

    function makeControls() {\n`,
  'toolbar function',
)
replaceOne(
  '      reset.textContent = "Reset view"\n',
  `      reset.textContent = "Fit Graph"
      reset.title = "Fit the graph to the window; keep the selected QODs and course filter"
`,
  'old reset button label',
)
replaceOne(
  '      toolbar.appendChild(reset)\n\n      const motionButton = document.createElement("button")',
  `      toolbar.appendChild(reset)

      const resetAllButton = document.createElement("button")
      resetAllButton.type = "button"
      resetAllButton.className = "qod-graph-reset-button"
      resetAllButton.textContent = "Reset All"
      resetAllButton.title = "Clear both selected QODs and their path, show all courses, and fit the graph"
      resetAllButton.addEventListener("click", resetAll)
      toolbar.appendChild(resetAllButton)

      const motionButton = document.createElement("button")`,
  'motion button boundary',
)
// Keep the discoverable explanation below the graph consistent with the new controls.
replaceOne(
  '    for (const explanation of guideParagraphs) {\n',
  '    guideParagraphs.push("Fit Graph recentres and zooms the universe without changing your selected QODs or course. Reset All clears selections and highlighted paths, shows every course, and fits the entire universe.")\n    for (const explanation of guideParagraphs) {\n',
  'below-graph guide',
)
for (const token of [
  marker,
  'function resetAll() {',
  'reset.textContent = "Fit Graph"',
  'resetAllButton.textContent = "Reset All"',
  'resetAllButton.addEventListener("click", resetAll)',
  'toolbar.appendChild(resetAllButton)',
  'setSelectedNode(null)\n      setCourse(null)\n      fitGraphToView()',
]) {
  if (!script.includes(token)) throw new Error('Internal patch validation failed: ' + token)
}
if (script.includes('let dragNode = null    let dragNode = null')) {
  throw new Error('Duplicate declaration detected; refusing to save.')
}
fs.writeFileSync(file, newline === '\r\n' ? script.replace(/\n/g, '\r\n') : script, 'utf8')
console.log('Graph controls installed: Fit Graph preserves selection and filters; Reset All clears both.')
