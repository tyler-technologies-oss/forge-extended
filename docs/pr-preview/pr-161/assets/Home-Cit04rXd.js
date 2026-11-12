import{j as e,M as i}from"./blocks-hwiCZFHd.js";import{useMDXComponents as o}from"./index-De36GQbW.js";import"./iframe-CWwUEUts.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";function n(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Home"}),`
`,e.jsxs(t.h1,{id:"tyler-forge-extended-",children:["Tyler Forge™ Extended ",e.jsx(t.a,{href:"https://github.com/tyler-technologies-oss/forge-extended/",rel:"nofollow",children:e.jsx(t.img,{src:"https://img.shields.io/github/stars/tyler-technologies-oss/forge-extended",alt:"GitHub Repo stars"})})]}),`
`,e.jsx(t.h2,{id:"this-library-is-deprecated",children:"This library is deprecated"}),`
`,e.jsxs(t.p,{children:["All of the components in Tyler Forge™ Extended have moved into the core ",e.jsx(t.a,{href:"https://forge.tylerdev.io/forge/v3/",rel:"nofollow",children:"Tyler Forge™"}),`
library, starting with `,e.jsx(t.code,{children:"@tylertech/forge@3.17.0"}),`. They keep the same tag names and APIs, so migrating is mostly a matter of
updating your dependencies and import paths.`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"New projects"})," should install ",e.jsx(t.code,{children:"@tylertech/forge"})," and should not install ",e.jsx(t.code,{children:"@tylertech/forge-extended"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Existing projects"})," should follow the ",e.jsx(t.a,{href:"?path=/docs/migrating-to-forge-core--docs",children:"migration guide"}),". The ",e.jsx(t.code,{children:"forge-extended-migration"}),`
codemod in the `,e.jsx(t.a,{href:"https://github.com/tyler-technologies-oss/forge-upgrade",rel:"nofollow",children:"Tyler Forge™ upgrade utility"})," automates most of the work:"]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npx @tylertech/forge-upgrade@latest --configuration forge-extended-migration
`})}),`
`,e.jsx(t.h3,{id:"90-day-deprecation-period",children:"90-day deprecation period"}),`
`,e.jsxs(t.p,{children:["The extended packages are in a ",e.jsx(t.strong,{children:"90-day deprecation period that ends on January 10, 2027"}),`. They will not receive any new
features. After the deprecation period ends, the extended packages will no longer be maintained, so plan to complete your
migration before then.`]}),`
`,e.jsxs(t.p,{children:["If you have any concerns about this timeline, please let us know in the ",e.jsx("a",{href:"https://teams.microsoft.com/l/channel/19%3A1gCw-wLjrS56X_iAY0mpHpk4PyWOi08JiMM7Kc1xvho1%40thread.tacv2/Support?groupId=2bb1b8ea-cd12-4df5-a4ab-0c895bfcda5c&tenantId=7cc5f0f9-ee5b-4106-a62d-1b9f7be46118",target:"_blank",rel:"noopener noreferrer",children:"Forge Support Teams channel"}),"."]}),`
`,e.jsx(t.h2,{id:"about",children:"About"}),`
`,e.jsxs(t.p,{children:[`The Tyler Forge™ Extended library is a set of high quality, accessible UI components that are built on top of the primitive
`,e.jsx(t.a,{href:"https://forge.tylerdev.io/",rel:"nofollow",children:"Tyler Forge™ components"}),`. These components are typically larger, more complex, and encapsulate
a larger pattern or design to help developers create user interfaces more efficiently. The main focus of these components is
strict design and accessibility, and they are intended to offer limited volatility. The components in this library are
intended to be used in conjunction with the core Tyler Forge library.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://www.npmjs.com/package/@tylertech/forge-extended",rel:"nofollow",children:e.jsx(t.img,{src:"https://img.shields.io/npm/v/%40tylertech%2Fforge-extended?style=for-the-badge",alt:"NPM Version"})}),`
`,e.jsx(t.a,{href:"https://www.npmjs.com/package/@tylertech/forge-extended",rel:"nofollow",children:e.jsx(t.img,{src:"https://img.shields.io/npm/dt/%40tylertech%2Fforge-extended?style=for-the-badge",alt:"NPM Downloads"})})]})]})}function c(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{c as default};
