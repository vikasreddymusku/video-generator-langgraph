import {
  StateGraph,
  START,
  END,
} from "@langchain/langgraph";

import { AgentState } from "./state";
import { loadSkillsNode } from "./nodes/loadSkills";

export function buildAgentGraph() {
  const graph = new StateGraph(AgentState)
    .addNode("loadSkills", loadSkillsNode)

    .addEdge(START, "loadSkills")
    .addEdge("loadSkills", END);

  return graph.compile();
}