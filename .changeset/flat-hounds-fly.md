---
'@tylertech/forge-extended-angular': major
'@tylertech/forge-extended': patch
---

For @tylertech/forge-extended-angular (MAJOR):

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
