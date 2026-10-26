const QodSolutionCalloutVisibility = () => ({
  name: "QodSolutionCalloutVisibility",

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

          return (node?.children ?? []).map(getText).join("")
        }

        const solutionCalloutIndex = children.findIndex((node: any) => {
          if (node?.type !== "element") {
            return false
          }

          const classes = node.properties?.className

          if (!Array.isArray(classes) || !classes.includes("callout")) {
            return false
          }

          return getText(node).trim().toLowerCase().startsWith("show solution")
        })

        if (solutionCalloutIndex === -1) {
          return
        }

        const solutionCallout = children[solutionCalloutIndex]
        const classes = solutionCallout.properties?.className

        if (Array.isArray(classes) && !classes.includes("qod-solution-source")) {
          classes.push("qod-solution-source")
        }

        if (frontmatter?.show_solution !== false) {
          return
        }

        children.splice(solutionCalloutIndex, 1, {
          type: "element",
          tagName: "template",
          properties: {
            className: ["qod-hidden-solution-source"],
          },
          children: [solutionCallout],
        })
      },
    ]
  },
})

;(QodSolutionCalloutVisibility as any).quartzCategory = "transformer"

export default QodSolutionCalloutVisibility
