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
    // Always put Frequently Asked Questions first
    const aIsFAQ = a.displayName === "Frequently Asked Questions"
    const bIsFAQ = b.displayName === "Frequently Asked Questions"

    if (aIsFAQ && !bIsFAQ) return -1
    if (bIsFAQ && !aIsFAQ) return 1

    // Otherwise keep folders before files
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    // Alphabetize everything else
    return a.displayName.localeCompare(b.displayName)
  },
})

const config = await loadQuartzConfig()

export default config

export const layout = await loadQuartzLayout()