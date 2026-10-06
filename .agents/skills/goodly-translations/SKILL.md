---
name: goodly-translations
description: Manages Goodly's 15-language static localization dictionaries, synchronous listing translation handling, source versioning, and verification workflows.
---

# Goodly 15-Language Translation & Localization Management

Goodly provides complete internationalization across 15 interface languages with English as the primary canonical source.

## Supported Languages & Flag Codes

| Code | Language | Native Label | Flag Territory |
| :--- | :--- | :--- | :--- |
| `en` | English | English | United Kingdom (GB) |
| `de` | German | Deutsch | Germany (DE) |
| `es` | Spanish | Español | Spain (ES) |
| `pt` | Portuguese | Português | Portugal (PT) |
| `fr` | French | Français | France (FR) |
| `sv` | Swedish | Svenska | Sweden (SE) |
| `no` | Norwegian Bokmål | Norsk bokmål | Norway (NO) |
| `da` | Danish | Dansk | Denmark (DK) |
| `nl` | Dutch | Nederlands | Netherlands (NL) |
| `it` | Italian | Italiano | Italy (IT) |
| `bg` | Bulgarian | Български | Bulgaria (BG) |
| `pl` | Polish | Polski | Poland (PL) |
| `ro` | Romanian | Română | Romania (RO) |
| `sk` | Slovak | Slovenčina | Slovakia (SK) |
| `cs` | Czech | Čeština | Czechia (CZ) |

---

## Translation Policies by Content Type

1. **Static Interface Copy, Categories & System Templates**:
   - Canonical English source managed in [context/english-content.md](file:///c:/Users/mydei/OneDrive/Documents/Goodly-project-pack-v0.3/goodly-project-pack/context/english-content.md).
   - Admin can edit English source (which automatically regenerates target language translations and resets verification).
   - Admin can edit target translations and click **Mark as verified**.
   - Verified status is tied to specific `(key, language, source_version)`.
2. **Listing Titles & Descriptions**:
   - **Single Synchronous Attempt**: Generated immediately upon submission while displaying `Generating translations…`.
   - **No Background Queue**: If a translation API call times out or fails, do not queue background jobs.
   - **Current Original Fallback**: Missing language translations immediately fall back to displaying the current original source text.
   - **No Listing Retry Button**: No manual retry button in the seller or admin interface.
3. **Seller Introductions**:
   - Generated once upon profile application/change submission.
   - Published atomically with the introduction only upon admin profile approval.
4. **Original-Only Content (Never auto-translated)**:
   - Seller Nicknames & stable IDs.
   - Visitor Report text.
   - Seller-Admin direct Messages & text appeals.
   - Contact form Subject and Message.
   - Admin custom rejection/moderation reasons (inserted into translated templates).

---

## Translation Badging Rules

- **Auto-translated Badge**: Display the localized **Auto-translated** badge ONLY when presenting an automatic, unverified machine translation.
- **No Badge**: Do NOT display an auto-translated badge for:
  - Text displayed in its original source language.
  - Fallback text showing the original source because translation was missing.
  - Static system copy marked as **Verified** by the administrator.
