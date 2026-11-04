'use strict';
// Patch the source of The Osculatorium's QOD graph, preserving graph semantics.
// This is embedded by Install-Osculatorium-Universe.ps1 and applied to a live-v5 worktree.
const fs = require('node:fs');
const [graphFile, styleFile] = process.argv.slice(2);
if (!graphFile || !styleFile) throw Error('Graph and style file paths are required.');
const MARKER = 'OSC-QOD-UNIVERSE-V1';
const currentGraph = fs.readFileSync(graphFile, 'utf8');
const currentStyle = fs.readFileSync(styleFile, 'utf8');

if (currentGraph.includes(MARKER) || currentStyle.includes(MARKER)) {
  if (currentGraph.includes(MARKER) && currentStyle.includes(MARKER)) {
    console.log('Universe styling already present in JS and SCSS; no changes needed.');
    process.exit(0);
  }
  throw Error('One file contains the Universe marker but the other does not. Refusing partial update.');
}

// Refuse patches against the old, pre-stable-view, pre-rotation graph.
for (const marker of ['OSC-QOD-INITIAL-FIT-V1', 'OSC-QOD-CLICK-SELECT-V1',
                     'OSC-QOD-AMBIENT-DRIFT-V2', 'OSC-QOD-GALAXY-ROTATION-V2']) {
  if (!currentGraph.includes(marker)) throw Error(`Expected current v5 feature missing: ${marker}`);
}

let graph = currentGraph.replace(/\r\n/g, '\n');
const scss = currentStyle.replace(/\r\n/g, '\n');
function once(needle, replacement, label) {
  const where = graph.indexOf(needle);
  if (where < 0 || graph.indexOf(needle, where + needle.length) >= 0) {
    throw Error(`Cannot safely locate exactly one ${label}; nothing saved.`);
  }
  graph = graph.slice(0, where) + replacement + graph.slice(where + needle.length);
}

const universeLayers = String.raw`    // OSC-QOD-UNIVERSE-V1 â€” entirely decorative, non-interactive scenery.
    // Deterministic star positions mean the sky does not jump on redraw.
    // The decorative stars never enter QOD hit testing or relationship data.
    const universeStarfield = Array.from({ length: 126 }, (_, index) => {
      let seed = (Math.imul(index + 23, 2654435761) >>> 0)
      const random = () => {
        seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
        return seed / 4294967296
      }
      return {
        x: random(),
        y: random(),
        radius: 0.3 + random() * 0.8,
        alpha: 0.08 + random() * 0.23,
        depth: 0.004 + random() * 0.016,
        phase: random() * Math.PI * 2,
        warm: random() > 0.87,
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
        ctx.fillStyle = star.warm ? "#D7BB91" : "#B8CCED"
        ctx.beginPath()
        ctx.arc(x, y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    function drawUniverseHalo(point, radius, colour, alpha) {
      if (alpha <= 0) return
      const outer = Math.min(36, Math.max(7, radius * 2.85))
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

`;
once('    function drawNode(node) {', universeLayers + '    function drawNode(node) {', 'node drawing function');

const haloSpot = `      const nodeColours =\n        colours.length > 0 ? colours : ["#888888"]\n\n`;
once(haloSpot, haloSpot + `      // Keep each course colour while making connected QODs read like stars.\n      // Neighbourhood highlighting retains priority over decorative light.\n      const haloVisibility = selectedNode\n        ? selectionHighlighted && courseHighlighted ? 0.34 : 0.022\n        : courseHighlighted ? 0.25 : 0.02\n      drawUniverseHalo(point, radius, nodeColours[0], haloVisibility)\n\n`, 'node colour and halo insertion');

const coreSpot = `      ctx.restore()\n\n      // Keep selected QOD identifiable without altering its course colour.`;
once(coreSpot, `      ctx.restore()\n\n      // A restrained pinpoint core gives each visible QOD a stellar sparkle.\n      if (courseHighlighted && (!selectedNode || selectionHighlighted)) {\n        ctx.save()\n        ctx.globalAlpha = 0.57\n        ctx.fillStyle = "#F9FCFF"\n        ctx.beginPath()\n        ctx.arc(point.x, point.y, Math.min(1.2, radius * 0.26), 0, Math.PI * 2)\n        ctx.fill()\n        ctx.restore()\n      }\n\n      // Keep selected QOD identifiable without altering its course colour.`, 'node core');

once(`      ctx.clearRect(0, 0, width, height)\n`, `      ctx.clearRect(0, 0, width, height)\n\n      // Scenery is always behind graph relationships and QOD stars.\n      drawUniverseStarfield()\n`, 'canvas first paint');

