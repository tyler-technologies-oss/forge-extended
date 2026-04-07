---
'@tylertech/forge-extended': minor
---

feat(structured-card): add `after-header-actions` slot for edge-aligned icon buttons

- Added new `after-header-actions` slot designed for icon buttons that need to run up against the card edge (e.g., close buttons, overflow menus)
- Added spacing between `header-actions` and `after-header-actions` slots
- Adjust the inner forge-card height to always expand to the height of its parent
