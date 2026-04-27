---
name: refactor-dashboard
description: "Refactor dashboard UI components for layout improvements"
applyTo: "components/dashboard/**, app/**"
---

When invoked, propose a minimal refactor plan to improve layout/spacing/accessibility in `components/dashboard/` and/or `app/` layout files. For each proposed change provide:

- The exact file edits (diff-style or full file content) and brief rationale.
- How to run the app locally to validate visual changes (`npm run dev`).
- Suggested Jest/react-testing-library tests or manual QA steps.

Keep changes focused and backward-compatible; avoid large API surface changes without approval.
