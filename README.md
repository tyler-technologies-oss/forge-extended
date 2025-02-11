# Tyler Forge™ Extended

A library of prebuilt components implementing Tyler Forge™ design patterns and recipes.

These UI components are typically composed of multiple atomic components from the core `@tylertech/forge`
library, and are intended to encapsulate a larger pattern and/or design to help developers create user
interfaces more efficiently.

> Strict design and accessibility are the main focus of these components, and they are intended to offer limited volatility.

## Usage

To get started using this library you must install the Forge component library (if already installed, see version
compatibility table below):

```bash
npm install @tylertech/forge @tylertech/forge-extended
```

> The core Forge library is a peer dependency of this extended library, and they are very tightly coupled and
> intended to always be used alongside each other.

### Importing components

You can import components from the extended library like so:

```javascript
import '@tylertech/forge-extended/quantity-field';
```

> This is a side-effect import, so you don't need to assign it to a variable. It will register the component with the
> custom element registry and make it available for use in your HTML.

You can also reference types from components modules like so:

```typescript
import { type QuantityFieldElement } from  '@tylertech/forge-extended/quantity-field';
```

> This is useful for strongly typing your custom elements in TypeScript.

### Importing **all** components

If you want to import all components from the extended library, you can do so like this:

```javascript
import '@tylertech/forge-extended';
```

> **Important:** This will import **all** components from the extended library, which may not be necessary and could
> increase your bundle size. It is recommended to only import the components you **need** individually.
>
> Additionally, you should **not** mix the full library import with individual imports, as this may cause issues with
> tree-shaking, bundle size, and can lead to conflicts when the code is run in the browser to define custom elements.

## Version compatibility

| `@tylertech/forge-extended` | `@tylertech/forge` |
| --------------------------- | ------------------ |
| `^1.0.0`                    | `^3.0.0`           |

## Local Development

This project uses [pnpm](https://pnpm.io/) for package management and is a monorepo using pnpm workspaces.

Additionally, this project uses [Turoborepo](https://turbo.build/repo/docs) for managing the monorepo and orchestrating tasks.

### Install

```bash
pnpm install
```

### Recommended VSCode Extensions

It is recommended that you install the following extensions in Visual Studio Code for the best development experience:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Monorepo Workspace](https://marketplace.visualstudio.com/items?itemName=folke.vscode-monorepo-workspace)
- [lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin)
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

### Run Storybook

The following command will run Storybook, which is used for both local development and documentation.

```bash
pnpm storybook:extended
```

### Run dev site

The following command will run all dev sites for each package in the monorepo:

```bash
pnpm dev
```

If you'd prefer to run a specific dev site for a workspace/package, you can do so like this:

```bash
pnpm dev:extended
```

> See the `scripts` section of the `package.json` for more dev site commands.

### Build

This runs a local production build of all packages.

```bash
pnpm build
```

### Run tests

Executes the unit test suite.

```bash
pnpm test
```
