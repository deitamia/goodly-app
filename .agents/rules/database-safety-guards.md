---
description: Mandatory database safety, target verification, dev/test isolation, and data-loss prevention rules.
globs: ["**/*", "scripts/**", "src/**", "tests/**"]
always_on: true
---

# Database Safety & Target Guard Rules

## 1. Environment & Target Isolation
- **No Shared Targets**: Goodly must NEVER use, connect to, or modify another project's database, schema, credentials, volumes, or ports.
- **Dev vs Test Separation**: Development and automated test suites MUST use completely distinct databases and credentials.
- **Guard Enforcement**: Before executing migrations, seeds, test runners, or cleanup scripts, code MUST verify:
  1. Selected environment matches the intended mode (`development` vs `test`).
  2. Database host/port matches the dedicated Goodly target registry.
  3. Database name explicitly contains the project identifier (`goodly_dev` or `goodly_test`).
  4. Script fails closed immediately if any variable is missing, malformed, or points to an unexpected endpoint.

## 2. Prevention of Destructive Operations
- **Prohibited Commands**:
  - NEVER execute `DROP DATABASE`, `DROP SCHEMA`, or `DROP TABLE` against a development or production target.
  - NEVER run unscoped `DELETE FROM table;` or `TRUNCATE` outside of dedicated, guarded test fixture teardown.
  - NEVER use global Docker cleanup commands (`docker system prune -a`, `docker volume prune`) that could destroy data belonging to other local projects.
- **Migration Safety**:
  - Development migrations must be additive and non-destructive.
  - Never alter already-applied migration history to hide a bug.
  - Migrations must be reviewed for transaction safety, constraint integrity, and rollback capability.

## 3. Credential & Secret Hygiene
- **No Secrets in Source or Logs**: NEVER commit credentials, private keys, API tokens, or full connection strings to Git.
- **Redacted Connection Logs**: If connection parameters must be inspected or logged for diagnostics, redact passwords, tokens, and sensitive query strings.
- **Local Isolation Defaults**: Default to local loopback bindings (`127.0.0.1`) rather than `0.0.0.0` for local service endpoints.

## 4. Privacy & Authorization Checks at the Data Layer
- **Ownership Verification**: All update/delete queries for seller assets (listings, photos, profile fields, deletion requests) must verify `seller_id == authenticated_user_id` server-side.
- **Public Query Filters**: Public catalog queries must explicitly enforce:
  ```sql
  WHERE sellers.status = 'approved'
    AND sellers.is_blocked = false
    AND sellers.is_deletion_requested = false
    AND listings.status = 'active'
    AND listings.deleted_at IS NULL
  ```
- **Serialization Safety**: Ensure database queries for public endpoints select ONLY public columns (nickname, photo, flag, active listings) and strictly omit private columns (`real_first_name`, `email`, `rejection_reason`).
