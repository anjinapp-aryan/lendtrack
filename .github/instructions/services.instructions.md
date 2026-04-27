---
description: "Use when editing or testing code under services/ (loan/payment/data-layer)."
applyTo: "services/**"
---

# Services instructions

Purpose: short guidance for agents making changes to the data/service layer (`services/`).

Do first

- Run unit tests: `npm test`
- If change touches Supabase or DB access, run: `npm run test:connection`

Editing rules

- Keep service functions small and side-effect free where possible.
- Prefer returning serializable data structures (no DOM/node handles).
- Add or update tests in `__tests__/` alongside the service change.

Database & environment notes

- `lib/supabase.ts` centralizes Supabase client initialization — reuse it.
- Do not commit secrets or `.env` values; list required env vars in PR description if you add new ones.

Testing guidance

- Mock network/DB calls in unit tests when possible (use Jest mocks).
- For integration checks, run `npm run test:connection` and document results in the PR.

When to ask for review

- Changes that alter database schema, migration scripts, or auth flows.
- Any change that touches billing, payments, or critical financial calculations.
