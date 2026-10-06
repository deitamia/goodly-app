# Product decisions and scope index

Version: 0.3 · 2026-10-03 · Accepted rules unless explicitly marked open.

This file indexes the detailed canonical topic documents. Use those documents for the full rules; do not resurrect superseded decisions from the old 01–07 files.

## Profile identity and eligibility

Required seller application fields after email verification: private real first name (no surname requirement), unique public nickname, country, one profile photo, and the eligibility declaration. Optional: introduction and social/personal links. Eligibility covers **parents and caregivers** caring for a child with disabilities, offering work they create/provide themselves. The latter condition appears in explanatory copy, without a separate checkbox.

The public nickname replaces the real name in every public seller reference: cards, results, public profile, and Report seller context. Seller email is also private. Admin interfaces may show both nickname and real first name in the private profile. Reports identify a seller by stable seller ID and nickname.

| Nickname rule | Decision |
| --- | --- |
| Length | 3–25 characters |
| Allowed characters | Letters from all languages, digits, spaces, hyphens, underscores |
| Disallowed | Emojis and other special characters |
| Uniqueness | Case insensitive; preserve chosen display casing |
| Pending nickname change | Reserve requested nickname until approval/rejection/cancellation/replacement |
| Public value while pending | Keep the current approved nickname |
| Seller URL | Stable generated seller ID, unaffected by nickname changes |

Unicode normalization, how character length is counted, trimming, confusable names, and the precise reservation point for an initial application remain technical questions. Enforce uniqueness safely under concurrency; do not solve it with a browser-only availability check.

Initial seller approval is required before listing creation. Every later profile-field change needs independent admin approval, including private first name, nickname, country, photo, introduction, and social/personal links. Details: `seller-panel.md` and `lifecycle-and-retention.md`.

## Listing fields

| Field | Product | Service |
| --- | --- | --- |
| Image | Exactly one | Exactly one |
| Original title | Required, up to 80 characters | Required, up to 80 characters |
| Original short description | Required, up to 300 characters | Required, up to 300 characters |
| Category | Required active shared category for create/save | Same |
| Price | Fixed amount + seller-selected currency | Fixed amount + currency OR Price on request |
| External link | Required valid HTTPS URL | Same |
| Delivery/availability | Ship to countries OR Worldwide shipping | Online: countries OR Worldwide; Physical: country + city |
| Origin/type | Ship from current approved seller country | Required Online or Physical |
| Languages | No service-language field | Online: at least one predefined or free-text language |

Allowed image formats: JPG/JPEG, PNG, WebP; maximum **10 MB per uploaded image**. Automatically reduce image size for loading. Exact byte interpretation, dimensions, optimization format, processing limits, and metadata handling remain technical choices.

Original content limits do not apply to longer generated translations. Display translations in full with wrapping. Optional seller introduction has no product character limit; infrastructure still needs deliberate request/resource limits.

No stock quantity/options/variants, price units such as per hour/session/project, long description, internal detail page, or return/exchange fields. No automatic currency conversion. Decimal validation, supported currencies, and whether a zero price is allowed remain open.

## Publication and state

An approved seller creates/edits listings without prepublication admin approval. After the immediate translation attempt, publish available translations with original fallback. No admin notification for routine create/edit. Listing statuses are **Active / Hidden / Blocked**. Deleted listings disappear from the seller list and enter admin Trash; deletion is separate from the three visible statuses.

Derived public visibility invariant:

`approved active seller AND no pending account-deletion suppression AND listing Active AND listing not deleted`

Pending profile changes do not replace the approved profile or turn the whole seller account Pending. Seller blocking is independent of listing status; unblocking one cannot bypass the other. Details: `lifecycle-and-retention.md`.

## Navigation, discovery, and UI

See `public-site-ux.md` for routes, filters, external buttons, public profile, Contact, and reports; `design-system.md` for colors, cards, hero, mobile navigation, and Appearance controls. Newest-added is the only public ordering. No seller tags.

## Categories, translations, communications, retention

- `categories.md`: 11 initial shared categories and mandatory active category on saving an edit.
- `translations.md`: 15 languages; automatic language detection; synchronous one-attempt listing translations; static verification editor.
- `notification-matrix.md`: profile decisions/seller blocking email rules versus listing moderation/platform-only messages.
- `lifecycle-and-retention.md`: deletion and accepted 30-day clocks.
- `english-content.md`: exact accepted copy. Other wording is not silently considered approved.

## Technical boundary

Architecture and ports are deliberately unselected. See `architecture-status.md` and `open-questions.md`. No references to another project's stack, production account, port, or database are approval to reuse them for Goodly.
