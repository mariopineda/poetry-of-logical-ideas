/* OSC-QOD-PRESENTATION-V1: accessible, non-navigating classroom overlay. */
(() => {
  "use strict"

  const HOOK = "button[data-qod-presentation-trigger]"
  const MIN_SIZE = 1.0
  const MAX_SIZE = 2.8
  const STEP = 0.2
  const DEFAULT_SIZE = 1.65

  function isBoundary(element) {
    if (!(element instanceof Element)) return false

    if (element.matches(
      ".qod-solution-source, .qod-hidden-solution-source, .qod-relationships, " +
      "[data-qod-presentation-trigger], .qod-present-trigger",
    )) return true

    // On current Quartz builds, these elements are normally top-level siblings.
    // The descendant check also handles a future harmless wrapper change.
    if (element.querySelector(
      ".qod-solution-source, .qod-hidden-solution-source, .qod-relationships",
    )) return true

    return /^H[2-6]$/.test(element.tagName) &&
      element.textContent.trim().toLowerCase() === "solution"
  }

  function collectQuestion(trigger) {
    const fragment = document.createDocumentFragment()
    let node = trigger.nextSibling

    while (node) {
      if (node instanceof Element && isBoundary(node)) break
      // Never copy scripts or editing aids into the presentation.
      if (!(node instanceof Element && node.matches("script, style"))) {
        fragment.appendChild(node.cloneNode(true))
      }
      node = node.nextSibling
    }

    return fragment
  }

  function getSolution(trigger) {
    if (trigger.dataset.qodSolutionAllowed !== "true") return null

    const article = trigger.parentElement
    if (!article) return null

    // The existing visibility transformer removes the public Solution heading
    // and marks the actual solution callout. Hidden template content is never
    // read or copied by Presentation Mode.
    const source = article.querySelector(".qod-solution-source")
    if (!source || source.closest("template.qod-hidden-solution-source")) return null

    const content = source.querySelector(".callout-content") ?? source
    const clone = content.cloneNode(true)
    clone.querySelectorAll?.("script, style").forEach((element) => element.remove())
    return clone
  }

  function makeButton(label, action, className = "") {
    const button = document.createElement("button")
    button.type = "button"
    button.textContent = label
    button.className = "qod-present-action " + className
    button.addEventListener("click", action)
    return button
  }

  function openPresentation(trigger) {
    if (document.querySelector("dialog.qod-present-dialog[open]")) return

    const content = collectQuestion(trigger)
    if (!content.hasChildNodes()) return

    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    let size = DEFAULT_SIZE

    const dialog = document.createElement("dialog")
    dialog.className = "qod-present-dialog"
    dialog.setAttribute("aria-modal", "true")
    dialog.setAttribute("aria-labelledby", "qod-present-heading")

    const shell = document.createElement("div")
    shell.className = "qod-present-shell"
    const bar = document.createElement("div")
    bar.className = "qod-present-bar"

    const heading = document.createElement("strong")
    heading.className = "qod-present-bar-title"
    heading.textContent = "Presentation Mode"
    heading.id = "qod-present-heading"

    const controls = document.createElement("div")
    controls.className = "qod-present-controls"

    const sizeLabel = document.createElement("span")
    sizeLabel.className = "qod-present-size-label"
    sizeLabel.setAttribute("aria-live", "polite")

    const body = document.createElement("div")
    body.className = "qod-present-body"
    body.tabIndex = -1

    const sheet = document.createElement("main")
    sheet.className = "qod-present-sheet"

    const kicker = document.createElement("div")
    kicker.className = "qod-present-kicker"
    kicker.textContent = "QUESTION OF THE DAY"

    const qodTitle = document.createElement("h1")
    qodTitle.className = "qod-present-question-title"
    const originalHeading = document.querySelector("h1.article-title, .article-title")
    qodTitle.textContent = originalHeading?.textContent?.trim() ||
      document.title.split("|")[0].trim() || "Question of the Day"

    const question = document.createElement("section")
    question.className = "qod-present-question"
    question.appendChild(content)

    sheet.append(kicker, qodTitle, question)

    const solutionContent = getSolution(trigger)
    let solutionPanel = null
    let solutionButton = null

    if (solutionContent) {
      solutionPanel = document.createElement("section")
      solutionPanel.className = "qod-present-solution"
      solutionPanel.hidden = true
      const solutionHeading = document.createElement("h2")
      solutionHeading.textContent = "Solution"
      solutionPanel.append(solutionHeading, solutionContent)
      sheet.appendChild(solutionPanel)

      solutionButton = makeButton("Reveal solution", () => {
        const reveal = solutionPanel.hidden
        solutionPanel.hidden = !reveal
        solutionButton.textContent = reveal ? "Hide solution" : "Reveal solution"
        solutionButton.setAttribute("aria-expanded", String(reveal))
      })
      solutionButton.setAttribute("aria-controls", "qod-present-solution")
      solutionButton.setAttribute("aria-expanded", "false")
      solutionPanel.id = "qod-present-solution"
      solutionButton.classList.add("qod-present-reveal")
    }

    const updateSize = () => {
      sheet.style.setProperty("--qod-present-size", size.toFixed(2) + "rem")
      sizeLabel.textContent = Math.round(size / DEFAULT_SIZE * 100) + "%"
    }

    const minus = makeButton("A−", () => {
      size = Math.max(MIN_SIZE, Math.round((size - STEP) * 100) / 100)
      updateSize()
    })
    minus.setAttribute("aria-label", "Decrease presentation text size")

    const plus = makeButton("A+", () => {
      size = Math.min(MAX_SIZE, Math.round((size + STEP) * 100) / 100)
      updateSize()
    })
    plus.setAttribute("aria-label", "Increase presentation text size")

    const close = makeButton("Close  ×", () => dialog.close(), "qod-present-close")
    close.setAttribute("aria-label", "Close Presentation Mode")

    controls.append(minus, sizeLabel, plus)
    if (solutionButton) controls.appendChild(solutionButton)
    controls.appendChild(close)
    bar.append(heading, controls)
    body.appendChild(sheet)
    shell.append(bar, body)
    dialog.appendChild(shell)
    document.body.appendChild(dialog)
    updateSize()

    dialog.addEventListener("close", () => {
      document.body.style.overflow = previousOverflow
      dialog.remove()
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true })
      }
    }, { once: true })

    try {
      dialog.showModal()
      document.body.style.overflow = "hidden"
      close.focus({ preventScroll: true })
    } catch (error) {
      dialog.remove()
      document.body.style.overflow = previousOverflow
      console.error("Could not open QOD Presentation Mode:", error)
    }
  }

  function initialize() {
    document.querySelectorAll(HOOK).forEach((trigger) => {
      if (trigger.dataset.qodPresentationBound === "true") return
      trigger.dataset.qodPresentationBound = "true"
      trigger.addEventListener("click", () => openPresentation(trigger))
    })
  }

  document.addEventListener("nav", initialize)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true })
  } else {
    initialize()
  }
})()
