# Rich Text Editor — Code Review

This document captures DRY and SOLID issues identified in the rich text editor source (TypeScript and SCSS, no tests). Ordered by priority.

---

## High Priority

### 1. Duplicated sanitization logic

The dangerous-protocol blocklist and HTML/JSON sanitization logic exist in three separate places:

- `rich-text-context.ts` — `#sanitizeHTMLString()` and `#sanitizeJSON()`
- `rich-text-renderer.ts` — `#sanitizeContent()`
- `rte-link.ts` — `#validateUrl()`

**Which implementation is the most mature in each area:**

- **JSON sanitization** — `rich-text-context.ts` `#sanitizeJSON()` is the base. It checks both raw and URL-encoded protocol variants. The renderer's `#sanitizeContent()` is a subset of this and is missing the URL-encoded check.
- **HTML sanitization** — `rich-text-context.ts` `#sanitizeHTMLString()` and `paste-handler.ts` `sanitizeHTML()` are equivalent in coverage (same element blocklist, same attribute stripping). Either can be used as the base, but `paste-handler.ts` has an extra entry (`base` element) making it marginally more complete.
- **Protocol blocklist / URL validation** — `rte-link.ts` `#validateUrl()` is the most complete. It adds URL length enforcement (2048 char limit), a URL constructor final-validation pass, IDN/punycode phishing warnings, and auto-protocol normalization on top of the shared blocklist. The blocklist constant itself (`['javascript:', 'data:', 'vbscript:', 'file:', 'about:', 'blob:']`) is identical across all three and should become a single exported constant.

**Fix:** Extract a shared `extensions/sanitize-utils.ts` alongside the existing `extensions/markdown-serializer.ts` and `extensions/paste-handler.ts` containing:

1. A `DANGEROUS_PROTOCOLS` constant (use `rte-link.ts` as the source).
2. A `sanitizeJSON()` function (use `rich-text-context.ts` as the base — it covers URL-encoded variants).
3. A `sanitizeHTML()` function (use `paste-handler.ts` as the base — it includes the `base` element).

Then update `rich-text-context.ts`, `rich-text-renderer.ts`, and `rte-link.ts` to import from this shared utility instead of each maintaining their own copy.

---

## Medium Priority

### 2. `rich-text-context.ts` violates Single Responsibility (SRP)

At ~830 lines, this single component owns:

- TipTap editor initialization and extension deduplication
- Content sanitization (HTML string input and JSON input)
- HTML output sanitization
- Markdown serialization delegation
- Character and word count tracking
- Validation logic and error state
- Accessibility announcements
- Footer rendering (counts, errors, initialization errors)

Most of this is private, so the public API is clean, but the security-critical sanitization logic (`#sanitizeHTMLString`, `#sanitizeJSON`, `#sanitizeOutputHTML`) is ~200 lines buried inside a Lit component. It belongs in its own utility file.

**Fix:** Move sanitization methods into `sanitize-utils.ts` (see item 1). No further splitting is necessary unless the file continues to grow.

---

## Low Priority

### 3. `RichTextEditorComponent` has repeated `querySelector` calls

In `rich-text-editor.ts`, every public method and getter (`toJSON`, `toHTML`, `toMarkdown`, `isInitialized`, `initializationError`) performs the same `shadowRoot?.querySelector('forge-rich-text-context')` lookup. That is four identical lines.

**Fix:** Extract a private getter:

```ts
private get #contextElement(): RichTextContextComponent | null {
  return this.shadowRoot?.querySelector('forge-rich-text-context') ?? null;
}
```

Then each method delegates via `this.#contextElement?.toJSON()` etc.

---

### 4. `rte-link.ts` has hardcoded pixel values in inline styles

The inline `css` block in `rte-link.ts` uses hardcoded values instead of Forge tokens:

| Current                    | Should use                                |
| -------------------------- | ----------------------------------------- |
| `padding: 16px`            | `var(--forge-spacing-medium)`             |
| `gap: 12px`                | `var(--forge-spacing-small)`              |
| `min-width: 320px`         | (acceptable as-is — no token equivalent)  |
| `gap: 8px` (button group)  | `var(--forge-spacing-xsmall)`             |
| `font-size: 12px`          | `var(--forge-typography-body-small-size)` |
| `margin-block-start: -8px` | `calc(var(--forge-spacing-xsmall) * -1)`  |

**Fix:** Replace each hardcoded value with the corresponding Forge token.

---

### 5. Typography styles duplicated in `rich-text-context.ts`

The `.editor-error` and `.editor-counts` classes in the `rich-text-context.ts` inline `css` block both manually set `font-size`, `font-weight`, and `line-height` from `--forge-typography-body-small-*` tokens — six lines of identical declarations repeated twice.

The root cause is that this component uses an inline `css` tagged template (not a `.scss` file), so the Forge typography mixin is unavailable.

**Fix:** Move `rich-text-context.ts` styles into a `rich-text-context.scss` file (matching the pattern used by `rich-text-content.scss` and `rich-text-renderer.scss`). This will allow `@include forge-typography.style(body-small)` to replace all six repeated lines.

---

### 6. `isActive` overload branch is fragile

In `rich-text-context.ts`, the `editorContext.isActive` method has a manual `typeof identifier === 'string'` branch to route to the correct TipTap overload. This is a workaround for the `EditorContext` interface not matching TipTap's own overload signature cleanly.

**Fix:** Align the `EditorContext.isActive` signature more closely with TipTap's `Editor.isActive` overloads, or use a single call with `as` casting internally so the branch is no longer needed.

---

## What Does Not Need Attention

- Feature component architecture — `RichTextEditorFeature` interface is minimal and correct.
- `featureHostStyles` and `_core.scss` extractions are already in place and correct.
- `MarkdownSerializer` is a clean static class with no side effects.
- `PasteHandler` is correctly isolated as a TipTap extension.
- `EditorContext` interface is well-defined and the Lit context pattern is used correctly.
- All feature files (bold, italic, underline, etc.) are appropriately thin.
