// Unlisted preview only. The browser gets a lightweight, precomputed constellation.
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import { parse as parseYaml } from 'yaml'

const root = path.resolve('public')
const slug = 'math/exponential-functions/solving-exponential-equations-graphically-1'
const outputName = 'logo-preview-9f4c72'
const contentRoot = path.resolve('content', 'Math')
const previewTitle = 'Solving Exponential Equations Graphically 1'

const COURSE_ORDER = [
  'Mathematics 10C',
  'Mathematics 10-3',
  'Mathematics 20-1',
  'Mathematics 20-2',
  'Mathematics 20-3',
  'Mathematics 30-1',
  'Mathematics 30-2',
  'Mathematics 30-3',
  'Mathematics 31',
]

const COURSE_COLORS = {
  'Mathematics 10C': '#7048E8',
  'Mathematics 10-3': '#087AC1',
  'Mathematics 20-1': '#C026D3',
  'Mathematics 20-2': '#5B9F20',
  'Mathematics 20-3': '#008F78',
  'Mathematics 30-1': '#D97706',
  'Mathematics 30-2': '#B99A00',
  'Mathematics 30-3': '#2563EB',
  'Mathematics 31': '#D93B50',
}

const COURSE_ALIASES = {
  'Math 10C': 'Mathematics 10C',
  'Math 10-3': 'Mathematics 10-3',
  'Math 20-1': 'Mathematics 20-1',
  'Math 20-2': 'Mathematics 20-2',
  'Math 20-3': 'Mathematics 20-3',
  'Math 30-1': 'Mathematics 30-1',
  'Math 30-2': 'Mathematics 30-2',
  'Math 30-3': 'Mathematics 30-3',
  'Math 31': 'Mathematics 31',
}

function canonicalCourseName(course) {
  return COURSE_ALIASES[course] ?? course
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await walk(full))
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      files.push(full)
    }
  }
  return files
}

function frontmatter(source) {
  const clean = source.replace(/^\uFEFF/, '')
  const match = clean.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!match) return null
  try { return parseYaml(match[1]) } catch { return null }
}

function stringList(value) {
  if (Array.isArray(value)) return value.filter(v => typeof v === 'string').map(v => v.trim()).filter(Boolean)
  if (typeof value === 'string') return [value.trim()].filter(Boolean)
  return []
}

function svgText(text) {
  return String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
}

function formatTopic(topic) {
  const clean = String(topic ?? '').trim()
  return clean || 'Other'
}

function visualLabel(topic) {
  const words = topic.split(/\s+/).filter(Boolean)
  if (words.length <= 2) return topic
  return words.slice(0, 2).join(' ')
}

function trunc(text, max) {
  return text.length <= max ? text : text.slice(0, Math.max(1, max - 1)) + 'â€¦'
}

function pagePath(baseSlug) {
  return path.join(root, baseSlug + '.html')
}

async function getGraphPayload() {
  let graphPath = path.join(root, 'qod-graph.html')
  try { await fs.access(graphPath) } catch { graphPath = path.join(root, 'qod-graph', 'index.html') }
  const html = await fs.readFile(graphPath, 'utf8')
  const match = html.match(/data-qod-graph\s*=\s*"([^"]+)"/i) ?? html.match(/data-qod-graph\s*=\s*'([^']+)'/i)
  if (!match) throw new Error('Missing published graph payload')
  return JSON.parse(decodeURIComponent(match[1]))
}

let seed = 24681357
function rand() {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
  return seed / 4294967296
}

const graph = await getGraphPayload()
const topicInfoByName = new Map()
for (const file of await walk(contentRoot)) {
  const source = await fs.readFile(file, 'utf8')
  const fm = frontmatter(source)
  if (fm?.type !== 'qod') continue
  const name = path.basename(file, '.md')
  topicInfoByName.set(name, {
    topic: formatTopic(fm.topic),
    courses: stringList(fm.course ?? fm.courses).map(canonicalCourseName),
  })
}

