import{j as t,M as a,T as s,C as n}from"./blocks-CmVr_lod.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-by8Y-NDB.js";import{S as c,D as d}from"./StructuredCard.stories-DQ6o03xj.js";import{WithTable as h}from"./WithTable.stories-ybJET0A3.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-CMxZd9si.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-BFLnCXPh.js";import"./iframe-Bmpo7mK4.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-o55E_MPm.js";import"./with-default-aria-CqHJAmJ_.js";import"./constants-DWkFozGy.js";import"./structured-card-COxCKnW9.js";import"./style-map-F9UlsvX2.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CeiNuTct.js";import"./when-3fO0zp9C.js";import"./async-directive-a_IyjKek.js";import"./index-BinP8Lry.js";import"./index-BJPpmeSU.js";import"./index-BwGY1Jp9.js";import"./base-button-adapter-A8-Yu6iA.js";import"./index-DW5czcRD.js";import"./field-B1PqNgbd.js";import"./list-dropdown-aware-core-DGY5Q-rr.js";import"./linear-progress-constants-B1Nw5llz.js";import"./list-DJPP6oMQ.js";import"./popover-QffRQ1-M.js";import"./with-longpress-listener-DO6A1saC.js";import"./dismissible-stack-XioNhfYM.js";import"./skeleton-constants-3OTTJm1s.js";import"./with-form-associated-CknqZQP3.js";import"./tooltip-B2oAtwak.js";import"./divider-DOO7Siug.js";import"./circular-progress-47ABoPiE.js";import"./scaffold-CtZOyGSr.js";import"./index-DPgfpJZF.js";import"./decorators-D1xcKosb.js";import"./index-DEmuYXEO.js";function i(o){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:c}),`
`,t.jsx(s,{}),`
`,t.jsxs(e.p,{children:["🚧 ",t.jsx(e.strong,{children:"Experimental"})," 🚧"]}),`
`,t.jsx(e.p,{children:"The Structured Card component provides a pre-configured card layout optimized for the most common card patterns in Tyler Cloud applications. Built on top of the Content Scaffold component, it combines a card shell with a structured header, body, and footer layout—providing designated slots for titles, actions, content, and buttons."}),`
`,t.jsx(e.p,{children:"This component is the recommended approach for building card-based UIs throughout Tyler Cloud applications. It ensures visual consistency and eliminates the repetitive work of manually configuring the same card structure for common patterns like data tables, detail panels, workflow cards, and form containers."}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.p,{children:"The Structured Card is the recommended way to build consistent card-based UIs throughout Tyler Cloud applications. It provides a standardized layout pattern that ensures visual consistency while eliminating the need to manually configure the same card structure repeatedly."}),`
`,t.jsx(e.h2,{id:"structure",children:"Structure"}),`
`,t.jsx(e.p,{children:"The component provides several slots for organizing content:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"before-title"})," - Optional slot for content before the title in the header (e.g., back button, icon)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"title"})," - Title/heading content for the card"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"header-actions"})," - Optional actions or controls displayed in the header (e.g., menus, icon buttons)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"body"})," - Main content area that expands to fill available space"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"footer-start"})," - Optional content at the start of the footer (e.g., pagination controls)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"footer-secondary-action"})," - Optional secondary action button (typically cancel or back)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"footer-primary-action"})," - Optional primary action button (typically save or submit)"]}),`
`]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Note:"})," For the Structured Card to properly fill available space, ensure its parent container has a defined height."]}),`
`]}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.h3,{id:"data-table-with-pagination",children:"Data Table with Pagination"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:"with-table"})," attribute when the body contains a table to remove default padding. Combine with header actions and footer pagination for complete data management UIs:"]}),`
`,t.jsx(n,{of:h}),`
`,t.jsx(e.h3,{id:"detail-panel-with-back-navigation",children:"Detail Panel with Back Navigation"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:"before-title"})," slot for back buttons or icons that appear before the title:"]}),`
`,t.jsx(n,{of:p}),`
`,t.jsx(e.h3,{id:"scrollable-content-with-fixed-height",children:"Scrollable Content with Fixed Height"}),`
`,t.jsx(e.p,{children:"Control the body height using the CSS custom property for scrollable content areas:"}),`
`,t.jsx(n,{of:m}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(l,{})]})}function tt(o={}){const{wrapper:e}={...r(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{tt as default};
