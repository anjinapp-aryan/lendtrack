---
name: validate-supabase
description: "Validate Supabase connection and list required environment variables"
applyTo: "lib/**, services/**"
---

Run `npm run test:connection` (or inspect `scripts/test-connection.js`) and return:

- The command output and whether the connection succeeded.
- A list of required environment variables and example names (do NOT include secrets).
- Troubleshooting steps for common connection failures (network, keys, project URL).

If you cannot run the command, inspect the `scripts/test-connection.js` file and infer the required env vars.
