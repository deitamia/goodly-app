---
description: Visual styling rules, responsive grid specifications, card containment, and accessibility guidelines for Goodly.
globs: ["**/*.css", "**/*.tsx", "**/*.jsx", "**/*.html", "**/*.vue", "**/*.svelte", "src/components/**", "src/styles/**"]
always_on: true
---

# Goodly Design System & Aesthetic Standards

## 1. Visual Identity & Hero
- **Look & Feel**: Light, clear, welcoming, humanitarian feel.
- **Hero Section**:
  - Centered text on **very pale/light green background**.
  - **NO background photo or video**.
  - Wordmark: Text wordmark **Goodly** (no complex logo required for initial MVP).
  - Copy: Exact accepted English copy from [context/english-content.md](file:///c:/Users/mydei/OneDrive/Documents/Goodly-project-pack-v0.3/goodly-project-pack/context/english-content.md).

## 2. Color Palette & Button Hierarchy
- **Main Text**: **Black** (`#000000` / high contrast dark), fixed across public views.
- **Backgrounds**: Light, clean surface backgrounds.
- **Card Borders**: Light gray direction.
- **Action Buttons**:
  - **Buy** (Product): Solid Green.
  - **View service** (Exact Price): Solid Green.
  - **View service** (Price on request): Warm Yellow / Gold with **black caption**.
- **Button Contrast**: Button text foreground must meet WCAG 2.2 AA standards (minimum 4.5:1 contrast ratio against the button background).

## 3. Cards & Media Layout
- **Image Aspect Ratio**: **4:3 aspect ratio** using `object-fit: contain` (full image visible, never cropped; empty space padded naturally).
- **Responsive Catalog Grid**:
  - **Desktop**: 3 cards per row.
  - **Tablet**: 2 cards per row.
  - **Mobile**: 1 card per row.
- **Pagination**: Initial **12 cards**; clicking **Load more** appends **12 cards** while preserving search query and active filters.
- **Text Wrapping**: Full title and short description translations must wrap and display completely without ellipsis or truncating cards to force artificial equal heights.

## 4. Interaction & Accessibility
- **Card Click Boundaries**: The whole card is NOT a single link.
  - Seller photo / nickname links to `/seller/{generated-id}`.
  - Primary button (**Buy** / **View service**) links to the external HTTPS URL in a new tab.
  - Secondary **Report seller** link opens the report modal/form.
- **Keyboard Navigation**: All accordions, dropdowns, shipping destination popups, filter drawers, and dialogs must be fully keyboard operable with visible focus rings.
- **Mobile Navigation**: Products and Services remain accessible in a dedicated prominent header row; secondary links (Home, Become a seller, Log in) collapse into the mobile menu.

## 5. Admin Appearance Scope Boundaries
- **Strictly Limited Customization**: Admin can customize only:
  1. Main button color.
  2. Price-on-request button color.
  3. Public background tint.
  4. Card border shade.
- **Server Validation**: Allowed palette combinations are validated server-side to guarantee black text readability and WCAG contrast.
- **No Unsafe Controls**: Prohibit raw CSS inputs, arbitrary HTML/script execution, layout drag-and-drop builders, or database state edits. Public theme changes MUST NOT alter admin panel styles.
