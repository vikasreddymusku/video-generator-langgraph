# Remotion Audio Skill

Purpose:
Guide voiceover, music, and sound-effect integration.

Rules:
- Voiceover and music are separate concerns.
- Voiceover timing should determine or influence scene timing when narration is central.
- Keep background music below narration and avoid masking speech.
- Use fades for music entrances/exits where appropriate.
- Sound effects should reinforce transitions rather than overwhelm the narration.
- Prefer existing project audio utilities when available.
- ElevenLabs is an external voice-generation tool; the LLM only requests/generates the required audio asset through the tool.
- Generated code must reference assets through safe project paths or resolved asset URLs.
