import fs from "node:fs"
import path from "node:path"
import { parse as parseYaml } from "yaml"

import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"
import { pathToRoot, slugifyFilePath } from "@quartz-community/utils"

type QodEntry = {
  name: string
  slug: string
  courses: string[]
  topic: string
  prerequisites: string[]
  related: string[]
}

const CONTENT_ROOT = path.resolve("content")
const QOD_ROOT = path.join(
  CONTENT_ROOT,
  "Math",
)

function getMarkdownFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return []

  const results: string[] = []

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      results.push(...getMarkdownFiles(fullPath))
    } else if (
      entry.isFile() &&
      entry.name.toLowerCase().endsWith(".md")
    ) {
      results.push(fullPath)
    }
  }

  return results
}

function extractFrontmatter(source: string): Record<string, any> | null {
  const cleanSource = source.replace(/^\uFEFF/, "")

  const match = cleanSource.match(
    /^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/,
  )

  if (!match) return null

  try {
    return parseYaml(match[1]) as Record<string, any>
  } catch {
    return null
  }
}

function extractRelationshipTarget(value: unknown): string | null {
  if (typeof value !== "string") return null

  let target = value.trim()

  if (target.startsWith("[[") && target.endsWith("]]")) {
    target = target.slice(2, -2)
  }

  target = target.split("|")[0] ?? target
  target = target.split("#")[0] ?? target
  target = target.trim().replace(/\\/g, "/")

  target = path.posix.basename(target)
  target = target.replace(/\.md$/i, "")

  return target.length > 0 ? target : null
}

function relationshipList(value: unknown): string[] {
  if (!Array.isArray(value)) return []

  return value
    .map(extractRelationshipTarget)
    .filter((value): value is string => value !== null)
}

function stringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .filter((item): item is string => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean)
  }

  if (typeof value === "string" && value.trim()) {
    return [value.trim()]
  }

  return []
}

const qodByName = new Map<string, QodEntry>()
const qodBySlug = new Map<string, QodEntry>()

for (const filePath of getMarkdownFiles(QOD_ROOT)) {
  const source = fs.readFileSync(filePath, "utf8")
  const frontmatter = extractFrontmatter(source)

  if (frontmatter?.type !== "qod") continue

  const name = path.basename(filePath, ".md")

  const relativePath = path
    .relative(CONTENT_ROOT, filePath)
    .split(path.sep)
    .join("/")

  const slug = slugifyFilePath(relativePath as any, true) as string

  const entry: QodEntry = {
    name,
    slug,
    courses: stringList(
      frontmatter.course ??
        frontmatter.courses,
    ),
    topic:
      typeof frontmatter.topic === "string"
        ? frontmatter.topic.trim()
        : "",
    prerequisites: relationshipList(frontmatter.prerequisites),
    related: relationshipList(frontmatter.related),
  }

  qodByName.set(name.toLowerCase(), entry)
  qodBySlug.set(slug, entry)
}

// Reverse prerequisite map:
//
// If QOD B lists QOD A as a prerequisite,
// QOD A automatically displays QOD B under "Builds Toward".
//
// This means we only maintain the prerequisite relationship once.
const buildsToward = new Map<string, Set<string>>()

// Related relationships are automatically treated as two-way.
//
// The frontmatter property remains:
//
// related:
//
// Students see this relationship as:
//
// Explore Also
const relatedBothWays = new Map<string, Set<string>>()

function addToMap(
  map: Map<string, Set<string>>,
  key: string,
  value: string,
) {
  if (!map.has(key)) {
    map.set(key, new Set())
  }

  map.get(key)!.add(value)
}

for (const entry of qodBySlug.values()) {
  for (const prerequisiteName of entry.prerequisites) {
    const prerequisite = qodByName.get(
      prerequisiteName.toLowerCase(),
    )

    if (prerequisite) {
      addToMap(
        buildsToward,
        prerequisite.slug,
        entry.slug,
      )
    }
  }

  for (const relatedName of entry.related) {
    const related = qodByName.get(
      relatedName.toLowerCase(),
    )

    if (related) {
      addToMap(
        relatedBothWays,
        entry.slug,
        related.slug,
      )

      addToMap(
        relatedBothWays,
        related.slug,
        entry.slug,
      )
    }
  }
}

componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  filterFn: (node: {
    slugSegment?: string
    slugSegments?: string[]
    displayName: string
    isFolder: boolean
  }) => {
    // Hide Quartz's tags folder
    if (node.slugSegment === "tags") return false

    // Hide the FAQ folder itself.
    if (
      node.isFolder &&
      node.slugSegment?.toLowerCase() === "faq"
    ) {
      return false
    }

    // Hide the raw QOD Question Bank folder from the sidebar.
    // Individual QOD pages remain accessible through the browser
    // and through relationship links.
    if (
      node.isFolder &&
      (
        node.slugSegment?.toLowerCase() === "qod-question-bank" ||
        node.displayName?.toLowerCase() === "qod question bank"
      )
    ) {
      return false
    }

    // Hide the standalone QOD Graph page from the Explorer.
    // It is intentionally linked only from the About page.
    if (
      !node.isFolder &&
      (
        node.slugSegment?.toLowerCase() === "qod-graph" ||
        node.displayName?.toLowerCase() === "qod graph"
      )
    ) {
      return false
    }

    // Hide the standalone QOD Browser page.
    // It remains embedded inside QOD Practice Questions.
    if (
      !node.isFolder &&
      (
        node.slugSegment?.toLowerCase() === "qod-browser.base" ||
        node.slugSegment?.toLowerCase() === "qod-browser"
      )
    ) {
      return false
    }

    return true
  },

  mapFn: (node: {
    slugSegment?: string
    slugSegments?: string[]
    displayName: string
    isFolder: boolean
  }) => {
    // Display the Math folder simply as "Math"
    // even though Math/index.md is QOD Practice Questions.
    if (
      node.isFolder &&
      node.slugSegment?.toLowerCase() === "math"
    ) {
      node.displayName = "Math"
    }
  },

  sortFn: (
    a: { displayName: string; isFolder: boolean },
    b: { displayName: string; isFolder: boolean },
  ) => {
    // Preferred top-level order:
    // Math
    // Frequently Asked Questions
    // About
    const preferredOrder = [
      "math",
      "frequently asked questions",
      "about",
    ]

    const aName = a.displayName.toLowerCase()
    const bName = b.displayName.toLowerCase()

    const aPriority = preferredOrder.indexOf(aName)
    const bPriority = preferredOrder.indexOf(bName)

    if (aPriority !== -1 && bPriority !== -1) {
      return aPriority - bPriority
    }

    if (aPriority !== -1) return -1
    if (bPriority !== -1) return 1

    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    return a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })
  },
})

const config = await loadQuartzConfig()

