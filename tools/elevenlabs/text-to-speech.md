# ElevenLabs Text-to-Speech Tool Contract

Purpose:
Generate narration audio from the requested script.

Input:
- text
- voice identifier or voice-selection preference
- optional model/settings

Responsibilities:
1. Call ElevenLabs using the server-side API key.
2. Save the generated audio to a controlled project/output directory.
3. Return the audio asset path/URL and metadata.
4. Never expose the API key to the LLM or generated React code.

The actual implementation belongs in TypeScript.
