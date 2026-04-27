# .github README — Using workspace agents & prompts

This short guide explains how to invoke the repository's Copilot agents, prompts, and skill.

Where to look

- Agent guidance: [AGENTS.md](AGENTS.md)
- Copilot workspace instructions: [.github/copilot-instructions.md](.github/copilot-instructions.md)
- Workspace skill: [.github/skills/workspace/SKILL.md](.github/skills/workspace/SKILL.md)
- Prompts: [.github/prompts/](.github/prompts/) (e.g., `run-tests`, `add-service-tests`)
- Agents: [.github/agents/](.github/agents/)

How to invoke

- In Copilot Chat (or your workspace chat UI), use the trigger phrases listed in the skill or prompt `description`.
- Examples:
  - "run tests and report failures" → invokes the `run-tests` prompt/agent
  - "add unit tests for services/loanService.ts" → invokes `add-service-tests`
  - "refactor component layout in components/dashboard" → invokes `refactor-dashboard`
  - "validate supabase connection" → invokes `validate-supabase`

Best practices

- Review [AGENTS.md](AGENTS.md) before making large or framework-level changes.
- Run local commands before applying fixes:

```bash
npm test
npm run dev
npm run test:connection
```

- Do not commit secrets; list required env vars in PR descriptions when adding new env requirements.

Questions or changes

- If you want additional prompts, agents, or a PR template that references these agents, open an issue or ask here and I'll add it.
