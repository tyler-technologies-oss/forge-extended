# Contributing to Tyler Forge™ Extended

## Prerequisites

- [Node.js](https://nodejs.org/) (see `engines` in root `package.json`)
- [pnpm](https://pnpm.io/) (see `packageManager` in root `package.json`)

This project uses pnpm workspaces and [Turborepo](https://turbo.build/repo/docs) for monorepo management.

## Development Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Build specific package
pnpm build:extended
pnpm build:extended-angular
pnpm build:extended-react

# Run tests
pnpm test
pnpm test:extended
pnpm test:extended-angular

# Run dev servers
pnpm dev                       # All packages
pnpm dev:extended              # Storybook
pnpm storybook:extended        # Storybook (alternative)
pnpm dev:extended-angular      # Angular demo
pnpm dev:extended-react        # React demo
```

### Recommended VSCode Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Monorepo Workspace](https://marketplace.visualstudio.com/items?itemName=folke.vscode-monorepo-workspace)
- [lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin)
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

## Making Changes

### Code Quality

```bash
# Lint
pnpm lint

# Format
pnpm format

# Type check
pnpm build
```

### Testing

- Write tests for all new features and bug fixes
- Ensure tests pass before submitting PR
- Maintain or improve code coverage

## Release Process

This monorepo uses [Changesets](https://github.com/changesets/changesets) with GitHub Actions automation for version management and publishing.

### Developer Workflow

#### 1. Create a Changeset

After making changes, create a changeset describing your changes:

```bash
pnpm changeset
```

Follow the interactive prompts:
- Select affected packages (spacebar to select, enter to confirm)
- Choose version bump type:
  - **patch** (0.0.x): Bug fixes, dependency updates
  - **minor** (0.x.0): New features, non-breaking changes
  - **major** (x.0.0): Breaking changes
- Write a clear summary of your changes

This creates a markdown file in `.changeset/` directory.

#### 2. Commit and Push

Commit the changeset file along with your code changes:

```bash
git add .
git commit -m "feat: your feature description"
git push
```

**That's it!** The rest is automated.

### Automated Release Workflow

When changes are merged to `main`, GitHub Actions automatically handles the release:

#### Automated Steps (you don't do these):

1. **CI Checks** (`.github/workflows/ci.yml`)
   - Runs on every PR
   - Validates code formatting
   - Builds all packages
   - Runs test suites

2. **Release PR Creation** (`.github/workflows/release.yml`)
   - Detects changeset files in `main` branch
   - Creates or updates a "chore: release" PR
   - Automatically versions packages based on changesets
   - Updates CHANGELOG.md files
   - The PR shows exactly what will be released

3. **Publishing** (`.github/workflows/release.yml`)
   - When the release PR is merged to `main`:
     - Builds all packages
     - Publishes to npm registry
     - Creates git tags
     - Pushes tags to GitHub

4. **Documentation Deploy** (`.github/workflows/deploy.yml`)
   - Deploys Storybook to GitHub Pages
   - Triggers on changes to `packages/extended/**`

### Manual Release (Maintainers Only)

In rare cases where manual intervention is needed:

```bash
# Version packages
pnpm changeset:version

# Review changes
git add .
git commit -m "chore: release"

# Build and publish
pnpm release

# Push tags
git push --follow-tags
```

**Note:** This should rarely be necessary - prefer the automated workflow.

## Monorepo Architecture

### Turborepo Task Pipeline

Turborepo manages task orchestration with automatic dependency resolution:

- `build` tasks depend on upstream package builds (`^build`)
- `dev` tasks automatically build dependencies before starting
- Caching optimizes repeated builds

### Package Dependencies

```
@tylertech/forge-extended (core web components)
  ↓
  ├─→ @tylertech/forge-extended-angular
  └─→ @tylertech/forge-extended-react
```

Angular and React packages depend on the core package. Turborepo ensures dependencies build first.

### Catalog Versions

Shared dependency versions are managed in `pnpm-workspace.yaml` under the `catalog:` section. Update catalog versions to keep dependencies consistent across packages.

## Pull Requests

- Keep PRs focused on a single feature/fix
- Include changeset with PR
- Ensure all tests pass
- Follow existing code style
- Update documentation as needed

## Questions?

- File issues: https://github.com/tyler-technologies-oss/forge-extended/issues
- Check documentation: https://forge.tylertech.com/
