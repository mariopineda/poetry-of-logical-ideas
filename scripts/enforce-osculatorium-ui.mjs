/**
 * Permanent build-time safeguard for the student-facing Osculatorium UI.
 * The local publisher can reintroduce stale quartz.ts or index.md files;
 * GitHub Pages executes this script before every Quartz build.
 * This changes no QOD data, relationships, or graph presentation.
 */
import fs from "node:fs";
import path from "node:path";
const root = process.cwd();
const quartzPath = path.join(root, "quartz.ts");
const indexPath = path.join(root, "content", "index.md");
const markerStart = "// BEGIN OSCULATORIUM PRIMARY NAVIGATION";
const markerEnd = "// END OSCULATORIUM PRIMARY NAVIGATION";
const navigation = "// BEGIN OSCULATORIUM PRIMARY NAVIGATION\ncomponentRegistry.setOptionOverrides(\"@quartz-community/explorer\", {\n  filterFn: (node: any) => {\n    const slug = String(node.slugSegment ?? \"\").toLowerCase()\n    return ![\"tags\", \"frequently-asked-questions\", \"about\"].includes(slug)\n  },\n\n  mapFn: (node: any) => {\n    if ((node.slugSegments?.length ?? 0) !== 0) return\n\n    const rootChildren = Array.isArray(node.children) ? node.children : []\n    const qod = rootChildren.find(\n      (child: any) =>\n        !child.isFolder &&\n        child.slugSegment?.toLowerCase() === \"qod\",\n    )\n    const math = rootChildren.find(\n      (child: any) =>\n        child.isFolder &&\n        child.slugSegment?.toLowerCase() === \"math\",\n    )\n    const learningPath = math?.children?.find(\n      (child: any) =>\n        !child.isFolder &&\n        child.slugSegment?.toLowerCase() === \"qod-map\",\n    )\n\n    // Never leave FAQ/About visible as a fallback.\n    node.children = [qod, learningPath].filter(Boolean)\n    if (qod) qod.displayName = \"QOD\"\n    if (learningPath) learningPath.displayName = \"Learning Path\"\n  },\n\n  sortFn: (\n    a: { displayName: string },\n    b: { displayName: string },\n  ) => {\n    const preferredOrder = [\"qod\", \"learning path\"]\n    const aName = a.displayName.toLowerCase()\n    const bName = b.displayName.toLowerCase()\n    const aPriority = preferredOrder.indexOf(aName)\n    const bPriority = preferredOrder.indexOf(bName)\n    if (aPriority !== -1 && bPriority !== -1) return aPriority - bPriority\n    if (aPriority !== -1) return -1\n    if (bPriority !== -1) return 1\n    return a.displayName.localeCompare(b.displayName, undefined, {\n      numeric: true,\n      sensitivity: \"base\",\n    })\n  },\n})\n// END OSCULATORIUM PRIMARY NAVIGATION";
const landing = "---\ntitle: \"The Osculatorium\"\npublish: true\ntype: \"page\"\n---\n\nWelcome to **The Osculatorium**. Use this site to practise mathematics, review earlier ideas, and explore connections between mathematical topics.\n\n## Questions of the Day (QOD)\nQuestions of the Day are the heart of this site. Use them for practice, review, and preparation for future mathematics.\n\n**[[QOD|Explore Questions of the Day →]]**\n\n## Learning Path\nMathematical ideas build on one another. Explore how questions connect, what you may want to review first, related ideas worth exploring, and where each idea can lead next.\n\n**[[Math/QOD Map|Open the Learning Path →]]**\n";

function writeIfDifferent(file, desired) {
  const current = fs.readFileSync(file, "utf8");
  if (current === desired) {
    console.log("UI verified: " + path.relative(root, file));
    return;
  }
  fs.writeFileSync(file, desired, "utf8");
  console.log("Stale UI repaired: " + path.relative(root, file));
}

const currentQuartz = fs.readFileSync(quartzPath, "utf8");
const start = currentQuartz.indexOf(markerStart);
const end = currentQuartz.indexOf(markerEnd);
if (start < 0 || end < start ||
    currentQuartz.indexOf(markerStart, start + markerStart.length) !== -1 ||
    currentQuartz.indexOf(markerEnd, end + markerEnd.length) !== -1) {
  throw new Error("Expected exactly one primary-navigation block. Refusing deployment.");
}
const updatedQuartz = currentQuartz.slice(0, start) + navigation +
  currentQuartz.slice(end + markerEnd.length);
writeIfDifferent(quartzPath, updatedQuartz);
writeIfDifferent(indexPath, landing);

// Independent post-write checks; fail the deployment if anything reappears.
const q = fs.readFileSync(quartzPath, "utf8");
const i = fs.readFileSync(indexPath, "utf8");
const block = q.slice(q.indexOf(markerStart), q.indexOf(markerEnd) + markerEnd.length);
if (!block.includes("node.children = [qod, learningPath].filter(Boolean)") ||
    !block.includes('"frequently-asked-questions", "about"') ||
    !block.includes('learningPath.displayName = "Learning Path"')) {
  throw new Error("Primary navigation failed verification. Refusing deployment.");
}
for (const forbidden of [
  "## Frequently Asked Questions",
  "Google Classroom is still important",
  "find information about how our class works",
  "[[Frequently Asked Questions",
]) {
  if (i.includes(forbidden)) throw new Error("Forbidden landing-page content: " + forbidden);
}
if (!i.includes("## Questions of the Day (QOD)") ||
    !i.includes("## Learning Path")) {
  throw new Error("Required landing-page sections missing. Refusing deployment.");
}
console.log("Osculatorium UI: QOD and Learning Path only. Guard passed.");
