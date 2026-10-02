# Google Sheets Input Tool Contract

Purpose:
Read course/video jobs from Google Sheets.

Expected fields may include:
- job id
- course
- main topic
- sub-topic
- narration
- voice preference
- variation family
- reference URLs
- asset paths
- status

Responsibilities:
- Read the requested row/job.
- Normalize values into AgentState.
- Return structured data.
- Keep authentication outside generated code.

The actual implementation belongs in TypeScript/API integration.
