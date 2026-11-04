/**
 * OSC-MENTAL-MATH-RACE-TEACHER-ONLY-V1
 * This always runs AFTER the worksheet-generator guard, so even a stale
 * publishing script cannot reintroduce the generator to student navigation.
 * No authentication is claimed: the direct generator URL remains accessible.
 */
'use strict'
const fs = require('node:fs')
const path = require('node:path')
const root = process.cwd()
const MARK = 'OSC-MENTAL-MATH-RACE-TEACHER-ONLY-V1'
const PANEL_MARK = 'data-osc-teacher-race-tool="true"'
const PANEL_SNIPPET = `
<section aria-label="Classroom worksheet tools" ${PANEL_MARK} style="margin:0 0 18px;padding:14px 16px;border:1px solid var(--border);border-radius:11px;background:var(--panel);display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;">
  <div>
    <strong style="display:block;margin-bottom:3px;">Classroom tools</strong>
    <span style="font-size:0.85rem;color:var(--muted);">Create unique double-sided Mental Math Race worksheets (questions + STOP/name). No answer keys.</span>
  </div>
  <a href="../../mental-math-race" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:10px 14px;border-radius:8px;background:var(--text);color:var(--bg);font-weight:700;text-decoration:none;white-space:normal;">Open Mental Math Race Generator</a>
</section>

`
function fail(message) { throw new Error(MARK + ': ' + message) }
function read(name) {
  const file = path.join(root, name)
  if (!fs.existsSync(file)) fail('Missing ' + name)
  return fs.readFileSync(file, 'utf8')
}
function write(name, content) {
  const file = path.join(root, name)
  const before = read(name)
  if (content !== before) {
    fs.writeFileSync(file, content, 'utf8')
    console.log('Teacher-only navigation updated: ' + name)
  }
}
function once(text, search, replacement, label) {
  const i = text.indexOf(search)
  if (i < 0 || text.indexOf(search, i + search.length) >= 0) {
    fail('Expected one ' + label + '. Refusing to alter unexpected source.')
  }
  return text.slice(0, i) + replacement + text.slice(i + search.length)
}

// 1) Keep exactly the two student-facing navigation destinations.
const builder = read('quartz.ts')
const start = '// BEGIN OSCULATORIUM PRIMARY NAVIGATION'
const end = '// END OSCULATORIUM PRIMARY NAVIGATION'
const i = builder.indexOf(start)
const j = builder.indexOf(end, i + start.length)
if (i < 0 || j < i || builder.indexOf(start, i + start.length) >= 0 ||
    builder.indexOf(end, j + end.length) >= 0) fail('Invalid primary navigation markers')
let nav = builder.slice(i, j + end.length)
const raceLocator = `    const race = rootChildren.find(
      (child: any) =>
        !child.isFolder &&
        child.slugSegment?.toLowerCase() === "mental-math-race",
    )

`
nav = nav.replace(raceLocator, '')
nav = nav.replace('node.children = [qod, learningPath, race].filter(Boolean)',
  'node.children = [qod, learningPath].filter(Boolean)')
nav = nav.replace('    if (race) race.displayName = "Mental Math Race"\n', '')
nav = nav.replace('const preferredOrder = ["qod", "learning path", "mental math race"]',
  'const preferredOrder = ["qod", "learning path"]')
if (nav.includes('mental-math-race') || nav.includes('race.displayName') ||
    !nav.includes('node.children = [qod, learningPath].filter(Boolean)')) {
  fail('Unexpected student navigation; cannot safely remove the race link')
}
write('quartz.ts', builder.slice(0, i) + nav + builder.slice(j + end.length))

// 2) Never promote this teacher-only tool on the student landing page.
let homepage = read('content/index.md')
const heading = /^## Mental Math Race\s*$/m
const headingMatch = heading.exec(homepage)
if (headingMatch) {
  const from = headingMatch.index
  const nextHeading = /^## /gm
  nextHeading.lastIndex = from + headingMatch[0].length
  const next = nextHeading.exec(homepage)
  const to = next ? next.index : homepage.length
  homepage = homepage.slice(0, from).trimEnd() + (next ? '\n\n' + homepage.slice(to) : '\n')
}
if (homepage.includes('[[Mental Math Race|') || /^## Mental Math Race\s*$/m.test(homepage)) {
  fail('The homepage still promotes Mental Math Race')
}
write('content/index.md', homepage)

// 3) Unlisted is not a password; it simply keeps this page out of listings.
let racePage = read('content/Mental Math Race.md')
const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(racePage)
if (!fm || !/^type:\s*mental-math-race\s*$/m.test(fm[1])) fail('Unexpected race frontmatter')
if (!/^unlisted:\s*true\s*$/m.test(fm[1])) {
  if (/^unlisted:/m.test(fm[1])) fail('Unexpected unlisted frontmatter')
  racePage = once(racePage, 'type: mental-math-race\n',
    'type: mental-math-race\nunlisted: true\n', 'race frontmatter field')
}
write('content/Mental Math Race.md', racePage)

// 4) The actual teacher panel is inside an iframe, generated from this source.
// Keep the link in BOTH the generator template and the current generated HTML.
const anchor = '<section class="filters">'
for (const name of ['scripts/generate-teacher-control-panel.mjs',
                    'quartz/static/teacher-control-panel/index.html']) {
  let source = read(name)
  if (!source.includes(PANEL_MARK)) source = once(source, anchor,
    PANEL_SNIPPET + anchor, 'teacher tools insertion in ' + name)
  if (source.split(PANEL_MARK).length !== 2) fail('Teacher tools duplicated in ' + name)
  if (!source.includes('href="../../mental-math-race"')) fail('Missing relative generator URL in ' + name)
  write(name, source)
}

// Independent assertions: no extra navigation or homepage link, intact plugin,
// published/hidden generator, teacher panel has exactly one working link.
const built = read('quartz.ts')
const navNow = built.slice(built.indexOf(start), built.indexOf(end) + end.length)
if (!built.includes('name: "MentalMathRaceGenerator"') ||
    !navNow.includes('node.children = [qod, learningPath].filter(Boolean)') ||
    navNow.includes('mental-math-race') ||
    !read('content/Mental Math Race.md').includes('unlisted: true') ||
    read('content/index.md').includes('[[Mental Math Race|') ||
    !read('quartz/static/teacher-control-panel/index.html').includes(PANEL_MARK) ||
    !read('scripts/generate-teacher-control-panel.mjs').includes(PANEL_MARK)) {
  fail('Post-write verification failed')
}
console.log('Teacher-only Mental Math Race verified: student links removed, generator unlisted, teacher dashboard linked.')
