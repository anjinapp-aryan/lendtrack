# Contributing to lendtrack

Thanks for contributing! This file explains the project's conventions and how to use the workspace agents and prompts.

Getting started

1. Fork the repository and create a feature branch.
2. Install dependencies:

```bash
npm install
```

Running locally

- Start dev server: `npm run dev`
- Run unit tests: `npm test`
- Validate Supabase connectivity: `npm run test:connection`

Code style and tests

- Keep changes small and focused; update or add tests for behavior changes.
- Tests live in `__tests__/` and use Jest.
- Mock external services where appropriate; use `scripts/test-connection.js` for integration checks.

Using the workspace agents/prompts/skill

- See [.github/README.md](.github/README.md) for a short guide on invoking agents and prompts.
- Useful trigger phrases are defined in [.github/skills/workspace/SKILL.md](.github/skills/workspace/SKILL.md).
- If you used a prompt/agent to generate code, include a short note in your PR describing which agent was used and what it changed.

PR checklist

- Use the PR template (`.github/PULL_REQUEST_TEMPLATE.md`) and fill the checklist.
- Run tests locally and include reproduction steps in the PR.
- Do not commit secrets; list required env vars in the PR description.

Where to ask for help

- Open an issue or mention maintainers in the PR.