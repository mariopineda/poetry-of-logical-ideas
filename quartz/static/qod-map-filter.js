(() => {
  const section =
    document.querySelector(".qod-map-section")

  if (!section) return

  const courseSelect =
    section.querySelector("#qod-map-course-filter")

  const topicSelect =
    section.querySelector("#qod-map-topic-filter")

  const resetButton =
    section.querySelector("#qod-map-reset")

  const count =
    section.querySelector("#qod-map-count")

  const prompt =
    section.querySelector("#qod-learning-path-prompt")

  const results =
    section.querySelector("#qod-learning-path-results")

  const empty =
    section.querySelector("#qod-learning-path-empty")

  const list =
    section.querySelector("#qod-learning-path-list")

  const items = [
    ...section.querySelectorAll(
      ".qod-learning-path-item"
    ),
  ]

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

  const coursesFor = (item) =>
    (item.dataset.qodCourses || "")
      .split("|")
      .filter(Boolean)

  const topicFor = (item) =>
    item.dataset.qodTopic || ""

  const qodNumber = (item) => {
    const name =
      item.dataset.qodName || ""

    const match =
      name.match(/(\d+)(?!.*\d)/)

    return match
      ? Number(match[1])
      : Number.MAX_SAFE_INTEGER
  }

  const allCourses = [
    ...new Set(
      items.flatMap(coursesFor)
    ),
  ].sort((a, b) =>
    a.localeCompare(
      b,
      undefined,
      { numeric: true }
    )
  )

  const topicsForCourse = (course) => [
    ...new Set(
      items
        .filter((item) =>
          coursesFor(item).includes(course)
        )
        .map(topicFor)
        .filter(Boolean)
    ),
  ].sort((a, b) =>
    a.localeCompare(
      b,
      undefined,
      { numeric: true }
    )
  )

  const fillCourseOptions = () => {
    courseSelect.innerHTML = ""

    const first =
      document.createElement("option")

    first.value = ""
    first.textContent =
      "Choose a course"

    courseSelect.appendChild(first)

    allCourses.forEach((course) => {
      const option =
        document.createElement("option")

      option.value = course
      option.textContent = course

      courseSelect.appendChild(option)
    })
  }

  const fillTopicOptions = (
    course,
    requested = ""
  ) => {
    topicSelect.innerHTML = ""

    const first =
      document.createElement("option")

    first.value = ""
    first.textContent =
      course
        ? "Choose a topic"
        : "Choose a course first"

    topicSelect.appendChild(first)

    if (!course) {
      topicSelect.disabled = true
      return
    }

    const topics =
      topicsForCourse(course)

    topics.forEach((topic) => {
      const option =
        document.createElement("option")

      option.value = topic
      option.textContent = topic

      topicSelect.appendChild(option)
    })

    topicSelect.disabled = false

    if (topics.includes(requested)) {
      topicSelect.value = requested
    }
  }

  const updatePath = () => {
    const course =
      courseSelect.value

    const topic =
      topicSelect.value

    resetButton.disabled =
      !course && !topic

    if (!course || !topic) {
      prompt.hidden = false
      results.hidden = true
      empty.hidden = true

      items.forEach((item) => {
        item.hidden = true
      })

      count.textContent =
        `${items.length} QODs in bank`

      return
    }

    const selected = items
      .filter(
        (item) =>
          coursesFor(item).includes(course) &&
          topicFor(item) === topic
      )
      .sort((a, b) => {
        const depthA =
          Number(a.dataset.qodDepth || 0)

        const depthB =
          Number(b.dataset.qodDepth || 0)

        if (depthA !== depthB) {
          return depthA - depthB
        }

        const numberA = qodNumber(a)
        const numberB = qodNumber(b)

        if (numberA !== numberB) {
          return numberA - numberB
        }

        return (
          a.dataset.qodName || ""
        ).localeCompare(
          b.dataset.qodName || "",
          undefined,
          { numeric: true }
        )
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

      const step =
        item.querySelector(
          ".qod-learning-step-number"
        )

      const status =
        item.querySelector(
          ".qod-learning-path-status"
        )

      if (step) {
        step.textContent =
          String(index + 1)
      }

      if (status) {
        if (index === 0) {
          status.textContent =
            "Start here"
        } else if (
          index ===
          selected.length - 1
        ) {
          status.textContent =
            "Most advanced"
        } else {
          status.textContent = ""
        }
      }
    })

    count.textContent =
      `${selected.length} QOD${
        selected.length === 1
          ? ""
          : "s"
      }`
  }

  fillCourseOptions()
  fillTopicOptions("")

  courseSelect.addEventListener(
    "change",
    () => {
      fillTopicOptions(
        courseSelect.value
      )

      updatePath()
    }
  )

  topicSelect.addEventListener(
    "change",
    updatePath
  )

  resetButton.addEventListener(
    "click",
    () => {
      courseSelect.value = ""
      fillTopicOptions("")
      updatePath()
    }
  )

  updatePath()
})()