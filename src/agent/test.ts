import { buildAgentGraph } from "./graph";

async function main() {
  const graph = buildAgentGraph();

  const result = await graph.invoke({
    prompt: "Create a SQL Server main topic intro.",
    imageReferences: [],
    videoReferences: [],
    sheetData: {},
  });

  console.log("\n=== SELECTED SKILLS ===");

  console.log(result.selectedSkills);

  console.log("\n=== SKILL CONTEXT ===");

  console.log(result.skillContext);
}

main().catch(console.error);