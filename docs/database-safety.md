# Database safety requirements

2026-10-03 · Stack-neutral requirements; guards not yet implemented.

## Separation

Goodly must not reuse another project's database, credentials, volumes, or schema. Development and tests require distinct dedicated targets and credentials. A test must not be allowed to reset development data. Production/cloud connection strings are not accepted local defaults.

## Verify before connecting/mutating

Before migrations, seeds, integration tests, reset, or cleanup, verify the selected environment, permitted host/endpoint, exact database/project identity, permitted role, and allowed operation. Fail closed if any are missing or mismatched. Do not rely on a database name substring such as test, a port alone, or an unchecked environment variable.

For a host process, the selected local loopback endpoint can be allowlisted. For a process inside an isolated container network, the documented Goodly service hostname may be the intended target; validate the corresponding project/network identity. Do not require a container to use loopback to reach a separate database, or treat a familiar service name on an unknown remote Docker engine as safe.

Avoid fallback connection strings that silently connect to a default/other project when configuration is absent. Never log passwords or complete secret-bearing URLs. Inspect the configured target in a redacted structured form when needed.

## Destructive operations

Development migrations preserve data according to reviewed migration behavior. Destructive reset/fixture cleanup belongs only to the dedicated test environment and needs explicit guard checks. Never use unscoped DROP/TRUNCATE/DELETE, volume deletion, or Docker prune to fix a test issue. Verify fixture ownership/cleanup and isolation across suites/concurrent workers.

Review migration order, constraints, concurrency, authorization, and rollback/recovery assumptions before applying. Do not edit already-applied migration history to conceal a failure. Record actual applied migration identity only from observed evidence.

## Authorization and privacy design

Server checks enforce seller ownership, administrator privileges, account/listing visibility, private first name/email, private reports, and correct message participants. Passwords use the chosen auth system's secure storage. Public endpoints must serialize only public approved fields, not whole private records.

Nickname reservations and profile decisions need concurrency-safe uniqueness/version checks. Listing/seller blocks, deletion suppression, archived categories, and translation-version changes must be checked again at relevant writes. Deletion must account for storage assets and references across every feature.

## Verification before implementation units use data

Meaningful checks should reject absent/wrong targets, another project's database, remote/production targets, test-on-dev, dev-on-test, and unauthorized destructive actions. Include allowed host/container topology cases when selected. Review test runner parallelism and fixture cleanup. Database guards protect the target; application authorization tests protect user boundaries. Both are necessary and neither has run yet.

Exact DB engine, schema, roles, endpoint registry, tooling, migration commands, test fixture mechanism, backup approach, and guard implementation await architecture/audit decisions.
