# Agent workflow

2026-10-03 · Working preparation guidance; product decisions remain in `context/`.

## Shared instructions

Root `AGENTS.md` is the canonical project entry point. Root `CLAUDE.md` imports it with `@AGENTS.md`. Codex and Antigravity document project AGENTS.md support. Installed versions, global/parent instructions, runtime permissions, and actual loaded context must be checked on Pavel's machine; the files alone do not prove successful loading or enforcement.

Do not create competing copies of the same rules in AGENTS/CLAUDE/GEMINI files. Add a tool-specific adapter only if the actual installed version needs it. Keep the entry point concise and link detailed context rather than importing every file into every task automatically. User instructions and applicable higher-priority instructions prevail.

Official references checked 2026-10-03:

- Codex instruction discovery: https://learn.chatgpt.com/docs/agent-configuration/agents-md
- Claude Code project memory/imports: https://code.claude.com/docs/en/memory
- Antigravity CLI project context: https://antigravity.google/docs/cli/best-practices/
- Antigravity rules: https://antigravity.google/docs/rules/

## First local session

Use `prompts/project-intake.md`. Confirm exact project root and that all necessary instructions were read. Identify inherited instructions/conflicts without changing them. Do not globally trust all of Projects/home or alter another project's configuration. Report actual limitations rather than assuming every tool has identical permission behavior.

The workstation audit currently precedes implementation. If already running, do not run it a second time just to match this package. Review its results first. Planning files do not authorize creating the application scaffold or buying/deploying services.

## Recommended handoff loop

1. Read progress and task-specific canonical documents; inspect working-tree state if Git exists.
2. Establish the user's authorized scope and missing dependencies.
3. Plan a focused change. Complete routine work within that scope without repeated confirmation.
4. Verify according to impact; report precisely what was run and what remains unverified.
5. Update progress and affected specifications. Preserve a handoff before switching tools.

Initial recommendation: one writing agent at a time. Switching Codex → Claude → AGY must not start competing edits. If parallel work is later requested, define isolated worktrees/tasks, database/service targets, shared file ownership, and integration responsibility first. Worktree isolation alone does not isolate databases or ports.

## Git and execution boundaries

Goodly's remote and merge workflow are not selected. Do not inherit a different project's PR/fast-forward convention silently. Do not force-push, clean/reset user work, merge/push/deploy, or change trust settings without authorization for that action. Routine read-only inspection is permitted within an authorized review.

Never carry production secrets into a test target. Treat repository scripts as executable code; inspect them before relying on a name such as test/reset. Network access and Docker socket access can reach systems outside the filesystem sandbox; the prompt's read-only scope still matters. Report blocked checks instead of disabling all permissions to complete the audit.

## Useful evidence, not noise

Changes: purpose, observed behavior, modified files. Checks: actual commands/result summaries. Data operations: verified environment/target without secrets. Handoff: current branch/HEAD/worktree and next task. Documentation-only tasks need content/link/consistency checks; no invented application test results. Fix the canonical document rather than adding contradictory override notes indefinitely.
