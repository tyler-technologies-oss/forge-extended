---
'@tylertech/forge-extended': patch
---

Replaced Lit's `@customElement` decorator with the `tryDefine()` helper from `@tylertech/forge-core` when registering custom elements. This guards against `customElements.define()` throwing when a consuming application bundles multiple copies of `forge-extended`, matching the fix applied to core Forge components.