const edgeStart = '        const savedTheme =\n';
const edgeEnd = '        ctx.setLineDash([])';
const from = graph.indexOf(edgeStart, graph.indexOf('    function draw() {'));
const to = graph.indexOf(edgeEnd, from);
if (from < 0 || to < 0 || to - from > 1600 || graph.indexOf(edgeStart, from + 1) >= 0) {
  throw Error('Edge styling region changed; refusing unsafe replacement.');
}
const oldEdgeSegment = graph.slice(from, to);
if (!oldEdgeSegment.includes('ctx.strokeStyle = isDark') || !oldEdgeSegment.includes('ctx.lineWidth = selectedNode')) {
  throw Error('Edge styling does not match current v5 version.');
}
const newEdge = `        // Star-map lines work on a dark universe in BOTH page themes.\n        ctx.strokeStyle = selectedNode && selectionConnected\n          ? "#C9DBFF"\n          : "#82A5D3"\n        ctx.fillStyle = ctx.strokeStyle\n        ctx.lineWidth = selectedNode\n          ? selectionConnected ? 1.7 : 0.55\n          : activeCourse ? 0.95 : 0.75\n\n`;
graph = graph.slice(0, from) + newEdge + graph.slice(to);
const strokeSpot = `        ctx.lineTo(target.x, target.y)\n        ctx.stroke()\n`;
once(strokeSpot, `        ctx.lineTo(target.x, target.y)\n        // The chosen mathematical constellation gets a soft luminous trail.\n        if (selectedNode && selectionConnected) {\n          ctx.save()\n          ctx.globalAlpha = 0.20\n          ctx.lineWidth = 4\n          ctx.strokeStyle = "#85B3FF"\n          ctx.stroke()\n          ctx.restore()\n        }\n        ctx.stroke()\n`, 'constellation edges');

const newScss = String.raw`
/* OSC-QOD-UNIVERSE-V1: the universe is a dark island in both site themes. */
.qod-graph-viewport {
  border: 1px solid #324866;
  border-radius: 16px;
  background:
    radial-gradient(ellipse 52% 48% at 48% 45%, rgba(111, 84, 198, 0.23), transparent 78%),
    radial-gradient(ellipse 34% 50% at 72% 65%, rgba(32, 107, 165, 0.14), transparent 82%),
    radial-gradient(ellipse 40% 36% at 22% 28%, rgba(72, 114, 181, 0.10), transparent 78%),
    #0d192d;
  box-shadow:
    inset 0 0 95px rgba(2, 5, 16, 0.64),
    0 12px 32px rgba(14, 26, 52, 0.12);
}

:root[saved-theme="dark"] .qod-graph-viewport {
  border-color: #273c60;
  background:
    radial-gradient(ellipse 52% 48% at 48% 45%, rgba(107, 79, 187, 0.20), transparent 78%),
    radial-gradient(ellipse 34% 50% at 72% 65%, rgba(32, 100, 159, 0.14), transparent 82%),
    radial-gradient(ellipse 40% 36% at 22% 28%, rgba(65, 102, 165, 0.08), transparent 78%),
    #071020;
  box-shadow:
    inset 0 0 100px rgba(0, 4, 12, 0.72),
    0 12px 34px rgba(0, 0, 0, 0.22);
}

/* The viewport always retains its own dark-space tooltip styling. */
.qod-graph-viewport .qod-graph-tooltip {
  border-color: #485c7e;
  background: rgba(10, 21, 41, 0.94);
  color: #eef4ff;
  box-shadow: 0 6px 24px rgba(1, 5, 15, 0.52);
  backdrop-filter: blur(9px);
}

.qod-graph-viewport .qod-graph-tooltip span {
  color: #b5c7e5;
}

/* A discreet identity mark, without covering the mathematical network. */
.qod-graph-viewport::after {
  content: "âœ¦ THE OSCULATORIUM UNIVERSE";
  position: absolute;
  top: 14px;
  left: 17px;
  z-index: 2;
  pointer-events: none;
  color: rgba(202, 217, 249, 0.54);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-shadow: 0 1px 8px #081128;
}

@media (max-width: 600px) {
  .qod-graph-viewport::after {
    top: 10px;
    left: 12px;
    font-size: 0.54rem;
    letter-spacing: 0.09em;
  }
}
`;

// Validate all replacements before writing either file, so partial patching is impossible.
for (const needle of [MARKER, 'function drawUniverseStarfield()', 'function drawUniverseHalo(',
                      'drawUniverseStarfield()', 'drawUniverseHalo(point, radius, nodeColours[0],',
                      'Star-map lines work on a dark universe']) {
  if (!graph.includes(needle)) throw Error(`Internal validation failed: ${needle}`);
}
if (graph.includes('ctx.strokeStyle = isDark')) throw Error('Old theme-dependent line colour remains.');
const outputStyle = scss.replace(/\s*$/, '') + '\n' + newScss;
if (!outputStyle.includes(MARKER)) throw Error('Stylesheet validation failed.');
fs.writeFileSync(graphFile, graph, 'utf8');
fs.writeFileSync(styleFile, outputStyle, 'utf8');
console.log('Added deep-space background, starfield parallax, QOD halos/cores, constellation lines, and preserved celestial motion.');