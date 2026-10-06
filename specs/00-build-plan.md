# Proposed build plan

Version: 0.3 · 2026-10-03 · Proposed sequence, not implementation authorization.

The public part is the first product area to complete. Foundations/security needed for it may be implemented first. Detailed executable units depend on audit/architecture answers; do not fabricate a schema or toolchain to make this plan look finished.

| Unit | Outcome | Dependencies and completion evidence |
| --- | --- | --- |
| 00 — Audit and choices | Verified workstation constraints; selected stack and required providers | Audit report reviewed; unknowns documented; architecture choices recorded |
| 01 — Local foundation | Dedicated repository/runtime/services, exact ports, dev/test isolation | Preflight and DB target guards verified; no unrelated resources modified; install/start/stop instructions tested |
| 02 — Domain/security design | Detailed state, ownership, uniqueness, category, translation, retention model | Reviewed schema/authorization/migration plan; concurrency and erasure behavior defined |
| 03 — Public interface | Home/navigation, cards, results, filters, seller profile, footer routes | Public behavior and accessibility checks; use explicit local fixtures only where backend work is pending |
| 04 — Localization/search | 15-language UI, static keys, source detection, current-version fallback, search | Provider/timeout/save behavior chosen; partial failures and label rules verified; no translation queue |
| 05 — Authentication/application | Signup, Terms acceptance, email verification/reset, profile submission/admin initial approval | Server roles/privacy verified; no listing before approval; rejection/deletion and token cases checked |
| 06 — Seller listing management | Add/edit/hide/show/delete products/services; public data integration | Pricing/types/category/images correct; state transitions and synchronous translation failures checked |
| 07 — Profile changes | Independent approval requests, nickname reservations, intro translations | Replace/cancel/stale decision and uniqueness races checked; public current values preserved |
| 08 — Moderation/communications | Admin Sellers/Listings/Reports/Messages/Contact inquiries and seller Dashboard | Private data boundaries, notification channels, block/unblock and email-app reply semantics checked |
| 09 — Admin content/theme | Categories, static Translations, Appearance | Archive/save behavior, source-version verification, approved theme/contrast controls checked |
| 10 — Deletion/retention | Manual account deletion workflow and accepted cleanup clocks | Cancel/block interactions, whole-account erasure/assets, timed cleanup/outage cases checked |
| 11 — MVP integration/content | Complete connected local MVP with reviewed English/legal content | Meaningful unit/integration/privacy tests plus browser QA; unresolved launch decisions closed |
| 12 — Hosting/launch preparation | Selected production plan/domain/services and deployment/recovery instructions | Compatibility verified, migration/upload/time limits checked, backup/restore and secrets planned; separate deployment authorization |

Ordering can change when dependencies become concrete. In particular, public UI can be built against explicit local test fixtures before backend integration, but it must not be reported as a working public marketplace. Authentication and privacy foundation cannot be skipped just to make a demo look complete.

## Unit discipline

Each implementation unit should define scope, prerequisites, canonical requirements, changed files/migrations, validation evidence, and handoff. Work on the authorized unit; avoid speculative infrastructure and unrelated feature expansion. Update progress and documentation after a real change.

## Completion standard

Implemented is not synonymous with verified. Report checks actually run, test target identity, browser scenarios, unresolved failures, and material limitations. No universal test count is prescribed now. Security/concurrency/retention changes require meaningful behavioral checks; cosmetic/doc edits need appropriate focused verification.

The MVP is complete locally only when public, seller, and admin flows work together with realistic failure handling, private data remain private, translations obey the selected policy, retention actually runs, and the agreed copy/legal inputs are ready. Production launch still requires a chosen hosting plan and separately verified operations.
