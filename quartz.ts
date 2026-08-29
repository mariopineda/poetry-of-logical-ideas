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
  prerequisites: string[]
  related: string[]
}

const CONTENT_ROOT = path.resolve("content")
const QOD_ROOT = path.join(
  CONTENT_ROOT,
  "Math",
  "QOD Question Bank",
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

export default config

export const layout = await loadQuartzLayout()