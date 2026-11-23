---
'@tylertech/forge-extended-angular': minor
'@tylertech/forge-extended-react': minor
'@tylertech/forge-extended': minor
---

feat: added new landing page layout component (migrated from legacy forge-internal lib)

The `<forge-landing-page-layout>` component provides a responsive layout with a themed header, an optional announcements region, one/two/three-column body modes, and a footer for citizen-facing landing pages.

Note for consumers migrating from the legacy `forge-internal` landing page layout:

- `mode`, `alignment`, `size`, and `image-url-*` no longer reflect to host attributes. Move `[mode="…"]`, `[alignment="…"]`, and `[size="…"]` selectors to `:state(mode-…)`, `:state(alignment-…)`, and `:state(size-…)`.
- CSS parts have been renamed to drop the `-container` suffixes (`body-container` → `body`, `body-topcontainer` → `body-top`, `footer-container` → `footer`, etc.).
- The header uses a fixed blue/indigo gradient and white text instead of the theme's `tertiary`/`primary` gradient and `on-primary` text. Restore the old look with `--forge-landing-page-layout-header-gradient-start`, `-gradient-end`, and `-header-color`.
- Background images are darkened with a gradient overlay instead of `filter: brightness(0.5)`. Tune it with `--forge-landing-page-layout-header-overlay-start` and `-overlay-end`.
- When the `top` slot is empty, the body now sits directly below the header, removing about 48px of space that `forge-internal` rendered by default.

See the Landing Page Layout migration doc in Storybook for the full list of changes.
