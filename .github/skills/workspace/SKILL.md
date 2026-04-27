---
name: workspace-skill
user-invocable: true
description: "Workspace skill — quick agent workflows and trigger phrases for lendtrack"
---

# Workspace Skill — lendtrack

Purpose: provide short, reusable workflows and trigger phrases so AI agents can act effectively in this repo.

When to use

- Small developer-facing tasks: add tests, refactor a component, fix a failing test, or update a data-layer function.
- Complex or risky work (DB, infra, auth): summarize plan first and ask for approval.

Trigger phrases (use these to invoke the skill)

- "run tests and report failures"
- "add unit tests for services/loanService.ts"
- "refactor component layout in components/dashboard"
- "validate supabase connection and list env requirements"

Quick commands (what agents should run locally)

- `npm test` — runs unit tests
- `npm run test:connection` — validate Supabase connectivity ([scripts/test-connection.js](scripts/test-connection.js))
- `npm run dev` — start Next.js dev server

Recommended workflows

- Fixing a failing test: run `npm test`, reproduce failure, implement minimal fix, add or update tests, run `npm test` again.
- UI change: run dev, update `components/` and `app/` layouts, keep changes scoped, and update or add a Jest/react-testing-library test.
- Service change: run `npm run test:connection` if DB interactions, update `services/` and add tests under `__tests__/`.

Repository conventions

- App Router under `app/` — consult Next.js docs in `node_modules/next/dist/docs/` before making framework-level changes.
- Data layer lives in `services/` and uses `lib/supabase.ts` for DB access.
- Tests live under `__tests__/` and are run with Jest.

Links

- Agent guidance: [AGENTS.md](AGENTS.md)
- Copilot instructions: [.github/copilot-instructions.md](.github/copilot-instructions.md)
- Project README: [README.md](README.md)

Authoring notes

- Keep `description` concise and include trigger phrases to improve discoverability.
- Use narrow `applyTo` globs for file-specific instructions; avoid global `applyTo: "**"` unless necessary.
