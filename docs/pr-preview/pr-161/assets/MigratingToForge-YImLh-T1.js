import{j as e,M as o}from"./blocks-hwiCZFHd.js";import{useMDXComponents as t}from"./index-De36GQbW.js";import"./iframe-CWwUEUts.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";function d(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Migrating to Forge Core"}),`
`,e.jsx(r.h1,{id:"migrating-to-tyler-forge",children:"Migrating to Tyler Forge™"}),`
`,e.jsxs(r.p,{children:["Every component in ",e.jsx(r.code,{children:"@tylertech/forge-extended"})," has moved into the core ",e.jsx(r.a,{href:"https://forge.tylerdev.io/forge/v3/",rel:"nofollow",children:"Tyler Forge™"}),` library,
starting with `,e.jsx(r.code,{children:"@tylertech/forge@3.17.0"}),". The extended packages are deprecated and are in a ",e.jsx(r.strong,{children:`90-day deprecation period that ends
on January 10, 2027`}),`. After that date they will no longer be maintained, so complete your migration before the deprecation period
ends. If you have any concerns about this timeline, please let us know in the `,e.jsx("a",{href:"https://teams.microsoft.com/l/channel/19%3A1gCw-wLjrS56X_iAY0mpHpk4PyWOi08JiMM7Kc1xvho1%40thread.tacv2/Support?groupId=2bb1b8ea-cd12-4df5-a4ab-0c895bfcda5c&tenantId=7cc5f0f9-ee5b-4106-a62d-1b9f7be46118",target:"_blank",rel:"noopener noreferrer",children:"Forge Support Teams channel"}),"."]}),`
`,e.jsxs(r.p,{children:[`The migrated components keep the same tag names, attributes, properties, events, slots, CSS custom properties, and CSS parts, so
in most applications migrating only requires changing dependencies and import paths, and a codemod can make most of those changes
for you. A few components gained new features in Forge (see `,e.jsx(r.a,{href:"#whats-new",children:"What's new"}),")."]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Package"}),e.jsx(r.th,{children:"Minimum version"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Web components"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge@3.17.0"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Angular wrappers"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-angular@9.2.0"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"React wrappers"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-react@3.5.0"})})]})]})]}),`
`,e.jsx(r.h2,{id:"automated-migration-recommended",children:"Automated migration (recommended)"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.a,{href:"https://github.com/tyler-technologies-oss/forge-upgrade",rel:"nofollow",children:"Tyler Forge™ upgrade utility"}),` includes a
`,e.jsx(r.code,{children:"forge-extended-migration"}),` configuration that performs most of this migration for you. Run it from the root of your project (the directory containing your
`,e.jsx(r.code,{children:"package.json"}),"):"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`npx @tylertech/forge-upgrade@latest --configuration forge-extended-migration
`})}),`
`,e.jsx(r.p,{children:"The codemod:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Replaces the ",e.jsx(r.code,{children:"@tylertech/forge-extended"}),", ",e.jsx(r.code,{children:"@tylertech/forge-extended-angular"}),", and ",e.jsx(r.code,{children:"@tylertech/forge-extended-react"}),` entries in
`,e.jsx(r.code,{children:"package.json"})," with ",e.jsx(r.code,{children:"@tylertech/forge"}),", ",e.jsx(r.code,{children:"@tylertech/forge-angular"}),", and ",e.jsx(r.code,{children:"@tylertech/forge-react"}),"."]}),`
`,e.jsxs(r.li,{children:["Rewrites ",e.jsx(r.code,{children:"@tylertech/forge-extended"})," imports to the matching ",e.jsx(r.code,{children:"@tylertech/forge/<component>"}),` subpath import, and removes the
`,e.jsx(r.code,{children:"defineXComponent()"})," calls that are no longer needed."]}),`
`,e.jsxs(r.li,{children:["Rewrites ",e.jsx(r.code,{children:"@tylertech/forge-extended-angular"})," imports to ",e.jsx(r.code,{children:"@tylertech/forge-angular"}),", renaming each ",e.jsx(r.code,{children:"ForgeExtendedXModule"}),` to
`,e.jsx(r.code,{children:"ForgeXModule"}),"."]}),`
`,e.jsxs(r.li,{children:["Rewrites ",e.jsx(r.code,{children:"@tylertech/forge-extended-react"})," imports to ",e.jsx(r.code,{children:"@tylertech/forge-react"}),"."]}),`
`]}),`
`,e.jsxs(r.p,{children:["Add ",e.jsx(r.code,{children:"--dry-run"})," to preview the changes without modifying any files."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Check your dependency versions."}),` The codemod renames each package but keeps its existing version range. For example,
`,e.jsx(r.code,{children:'"@tylertech/forge-extended": "^1.8.1"'})," becomes ",e.jsx(r.code,{children:'"@tylertech/forge": "^1.8.1"'}),`, which points to an old 1.x release of Forge. After running it, update each
package to at least the `,e.jsx(r.a,{href:"#migrating-to-tyler-forge",children:"minimum version"}),` above. If your project already depends on
`,e.jsx(r.code,{children:"@tylertech/forge"}),`, the codemod removes the extended entry and keeps your existing version, so confirm it's 3.17.0 or later.
The codemod only rewrites root-package imports, not subpath imports. Update any subpath imports manually as described in
`,e.jsx(r.a,{href:"#2-update-your-imports",children:"step 2"})," before reinstalling dependencies."]}),`
`]}),`
`,e.jsxs(r.p,{children:[`Anything the codemod can't map with certainty, such as the
Angular `,e.jsx(r.code,{children:"*ProxyModule"})," classes and ",e.jsx(r.code,{children:"ForgeExtendedModule"}),`, is left unchanged and reported with a console warning. Update those
manually (see `,e.jsx(r.a,{href:"#3-update-framework-wrappers",children:"Update framework wrappers"}),")."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[`Always review the changes after running the codemod. If you use a code formatter such as Prettier, run it afterward. Then
reinstall your dependencies and complete `,e.jsx(r.a,{href:"#4-remove-tylertechforge-extended-completely",children:"step 4"}),"."]}),`
`]}),`
`,e.jsx(r.p,{children:"The steps below describe the same changes if you prefer to migrate by hand."}),`
`,e.jsx(r.h2,{id:"1-update-your-dependencies",children:"1. Update your dependencies"}),`
`,e.jsx(r.p,{children:"Remove the extended packages and install at least the minimum versions listed above."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`# Web components
npm uninstall @tylertech/forge-extended
npm install @tylertech/forge@^3.17.0

# Angular
npm uninstall @tylertech/forge-extended-angular
npm install @tylertech/forge-angular@^9.2.0

# React
npm uninstall @tylertech/forge-extended-react
npm install @tylertech/forge-react@^3.5.0
`})}),`
`,e.jsx(r.h2,{id:"2-update-your-imports",children:"2. Update your imports"}),`
`,e.jsx(r.p,{children:`The codemod does not update subpath imports; manually change them to the matching Forge subpath as shown below before reinstalling
dependencies.`}),`
`,e.jsxs(r.p,{children:["Replace ",e.jsx(r.code,{children:"@tylertech/forge-extended"})," with ",e.jsx(r.code,{children:"@tylertech/forge"}),` in every side-effect import. Each component registers itself when its
subpath is imported.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-javascript",children:`// Before
import '@tylertech/forge-extended/quantity-field';

// After
import '@tylertech/forge/quantity-field';
`})}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Important:"})," These components are ",e.jsx(r.strong,{children:"not"})," registered by ",e.jsx(r.code,{children:"defineComponents()"})," or by importing the root ",e.jsx(r.code,{children:"@tylertech/forge"}),`
package. You must import each component's subpath. The `,e.jsx(r.code,{children:"defineXComponent()"}),` functions are also deprecated in Forge; use the
side-effect imports instead.`]}),`
`]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Component"}),e.jsx(r.th,{children:"Before"}),e.jsx(r.th,{children:"After"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:[e.jsx(r.code,{children:"<forge-app-launcher>"}),", ",e.jsx(r.code,{children:"<forge-app-launcher-link>"})]}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/app-launcher"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/app-launcher"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<forge-app-layout>"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/app-layout"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/app-layout"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<forge-busy-indicator>"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/busy-indicator"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/busy-indicator"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<forge-confirmation-dialog>"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/confirmation-dialog"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/confirmation-dialog"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<forge-content-scaffold>"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/content-scaffold"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/content-scaffold"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<forge-count-card>"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/count-card"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/count-card"})})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:[e.jsx(r.code,{children:"<forge-footer>"}),", ",e.jsx(r.code,{children:"<forge-footer-item>"})]}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/footer"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/footer"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<forge-multi-select-header>"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/multi-select-header"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/multi-select-header"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<forge-quantity-field>"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/quantity-field"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/quantity-field"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<forge-responsive-toolbar>"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/responsive-toolbar"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/responsive-toolbar"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<forge-structured-card>"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/structured-card"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/structured-card"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<forge-theme-toggle>"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/theme-toggle"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/theme-toggle"})})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:[e.jsx(r.code,{children:"<forge-user-profile>"}),", ",e.jsx(r.code,{children:"<forge-profile-link>"})]}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge-extended/user-profile"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"@tylertech/forge/user-profile"})})]})]})]}),`
`,e.jsxs(r.p,{children:["In Forge, importing a parent component also registers its child elements. For example, ",e.jsx(r.code,{children:"@tylertech/forge/footer"}),` registers
`,e.jsx(r.code,{children:"<forge-footer-item>"}),", and ",e.jsx(r.code,{children:"@tylertech/forge/user-profile"})," registers ",e.jsx(r.code,{children:"<forge-profile-link>"})," and ",e.jsx(r.code,{children:"<forge-theme-toggle>"}),`, so you can
drop separate imports such as `,e.jsx(r.code,{children:"@tylertech/forge-extended/user-profile/profile-link"}),"."]}),`
`,e.jsx(r.p,{children:"Type imports move the same way:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`// Before
import type { QuantityFieldComponent } from '@tylertech/forge-extended';

// After
import type { QuantityFieldComponent } from '@tylertech/forge/quantity-field';
`})}),`
`,e.jsx(r.h2,{id:"3-update-framework-wrappers",children:"3. Update framework wrappers"}),`
`,e.jsx(r.h3,{id:"angular",children:"Angular"}),`
`,e.jsxs(r.p,{children:["Replace each ",e.jsx(r.code,{children:"ForgeExtended*Module"})," with the matching module from ",e.jsx(r.code,{children:"@tylertech/forge-angular"}),`. The component, service, and ref class
names, including `,e.jsx(r.code,{children:"BusyIndicatorService"})," and ",e.jsx(r.code,{children:"ConfirmationDialogService"}),", are unchanged."]}),`
`,e.jsxs(r.p,{children:["The codemod doesn't change the rows marked ",e.jsx(r.strong,{children:"manual"})," below:"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The busy indicator and confirmation dialog ",e.jsx(r.code,{children:"*ProxyModule"})," classes are folded into ",e.jsx(r.code,{children:"ForgeBusyIndicatorModule"}),` and
`,e.jsx(r.code,{children:"ForgeConfirmationDialogModule"}),". Their services are provided in ",e.jsx(r.code,{children:"root"}),", so you don't need to register a provider."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"ForgeExtendedModule"}),` has no equivalent. Replace it with the individual module for each component you use (see the warning
below).`]}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`// Before
import { ForgeExtendedQuantityFieldModule } from '@tylertech/forge-extended-angular';

// After
import { ForgeQuantityFieldModule } from '@tylertech/forge-angular';
`})}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Warning:"})," Don't use barrel modules such as ",e.jsx(r.code,{children:"ForgeExtendedModule"})," or ",e.jsx(r.code,{children:"ForgeModule"}),` in production applications. They import
every component in the library at once, which makes your bundle much larger than it needs to be. They were designed for
prototyping, not production apps. If your application uses `,e.jsx(r.code,{children:"ForgeExtendedModule"})," (or ",e.jsx(r.code,{children:"ForgeModule"}),`), replace it with the
individual component modules you actually use. You should make this change even if you weren't migrating.`]}),`
`]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Before"}),e.jsx(r.th,{children:"After"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:[e.jsx(r.code,{children:"ForgeExtendedModule"})," (",e.jsx(r.strong,{children:"manual"}),")"]}),e.jsx(r.td,{children:"The individual modules you use"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedAppLauncherModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeAppLauncherModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedAppLauncherLinkModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeAppLauncherLinkModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedAppLayoutModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeAppLayoutModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedBusyIndicatorModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeBusyIndicatorModule"})})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:[e.jsx(r.code,{children:"ForgeExtendedBusyIndicatorProxyModule"})," (",e.jsx(r.strong,{children:"manual"}),")"]}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeBusyIndicatorModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedConfirmationDialogModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeConfirmationDialogModule"})})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:[e.jsx(r.code,{children:"ForgeExtendedConfirmationDialogProxyModule"})," (",e.jsx(r.strong,{children:"manual"}),")"]}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeConfirmationDialogModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedContentScaffoldModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeContentScaffoldModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedCountCardModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeCountCardModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedFooterModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeFooterModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedFooterItemModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeFooterItemModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedMultiSelectHeaderModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeMultiSelectHeaderModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedProfileLinkModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeProfileLinkModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedQuantityFieldModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeQuantityFieldModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedResponsiveToolbarModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeResponsiveToolbarModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedStructuredCardModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeStructuredCardModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedThemeToggleModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeThemeToggleModule"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeExtendedUserProfileModule"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ForgeUserProfileModule"})})]})]})]}),`
`,e.jsx(r.h3,{id:"react",children:"React"}),`
`,e.jsx(r.p,{children:"The React wrapper names are unchanged. Only the package name changes."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`// Before
import { ForgeQuantityField } from '@tylertech/forge-extended-react';

// After
import { ForgeQuantityField } from '@tylertech/forge-react';
`})}),`
`,e.jsxs(r.h2,{id:"4-remove-tylertechforge-extended-completely",children:["4. Remove ",e.jsx(r.code,{children:"@tylertech/forge-extended"})," completely"]}),`
`,e.jsxs(r.p,{children:["Because the tag names are the same, an element can only be registered by one package. If both packages are loaded, ",e.jsx(r.strong,{children:`whichever
registers a tag first wins and the other is silently ignored.`}),` Nothing will error, but your application may keep running the
deprecated extended version of a component without you noticing.`]}),`
`,e.jsxs(r.p,{children:["Migrate all of an application's extended components at once, then confirm ",e.jsx(r.code,{children:"@tylertech/forge-extended"}),` no longer appears in your
dependency tree:`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`npm ls @tylertech/forge-extended
`})}),`
`,e.jsx(r.h2,{id:"whats-new",children:"What's new"}),`
`,e.jsx(r.p,{children:"The Forge versions of these components include a few additions:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"App Launcher:"})," a new ",e.jsx(r.code,{children:"search-placeholder"})," attribute, and new ",e.jsx(r.code,{children:"header-title"}),", ",e.jsx(r.code,{children:"loading-text"}),", and ",e.jsx(r.code,{children:"empty-state-text"}),` slots for
localizing the built-in text.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Footer"})," and ",e.jsx(r.strong,{children:"Footer Item:"})," a new ",e.jsx(r.code,{children:"root"})," CSS part, and a new ",e.jsx(r.code,{children:"content"})," CSS part on the footer."]}),`
`]}),`
`,e.jsx(r.h2,{id:"getting-help",children:"Getting help"}),`
`,e.jsxs(r.p,{children:["See the ",e.jsx(r.a,{href:"https://forge.tylerdev.io/forge/v3/",rel:"nofollow",children:"Tyler Forge™ documentation"}),` for the latest docs on each component. If you run into
problems while migrating, open an issue in the `,e.jsx(r.a,{href:"https://github.com/tyler-technologies-oss/forge/issues",rel:"nofollow",children:"Tyler Forge™ repository"}),"."]})]})}function a(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(d,{...n})}):d(n)}export{a as default};
