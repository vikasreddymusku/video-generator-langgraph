import { StateSchema } from "@langchain/langgraph";
import { z } from "zod";

export const AgentState = new StateSchema({
  prompt: z.string(),

  imageReferences: z.array(z.string()).default([]),

  videoReferences: z.array(z.string()).default([]),

  sheetData: z.record(z.string(), z.string()).default({}),

  selectedSkills: z.array(z.string()).default([]),

  skillContext: z.string().default(""),

  generatedCode: z.string().default(""),
});

export type AgentStateType = typeof AgentState.State;