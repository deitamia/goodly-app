# Seller panel

Version: 0.3 · 2026-10-03 · Accepted behavior.

## Structure

Simple navigation: **Dashboard / My profile / My listings**. No separate seller Messages navigation section in the agreed structure; seller correspondence and system notifications are accessible through Dashboard. Seller Messages conversations and system notifications have separate data lifecycles.

Dashboard shows account status, number of active eligible listings, recent messages, and View public profile when public eligibility permits it. Pending/blocked/deletion-requested profiles have no usable public-profile action. A blocked seller can log in, read the active blocking reason, and send a text appeal. A message expiring after 30 days must not erase the active reason/status.

## Registration and initial application

1. Email/password signup; Confirm password; mandatory Terms acceptance; no public admin role.
2. Confirm email; Resend confirmation email is available.
3. Complete required private first name, public nickname, country, profile photo, eligibility checkbox; optional introduction/links.
4. Submit for review and display the accepted pending copy.
5. Await administrator approval before adding any product/service.

Initial approval activates the seller and records first-approval timestamp. Initial rejection emails the administrator's reason and removes the account without an internal rejected-account archive. No same-email registration ban is agreed. Expiring abandoned accounts are specified in `lifecycle-and-retention.md`.

## My profile and independent field changes

Show current approved values alongside pending requests. Changes to each of nickname, private first name, country, profile photo, optional introduction, and social/personal links require independent admin approval. Existing approved values remain until that field is approved. The active seller does not become a Pending account because a field has a pending change.

The nickname must meet `product-decisions.md`. Pending replacement nicknames are reserved. The seller can **Cancel change**, preserving the current approved value and releasing a pending nickname reservation. A new submission for the same field replaces its previous pending request. Different fields remain independently pending.

Derived consistency requirement: validating/reserving a replacement nickname and releasing its previous reservation must succeed atomically. If the new name cannot be reserved, do not lose the existing pending request. Admin decisions must apply to the current request version, not an obsolete replaced/canceled one. Exact transaction/locking mechanism is architecture work.

On approval, apply the new field and send automatic platform message + email. On rejection, preserve the old field and send platform message + email with the admin's automatic template or custom reason. Intro translations are generated once on submission; admin reviews original text, and approved original plus available translations replace the old public intro together. Rejected/canceled intro never publishes. Manual intro-translation editing remains open.

Approved country changes update seller flag and product Ship from. They do not rewrite product Ship to or service availability/city/languages. Current profile photo remains public until its replacement is approved. Optional field removal is also a change to the approved value and must follow approval; grouping multiple social links into request units needs technical definition.

**Request account deletion** is in My profile. It suppresses profile/listings immediately and enters admin Messages for manual handling. **Cancel deletion request** is available until final processing. See the lifecycle document for restoration and erasure rules; the exact allowed editing/actions during this waiting period remain open.

## My listings

One mixed list; **Add product / Add service**. No seller search/filter in MVP. Visible statuses: Active, Hidden, Blocked. Deleted items immediately disappear.

| Own listing state | Seller actions |
| --- | --- |
| Active | Edit, Hide, Delete |
| Hidden | Edit, Show, Delete |
| Blocked | Delete only; no edit or Hide/Show |

This table assumes the seller account is allowed to manage listings. A blocked account cannot use these actions to bypass the account lock. The admin's unblock action restores the prior own Active/Hidden status, subject to seller visibility rules.

Blocked-listing explanation is an automatic Dashboard message containing the title, without an email or an inline moderation message in My listings. No manually entered listing-block reason. The seller sees the Blocked status and may delete the item when account permissions allow.

## Add/edit forms

Use the required fields from `product-decisions.md`. Product always needs amount/currency. Service selects exact price or Price on request, and Online or Physical. Online has country availability/Worldwide and at least one language; additional languages can be free text. Physical has country and city only.

One image, JPG/PNG/WebP, up to 10 MB; automatic optimization. External link must be HTTPS and pass actual URL validation. Do not run an automated live-link checker; broken-link issues use Report seller and manual admin handling.

On create/edit of original title/description, show **Generating translations…** while the synchronous attempt runs. Publish/save with available current translations; missing languages use current original. No approval, retry control, or admin create/edit notification. A price/image-only edit must not automatically regenerate unchanged text translations. Editing Hidden keeps it Hidden; Blocked is not editable.

If the existing category is archived, saving any edit requires an active category. Canceling the edit leaves the old listing/category unchanged. Use the accepted error message from `english-content.md`.

## Messages and appeals

Seller correspondence is text only; admin replies appear in the platform, no email. Free-text correspondence is not automatically translated. Blocked sellers can appeal using a single text field. Reports and public Contact inquiries are never shown to sellers as their own messages. Exact conversation threading/closing/reopening UI remains to be designed without adding a new seller menu section silently.