const groups = new Map()
for (const node of graph.nodes ?? []) {
  const meta = topicInfoByName.get(node.name) ?? { topic: 'Other', courses: (node.courses ?? []).map(canonicalCourseName) }
  const topic = formatTopic(meta.topic)
  if (!groups.has(topic)) {
    groups.set(topic, {
      id: topic,
      label: visualLabel(topic),
      fullLabel: topic,
      count: 0,
      courseCounts: new Map(),
      members: [],
    })
  }
  const group = groups.get(topic)
  group.count += 1
  group.members.push(node.id)
  const courses = (meta.courses?.length ? meta.courses : (node.courses ?? []).map(canonicalCourseName))
  for (const course of courses) {
    group.courseCounts.set(course, (group.courseCounts.get(course) ?? 0) + 1)
  }
}

const topicNodes = [...groups.values()]
  .sort((a, b) => b.count - a.count || a.fullLabel.localeCompare(b.fullLabel))
  .map((group, index) => {
    const sortedCourses = [...group.courseCounts.entries()].sort((a, b) => b[1] - a[1] || COURSE_ORDER.indexOf(a[0]) - COURSE_ORDER.indexOf(b[0]))
    const dominantCourse = sortedCourses[0]?.[0] ?? 'Mathematics 20-3'
    const courseIndex = Math.max(0, COURSE_ORDER.indexOf(dominantCourse))
    return {
      id: group.id,
      label: trunc(group.label, 16),
      fullLabel: group.fullLabel,
      count: group.count,
      dominantCourse,
      courseIndex,
      color: COURSE_COLORS[dominantCourse] ?? '#8a94a5',
      memberIds: new Set(group.members),
      x: 0,
      y: 0,
      degree: 0,
      edgeWeight: 0,
      radius: 0,
      halo: 0,
    }
  })

const topicByMember = new Map()
for (const topic of topicNodes) {
  for (const member of topic.memberIds) topicByMember.set(member, topic.id)
}

const aggregatedEdges = new Map()
for (const link of graph.links ?? []) {
  const sourceTopic = topicByMember.get(link.source)
  const targetTopic = topicByMember.get(link.target)
  if (!sourceTopic || !targetTopic || sourceTopic === targetTopic) continue
  const pair = [sourceTopic, targetTopic].sort()
  const key = pair.join('::')
  const weightBoost = link.type === 'prerequisite' ? 1.35 : 1
  aggregatedEdges.set(key, (aggregatedEdges.get(key) ?? 0) + weightBoost)
}

const topicLookup = new Map(topicNodes.map((topic, index) => [topic.id, index]))
const edges = [...aggregatedEdges.entries()].map(([key, weight]) => {
  const [a, b] = key.split('::')
  const sourceIndex = topicLookup.get(a)
  const targetIndex = topicLookup.get(b)
  return {
    source: sourceIndex,
    target: targetIndex,
    weight,
  }
}).filter(edge => edge.source !== undefined && edge.target !== undefined)

for (const edge of edges) {
  topicNodes[edge.source].degree += 1
  topicNodes[edge.target].degree += 1
  topicNodes[edge.source].edgeWeight += edge.weight
  topicNodes[edge.target].edgeWeight += edge.weight
}

for (const topic of topicNodes) {
  topic.radius = Math.max(10, Math.min(22, 9 + Math.sqrt(topic.count) * 2.5 + Math.sqrt(topic.degree) * 0.8))
  topic.halo = topic.radius + 5
}

const width = 540
const height = 540
const centerX = width / 2
const centerY = height / 2
const courseRing = 160

for (const topic of topicNodes) {
  const angle = -Math.PI / 2 + (topic.courseIndex / COURSE_ORDER.length) * Math.PI * 2
  const courseX = centerX + Math.cos(angle) * courseRing
  const courseY = centerY + Math.sin(angle) * courseRing
  const jitterAngle = rand() * Math.PI * 2
  const jitterRadius = 26 + rand() * 42
  topic.x = courseX + Math.cos(jitterAngle) * jitterRadius
  topic.y = courseY + Math.sin(jitterAngle) * jitterRadius
}

