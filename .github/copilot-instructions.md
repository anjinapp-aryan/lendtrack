<!-- Workspace Copilot instructions for AI coding agents -->

# Workspace Copilot Instructions

Purpose: short, actionable rules for AI coding agents working in this repository.

Quick commands

- Development: `npm run dev`
- Build: `npm run build`
- Start production: `npm run start`
- Lint: `npm run lint`
- Run tests: `npm test` (watch: `npm run test:watch`)
- DB connectivity check: `npm run test:connection`

What agents should do first

- Read [AGENTS.md](AGENTS.md) for repository-specific guidance.
- Inspect `package.json` scripts and run tests locally before proposing large changes.
- If touching Supabase or DB code, run `npm run test:connection` and review `scripts/test-connection.js`.

Editing conventions

- Prefer small, focused edits confined to the relevant files or folders; do not make broad sweeping changes.
- When editing UI components, check `app/` and `components/dashboard/` for layout conventions.
- When editing services, check `services/` and unit tests under `__tests__/`.
- Include or update tests for behavior-changing changes; prefer adding small test files under `__tests__/`.

Notes for Next.js and framework specifics

- This project uses an App Router layout under `app/` — read the Next.js docs in `node_modules/next/dist/docs/` before making framework-level changes.
- Target Next.js APIs used in this repo may differ from public training-data examples; avoid assumptions.

Authoring instructions/skills

- If you add new instructions or skills, include a clear `description` with trigger phrases and use narrow `applyTo` globs (avoid `applyTo: "**"`).
- Link to existing docs rather than copying them; prefer short, descriptive content.

Agent behavior rules

- Run the test suite (`npm test`) for any change that touches business logic.
- Do not change unrelated files in the same commit (e.g., don't update ESLint config when fixing a component unless requested).
- If a proposed change is large or risky (infra, database, auth), summarize the plan first and ask for human approval.

Where to find more

- Repository guide: [AGENTS.md](AGENTS.md)
- Project README: [README.md](README.md)
- Agent authoring guidance: use the `agent-customization` SKILL in the VS Code Copilot Chat extension.
