import{j as e,M as r,T as l,C as n}from"./blocks-Bjf9K5da.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as c}from"./CustomArgTypes-Ga3FLWAW.js";import{M as a,D as d}from"./MultiSelectHeader.stories-GjJglNSJ.js";import{Demo as m}from"./BasicImplementation.stories-DzcfTjL8.js";import{Demo as h}from"./WithCustomText.stories-CXSf2fkS.js";import{Demo as p}from"./WithSelectAllButton.stories-BMKQmzTD.js";import"./iframe-iPkDJD_4.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CGPJUuL4.js";import"./with-default-aria-BwzNE_IN.js";import"./multi-select-header-BWfu1Hi-.js";import"./base-button-adapter-CJQngP5I.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./index-Crqsv3LL.js";import"./index-_SDZxuw-.js";import"./index-DMO0ZXv6.js";import"./index-CgalI0dF.js";function s(i){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(l,{}),`
`,e.jsxs(t.p,{children:["The Multi Select Header provides a consistent toolbar interface for displaying selection state and actions when multiple items are selected in data tables, lists, or grids. It builds upon the ",e.jsx(t.code,{children:"<forge-toolbar>"})," component with a distinctive light blue background to visually indicate an active selection state."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:"The Multi Select Header is designed to appear when users have selected one or more items from a collection. It displays custom text (typically showing selection count) and provides space for relevant actions like delete, export, or bulk operations."}),`
`,e.jsx(t.h3,{id:"basic-implementation",children:"Basic Implementation"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h3,{id:"with-custom-text",children:"With Custom Text"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h3,{id:"with-select-all-button",children:"With Select All Button"}),`
`,e.jsx(n,{of:p}),`
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
`]})]})}function X(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{X as default};
