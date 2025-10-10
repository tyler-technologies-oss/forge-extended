# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tyler Forge™ Extended is a monorepo containing multiple packages of prebuilt web components that implement Tyler Forge™ design patterns. These components are typically larger, more complex, and encapsulate a larger pattern or design to help developers create user interfaces more efficiently. The main focus of these components is strict design and accessibility, and they are intended to offer limited volatility. The components in this library are intended to be used in conjunction with the core Tyler Forge library. The main package `@tylertech/forge-extended` builds on the core `@tylertech/forge` library (peer dependency) and provides higher-level composed components.

## Architecture

### Monorepo Structure

- Uses **pnpm workspaces** with **Turborepo** for task orchestration
- Main packages:
  - `packages/extended/` - Core web components library (TypeScript + Lit)
  - `packages/extended-angular/` - Angular wrapper components
  - `packages/extended-react/` - React wrapper components

### Component Architecture

- **Lit-based web components** with TypeScript
- Each component follows the pattern:
  - `src/lib/[component-name]/[component-name].ts` - Main component class
  - `src/lib/[component-name]/[component-name].scss` - Styles (inline imported)
  - `src/lib/[component-name]/[component-name].test.ts` - Tests
  - `src/lib/[component-name]/index.ts` - Export file
- Components extend `LitElement` and use decorators (`@customElement`, `@property`)
- Styles imported as `?inline` and applied with `unsafeCSS()`
- Components define their own dependencies from `@tylertech/forge` in static blocks

### Build System

- **Vite** for building with custom config for library mode
- Outputs ES modules with preserved directory structure
- **TypeScript** definitions generated via `vite-plugin-dts`
- **Custom Elements Manifest** generation for documentation and framework integrations

### Testing

- **Web Test Runner** with Playwright
- Tests organized by component groups
- Coverage thresholds: statements 98.5%, branches 95.5%, functions 96.5%, lines 98.5%
- Sass files inlined during test runs

## Common Development Commands

### Development

```bash
# Run Storybook for component development
pnpm storybook:extended

# Run dev server with hot reload
pnpm dev:extended

# Run all workspace dev servers
pnpm dev
```

### Building

```bash
# Build extended package only
pnpm build:extended

# Build all packages
pnpm build
```

### Testing

```bash
# Run tests for extended package (watch mode with coverage)
pnpm test:extended

# Run focused tests during development
pnpm test:extended:focus

# Run all tests in CI mode
pnpm test

# Run tests for specific component group (e.g., "quantity-field")
pnpm run --filter=@tylertech/forge-extended test --group=quantity-field
```

### Code Quality

```bash
# Lint all packages
pnpm lint

# Format all files
pnpm format

# Check formatting
pnpm format:check

# Generate custom elements manifest
pnpm cem
```

### Component Generation

```bash
# Create new component with templates
pnpm plop:extended component

# Create demo page only
pnpm plop:extended demo

# Create storybook story only
pnpm plop:extended story
```

## Key Conventions

### Component Creation

- Use Plop generator to scaffold new components: `pnpm plop:extended component`
- Components must be added to `src/lib/index.ts` exports (auto-handled by Plop)
- Follow naming convention: `forge-[component-name]` for tag names
- Define component dependencies in static blocks

### Import Patterns

- Forge core components: Import definition functions, call in static blocks
- Tyler icons: Import and register with `IconRegistry.define()`
- Styles: Import as `?inline` and use with `unsafeCSS()`
- Slots: Use `@queryAssignedNodes()` or `@queryAssignedElements()` for slotted content

### Icon Usage

**ALWAYS define icons when using `forge-icon` or `forge-icon-button` components:**

```typescript
import { IconRegistry } from '@tylertech/forge';
import { tylIconName1, tylIconName2 } from '@tylertech/tyler-icons';

IconRegistry.define([tylIconName1, tylIconName2]);
```

This pattern must be followed in:

- Core web components
- Angular demo components
- React demo components
- Any component using Forge icons

Icons must be explicitly registered before they can be used by Forge components at runtime.

### SCSS Imports

Use these proper Forge SCSS imports (do NOT use `@use '@tylertech/forge-core/styles'`):

Component token location:
@use '@tylertech/forge/sass/core/styles/tokens

```scss
// Typography styles
@use '@tylertech/forge/sass/typography' as forge-typography;

// Spacing utilities
@use '@tylertech/forge/sass/core/styles/spacing' as forge-spacing;

// Theme tokens and colors
@use '@tylertech/forge/sass/core/styles/theme' as forge-theme;
```

### Testing

- Each component requires a `.test.ts` file
- Tests use `@open-wc/testing` with Chai assertions
- Coverage thresholds are enforced - aim for high coverage

### Framework Wrappers

- Angular and React wrappers are generated from the main package
- Run `pnpm generate-proxies` after adding new components to create framework bindings

## File Organization

### Core Package Structure

