import{j as e,M as s}from"./blocks-DSQMbKOO.js";import{useMDXComponents as t}from"./index-DNFFXgUn.js";import"./iframe-CsUbsq26.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Frameworks/Angular"}),`
`,e.jsx(n.h1,{id:"angular",children:"Angular"}),`
`,e.jsxs(n.p,{children:["Angular has ",e.jsx(n.a,{href:"https://custom-elements-everywhere.com/#angular",rel:"nofollow",children:"great support"})," for custom elements and can be used directly."]}),`
`,e.jsxs(n.p,{children:["With that being said, while Angular ",e.jsx(n.em,{children:"can"})," be used with Forge Extended, there are some caveats to be aware of:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The Angular compiler is not (currently) designed to work with custom elements, so you will need to use the ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," to disable the compiler from throwing errors when it comes across any elements it does not recognize."]}),`
`,e.jsxs(n.li,{children:["Using ",e.jsx(n.code,{children:"ngModel"}),", ",e.jsx(n.code,{children:"formControl"})," or ",e.jsx(n.code,{children:"formControlName"})," does not work out of the box. You would need to implement ",e.jsx(n.code,{children:"ControlValueAccessor"})," directives for custom elements to integrate with Angular forms."]}),`
`,e.jsxs(n.li,{children:["Angular's change detection does not run in response to changes outside of the Angular context, so you might need to use ",e.jsx(n.code,{children:"NgZone"})," to manually trigger change detection where necessary."]}),`
`]}),`
`,e.jsx(n.h2,{id:"forge-extended--angular-adapter",children:"Forge Extended + Angular Adapter"}),`
`,e.jsx(n.p,{children:"To make using Forge Extended with Angular more seamless, we have created an adapter library that helps with the issues mentioned above."}),`
`,e.jsx(n.p,{children:"This adapter provides the following:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Wrapper Angular components for all Forge Extended components.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This allows you to use Forge Extended components as if they were native Angular components."}),`
`,e.jsx(n.li,{children:"Provides type safety for all custom element properties and events."}),`
`,e.jsx(n.li,{children:"Auto-defines the custom element with the browser's custom elements registry."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Automatically provides any ",e.jsx(n.code,{children:"ControlValueAccessor"})," directives for native Angular integration with Forge Extended's form-associated elements."]}),`
`,e.jsxs(n.li,{children:["Exposes Angular providers for creating dynamic components such as confirmation dialogs and busy indicators.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensures that the dynamic components are created within the Angular context (zone), and are properly destroyed when no longer needed."}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["While the adapter is not ",e.jsx(n.em,{children:"required"})," to use Forge Extended with Angular, it is ",e.jsx(n.strong,{children:"highly"})," recommended to make the integration easier."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You can view source code for the Forge Extended Angular adapter on ",e.jsx(n.a,{href:"https://github.com/tyler-technologies-oss/forge-extended/tree/main/packages/extended-angular",rel:"nofollow",children:"GitHub"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"To use Forge Extended in your Angular application, install the following packages from npm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @tylertech/forge-extended @tylertech/forge-extended-angular
`})}),`
`,e.jsx(n.h2,{id:"importing-components",children:"Importing Components"}),`
`,e.jsxs(n.p,{children:["To use Forge Extended components in your Angular application, you will need to import component modules from the ",e.jsx(n.code,{children:"@tylertech/forge-extended-angular"})," package for each component you want to use."]}),`
`,e.jsx(n.p,{children:"With Angular modules:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ForgeResponsiveToolbarModule } from '@tylertech/forge-extended-angular';

@NgModule({
  imports: [ForgeResponsiveToolbarModule]
})
export class MyModule {}
`})}),`
`,e.jsx(n.p,{children:"With standalone Angular components:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ForgeButtonModule } from '@tylertech/forge-extended-angular';

@Component({
  selector: 'app-my-component',
  template: '<forge-responsive-toolbar></forge-responsive-toolbar>',
  imports: [ForgeResponsiveToolbarModule]
})
export class MyComponent {}
`})}),`
`,e.jsx(n.h2,{id:"custom_elements_schema",children:"CUSTOM_ELEMENTS_SCHEMA"}),`
`,e.jsxs(n.p,{children:[`While not recommended, if you prefer not to use the adapter, you can easily disable the Angular compiler from throwing errors by adding the
`,e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," to your component or module's ",e.jsx(n.code,{children:"schemas"})," array:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
`})}),`
`,e.jsx(n.p,{children:`This is a quicker and easier way to get started with Forge Extended components in your Angular application, but keep in mind that you will lose some of the
type safety and integration benefits that the adapter provides.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`If you're interested in pushing the Angular team along to help improve the support for custom elements, please consider up voting or chiming in on
this `,e.jsx(n.a,{href:"https://github.com/angular/angular/issues/12045",rel:"nofollow",children:"Angular issue"})," and/or this ",e.jsx(n.a,{href:"https://github.com/angular/angular/issues/58483",rel:"nofollow",children:"Angular issue"}),"."]}),`
`]})]})}function h(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{h as default};
