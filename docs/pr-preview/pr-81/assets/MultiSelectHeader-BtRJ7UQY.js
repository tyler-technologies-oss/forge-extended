import{j as e,M as l,T as o,C as r}from"./blocks-nzGWLjHV.js";import{useMDXComponents as s}from"./index-CXvrARnA.js";import{C as c}from"./CustomArgTypes-DMNWRr6Q.js";import{M as a,D as d}from"./MultiSelectHeader.stories-Ckf1HsiT.js";import"./iframe-BuJgqGXX.js";import"./index-DII0rUpB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CImQL3WQ.js";import"./custom-element-Dd9KUBnE.js";import"./property-0M3-EbQP.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./index-DjH-f1de.js";import"./index-Conlq6p_.js";import"./index-DTH0jydY.js";import"./index-BOy1S3y9.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(o,{}),`
`,e.jsxs(t.p,{children:["The Multi Select Header provides a consistent toolbar interface for displaying selection state and actions when multiple items are selected in data tables, lists, or grids. It builds upon the ",e.jsx(t.code,{children:"<forge-toolbar>"})," component with a distinctive light blue background to visually indicate an active selection state."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:"The Multi Select Header is designed to appear when users have selected one or more items from a collection. It displays custom text (typically showing selection count) and provides space for relevant actions like delete, export, or bulk operations."}),`
`,e.jsx(t.h3,{id:"basic-implementation",children:"Basic Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-multi-select-header text="3 items selected">
  <forge-icon-button slot="actions" aria-label="Delete selected">
    <forge-icon name="delete"></forge-icon>
  </forge-icon-button>
</forge-multi-select-header>
`})}),`
`,e.jsx(t.h3,{id:"with-custom-text",children:"With Custom Text"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-multi-select-header text="5 rows selected for processing"></forge-multi-select-header>
`})}),`
`,e.jsx(t.h3,{id:"with-select-all-button",children:"With Select All Button"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-multi-select-header text="3 items selected">
  <span slot="select-all-button-text">Select All Items</span>
</forge-multi-select-header>
`})}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(t.p,{children:"Use the Multi Select Header when:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Users can select multiple items from a data table, list, or grid"}),`
`,e.jsx(t.li,{children:"You need to provide bulk actions for selected items"}),`
`,e.jsx(t.li,{children:"You want to clearly communicate selection state to users"}),`
`,e.jsx(t.li,{children:"You need a consistent selection interface across your application"}),`
`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Ensure action buttons have descriptive ",e.jsx(t.code,{children:"aria-label"})," attributes"]}),`
`,e.jsx(t.li,{children:"The header text provides clear feedback to screen readers"}),`
`,e.jsx(t.li,{children:"Action buttons should be keyboard accessible"}),`
`,e.jsx(t.li,{children:"Consider announcing selection changes to screen readers in your application logic"}),`
`]})]})}function k(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{k as default};
