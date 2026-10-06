# Notifications and delivery channels

Version: 0.3 · 2026-10-03.

Automatic messages/email use the seller account's saved language, English fallback. Free-text correspondence and custom admin reasons remain original; system templates around them are translated. Read marking is separate from the underlying action/state.

| Event | Seller platform | Seller email | Admin visibility |
| --- | --- | --- | --- |
| Initial application submitted | Pending state and accepted thank-you text | No submission email requirement accepted | Pending seller in panel |
| Initial application approved | Active account/status; exact extra message template not decided | Yes, decision | Admin action |
| Initial application rejected | Account deleted; no persistent inbox required | Yes, reason | Admin action; no rejection archive |
| Profile field approved | Automatic message | Yes | Individual request decision |
| Profile field rejected | Automatic reason or admin custom reason | Yes, same decision/reason | Individual request decision |
| Listing created/edited | Generating translations… operation feedback | No | No routine create/edit alert or approval |
| Listing blocked | Automatic Dashboard message with title | No | Listing moderation action |
| Listing unblocked | Automatic Dashboard message with title | No | Listing moderation action |
| Seller blocked | Active reason visible on login; precise extra notification template pending | Yes, admin reason | Seller moderation action |
| Seller unblocked | Automatic message | Yes | Seller moderation action |
| Admin reply to seller Messages | Platform reply | No | Messages conversation |
| New visitor report | No report disclosure to seller | No | Reports/panel only |
| New seller message or appeal | Own conversation visible | No normal-correspondence email | Messages/panel only |
| New Contact inquiry | No seller notification | No seller notification | Contact inquiries/panel only; no admin email alert |
| Admin Reply by email on Contact | Not applicable | External email app action, not Goodly sending | Manual Closed; no external reply stored by Goodly |
| Account deletion requested/canceled | Request state and conversation; wording pending | No automatic request/cancel email requirement accepted | Messages/manual handling |
| Final account deletion | Account removed | Yes, automatic confirmation | Explicit admin processing |
| Email confirmation/resend | Authentication status | Verification link | Security flow; no routine admin alert specified |
| Password reset | Recovery flow | One-time expiring reset link | Security flow; no routine admin alert specified |

## Distinct streams

- System Dashboard notifications: automatic decisions/moderation, 30 days from creation.
- Seller Messages: seller correspondence/appeals/deletion requests plus admin replies, 30 days after Closed.
- Reports: visitor reports about sellers, administrator-only, 30 days after Closed.
- Contact inquiries: general public contact form, administrator-only, 30 days after Closed.

Do not populate admin Messages with incoming reports/contact/system messages. Admin panel alerts can link to these records but reading an alert is not processing the underlying record.

## Pending delivery details

Exact subjects/bodies, account-language capture/update, duplicate-send protection, email failure policy, confirmation/reset lifetimes, and local email testing provider remain open. Do not add emails to events marked No for convenience. No real emails should be sent while merely testing an unconfigured local environment.
