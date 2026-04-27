---
name: add-service-tests
description: "Create unit tests for a service file under `services/`"
applyTo: "services/**"
---

Given a target service file path (for example `services/loanService.ts`), produce a Jest test file that:

- Covers key behaviors (success path and at least one error or edge case).
- Mocks external calls (Supabase) using Jest mocks.
- Is placed under `__tests__/` and follows existing test patterns.

Include the full test file content and a short explanation of the test cases.
