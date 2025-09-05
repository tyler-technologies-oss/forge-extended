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
