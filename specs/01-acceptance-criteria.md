# Acceptance criteria

Version: 0.3 · 2026-10-03 · Future verification checklist; no application tests have run.

These criteria describe meaningful expected behavior. Exact automated tools and fixture setup depend on the selected architecture. Resolve open details before pretending their expected outcome is known.

## Public browsing

- Homepage uses the two exact hero lines, a pale green background without a photo, common search, prominent Products/Services buttons, and exactly the two agreed explanatory accordions below them.
- Search submits to mixed `/search`; newest-added ordering and page-specific filters match the specification. No extra seller directory, listing detail page, buyer accounts, checkout, or booking flow.
- Cards show public approved nickname/photo/flag and no private first name/email. Buy/View service alone opens the listing external link in a new tab; seller identity opens its stable profile.
- Product fixed price required; exact-price services green, request-price services gold with black caption, and visible pricing text near each button. Online/Physical+city and shipping list behaviors are correct.
- 3/2/1 responsive grid, full contained 4:3 images, 12 then +12 results, preserved filter/search state, and full translated text wrapping.
- Ship from follows only approved seller country. Ship to/Available in match the actual destination/availability, including Worldwide. City and Online language clear one another. Mixed search has only its agreed common filters.
- Public seller profile uses first-approval month/year, public active count, approved optional intro/links, one mixed list, bottom Report seller, and Back to results with homepage fallback.
- Mobile navigation keeps Products/Services visible and language selector accessible. Accordions/filters/shipping lists work by keyboard/touch, not hover alone.

## Authentication and application

- Public signup cannot request/escalate administrator privileges. Admin mutations/pages require server-verified role.
- Email confirmation precedes profile submission workflow; resend and expiring one-time reset flows work under the selected policy.
- Required Terms acceptance and profile eligibility declaration are distinct. Required nickname/private first name/country/photo are enforced on server.
- Unapproved applicant cannot create listings by UI or direct request. Initial rejection sends reason and erases the account without an internal rejection archive.
- Nickname rules/uniqueness hold under concurrent submissions after Unicode/reservation details are selected.

## Profile requests

- Each changed profile field is independently approved. Current approved values remain public/private-effective until that field's approval; unrelated fields are not accepted as a side effect.
- Cancel/replacement invalidates the old request; stale admin approval cannot publish it. Pending nickname reservations are released correctly, and a failed new reservation does not lose the previous request.
- Profile approval/rejection creates the intended automatic/custom platform message and email. Private first name never leaks into public card/profile/report payloads.
- Introduction translations publish only with approved source version; rejected/pending introduction never leaks. Country approval updates product origin and seller flag only.

## Listings and moderation

- Approved sellers publish/create/edit without listing approval. Routine create/edit generates no admin alert.
- Hide/show/delete and Blocked restrictions hold server-side. Deleted disappears from seller list; no restore through any unblock action.
- Unblock listing restores prior Active/Hidden; blocked seller still suppresses it. Unblock seller preserves independently Hidden/Blocked/deleted state and first-approval date.
- Blocking one listing sends Dashboard-only template with title; unblocking listing also platform-only. Seller block reason is visible when logged in and delivered by email; seller unblock uses platform+email.
- Archived category cannot be chosen for new/save operations, including a concurrent archive while editing. Old unchanged listings remain searchable/public if otherwise eligible; cancel leaves them unchanged.

## Translations

- Initial browser language, remembered manual choice, and unsupported-language English fallback follow the policy; all 15 languages are represented.
- One synchronous create/text-edit attempt shows Generating translations; partial target failures publish available current translations and current original fallback. No listing retry button/manual edit/background queue.
- Price/image-only edits do not retry unchanged source. Stale translated source versions never display as current translations.
- Auto-translated appears only for displayed automatic translated content; originals/fallback and verified static content lack it. Mixed-field labeling matches the final UI definition.
- Admin English-source edit regenerates affected static/category translations, clears verification, and falls back to current English on failure. Target editing/Mark as verified apply to specific text/language/version; Needs review includes missing targets.
- System email/messages use saved seller language; custom reasons, Reports, Contact, and free-text Messages remain original.

## Reports, Contact, and Messages

- Anonymous visitor can report a seller with mandatory email/text and optional source-listing context. Seller cannot access report/reporter data; no automatic sanctions.
- Contact route is footer-accessible and requires Email/Subject/Message. Inquiries enter Contact inquiries, not seller Messages. Reply by email opens email app; it neither proves sending nor auto-closes.
- Seller/admin correspondence and text appeals are platform-only and accessible only to authorized participants/admin. System notifications remain separate from incoming Messages.

## Deletion and retention

- Account deletion request immediately suppresses public profile/listings. Cancel restores eligibility using current block/own-listing rules; it cannot resurrect deleted items or bypass new sanctions.
- Final deletion removes all seller data/assets/listings including Trash, conversations, pending requests/history/reservations except explicitly justified narrow exceptions, and sends confirmation under the selected delivery-failure policy.
- Each accepted 30-day clock starts at the correct event. Current approved values/active blocking reason survive request-history/notification expiry. Submitted pending applications are not deleted by the unsubmitted-account timer.
- Cleanup removes data/assets rather than merely hiding them; verify missed-run catch-up/idempotency and message removal from both views once the scheduler is selected.

## Appearance and local safety

- Theme server accepts only approved combinations; visible contrast is checked with actual colors. Public settings cannot change admin styling, arbitrary code, prices/statuses/schema, or other business data.
- Startup conflicts fail clearly. All services/targets belong to Goodly; migrations/tests reject absent/mismatched/remote/other-project targets and test-on-dev. No global Docker cleanup or stopping unrelated processes.

## Documentation readiness versus application readiness

This package can be checked for decision consistency, exact accepted copy, valid relative links, clean formatting, and absence of fabricated stack/ports/commands. Application criteria above remain **not run** until source/services exist.
