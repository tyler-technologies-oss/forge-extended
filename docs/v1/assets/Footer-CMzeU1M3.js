import{j as e,M as i}from"./blocks-C6o-0BDw.js";import{useMDXComponents as t}from"./index-De36GQbW.js";import"./iframe-BNRzrxvp.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";function n(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Migration/Footer"}),`
`,e.jsx(o.h1,{id:"footer-migration",children:"Footer Migration"}),`
`,e.jsxs(o.p,{children:["Migrating from the ",e.jsx(o.code,{children:"forge-internal"})," ",e.jsx(o.code,{children:"<forge-footer>"})," to ",e.jsx(o.code,{children:"@tylertech/forge-extended"}),"."]}),`
`,e.jsx(o.h2,{id:"key-changes",children:"Key Changes"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"CSS custom properties renamed:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"--forge-footer-theme-background"})," → ",e.jsx(o.code,{children:"--forge-footer-background"})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"--forge-footer-theme-on-background"})," → ",e.jsx(o.code,{children:"--forge-footer-on-background"})]}),`
`]}),`
`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Default graphic removed:"}),' the Tyler "Empowered by" logo no longer renders by default. Provide your own via the ',e.jsx(o.code,{children:"graphic"})," slot."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Dividers:"})," the ",e.jsx(o.code,{children:"|"})," divider now only renders between ",e.jsx(o.code,{children:"<forge-footer-item>"})," children. Wrap raw content in a ",e.jsx(o.code,{children:"<forge-footer-item>"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Layout state:"})," replace ",e.jsx(o.code,{children:'forge-footer[layout="alternative"]'})," selectors with ",e.jsx(o.code,{children:":state(alternative)"}),"."]}),`
`]}),`
`,e.jsx(o.h2,{id:"before--after",children:"Before / After"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<!-- Before -->
<forge-footer layout="auto">
  <forge-footer-item><a href="/about">About</a></forge-footer-item>
  <!-- Default Tyler logo rendered automatically -->
</forge-footer>
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<!-- After -->
<forge-footer layout="auto">
  <forge-footer-item><a href="/about">About</a></forge-footer-item>

  <a slot="graphic" href="https://www.tylertech.com/" target="_blank">
    <img
      src="https://cdn.forge.tylertech.com/v1/images/branding/tyler/tyler-empowered-logo-white.svg"
      alt="Empowered by Tyler Technologies" />
  </a>
</forge-footer>
`})}),`
`,e.jsxs(o.p,{children:["See the ",e.jsx(o.a,{href:"?path=/docs/components-footer--docs",children:"Footer docs"})," for the full API."]})]})}function h(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}export{h as default};
