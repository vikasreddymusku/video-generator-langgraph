# Google Drive Upload Tool Contract

Purpose:
Store final rendered video artifacts in Google Drive.

Input:
- local rendered video path
- destination folder
- filename
- optional job metadata

Responsibilities:
- Upload the rendered MP4.
- Return Drive file ID, name, and accessible location metadata.
- Keep credentials server-side.
- Do not upload intermediate secrets or unrelated files.

The actual implementation belongs in TypeScript/API integration.
