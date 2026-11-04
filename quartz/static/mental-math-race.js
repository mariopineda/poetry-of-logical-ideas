/* OSC-MENTAL-MATH-RACE-V1 — browser-only, two-sided student worksheet generator; NO answer keys. */
(() => {
  'use strict'

  const ROOT_SELECTOR = '[data-mental-math-race]'
  const SYMBOLS = { multiply: '×', add: '+', subtract: '−', divide: '÷' }
  const OPERATIONS = ['multiply', 'add', 'subtract', 'divide']
  const OPERATION_NAMES = {
    multiply: 'Multiplication', add: 'Addition', subtract: 'Subtraction',
    divide: 'Division', mixed: 'Mixed operations',
  }
  const DIFFICULTY_NAMES = { easy: 'Easy', standard: 'Standard', challenge: 'Challenge' }
  const LIMIT_SHEETS = 100
  const COUNTS = [20, 30, 40, 50, 60, 80, 100]
  const VERSION = 'OSC-MENTAL-MATH-RACE-V1'

  function randomSeed() {
    const bytes = new Uint32Array(1)
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      crypto.getRandomValues(bytes)
      return bytes[0]
    }
    return (Math.floor(Math.random() * 4294967296) ^ Date.now()) >>> 0
  }

  function seededRandom(seed) {
    let state = seed >>> 0
    return () => {
      state = (state + 0x6D2B79F5) >>> 0
      let t = Math.imul(state ^ (state >>> 15), 1 | state)
      t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
  }

  function shuffle(array, random) {
    const result = array.slice()
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1))
      const item = result[i]
      result[i] = result[j]
      result[j] = item
    }
    return result
  }

  function makeProblem(op, left, right) {
    return { op, a: left, b: right, key: `${op}:${left}:${right}` }
  }

  // Each displayed problem must be unique within its worksheet whenever
  // its selected fact range permits. Reversed operands are useful distinct
  // *prompts* for fluency work, although they have the same product.
  function problemPool(op, difficulty) {
    const pool = []
    const add = (a, b) => pool.push(makeProblem(op, a, b))
    if (op === 'multiply') {
      const lo = difficulty === 'challenge' ? 6 : 2
      const hi = difficulty === 'challenge' ? 20 : 12
      for (let a = lo; a <= hi; a++) {
        for (let b = lo; b <= hi; b++) {
          if (difficulty !== 'easy' || a <= 6 || b <= 6) add(a, b)
        }
      }
    } else if (op === 'add') {
      const lo = difficulty === 'easy' ? 0 : difficulty === 'challenge' ? 50 : 10
      const hi = difficulty === 'easy' ? 12 : difficulty === 'challenge' ? 199 : 49
      for (let a = lo; a <= hi; a++) {
        for (let b = difficulty === 'easy' ? lo : a; b <= hi; b++) add(a, b)
      }
    } else if (op === 'subtract') {
      const lo = difficulty === 'easy' ? 0 : difficulty === 'challenge' ? 100 : 10
      const hi = difficulty === 'easy' ? 18 : difficulty === 'challenge' ? 299 : 99
      const bLo = difficulty === 'challenge' ? 20 : 0
      const bHi = difficulty === 'easy' ? 9 : difficulty === 'challenge' ? 199 : 99
      for (let a = lo; a <= hi; a++) {
        for (let b = bLo; b <= Math.min(a, bHi); b++) add(a, b)
      }
    } else if (op === 'divide') {
      const divLo = difficulty === 'challenge' ? 4 : 2
      const divHi = difficulty === 'easy' ? 9 : difficulty === 'challenge' ? 20 : 12
      const quoLo = difficulty === 'challenge' ? 5 : 2
      const quoHi = difficulty === 'easy' ? 12 : difficulty === 'challenge' ? 25 : 12
      for (let divisor = divLo; divisor <= divHi; divisor++) {
        for (let quotient = quoLo; quotient <= quoHi; quotient++) {
          add(divisor * quotient, divisor)
        }
      }
    }
    if (!pool.length) throw new Error('No questions are available for this setting.')
    return pool
  }

  function drawFromPool(pool, count, random) {
    if (count <= pool.length) return shuffle(pool, random).slice(0, count)
    // When the chosen fact range is smaller than the requested page,
    // repeats are mathematically unavoidable. Distribute them fairly,
    // while ensuring successive generated pages still vary by content.
    const drawn = shuffle(pool, random)
    const appearances = new Map(drawn.map((problem) => [problem.key, 1]))
    while (drawn.length < count) {
      let chosen
      let attempts = 0
      do {
        const candidate = pool[Math.floor(random() * pool.length)]
        const times = appearances.get(candidate.key) || 0
        const acceptance = 1 / (1 + times * 0.5)
        if (random() < acceptance) chosen = candidate
        attempts++
      } while (!chosen && attempts < 45)
      if (!chosen) chosen = pool[Math.floor(random() * pool.length)]
      drawn.push(chosen)
      appearances.set(chosen.key, (appearances.get(chosen.key) || 0) + 1)
    }
    return drawn
  }

  function spreadQuestions(items, random) {
    // Avoid consecutive identical facts whenever feasible.
    const remaining = shuffle(items, random)
    for (let i = 1; i < remaining.length; i++) {
      if (remaining[i].key !== remaining[i - 1].key) continue
      let candidateIndex = -1
      for (let j = i + 1; j < remaining.length; j++) {
        if (remaining[j].key !== remaining[i - 1].key &&
            (j + 1 >= remaining.length || remaining[j + 1].key !== remaining[i].key)) {
          candidateIndex = j
          break
        }
      }
      if (candidateIndex >= 0) {
        const t = remaining[i]
        remaining[i] = remaining[candidateIndex]
        remaining[candidateIndex] = t
      }
    }
    return remaining
  }

  function generateQuestions(opts, random, pools) {
    if (opts.operation !== 'mixed') {
      return spreadQuestions(drawFromPool(pools[opts.operation], opts.questions, random), random)
    }
    const perOperation = Math.floor(opts.questions / 4)
    const counts = Object.fromEntries(OPERATIONS.map((op) => [op, perOperation]))
    const extra = shuffle(OPERATIONS, random)
    for (let i = 0; i < opts.questions % 4; i++) counts[extra[i]]++
    const mixed = OPERATIONS.flatMap((op) => drawFromPool(pools[op], counts[op], random))
    return spreadQuestions(mixed, random)
  }

  function validateOptions(options) {
    const sheets = Number(options.sheets)
    const questions = Number(options.questions)
    const operation = String(options.operation)
    const difficulty = String(options.difficulty)
    const paper = String(options.paper)
    if (!Number.isInteger(sheets) || sheets < 1 || sheets > LIMIT_SHEETS) {
      throw new Error('Choose 1–100 worksheets.')
    }
    if (!COUNTS.includes(questions)) throw new Error('Choose a supported question count.')
    if (!Object.prototype.hasOwnProperty.call(OPERATION_NAMES, operation)) {
      throw new Error('Choose an operation.')
    }
    if (!Object.prototype.hasOwnProperty.call(DIFFICULTY_NAMES, difficulty)) {
      throw new Error('Choose a difficulty level.')
    }
    if (paper !== 'letter' && paper !== 'a4') throw new Error('Choose Letter or A4 paper.')
    return { sheets, questions, operation, difficulty, paper }
  }

  function generateBatch(rawOptions, suppliedSeed) {
    const opts = validateOptions(rawOptions)
    const random = seededRandom(suppliedSeed === undefined ? randomSeed() : suppliedSeed)
    const ops = opts.operation === 'mixed' ? OPERATIONS : [opts.operation]
    const pools = Object.fromEntries(ops.map((op) => [op, problemPool(op, opts.difficulty)]))
    const sheets = []
    const signatures = new Set()
    for (let i = 0; i < opts.sheets; i++) {
      let questions, signature
      for (let attempt = 0; attempt < 100; attempt++) {
        questions = generateQuestions(opts, random, pools)
        // Require different question CONTENT, not merely different order.
        signature = questions.map((q) => q.key).sort().join('|')
        if (!signatures.has(signature)) break
      }
      if (signatures.has(signature)) throw new Error('Unable to create enough distinct worksheets with these settings.')
      signatures.add(signature)
      sheets.push({ questions, signature })
    }
    const repeatedFacts = ops.some((op) => pools[op].length <
      (opts.operation === 'mixed' ? Math.ceil(opts.questions / 4) : opts.questions))
    return { opts, sheets, repeatedFacts, version: VERSION }
  }

  function escapeHTML(input) {
    return String(input).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[c])
  }

  function renderQuestionSheet(sheet, opts) {
    const columns = opts.questions >= 90 ? 5 : 4
    const rows = Math.ceil(opts.questions / columns)
    const cells = sheet.questions.map((q) =>
      `<div class="race-problem"><span>${q.a} ${SYMBOLS[q.op]} ${q.b} =</span><i aria-hidden="true"></i></div>`,
    ).join('')
    return `<section class="race-sheet race-questions" aria-label="Mental Math Race questions">
      <header class="race-heading"><span>MENTAL MATH RACE</span><small>${opts.questions} questions</small></header>
      <div class="race-question-grid" style="--race-columns:${columns};--race-rows:${rows}">${cells}</div>
    </section>`
  }

  function renderStopSheet() {
    // This is the REVERSE of the questions, so students can write their names
    // before the simultaneous start, without viewing any questions.
    return `<section class="race-sheet race-stop" aria-label="STOP — reverse side">
      <div class="race-name"><strong>Name:</strong><span class="race-name-line" aria-hidden="true"></span></div>
      <div class="race-stop-message"><strong>STOP</strong>
        <p>Do not turn this page over<br>until your teacher tells you.</p></div>
    </section>`
  }

  function printCSS(opts) {
    const paper = opts.paper === 'a4' ? 'A4' : 'letter'
    const dimensions = opts.paper === 'a4' ? ['210mm', '297mm'] : ['8.5in', '11in']
    return `
@page { size: ${paper} portrait; margin: 0; }
* { box-sizing: border-box; }
html { background: #e8e9ed; }
body { margin: 0; color: #111; font-family: Arial, Helvetica, sans-serif; }
.race-print-toolbar { max-width: 980px; margin: 0 auto; padding: 15px 20px; font: 15px/1.55 Arial, sans-serif; }
.race-print-toolbar button { border: 0; border-radius: 8px; background: #263f5a; color: #fff; font: 700 15px Arial; padding: 12px 20px; cursor: pointer; }
.race-print-toolbar p { margin: 8px 0; }
.race-print-toolbar strong { font-weight: 700; }
.race-sheet {
 width: ${dimensions[0]}; height: ${dimensions[1]}; background: #fff; color: #101010;
 margin: 12px auto; padding: 0.58in 0.66in; position: relative; overflow: hidden;
 break-after: page; page-break-after: always; box-shadow: 0 3px 16px #0002;
 display: flex; flex-direction: column;
}
.race-sheet:last-child { break-after: auto; page-break-after: auto; }
.race-heading { min-height: 0.65in; display:flex; justify-content:space-between; align-items:flex-start;
 border-bottom:1.6pt solid #222; padding-bottom:0.13in; letter-spacing:0.035em;
 font-size:13pt; font-weight:700; }
.race-heading small { font-size:9pt; letter-spacing:0; font-weight:400; }
.race-question-grid { flex:1; display:grid; grid-template-columns: repeat(var(--race-columns),minmax(0,1fr));
 grid-template-rows: repeat(var(--race-rows),minmax(0,1fr)); column-gap:0.15in;
 padding-top:0.16in; align-items:stretch; }
.race-problem { display:flex; gap:0.05in; align-items:center; white-space:nowrap; min-width:0;
 font-size: ${opts.questions >= 90 ? '11.4pt' : opts.questions >= 80 ? '12.8pt' : '15pt'};
 line-height:1.1; padding-left:0.04in; }
.race-problem i { flex:0 0 0.38in; height:0.17in; border-bottom:0.8pt solid #777; align-self:center; }
.race-name { display:flex; align-items:end; gap:0.17in; font-size:16pt; line-height:1.4; }
.race-name-line { height:0.25in; border-bottom:1.5pt solid #111; flex:1; }
.race-stop-message { position:absolute; top:38%; left:0.65in; right:0.65in; text-align:center; }
.race-stop-message strong { font-size:64pt; font-weight:800; letter-spacing:0.08em; line-height:1; }
.race-stop-message p { margin:0.35in auto 0; font-size:23pt; line-height:1.45; max-width:6.8in; font-weight:600; }
@media print { html { background:#fff; } .race-print-toolbar { display:none !important; }
 .race-sheet { margin:0 !important; box-shadow:none !important; }
 body { margin:0 !important; padding:0 !important; }
}
@media screen and (max-width:950px) { .race-sheet { transform-origin: top center; }
 .race-print-toolbar { max-width:85vw; }
}
`
  }

  function printHTML(batch) {
    const opts = batch.opts
    // Do not reorder these: page 1 is questions, page 2 is the STOP/name
    // reverse. This exact pairing repeats for every individual worksheet.
    const pages = batch.sheets.map((sheet) =>
      renderQuestionSheet(sheet, opts) + '\n' + renderStopSheet()).join('\n')
    const pageCount = batch.sheets.length * 2
    const instruction = `${batch.sheets.length} worksheets · ${pageCount} pages. Print TWO-SIDED, FLIP ON LONG EDGE, 100% scale. Distribute each worksheet with the STOP side facing UP.`
    return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Mental Math Race — Student Worksheets</title>
<style>${printCSS(opts)}</style></head><body>
<div class="race-print-toolbar"><button type="button" onclick="window.print()">Print / Save as PDF</button>
<p><strong>${escapeHTML(instruction)}</strong></p>
<p>In the print dialog, select <strong>Two-sided → Flip on long edge</strong>, with one page per sheet. For a PDF, choose <strong>Save as PDF</strong>. There are no answer keys.</p></div>
<main>${pages}</main></body></html>`
  }

  function printableWindow(batch) {
    const output = printHTML(batch)
    const child = window.open('', '_blank')
    if (!child) {
      // A popup blocker must not prevent access to printable worksheets.
      const blob = new Blob([output], { type: 'text/html;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'mental-math-race-worksheets.html'
      document.body.appendChild(link)
      link.click()
      link.remove()
      setTimeout(() => URL.revokeObjectURL(url), 60000)
      return 'Your browser blocked the print tab. An offline printable HTML file was downloaded instead; open it and print.'
    }
    child.document.open()
    child.document.write(output)
    child.document.close()
    child.focus()
    return 'Your double-sided print preview opened in a new tab.'
  }

  function previewHTML(batch) {
    const questions = batch.sheets[0].questions
    const display = questions.slice(0, 20).map((q) =>
      `<span>${q.a} ${SYMBOLS[q.op]} ${q.b} =</span>`,
    ).join('')
    return `<div class="mmr-preview-pair">
      <div class="mmr-preview-paper" aria-label="Sample question side">
        <div class="mmr-preview-header"><b>MENTAL MATH RACE</b><small>${batch.opts.questions} questions</small></div>
        <div class="mmr-preview-grid">${display}</div>
        <div class="mmr-preview-fade">… ${batch.opts.questions - Math.min(20, questions.length)} more questions</div>
        <small class="mmr-preview-caption">Question side — printed first</small>
      </div>
      <div class="mmr-preview-paper mmr-preview-reverse" aria-label="Sample reverse side">
        <div class="mmr-preview-name">Name: <span></span></div>
        <strong>STOP</strong>
        <p>Do not turn this page over until your teacher tells you.</p>
        <small class="mmr-preview-caption">Reverse side — faces students</small>
      </div></div>`
  }

  function init(root) {
    if (root.dataset.mmrReady === 'true') return
    root.dataset.mmrReady = 'true'
    root.innerHTML = `
<section class="mmr-introduction" aria-label="Mental Math Race generator">
  <p>Create unique, printable Mental Math Race worksheets for an entire class. Each worksheet is <strong>two-sided</strong>: questions on one side and a <strong>STOP page with the student's name line</strong> on the reverse.</p>
</section>
<div class="mmr-layout">
  <form class="mmr-settings" aria-label="Worksheet settings">
    <h2>Worksheet settings</h2>
    <div class="mmr-control"><label for="mmr-operation">Practice type</label>
      <select id="mmr-operation" name="operation">
        <option value="multiply">Multiplication</option><option value="add">Addition</option>
        <option value="subtract">Subtraction</option><option value="divide">Division (whole-number answers)</option>
        <option value="mixed">Mixed — all four operations</option>
      </select></div>
    <div class="mmr-control"><label for="mmr-difficulty">Difficulty</label>
      <select id="mmr-difficulty" name="difficulty">
        <option value="easy">Easy</option><option selected value="standard">Standard</option>
        <option value="challenge">Challenge</option>
      </select>
      <p class="mmr-field-help" id="mmr-difficulty-help"></p>
    </div>
    <div class="mmr-two-fields">
      <div class="mmr-control"><label for="mmr-sheets">Number of worksheets</label>
        <input id="mmr-sheets" type="number" name="sheets" value="40" min="1" max="100" step="1" required></div>
      <div class="mmr-control"><label for="mmr-questions">Questions per worksheet</label>
        <select id="mmr-questions" name="questions">
          <option>20</option><option>30</option><option>40</option><option>50</option>
          <option selected>60</option><option>80</option><option>100</option>
        </select></div>
    </div>
    <div class="mmr-control"><label for="mmr-paper">Paper size</label>
      <select id="mmr-paper" name="paper"><option value="letter">US Letter (8.5 × 11 in)</option><option value="a4">A4</option></select></div>
    <button class="mmr-primary" type="submit">Generate unique worksheets</button>
    <p id="mmr-batch-status" class="mmr-batch-status" role="status" aria-live="polite"></p>
  </form>
  <section class="mmr-results" aria-label="Worksheet preview and printing">
    <h2>Preview and print</h2>
    <div class="mmr-print-instructions">
      <strong>How to print:</strong> two-sided · <strong>flip on LONG edge</strong> · 100% scale · one page per sheet.
      <span>Distribute each sheet with <strong>STOP facing up</strong>. Students write their names before everyone turns the sheet over together.</span>
    </div>
    <div id="mmr-preview" class="mmr-preview" aria-live="polite"></div>
    <div class="mmr-actions">
      <button type="button" class="mmr-primary" id="mmr-print" disabled>Open student print preview</button>
    </div>
    <p id="mmr-message" class="mmr-message" role="status" aria-live="polite"></p>
    <p class="mmr-note">Every worksheet has a different set of questions. Questions are not repeated within a worksheet when the chosen question range permits it. No worksheet numbers, question numbers, or answer keys are produced.</p>
  </section>
</div>`
    const form = root.querySelector('.mmr-settings')
    const preview = root.querySelector('#mmr-preview')
    const status = root.querySelector('#mmr-batch-status')
    const message = root.querySelector('#mmr-message')
    const print = root.querySelector('#mmr-print')
    const help = root.querySelector('#mmr-difficulty-help')
    let currentBatch = null
    const helpText = {
      multiply: {
        easy: 'Multiplication tables 2–6 (with factors through 12).',
        standard: 'Classic race: tables 2–12 (excluding 0 and 1).',
        challenge: 'Products of factors 6–20.',
      },
      add: { easy: 'Addition with numbers 0–12.', standard: 'Two-digit addition (10–49).', challenge: 'Larger addition (50–199).' },
      subtract: { easy: 'Nonnegative differences with smaller numbers.', standard: 'Nonnegative differences with two-digit numbers.', challenge: 'Larger nonnegative differences.' },
      divide: { easy: 'Exact divisions from small multiplication facts.', standard: 'Exact divisions using tables 2–12.', challenge: 'Exact divisions with larger factors.' },
      mixed: { easy: 'A balanced mix of easy addition, subtraction, multiplication and exact division.', standard: 'A balanced mix of all four standard-level operations.', challenge: 'A balanced mix of harder operations.' },
    }
    function updateHelp() {
      help.textContent = helpText[form.elements.operation.value][form.elements.difficulty.value]
    }
    function getOptions() {
      return {
        operation: form.elements.operation.value,
        difficulty: form.elements.difficulty.value,
        sheets: form.elements.sheets.value,
        questions: form.elements.questions.value,
        paper: form.elements.paper.value,
      }
    }
    function invalidate() {
      if (!currentBatch) return
      currentBatch = null
      print.disabled = true
      preview.innerHTML = '<p class="mmr-empty">Settings changed. Generate worksheets to update the preview and printable batch.</p>'
      status.textContent = 'Settings changed — please generate again.'
      message.textContent = ''
    }
    form.addEventListener('change', () => { updateHelp(); invalidate() })
    form.addEventListener('input', (event) => {
      if (event.target.name === 'sheets') invalidate()
    })
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      try {
        const batch = generateBatch(getOptions())
        currentBatch = batch
        preview.innerHTML = previewHTML(batch)
        status.textContent = `${batch.sheets.length} different worksheets ready · ${batch.opts.questions} questions each · ${batch.sheets.length * 2} student pages. ${batch.repeatedFacts ? 'Some repeated facts within sheets are unavoidable with these settings.' : 'No repeated facts within a sheet.'}`
        print.disabled = false
        message.textContent = ''
      } catch (err) {
        currentBatch = null
        print.disabled = true
        status.textContent = err.message || 'Unable to generate worksheets.'
        message.textContent = ''
      }
    })
    print.addEventListener('click', () => {
      if (currentBatch) message.textContent = printableWindow(currentBatch)
    })
    updateHelp()
    form.requestSubmit()
  }

  // Small, deterministic test and extension interface; no network or storage.
  window.MentalMathRaceGenerator = Object.freeze({
    generateBatch, printHTML, validateOptions, version: VERSION,
  })

  function initializeAll() {
    document.querySelectorAll(ROOT_SELECTOR).forEach(init)
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAll, { once: true })
  } else initializeAll()
})()
