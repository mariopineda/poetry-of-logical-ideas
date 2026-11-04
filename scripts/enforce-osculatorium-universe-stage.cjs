'use strict';
// OSC-QOD-UNIVERSE-STAGE-V1
// Restores a browser-window graph presentation view after older local publishes.
// Operates on the existing canvas and D3 simulation; no QOD or edge data changes.
const fs = require('node:fs');
const [graphPath, stylesheetPath] = process.argv.slice(2);
if (!graphPath || !stylesheetPath) {
  throw new Error('Specify graph JS and SCSS source paths.');
}
const marker = 'OSC-QOD-UNIVERSE-STAGE-V1';
const originalGraph = fs.readFileSync(graphPath, 'utf8');
const originalStyles = fs.readFileSync(stylesheetPath, 'utf8');
const source = originalGraph.replace(/\r\n/g, '\n');
const styles = originalStyles.replace(/\r\n/g, '\n');

function assertSingle(haystack, needle, label) {
  const first = haystack.indexOf(needle);
  if (first < 0 || haystack.indexOf(needle, first + needle.length) !== -1) {
    throw new Error('Expected exactly one ' + label + ' in the current v5 source. No file changed.');
  }
}
function replaceSingle(haystack, needle, replacement, label) {
  assertSingle(haystack, needle, label);
  return haystack.replace(needle, replacement);
}

if (source.includes(marker) || styles.includes(marker)) {
  if (!source.includes(marker) || !styles.includes(marker)) {
    throw new Error('Only one of the graph and stylesheet has the stage patch. Refusing a partial installation.');
  }
  for (const required of [
    'function openUniverseStage()',
    'function closeUniverseStage()',
    'universeStageRestoreView',
    'universe-stage-toggle',
  ]) {
    if (!source.includes(required)) throw new Error('An incomplete stage implementation is present: ' + required);
  }
  new Function(source);
  console.log('Universe presentation mode already installed; syntax verified.');
  process.exit(0);
}
for (const feature of [
  'OSC-QOD-INITIAL-FIT-V1',
  'OSC-QOD-CLICK-SELECT-V1',
  'OSC-QOD-PATH-EXPLORER-V1',
  'OSC-QOD-GALAXY-ROTATION-V2',
  'OSC-QOD-UNIVERSE-V1',
]) {
  if (!source.includes(feature)) throw new Error('Expected current v5 graph feature is missing: ' + feature);
}

let graph = source;
graph = replaceSingle(
  graph,
  '    function resize() {\n      const rect = viewport.getBoundingClientRect()\n\n',
  `    // ${marker}: only reframe when dimensions actually change.\n    let universeStageOpen = false\n    let universeStageReturnView = null\n    let universeStageRestoreView = null\n\n    function resize() {\n      const rect = viewport.getBoundingClientRect()\n      const previousWidth = width\n      const previousHeight = height\n\n`,
  'resize entry',
);

graph = replaceSingle(
  graph,
  '      if (initialLayoutReady) fitGraphToView()\n',
  `      if (initialLayoutReady) {\n        if (universeStageRestoreView && !universeStageOpen) {\n          // Restore the teacher's exact previous zoom/pan on closing.\n          const old = universeStageRestoreView\n          universeStageRestoreView = null\n          scale = old.scale\n          offsetX = old.offsetX + (width - old.width) / 2\n          offsetY = old.offsetY + (height - old.height) / 2\n          draw()\n        } else if (\n          Math.abs(width - previousWidth) > 0.5 ||\n          Math.abs(height - previousHeight) > 0.5\n        ) {\n          fitGraphToView()\n        } else {\n          draw()\n        }\n      }\n`,
  'resize post-layout rule',
);

