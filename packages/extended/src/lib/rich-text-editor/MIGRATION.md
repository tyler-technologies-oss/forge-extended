# Rich Text Editor Migration Guide

**Version:** Prototype (Sept 2025) → Production Ready (June 2026)  
**Branch:** `feat/rte-headings`

This guide documents all changes made to the Rich Text Editor component during the production readiness project. If you were using the prototype version from September 2025, this guide will help you upgrade to the production-ready version.

---

## Table of Contents

- [Summary of Changes](#summary-of-changes)
- [New Features](#new-features)
- [Breaking Changes](#breaking-changes)
- [API Additions](#api-additions)
- [Accessibility Improvements](#accessibility-improvements)
- [Styling Changes](#styling-changes)
- [Upgrade Instructions](#upgrade-instructions)
- [Testing Improvements](#testing-improvements)

---

## Summary of Changes

The Rich Text Editor has undergone extensive enhancements to transform it from a prototype into a production-ready component:

- ✅ **711 comprehensive tests** (previously: minimal test coverage)
- ✅ **WCAG 2.1 Level AA accessibility compliance**
- ✅ **Production features:** validation, paste handling, error handling, output formats
- ✅ **Professional styling** with full Forge theme integration
- ✅ **Performance optimizations** (tested with 10,000+ word documents)
- ✅ **Comprehensive documentation** (JSDoc, Storybook, usage guides)

**Good news:** The component is designed to be **backward compatible** with the prototype. Existing usage patterns should continue to work without changes, while new features are opt-in.

---

## New Features

### 1. Heading Support (NEW)

The editor now supports H1, H2, and H3 headings.

**Prototype:** No heading support  
**Production:** Full heading support with toolbar buttons

```html
<!-- Headings are included in standard tools -->
<forge-rich-text-editor>
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
```

**Keyboard shortcuts:**

- `Ctrl/Cmd+Alt+1` - Heading 1
- `Ctrl/Cmd+Alt+2` - Heading 2
- `Ctrl/Cmd+Alt+3` - Heading 3
- `Ctrl/Cmd+Alt+0` - Paragraph

**Custom usage:**

```html
<forge-rich-text-editor>
  <forge-rte-heading></forge-rte-heading>
</forge-rich-text-editor>
```

### 2. Content Validation (NEW)

Add character limits and validation to the editor.

```html
<forge-rich-text-editor
  max-length="1000"
  show-character-count
  show-word-count
  error-message="Content cannot exceed 1,000 characters">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
```

**New properties:**

- `maxLength` - Maximum character limit (0 = no limit)
- `errorMessage` - Custom error message to display
- `showCharacterCount` - Show character count below editor
- `showWordCount` - Show word count below editor

**New events:**

- `validation` - Fires when validation state changes

```typescript
editor.addEventListener('validation', (event: CustomEvent) => {
  console.log('Valid:', event.detail.isValid);
  console.log('Errors:', event.detail.errors);
});
```

### 3. Paste Handling (NEW)

Control how pasted content is handled.

```html
<forge-rich-text-editor allow-paste-formatting="true" allow-paste-images="false">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
```

**New properties:**

- `allowPasteFormatting` (default: `true`) - Allow formatting from Word/Google Docs
- `allowPasteImages` (default: `false`) - Allow image paste

**Features:**

- HTML sanitization (removes scripts, dangerous attributes)
- Word/Google Docs cleanup (removes complex formatting)
- Keyboard shortcut: `Ctrl/Cmd+Shift+V` for plain text paste
- Security hardening (removes event handlers, scripts, iframes)

### 4. Link Enhancements (NEW)

Enhanced link feature with validation and improved UI.

```html
<forge-rte-link validate-urls="true" auto-protocol="true"> </forge-rte-link>
```

**Prototype link feature:**

- Basic link button
- Simple popover with input and apply button

**Production link feature:**

- ✅ URL validation with error messages
- ✅ Auto-protocol (automatically adds `https://`)
- ✅ Enhanced popover UI (Apply/Update/Remove/Cancel buttons)
- ✅ Security attributes (`target="_blank"`, `rel="noopener noreferrer nofollow"`)
- ✅ Input type="url" with better placeholder
- ✅ ARIA error announcements

**New properties:**

- `validateUrls` (default: `true`) - Validate URL format
- `autoProtocol` (default: `true`) - Auto-add https:// if missing

### 5. Error Handling (NEW)

Comprehensive error handling with user-facing messages.

```html
<forge-rich-text-editor suppress-errors="false">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
```

**New properties:**

- `suppressErrors` (default: `false`) - Control console error logging

**New events:**

- `initialized` - Fired when editor successfully initializes
- `initialization-error` - Fired when initialization fails
- `error` - Fired for non-fatal runtime errors

```typescript
editor.addEventListener('initialized', () => {
  console.log('Editor ready!');
});

editor.addEventListener('initialization-error', (event: CustomEvent) => {
  console.error('Failed to initialize:', event.detail.error);
});

editor.addEventListener('error', (event: CustomEvent) => {
  console.error('Runtime error:', event.detail.context, event.detail.error);
});
```

**Features:**

- Fatal initialization error boundaries with user-facing UI
- Runtime error recovery (editor continues functioning)
- Safe defaults for public methods
- Error event dispatching

### 6. Output Formats (NEW)

Export editor content in multiple formats.

**Prototype:**

- Content available via `change` event detail

**Production:**

- ✅ `toJSON()` method - ProseMirror JSON format
- ✅ `toHTML()` method - Clean HTML string
- ✅ `isInitialized` getter - Check initialization state
- ✅ `initializationError` getter - Inspect initialization errors

```typescript
const editor = document.querySelector('forge-rich-text-editor');

// Get content as JSON (ProseMirror format)
const json = editor.toJSON();
console.log(json); // { type: 'doc', content: [...] }

// Get content as HTML
const html = editor.toHTML();
console.log(html); // '<p>Hello <strong>world</strong></p>'

// Check initialization state
if (editor.isInitialized) {
  console.log('Editor ready');
} else {
  console.error('Error:', editor.initializationError);
}
```

---

## Breaking Changes

**Good news:** There are **no breaking changes** to the component API. The production version is backward compatible with the prototype.

### Non-Breaking Changes to Be Aware Of

1. **Link security attributes**: Links now automatically include `target="_blank"` and `rel="noopener noreferrer nofollow"`. This is a security enhancement, not a breaking change.

2. **Paste sanitization**: Pasted content is now sanitized by default (removes scripts, dangerous attributes). Set `allow-paste-formatting="false"` for plain text only.

3. **Character counting**: If you use `maxLength`, character count includes formatting (HTML tags are not counted in the limit).

4. **Error handling**: The editor now dispatches error events. If you have global error handlers, you may see new error events.

---

## API Additions

### New Properties

| Property               | Type      | Default | Description                                 |
| ---------------------- | --------- | ------- | ------------------------------------------- |
| `maxLength`            | `number`  | `0`     | Maximum character limit (0 = no limit)      |
| `errorMessage`         | `string`  | `''`    | Custom error message for validation         |
| `showCharacterCount`   | `boolean` | `false` | Show character count below editor           |
| `showWordCount`        | `boolean` | `false` | Show word count below editor                |
| `allowPasteFormatting` | `boolean` | `true`  | Allow formatted paste from Word/Google Docs |
| `allowPasteImages`     | `boolean` | `false` | Allow image paste                           |
| `suppressErrors`       | `boolean` | `false` | Suppress console error logging              |

### New Methods

| Method                | Return Type           | Description                                |
| --------------------- | --------------------- | ------------------------------------------ |
| `toJSON()`            | `object \| undefined` | Returns editor content as ProseMirror JSON |
| `toHTML()`            | `string`              | Returns editor content as HTML string      |
| `isInitialized`       | `boolean`             | Returns whether editor is initialized      |
| `initializationError` | `string \| undefined` | Returns initialization error, if any       |

### New Events

| Event                  | Detail Type                              | Description                                |
| ---------------------- | ---------------------------------------- | ------------------------------------------ |
| `validation`           | `{ isValid: boolean; errors: string[] }` | Fires when validation state changes        |
| `initialized`          | `void`                                   | Fires when editor successfully initializes |
| `initialization-error` | `{ error: string }`                      | Fires when initialization fails            |
| `error`                | `{ context: string; error: string }`     | Fires for non-fatal runtime errors         |

### New Feature Components

| Component             | Description                  |
| --------------------- | ---------------------------- |
| `<forge-rte-heading>` | Heading buttons (H1, H2, H3) |

**Note:** `<forge-rte-standard-tools>` now includes heading buttons by default.

### Link Feature Additions

| Property       | Type      | Default | Description                         |
| -------------- | --------- | ------- | ----------------------------------- |
| `validateUrls` | `boolean` | `true`  | Validate URL format before applying |
| `autoProtocol` | `boolean` | `true`  | Auto-add https:// if missing        |

---

## Accessibility Improvements

The editor now meets **WCAG 2.1 Level AA** compliance:

### Keyboard Navigation

**New keyboard shortcuts:**

- `Space` key now activates toolbar buttons (previously only `Enter`)
- `Enter` applies link in popover
- `Escape` closes link popover
- `Ctrl/Cmd+Shift+V` pastes as plain text

**All TipTap shortcuts now documented:**

- Text formatting: `Ctrl/Cmd+B/I/U/Shift+X/E`
- Headings: `Ctrl/Cmd+Alt+1/2/3/0`
- Lists: `Ctrl/Cmd+Shift+8/7`
- History: `Ctrl/Cmd+Z/Shift+Z`

### ARIA Attributes

**New ARIA attributes added:**

- Toolbar: `role="toolbar"`, `aria-label`, `aria-controls`, `aria-orientation`
- Buttons: `aria-pressed`, `aria-keyshortcuts`, `aria-controls`
- Content: `role="textbox"`, `aria-multiline`, `aria-readonly`, `aria-disabled`
- Popover: Auto-focus, keyboard support

### Screen Reader Support

**New screen reader announcements:**

- Formatting actions: "Bold applied", "Italic removed", etc.
- Heading changes: "Heading 1 applied", "Paragraph style applied"
- List actions: "Bullet list applied", "List removed"
- Alignment: "Left aligned", "Center aligned", etc.
- Link actions: "Link added", "Link removed"
- State changes: "Editor disabled", "Editor is read-only"

Announcements use ARIA live regions with `aria-live="polite"` and clear after 1 second.

### Focus Management

**Improvements:**

- Clear, visible focus indicators on all interactive elements
- Logical focus order through components
- Focus returns to editor after toolbar actions
- Auto-focus in popovers with text selection
- No keyboard traps

---

## Styling Changes

### Theme Integration

The editor now uses **Forge design tokens** throughout:

**Colors:**

- Primary, surface, outline, text colors from Forge theme
- Supports light/dark themes automatically
- High contrast mode support

**Typography:**

- Forge typography mixins (heading1-heading5, body, label, etc.)
- Consistent font sizing and line heights

**Spacing:**

- Forge spacing tokens (xxxsmall, xxsmall, xsmall, small, medium, large)
- Logical properties (margin-block-_, margin-inline-_)

**No hardcoded values** - All colors, spacing, and typography come from Forge tokens.

### Visual Improvements

- **Toolbar:** Enhanced layout with flex-wrap, better padding (48px min-height)
- **Active buttons:** Primary-container background when formatting is active
- **Focus indicators:** Medium width, primary color
- **Content area:** Enhanced heading, list, link, code, blockquote, hr styling
- **States:** Clear disabled/readonly visual indicators
- **Responsive:** Touch-friendly 40x40px buttons, flexible layouts

### Custom Theming

The editor respects custom Forge themes:

```css
/* Your custom theme */
:root {
  --forge-theme-primary: #custom-color;
  --forge-theme-surface: #custom-surface;
}

/* Editor automatically uses your theme */
```

---

## Upgrade Instructions

### Step 1: Update Package (if needed)

```bash
pnpm update @tylertech/forge-extended
```

### Step 2: Review Your Usage

**Basic usage (no changes needed):**

```html
<!-- This continues to work exactly as before -->
<forge-rich-text-editor content="<p>Hello world</p>">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
```

### Step 3: Add New Features (Optional)

**Add validation:**

```html
<forge-rich-text-editor content="<p>Hello world</p>" max-length="1000" show-character-count>
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
```

**Handle validation events:**

```typescript
editor.addEventListener('validation', (event: CustomEvent) => {
  if (!event.detail.isValid) {
    console.warn('Validation errors:', event.detail.errors);
  }
});
```

**Use output methods:**

```typescript
// Save content in your preferred format
const json = editor.toJSON();
const html = editor.toHTML();

// Save to database
await saveContent({ json, html });
```

### Step 4: Review Link Behavior

If you're using `<forge-rte-link>`, links now include security attributes by default. This is generally a good thing, but if you need different behavior:

```typescript
// Links now have: target="_blank" rel="noopener noreferrer nofollow"
// This is secure by default and recommended

// If you need to customize, you can still access the underlying TipTap configuration
// See the link feature documentation for advanced customization
```

### Step 5: Test Paste Behavior

The editor now sanitizes pasted content. Test your paste workflows:

```html
<!-- Allow formatted paste (default) -->
<forge-rich-text-editor allow-paste-formatting="true">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>

<!-- Force plain text paste -->
<forge-rich-text-editor allow-paste-formatting="false">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
```

### Step 6: Add Error Handling (Recommended)

```typescript
const editor = document.querySelector('forge-rich-text-editor');

// Handle initialization errors
editor.addEventListener('initialization-error', (event: CustomEvent) => {
  console.error('Editor failed to load:', event.detail.error);
  // Show user-facing error message
  showErrorMessage('The editor failed to load. Please refresh the page.');
});

// Handle runtime errors (optional)
editor.addEventListener('error', (event: CustomEvent) => {
  console.error('Editor error:', event.detail.context, event.detail.error);
});
```

---

## Testing Improvements

The component now has **711 comprehensive tests** covering:

- ✅ All features (bold, italic, underline, strike, code, headings, lists, alignment, links, undo/redo)
- ✅ Accessibility (ARIA, keyboard navigation, screen reader support, focus management)
- ✅ Validation and error handling
- ✅ Paste handling and sanitization
- ✅ Link validation and security
- ✅ Output formats (JSON, HTML)
- ✅ Performance (large documents, rapid typing, memory usage)
- ✅ States (disabled, readonly, active indicators)

**Test coverage:** 98.5%+ statements, 95.5%+ branches

---

## Performance

The editor has been tested and optimized for large documents:

| Document Size | Initialization Time | Target | Result     |
| ------------- | ------------------- | ------ | ---------- |
| 1,000 words   | ~200-300ms          | 500ms  | ✅ EXCEEDS |
| 5,000 words   | ~500-700ms          | 1000ms | ✅ EXCEEDS |
| 10,000 words  | ~1000-1500ms        | 2000ms | ✅ EXCEEDS |

**Memory:** No memory leaks detected  
**Typing:** Smooth performance with rapid updates  
**Output:** JSON/HTML generation < 50ms

See `PERFORMANCE.md` for detailed benchmarks and best practices.

---

## Documentation

The component now has comprehensive documentation:

- **JSDoc:** All properties, methods, events, and slots documented
- **Storybook:** 11 interactive stories with examples
- **Usage Guide:** Complete guide with 40+ code examples
- **Accessibility Docs:** Keyboard shortcuts, screen reader support, WCAG compliance
- **This Migration Guide:** Upgrade path from prototype

---

## Getting Help

If you encounter issues during migration:

1. **Check the Usage Guide:** See comprehensive examples in Storybook or `USAGE.md`
2. **Review Troubleshooting:** See the Troubleshooting section in Storybook docs
3. **Check Console:** Enable error logging with `suppress-errors="false"`
4. **Test Initialization:** Listen for `initialized` and `initialization-error` events

---

## Summary

The Rich Text Editor is now **production-ready** with:

- ✅ Full backward compatibility (no breaking changes)
- ✅ 10+ new production features (validation, paste handling, error handling, etc.)
- ✅ WCAG 2.1 Level AA accessibility compliance
- ✅ Professional styling with Forge theme integration
- ✅ Comprehensive documentation and tests
- ✅ Excellent performance (tested with 10,000+ words)

**You can upgrade with confidence** - existing code continues to work, and new features are opt-in. Enjoy the enhanced editor! 🎉
