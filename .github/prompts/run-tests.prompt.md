---
name: run-tests
description: "Run the test suite and summarize failures"
---

Run the project's test suite (`npm test`) and return:

- A concise summary of passed vs failed tests.
- The failing test names and the topmost error messages/stack traces.
- Suggested minimal fixes or likely root causes for each failure.
- Exact commands to reproduce the failures locally.

Do NOT modify source files without asking for approval; propose fixes first.
