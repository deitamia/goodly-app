---
name: goodly-workflow
description: Guides execution through Goodly's 13 implementation units (00 to 12), managing agent handoffs, verifying evidence, and updating progress-tracker.md.
---

# Goodly Implementation Workflow & Unit Discipline

This skill governs the development discipline across the 13 defined implementation units for Goodly, ensuring that work progresses systematically with verifiable evidence.

## The 13 Implementation Units

| Unit | Focus | Key Deliverables & Exit Criteria |
| :--- | :--- | :--- |
| **00 — Audit & Choices** | Workstation constraints & tech stack | Review local machine audit; select runtime, framework, database, and auth provider. |
| **01 — Local Foundation** | Dedicated environment & safety guards | Establish project directory, port allocations, DB target guards, dev/test isolation. |
| **02 — Domain & Security Design** | Data schema & authorization models | Schema migrations for sellers, listings, categories, translations, retention. |
| **03 — Public Interface** | Public catalog UX & responsive browsing | Homepage, `/products`, `/services`, `/search`, `/seller/:id`, `/become-a-seller`, `/contact`. |
| **04 — Localization & Search** | 15-language UI & search engine | Static translation engine, 15 language keys, cross-language search indexing. |
| **05 — Auth & Seller Application** | Signup, email verification, initial review | Registration, email confirmation, profile application, admin approval/rejection. |
| **06 — Seller Listing Management** | Product/service listing operations | Create/edit listings, 10MB image processing, synchronous translations, hide/show/delete. |
| **07 — Profile Change Requests** | Independent field updates | Independent approval workflow, atomic nickname reservations, intro translations. |
| **08 — Moderation & Communications** | Moderation & 4 inbox streams | Admin panel: Sellers, Listings, Reports, Messages, Contact inquiries, text appeals. |
| **09 — Admin Content & Theme** | Categories, static translations, theme | Category management/archival, static text editor/verification, Appearance controls. |
| **10 — Deletion & Retention** | 30-day clocks & account erasure | Timed cleanup scheduler, 8 retention clocks, Trash lifecycle, cascade deletion. |
| **11 — MVP Integration & QA** | End-to-end integration & QA | Full local test suite pass, privacy boundary checks, browser QA across all 15 languages. |
| **12 — Hosting & Launch Prep** | Production readiness & deployment | VPS/Hostinger config, production domain/TLS, backup scripts, production secrets. |

---

## Standard Handoff Protocol

When completing work or pausing a session, update [context/progress-tracker.md](file:///c:/Users/mydei/OneDrive/Documents/Goodly-project-pack-v0.3/goodly-project-pack/context/progress-tracker.md) using this format:

```markdown
### Handoff: [Date] — [Agent/Tool]
- **Unit Completed**: [Unit Number and Title]
- **Files Modified**: [List of exact files modified]
- **Verification Run**: [Exact commands executed and observed outcomes; do not claim unverified passes]
- **Next Concrete Task**: [Immediate next implementation step]
- **Open Questions / Decisions Needed**: [Any blocker requiring user input]
```

---

## Verification Standards

- **Never Fabricate Test Results**: Distinguish explicitly between `Implemented`, `Verified`, `Pending`, and `Blocked`.
- **Target Verification**: Ensure automated test commands always target the dedicated test database (`goodly_test`), never the development or production database.
- **Privacy Checks**: Test that public APIs strictly serialize only public fields and never leak `real_first_name`, `email`, or moderation notes.
