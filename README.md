# Goodly — project preparation pack

Version: 0.3 · Decision snapshot: 2026-10-03 · Status: planning documents, no application implementation.

This package consolidates the decisions Pavel has accepted so far. It is intended to be placed at the root of the future Goodly repository. Documentation is in English for Codex, Claude Code, and Antigravity CLI; `START-HERE-BG.md` explains how to use it in Bulgarian.

## Start here

1. Read `AGENTS.md`, `context/project-overview.md`, and `context/progress-tracker.md`.
2. Use `context/product-decisions.md` as the scope index and the linked topic documents as the detailed specifications.
3. Review `context/open-questions.md` before planning implementation.
4. Incorporate the local Kali audit before filling in architecture, service ports, or executable setup commands.
5. Work through `specs/00-build-plan.md` only after the applicable prerequisites are resolved and the next work is authorized.

There is no selected framework, database, ORM, authentication provider, translation provider, email provider, package manager, or deployment platform yet. There are no approved port numbers. This package intentionally contains no application scaffold, Docker Compose configuration, migration, dependency manifest, credentials, or installation script.

## Authority and status

- **Accepted:** explicit product decisions already made in the conversation, consolidated here.
- **Derived invariant:** a necessary consistency rule for those decisions; not a new feature.
- **Working recommendation:** workflow or technical preparation guidance, subject to Pavel's choice.
- **Open:** an unresolved product or technical decision; do not silently implement a preferred answer.
- **Not implemented:** all application features in this snapshot.

This snapshot supersedes conflicting earlier planning documents 01–07, including version 0.2 of documents 04–07. Those older files are not included in this package. Later explicit decisions from Pavel take precedence and must be incorporated in the relevant canonical document. Do not load old specifications alongside this package as competing authorities.

## File guide

| File or group | Purpose |
| --- | --- |
| `AGENTS.md`, `CLAUDE.md` | Shared agent instructions and Claude import |
| `context/project-overview.md` | Mission, audience, boundaries, current stage |
| `context/product-decisions.md` | Scope index, listing fields, public identity rules |
| `context/public-site-ux.md` | Pages, navigation, cards, search, filters, seller profile |
| `context/seller-panel.md`, `context/admin-panel.md` | Seller and administrator behavior |
| `context/translations.md` | Languages, synchronous translations, fallback, verification |
| `context/design-system.md` | Visual decisions and limited Appearance controls |
| `context/english-content.md` | Exact accepted English copy and labels |
| `context/categories.md` | Initial taxonomy and archive behavior |
| `context/lifecycle-and-retention.md` | Approval, blocking, deletion, retention clocks |
| `context/notification-matrix.md` | Email versus platform delivery rules |
| `context/architecture-status.md` | Unselected technical choices and required capabilities |
| `context/open-questions.md`, `context/progress-tracker.md` | Remaining decisions and honest progress |
| `docs/agent-workflow.md` | Handoffs, instruction loading, verification, Git boundaries |
| `docs/local-environment.md`, `docs/ports-and-services.md` | Audit-dependent local isolation plan |
| `docs/database-safety.md` | Database guard requirements before migrations/tests |
| `docs/legal-content-requirements.md` | Inputs needed before writing final legal pages |
| `docs/consistency-review.md` | Logical review and unresolved dependencies |
| `specs/00-build-plan.md`, `specs/01-acceptance-criteria.md` | Proposed implementation sequence and behavior checklist |
| `prompts/read-only-workstation-audit.md` | Read-only Kali workstation audit prompt |
| `prompts/project-intake.md` | Safe first session after placing this package |

## Moving the package to Kali

Extract the ZIP into a new dedicated Goodly directory. Choose the exact destination after checking for an existing folder or repository; do not overwrite another project. The directory inside the ZIP is `goodly-project-pack/`; place its contents at the intended repository root. No installation is required to read these files.

Instructions constrain agent behavior but do not replace operating-system permissions, sandboxing, database credentials, or review. A local CLI and a desktop application can use the same documentation when both are explicitly operating on this same local repository.
