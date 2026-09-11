---
'@tylertech/forge-extended': minor
---

feat(theme-editor): add `forge-theme-editor` for authoring a complete Forge theme — keeps light and dark as independent variants, edits all 101 `--forge-theme-*` tokens with filtering and per-token revert, derives a full palette from seed colors, renders each `on-*` contrast pair for real against its ratio, previews the theme on a panel of live Forge components in a dialog without writing to the document, and imports and exports JSON/Sass/CSS. Adds `forge-theme-showcase`, the component panel the preview renders, with a `Use relative CSS` generation option that stores the derived ramps as CSS relative colors of their base so the browser owns the derivation and a ramp tracks its base.
