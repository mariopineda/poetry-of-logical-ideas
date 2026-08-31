import fs from "node:fs"
import path from "node:path"

const ROOT = process.cwd()

// ------------------------------------------------------------
// SOURCE
//
// Normal/manual use:
//   scans content/Math
//
// Publishing-script use:
//   set TEACHER_QOD_SOURCE to the Math folder in the full
//   Obsidian vault so unpublished QODs are included too.
// ------------------------------------------------------------

const DEFAULT_QOD_ROOT = path.join(
  ROOT,
  "content",
  "Math",
)

const QOD_ROOT = process.env.TEACHER_QOD_SOURCE
  ? path.resolve(process.env.TEACHER_QOD_SOURCE)
  : DEFAULT_QOD_ROOT

const PANEL_DIR = path.join(
  ROOT,
  "quartz",
  "static",
  "teacher-control-panel",
)

const PANEL_FILE = path.join(
  PANEL_DIR,
  "index.html",
)

const WRAPPER_FILE = path.join(
  ROOT,
  "content",
  "teacher-control-panel.md",
)

// ------------------------------------------------------------
// FILE DISCOVERY
// ------------------------------------------------------------

function walk(dir) {
  return fs
    .readdirSync(dir, {
      withFileTypes: true,
    })
    .flatMap((entry) => {
      const full = path.join(
        dir,
        entry.name,
      )

      if (entry.isDirectory()) {
        return walk(full)
      }

      return (
        entry.isFile() &&
        entry.name
          .toLowerCase()
          .endsWith(".md")
      )
        ? [full]
        : []
    })
}

function displayPath(file) {
  const rel = path
    .relative(QOD_ROOT, file)
    .replaceAll("\\", "/")

  return `content/Math/${rel}`
}

function qodHref(file) {
  const rel = path
    .relative(QOD_ROOT, file)
    .replaceAll("\\", "/")
    .replace(/\.md$/i, "")

  const slug = rel
    .split("/")
    .map((segment) =>
      segment
        .replace(/\s/g, "-")
        .replace(/&/g, "-and-")
        .replace(/%/g, "-percent")
        .replace(/\?/g, "")
        .replace(/#/g, ""),
    )
    .join("/")

  // The control-panel HTML is located at:
  // /static/teacher-control-panel/
  //
  // ../../Math/... therefore points to the normal Quartz QOD page.
  return `../../Math/${slug}`
}

// ------------------------------------------------------------
// SIMPLE YAML PARSER
//
// Deliberately dependency-free so this generator works inside
// the publisher's fresh Git clone before npm dependencies exist.
//
// Supports the frontmatter structures used by the QOD files:
//   key: value
//   key: true / false
//   key: [a, b, c]
//   key:
//     - a
//     - b
// ------------------------------------------------------------

function parseScalar(value) {
  const text = String(
    value ?? "",
  ).trim()

  if (
    text.length >= 2 &&
    text.startsWith("'") &&
    text.endsWith("'")
  ) {
    return text
      .slice(1, -1)
      .replaceAll("''", "'")
  }

  if (
    text.length >= 2 &&
    text.startsWith('"') &&
    text.endsWith('"')
  ) {
    try {
      return JSON.parse(text)
    } catch {
      return text.slice(1, -1)
    }
  }

  const lower =
    text.toLowerCase()

  if (lower === "true") {
    return true
  }

  if (lower === "false") {
    return false
  }

  if (
    lower === "null" ||
    text === "~"
  ) {
    return null
  }

  return text
}

function parseInlineList(value) {
  const text = value.trim()

  if (
    !text.startsWith("[") ||
    !text.endsWith("]")
  ) {
    return []
  }

  const inner =
    text.slice(1, -1)

  if (!inner.trim()) {
    return []
  }

  const items = []

  let current = ""
  let quote = null
  let escaped = false

  for (const char of inner) {
    if (escaped) {
      current += char
      escaped = false
      continue
    }

    if (
      quote === '"' &&
      char === "\\"
    ) {
      current += char
      escaped = true
      continue
    }

    if (quote) {
      current += char

      if (char === quote) {
        quote = null
      }

      continue
    }

    if (
      char === "'" ||
      char === '"'
    ) {
      quote = char
      current += char
      continue
    }

    if (char === ",") {
      items.push(
        parseScalar(current),
      )

      current = ""
      continue
    }

    current += char
  }

  if (current.trim()) {
    items.push(
      parseScalar(current),
    )
  }

  return items
}

function parseSimpleYaml(text) {
  const result = {}

  const lines =
    text.split(/\r?\n/)

  for (
    let i = 0;
    i < lines.length;
    i++
  ) {
    const line =
      lines[i]

    if (
      !line.trim() ||
      line
        .trimStart()
        .startsWith("#")
    ) {
      continue
    }

    const match =
      line.match(
        /^([A-Za-z0-9_-]+):\s*(.*)$/,
      )

    if (!match) {
      continue
    }

    const key =
      match[1]

    const rawValue =
      match[2]

    if (rawValue === "") {
      const values = []

      let j =
        i + 1

      while (
        j < lines.length
      ) {
        const item =
          lines[j].match(
            /^\s*-\s*(.*?)\s*$/,
          )

        if (!item) {
          break
        }

        values.push(
          parseScalar(
            item[1],
          ),
        )

        j++
      }

      if (values.length) {
        result[key] =
          values

        i =
          j - 1
      } else {
        result[key] =
          ""
      }

      continue
    }

    const trimmed =
      rawValue.trim()

    if (
      trimmed.startsWith("[") &&
      trimmed.endsWith("]")
    ) {
      result[key] =
        parseInlineList(
          trimmed,
        )

      continue
    }

    result[key] =
      parseScalar(rawValue)
  }

  return result
}

function frontmatter(text) {
  text =
    text.replace(
      /^\uFEFF/,
      "",
    )

  const match =
    text.match(
      /^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)([\s\S]*)$/,
    )

  if (!match) {
    return null
  }

  return {
    fm:
      parseSimpleYaml(
        match[1],
      ),

    body:
      match[2] ?? "",
  }
}

