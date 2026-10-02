# Remotion Core Skill

Purpose:
Guide the LLM when generating React/TypeScript code intended to run inside the existing Tinitiate video-generator Remotion project.

Rules:
- Generate React + TypeScript, not Python.
- Treat Remotion as the execution/rendering layer; do not pretend the LLM renders the video.
- Use the existing project's components, assets, themes, utilities, and conventions when they are available.
- Prefer existing project abstractions over creating duplicate infrastructure.
- Keep generated code deterministic and parameterizable where practical.
- Use useCurrentFrame(), useVideoConfig(), interpolate(), spring(), Sequence, AbsoluteFill, and other Remotion primitives when appropriate.
- Keep composition dimensions, fps, duration, and props explicit.
- Animation should be driven by the timeline rather than arbitrary browser timers.
- Avoid unnecessary dependencies.
- Keep visual hierarchy strong: readable typography, intentional spacing, large focal elements, and controlled motion.
- When references are supplied, use them as design evidence rather than inventing unrelated styles.
- Never expose secrets in generated code.
