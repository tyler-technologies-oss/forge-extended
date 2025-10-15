import{j as e,M as i}from"./blocks-Dl7kpce0.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import"./iframe-Dj2Wx9s_.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";function t(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started/Installation"}),`
`,e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:`To get started, install both the core Tyler Forge library and the extended library (if the core library is already installed,
see version compatibility table below):`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @tylertech/forge @tylertech/forge-extended
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@tylertech/forge"}),` library is a peer dependency of the extended library, and they are very tightly coupled and intended
to always be used alongside each other.`]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"https://forge.tylerdev.io/",rel:"nofollow",children:"Forge documentation"})," for more information on the core library."]}),`
`]}),`
`,e.jsx(n.h2,{id:"framework-adapters",children:"Framework Adapters"}),`
`,e.jsx(n.p,{children:"If you're using a framework, you should jump to the framework-specific guide:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/frameworks-angular--docs",children:"Angular"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/frameworks-react--docs",children:"React"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/frameworks-vue--docs",children:"Vue"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/frameworks-svelte--docs",children:"Svelte"})}),`
`]}),`
`,e.jsx(n.h2,{id:"importing-components",children:"Importing Components"}),`
`,e.jsx(n.p,{children:"You will then need to import each of the components you are using within your application."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@tylertech/forge-extended/busy-indicator';
import '@tylertech/forge-extended/quantity-field';
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:'The above imports are known as "side effect" imports and will automatically register the components with the browser.'}),`
`]}),`
`,e.jsx(n.p,{children:"If you prefer, you can also define the components manually via the definition functions:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { defineBusyIndicatorComponent } from '@tylertech/forge-extended';

defineBusyIndicatorComponent();
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` make sure to import the components or definition functions as early as possible in your application bootstrapping
process to ensure they are defined with the browser before your application is rendered to avoid FOUC (Flash of Unstyled Content).`]})]})}function h(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{h as default};
