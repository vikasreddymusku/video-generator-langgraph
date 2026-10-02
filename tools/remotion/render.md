# Remotion Render Tool Contract

Purpose:
Render generated React/TypeScript video code using the existing Remotion project.

Input:
- generatedCode: React/TypeScript source or a generated composition artifact
- compositionId
- outputPath
- optional render configuration

Responsibilities:
1. Materialize the generated composition into the existing Remotion project.
2. Validate that the composition can be bundled.
3. Render the requested composition.
4. Return the rendered file path and render metadata.

Important:
- This markdown file describes the tool contract; it is not executable.
- The actual implementation must be TypeScript using the project's Remotion infrastructure.
- Never accept API keys through generated video code.
