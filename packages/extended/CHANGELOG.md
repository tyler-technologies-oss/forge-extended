# @tylertech/forge-extended

## 1.2.1

### Patch Changes

- e33c209: For @tylertech/forge-extended-angular (MAJOR):

  Update to Angular 20 and fix security vulnerabilities

  BREAKING CHANGES:
  - Updated to Angular 20 (minimum Angular version now >=20.0.0 <22.0.0)

  Other changes:
  - Updated to @tylertech/forge-angular@7.0.0 which requires @tylertech/forge@^3.12.1
  - Removed deprecated BrowserDynamicTestingModule in favor of BrowserTestingModule
  - Updated Karma configuration for new @angular/build:karma builder
  - Updated test.ts files to use modern zone.js imports
  - Fixed polyfills configuration in angular.json for Angular 20 compatibility
  - Updated karma.conf.js to remove Angular-specific framework declarations
  - Fixed security vulnerabilities in transitive dependencies (koa, playwright, tar-fs, babel, nanoid, js-yaml, tmp)
  - Updated TypeScript to 5.9.3
  - Updated ng-packagr to 20.3.2

  For @tylertech/forge-extended (PATCH):

  Update peer dependencies and fix security vulnerabilities
  - Updated @tylertech/forge peer dependency from 3.9.1 to 3.12.1 for Angular 20 compatibility
  - Updated vite from 7.0.0 to 7.0.8 (security fixes)
  - Updated glob from 11.0.3 to 11.1.0 (security fix)
  - Fixed multiple security vulnerabilities in dev dependencies via pnpm overrides

## 1.2.0

### Minor Changes

- 17d6833: Add new multi-select-header component with customizable selection display and action buttons
- edd5101: Updated user profile component to allow passing of image url to avatars
- b1ba977: added open state to user-profile
- cf198b7: Built the newly designed App Launcher component

## 1.1.0

### Minor Changes

- 3c79421: Created the new user profile component and dependency components

## 1.0.0

### Major Changes

- e922ea4: initial stable release

## 0.2.0

### Minor Changes

- b806223: Bump dependencies and support Forge 3.8.0
- 2820210: Added the close icon-button as well as a few layout adjustments
- c09b85e: Removed the ability to close the confirmation dialog by clicking on the backdrop by default
- 215ba6a: Added new confirmation dialog component
- 87f4059: Added new responsive toolbar component

### Patch Changes

- ad6c6f9: use `queryAssignedNodes()`
- 8859660: [busy-indicator] fixed an a11y issue when using slotted content
- f0454b4: feat(busy-indicator): added `headingLevel` property and fixed layout bugs
- 8f2ba06: Disable auto-fullscreen on internal dialog
- f0454b4: improve conditional rendering detection

## 0.1.1

### Patch Changes

- 1854abd: quantity-field: initial release preparation
- 273f28c: updated the layout and fixed minor bugs
- cfb1dad: consistency updates and release preparation

## 0.1.0

### Minor Changes

- e9d1ed5: Support `exports` field in package

## 0.0.1

### Patch Changes

- 7bb5888: Alpha release

## 0.0.1

### Patch Changes

- Alpha release