const fx = new Float64Array(topicNodes.length)
const fy = new Float64Array(topicNodes.length)
for (let step = 0; step < 280; step++) {
  fx.fill(0)
  fy.fill(0)
  for (let i = 0; i < topicNodes.length; i++) {
    const a = topicNodes[i]
    const angle = -Math.PI / 2 + (a.courseIndex / COURSE_ORDER.length) * Math.PI * 2
    const targetX = centerX + Math.cos(angle) * courseRing
    const targetY = centerY + Math.sin(angle) * courseRing
    fx[i] += (targetX - a.x) * 0.010
    fy[i] += (targetY - a.y) * 0.010
    fx[i] += (centerX - a.x) * 0.003
    fy[i] += (centerY - a.y) * 0.003
    for (let j = i + 1; j < topicNodes.length; j++) {
      const b = topicNodes[j]
      const dx = a.x - b.x
      const dy = a.y - b.y
      const minGap = a.halo + b.halo + 12
      const d2 = dx * dx + dy * dy + 0.01
      const d = Math.sqrt(d2)
      const overlap = Math.max(0, minGap - d)
      const repel = overlap > 0 ? overlap * 0.10 + 0.18 : 520 / d2
      const ux = dx / d
      const uy = dy / d
      fx[i] += ux * repel
      fy[i] += uy * repel
      fx[j] -= ux * repel
      fy[j] -= uy * repel
    }
  }
  for (const edge of edges) {
    const a = topicNodes[edge.source]
    const b = topicNodes[edge.target]
    const dx = b.x - a.x
    const dy = b.y - a.y
    const d = Math.hypot(dx, dy) || 1
    const ideal = 76 + (a.radius + b.radius) * 0.55 - Math.min(14, edge.weight * 2.4)
    const pull = ((d - ideal) * (0.010 + edge.weight * 0.003)) / d
    fx[edge.source] += dx * pull
    fy[edge.source] += dy * pull
    fx[edge.target] -= dx * pull
    fy[edge.target] -= dy * pull
  }
  const cooling = 1 - step / 340
  for (let i = 0; i < topicNodes.length; i++) {
    topicNodes[i].x = Math.max(70, Math.min(width - 70, topicNodes[i].x + Math.max(-9, Math.min(9, fx[i])) * cooling))
    topicNodes[i].y = Math.max(70, Math.min(height - 70, topicNodes[i].y + Math.max(-9, Math.min(9, fy[i])) * cooling))
  }
}

const fmt = (value) => Number(value).toFixed(2)
const edgeSvg = edges
  .sort((a, b) => a.weight - b.weight)
  .map((edge) => {
    const a = topicNodes[edge.source]
    const b = topicNodes[edge.target]
    const opacity = Math.min(0.48, 0.10 + edge.weight * 0.045)
    const width = Math.min(3.2, 0.8 + edge.weight * 0.22)
    return `<line x1="${fmt(a.x)}" y1="${fmt(a.y)}" x2="${fmt(b.x)}" y2="${fmt(b.y)}" stroke="#7d8795" stroke-opacity="${fmt(opacity)}" stroke-width="${fmt(width)}" stroke-linecap="round"/>`
  })
  .join('')

const nodeSvg = topicNodes
  .sort((a, b) => a.radius - b.radius)
  .map((topic) => {
    const fontSize = Math.max(8, Math.min(12, topic.radius * 0.55))
    const strokeColor = '#f8f8f5'
    return [
      `<circle cx="${fmt(topic.x)}" cy="${fmt(topic.y)}" r="${fmt(topic.halo)}" fill="#ffffff" fill-opacity="0.65"/>`,
      `<circle cx="${fmt(topic.x)}" cy="${fmt(topic.y)}" r="${fmt(topic.radius)}" fill="${topic.color}" fill-opacity="0.95" stroke="${strokeColor}" stroke-width="2"/>`,
      `<text x="${fmt(topic.x)}" y="${fmt(topic.y + fontSize * 0.34)}" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="${fmt(fontSize)}" font-weight="700" fill="#ffffff">${svgText(topic.label)}</text>`,
    ].join('')
  })
  .join('')