```
packages/extended/src/
├── lib/                          # Component source files
│   ├── [component-name]/         # Individual component folders
│   ├── utils/                    # Shared utilities
│   └── index.ts                  # Main export file
├── stories/                      # Storybook stories
├── dev/                          # Dev server pages
└── test/                         # Test setup files
```

### Component File Structure

```
src/lib/[component-name]/
├── [component-name].ts           # Main component class
├── [component-name].scss         # Component styles
├── [component-name].test.ts      # Unit tests
└── index.ts                      # Exports
```

## Framework Integration Notes

- Components are built to work across frameworks (Angular, React, Vue, Svelte)
- Type definitions are generated for Svelte and Vue integrations
- React/Angular packages provide proper framework-specific wrappers
- Always test components in isolation before framework integration

## Development notes

- Never use inline styles on HTML elements
- When using a color, make sure to always use color tokens from Forge
- For anything involving spacing, like gap, padding, etc. Use the spacing tokens from Forge
- Always check other components for reference to know when to use readonly modifiers, getters, and private variables (prefixed with #)
- NEVER use readonly for Lit html templates that have dynamic content within them or they won't update. Use getters instead. If the content is static, then use readonly.
- Everytime a new feature is added to a component, write a test for it
- When adding margins to an element, always use logical properties, ie: margin-inline-start, margin-block-end, etc.
- When adding a new property or slot to a component, add an appropriate storybook control for it
- When writing docs for a component, you don't need to include any information about slots. Those are generated automatically from code
- Always put return types on functions
- Import location for ifDefined is import { ifDefined } from 'lit/directives/if-defined.js';
- No need to add a import './' line to the test files
- Always update the MDX storybook docs when new features are added to a component, things like events, slots, properties, etc
- For Storybook actions, always use `import { action } from 'storybook/actions';` not `@storybook/addon-actions`
- For Storybook MDX docs, always use `import { Meta, Title, Canvas } from '@storybook/addon-docs/blocks';` and `import CustomArgTypes from '../../blocks/CustomArgTypes';` not `@storybook/blocks`
- For Lit template variables, use `readonly` for static content and `get` for dynamic content that needs to re-render when component state changes

### Conditional Content Pattern

When you need to conditionally show/hide elements based on user-provided content, prefer using slots with `@queryAssignedNodes` over boolean properties. This pattern:

- **Use `@queryAssignedNodes({ slot: 'slot-name', flatten: true })` to detect slotted content**
- **Use `when()` directive with `slottedNodes.length > 0` condition to conditionally render wrapper elements**
- **Add slot change handler to trigger re-renders: `@slotchange=${this.#handleSlotChange}`**
- **Always render the slot itself, but conditionally render its wrapper based on content presence**
- **Use `nothing` from lit for the else case when you don't want to render anything**

**Implementation pattern:**

```typescript
@queryAssignedNodes({ slot: 'optional-content', flatten: true })
private _slottedNodes!: Node[];

readonly #contentSlot = html`<slot name="optional-content"></slot>`;

get #conditionalContent(): TemplateResult | typeof nothing {
  const hasContent = this._slottedNodes.length > 0;
  return when(
    hasContent,
    () => html`<wrapper-element>${this.#contentSlot}</wrapper-element>`,
    () => html`${this.#contentSlot}`  // Always render slot for detection
  );
}

#handleSlotChange(evt: Event): void {
  const slotName = (evt.target as HTMLSlotElement).name;
  if (['optional-content', 'other-watched-slots'].includes(slotName)) {
    this.requestUpdate();
  }
}
```

**When to use this pattern:**

- Optional buttons or actions (like "Select All" buttons, secondary buttons)
- Optional content sections that users may or may not want to show
- Anything where the presence of content should determine visibility

**Example:** See `confirmation-dialog.ts` (secondary button) and `multi-select-header.ts` (select-all button)

### Template Reactivity Pattern

When creating template variables in Lit components, choose between `readonly` and `get` based on whether the content needs to re-render when component state changes.

**Use `readonly` for static templates:**

```typescript
// Static content that never changes
readonly #header = html`<h1>Static Title</h1>`;

// Content with only bound properties (reactive through property binding)
readonly #searchField = html`
  <input .value=${this._searchValue} @input=${this._handleInput} />
`;
```

**Use `get` for dynamic templates:**

```typescript
// Content that depends on component state/properties
get #threadList(): TemplateResult {
  return html`
    <ul>
      ${this.threads.map(thread => html`<li>${thread.title}</li>`)}
    </ul>
  `;
}

// Templates containing other getters or computed values
get #container(): TemplateResult {
  return html`
    <div>
      ${this.#threadList}
      ${this.hasActions ? this.#actions : nothing}
    </div>
  `;
}
```

**Key Rule:** If template content changes based on component state (arrays, conditionals, computed values), use `get`. If content is static or only uses property bindings, use `readonly`.
