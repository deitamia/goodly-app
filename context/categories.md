# Shared categories

Version: 0.3 · 2026-10-03 · Accepted initial English names/order.

1. Art & Crafts
2. Clothing
3. Accessories
4. Souvenirs
5. Home goods
6. Food & Drink
7. Education & Learning
8. Digital & Technology
9. Health & Personal Care
10. Professional Services
11. Other

One shared category system for Products and Services. Do not split into parallel taxonomies or add subcategories/tags without a decision. Each listing chooses a category. Admin can add names, rename, reorder, and archive. Exact stable IDs/slugs will be assigned during implementation, not fabricated as existing database records.

## Rename and translation

Keep category ID stable. Existing listings remain attached after renaming; English name changes trigger affected name translations and reset their verification. Admin reviews/edits category name translations in **Translations → Categories**. Do not change category ID because display language changes.

## Archive behavior

- Archived category is unavailable for new listings and public filter choices.
- Existing otherwise public listings stay public, searchable, and attached to the archived category; it may remain on their cards.
- Archiving does not activate Hidden, Blocked, or deleted listings.
- Saving an edit to a listing in an archived category requires choosing an active category.
- Canceling an edit preserves the old listing and archived category association.
- No silent reassignment to Other; no bulk move feature in the current scope.
- Categories with attached listings must not be physically deleted.

Accepted validation text:

> This category is no longer available. Please select an active category.

Derived consistency requirement: validate category activity at the final save, including if an administrator archived it while the seller's form was open. Define the exact race-handling mechanism later. Decide behavior for a bookmarked archived category filter and empty-category physical deletion/unarchiving only when needed; do not assume it.
