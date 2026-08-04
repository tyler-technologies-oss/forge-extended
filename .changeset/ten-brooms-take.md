---
'@tylertech/forge-extended-angular': minor
'@tylertech/forge-extended-react': minor
'@tylertech/forge-extended': minor
---

feat: added new footer component (migrated from legacy forge-internal lib)

Note for consumers migrating from the legacy `forge-internal` footer: the theming CSS custom properties have been renamed. Update any overrides accordingly:

- `--forge-footer-theme-background` → `--forge-footer-background`
- `--forge-footer-theme-on-background` → `--forge-footer-on-background`
