# Tyler Forge™ Extended

A library of prebuilt components implementing Tyler Forge™ design patterns and recipes.

These UI components are typically composed of multiple atomic components from the core `@tylertech/forge`
library, and are intended to encapsulate a larger pattern and/or design to help developers create user
interfaces more efficiently.

> Strict design and accessibility are the main focus of these components, and they are intended to offer limited volatility.

## Usage

To get started using this library you must first install the core Forge library (if already installed, see version
compatibility table below):

```bash
npm install @tylertech/forge
```

> The core Forge library is a peer dependency of this extended library, and they are very tightly coupled and
> intended to always be used alongside each other.

Now you can install the extended library:

```bash
npm install @tylertech/forge-extended
```

## Version compatibility

| `@tylertech/forge-extended` | `@tylertech/forge` |
| --------------------------- | ------------------ |
| `^1.0.0`                    | `^3.0.0`           |

## Local Development

### Install

```bash
npm install
```

### Run dev site

This will open the Storybook site that is used for local development.

```bash
npm run start
```

### Vite Dev

You can also run a basic HTML dev site using Vite for simple/quick testing.

```bash
npm run dev
```

### Build

This runs a local production build of the library.

```bash
npm run build
```

### Run tests

Executes the unit test suite.

```bash
npm test
```
