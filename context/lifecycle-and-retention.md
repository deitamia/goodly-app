# Account, listing, and data lifecycles

Version: 0.3 · 2026-10-03 · Accepted product policy; technical erasure design and final legal text pending.

## Independent state dimensions

Do not collapse account approval, account blocking, deletion requests, profile-field requests, listing state, or translation operations into one status column without representing their independent meanings.

| Dimension | Behavior |
| --- | --- |
| Initial application | Unconfirmed → confirmed/incomplete → submitted/pending → approved OR rejected/deleted |
| Approved seller | Active or Blocked; block preserves login/appeals |
| Account deletion request | Separate suppression of profile/listings while manual processing is pending |
| Profile field change | Independent pending proposed value; approved current value remains effective |
| Listing own state | Active / Hidden / Blocked; Deleted is separate and absent from seller list |
| Translation operation | Generating translations; not a persistent moderation/listing state |

These names are conceptual rules, not an approved database schema. Public visibility requires an approved active seller, no deletion-request suppression, an Active listing, and no deletion. For the public profile itself, apply account eligibility/suppression. Enforce these conditions in server responses/search/counts, not merely in visible UI.

## Approval/rejection

Initial approval records first-approval timestamp, enables publishing, and sends decision email. Seller since uses its month/year forever unless the account itself is erased. Initial rejection requires admin reason, decision email, and full deletion without a rejected-account archive. A same-email re-registration ban is not agreed.

Postapproval profile changes are decided separately. Approval replaces that current field; rejection preserves it. Both send platform message + email. Replacing/canceling pending requests releases superseded nickname reservations. Stale decisions must not publish canceled/replaced values. Current approved values outlive deleted request-history records.

## Listing hide/delete/block

Hide/show takes effect without approval for authorized sellers. Edit of Hidden stays Hidden. Admin Block stores the previous Active/Hidden state, removes public visibility, locks editing/show/hide, and sends automatic Dashboard message. Admin Unblock restores that previous own state and sends Dashboard message, no email.

Deletion removes seller visibility/list entry and sends the listing to admin Trash for 30 days. No restore or admin Delete forever UI. Cleanup permanently deletes after the retention deadline. A deletion is never reversed through seller/listing unblocking.

## Seller block/unblock

Seller block makes profile/all listings nonpublic but does not rewrite their own statuses. Account stays available for login, active reason, and text appeal. Admin enters reason and seller receives email. Unblock sends automatic platform message + email. Only otherwise Active/nondeleted listings become public again, and only if no deletion request continues to suppress them. Hidden/individually Blocked/deleted listings remain unavailable. Seller since does not change.

## Account deletion request

Approved seller requests deletion in My profile. Request reaches admin Messages; immediately suppress public profile/all listings. Seller can still log in and communicate during manual processing. Cancel is allowed until final deletion; restore visibility under the then-current block/listing rules, preserving prior Hidden/Blocked states. Do not reset all items to Active or bypass a moderation action taken while waiting.

Final deletion removes account/profile data, photos, every listing including Trash, Messages and replies, pending field requests, profile-change history, and nickname reservations. Send an automatic deletion-confirmation email. Do not require keeping an internal account archive merely to send the message. Handling notification-delivery failure and deleting assets/backups/provider data must be designed explicitly.

Exceptions require a concrete legitimate/legal basis such as an applicable obligation or claims-related need. Unresolved reports are not automatically a justification to retain everything. Define narrow retained data, access, basis, and duration when an actual exception applies. This is not a completed legal policy or a claim that third-party emails/backups instantly disappear.

## Accepted retention clocks

| Data | Clock starts | Normal removal rule |
| --- | --- | --- |
| Seller-deleted listing in Trash | Listing deletion time | Permanent removal after 30 days; earlier on final account deletion |
| Contact inquiry Email/Subject/Message | Manually marked Closed | Remove after 30 days |
| Closed report and reporter data | Report Closed | Remove after 30 days, except a specifically justified exception |
| Messages conversation and replies | Conversation Closed | Remove after 30 days from admin and seller views/data |
| System Dashboard notifications | Creation | Remove after 30 days |
| Unconfirmed-email account | Signup | Delete after 30 days; can register again |
| Confirmed account without submitted application | Email confirmation | Delete after 30 days, including unfinished profile |
| Completed profile-change request history | Approval/rejection | Remove after 30 days; current approved values persist |

Submitted pending applications are not subject to the confirmed-but-unsubmitted expiry. Pending profile requests wait for decision/cancel rather than expiring under the completed-history clock. Active blocking reason/status, current approved fields, and active deletion-request state must not expire merely because associated notifications/messages were purged.

## Erasure implementation work still required

Decide day/time semantics, UTC persistence and display zones, scheduler cadence, outage catch-up, idempotency, foreign-key and storage deletion order, account/email delivery sequencing, request cancellation races, notification/report source snapshots, legal-exception handling, open/inactive item retention, audit/security logs, backups, provider retention, exports/access requests, and proof of deletion. No scheduler exists yet.

The rule against a background translation queue does not prohibit timed retention cleanup. Choose an appropriate cleanup mechanism after hosting/database architecture is selected. Do not implement retention by relying only on hiding expired rows; actual deletion and asset cleanup must be specified and verified.
