import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  filterFn: (node: {
    slugSegment?: string
    slugSegments?: string[]
    displayName: string
    isFolder: boolean
  }) => {
    // Hide Quartz's tags folder
    if (node.slugSegment === "tags") return false

    // Hide the entire FAQ folder from the sidebar
    if (
      node.isFolder &&
      node.slugSegment?.toLowerCase() === "faq"
    ) {
      return false
    }

    // Hide the legacy Polynomials folder from the sidebar.
    // QODs are now accessed through QOD Practice Questions.
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
    // Individual QOD pages remain accessible through QOD Practice Questions.
    if (
      node.isFolder &&
      (
        node.slugSegment?.toLowerCase() === "qod-question-bank" ||
        node.displayName?.toLowerCase() === "qod question bank"
      )
    ) {
      return false
    }

    // Hide the standalone QOD Browser page from the sidebar.
    // It still exists and is embedded inside QOD Practice Questions.
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
    // Display the Math folder as "Math" in the sidebar,
    // even though Math/index.md is titled "QOD Practice Questions"
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
    // Preferred top-level sidebar order:
    // 1. Math
    // 2. Frequently Asked Questions
    // 3. About
    const preferredOrder = [
      "math",
      "frequently asked questions",
      "about",
    ]

    const aName = a.displayName.toLowerCase()
    const bName = b.displayName.toLowerCase()

    const aPriority = preferredOrder.indexOf(aName)
    const bPriority = preferredOrder.indexOf(bName)

    // If both items have an explicit preferred position
    if (aPriority !== -1 && bPriority !== -1) {
      return aPriority - bPriority
    }

    // Preferred items come before everything else
    if (aPriority !== -1) return -1
    if (bPriority !== -1) return 1

    // Otherwise keep folders before files
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    // Alphabetize everything else
    return a.displayName.localeCompare(b.displayName)
  },
})

const config = await loadQuartzConfig()

// QOD solution visibility
// If a QOD has show_solution: false in its frontmatter,
// remove the "## Solution" heading and everything after it
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

export default config

export const layout = await loadQuartzLayout()