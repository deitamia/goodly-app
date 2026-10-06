# Design decisions

Version: 0.3 · 2026-10-03 · Accepted visual direction; exact tokens unselected.

## Visual direction

Light, clear, welcoming public interface. Main text **black**, light green accents where appropriate, light background and restrained borders. Text wordmark **Goodly** for the initial version. No separate logo asset is required now.

Homepage hero is centered text on **very pale/light green**, with **no background photo**. Products and Services are the focal actions; Become a seller and reporting are secondary. Do not substitute a photo/video hero from another project.

## Buttons and cards

| Element | Accepted color direction |
| --- | --- |
| Buy | Green |
| View service with exact price | Green |
| View service with Price on request | Warm yellow/gold with black caption |
| General public main text | Black, fixed |
| Public background | Light |
| Card border | Light gray direction |
| Suitable accents | Light green |

Show amount/currency or Price on request near the button. Color complements the visible pricing text and is not the sole indication of pricing mode. Main text black does not yet decide the text color of every green button; choose accessible button foregrounds with the exact palette.

Card image area **4:3**; full image visible using contain behavior, no crop. A mismatched source aspect ratio may leave surrounding space rather than losing the image. Shared grid: 3 desktop / 2 tablet / 1 phone. Initial 12 then Load more in increments of 12. Longer translations wrap in full; avoid truncation introduced just to equalize card heights.

## Interaction/accessibility implementation requirements

Keyboard-operable accordions, menus, filter panels, full shipping lists, and reporting forms. Visible focus and adequate hit targets even when Report seller is visually small. Flag accompanies country/language text or an accessible name. Avoid nested whole-card links around independent buttons. Keep search/filter state on Load more and Back to results.

Exact typography, font choice/language coverage, spacing, responsive breakpoints, button shades, hover/focus states, and theme tokens remain to be finalized. Contrast must be checked using actual colors, not the words green/yellow. WCAG ordinary-text minimum contrast reference: 4.5:1; large text has different thresholds. This is a design/verification target, not a claim the app is already compliant.

## Admin Appearance scope

Limited approved palettes for main button color, price-on-request button color, public background, card border. Main button setting covers Buy and fixed-price service buttons. Main text stays black. Public theme changes do not restyle the admin interface.

Actions: **Preview / Save changes / Reset to defaults**. Preview versus saved persistence behavior must be designed deliberately. Central theme settings and CSS variables/tokens are an implementation direction. Server must validate allowed values and readable combinations; disabled browser options alone are insufficient.

No raw CSS, arbitrary HTML/script, unrestricted color strings, business state edits, schema edits, or page builder. Palettes should not allow black text on an unreadable background. Decide exact defaults before implementing Reset to defaults. Theme saving must not modify listings, profile approval, translations, prices, or database schema.

## References

- W3C contrast guidance: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- CSS custom properties: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties

Technical references guide implementation; accepted product decisions above remain authoritative for the look.
