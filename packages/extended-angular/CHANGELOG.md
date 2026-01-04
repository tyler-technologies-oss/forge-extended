# @tylertech/forge-extended-angular

## 2.0.0

### Major Changes

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

### Patch Changes

- Updated dependencies [e33c209]
  - @tylertech/forge-extended@1.2.1

## 1.2.0

### Minor Changes

- edd5101: Updated user profile component to allow passing of image url to avatars
- cf198b7: Built the newly designed App Launcher component

### Patch Changes

- Updated dependencies [17d6833]
- Updated dependencies [edd5101]
- Updated dependencies [b1ba977]
- Updated dependencies [cf198b7]
  - @tylertech/forge-extended@1.2.0

## 1.1.0

### Minor Changes

- 3c79421: Created the new user profile component and dependency components

### Patch Changes

- Updated dependencies [3c79421]
  - @tylertech/forge-extended@1.1.0

## 1.0.0

### Major Changes

- e922ea4: initial stable release

### Patch Changes

- Updated dependencies [e922ea4]
  - @tylertech/forge-extended@1.0.0

## 0.2.0

### Minor Changes

- b806223: Bump dependencies and support Forge 3.8.0
- 215ba6a: Added new confirmation dialog component
- 87f4059: Added new responsive toolbar component

### Patch Changes

- f0454b4: feat(busy-indicator): added `headingLevel` property and fixed layout bugs
- f0454b4: define custom element when injecting `BusyIndicatorService` and allow for optional config parameter
- Updated dependencies [ad6c6f9]
- Updated dependencies [8859660]
- Updated dependencies [b806223]
- Updated dependencies [f0454b4]
- Updated dependencies [2820210]
- Updated dependencies [8f2ba06]
- Updated dependencies [c09b85e]
- Updated dependencies [215ba6a]
- Updated dependencies [f0454b4]
- Updated dependencies [87f4059]
  - @tylertech/forge-extended@0.2.0

## 0.1.4

### Patch Changes

- cfb1dad: consistency updates and release preparation
- Updated dependencies [1854abd]
- Updated dependencies [273f28c]
- Updated dependencies [cfb1dad]
  - @tylertech/forge-extended@0.1.1

## 0.1.3

### Patch Changes

- Updated dependencies [e9d1ed5]
  - @tylertech/forge-extended@0.1.0

## 0.1.2

### Patch Changes

- 0b2e765: Fix peer dependencies

## 0.1.1

### Patch Changes

- 7bb5888: Alpha release
- Updated dependencies [7bb5888]
  - @tylertech/forge-extended@0.0.1

## 0.1.1

### Patch Changes

- Alpha release
- Updated dependencies
  - @tylertech/forge-extended@0.0.1
