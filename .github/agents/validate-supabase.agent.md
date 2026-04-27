---
name: validate-supabase-agent
user-invocable: true
description: "Validate Supabase connectivity and list required env vars. Trigger phrase: 'validate supabase' or 'validate supabase connection'"
applyTo: "lib/**, services/**"
---

Steps:

- Run `npm run test:connection` and capture output (or inspect `scripts/test-connection.js`).
- Report whether the connection succeeded, list required env vars (no secrets), and give troubleshooting tips.
- If the command cannot run in this environment, infer env vars from `scripts/test-connection.js` and `lib/supabase.ts`.
