# Architecture status

Version: 0.3 · 2026-10-03 · No implementation stack selected.

## Accepted deployment direction

Build, run, and host the MVP locally on Pavel's Windows workstation. Production planning is excluded per user decision; focus is 100% on complete local execution, local verification, and rapid autonomous development.

## Decisions selected (Unit 00 Finalized)

| Area | Selected Decision |
| --- | --- |
| Operating System & Runtime | Windows (x64) · Node.js `v24.19.0` · npm `11.17.0` · Git `2.55.0` |
| Frontend & Full-Stack Framework | Next.js (App Router, React 19, TypeScript) |
| Database & Backend Platform | Supabase Free Tier (Managed PostgreSQL, PostgREST) |
| ORM & Migrations | Drizzle ORM (`drizzle-orm`, `drizzle-kit`) with strict target guards |
| Authentication & Sessions | Supabase Auth (Email/Password, Email confirmation, One-time reset tokens) |
| Image Processing & Storage | Supabase Storage bucket (`listing-images`, `profile-photos`) + `sharp` for local WebP optimization |
| Translation Engine | Pluggable translation service (Synchronous single attempt, mock/Gemini API/DeepL adapter) |
| Email Service (Local) | Supabase Auth built-in SMTP / Mailpit integration |
| Local Application Port | Port `3000` (Verified available) |
| Local Dev Scope | Local execution only; full credential visibility in local `.env.local` |

## Required capabilities independent of stack

Server-enforced seller ownership/admin roles and visibility; email confirmation/reset; concurrency-safe nickname reservations/profile decisions; structured category/country/language data; independent seller/listing/deletion states; versioned translations and static verification; validated image processing; private reports/messages/contact; predictable external links; scheduled erasure with storage cleanup; safe public theme controls.

Use exact-money representation rather than floating-point arithmetic as a technical requirement when defining price storage. Specific database types/currency decimals await currency policy. Do not implement application data as an unreviewed mock schema and later claim it is production-ready.

## Local isolation requirements to concretize after audit

Dedicated project directory, project-scoped resources, dedicated development/test data, distinct credentials, and explicit fixed host-port allocations. Avoid public network bindings for local services unless deliberately required. Preflight checks should refuse occupied/mismatched targets rather than silently picking another port or stopping another process.

Working guidance is detailed in `docs/local-environment.md`, `docs/ports-and-services.md`, and `docs/database-safety.md`. It is not yet a runnable environment configuration.

## Hosting compatibility checks before stack commitment

Check actual chosen plan/runtime support, database connection/type, persistent image storage, maximum upload/request limits, synchronous translation execution time, scheduled jobs, environment variables, TLS/domain configuration, email delivery, backups, and resource limits. An “unlimited” marketing label does not resolve these requirements.

Official Hostinger documentation currently distinguishes managed Node.js options and supported databases; recheck the intended plan when making a purchase/architecture decision. A managed plan and a VPS have different responsibilities. Native database support and an externally hosted database are separate possibilities, neither selected here.

References checked during planning:

- https://www.hostinger.com/support/node-js-hosting-options-at-hostinger/
- https://www.hostinger.com/support/which-databases-and-data-tools-are-supported-at-hostinger/

This file deliberately contains no package versions, schema DDL, connection strings, installation commands, or port numbers.
