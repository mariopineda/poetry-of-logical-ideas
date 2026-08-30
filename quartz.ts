import fs from "node:fs"
import path from "node:path"
import { parse as parseYaml } from "yaml"
import { graphlib, layout as dagreLayout } from "@dagrejs/dagre"

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
    courses: stringList(frontmatter.courses),
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

    // Hide the legacy Polynomials folder from the sidebar.
    // QODs are accessed through QOD Practice Questions.
    if (
      node.isFolder &&
      (
        node.slugSegment?.toLowerCase() === "polynomials" ||
        node.displayName?.toLowerCase() === "polynomials"
      )
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

    return a.displayName.localeCompare(b.displayName)
  },
})

const config = await loadQuartzConfig()

// ------------------------------------------------------------
// QOD SOLUTION VISIBILITY
// ------------------------------------------------------------
//
// If:
//
// show_solution: false
//
// remove the Solution heading and everything after it
// before Quartz renders the page.
config.plugins.transformers.push({
  name: "QodSolutionVisibility",

  markdownPlugins() {
    return [
      () => (tree: any, file: any) => {
        const frontmatter = file.data.frontmatter

        if (
          frontmatter?.type !== "qod" ||
          frontmatter?.show_solution !== false
        ) {
          return
        }

        const children = tree.children ?? []

        const solutionIndex = children.findIndex((node: any) => {
          if (node.type !== "heading" || node.depth !== 2) {
            return false
          }

          const text = (node.children ?? [])
            .filter((child: any) => child.type === "text")
            .map((child: any) => child.value)
            .join("")
            .trim()
            .toLowerCase()

          return text === "solution"
        })

        if (solutionIndex !== -1) {
          children.splice(solutionIndex)
        }
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

        const getText = (node: any): string => {
          if (node?.type === "text") {
            return String(node.value ?? "")
          }

          return (node?.children ?? [])
            .map(getText)
            .join("")
        }

        // When solutions are visible, put the relationship
        // section immediately before the Solution.
        //
        // When solutions are hidden, append the relationship
        // section after the Question.
        const solutionIndex = (tree.children ?? []).findIndex(
          (node: any) =>
            node?.type === "element" &&
            node?.tagName === "h2" &&
            getText(node).trim().toLowerCase() === "solution",
        )

        if (solutionIndex !== -1) {
          tree.children.splice(
            solutionIndex,
            0,
            relationshipSection,
          )
        } else {
          tree.children.push(relationshipSection)
        }
      },
    ]
  },
} as any)