// ------------------------------------------------------------
// NORMALIZATION
// ------------------------------------------------------------

function arr(value) {
  if (Array.isArray(value)) {
    return value
      .filter(
        (item) =>
          item !== null &&
          item !== undefined,
      )
      .map(String)
  }

  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return []
  }

  return [
    String(value),
  ]
}

function bool(value) {
  return (
    value === true ||
    (
      typeof value ===
        "string" &&
      value
        .trim()
        .toLowerCase() ===
        "true"
    )
  )
}

// ------------------------------------------------------------
// SOLUTION DETECTION
//
// A solution counts only if there is substantive content beneath
// the "## Solution" heading.
// ------------------------------------------------------------

function solutionExists(body) {
  const visible =
    body.replace(
      /<!--[\s\S]*?-->/g,
      "",
    )

  const heading =
    visible.match(
      /^##\s+Solution\s*$/im,
    )

  if (
    !heading ||
    heading.index ===
      undefined
  ) {
    return false
  }

  let section =
    visible.slice(
      heading.index +
        heading[0].length,
    )

  const nextHeading =
    section.search(
      /^##\s+/m,
    )

  if (
    nextHeading >= 0
  ) {
    section =
      section.slice(
        0,
        nextHeading,
      )
  }

  section =
    section
      .replace(
        /^\s*>\s*\[![^\]]+\][+-]?\s*.*$/gim,
        "",
      )
      .replace(
        /^\s*>\s?/gm,
        "",
      )
      .replace(
        /[*_`#>|~-]/g,
        "",
      )
      .replace(
        /\s+/g,
        " ",
      )
      .trim()

  return (
    section.length >= 3
  )
}

// ------------------------------------------------------------
// STATUS LOGIC
// ------------------------------------------------------------

function status(record) {
  const problems = []

  if (
    !record.courses.length
  ) {
    problems.push(
      "Missing course",
    )
  }

  if (!record.topic) {
    problems.push(
      "Missing topic",
    )
  }

  if (
    record.showSolution &&
    !record.solutionExists
  ) {
    problems.push(
      "Solution ON but missing",
    )
  }

  if (
    problems.length
  ) {
    return {
      label:
        problems.join(
          " · ",
        ),

      level:
        "error",
    }
  }

  if (
    !record.published
  ) {
    return {
      label:
        "Draft",

      level:
        "draft",
    }
  }

  if (
    record.solutionExists &&
    !record.showSolution
  ) {
    return {
      label:
        "Solution available but hidden",

      level:
        "warning",
    }
  }

  if (
    !record.solutionExists
  ) {
    return {
      label:
        "Published · no solution yet",

      level:
        "warning",
    }
  }

  return {
    label:
      "Ready",

    level:
      "ready",
  }
}

// ------------------------------------------------------------
// READ QODS
// ------------------------------------------------------------

if (
  !fs.existsSync(
    QOD_ROOT,
  )
) {
  console.error(
    `Cannot find QOD source: ${QOD_ROOT}`,
  )

  process.exit(1)
}

const records = []
const warnings = []

for (
  const file
  of walk(QOD_ROOT)
) {
  try {
    const parsed =
      frontmatter(
        fs.readFileSync(
          file,
          "utf8",
        ),
      )

    if (!parsed) {
      continue
    }

    const fm =
      parsed.fm

    if (
      String(
        fm.type ?? "",
      )
        .trim()
        .toLowerCase() !==
      "qod"
    ) {
      continue
    }

    const record = {
      title:
        String(
          fm.title ??
            path.basename(
              file,
              ".md",
            ),
        ),

      courses:
        arr(
          fm.courses,
        ),

      topic:
        String(
          fm.topic ?? "",
        ).trim(),

      published:
        bool(
          fm.publish,
        ),

      showSolution:
        bool(
          fm.show_solution,
        ),

      solutionExists:
        solutionExists(
          parsed.body,
        ),

      prerequisites:
        arr(
          fm.prerequisites,
        ).length,

      related:
        arr(
          fm.related,
        ).length,

      path:
        displayPath(file),

      href:
        qodHref(file),
    }

    record.status =
      status(record)

    records.push(
      record,
    )
  } catch (error) {
    warnings.push(
      `${displayPath(file)}: ${error.message}`,
    )
  }
}

records.sort(
  (a, b) =>
    a.topic.localeCompare(
      b.topic,
    ) ||
    a.title.localeCompare(
      b.title,
    ),
)

const data =
  JSON.stringify(
    records,
  ).replaceAll(
    "<",
    "\\u003c",
  )

const generated =
  new Date().toLocaleString(
    "en-CA",
    {
      dateStyle:
        "medium",

      timeStyle:
        "short",
    },
  )

// ------------------------------------------------------------
// GENERATED CONTROL PANEL HTML
// ------------------------------------------------------------

const html = `<!doctype html>
<html lang="en">

<head>

<meta charset="utf-8">

<meta
  name="viewport"
  content="width=device-width,initial-scale=1"
>

<meta
  name="robots"
  content="noindex,nofollow,noarchive"
>

<title>
Teacher QOD Control Panel
</title>

<style>

:root {
  color-scheme:
    light dark;

  --bg:
    #f6f6f4;

  --panel:
    #ffffff;

  --text:
    #222222;

  --muted:
    #6b6b6b;

  --border:
    #d7d7d2;

  --good:
    #2e6b44;

  --warn:
    #8a6417;

  --bad:
    #9a3434;

  --chip:
    #ecece8;
}

@media (
  prefers-color-scheme:
    dark
) {

  :root {
    --bg:
      #171719;

    --panel:
      #222225;

    --text:
      #eeeeee;

    --muted:
      #b3b3b3;

    --border:
      #414147;

    --good:
      #86c99d;

    --warn:
      #e0ba68;

    --bad:
      #e78a8a;

    --chip:
      #303034;
  }

}

* {
  box-sizing:
    border-box;
}

html,
body {
  margin:
    0;

  padding:
    0;

  overflow:
    hidden;
}

body {
  background:
    var(--bg);

  color:
    var(--text);

  font-family:
    system-ui,
    -apple-system,
    "Segoe UI",
    sans-serif;
}

.shell {
  width:
    100%;

  margin:
    0;

  padding:
    18px 8px 28px;
}

h1 {
  margin:
    0;

  font-size:
    clamp(
      1.5rem,
      2.4vw,
      2.2rem
    );
}

.sub {
  margin:
    5px 0 18px;

  color:
    var(--muted);
}

.stamp {
  float:
    right;

  margin-top:
    -28px;

  color:
    var(--muted);

  font-size:
    0.8rem;
}

.filters {
  display:
    grid;

  grid-template-columns:
    repeat(
      5,
      minmax(
        120px,
        1fr
      )
    )
    auto;

  gap:
    9px;

  padding:
    13px;

  background:
    var(--panel);

  border:
    1px solid
    var(--border);

  border-radius:
    11px;
}

.field {
  display:
    flex;

  flex-direction:
    column;

  gap:
    4px;
}

label {
  font-size:
    0.73rem;

  font-weight:
    700;

  color:
    var(--muted);

  text-transform:
    uppercase;
}

select,
input,
button {
  width:
    100%;

  min-width:
    0;

  min-height:
    38px;

  border:
    1px solid
    var(--border);

  border-radius:
    7px;

  background:
    var(--bg);

  color:
    var(--text);

  font:
    inherit;

  padding:
    7px 9px;
}

button {
  cursor:
    pointer;

  align-self:
    end;
}

.summary {
  display:
    flex;

  flex-wrap:
    wrap;

  gap:
    7px;

  margin:
    12px 0;
}

.chip {
  padding:
    5px 9px;

  border:
    1px solid
    var(--border);

  border-radius:
    999px;

  background:
    var(--chip);

  font-size:
    0.83rem;
}

.tablewrap {
  width:
    100%;

  overflow:
    visible;

  border:
    1px solid
    var(--border);

  border-radius:
    11px;

  background:
    var(--panel);
}

table {
  width:
    100%;

  max-width:
    100%;

  table-layout:
    fixed;

  border-collapse:
    separate;

  border-spacing:
    0;
}

th {
  background:
    var(--panel);

  color:
    var(--muted);

  font-size:
    0.72rem;

  text-align:
    left;

  cursor:
    pointer;
}

th,
td {
  padding:
    8px 7px;

  border-bottom:
    1px solid
    var(--border);

  vertical-align:
    top;

  overflow-wrap:
    anywhere;

  word-break:
    normal;
}

td {
  font-size:
    0.82rem;
}

tr:last-child td {
  border-bottom:
    0;
}

/* Column widths */

th:nth-child(1),
td:nth-child(1) {
  width:
    23%;
}

th:nth-child(2),
td:nth-child(2) {
  width:
    13%;
}

th:nth-child(3),
td:nth-child(3) {
  width:
    14%;
}

th:nth-child(4),
td:nth-child(4) {
  width:
    8%;
}

th:nth-child(5),
td:nth-child(5) {
  width:
    9%;
}

th:nth-child(6),
td:nth-child(6) {
  width:
    9%;
}

th:nth-child(7),
td:nth-child(7) {
  width:
    6%;
}

th:nth-child(8),
td:nth-child(8) {
  width:
    6%;
}

th:nth-child(9),
td:nth-child(9) {
  width:
    12%;
}

.title {
  font-weight:
    700;
}

.title-link {
  color:
    inherit;

  text-decoration:
    underline;

  text-decoration-thickness:
    1px;

  text-underline-offset:
    2px;
}

.title-link:hover {
  text-decoration-thickness:
    2px;
}

.title-link:focus-visible {
  outline:
    2px solid
    currentColor;

  outline-offset:
    2px;

  border-radius:
    2px;
}

.path {
  display:
    block;

  margin-top:
    3px;

  color:
    var(--muted);

  font-size:
    0.67rem;

  font-weight:
    400;

  overflow-wrap:
    anywhere;
}

.badges {
  display:
    flex;

  flex-wrap:
    wrap;

  gap:
    3px;

  min-width:
    0;
}

.badge {
  display:
    inline-block;

  padding:
    2px 5px;

  border:
    1px solid
    var(--border);

  border-radius:
    999px;

  background:
    var(--chip);

  font-size:
    0.7rem;

  white-space:
    normal;
}

.yes {
  color:
    var(--good);

  font-weight:
    700;
}

.no {
  color:
    var(--muted);

  font-weight:
    700;
}

.status {
  font-weight:
    700;
}

.ready {
  color:
    var(--good);
}

.warning {
  color:
    var(--warn);
}

.error {
  color:
    var(--bad);
}

.draft {
  color:
    var(--muted);
}

.empty {
  padding:
    35px;

  text-align:
    center;

  color:
    var(--muted);
}

.note {
  margin:
    9px 2px;

  font-size:
    0.75rem;

  color:
    var(--muted);
}

@media (
  max-width:
    1100px
) {

  .filters {
    grid-template-columns:
      repeat(
        3,
        1fr
      );
  }

  th,
  td {
    padding:
      7px 5px;
  }

  td {
    font-size:
      0.76rem;
  }

  th {
    font-size:
      0.67rem;
  }

}

@media (
  max-width:
    700px
) {

  .filters {
    grid-template-columns:
      1fr;
  }

  .stamp {
    float:
      none;

    margin:
      5px 0 10px;
  }

}

</style>

</head>

<body>

<main class="shell">

<h1>
Teacher QOD Control Panel
</h1>

<div class="stamp">
Generated ${generated}
</div>

<p class="sub">
Filter all QOD source files by course and topic,
then review publication, solution, and relationship status.
</p>

<section class="filters">

<div class="field">

<label>
Course
</label>

<select id="course">

<option value="">
All courses
</option>

</select>

</div>

<div class="field">

<label>
Topic / unit
</label>

<select id="topic">

<option value="">
All topics
</option>

</select>

</div>

<div class="field">

<label>
Publication
</label>

<select id="pub">

<option value="">
All
</option>

<option value="yes">
Published
</option>

<option value="no">
Not published
</option>

</select>

</div>

<div class="field">

<label>
Solution
</label>

<select id="sol">

<option value="">
All
</option>

<option value="shown">
Available + shown
</option>

<option value="hidden">
Available + hidden
</option>

<option value="missing-on">
ON but missing
</option>

<option value="missing-off">
Missing + OFF
</option>

</select>

</div>

<div class="field">

<label>
Search
</label>

<input
  id="search"
  type="search"
  placeholder="QOD name or path"
>

</div>

<button
  id="reset"
  type="button"
>
Reset
</button>

</section>

<div
  id="summary"
  class="summary"
>
</div>

<div class="tablewrap">

<table>

<thead>

<tr>

<th data-sort="title">
QOD ↕
</th>

<th data-sort="courses">
Course ↕
</th>

<th data-sort="topic">
Topic / unit ↕
</th>

<th data-sort="published">
Published ↕
</th>

<th data-sort="solutionExists">
Solution exists ↕
</th>

<th data-sort="showSolution">
Solution shown ↕
</th>

<th data-sort="prerequisites">
Prereq. ↕
</th>

<th data-sort="related">
Related ↕
</th>

<th data-sort="status">
Status ↕
</th>

</tr>

</thead>

<tbody id="rows">
</tbody>

</table>

<div
  id="empty"
  class="empty"
  hidden
>

No QODs match these filters.

</div>

</div>

<p class="note">
Unlisted teacher tool.
The page is not linked or indexed,
but anyone who knows the exact URL can open it.
</p>

</main>

<script>

const records =
  ${data}

const el =
  (id) =>
    document.getElementById(
      id
    )

const course =
  el("course")

const topic =
  el("topic")

const pub =
  el("pub")

const sol =
  el("sol")

const search =
  el("search")

const rows =
  el("rows")

const empty =
  el("empty")

const summary =
  el("summary")

let sortKey =
  "topic"

let sortDir =
  1

const esc =
  (value) =>
    String(value)
      .replaceAll(
        "&",
        "&amp;"
      )
      .replaceAll(
        "<",
        "&lt;"
      )
      .replaceAll(
        ">",
        "&gt;"
      )
      .replaceAll(
        '"',
        "&quot;"
      )
      .replaceAll(
        "'",
        "&#039;"
      )

const uniq =
  (items) =>
    [
      ...new Set(
        items.filter(
          Boolean
        )
      ),
    ].sort(
      (a, b) =>
        a.localeCompare(
          b
        )
    )

function resizeFrame() {

  requestAnimationFrame(
    () => {

      if (
        window.frameElement
      ) {

        window.frameElement
          .style.height =
            document
              .documentElement
              .scrollHeight +
            "px"

      }

    }
  )

}

function fillCourses() {

  const values =
    uniq(
      records.flatMap(
        (record) =>
          record.courses
      )
    )

  for (
    const value
    of values
  ) {

    const option =
      document.createElement(
        "option"
      )

    option.value =
      value

    option.textContent =
      value

    course.appendChild(
      option
    )

  }

}

function fillTopics() {

  const old =
    topic.value

  const base =
    course.value
      ? records.filter(
          (record) =>
            record.courses.includes(
              course.value
            )
        )
      : records

  topic.innerHTML =
    '<option value="">All topics</option>'

  const values =
    uniq(
      base.map(
        (record) =>
          record.topic
      )
    )

  for (
    const value
    of values
  ) {

    const option =
      document.createElement(
        "option"
      )

    option.value =
      value

    option.textContent =
      value

    topic.appendChild(
      option
    )

  }

  if (
    [...topic.options]
      .some(
        (option) =>
          option.value ===
          old
      )
  ) {

    topic.value =
      old

  }

}

function solState(
  record
) {

  if (
    record.solutionExists &&
    record.showSolution
  ) {
    return "shown"
  }

  if (
    record.solutionExists
  ) {
    return "hidden"
  }

  return record.showSolution
    ? "missing-on"
    : "missing-off"

}

function filtered() {

  const query =
    search.value
      .trim()
      .toLowerCase()

  return records.filter(
    (record) => {

      if (
        course.value &&
        !record.courses.includes(
          course.value
        )
      ) {
        return false
      }

      if (
        topic.value &&
        record.topic !==
          topic.value
      ) {
        return false
      }

      if (
        pub.value &&
        (
          pub.value ===
          "yes"
        ) !==
          record.published
      ) {
        return false
      }

      if (
        sol.value &&
        solState(
          record
        ) !==
          sol.value
      ) {
        return false
      }

      if (
        query &&
        !(
          record.title +
          " " +
          record.path
        )
          .toLowerCase()
          .includes(
            query
          )
      ) {
        return false
      }

      return true

    }
  )

}

function sortValue(
  record,
  key
) {

  if (
    key ===
    "courses"
  ) {
    return record.courses.join(
      ", "
    )
  }

  if (
    key ===
    "status"
  ) {
    return record.status.label
  }

  return record[key]

}

function sorted(
  items
) {

  return [...items].sort(
    (a, b) => {

      const A =
        sortValue(
          a,
          sortKey
        )

      const B =
        sortValue(
          b,
          sortKey
        )

      if (
        typeof A ===
        "number"
      ) {
        return (
          A - B
        ) * sortDir
      }

      if (
        typeof A ===
        "boolean"
      ) {
        return (
          Number(A) -
          Number(B)
        ) * sortDir
      }

      return String(
        A ?? ""
      ).localeCompare(
        String(
          B ?? ""
        )
      ) * sortDir

    }
  )

}

const yesno =
  (value) =>
    value
      ? '<span class="yes">✓ Yes</span>'
      : '<span class="no">— No</span>'

const badges =
  (items) =>
    items.length
      ? '<div class="badges">' +
        items
          .map(
            (item) =>
              '<span class="badge">' +
              esc(item) +
              "</span>"
          )
          .join("") +
        "</div>"
      : '<span class="no">—</span>'

function render() {

  const visible =
    sorted(
      filtered()
    )

  empty.hidden =
    visible.length !==
    0

  rows.innerHTML =
    visible
      .map(
        (record) => {

          return (
            "<tr>" +

            '<td class="title">' +
            (
              record.published
                ? '<a class="title-link" href="' +
                  esc(
                    record.href
                  ) +
                  '" target="_blank" rel="noopener noreferrer">' +
                  esc(
                    record.title
                  ) +
                  "</a>"
                : esc(
                    record.title
                  )
            ) +
            '<span class="path">' +
            esc(
              record.path
            ) +
            "</span>" +
            "</td>" +

            "<td>" +
            badges(
              record.courses
            ) +
            "</td>" +

            "<td>" +
            (
              record.topic
                ? esc(
                    record.topic
                  )
                : '<span class="no">Missing</span>'
            ) +
            "</td>" +

            "<td>" +
            yesno(
              record.published
            ) +
            "</td>" +

            "<td>" +
            yesno(
              record.solutionExists
            ) +
            "</td>" +

            "<td>" +
            yesno(
              record.showSolution
            ) +
            "</td>" +

            "<td>" +
            record.prerequisites +
            "</td>" +

            "<td>" +
            record.related +
            "</td>" +

            '<td class="status ' +
            record.status.level +
            '">' +
            esc(
              record.status.label
            ) +
            "</td>" +

            "</tr>"
          )

        }
      )
      .join("")

  const published =
    visible.filter(
      (record) =>
        record.published
    ).length

  const missing =
    visible.filter(
      (record) =>
        !record.solutionExists
    ).length

  const hidden =
    visible.filter(
      (record) =>
        record.solutionExists &&
        !record.showSolution
    ).length

  const problems =
    visible.filter(
      (record) =>
        record.status.level ===
        "error"
    ).length

  const values = [

    [
      "Showing",
      visible.length +
      " of " +
      records.length,
    ],

    [
      "Published",
      published,
    ],

    [
      "Drafts",
      visible.length -
      published,
    ],

    [
      "Missing solutions",
      missing,
    ],

    [
      "Hidden solutions",
      hidden,
    ],

    [
      "Problems",
      problems,
    ],

  ]

  summary.innerHTML =
    values
      .map(
        (item) =>
          '<span class="chip">' +
          item[0] +
          " <strong>" +
          item[1] +
          "</strong></span>"
      )
      .join("")

  resizeFrame()

}

course.addEventListener(
  "change",
  () => {

    fillTopics()
    render()

  }
)

topic.addEventListener(
  "change",
  render
)

pub.addEventListener(
  "change",
  render
)

sol.addEventListener(
  "change",
  render
)

search.addEventListener(
  "input",
  render
)

el("reset")
  .addEventListener(
    "click",
    () => {

      course.value =
        ""

      fillTopics()

      topic.value =
        ""

      pub.value =
        ""

      sol.value =
        ""

      search.value =
        ""

      sortKey =
        "topic"

      sortDir =
        1

      render()

    }
  )

document
  .querySelectorAll(
    "th[data-sort]"
  )
  .forEach(
    (header) => {

      header.addEventListener(
        "click",
        () => {

          const key =
            header.dataset.sort

          if (
            sortKey === key
          ) {
            sortDir *=
              -1
          } else {
            sortKey =
              key

            sortDir =
              1
          }

          render()

        }
      )

    }
  )

window.addEventListener(
  "load",
  resizeFrame
)

window.addEventListener(
  "resize",
  resizeFrame
)

fillCourses()
fillTopics()
render()

</script>

</body>

</html>`

// ------------------------------------------------------------
// QUARTZ WRAPPER
// ------------------------------------------------------------

const wrapper = `---
title: "Teacher QOD Control Panel"
publish: true
unlisted: true
---

<iframe
  src="../static/teacher-control-panel/"
  title="Teacher QOD Control Panel"
  scrolling="no"
  style="width:100%;height:900px;border:0;overflow:hidden;"
></iframe>
`

// ------------------------------------------------------------
// WRITE OUTPUT
// ------------------------------------------------------------

fs.mkdirSync(
  PANEL_DIR,
  {
    recursive: true,
  },
)

fs.writeFileSync(
  PANEL_FILE,
  html,
  "utf8",
)

fs.writeFileSync(
  WRAPPER_FILE,
  wrapper,
  "utf8",
)

console.log(
  "Teacher QOD Control Panel generated.",
)

console.log(
  `QOD source: ${QOD_ROOT}`,
)

console.log(
  `QODs found: ${records.length}`,
)

console.log(
  `Panel: ${path.relative(
    ROOT,
    PANEL_FILE,
  )}`,
)

console.log(
  `Wrapper: ${path.relative(
    ROOT,
    WRAPPER_FILE,
  )}`,
)

if (
  warnings.length
) {

  console.log(
    "Warnings:",
  )

  warnings.forEach(
    (warning) =>
      console.log(
        `- ${warning}`,
      ),
  )

}