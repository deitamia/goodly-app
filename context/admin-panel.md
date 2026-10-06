# Administrator panel

Version: 0.3 · 2026-10-03 · Accepted scope.

## Navigation and access

**Dashboard / Sellers / Listings / Reports / Messages / Contact inquiries / Categories / Translations / Appearance / Trash**.

Initially Pavel is the only administrator. Use the common login with server-enforced admin authorization. Every admin page and mutation must enforce the role; hiding menu items is insufficient. Initial role provisioning is a technical choice, not public signup input.

## Dashboard

Summary of pending sellers, pending profile-field requests, new reports, blocked listings, and recent notifications; read/seen marking. New seller Messages and Contact inquiries must be discoverable in their sections; exact count/card arrangement is a UI detail. Administrative notifications stay in the panel, without notification emails to Pavel. Marking a notification read does not approve a request or close a report.

## Sellers

Filters/tabs: **Pending / Active / Blocked**. Pending means an initial submitted application, not an active seller awaiting one changed field.

Initial application shows private first name, nickname, country, photo, email, eligibility declaration, optional intro/links. **Approve** activates the account and first-approval date. **Reject** requires a reason, sends an email, and deletes the application/account without retaining an internal rejection archive.

Active seller actions: View public profile, View listings, Block seller. Block requires a reason; hides profile/listings, keeps login/appeal access, and emails the seller. Blocked seller actions: View profile data, View listings, View appeals/messages, Unblock seller. Unblock sends automatic platform message + email; first-approval date does not change.

Within the seller record, show independent pending profile requests: stable seller ID, nickname, field, current approved value, proposed value, submitted time. For photos show both images. Private first name stays in private admin context. Each request has **Approve / Reject** separately. Approve uses automatic message; Reject allows automatic reason or custom reason. Both deliver platform message + email. Do not decide a stale replaced request; nickname uniqueness/reservation must still be valid.

Account deletion requests are received through Messages and handled manually. Final deletion must include all seller-linked content identified in `lifecycle-and-retention.md`; do not leave Trash or profile-request history behind merely because they live in admin sections.

## Listings

One list with All / Active / Hidden / Blocked filters and search by title, seller, category. Actions: View external link, View seller, Block listing, Unblock listing. No listing prepublication approval queue; no routine create/edit notifications.

Block listing needs no custom reason. It sends the standardized Dashboard message with the listing title and no email. Store its prior Active/Hidden state for unblock. Unblock restores that state and sends an automatic Dashboard message, no email. Seller block/deletion suppression still determines public eligibility. Deleted listings belong only in Trash and cannot be unblocked/restored.

Broken external links use manual checking, visitor Reports, and Messages to seller. No automated link-monitoring service in MVP.

## Reports

Statuses: **New / In review / Closed**. Show seller ID/nickname, admin profile link, reporter email, text, created date, and source page/listing when applicable. Actions: Mark in review, Close report, Block seller, and Block listing if there is a source listing. Moderation actions use their own notification rules.

Only administrators can view reports. Sellers have no access to report text or reporter details. A report is about the seller; a card source supplies context. No automatic sanctions. Closing a report starts its 30-day retention clock.

## Messages

Seller-initiated correspondence, appeals, and account deletion requests, with replies from admin. No public contact submissions, Reports, or system-dashboard notifications in this section. Statuses: **New / Read / Closed**. Admin replies arrive in seller Dashboard/platform only, without email. Preserve original language. A closed conversation and replies are deleted after 30 days from both sides; active blocking/deletion state must not depend solely on the message record.

Exact thread/reopening behavior and processing UI for deletion remain open. Do not assume Closed means an account was deleted; explicit final-deletion action is separate.

## Contact inquiries

Statuses: **New / Read / Closed**. Show visitor Email, Subject, Message, and time. This is the destination of `/contact`, separately from seller Messages. Preserve original language.

**Reply by email** opens the administrator's email application with recipient and subject. Goodly itself does not send or store the external reply. Properly encode the email action. Clicking it proves neither delivery nor sending. **Closed is manual** and starts the 30-day deletion clock. No admin email alert for a new inquiry.

## Categories

Add, rename, reorder, hide/archive shared categories. Initial names and archive consequences are in `categories.md`. Stable IDs keep existing listing references through renames. Regenerate name translations; review/edit them in Translations → Categories. Do not delete categories with listings or silently move listings. Batch Move listings is a possible later feature, outside current MVP.

## Translations

Static texts only, including category names and system/email templates. Language/zone filters and **Needs review**. English source left, selected-language translation right. Admin can edit the English original, edit a translation, or **Mark as verified** without an edit. Verification is specific to text, language, and source version. Editing English regenerates affected translations and resets verification; failures use current English fallback.

No manual listing-translation editor, retry action, general page builder, or seller-content moderation approval is implied. Optional intro editing policy remains unresolved. Detailed rules: `translations.md`.

## Appearance

Public-site theme settings only: main button color, price-on-request button color, public background, card border. Main button controls include Buy and fixed-price View service. Use approved palettes and server validation; check readable contrast before save. Main text stays black; admin interface keeps its own fixed style.

Actions: **Preview / Save changes / Reset to defaults**. Default direction: green main buttons, warm yellow/gold inquiry buttons, light background, light gray card borders. Exact palettes are unselected. No raw CSS, scripts, HTML, database/status/business controls, or layout builder. See `design-system.md`.

## Trash

Only seller-deleted listings: title, seller, deletion time, Product/Service type and data needed for inspection. Admin archive/checking only; **no Restore or Delete forever action**. Automatic permanent removal after 30 days from deletion, or earlier during final account deletion. The cleanup scheduler is not the prohibited translation queue; its implementation remains open.
