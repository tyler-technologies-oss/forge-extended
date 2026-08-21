---
'@tylertech/forge-extended': minor
---

feat(app-launcher): expose header title, empty state, loading text, and search placeholder for localization

Adds a `searchPlaceholder` property (attribute `search-placeholder`) for the search input's
placeholder text, and `header-title`, `empty-state-text`, and `loading-text` slots (each with
literal fallback content) so consumers can localize or replace the remaining static strings in
`forge-app-launcher` that were previously hardcoded.
