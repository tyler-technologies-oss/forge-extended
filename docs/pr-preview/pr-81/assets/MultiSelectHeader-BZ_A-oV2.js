import{j as e,M as l,T as r,C as s}from"./blocks-BCB5FW9f.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as c}from"./CustomArgTypes-BTScODxh.js";import{M as a,D as d}from"./MultiSelectHeader.stories-D6mKFU1j.js";import{Demo as m}from"./BasicImplementation.stories-Cf7ic4op.js";import{Demo as h}from"./WithCustomText.stories-yu9SgWu9.js";import{Demo as p}from"./WithSelectAllButton.stories-yS6pY046.js";import"./iframe-QJIfuo0V.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CImQL3WQ.js";import"./custom-element-DtFHKVlF.js";import"./multi-select-header-E9LcT50b.js";import"./property-CARb0H1g.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./index-DHQAjO_G.js";import"./index-C4WLtxlJ.js";import"./index-B8K7u_gz.js";import"./index-D2NHYcx7.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(r,{}),`
`,e.jsxs(t.p,{children:["The Multi Select Header provides a consistent toolbar interface for displaying selection state and actions when multiple items are selected in data tables, lists, or grids. It builds upon the ",e.jsx(t.code,{children:"<forge-toolbar>"})," component with a distinctive light blue background to visually indicate an active selection state."]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:"The Multi Select Header is designed to appear when users have selected one or more items from a collection. It displays custom text (typically showing selection count) and provides space for relevant actions like delete, export, or bulk operations."}),`
`,e.jsx(t.h3,{id:"basic-implementation",children:"Basic Implementation"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-multi-select-header text="3 items selected">
  <forge-icon-button slot="actions" aria-label="Delete selected">
    <forge-icon name="delete"></forge-icon>
  </forge-icon-button>
</forge-multi-select-header>
`})}),`
`,e.jsx(t.h3,{id:"with-custom-text",children:"With Custom Text"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-multi-select-header text="5 rows selected for processing"></forge-multi-select-header>
`})}),`
`,e.jsx(t.h3,{id:"with-select-all-button",children:"With Select All Button"}),`
`,e.jsx(s,{of:p}),`
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
`]})]})}function W(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{W as default};
