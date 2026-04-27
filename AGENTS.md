<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Purpose

Concise guidance for AI coding agents: quick run/test commands, important files, and minimal conventions to follow when editing this repository.

## Quick Commands

- Development: `npm run dev`
- Build: `npm run build`
- Start production: `npm run start`
- Lint: `npm run lint`
- Tests: `npm test` (watch: `npm run test:watch`)
- DB connectivity check: `npm run test:connection`

## Key Files & Areas

- `app/` — Next.js App Router pages and layout
- `components/` — React UI components (see `components/dashboard/`)
- `services/` — API / data-layer helpers (`services/loanService.ts`, `services/paymentService.ts`)
- `lib/supabase.ts` — Supabase client initialization
- `__tests__/` — Jest tests and test utilities
- `scripts/test-connection.js` — helper to validate Supabase connectivity

## Agent Guidance (short)

- Read the Next.js warning at the top before changing framework-specific code.
- Run the relevant scripts above locally before proposing large changes (`dev`, `test`, `build`).
- Prefer small, focused edits and include tests where appropriate.
- Use this `AGENTS.md` (workspace root) for short, widely-applicable guidance; put team-enforced hooks in `.github/` if necessary.
- When authoring new instructions or skills: include a clear `description` with trigger phrases, and use narrow `applyTo` globs to avoid loading instructions for unrelated files (see the `agent-customization` skill for best practices).

## Where to find more

- Project README: [README.md](README.md)
- Testing helpers: [scripts/test-connection.js](scripts/test-connection.js)
- Agent authoring guidance: consult the local `agent-customization` SKILL in your VS Code extension.

