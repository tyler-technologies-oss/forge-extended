# Tyler Forge™ Extended Angular Adapter

This package provides Angular adapter components for the Tyler Forge™ Extended Web Components library.

## For Library Users

If you're looking to use this library in your Angular application, please refer to the [package README](./projects/forge-extended-angular/README.md) which contains:
- Installation instructions
- Version compatibility table
- Usage examples
- API documentation

## Development

This is the monorepo workspace for developing the Angular adapter library.

### Prerequisites

- Node.js and pnpm installed
- Familiarity with the [Tyler Forge Extended](../../extended) component library

### Setup

From the monorepo root:

```bash
# Install dependencies
pnpm install

# Build the Angular adapter (automatically builds dependencies via Turborepo)
pnpm build:extended-angular
```

### Development Workflow

```bash
# Run the demo application with hot reload
pnpm dev:extended-angular

# Run tests
pnpm test:extended-angular

# Build the package
pnpm build:extended-angular
```

### Project Structure

```
packages/extended-angular/
├── projects/
│   └── forge-extended-angular/    # Library source code
│       ├── src/
│       │   ├── lib/              # Generated proxy components
│       │   └── public-api.ts     # Public API exports
│       ├── package.json
│       └── README.md             # Published to npm
├── src/                           # Demo application
│   ├── app/                       # Demo components
│   └── main.ts                    # Demo app entry point
├── dist/                          # Build output (gitignored)
├── angular.json                   # Angular CLI configuration
└── README.md                      # This file (development docs)
```

### Generating Proxy Components

The Angular components are auto-generated from the Forge extended web components:

```bash
# From monorepo root
pnpm generate-proxies
```

This uses `@tylertech/forge-schematics` to create Angular wrappers based on the custom elements manifest from `@tylertech/forge-extended`.

The generation is configured in `generate-proxies.json` and uses the Angular CLI schematics to create:
- Proxy component wrappers
- Angular modules for each component
- Type definitions
- `ControlValueAccessor` directives for form controls

### Publishing

The package is published from the `dist/forge-extended-angular` directory, which contains:
- Compiled library code
- Type definitions
- Package metadata
- README.md (copied from `projects/forge-extended-angular/`)

Publishing is automated through Changesets. See the [main monorepo documentation](../../README.md) for release procedures.

### Contributing

Contributions are welcome! Please ensure:
- All generated components are properly typed
- Demo app examples are updated for new components
- Tests pass before submitting PRs
- Follow the Angular style guide and existing code patterns
