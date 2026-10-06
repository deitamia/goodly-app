# Languages and translations

Version: 0.3 · 2026-10-03.

## Interface languages

English is the main/source language. Initial choice follows browser language; unsupported preferences fall back to English. Remembered manual choice takes precedence. Selector is a top-right dropdown with language name in its own language and a flag.

| Language | Native label | Flag mapping |
| --- | --- | --- |
| English | English | United Kingdom — explicitly chosen |
| German | Deutsch | Germany |
| Spanish | Español | Spain |
| Portuguese | Português | Portugal — explicitly chosen |
| French | Français | France |
| Swedish | Svenska | Sweden |
| Norwegian Bokmål | Norsk bokmål | Norway |
| Danish | Dansk | Denmark |
| Dutch | Nederlands | Netherlands |
| Italian | Italiano | Italy |
| Bulgarian | Български | Bulgaria |
| Polish | Polski | Poland |
| Romanian | Română | Romania |
| Slovak | Slovenčina | Slovakia |
| Czech | Čeština | Czechia |

Except the explicitly chosen UK/Portugal flags, mappings preserve the natural working mapping from previous planning; they do not define regional variants. Locale codes, browser regional matching, date/number formatting, and persistence mechanism remain unselected. Do not present flags as proof of the visitor's nationality.

## Content policies

| Content | Translation behavior |
| --- | --- |
| Static interface/copy/category names/system templates | English source; automatic translation; admin editing and verification |
| Listing original title/description | Automatic source-language detection; automatic translations only |
| Optional seller introduction | Automatic source-language detection; once on application/change submission; publish available translations only after profile approval |
| Nicknames/IDs/links | Preserve; do not translate identity |
| Prices/currency | Preserve amount/currency; formatting choice pending; no conversion |
| Free-text seller/admin Messages | Original only |
| Custom moderation/rejection reasons | Original reason inside translated template |
| Reporter description | Original only |
| Contact Subject/Message | Original only |

Both sellers and administrators rely on automatic detection for user-authored text; no manual original-language selector in the agreed flow. Mixed/uncertain/unsupported detection handling needs technical design.

## Listing translation operation

At create and each edit of original title/description, make one immediate translation attempt. Show **Generating translations…** and allow the seller to wait. No background translation queue, Retry translations button, hidden automatic recovery campaign, or manual seller/admin listing-translation editor.

After the attempt, save/publish available translations. For each missing language/field, display the current original, without a translation label on that original. Unchanged source text keeps its existing translations; changing price/image alone is not a reason to retry a failed text translation.

An accepted edit of source text is a new source version and permits its own new attempt. Translations must be associated with that version. Older successful translations cannot be used as translations of the new source. Original title ≤80 and description ≤300; translations can exceed these limits and must wrap/display fully.

Generating translations is an operation status, not a fourth persistent listing status or a moderation state. Hidden stays Hidden through edit; Blocked cannot be edited. Account/listing visibility conditions still apply after a successful translation call.

Provider, batching, bounded concurrency, timeout budget, idempotency, save ordering, cancellation/browser disconnect, and failures before a response are open technical work. One attempt does not mean literally unlimited waiting or one required HTTP request; do not select behavior silently. No queue should be introduced to solve these issues without changing the accepted decision.

## Introduction approval and translation

Generate once when submitting an introduction for review. Admin examines the original. During review, keep the previous approved original/translations public. Approval atomically publishes the new intro with its successful translations. Missing target language uses that approved intro's current original. Rejection/cancellation/replacement must not leak proposed intro publicly. No manual intro translation editor has been accepted; clarify policy before adding one.

## Static text editor

Included in MVP: **Translations** for static text and **Translations → Categories** for category names. Zones retain Homepage, Become a seller, Footer pages, System messages, plus Categories; exact grouping for additional UI/forms is a pending organization detail, not exclusion of their localization.

Admin can edit English source. Regenerate affected target translations and invalidate prior verification. If generation fails, show **current English original**, not stale translated text, and no Auto-translated label. Admin may later enter a correct translation manually.

Admin can edit/save a target translation as Verified, or **Mark as verified** without changing it. Verification belongs to a specific text key, language, and source version. Editing another language does not verify all languages. A newly changed English source cannot inherit old verification. **Needs review** includes unverified automatic translations and missing translations.

The editor is not a general CMS/page builder. It does not expose listing source/translation edits. Template placeholders need validation so edits cannot break email links or remove required dynamic content; exact mechanism is technical planning.

## Translation indicator

Public wording: **Auto-translated**, localized according to the current site language. Same visual treatment on listing cards and relevant static blocks/profile introductions. Show for displayed automatic/unverified translated content; remove for verified static translations and originals/fallback originals. Placement/granularity for tiny UI labels, mixed field fallback, and the label's own translation needs UI definition without recursive labels.

## Seller delivery language

Automatic system messages and emails use the seller account's saved language, English fallback. Do not translate admin-entered custom reasons as part of this delivery; translate the template around them. Account-language initialization and updates when changing site language remain to be specified. Browser language is the public initial choice, not sufficient evidence of a saved seller preference.

## Cross-language search

Search original and available current translations; category/country filtering uses structured values independently of translation success. Missing translations can limit keyword discovery in that target language. No seller tags. Exact search fields/index implementation, transliteration/accent matching, city normalization, and language-name normalization remain unselected.
