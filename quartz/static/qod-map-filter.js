;(() => {
  const section = document.querySelector(".qod-map-section")

  if (!section) return

  const courseSelect = section.querySelector("#qod-map-course-filter")

  const topicSelect = section.querySelector("#qod-map-topic-filter")

  const resetButton = section.querySelector("#qod-map-reset")

  const count = section.querySelector("#qod-map-count")

  const prompt = section.querySelector("#qod-learning-path-prompt")

  const results = section.querySelector("#qod-learning-path-results")

  const empty = section.querySelector("#qod-learning-path-empty")

  const list = section.querySelector("#qod-learning-path-list")

  const items = [...section.querySelectorAll(".qod-learning-path-item")]

  if (
    !courseSelect ||
    !topicSelect ||
    !resetButton ||
    !count ||
    !prompt ||
    !results ||
    !empty ||
    !list ||
    items.length === 0
  ) {
    return
  }

  const coursesFor = (item) => (item.dataset.qodCourses || "").split("|").filter(Boolean)

  const topicFor = (item) => item.dataset.qodTopic || ""

  const qodNumber = (item) => {
    const name = item.dataset.qodName || ""

    const match = name.match(/(\d+)(?!.*\d)/)

    return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER
  }

  const learningOrderFor = (item) => {
    const raw = item.dataset.qodLearningOrder

    if (!raw) {
      return Number.POSITIVE_INFINITY
    }

    const value = Number(raw)

    return Number.isFinite(value)
      ? value
      : Number.POSITIVE_INFINITY
  }
  const allCourses = [...new Set(items.flatMap(coursesFor))].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true }),
  )

  const topicsForCourse = (course) =>
    [
      ...new Set(
        items
          .filter((item) => coursesFor(item).includes(course))
          .map(topicFor)
          .filter(Boolean),
      ),
    ].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  const fillCourseOptions = () => {
    courseSelect.innerHTML = ""

    const first = document.createElement("option")

    first.value = ""
    first.textContent = "Choose a course"

    courseSelect.appendChild(first)

    allCourses.forEach((course) => {
      const option = document.createElement("option")

      option.value = course
      option.textContent = course

      courseSelect.appendChild(option)
    })
  }

  const fillTopicOptions = (course, requested = "") => {
    topicSelect.innerHTML = ""

    const first = document.createElement("option")

    first.value = ""
    first.textContent = course ? "Choose a topic" : "Choose a course first"

    topicSelect.appendChild(first)

    if (!course) {
      topicSelect.disabled = true
      return
    }

    const topics = topicsForCourse(course)

    topics.forEach((topic) => {
      const option = document.createElement("option")

      option.value = topic
      option.textContent = topic

      topicSelect.appendChild(option)
    })

    topicSelect.disabled = false

    if (topics.includes(requested)) {
      topicSelect.value = requested
    }
  }

  // ----------------------------------------------------------
  // Inline QOD panels
  // ----------------------------------------------------------

  const relationshipLabels = new Set(["review first", "explore also", "build toward"])

  const toAbsoluteUrl = (value, baseUrl) => {
    if (
      !value ||
      value.startsWith("#") ||
      value.startsWith("data:") ||
      value.startsWith("mailto:") ||
      value.startsWith("tel:") ||
      value.startsWith("javascript:")
    ) {
      return value
    }

    try {
      return new URL(value, baseUrl).href
    } catch {
      return value
    }
  }

  const rewriteRelativeUrls = (container, baseUrl) => {
    container.querySelectorAll("[href]").forEach((element) => {
      const value = element.getAttribute("href")

      element.setAttribute("href", toAbsoluteUrl(value, baseUrl))
    })

    container.querySelectorAll("[src]").forEach((element) => {
      const value = element.getAttribute("src")

      element.setAttribute("src", toAbsoluteUrl(value, baseUrl))
    })

    container.querySelectorAll("[poster]").forEach((element) => {
      const value = element.getAttribute("poster")

      element.setAttribute("poster", toAbsoluteUrl(value, baseUrl))
    })

    container.querySelectorAll("[srcset]").forEach((element) => {
      const value = element.getAttribute("srcset")

      if (!value) return

      const rewritten = value
        .split(",")
        .map((candidate) => {
          const parts = candidate.trim().split(/\s+/)

          const url = parts.shift()

          if (!url) {
            return candidate
          }

          return [toAbsoluteUrl(url, baseUrl), ...parts].join(" ")
        })
        .join(", ")

      element.setAttribute("srcset", rewritten)
    })
  }

  const calloutTitle = (callout) =>
    (
      callout.querySelector(".callout-title-inner")?.textContent ??
      callout.querySelector(".callout-title")?.textContent ??
      ""
    )
      .trim()
      .toLowerCase()

  const removeRelationshipContent = (container) => {
    container.querySelectorAll(".qod-relationships").forEach((node) => node.remove())

    container.querySelectorAll(".callout").forEach((callout) => {
      if (relationshipLabels.has(calloutTitle(callout))) {
        callout.remove()
      }
    })

    container.querySelectorAll("script, style, link, meta").forEach((node) => node.remove())
  }

  const extractSolutionSource = (content) => {
    const holder = document.createElement("div")

    const hidden = content.querySelector("template.qod-hidden-solution-source")

    if (hidden) {
      hidden.remove()
      holder.dataset.solutionHidden = "true"

      return holder
    }

    const marked = content.querySelector(".qod-solution-source")

    if (marked) {
      holder.appendChild(marked.cloneNode(true))

      marked.remove()

      return holder
    }

    // Backward-compatible fallback for previously generated pages.
    const candidate = [...content.querySelectorAll(".callout")].find(
      (callout) => calloutTitle(callout) === "show solution",
    )

    if (candidate) {
      holder.appendChild(candidate.cloneNode(true))

      candidate.remove()
    }

    return holder
  }

  const solutionHasContent = (container) => {
    const text = container.textContent?.replace(/\s+/g, " ").trim() ?? ""

    if (text) {
      return true
    }

    return Boolean(
      container.querySelector(
        ["img", "svg", "table", "math", "mjx-container", ".katex", "video", "audio"].join(","),
      ),
    )
  }

  const makeSolutionBlock = (solutionSource, baseUrl) => {
    const block = document.createElement("div")

    block.className = "qod-inline-solution-block"

    const callout = solutionSource.querySelector(".qod-solution-source, .callout")

    const calloutContent = callout?.querySelector(".callout-content")

    const source = calloutContent ?? solutionSource

    if (solutionSource.dataset.solutionHidden === "true") {
      const hiddenNotice = document.createElement("p")

      hiddenNotice.className = "qod-inline-no-solution"
      hiddenNotice.textContent = "Solution is not shown for this QOD."

      block.appendChild(hiddenNotice)

      return block
    }

    rewriteRelativeUrls(source, baseUrl)

    if (!solutionHasContent(source)) {
      const unavailable = document.createElement("p")

      unavailable.className = "qod-inline-no-solution"

      unavailable.textContent = "No solution is currently available for this QOD."

      block.appendChild(unavailable)

      return block
    }

    const details = document.createElement("details")

    details.className = "qod-inline-solution"

    const summary = document.createElement("summary")

    summary.textContent = "Show solution"

    const body = document.createElement("div")

    body.className = "qod-inline-solution-content"

    ;[...source.childNodes].forEach((node) => {
      body.appendChild(node.cloneNode(true))
    })

    details.appendChild(summary)
    details.appendChild(body)
    block.appendChild(details)

    return block
  }

  const activateInjectedCallouts = (container) => {
    container.querySelectorAll(".callout.is-collapsible").forEach((callout) => {
      const title = callout.querySelector(".callout-title")

      if (!title) return

      title.setAttribute("role", "button")

      if (!title.hasAttribute("tabindex")) {
        title.setAttribute("tabindex", "0")
      }

      const syncExpanded = () => {
        title.setAttribute("aria-expanded", String(!callout.classList.contains("is-collapsed")))
      }

      const toggle = () => {
        callout.classList.toggle("is-collapsed")

        syncExpanded()
      }

      title.addEventListener("click", toggle)

      title.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return
        }

        event.preventDefault()
        toggle()
      })

      syncExpanded()
    })
  }

  const createInlinePanel = (item, link) => {
    const panel = document.createElement("div")

    const slug = item.dataset.qodSlug || ""

    const safeId = slug.replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^[-_]+|[-_]+$/g, "")

    panel.id = `qod-inline-${safeId}`

    panel.className = "qod-inline-panel"

    panel.hidden = true

    const body = document.createElement("div")

    body.className = "qod-inline-body"

    panel.appendChild(body)

    const footer = document.createElement("div")

    footer.className = "qod-inline-footer"

    const fullPage = document.createElement("a")

    fullPage.className = "qod-inline-full-page"

    fullPage.href = link.href

    fullPage.target = "_blank"
    fullPage.rel = "noopener noreferrer"

    fullPage.textContent = "Open full QOD page (new tab)"

    footer.appendChild(fullPage)
    panel.appendChild(footer)

    item.appendChild(panel)

    link.setAttribute("aria-controls", panel.id)

    link.setAttribute("aria-expanded", "false")

    return panel
  }

  const panelForItem = (item, link) =>
    item.querySelector(".qod-inline-panel") || createInlinePanel(item, link)

  const setToggleLabel = (link, open, loading = false) => {
    let action = link.querySelector(".qod-learning-path-action")

    if (!action) {
      action = document.createElement("span")

      action.className = "qod-learning-path-action"

      link.appendChild(action)
    }

    // ASCII-only UI text prevents the mojibake seen previously.
    if (loading) {
      action.textContent = "Loading..."
    } else {
      action.textContent = open ? "Close question" : "Open question"
    }
  }

  const loadQodIntoPanel = async (item, link, panel) => {
    if (item.dataset.qodLoaded === "true") {
      return
    }

    const body = panel.querySelector(".qod-inline-body")

    if (!body) return

    setToggleLabel(link, true, true)

    body.innerHTML = '<p class="qod-inline-loading">Loading question...</p>'

    try {
      const response = await fetch(link.href, {
        credentials: "same-origin",
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const html = await response.text()

      const parsed = new DOMParser().parseFromString(html, "text/html")

      const article = parsed.querySelector("article")

      if (!article) {
        throw new Error("QOD article content was not found.")
      }

      const content = document.createElement("div")

      content.className = "qod-inline-content"

      content.innerHTML = article.innerHTML

      const solutionSource = extractSolutionSource(content)

      removeRelationshipContent(content)

      rewriteRelativeUrls(content, response.url)

      const solutionBlock = makeSolutionBlock(solutionSource, response.url)

      content.appendChild(solutionBlock)

      body.replaceChildren(content)

      activateInjectedCallouts(content)

      item.dataset.qodLoaded = "true"
    } catch (error) {
      body.innerHTML = ""

      const errorBox = document.createElement("div")

      errorBox.className = "qod-inline-error"

      errorBox.textContent = "The question could not be loaded here. Use the full-page link below."

      body.appendChild(errorBox)

      console.error("Unable to load inline QOD:", error)
    } finally {
      setToggleLabel(link, !panel.hidden)
    }
  }

  const prepareInlinePanels = () => {
    items.forEach((item) => {
      const link = item.querySelector(".qod-learning-path-link")

      if (!link) return

      const panel = panelForItem(item, link)

      setToggleLabel(link, false)

      link.addEventListener("click", async (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return
        }

        event.preventDefault()

        const opening = panel.hidden

        panel.hidden = !opening

        link.setAttribute("aria-expanded", String(opening))

        item.classList.toggle("is-open", opening)

        setToggleLabel(link, opening)

        if (opening) {
          await loadQodIntoPanel(item, link, panel)
        }
      })
    })
  }

  const closeAllPanels = () => {
    items.forEach((item) => {
      const panel = item.querySelector(".qod-inline-panel")

      const link = item.querySelector(".qod-learning-path-link")

      if (panel) {
        panel.hidden = true
      }

      if (link) {
        link.setAttribute("aria-expanded", "false")

        setToggleLabel(link, false)
      }

      item.classList.remove("is-open")
    })
  }

  // ----------------------------------------------------------
  // Course/topic learning-path ordering
  // ----------------------------------------------------------

  const updatePath = () => {
    const course = courseSelect.value

    const topic = topicSelect.value

    resetButton.disabled = !course && !topic

    closeAllPanels()

    if (!course || !topic) {
      prompt.hidden = false
      results.hidden = true
      empty.hidden = true

      items.forEach((item) => {
        item.hidden = true
      })

      count.textContent = `${items.length} QODs in bank`

      return
    }

    const selected = items.filter(
      (item) => coursesFor(item).includes(course) && topicFor(item) === topic,
    )

    // Build a prerequisite graph using ONLY QODs in the
    // currently selected course/topic. External prerequisites
    // remain visible as "Review first", but they no longer
    // push a QOD farther down this topic's learning path.
    const selectedByName = new Map(
      selected.map((item) => [(item.dataset.qodName || "").toLowerCase(), item]),
    )

    const prerequisitesByName = new Map(
      selected.map((item) => [(item.dataset.qodName || "").toLowerCase(), new Set()]),
    )

    const relationshipNamesFor = (item, key) =>
      (item.dataset[key] || "")
        .split("|")
        .map((name) => name.trim())
        .filter(Boolean)

    const addLocalDirected = (prerequisiteName, laterName) => {
      const prerequisiteKey = prerequisiteName.toLowerCase()
      const laterKey = laterName.toLowerCase()

      if (
        prerequisiteKey === laterKey ||
        !selectedByName.has(prerequisiteKey) ||
        !selectedByName.has(laterKey)
      ) {
        return
      }

      prerequisitesByName.get(laterKey)?.add(prerequisiteKey)
    }

    selected.forEach((item) => {
      const currentName = item.dataset.qodName || ""

      relationshipNamesFor(item, "qodReviewFirst").forEach((prerequisiteName) => {
        addLocalDirected(prerequisiteName, currentName)
      })

      relationshipNamesFor(item, "qodBuildToward").forEach((laterName) => {
        addLocalDirected(currentName, laterName)
      })
    })

    const localDepthMemo = new Map()

    const localLearningDepth = (name, visiting = new Set()) => {
      const key = name.toLowerCase()

      if (localDepthMemo.has(key)) {
        return localDepthMemo.get(key)
      }

      if (visiting.has(key)) {
        return 0
      }

      const next = new Set(visiting)
      next.add(key)

      const parents = [...(prerequisitesByName.get(key) || [])]

      const depth =
        parents.length === 0
          ? 0
          : Math.max(
              ...parents.map(
                (parentKey) => localLearningDepth(parentKey, next) + 1,
              ),
            )

      localDepthMemo.set(key, depth)
      return depth
    }

    selected.sort((a, b) => {
      const explicitOrderA = learningOrderFor(a)
      const explicitOrderB = learningOrderFor(b)

      if (explicitOrderA !== explicitOrderB) {
        return explicitOrderA - explicitOrderB
      }

      const depthA = localLearningDepth(a.dataset.qodName || "")
      const depthB = localLearningDepth(b.dataset.qodName || "")

      if (depthA !== depthB) {
        return depthA - depthB
      }

      const numberA = qodNumber(a)
      const numberB = qodNumber(b)

      if (numberA !== numberB) {
        return numberA - numberB
      }

      return (a.dataset.qodName || "").localeCompare(b.dataset.qodName || "", undefined, {
        numeric: true,
      })
    })

    prompt.hidden = true

    items.forEach((item) => {
      item.hidden = true
    })

    if (selected.length === 0) {
      results.hidden = true
      empty.hidden = false
      count.textContent = "0 QODs"

      return
    }

    empty.hidden = true
    results.hidden = false

    selected.forEach((item, index) => {
      item.hidden = false
      list.appendChild(item)

      const step = item.querySelector(".qod-learning-step-number")

      const status = item.querySelector(".qod-learning-path-status")

      if (step) {
        step.textContent = String(index + 1)
      }

      if (status) {
        if (index === 0) {
          status.textContent = "Start here"
        } else if (index === selected.length - 1) {
          status.textContent = "Most advanced"
        } else {
          status.textContent = ""
        }
      }
    })

    count.textContent = `${selected.length} QOD${selected.length === 1 ? "" : "s"}`
  }

  fillCourseOptions()
  fillTopicOptions("")
  prepareInlinePanels()

  courseSelect.addEventListener("change", () => {
    fillTopicOptions(courseSelect.value)

    updatePath()
  })

  topicSelect.addEventListener("change", updatePath)

  resetButton.addEventListener("click", () => {
    courseSelect.value = ""

    fillTopicOptions("")
    updatePath()
  })

  updatePath()
})()