const topicCount = topicNodes.length
const linkCount = edges.length
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="540" height="540" viewBox="0 0 540 540">
  <defs>
    <radialGradient id="bg" cx="50%" cy="44%" r="72%">
      <stop offset="0%" stop-color="#fdfcf8"/>
      <stop offset="100%" stop-color="#f3f1ea"/>
    </radialGradient>
  </defs>
  <rect width="540" height="540" rx="52" fill="url(#bg)"/>
  ${edgeSvg}
  ${nodeSvg}
</svg>`.trim()

const htmlPath = pagePath(slug)
const htmlDir = path.dirname(htmlPath)
const imagePath = path.join(htmlDir, outputName + '.webp')
const previewPath = path.join(htmlDir, outputName + '.html')
let html = await fs.readFile(htmlPath, 'utf8')
if (!/<\/head>/i.test(html) || !/<\/body>/i.test(html)) throw new Error('Unexpected generated HTML')

const css = `<meta name="robots" content="noindex,nofollow,noarchive"><style id="qod-logo-preview-style">
.page-title > a.qod-logo-preview { position: relative; overflow: hidden; background-image: none !important; background: radial-gradient(circle at 50% 44%, #fdfcf8 0%, #f3f1ea 100%); border: 1px solid color-mix(in srgb, currentColor 22%, transparent); border-radius: 15%; box-sizing: border-box; }
.qod-logo-preview > img.qod-logo-orbit { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; animation: qodLogoOrbit 1500s linear infinite; animation-play-state: paused; transform-origin: 50% 50%; }
.qod-logo-preview.qod-logo-running > img.qod-logo-orbit { animation-play-state: running; }
@keyframes qodLogoOrbit { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce), (max-width: 800px) { .qod-logo-preview > img.qod-logo-orbit { animation: none !important; } }
</style>`

const js = `<script>(() => {
const route = location.pathname
let anchor, img, observer, visible = false, disposed = false
const sync = () => anchor?.classList.toggle('qod-logo-running', visible && !document.hidden && !disposed)
const cleanup = () => {
  disposed = true
  observer?.disconnect()
  document.removeEventListener('visibilitychange', sync)
  document.removeEventListener('nav', onNav)
  anchor?.classList.remove('qod-logo-preview', 'qod-logo-running')
  img?.remove()
}
const onNav = () => { if (location.pathname !== route) cleanup() }
const init = async () => {
  if (disposed || location.pathname !== route) return
  anchor = document.querySelector('.page-title > a')
  if (!anchor) return
  img = new Image()
  img.className = 'qod-logo-orbit'
  img.alt = ''
  img.setAttribute('aria-hidden', 'true')
  img.decoding = 'async'
  img.src = new URL('${outputName}.webp', location.href).href
  try { await img.decode() } catch { return }
  if (disposed || location.pathname !== route || !anchor.isConnected) return
  anchor.appendChild(img)
  anchor.classList.add('qod-logo-preview')
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => { visible = entries[0]?.isIntersecting ?? false; sync() })
    observer.observe(anchor)
  } else {
    visible = true
    sync()
  }
  document.addEventListener('visibilitychange', sync)
}
document.addEventListener('nav', onNav)
const schedule = () => 'requestIdleCallback' in window ? requestIdleCallback(init, { timeout: 2000 }) : setTimeout(init, 50)
document.readyState === 'complete' ? schedule() : window.addEventListener('load', schedule, { once: true })
})()</script>`

html = html.replace(/<\/head>/i, css + '</head>').replace(/<\/body>/i, js + '</body>')
await sharp(Buffer.from(svg)).webp({ quality: 84, alphaQuality: 92, effort: 6 }).toFile(imagePath)
await fs.writeFile(previewPath, html)
console.log('Unlisted topic-logo preview:', path.relative(root, previewPath), topicCount, 'topics', linkCount, 'aggregated links')