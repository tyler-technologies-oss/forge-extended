import{j as e,M as s,T as r,C as a}from"./blocks-CmVr_lod.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import"./index-BFVZ7Xg9.js";import{C as l,D as c}from"./ContentScaffold.stories-B6gKg_cX.js";import"./iframe-Bmpo7mK4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./content-scaffold-CeiNuTct.js";import"./constants-DWkFozGy.js";import"./when-3fO0zp9C.js";import"./async-directive-a_IyjKek.js";import"./directive-CJw_OlP2.js";import"./index-BinP8Lry.js";function o(t){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l,tags:["hidden"]}),`
`,e.jsx(r,{}),`
`,e.jsx(n.p,{children:"The Content Scaffold provides a structured layout for organizing content into distinct header, body, and footer sections. It uses CSS Grid to create a flexible container where the header and footer automatically size to their content, while the body expands to fill all available space."}),`
`,e.jsx(n.p,{children:"This component helps standardize the layout of cards, dialogs, side panels, and any UI pattern requiring a consistent header/body/footer structure. By providing a reusable layout primitive, it ensures visual consistency across your application while eliminating the need to recreate common layout patterns."}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"The Content Scaffold is ideal for creating consistent content layouts where you need a fixed header and/or footer with a scrollable body section. The component automatically handles the layout arrangement using CSS Grid, ensuring the body section takes up all remaining vertical space."}),`
`,e.jsx(n.h2,{id:"structure",children:"Structure"}),`
`,e.jsx(n.p,{children:"The component provides three slots for organizing content:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"header"})," - Optional header section that auto-sizes to its content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"body"})," - Main content area that expands to fill available space (1fr)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"footer"})," - Optional footer section that auto-sizes to its content"]}),`
`]}),`
`,e.jsx(n.p,{children:"All three slots are optional, allowing you to use only the sections you need for your specific use case."}),`
`,e.jsx(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsx(n.p,{children:"The Content Scaffold is particularly useful for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Detail panels with a title header and action footer"}),`
`,e.jsx(n.li,{children:"Card layouts with header toolbars and footer actions"}),`
`,e.jsx(n.li,{children:"Content areas that need a consistent three-section layout"}),`
`,e.jsx(n.li,{children:"Scrollable content regions with fixed headers and footers"}),`
`]}),`
`,e.jsx(n.h2,{id:"layout-behavior",children:"Layout Behavior"}),`
`,e.jsxs(n.p,{children:["The component uses ",e.jsx(n.code,{children:"display: grid"})," with ",e.jsx(n.code,{children:"grid-template-rows: auto 1fr auto"})," to arrange the three sections:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Header and footer use ",e.jsx(n.code,{children:"auto"})," sizing, taking only the space their content requires"]}),`
`,e.jsxs(n.li,{children:["Body uses ",e.jsx(n.code,{children:"1fr"}),", expanding to fill all remaining vertical space"]}),`
`,e.jsxs(n.li,{children:["The container is set to ",e.jsx(n.code,{children:"height: 100%"}),", inheriting height from its parent"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," For the Content Scaffold to properly fill available space, ensure its parent container has a defined height."]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"})]})}function v(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{v as default};