const stageCode = `    // ${marker}: present the *same* interactive graph in a native modal.\n    // Moving the existing root keeps hit tests, selected paths and zoom tools live.\n    const universeStageAnchor = document.createComment("Osculatorium graph position")\n    const universeStageDialog = document.createElement("dialog")\n    universeStageDialog.className = "qod-universe-stage-dialog"\n    universeStageDialog.setAttribute("aria-label", "The Osculatorium Universe presentation")\n\n    const universeStageToggle = document.createElement("button")\n    universeStageToggle.type = "button"\n    universeStageToggle.className = "qod-universe-stage-toggle"\n    universeStageToggle.textContent = "Expand graph"\n    universeStageToggle.title = "Fill the browser window with the interactive universe"\n    universeStageToggle.setAttribute("aria-haspopup", "dialog")\n    universeStageToggle.setAttribute("aria-expanded", "false")\n    viewport.appendChild(universeStageToggle)\n\n    function restoreUniverseStage() {\n      if (!universeStageOpen) return\n      universeStageOpen = false\n      if (universeStageAnchor.parentNode) {\n        universeStageAnchor.replaceWith(root)\n      }\n      universeStageDialog.remove()\n      universeStageRestoreView = universeStageReturnView\n      universeStageReturnView = null\n      universeStageToggle.textContent = "Expand graph"\n      universeStageToggle.title = "Fill the browser window with the interactive universe"\n      universeStageToggle.setAttribute("aria-expanded", "false")\n      requestAnimationFrame(() => {\n        if (!document.contains(root)) return\n        resize()\n        universeStageToggle.focus({ preventScroll: true })\n      })\n    }\n\n    function openUniverseStage() {\n      if (universeStageOpen) return\n      universeStageReturnView = { width, height, scale, offsetX, offsetY }\n      universeStageOpen = true\n      root.before(universeStageAnchor)\n      universeStageDialog.appendChild(root)\n      document.body.appendChild(universeStageDialog)\n      try {\n        universeStageDialog.showModal()\n      } catch (error) {\n        restoreUniverseStage()\n        throw error\n      }\n      universeStageToggle.textContent = "\\u00D7 Close"\n      universeStageToggle.title = "Return to the ordinary graph (Esc)"\n      universeStageToggle.setAttribute("aria-expanded", "true")\n      requestAnimationFrame(() => {\n        if (universeStageDialog.open) resize()\n        universeStageToggle.focus({ preventScroll: true })\n      })\n    }\n\n    function closeUniverseStage() {\n      if (!universeStageOpen) return\n      if (universeStageDialog.open) universeStageDialog.close()\n      restoreUniverseStage()\n    }\n\n    universeStageToggle.addEventListener("click", () => {\n      if (universeStageOpen) closeUniverseStage()\n      else openUniverseStage()\n    })\n    // Native dialog Escape handling, including the browser's focus trap.\n    universeStageDialog.addEventListener("close", restoreUniverseStage)\n\n`;

graph = replaceSingle(
  graph,
  '    const resizeObserver =\n      new ResizeObserver(resize)\n',
  stageCode + '    const resizeObserver =\n      new ResizeObserver(resize)\n',
  'canvas ResizeObserver installation',
);

graph = replaceSingle(
  graph,
  '      selectionPanel.remove()\n      guide.remove()\n',
  '      if (universeStageOpen) closeUniverseStage()\n      universeStageToggle.remove()\n      universeStageDialog.remove()\n      universeStageAnchor.remove()\n      selectionPanel.remove()\n      guide.remove()\n',
  'graph cleanup',
);

