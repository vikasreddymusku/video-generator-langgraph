import fs from "node:fs/promises";
import path from "node:path";

const SKILLS_DIR = path.resolve("skills");

export async function loadSkill(skillPath: string): Promise<string> {
  const fullPath = path.join(SKILLS_DIR, skillPath);

  return await fs.readFile(fullPath, "utf-8");
}