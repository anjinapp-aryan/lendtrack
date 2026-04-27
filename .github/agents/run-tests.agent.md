---
name: run-tests-agent
user-invocable: true
description: "Run the project's test suite and summarize failures. Trigger phrase: 'run tests and report failures'"
---

Steps:

- Run `npm test` (or `npm test --silent` when appropriate).
- Collect test output and summarize passed vs failed counts.
- For each failing test, list the test name, top error message, and a short suggested fix.
- Provide exact commands to reproduce failures locally.

Do not modify source files without explicit approval; propose code changes first.
