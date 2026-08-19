---
'@tylertech/forge-extended': patch
---

fix(footer-item): set the default `listitem` role directly instead of via `setDefaultAria`

Completes the fix started in #145. `footer-item.ts` still imported `setDefaultAria` from
`@tylertech/forge/esm/core/utils/a11y-utils`, a specifier that `@tylertech/forge`'s `exports` map
resolves to a non-existent `a11y-utils/index.js`. Because `footer.ts` imports
`./footer-item/footer-item`, that unresolvable import remained in the graph for any consumer
rendering a footer, breaking `esbuild`/Vite/Angular CLI builds.
