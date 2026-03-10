import{j as t,M as s,T as a,C as e}from"./blocks-0-U3X4zr.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as d}from"./CustomArgTypes-7iOnmTWI.js";import{S as l,D as c}from"./StructuredCard.stories-CIRlZhZN.js";import{WithTable as h}from"./WithTable.stories-5MxdrxnD.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-IbgXrOg0.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-CVC5-mAQ.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-DbTsobWV.js";import{CardWithNoHeader as j}from"./CardWithNoHeader.stories-BNny139q.js";import{CardWithNoFooter as u}from"./CardWithNoFooter.stories-BR0bASfL.js";import"./iframe-BW_m5cCo.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CZbapTs6.js";import"./with-default-aria-DBaLB9kF.js";import"./constants-CbeTkNTW.js";import"./structured-card-CtJqLjDk.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CxvdJXlt.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DgHSE5Tn.js";import"./when-3fO0zp9C.js";import"./async-directive-D0v1LoxC.js";import"./index-BqFYUwgM.js";import"./index-C0oj3mpW.js";import"./base-button-adapter-DiaV7ZXR.js";import"./index-BnVZr6lo.js";import"./field-k7aOSV1i.js";import"./list-dropdown-aware-core-CQytQJJe.js";import"./linear-progress-constants-Br-kS9HK.js";import"./list-p7QBDxIo.js";import"./popover-CsB3WPl3.js";import"./with-longpress-listener-Bn4rMgw4.js";import"./dismissible-stack-B80liRG6.js";import"./skeleton-constants-ZWqrTz9U.js";import"./with-form-associated-4aAnhqGd.js";import"./tooltip-Cft_v8Um.js";import"./divider-BG0YpXAw.js";import"./circular-progress-OBxlAOqH.js";import"./scaffold-WBWtxcis.js";import"./toolbar-1NqBNh4m.js";import"./index-DEGxcSF1.js";import"./decorators-BsFZNwTU.js";import"./index-BWHJ-fP0.js";import"./index-BqAd8sPh.js";function i(n){const o={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l}),`
`,t.jsx(a,{}),`
`,t.jsxs(o.p,{children:["🚧 ",t.jsx(o.strong,{children:"Experimental"})," 🚧"]}),`
`,t.jsx(o.p,{children:"A pre-configured card layout optimized for common patterns in Tyler Cloud applications. Using a slot-based architecture, it provides designated areas for titles, actions, body content, and footer buttons—helping developers build consistent card UIs without manually configuring the same layout structure repeatedly. Ideal for table containers and self-contained content sections that require their own actions."}),`
`,t.jsx(e,{of:c}),`
`,t.jsx(o.h2,{id:"slots",children:"Slots"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"before-title"})," - Content before the title (e.g., back button, icon)"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"title"})," - Card title/heading"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"header-actions"})," - Actions in the header (e.g., menus, buttons)"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"body"})," - Main content area (expands to fill space)"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"footer-start"})," - Footer start content (e.g., pagination)"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"footer-secondary-action"})," - Secondary action button"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"footer-primary-action"})," - Primary action button"]}),`
`]}),`
`,t.jsxs(o.blockquote,{children:[`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Parent container must have a defined height for the card to fill available space."]}),`
`]}),`
`,t.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(o.h4,{id:"with-header-actions",children:"With Header Actions"}),`
`,t.jsxs(o.p,{children:["Add menus, buttons, or controls to the header using the ",t.jsx(o.code,{children:"header-actions"})," slot."]}),`
`,t.jsx(e,{of:x}),`
`,t.jsx(o.h4,{id:"detail-panel-with-back-navigation",children:"Detail Panel with Back Navigation"}),`
`,t.jsxs(o.p,{children:["Use the ",t.jsx(o.code,{children:"before-title"})," slot for back buttons or navigation icons."]}),`
`,t.jsx(e,{of:p}),`
`,t.jsx(o.h4,{id:"data-table-with-pagination",children:"Data Table with Pagination"}),`
`,t.jsxs(o.p,{children:["Set ",t.jsx(o.code,{children:"with-table"})," when the body contains a table. This removes body padding, sets gap to ",t.jsx(o.code,{children:"0"}),", and removes footer bottom padding for edge-to-edge table layouts."]}),`
`,t.jsx(e,{of:h}),`
`,t.jsx(o.h4,{id:"scrollable-content",children:"Scrollable Content"}),`
`,t.jsxs(o.p,{children:["Set ",t.jsx(o.code,{children:"--forge-structured-card-body-height"})," to a fixed value to enable scrollable body content."]}),`
`,t.jsx(e,{of:m}),`
`,t.jsx(o.h4,{id:"card-without-header",children:"Card Without Header"}),`
`,t.jsx(o.p,{children:"Simple cards that don't need a header section."}),`
`,t.jsx(e,{of:j}),`
`,t.jsx(o.h4,{id:"card-without-footer",children:"Card Without Footer"}),`
`,t.jsx(o.p,{children:"Cards that don't require footer actions."}),`
`,t.jsx(e,{of:u}),`
`,t.jsx(o.h2,{id:"api",children:"API"}),`
`,t.jsx(d,{})]})}function lt(n={}){const{wrapper:o}={...r(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(i,{...n})}):i(n)}export{lt as default};
