---
'@tylertech/forge-extended-angular': minor
'@tylertech/forge-extended-react': minor
'@tylertech/forge-extended': minor
---

feat: added new landing page layout component (migrated from legacy forge-internal lib)

The `<forge-landing-page-layout>` component provides a responsive layout with a themed header, an optional announcements region, one/two/three-column body modes, and a footer for citizen-facing landing pages.

Note for consumers migrating from the legacy `forge-internal` landing page layout:

- Style variants are now driven by CSS custom states instead of attribute selectors — move `[mode="…"]`, `[alignment="…"]`, `[size="…"]` selectors to `:state(mode-…)`, `:state(alignment-…)`, `:state(size-…)`.
- The `image-small` and `image-large` slots have been removed. Use the `image-url-small` / `image-url-large` attributes for a responsive `<picture>`, or slot in your own `<img>` / `<picture>` under the `image` slot. A direct-child `<img>` without a `slot` attribute is auto-assigned to the `image` slot.
- CSS parts have been renamed to drop the `-container` suffixes (`body-container` → `body`, `footer-container` → `footer`, etc.).
- Header text renders in white by default so the light-on-dark treatment holds across every theme. Override with `--forge-landing-page-layout-header-color` if a different color is needed.
- Header gradient and background-image darkening overlay are now tunable via `--forge-landing-page-layout-header-gradient-start` / `-end` and `--forge-landing-page-layout-header-overlay-start` / `-end`.

See the Landing Page Layout migration doc in Storybook for the full list of changes.