// ------------------------------------------------------------
// QOD SOLUTION VISIBILITY
// ------------------------------------------------------------
//
// Standalone QOD behaviour:
//
// show_solution: false
//   -> keep the rendered solution inside an inert <template>.
//      It remains invisible on the standalone QOD page.
//
// show_solution: true (or omitted)
//   -> render the solution normally.
//
// The hidden template allows the QOD Learning Path to offer the
// existing solution as a nested collapsible without changing the
// standalone QOD page's visible behaviour.
//
config.plugins.transformers.push({
  name: "QodSolutionVisibility",

  htmlPlugins() {
    return [
      () => (tree: any, file: any) => {
        const frontmatter = file.data.frontmatter

        if (frontmatter?.type !== "qod") {
          return
        }

        const children = tree.children ?? []

        const getText = (node: any): string => {
          if (node?.type === "text") {
            return String(node.value ?? "")
          }

          return (node?.children ?? [])
            .map(getText)
            .join("")
        }

        const solutionHeadingIndex = children.findIndex(
          (node: any) =>
            node?.type === "element" &&
            node?.tagName === "h2" &&
            getText(node).trim().toLowerCase() === "solution",
        )

        if (solutionHeadingIndex === -1) {
          return
        }

        const solutionNodes = children.splice(
          solutionHeadingIndex,
        )

        // The nested solution control supplies its own heading.
        solutionNodes.shift()

        const markSolutionCallout = (
          node: any,
        ) => {
          if (node?.type === "element") {
            const classes =
              node.properties?.className

            if (
              Array.isArray(classes) &&
              classes.includes("callout") &&
              !classes.includes(
                "qod-solution-source",
              )
            ) {
              classes.push(
                "qod-solution-source",
              )
            }
          }

          for (
            const child of
            node?.children ?? []
          ) {
            markSolutionCallout(child)
          }
        }

        for (const node of solutionNodes) {
          markSolutionCallout(node)
        }

        if (
          frontmatter?.show_solution === false
        ) {
          children.push({
            type: "element",
            tagName: "template",
            properties: {
              className: [
                "qod-hidden-solution-source",
              ],
            },
            children: solutionNodes,
          })

          return
        }

        children.push(...solutionNodes)
      },
    ]
  },
} as any)
// ------------------------------------------------------------
// QOD RELATIONSHIP DISPLAY
// ------------------------------------------------------------
//
// Internal Obsidian properties:
//
// prerequisites:
// related:
//
// Student-facing labels:
//
// Review First
// Explore Also
// Builds Toward
//
// Builds Toward is generated automatically from incoming
// prerequisite links.
//
// Related links are displayed automatically in both directions.
config.plugins.transformers.push({
  name: "QodRelationships",

  htmlPlugins() {
    return [
      () => (tree: any, file: any) => {
        const currentSlug = String(file.data.slug ?? "")
        const currentQod = qodBySlug.get(currentSlug)

        if (!currentQod) return

        const prerequisiteSlugs = currentQod.prerequisites
          .map((name) =>
            qodByName.get(name.toLowerCase())?.slug,
          )
          .filter((slug): slug is string => Boolean(slug))

        const relatedSlugs = [
          ...(relatedBothWays.get(currentSlug) ?? []),
        ]

        const buildsTowardSlugs = [
          ...(buildsToward.get(currentSlug) ?? []),
        ]

        if (
          prerequisiteSlugs.length === 0 &&
          relatedSlugs.length === 0 &&
          buildsTowardSlugs.length === 0
        ) {
          return
        }

        const root = pathToRoot(currentSlug as any)

        const makeLink = (targetSlug: string) => {
          const target = qodBySlug.get(targetSlug)

          if (!target) return null

          const courseBadges = target.courses.map((course) => ({
            type: "element",
            tagName: "span",
            properties: {
              className: ["qod-course-badge"],
            },
            children: [
              {
                type: "text",
                value: course,
              },
            ],
          }))

          const children: any[] = [
            {
              type: "element",
              tagName: "a",
              properties: {
                href: `${root}/${target.slug}`,
                className: ["qod-relationship-link"],
              },
              children: [
                {
                  type: "text",
                  value: target.name,
                },
              ],
            },
          ]

          if (courseBadges.length > 0) {
            children.push({
              type: "element",
              tagName: "div",
              properties: {
                className: ["qod-course-list"],
              },
              children: courseBadges,
            })
          }

          return {
            type: "element",
            tagName: "li",
            properties: {
              className: ["qod-relationship-item"],
            },
            children,
          }
        }

        const makeGroup = (
          heading: string,
          description: string,
          targetSlugs: string[],
          className: string,
        ) => {
          const links = targetSlugs
            .map(makeLink)
            .filter(Boolean)

          if (links.length === 0) return null

          return {
            type: "element",
            tagName: "div",
            properties: {
              className: [
                "qod-relationship-card",
                className,
              ],
            },
            children: [
              {
                type: "element",
                tagName: "h3",
                properties: {},
                children: [
                  {
                    type: "text",
                    value: heading,
                  },
                ],
              },
              {
                type: "element",
                tagName: "p",
                properties: {
                  className: ["qod-relationship-description"],
                },
                children: [
                  {
                    type: "text",
                    value: description,
                  },
                ],
              },
              {
                type: "element",
                tagName: "ul",
                properties: {
                  className: ["qod-relationship-list"],
                },
                children: links,
              },
            ],
          }
        }

        const groups = [
          makeGroup(
            "Review First",
            "These questions practise skills you may need for this QOD.",
            prerequisiteSlugs,
            "review-first",
          ),

          makeGroup(
            "Explore Also",
            "These questions connect to the same mathematical ideas.",
            relatedSlugs,
            "explore-also",
          ),

          makeGroup(
            "Builds Toward",
            "These questions build on what you are practising here.",
            buildsTowardSlugs,
            "builds-toward",
          ),
        ].filter(Boolean) as any[]

        const relationshipSection = {
          type: "element",
          tagName: "section",
          properties: {
            className: ["qod-relationships"],
          },
          children: [
            {
              type: "element",
              tagName: "hr",
              properties: {},
              children: [],
            },
            {
              type: "element",
              tagName: "h2",
              properties: {},
              children: [
                {
                  type: "text",
                  value: "Explore this idea",
                },
              ],
            },
            {
              type: "element",
              tagName: "div",
              properties: {
                className: ["qod-relationship-grid"],
              },
              children: groups,
            },
          ],
        }
        // Keep the immediate QOD flow together:
        //
        // Question
        // Solution
        // Explore this idea
        //
        // If no solution exists, this simply follows the Question.
        tree.children.push(relationshipSection)
      },
    ]
  },
} as any)


