# Consistency review

Review date: 2026-10-03 · Scope: planning documentation only.

## Reconciled decisions

| Topic | Consistent current rule |
| --- | --- |
| Eligible sellers | Parents and caregivers; self-created/provided work |
| Public identity | Required unique 3–25-character nickname, stable seller ID; private first name/email |
| Initial approval | Required before listings; rejection email and account erasure |
| Later profile changes | Individual field approval; old value effective; replace/cancel; platform+email decisions |
| Listings | No preapproval; Active/Hidden/Blocked; own status independent of seller block |
| Unblock | Restore prior listing state; seller block/deletion suppression still applies |
| Pricing | Products fixed; services fixed or request; no conversion |
| Shipping/availability | Origin is approved seller country; destination/online countries/physical city are separate |
| Services filters | City and Online language mutually exclusive; other common filters remain combinable |
| Archived category | Existing listing remains; active category required on editing/save; cancel preserves old |
| Translation failure | Publish available current translations; current original fallback; no retries/queue for listings |
| Static editor | English-source editing + target verification; source-version tracking; no general page builder |
| Contact | Footer route; mandatory Subject; separate inbox; external email-app reply; manual Closed |
| Communications | Reports private; normal Messages platform-only; profile/seller decisions follow explicit email matrix |
| Retention | Distinct 30-day start events; status/current values stored independently of temporary history |
| Appearance | Limited public colors/palettes; black main text; no arbitrary code/business state controls |
| Development | Local Kali first; audit before stack/port selection; no assumed other-project configuration |

## Superseded rules removed from this package

Public real name; parents-only eligibility; sellers adding listings before initial approval; every listing requiring approval; profile edits applying immediately; no Contact form; no admin static editor; no English-source editing; indefinite Trash; generic restore-all on unblock; translated free-text correspondence; retrying old missing listing translations; category archival forcing immediate migration of untouched listings.

## Derived consistency requirements

Server authorization/public field serialization; public visibility conjunction; old approved profile retained while changes pend; stale-request rejection; atomic nickname replacement; translation/source version identity; archived-category activity checked at save; private stream separation; deletion-request suppression not resetting listing states; erasure deleting assets/references and not only UI records; read flags not implying workflow decisions.

These explain how accepted rules must coexist. Exact transactions, schemas, endpoint contracts, and tools are still pending, not retroactively accepted choices.

## Remaining dependencies

Synchronous translation timeout/disconnect behavior; account-language capture; Unicode nickname rules; initial reservation timing; free-text city/language normalization; manual introduction-translation policy; exact pricing/currencies; action permissions during deletion wait; role bootstrap/auth lifetimes/spam controls; asset/provider/backup erasure; open-record retention; safe accessible palettes; final legal details; actual local audit and architecture.

No unresolved detail was disguised as an approved implementation. See `context/open-questions.md` for the register and `context/architecture-status.md` for unselected stack/services.

## Validation performed on the package

Checks completed: all 28 Markdown files decode as UTF-8, have a top-level heading and final newline, contain balanced code fences, and have no trailing whitespace. Referenced project Markdown paths resolve. Thirteen accepted copy strings were checked verbatim, all 15 language rows are present, and the 11 category names/order match the chosen list. The Claude import points to AGENTS.md. No environment-secret or application configuration files were added. Core visibility, delivery, translation, and retention rules were reviewed against the current decisions.

The downloadable ZIP is also checked for readable entries and exact equivalence to the 28 source files before delivery. These are document checks, not proof of runtime behavior or a conflict-free Kali installation.

No application build, database migration, unit/integration/security test, browser QA, installed-agent instruction-loading test, port scan of Kali, or deployment has run as part of producing these documents. The future acceptance checklist is not a passed test suite.
