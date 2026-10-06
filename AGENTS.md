# Goodly — shared agent instructions

Snapshot: 2026-10-03. Applies to this repository. This is the canonical project entry point for Codex, Claude Code, and Antigravity CLI.

## Read before working

Read `README.md`, `context/project-overview.md`, `context/progress-tracker.md`, and `context/product-decisions.md`. Then read the topic documents relevant to the task. Before changing infrastructure or data, also read `context/architecture-status.md`, `docs/local-environment.md`, `docs/ports-and-services.md`, and `docs/database-safety.md`.

Follow applicable higher-priority instructions and the user's current authorization. Later explicit user decisions override an older project snapshot. Update the canonical topic file and progress tracker when a decision or implementation changes. Do not treat proposed defaults or open questions as accepted decisions.

## Current stage

The application has not been scaffolded. The local workstation audit is pending. Technical choices and ports are unselected. This package authorizes documentation preparation only; it is not an instruction to install dependencies, create a schema, start services, deploy, or implement the whole MVP. When the user authorizes a later phase, execute that phase without repeatedly requesting permission for routine work within its scope.

## Product invariants

- Goodly is a free external-link catalog for parents and caregivers of children with disabilities.
- No buyer accounts, internal checkout, payments, orders, bookings, commissions, or product detail pages.
- Public identity is the approved nickname and stable seller ID. Real first name and email are private to the seller and administrator.
- Initial seller approval precedes listing creation. Every later profile-field change requires individual approval. Listings require no prepublication approval.
- Public visibility depends on seller eligibility/status, listing status, deletion state, and deletion-request state. Never infer it from one flag alone.
- Products require a fixed price and currency. Services may use Price on request.
- Translation attempts are synchronous; no background translation queue or listing retry button. Missing/current-version translations fall back to the current original.
- Reports are administrator-only. Seller Messages, Contact inquiries, and system notifications are distinct.
- Preserve the accepted copy in `context/english-content.md` unless the user changes it.

## Safe work boundaries

- Work only in the explicitly selected Goodly directory. Inspect existing changes before editing; preserve unrelated user work.
- Never stop unrelated services, repurpose another project's ports, use another project's database, or remove unrelated Docker resources.
- Do not broadly trust the home or Projects directory, modify global agent settings, or enable unrelated MCP integrations for convenience.
- Do not read or print secrets during audits. During later authorized setup, use only necessary credentials and never commit or log them.
- Do not run migrations, integration tests, resets, or seed scripts before the Goodly database target guards are implemented and verified.
- Do not use production/cloud credentials during local development by default. Real email delivery or paid translation calls require the intended provider and configuration to be established first.
- Do not deploy, purchase hosting/domains, send messages to third parties, force-push, discard user changes, or perform destructive cleanup without authorization for that action.
- Do not spawn parallel agents unless explicitly requested. Recommended initial workflow: one writing agent at a time, with handoffs.

## Execution and evidence

Use current official documentation for selected tools, and inspect installed versions rather than guessing. Use focused changes and validation appropriate to the impact. Security, privacy, authorization, concurrency, and retention changes require meaningful checks; documentation-only changes require consistency/link/content checks rather than application tests.

Never claim a test passed unless it ran. Distinguish implemented, verified, pending, and blocked. Record actual commands/results without secrets. Do not invent commands for an unselected stack. Maintain `context/progress-tracker.md` at handoff and identify the next concrete task.

If a relevant decision is unresolved, continue independent authorized work and ask one focused question. Do not fill unresolved architecture, legal, or product choices silently. Explain any genuine permission blocker by naming the instruction that requires it.