// ------------------------------------------------------------
// QOD LEARNING PATH
// ------------------------------------------------------------
//
// Students choose a course and topic, then receive one ordered
// progression from foundational QODs toward more advanced QODs.
//
// Ordering is based primarily on the canonical QOD relationship
// graph (Review First / Build Toward). QOD numbers are used only
// by the browser as a deterministic tie-breaker for questions at
// the same prerequisite depth.
//
config.plugins.transformers.push({
  name: "QodMap",

  htmlPlugins() {
    return [
      () => (tree: any, file: any) => {
        const currentSlug = String(file.data.slug ?? "")
        const frontmatter = file.data.frontmatter

        if (
          frontmatter?.type !== "qod-map" &&
          currentSlug !== "math/qod-map"
        ) {
          return
        }

        const liveQods =
          loadCanonicalQodGraphEntries()
            .filter(
              (entry) =>
                !entry.slug
                  .toLowerCase()
                  .includes("backup"),
            )
            .sort((a, b) =>
              a.name.localeCompare(
                b.name,
                undefined,
                { numeric: true },
              ),
            )

        if (liveQods.length === 0) return

        const liveByName = new Map(
          liveQods.map((entry) => [
            entry.name.toLowerCase(),
            entry,
          ]),
        )

        const prerequisitesBySlug =
          new Map<string, Set<string>>(
            liveQods.map((entry) => [
              entry.slug,
              new Set<string>(),
            ]),
          )

        const addDirected = (
          prerequisiteSlug: string,
          laterSlug: string,
        ) => {
          if (
            !prerequisiteSlug ||
            !laterSlug ||
            prerequisiteSlug === laterSlug ||
            !prerequisitesBySlug.has(
              prerequisiteSlug,
            ) ||
            !prerequisitesBySlug.has(
              laterSlug,
            )
          ) {
            return
          }

          prerequisitesBySlug
            .get(laterSlug)!
            .add(prerequisiteSlug)
        }

        for (const entry of liveQods) {
          for (
            const prerequisiteName of
            entry.reviewFirst
          ) {
            const prerequisite =
              liveByName.get(
                prerequisiteName.toLowerCase(),
              )

            if (prerequisite) {
              addDirected(
                prerequisite.slug,
                entry.slug,
              )
            }
          }

          for (
            const laterName of
            entry.buildToward
          ) {
            const later =
              liveByName.get(
                laterName.toLowerCase(),
              )

            if (later) {
              addDirected(
                entry.slug,
                later.slug,
              )
            }
          }
        }

        const depthMemo =
          new Map<string, number>()

        const learningDepth = (
          slug: string,
          visiting = new Set<string>(),
        ): number => {
          const cached = depthMemo.get(slug)
          if (cached !== undefined) {
            return cached
          }

          if (visiting.has(slug)) {
            return 0
          }

          const next = new Set(visiting)
          next.add(slug)

          const parents = [
            ...(
              prerequisitesBySlug.get(slug) ??
              new Set<string>()
            ),
          ]

          const depth =
            parents.length === 0
              ? 0
              : Math.max(
                  ...parents.map(
                    (parentSlug) =>
                      learningDepth(
                        parentSlug,
                        next,
                      ) + 1,
                  ),
                )

          depthMemo.set(slug, depth)
          return depth
        }

        const root =
          pathToRoot(currentSlug as any)

        const qodItems = liveQods.map(
          (entry) => {
            const reviewFirst =
              entry.reviewFirst.filter(
                (name) =>
                  liveByName.has(
                    name.toLowerCase(),
                  ),
              )

            const itemChildren: any[] = [
              {
                type: "element",
                tagName: "a",
                properties: {
                  href: `${root}/${entry.slug}`,
                  className: [
                    "qod-learning-path-link",
                  ],
                },
                children: [
                  {
                    type: "element",
                    tagName: "span",
                    properties: {
                      className: [
                        "qod-learning-step",
                      ],
                      ariaHidden: "true",
                    },
                    children: [
                      {
                        type: "element",
                        tagName: "span",
                        properties: {
                          className: [
                            "qod-learning-step-number",
                          ],
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    type: "element",
                    tagName: "span",
                    properties: {
                      className: [
                        "qod-learning-path-main",
                      ],
                    },
                    children: [
                      {
                        type: "element",
                        tagName: "span",
                        properties: {
                          className: [
                            "qod-learning-path-title",
                          ],
                        },
                        children: [
                          {
                            type: "text",
                            value: entry.name,
                          },
                        ],
                      },
                      {
                        type: "element",
                        tagName: "span",
                        properties: {
                          className: [
                            "qod-learning-path-status",
                          ],
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ]

            if (reviewFirst.length > 0) {
              itemChildren.push({
                type: "element",
                tagName: "div",
                properties: {
                  className: [
                    "qod-learning-review-first",
                  ],
                },
                children: [
                  {
                    type: "text",
                    value:
                      `Review first: ${reviewFirst.join(", ")}`,
                  },
                ],
              })
            }

            return {
              type: "element",
              tagName: "li",
              properties: {
                className: [
                  "qod-learning-path-item",
                ],
                hidden: true,
                "data-qod-slug": entry.slug,
                "data-qod-name": entry.name,
                "data-qod-courses":
                  entry.courses.join("|"),
                "data-qod-topic": entry.topic,
                "data-qod-review-first":
                  entry.reviewFirst.join("|"),
                "data-qod-build-toward":
                  entry.buildToward.join("|"),
                "data-qod-depth":
                  String(
                    learningDepth(entry.slug),
                  ),
              },
              children: itemChildren,
            }
          },
        )

        const filterControls = {
          type: "element",
          tagName: "div",
          properties: {
            className: ["qod-map-filters"],
          },
          children: [
            {
              type: "element",
              tagName: "label",
              properties: {
                className: ["qod-map-filter"],
              },
              children: [
                {
                  type: "element",
                  tagName: "span",
                  properties: {},
                  children: [
                    {
                      type: "text",
                      value: "Course",
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "select",
                  properties: {
                    id: "qod-map-course-filter",
                    className: ["qod-map-select"],
                  },
                  children: [
                    {
                      type: "element",
                      tagName: "option",
                      properties: {
                        value: "",
                      },
                      children: [
                        {
                          type: "text",
                          value:
                            "Choose a course",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "element",
              tagName: "label",
              properties: {
                className: ["qod-map-filter"],
              },
              children: [
                {
                  type: "element",
                  tagName: "span",
                  properties: {},
                  children: [
                    {
                      type: "text",
                      value: "Topic",
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "select",
                  properties: {
                    id: "qod-map-topic-filter",
                    className: ["qod-map-select"],
                    disabled: true,
                  },
                  children: [
                    {
                      type: "element",
                      tagName: "option",
                      properties: {
                        value: "",
                      },
                      children: [
                        {
                          type: "text",
                          value:
                            "Choose a topic",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "element",
              tagName: "button",
              properties: {
                id: "qod-map-reset",
                type: "button",
                className: ["qod-map-reset"],
                disabled: true,
              },
              children: [
                {
                  type: "text",
                  value: "Reset",
                },
              ],
            },
            {
              type: "element",
              tagName: "span",
              properties: {
                id: "qod-map-count",
                className: ["qod-map-count"],
              },
              children: [
                {
                  type: "text",
                  value:
                    `${liveQods.length} QODs in bank`,
                },
              ],
            },
          ],
        }

        const mapSection = {
          type: "element",
          tagName: "section",
          properties: {
            className: ["qod-map-section"],
          },
          children: [
            {
              type: "element",
              tagName: "h2",
              properties: {},
              children: [
                {
                  type: "text",
                  value: "QOD Learning Path",
                },
              ],
            },
            {
              type: "element",
              tagName: "p",
              properties: {},
              children: [
                {
                  type: "text",
                  value:
                    "Choose a course and topic to generate a recommended progression from foundational QODs to more advanced questions.",
                },
              ],
            },
            filterControls,
            {
              type: "element",
              tagName: "div",
              properties: {
                className: [
                  "qod-map-selection-prompt",
                ],
                id: "qod-learning-path-prompt",
              },
              children: [
                {
                  type: "element",
                  tagName: "strong",
                  properties: {},
                  children: [
                    {
                      type: "text",
                      value:
                        "Choose a course and a topic to generate your learning path.",
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "span",
                  properties: {},
                  children: [
                    {
                      type: "text",
                      value:
                        "Questions are ordered from foundational to more advanced using their prerequisite relationships.",
                    },
                  ],
                },
              ],
            },
            {
              type: "element",
              tagName: "div",
              properties: {
                className: [
                  "qod-learning-path-results",
                ],
                id: "qod-learning-path-results",
                hidden: true,
              },
              children: [
                {
                  type: "element",
                  tagName: "div",
                  properties: {
                    className: [
                      "qod-learning-path-heading",
                    ],
                  },
                  children: [
                    {
                      type: "element",
                      tagName: "h3",
                      properties: {},
                      children: [
                        {
                          type: "text",
                          value:
                            "Recommended progression",
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      properties: {},
                      children: [
                        {
                          type: "text",
                          value:
                            "Complete the QODs in this order.",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "ol",
                  properties: {
                    className: [
                      "qod-learning-path-list",
                    ],
                    id: "qod-learning-path-list",
                  },
                  children: qodItems,
                },
              ],
            },
            {
              type: "element",
              tagName: "div",
              properties: {
                className: [
                  "qod-learning-path-empty",
                ],
                id: "qod-learning-path-empty",
                hidden: true,
              },
              children: [
                {
                  type: "text",
                  value:
                    "No QODs currently match this course and topic.",
                },
              ],
            },
            {
              type: "element",
              tagName: "script",
              properties: {
                src:
                  `${root}/static/qod-map-filter.js`,
              },
              children: [],
            },
          ],
        }

        tree.children.push(mapSection)
      },
    ]
  },
} as any)
//
// ------------------------------------------------------------
// Internal navigation should open pages at the top.
// Anchor links and browser Back/Forward remain unaffected.
// ------------------------------------------------------------
//


//
// ------------------------------------------------------------
// Global page-scroll behaviour
//
// Ordinary internal page navigation starts at the top.
// Explicit #anchor navigation remains untouched.
// Browser Back/Forward may restore its previous position.
// ------------------------------------------------------------
//
config.plugins.transformers.push({
  name: "ForceTopNavigation",

  externalResources() {
    return {
      js: [
        {
          loadTime: "beforeDOMReady",
          contentType: "inline",
          spaPreserve: true,
          script: `
(() => {
  const navEntry =
    performance.getEntriesByType("navigation")[0]

  const navType =
    navEntry?.type || "navigate"

  const hasHash =
    window.location.hash.length > 0

  const isBackForward =
    navType === "back_forward"

  if (
    "scrollRestoration" in history
  ) {
    history.scrollRestoration =
      hasHash || isBackForward
        ? "auto"
        : "manual"
  }

  if (hasHash || isBackForward) {
    return
  }

  const forceTop = () => {
    window.scrollTo(0, 0)

    document.documentElement.scrollTop = 0

    if (document.body) {
      document.body.scrollTop = 0
    }
  }

  // Run before layout.
  forceTop()

  // Also run at the key browser restoration stages.
  document.addEventListener(
    "DOMContentLoaded",
    forceTop,
    { once: true }
  )

  window.addEventListener(
    "load",
    () => {
      forceTop()

      requestAnimationFrame(() => {
        forceTop()

        requestAnimationFrame(
          forceTop
        )
      })
    },
    { once: true }
  )

  window.addEventListener(
    "pageshow",
    forceTop,
    { once: true }
  )
})()
`,
        },
      ],
    }
  },
} as any)
// ------------------------------------------------------------
// QOD GRAPH PAGE
// ------------------------------------------------------------
//
// CANONICAL QOD GRAPH SCHEMA
//
// The live QOD website uses:
//   course:
// and three rendered callout sections:
//   Review First
//   Explore Also
//   Build Toward
//
// The graph must read those published-QOD fields directly.
// It must NOT depend on the retired frontmatter keys
// courses / prerequisites / related.
//
type QodGraphEntry = {
  name: string
  slug: string
  courses: string[]
  topic: string
  reviewFirst: string[]
  exploreAlso: string[]
  buildToward: string[]
}

function qodGraphCalloutTargets(
  source: string,
  label: string,
): string[] {
  const escapedLabel = label.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  )

  const marker = new RegExp(
    `^> \\[![^\\]]+\\] ${escapedLabel}\\s*$`,
    "m",
  )

  const match = marker.exec(source)
  if (!match) return []

  const rest = source.slice(
    match.index + match[0].length,
  )

  const lines = rest.split(/\r?\n/)
  const calloutLines: string[] = []
  let sawQuotedLine = false

  for (const line of lines) {
    if (line.startsWith(">")) {
      calloutLines.push(line)
      sawQuotedLine = true
      continue
    }

    if (line.trim() === "") {
      // Blank lines are harmless inside/between callout lines.
      continue
    }

    // The first nonblank, non-callout line terminates this block.
    break
  }

  if (!sawQuotedLine) return []

  const targets: string[] = []
  const joined = calloutLines.join("\n")

  for (
    const link of joined.matchAll(
      /\[\[([^\]]+)\]\]/g,
    )
  ) {
    let target = link[1].split("|")[0] ?? ""
    target = target.split("#")[0] ?? target
    target = target.trim().replace(/\\/g, "/")
    target = path.posix.basename(target)
    target = target.replace(/\.md$/i, "")

    if (target) {
      targets.push(target)
    }
  }

  return [...new Set(targets)]
}

function loadCanonicalQodGraphEntries(): QodGraphEntry[] {
  const entries: QodGraphEntry[] = []

  for (const filePath of getMarkdownFiles(QOD_ROOT)) {
    const source = fs.readFileSync(
      filePath,
      "utf8",
    )

    const frontmatter =
      extractFrontmatter(source)

    if (frontmatter?.type !== "qod") {
      continue
    }

    const relativePath = path
      .relative(CONTENT_ROOT, filePath)
      .split(path.sep)
      .join("/")

    entries.push({
      name: path.basename(filePath, ".md"),
      slug: slugifyFilePath(
        relativePath as any,
        true,
      ) as string,
      courses: stringList(
        frontmatter.course ??
          frontmatter.courses,
      ),
      topic:
        typeof frontmatter.topic === "string"
          ? frontmatter.topic.trim()
          : "",
      reviewFirst: qodGraphCalloutTargets(
        source,
        "Review First",
      ),
      exploreAlso: qodGraphCalloutTargets(
        source,
        "Explore Also",
      ),
      buildToward: qodGraphCalloutTargets(
        source,
        "Build Toward",
      ),
    })
  }

  return entries
}

config.plugins.transformers.push({
  name: "QodGraphPage",

  htmlPlugins() {
    const liveQods =
      loadCanonicalQodGraphEntries().filter(
        (entry) =>
          !entry.slug
            .toLowerCase()
            .includes("backup"),
      )

    const liveByName = new Map(
      liveQods.map((entry) => [
        entry.name.toLowerCase(),
        entry,
      ]),
    )

    const graphNodes = liveQods.map(
      (entry) => ({
        id: entry.slug,
        name: entry.name,
        courses: entry.courses,
        url: `./${entry.slug}`,
      }),
    )

    const graphLinks: Array<{
      source: string
      target: string
      type: "prerequisite" | "related"
    }> = []

    const directedSeen = new Set<string>()
    const relatedSeen = new Set<string>()

    const addDirected = (
      source: string,
      target: string,
    ) => {
      if (
        !source ||
        !target ||
        source === target
      ) {
        return
      }

      const key = `${source}::${target}`

      if (directedSeen.has(key)) return
      directedSeen.add(key)

      graphLinks.push({
        source,
        target,
        type: "prerequisite",
      })
    }

    const addRelated = (
      first: string,
      second: string,
    ) => {
      if (
        !first ||
        !second ||
        first === second
      ) {
        return
      }

      const pair = [first, second].sort()
      const key = pair.join("::")

      if (relatedSeen.has(key)) return
      relatedSeen.add(key)

      graphLinks.push({
        source: pair[0],
        target: pair[1],
        type: "related",
      })
    }

    for (const entry of liveQods) {
      // Review First:
      // prerequisite QOD -> current QOD
      for (
        const prerequisiteName of
        entry.reviewFirst
      ) {
        const prerequisite =
          liveByName.get(
            prerequisiteName.toLowerCase(),
          )

        if (prerequisite) {
          addDirected(
            prerequisite.slug,
            entry.slug,
          )
        }
      }

      // Build Toward:
      // current QOD -> later QOD
      //
      // These often mirror another page's Review First.
      // addDirected() deduplicates the same edge.
      for (
        const laterName of entry.buildToward
      ) {
        const later =
          liveByName.get(
            laterName.toLowerCase(),
          )

        if (later) {
          addDirected(
            entry.slug,
            later.slug,
          )
        }
      }

      // Explore Also:
      // undirected conceptual relationship.
      for (
        const relatedName of entry.exploreAlso
      ) {
        const related =
          liveByName.get(
            relatedName.toLowerCase(),
          )

        if (related) {
          addRelated(
            entry.slug,
            related.slug,
          )
        }
      }
    }

    const graphPayload = encodeURIComponent(
      JSON.stringify({
        nodes: graphNodes,
        links: graphLinks,
      }),
    )

    return [
      () => (tree: any, file: any) => {
        const currentSlug =
          String(file.data.slug ?? "")

        if (currentSlug !== "qod-graph") {
          return
        }

        tree.children = [
          {
            type: "element",
            tagName: "div",
            properties: {
              className: ["qod-graph-page"],
              "data-qod-graph":
                graphPayload,
            },
            children: [
              {
                type: "element",
                tagName: "p",
                properties: {
                  className: [
                    "qod-graph-intro",
                  ],
                },
                children: [
                  {
                    type: "text",
                    value:
                      "A playful map of the published QOD collection. Drag the questions around, zoom and pan through the network, and click any node to open the question.",
                  },
                ],
              },

              {
                type: "element",
                tagName: "div",
                properties: {
                  className: [
                    "qod-graph-meta",
                  ],
                },
                children: [
                  {
                    type: "element",
                    tagName: "span",
                    properties: {
                      className: [
                        "qod-graph-count",
                      ],
                    },
                    children: [],
                  },
                ],
              },

              {
                type: "element",
                tagName: "div",
                properties: {
                  className: [
                    "qod-graph-toolbar",
                  ],
                },
                children: [],
              },

              {
                type: "element",
                tagName: "div",
                properties: {
                  className: [
                    "qod-graph-viewport",
                  ],
                },
                children: [
                  {
                    type: "element",
                    tagName: "canvas",
                    properties: {
                      className: [
                        "qod-graph-canvas",
                      ],
                    },
                    children: [],
                  },

                  {
                    type: "element",
                    tagName: "div",
                    properties: {
                      className: [
                        "qod-graph-tooltip",
                      ],
                      hidden: true,
                    },
                    children: [],
                  },
                ],
              },

              {
                type: "element",
                tagName: "p",
                properties: {
                  className: [
                    "qod-graph-status",
                  ],
                },
                children: [
                  {
                    type: "text",
                    value:
                      "Loading the QOD graph…",
                  },
                ],
              },
            ],
          },
        ]
      },
    ]
  },

  externalResources() {
    return {
      js: [
        {
          script: fs.readFileSync(
            path.resolve(
              "quartz/static/qod-graph.js",
            ),
            "utf8",
          ),
          loadTime: "afterDOMReady",
          contentType: "inline",
        },
      ],

      css: [
        {
          content: fs.readFileSync(
            path.resolve(
              "quartz/styles/qod-graph.scss",
            ),
            "utf8",
          ),
          inline: true,
        },
      ],
    }
  },
} as any)


export default config

export const layout = await loadQuartzLayout()












