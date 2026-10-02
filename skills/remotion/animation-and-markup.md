# Remotion Animation and Markup Skill

Purpose:
Help the LLM create polished Remotion React markup and motion.

Guidance:
- Drive timeline animation from the current frame.
- Use interpolate() for controlled numeric transitions.
- Use spring() for natural entrance/settling motion when appropriate.
- Prefer transform and opacity animation for performant motion.
- Use Sequence for temporal structure and staggered entrances.
- Keep animation timing intentional; avoid every element moving simultaneously.
- Use easing appropriate to the visual role.
- Build scenes from reusable components when repeated patterns occur.
- Avoid unnecessary DOM wrappers that change layout.
- Keep text inside safe areas and check for overflow.
- Use gradients, blur, shadows, SVG, CSS, and Remotion primitives when they improve the visual result.
- For premium branded motion, establish a visual rhythm: reveal -> emphasis -> transition -> resolve.
