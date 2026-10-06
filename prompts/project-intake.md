# Project intake prompt

Use in a new local Codex, Claude Code, or AGY session after placing this documentation at the intended Goodly project root. This prompt is read-only planning, not implementation authorization.

```text
You are helping prepare the Goodly project on my local Kali Linux computer.
Read the root AGENTS.md and follow all applicable higher-priority instructions.
For Claude Code, confirm CLAUDE.md's @AGENTS.md import is loaded; read AGENTS.md
explicitly if needed. Do not modify global agent settings or trust boundaries.

Read README.md, context/project-overview.md, context/product-decisions.md,
context/progress-tracker.md, context/architecture-status.md, and
context/open-questions.md. Read topic files relevant to the task.

For this session, inspect and plan only. Do not install dependencies, create an
application scaffold, write files, start/stop services, connect to databases,
run migrations/tests, delete resources, send emails, buy services, or deploy.
Do not read or print secrets.

First confirm:
1. The exact current project directory and whether a Git repository exists.
2. The instruction files loaded and any relevant inherited conflicts.
3. The current actual files/working-tree state, without altering user work.
4. That Goodly currently has no selected stack or approved port allocation.

If I provide the workstation audit below, use it as evidence, preserve unknowns,
and distinguish inactive declared ports from currently listening ports.
Do not run a duplicate machine audit unless a specific missing check is requested.

Return a concise readiness review, unresolved blockers, and the next single
decision that would unblock preparation. Do not implement a preferred stack
or treat the proposed build plan as permission to begin all units.

Keep accepted English copy unchanged. Use Goodly's approved nickname publicly,
never the private real name. Do not revive outdated decisions from old documents.

Workstation audit, if available:
[PASTE REPORT HERE, OR STATE THAT IT IS STILL PENDING]
```
