import{j as e,M as r}from"./blocks-DOdWW1SM.js";import{useMDXComponents as s}from"./index-DNFFXgUn.js";import"./iframe-Bv9-H2J8.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Frameworks/Svelte"}),`
`,e.jsx(n.h1,{id:"svelte",children:"Svelte"}),`
`,e.jsxs(n.p,{children:["Svelte has ",e.jsx(n.a,{href:"https://custom-elements-everywhere.com/#svelte",rel:"nofollow",children:"decent support"})," for custom elements and can mostly be used without a problem."]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"To use Forge Extended in your Svelte application, install the following package from npm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @tylertech/forge-extended
`})}),`
`,e.jsx(n.h2,{id:"importing-components",children:"Importing Components"}),`
`,e.jsxs(n.p,{children:["To use Forge Extended components in your Svelte application, import the components you need from the ",e.jsx(n.code,{children:"@tylertech/forge-extended"})," package."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
  import '@tylertech/forge-extended/responsive-toolbar';
<\/script>

<forge-responsive-toolbar></forge-responsive-toolbar>
`})}),`
`,e.jsx(n.h2,{id:"typescript-support",children:"TypeScript Support"}),`
`,e.jsxs(n.p,{children:[`If you are using TypeScript in your Svelte application, we also include typings for all Forge Extended components. You can add a reference to those
typings in your `,e.jsx(n.code,{children:"tsconfig.json"})," file:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "compilerOptions": {
    "types": ["@tylertech/forge-extended/dist/types/svelte/forge-extended-svelte.d.ts"]
  }
}
`})})]})}function a(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{a as default};
