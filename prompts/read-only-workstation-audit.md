# Read-only workstation audit prompt

Use on Pavel's local Kali machine, not a cloud coding environment. If the audit is already running, keep that report rather than launching a duplicate audit. Current Codex documentation supports `codex --sandbox read-only`; check `/status` and installed-version behavior. Do not use sudo or disable restrictions to complete missing checks.

Paste this prompt:

```text
Perform a read-only workstation audit before creating a new project named Goodly
on this Kali Linux computer. Do not implement or configure anything yet.

Follow the existing applicable agent instructions and permission boundaries.

Do not install/update software, create files, start/stop services, modify projects,
connect to application databases, run migrations, or remove Docker resources.
Do not read .env files, credentials, tokens, private keys, or print secrets.
Do not request sudo; report checks unavailable without elevated access.

Inspect:
1. OS, RAM, free disk space, and installed versions/paths of Git, Node,
   package managers, Docker Compose, Codex, Claude Code, and agy.
2. Listening TCP/UDP ports, with owning processes where visible.
3. Docker context: verify it targets a local engine before inspecting resources.
4. Running AND stopped containers: names, images, published ports, Compose labels.
5. Existing Compose projects, networks, and volumes, using metadata only.
6. Within ~/Projects, locate project manifests and service configuration files.
   Extract only declared ports and resource names; do not execute project scripts
   or print complete configuration files.
7. Identify instruction-file locations and possible inherited rule conflicts,
   without exposing credentials or changing any agent configuration.

Return:
- Installed tools and versions.
- Active ports and ports declared by existing projects.
- Existing Docker resources grouped by project.
- Any unknowns, unavailable checks, and relevant resource constraints.
- Candidate unused ports for Goodly's app, development database, test database,
  and local email testing, clearly marked PROVISIONAL.
- Recommended next steps. Do not select a framework/database or make changes.

A currently unused port is not proof it is unallocated.
Do not claim the workstation is conflict-free without supporting evidence.
```

Do not dump whole Docker inspection/configuration objects; they may contain secrets. Docker socket/API access is not guaranteed harmless by a read-only filesystem sandbox, so follow the task's read-only operation limits as well. Report every unavailable check clearly.

Codex reference: https://learn.chatgpt.com/docs/developer-commands