const newStyles = `\n/* ${marker}: classroom projection without leaving the QOD universe page. */\n.qod-graph-viewport .qod-universe-stage-toggle {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 12;\n  border: 1px solid rgba(170, 197, 240, 0.58);\n  border-radius: 0.55rem;\n  background: rgba(14, 29, 54, 0.90);\n  color: #f0f6ff;\n  padding: 0.44rem 0.72rem;\n  font: inherit;\n  font-size: 0.82rem;\n  font-weight: 650;\n  cursor: pointer;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.28);\n  backdrop-filter: blur(6px);\n}\n.qod-graph-viewport .qod-universe-stage-toggle:hover,\n.qod-graph-viewport .qod-universe-stage-toggle:focus-visible {\n  background: #28436d;\n  border-color: #c4d8fc;\n}\n.qod-universe-stage-dialog[open] {\n  box-sizing: border-box;\n  position: fixed;\n  inset: 0;\n  width: 100vw;\n  height: 100vh;\n  height: 100dvh;\n  max-width: none;\n  max-height: none;\n  padding: clamp(7px, 1.2vw, 16px);\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n  background: #071020;\n  color: #f0f6ff;\n  overflow: hidden;\n}\n.qod-universe-stage-dialog::backdrop {\n  background: rgba(0, 0, 0, 0.86);\n}\n.qod-universe-stage-dialog .qod-graph-page {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n  margin: 0;\n  padding: 0;\n}\n.qod-universe-stage-dialog .qod-graph-intro,\n.qod-universe-stage-dialog .qod-graph-meta,\n.qod-universe-stage-dialog .qod-graph-status,\n.qod-universe-stage-dialog .qod-graph-guide {\n  display: none !important;\n}\n.qod-universe-stage-dialog .qod-graph-viewport {\n  flex: 1 1 0 !important;\n  min-height: 0 !important;\n  height: auto !important;\n  max-height: none !important;\n  border-radius: 10px;\n}\n.qod-universe-stage-dialog .qod-graph-toolbar {\n  flex: 0 0 auto;\n  order: 4;\n  display: flex;\n  justify-content: center;\n  margin: 6px 0 0;\n  padding: 4px 6px;\n  max-height: 17vh;\n  overflow-y: auto;\n  color: #e4efff;\n}\n.qod-universe-stage-dialog .qod-graph-course-button,\n.qod-universe-stage-dialog .qod-graph-reset-button {\n  background: #172842;\n  border-color: #4a6389;\n  color: #e9f2ff;\n}\n.qod-universe-stage-dialog .qod-graph-course-button.is-active,\n.qod-universe-stage-dialog .qod-graph-course-button:hover,\n.qod-universe-stage-dialog .qod-graph-reset-button:hover {\n  background: #294767;\n  border-color: #88acd9;\n}\n.qod-universe-stage-dialog .qod-graph-link-key {\n  color: #bacde7;\n}\n.qod-universe-stage-dialog .qod-graph-selected-qod {\n  order: 5;\n  flex: 0 0 auto;\n  max-height: 23vh;\n  overflow-y: auto;\n  margin: 5px 0 0 !important;\n  padding: 7px 12px !important;\n  border-color: #435a80 !important;\n  background: #14233b !important;\n  color: #f1f6ff !important;\n}\n.qod-universe-stage-dialog .qod-graph-selected-qod a {\n  background: #326596 !important;\n  color: #fff !important;\n}\n@media (max-width: 600px) {\n  .qod-graph-viewport .qod-universe-stage-toggle {\n    top: 8px;\n    right: 8px;\n    font-size: 0.76rem;\n    padding: 0.35rem 0.55rem;\n  }\n  .qod-universe-stage-dialog .qod-graph-toolbar {\n    max-height: 22vh;\n  }\n}\n`;

const outputStyles = styles.replace(/\s*$/, '') + '\n' + newStyles;
for (const required of [marker, 'function openUniverseStage()', 'function closeUniverseStage()', 'universeStageRestoreView']) {
  if (!graph.includes(required)) throw new Error('Stage insertion did not pass validation: ' + required);
}
if (!outputStyles.includes('.qod-universe-stage-dialog[open]')) {
  throw new Error('Stage styling missing; refusing to write.');
}
// Validate the entire deployed client script BEFORE writing either file.
new Function(graph);
fs.writeFileSync(graphPath, graph, 'utf8');
fs.writeFileSync(stylesheetPath, outputStyles, 'utf8');
console.log('The Osculatorium Universe graph stage installed: modal, Esc/X, controls, and view restoration.');
