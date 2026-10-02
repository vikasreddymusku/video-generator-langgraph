import type { AgentStateType } from "../state";
import { loadSkill } from "../skills/loader";

export async function loadSkillsNode(
  state: AgentStateType
) {
  const skill = await loadSkill("intro/main-topic-intro.md");

  return {
    selectedSkills: ["intro/main-topic-intro.md"],
    skillContext: skill,
  };
}