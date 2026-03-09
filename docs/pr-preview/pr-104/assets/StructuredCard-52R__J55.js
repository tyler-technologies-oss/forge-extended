import{j as t,M as s,T as a,C as e}from"./blocks-CJpeS4qa.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as d}from"./CustomArgTypes-Ctm-R4vS.js";import{S as l,D as c}from"./StructuredCard.stories-QNoQFEya.js";import{WithTable as h}from"./WithTable.stories-GPiZtX2v.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-COGGWO19.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-UBg72KCz.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-DlxgT4Ld.js";import{CardWithNoHeader as j}from"./CardWithNoHeader.stories-BAOiJ1JF.js";import{CardWithNoFooter as u}from"./CardWithNoFooter.stories-BbzLFHvq.js";import"./iframe-DXZ6s83A.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CZbapTs6.js";import"./with-default-aria-CMgLG5pf.js";import"./constants-BlXYQ2LB.js";import"./structured-card-BIscgXXW.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DqqWpVAk.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-5oEyEHQB.js";import"./when-3fO0zp9C.js";import"./async-directive-CUmTCJqj.js";import"./index-DWOWOpY5.js";import"./index-C-Sl4zbR.js";import"./base-button-adapter-C2tW8SUu.js";import"./index-_pc6oYc4.js";import"./field-Tqv7LEtp.js";import"./list-dropdown-aware-core-DR42ogtg.js";import"./linear-progress-constants-BW3SGhXE.js";import"./list-GUziOjnS.js";import"./popover-Bi3oyYlX.js";import"./with-longpress-listener-D6hRvJBE.js";import"./dismissible-stack-kZZw-oic.js";import"./skeleton-constants-DWrxBKpO.js";import"./with-form-associated-CbYHH2Nl.js";import"./tooltip-D4iKu-AK.js";import"./divider-nPCqf6Zu.js";import"./circular-progress-DszW7e_0.js";import"./scaffold-_OEGyp8J.js";import"./toolbar-BWoa5-Ja.js";import"./index-D3XE4yzi.js";import"./decorators-DVmMYtb2.js";import"./index-CBIECjPv.js";import"./index-CphXxBG7.js";function i(n){const o={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l}),`
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
