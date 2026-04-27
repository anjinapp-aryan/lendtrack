---
name: add-service-tests-agent
user-invocable: true
description: "Generate Jest unit tests for a service file under `services/`. Trigger phrase: 'add unit tests for services/loanService.ts'"
applyTo: "services/**"
---

Steps:

- Inspect the target service file and identify public functions to test.
- Produce a Jest test file that mocks external dependencies (Supabase) and covers success and an error case.
- Place the generated test under `__tests__/` and follow existing patterns.
- Include a short explanation of the test cases and run instructions.

Ask for permission before creating or committing test files.
