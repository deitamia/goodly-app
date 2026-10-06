# Local environment preparation

2026-10-03 · Audit-dependent plan, not runnable setup.

## Verified Workstation Environment (Windows Audit: 2026-10-06)

- **Operating System**: Windows 11 / x64
- **Node.js**: `v24.19.0` (Installed and active)
- **npm**: `11.17.0` (Installed and active)
- **Git**: `2.55.0.windows.3` (Installed and active)
- **Docker**: Not installed / Not required (Supabase Free Tier cloud project handles PostgreSQL, Auth, and Storage directly without Docker overhead)
- **Port 3000**: Verified free and unallocated

## Isolation Design (Windows Local Development)

| Resource | Value |
| --- | --- |
| Goodly directory | `c:\Users\mydei\OneDrive\Documents\Goodly-project-pack-v0.3\goodly-project-pack` |
| Git repository | Local repository to be initialized (`git init`) |
| Runtime / Stack | Next.js (App Router, TypeScript) on Node 24 |
| Database & Backend | Supabase Free Tier (Managed PostgreSQL) |
| ORM & Schema | Drizzle ORM (`drizzle-orm`, `drizzle-kit`) |
| Local Host Binding | `127.0.0.1:3000` |
| Local Secrets | Stored securely in `.env.local` (excluded from git via `.gitignore`) |

If Docker Compose is selected, choose a unique project name and project-scoped networks/volumes. Avoid unnecessarily fixed global container names/external shared resources. Container internal ports may be identical across isolated networks; published host endpoints must not collide. Binding to 127.0.0.1 differs from exposing on every interface.

## Expected future scripts

Preflight environment/ports/target ownership; start only Goodly resources; stop only Goodly resources; apply development migrations with guards; run tests against only the dedicated test target; run deterministic seed data for the intended environment; perform scheduled retention cleanup. Script names/commands are not chosen yet.

Startup should fail clearly on a port conflict or wrong target, rather than auto-switching ports or stopping another process. Destructive test reset must be separately guarded; ordinary development startup must not reset data. Avoid global Docker prune or machine-wide cleanup commands.

## To prepare after audit and architecture

Pinned dependency manifests/lockfile, safe environment variable example without secrets, Docker configuration if selected, service/port registry, isolation/preflight scripts, data guard tests, install/start/stop/test documentation, and a verified local health check. Do not install or produce pretend-final config from this placeholder.

References:

- https://docs.docker.com/compose/how-tos/project-name/
- https://docs.docker.com/compose/how-tos/networking/
