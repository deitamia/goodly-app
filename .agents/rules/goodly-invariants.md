---
description: Core product invariants, public vs private identity boundaries, translation rules, and data visibility for Goodly.
globs: ["**/*"]
always_on: true
---

# Goodly Product Invariants & Business Rules

## 1. Core Mission & Scope
- **Mission**: Free external-link catalog connecting customers with products and services created/provided by parents and caregivers caring for children with disabilities.
- **No Commerce Backend**: No buyer accounts, internal checkout, cart, payments, orders, service booking, commissions, seller fees, rating/reviews, or product detail pages.
- **External Redirects**: Main action buttons (**Buy** for products, **View service** for services) open the external seller HTTPS URL in a new tab.

## 2. Public Identity vs Private Data
- **Public Identity**:
  - Unique public nickname (3–25 characters; letters from all languages, digits, spaces, hyphens, underscores; case-insensitive uniqueness; display casing preserved).
  - Stable generated seller ID (used in `/seller/{generated-id}`).
  - Public profile photo, country flag, "Seller since" month/year of first approval, active listing count, optional intro, optional social/personal links.
- **Private Data (Never leak in public payloads)**:
  - Real first name (private to seller and admin).
  - Seller email address.
  - Eligibility declaration details.
  - Private reports, seller messages, appeals, and pending unapproved profile values.

## 3. Seller Lifecycle & Field Approvals
- **Initial Application**: Email confirmation → Profile completion & eligibility declaration → Administrator review. Initial approval is mandatory before any listings can be added.
- **Initial Rejection**: Admin provides reason; sends email; account is erased with no internal rejection archive.
- **Independent Field Changes**: Every post-approval change (nickname, first name, country, photo, intro, links) requires separate admin approval.
  - The current approved value remains active and public until that specific field request is approved.
  - A pending nickname request reserves the nickname; replacing or canceling the request releases the reservation atomically.
  - Approval/rejection triggers an automatic platform message + email.

## 4. Listing Management & Moderation
- **No Prepublication Approval**: Approved sellers create and edit listings immediately without admin pre-approval.
- **Listing States**: `Active`, `Hidden`, `Blocked`.
- **Deletion**: Deleted listings disappear from the seller list immediately and enter admin `Trash` for 30 days before permanent erasure. Listings in Trash cannot be restored or unblocked.
- **Derived Public Visibility Invariant**:
  ```text
  approved active seller AND no pending account-deletion suppression AND listing Active AND listing not deleted
  ```
- **Seller Blocking vs Listing Blocking**:
  - Admin blocking a seller hides their public profile and all listings, but preserves own listing statuses, allows login, and enables sending a text appeal.
  - Admin blocking a listing sends a dashboard notification with listing title (no email) and remembers prior Active/Hidden status for unblocking.

## 5. Pricing & Availability Rules
- **Products**: Mandatory fixed price + currency. Ship from = approved seller country. Ship to = specific country list OR Worldwide.
- **Services**: Fixed price + currency OR **Price on request**. Type = Online (country availability/Worldwide + online language) OR Physical (country + city).
- **Mutually Exclusive Filters**: On `/services`, selecting `City` clears `Online language`; selecting `Online language` clears `City`.

## 6. Translations & Fallback Rules
- **15 Supported Languages**: English (source), German, Spanish, Portuguese, French, Swedish, Norwegian Bokmål, Danish, Dutch, Italian, Bulgarian, Polish, Romanian, Slovak, Czech.
- **Synchronous Listing Translations**: Single immediate translation attempt upon create/edit of title/description.
  - **No Background Translation Queue**.
  - **No Listing Retry Translations Button**.
  - Available translations are published immediately; failed/missing languages fall back to the **current original text**.
- **Translation Labeling**:
  - Localized **Auto-translated** badge appears ONLY on displayed automatic translations.
  - Original text, current original fallback, and verified static translations DO NOT display an auto-translated badge.
- **Static Content Editor**: Admin can edit English source (regenerating targets) or verify target translations. Verification is specific to key, language, and source version.

## 7. Communication Streams & Inboxes
- **Distinct Streams**:
  1. *System Dashboard Notifications*: Moderation decisions, profile approvals/rejections (30-day retention from creation).
  2. *Seller Messages*: Direct correspondence, appeals, deletion requests (30-day retention after Closed).
  3. *Visitor Reports*: Administrator-only, anonymous reporting with email (30-day retention after Closed).
  4. *Contact Inquiries*: Public `/contact` form (Email, Subject, Message), separate admin inbox, external email app reply via `mailto:` (30-day retention after Closed).
