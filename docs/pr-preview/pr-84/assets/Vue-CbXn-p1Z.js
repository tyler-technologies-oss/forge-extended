import{j as e,M as r}from"./blocks-C6LdC_i9.js";import{useMDXComponents as s}from"./index-DNFFXgUn.js";import"./iframe-C7C0zhBa.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Frameworks/Vue"}),`
`,e.jsx(n.h1,{id:"vue",children:"Vue"}),`
`,e.jsxs(n.p,{children:["Vue has ",e.jsx(n.a,{href:"https://custom-elements-everywhere.com/#vue",rel:"nofollow",children:"great support"})," for custom elements and can be used directly."]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"To use Forge Extended in your Vue application, install the following package from npm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @tylertech/forge-extended
`})}),`
`,e.jsx(n.h2,{id:"configure-vue",children:"Configure Vue"}),`
`,e.jsxs(n.p,{children:[`To make sure Vue plays nice with custom elements, you need to configure the compiler to allow certain elements. The Vue
documentation has a section on `,e.jsx(n.a,{href:"https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue",rel:"nofollow",children:"using custom elements in Vue"}),`
that explains what you need to do.`]}),`
`,e.jsx(n.p,{children:"If you're using the Vue plugin with Vite, you can use the following in your Vite config:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('forge-')
        }
      }
    })
  ]
});
`})}),`
`,e.jsx(n.h2,{id:"importing-components",children:"Importing Components"}),`
`,e.jsxs(n.p,{children:["To use Forge components in your Vue application, import the components you need from the ",e.jsx(n.code,{children:"@tylertech/forge-extended"})," package."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>
  <forge-responsive-toolbar></forge-responsive-toolbar>
</template>

<script setup>
  import '@tylertech/forge-extended/responsive-toolbar';
<\/script>
`})}),`
`,e.jsx(n.h2,{id:"typescript-support",children:"TypeScript Support"}),`
`,e.jsxs(n.p,{children:[`If you are using TypeScript in your Vue application, we also include typings for all Forge Extended components. You can add a reference to those
typings in your `,e.jsx(n.code,{children:"tsconfig.json"})," file:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "compilerOptions": {
    "types": ["@tylertech/forge-extended/dist/types/vue/forge-extended-vue.d.ts"]
  }
}
`})})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default};