// ------------------------------------------------------------
// QOD MAP
// ------------------------------------------------------------
//
// Responsive learning-path map:
//
// Desktop:
//   prerequisite -> later idea
//
// Mobile:
//   prerequisite
//        ↓
//   later idea
//
// Both layouts are generated automatically from the same
// QOD relationship metadata.
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

        const calculusQods = [...qodBySlug.values()]
          .sort((a, b) => a.name.localeCompare(b.name))

        if (calculusQods.length === 0) return

        const calculusSlugs = new Set(
          calculusQods.map((entry) => entry.slug),
        )

        const root = pathToRoot(currentSlug as any)

        const makeLayout = (
          mode: "desktop" | "mobile",
        ) => {
          const isMobile = mode === "mobile"

          const NODE_WIDTH = isMobile ? 190 : 220
          const NODE_HEIGHT = isMobile ? 76 : 82

          const graph = new graphlib.Graph()

          graph.setGraph({
            rankdir: isMobile ? "TB" : "LR",
            nodesep: isMobile ? 22 : 30,
            ranksep: isMobile ? 55 : 80,
            marginx: isMobile ? 18 : 30,
            marginy: isMobile ? 18 : 30,
          })

          graph.setDefaultEdgeLabel(() => ({}))

          for (const entry of calculusQods) {
            graph.setNode(entry.slug, {
              width: NODE_WIDTH,
              height: NODE_HEIGHT,
            })
          }

          // Prerequisite -> QOD
          for (const entry of calculusQods) {
            for (const prerequisiteName of entry.prerequisites) {
              const prerequisite = qodByName.get(
                prerequisiteName.toLowerCase(),
              )

              if (
                prerequisite &&
                calculusSlugs.has(prerequisite.slug)
              ) {
                graph.setEdge(
                  prerequisite.slug,
                  entry.slug,
                )
              }
            }
          }

          dagreLayout(graph)

          const graphInfo = graph.graph() as any

          const canvasWidth = Math.max(
            isMobile ? 320 : 900,
            Math.ceil(graphInfo.width ?? 900),
          )

          const canvasHeight = Math.max(
            isMobile ? 500 : 400,
            Math.ceil(graphInfo.height ?? 400),
          )

          const markerId =
            mode === "mobile"
              ? "qod-map-arrow-mobile"
              : "qod-map-arrow-desktop"

          const edgeNodes = graph.edges().map((edge: any) => {
            const edgeData = graph.edge(edge) as any
            const points = edgeData?.points ?? []

            return {
              type: "element",
              tagName: "polyline",
              properties: {
                points: points
                  .map(
                    (point: any) =>
                      `${point.x},${point.y}`,
                  )
                  .join(" "),
                fill: "none",
                stroke: "var(--gray)",
                strokeWidth: 2,
                markerEnd: `url(#${markerId})`,
                "data-source": edge.v,
                "data-target": edge.w,
              },
              children: [],
            }
          })

          const qodNodes = calculusQods
            .map((entry) => {
              const position = graph.node(entry.slug) as any

              if (!position) return null

              const left =
                position.x - NODE_WIDTH / 2

              const top =
                position.y - NODE_HEIGHT / 2

              const children: any[] = [
                {
                  type: "element",
                  tagName: "span",
                  properties: {
                    style: [
                      "font-weight:600",
                      "line-height:1.2",
                      "color:var(--secondary)",
                      isMobile
                        ? "font-size:0.88rem"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(";"),
                  },
                  children: [
                    {
                      type: "text",
                      value: entry.name,
                    },
                  ],
                },
              ]

              if (entry.courses.length > 0) {
                children.push({
                  type: "element",
                  tagName: "span",
                  properties: {
                    style:
                      "margin-top:0.35rem;font-size:0.72rem;line-height:1.2;color:var(--gray);",
                  },
                  children: [
                    {
                      type: "text",
                      value: entry.courses.join(" · "),
                    },
                  ],
                })
              }

              return {
                type: "element",
                tagName: "a",
                properties: {
                  href: `${root}/${entry.slug}`,
                  className: [
                    "qod-map-node",
                    `qod-map-node-${mode}`,
                  ],
                  "data-qod-slug": entry.slug,
                  "data-qod-courses": entry.courses.join("|"),
                  "data-qod-topic": entry.topic,
                  style: [
                    "position:absolute",
                    `left:${left}px`,
                    `top:${top}px`,
                    `width:${NODE_WIDTH}px`,
                    `height:${NODE_HEIGHT}px`,
                    "box-sizing:border-box",
                    "display:flex",
                    "flex-direction:column",
                    "justify-content:center",
                    "padding:10px 12px",
                    "border:1px solid var(--lightgray)",
                    "border-radius:10px",
                    "background:var(--light)",
                    "text-decoration:none",
                    "box-shadow:0 1px 4px rgba(0,0,0,0.08)",
                  ].join(";"),
                },
                children,
              }
            })
            .filter(Boolean)

          return {
            type: "element",
            tagName: "div",
            properties: {
              className: [
                "qod-map-layout",
                `qod-map-${mode}`,
              ],
            },
            children: [
              {
                type: "element",
                tagName: "div",
                properties: {
                  className: ["qod-map-scroll"],
                },
                children: [
                  {
                    type: "element",
                    tagName: "div",
                    properties: {
                      className: ["qod-map-canvas"],
                      style: [
                        "position:relative",
                        `width:${canvasWidth}px`,
                        `height:${canvasHeight}px`,
                        `min-width:${canvasWidth}px`,
                      ].join(";"),
                    },
                    children: [
                      {
                        type: "element",
                        tagName: "svg",
                        properties: {
                          width: canvasWidth,
                          height: canvasHeight,
                          viewBox:
                            `0 0 ${canvasWidth} ${canvasHeight}`,
                          style:
                            "position:absolute;left:0;top:0;overflow:visible;pointer-events:none;",
                          ariaHidden: "true",
                        },
                        children: [
                          {
                            type: "element",
                            tagName: "defs",
                            properties: {},
                            children: [
                              {
                                type: "element",
                                tagName: "marker",
                                properties: {
                                  id: markerId,
                                  viewBox: "0 0 10 10",
                                  refX: 9,
                                  refY: 5,
                                  markerWidth: 6,
                                  markerHeight: 6,
                                  orient: "auto",
                                },
                                children: [
                                  {
                                    type: "element",
                                    tagName: "path",
                                    properties: {
                                      d:
                                        "M 0 0 L 10 5 L 0 10 z",
                                      fill: "var(--gray)",
                                    },
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },

                          ...edgeNodes,
                        ],
                      },

                      ...qodNodes,
                    ],
                  },
                ],
              },
            ],
          }
        }


        const makeMobilePathList = () => {
          const primaryChildren = new Map<string, string[]>()
          const primaryParent = new Map<string, string>()
          const allParents = new Map<string, string[]>()

          for (const entry of calculusQods) {
            primaryChildren.set(entry.slug, [])
            allParents.set(entry.slug, [])
          }

          // ----------------------------------------------------
          // Determine prerequisite parents.
          //
          // A QOD may genuinely have more than one prerequisite.
          // For the visual tree, the first prerequisite becomes
          // the primary branch. Any additional prerequisites are
          // still displayed inside the QOD card.
          // ----------------------------------------------------

          for (const entry of calculusQods) {
            const parents = entry.prerequisites
              .map((name) =>
                qodByName.get(name.toLowerCase()),
              )
              .filter(
                (candidate): candidate is QodEntry =>
                  Boolean(
                    candidate &&
                    calculusSlugs.has(candidate.slug),
                  ),
              )

            allParents.set(
              entry.slug,
              parents.map((parent) => parent.slug),
            )

            if (parents.length > 0) {
              const mainParent = parents[0]

              primaryParent.set(
                entry.slug,
                mainParent.slug,
              )

              primaryChildren
                .get(mainParent.slug)!
                .push(entry.slug)
            }
          }

          // Keep branches alphabetically predictable.
          for (const [slug, children] of primaryChildren) {
            children.sort((a, b) => {
              const aName =
                qodBySlug.get(a)?.name ?? a

              const bName =
                qodBySlug.get(b)?.name ?? b

              return aName.localeCompare(bName)
            })

            primaryChildren.set(slug, children)
          }

          const roots = calculusQods
            .filter(
              (entry) =>
                !primaryParent.has(entry.slug),
            )
            .sort((a, b) =>
              a.name.localeCompare(b.name),
            )

          const pathwayRoots = roots.filter(
            (entry) =>
              (primaryChildren.get(entry.slug) ?? [])
                .length > 0,
          )

          const standaloneRoots = roots.filter(
            (entry) =>
              (primaryChildren.get(entry.slug) ?? [])
                .length === 0,
          )

          const relatedOnly = standaloneRoots.filter(
            (entry) =>
              (relatedBothWays.get(entry.slug)?.size ?? 0) > 0,
          )

          const isolated = standaloneRoots.filter(
            (entry) =>
              (relatedBothWays.get(entry.slug)?.size ?? 0) === 0,
          )

          // ----------------------------------------------------
          // QOD CARD
          // ----------------------------------------------------

          const makeMobileNode = (slug: string) => {
            const entry = qodBySlug.get(slug)

            if (!entry) return null

            const parents =
              allParents.get(slug) ?? []

            const additionalParents =
              parents.slice(1)

            const children: any[] = [
              {
                type: "element",
                tagName: "a",
                properties: {
                  href: `${root}/${entry.slug}`,
                  className: ["qod-mobile-path-title"],
                },
                children: [
                  {
                    type: "text",
                    value: entry.name,
                  },
                ],
              },
            ]

            if (entry.courses.length > 0) {
              children.push({
                type: "element",
                tagName: "div",
                properties: {
                  className: ["qod-course-list"],
                },
                children: entry.courses.map(
                  (course) => ({
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
                  }),
                ),
              })
            }

            const relatedSlugs = [
              ...(relatedBothWays.get(slug) ?? []),
            ].filter((relatedSlug) =>
              calculusSlugs.has(relatedSlug),
            )

            if (relatedSlugs.length > 0) {
              children.push({
                type: "element",
                tagName: "div",
                properties: {
                  className: [
                    "qod-mobile-related",
                  ],
                },
                children: [
                  {
                    type: "element",
                    tagName: "span",
                    properties: {
                      className: [
                        "qod-mobile-related-label",
                      ],
                    },
                    children: [
                      {
                        type: "text",
                        value: "Explore also:",
                      },
                    ],
                  },

                  {
                    type: "element",
                    tagName: "div",
                    properties: {
                      className: [
                        "qod-mobile-related-links",
                      ],
                    },
                    children: relatedSlugs
                      .map((relatedSlug) => {
                        const related =
                          qodBySlug.get(relatedSlug)

                        if (!related) return null

                        return {
                          type: "element",
                          tagName: "a",
                          properties: {
                            href:
                              `${root}/${related.slug}`,
                            className: [
                              "qod-mobile-related-link",
                            ],
                          },
                          children: [
                            {
                              type: "text",
                              value: related.name,
                            },
                          ],
                        }
                      })
                      .filter(Boolean),
                  },
                ],
              })
            }
            if (additionalParents.length > 0) {
              const names = additionalParents
                .map(
                  (parentSlug) =>
                    qodBySlug.get(parentSlug)?.name,
                )
                .filter(Boolean)

              if (names.length > 0) {
                children.push({
                  type: "element",
                  tagName: "div",
                  properties: {
                    className: [
                      "qod-mobile-extra-prerequisite",
                    ],
                  },
                  children: [
                    {
                      type: "text",
                      value:
                        `Also requires: ${names.join(", ")}`,
                    },
                  ],
                })
              }
            }

            return {
              type: "element",
              tagName: "div",
              properties: {
                className: ["qod-mobile-path-node"],
                "data-qod-slug": entry.slug,
                "data-qod-courses": entry.courses.join("|"),
                "data-qod-topic": entry.topic,
              },
              children,
            }
          }

          // ----------------------------------------------------
          // RECURSIVE BRANCH
          // ----------------------------------------------------

          const makeBranch = (
            slug: string,
            seen = new Set<string>(),
          ): any => {
            if (seen.has(slug)) return null

            const nextSeen = new Set(seen)
            nextSeen.add(slug)

            const node = makeMobileNode(slug)

            if (!node) return null

            const childSlugs =
              primaryChildren.get(slug) ?? []

            const branchChildren = childSlugs
              .map((childSlug) => {
                const branch = makeBranch(
                  childSlug,
                  nextSeen,
                )

                if (!branch) return null

                return {
                  type: "element",
                  tagName: "div",
                  properties: {
                    className: [
                      "qod-mobile-tree-child",
                    ],
                  },
                  children: [branch],
                }
              })
              .filter(Boolean)

            const children: any[] = [node]

            if (branchChildren.length > 0) {
              children.push({
                type: "element",
                tagName: "div",
                properties: {
                  className: [
                    "qod-mobile-tree-children",
                  ],
                },
                children: branchChildren,
              })
            }

            return {
              type: "element",
              tagName: "div",
              properties: {
                className: ["qod-mobile-tree"],
              },
              children,
            }
          }

          const mobileChildren: any[] = []

          if (pathwayRoots.length > 0) {
            mobileChildren.push({
              type: "element",
              tagName: "h3",
              properties: {},
              children: [
                {
                  type: "text",
                  value: "Learning pathways",
                },
              ],
            })

            mobileChildren.push({
              type: "element",
              tagName: "div",
              properties: {
                className: [
                  "qod-mobile-tree-list",
                ],
              },
              children: pathwayRoots
                .map((entry) =>
                  makeBranch(entry.slug),
                )
                .filter(Boolean),
            })
          }

          if (relatedOnly.length > 0) {
            mobileChildren.push({
              type: "element",
              tagName: "h3",
              properties: {
                className: [
                  "qod-mobile-related-heading",
                ],
              },
              children: [
                {
                  type: "text",
                  value: "Related Mathematical Ideas",
                },
              ],
            })

            mobileChildren.push({
              type: "element",
              tagName: "div",
              properties: {
                className: [
                  "qod-mobile-other-list",
                ],
              },
              children: relatedOnly
                .map((entry) =>
                  makeMobileNode(entry.slug),
                )
                .filter(Boolean),
            })
          }
          if (isolated.length > 0) {
            mobileChildren.push({
              type: "element",
              tagName: "h3",
              properties: {
                className: [
                  "qod-mobile-other-heading",
                ],
              },
              children: [
                {
                  type: "text",
                  value: "Other QODs",
                },
              ],
            })

            mobileChildren.push({
              type: "element",
              tagName: "div",
              properties: {
                className: [
                  "qod-mobile-other-list",
                ],
              },
              children: isolated
                .map((entry) =>
                  makeMobileNode(entry.slug),
                )
                .filter(Boolean),
            })
          }

          return {
            type: "element",
            tagName: "div",
            properties: {
              className: [
                "qod-map-layout",
                "qod-map-mobile",
              ],
            },
            children: mobileChildren,
          }
        }
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
                          value: "All Courses",
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
                          value: "All Topics",
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
              },
              children: [
                {
                  type: "text",
                  value: "Reset filters",
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
              children: [],
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
                  value: "QOD Learning Map",
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
                    "Follow the arrows from foundational questions toward questions that build on those ideas. Click any question to open it.",
                },
              ],
            },

            filterControls,

            makeLayout("desktop"),
            makeMobilePathList(),

            {
              type: "element",
              tagName: "script",
              properties: {
                src: `${root}/static/qod-map-filter.js`,
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
export default config

export const layout = await loadQuartzLayout()











