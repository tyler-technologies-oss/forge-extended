import{j as t,M as s,T as a,C as n}from"./blocks-CG1JOfz0.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-DqeSKJ_d.js";import{S as d,D as c}from"./StructuredCard.stories-1xbb_y9u.js";import{WithTable as p}from"./WithTable.stories-Dbj4ksBj.js";import{WithBeforeTitleSlot as h}from"./WithBeforeTitleSlot.stories-DIYOlWgo.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-ByOSV_Kh.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-Bn6facCB.js";import"./iframe-Cdub68sG.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DUditD5s.js";import"./base-lit-element-Dvqq96TE.js";import"./constants-DgOXzPoc.js";import"./structured-card-C7rSo9uL.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CnkXNtxA.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-HGbODzIU.js";import"./when-3fO0zp9C.js";import"./lit-utils-BUazNZie.js";import"./async-directive-ClRcxluw.js";import"./index-Cm61bmp4.js";import"./index-BdqCOSPS.js";import"./base-button-adapter-BTEWft6w.js";import"./with-default-aria-GYIwOTw2.js";import"./a11y-utils-3T20ILqt.js";import"./icon-CvzxXqxi.js";import"./index-ChKzpunO.js";import"./field-CBmfuA5L.js";import"./list-dropdown-aware-core-aB0-BX8W.js";import"./linear-progress-constants-C_2BZ04B.js";import"./list-D-KS_517.js";import"./popover-DHi7SQ_-.js";import"./with-longpress-listener-DsIhSFSn.js";import"./dismissible-stack-BEWy4iBp.js";import"./skeleton-constants-DHj7p7Ja.js";import"./with-form-associated-OtLW6RY3.js";import"./tooltip-DQjis345.js";import"./divider-4RyM4iGY.js";import"./circular-progress-Co8Z9M-y.js";import"./scaffold-kg4Eu-18.js";import"./toolbar-D9Xk7ujx.js";import"./index-CfOkB06a.js";import"./decorators-B3rQJDfz.js";import"./index-FU_2li4r.js";import"./index-DRtXrPjV.js";function i(o){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
`,t.jsx(a,{}),`
`,t.jsxs(e.p,{children:["🚧 ",t.jsx(e.strong,{children:"Experimental"})," 🚧"]}),`
`,t.jsx(e.p,{children:"A pre-configured card layout optimized for common patterns in Tyler Cloud applications. Using a slot-based architecture, it provides designated areas for titles, actions, body content, and footer buttons—helping developers build consistent card UIs without manually configuring the same layout structure repeatedly. Ideal for table containers and self-contained content sections that require their own actions."}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(e.h2,{id:"slots",children:"Slots"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"before-title"})," - Content before the title (e.g., back button, icon)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"title"})," - Card title/heading"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"header-actions"})," - Actions in the header (e.g., menus, buttons)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"body"})," - Main content area (expands to fill space)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"footer-start"})," - Footer start content (e.g., pagination)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"footer-secondary-action"})," - Secondary action button"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"footer-primary-action"})," - Primary action button"]}),`
`]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Note:"})," Parent container must have a defined height for the card to fill available space."]}),`
`]}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.h4,{id:"with-header-actions",children:"With Header Actions"}),`
`,t.jsxs(e.p,{children:["Add menus, buttons, or controls to the header using the ",t.jsx(e.code,{children:"header-actions"})," slot."]}),`
`,t.jsx(n,{of:x}),`
`,t.jsx(e.h4,{id:"detail-panel-with-back-navigation",children:"Detail Panel with Back Navigation"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:"before-title"})," slot for back buttons or navigation icons."]}),`
`,t.jsx(n,{of:h}),`
`,t.jsx(e.h4,{id:"data-table-with-pagination",children:"Data Table with Pagination"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:'body-spacing="none"'})," attribute (or ",t.jsx(e.code,{children:"bodySpacing"})," property) for full-width content like tables. This removes body padding, sets gap to ",t.jsx(e.code,{children:"0"}),", and removes footer bottom padding to ensure content extends edge-to-edge. The data table demo below demonstrates the ",t.jsx(e.code,{children:"bodySpacing"})," property in action."]}),`
`,t.jsx(n,{of:p}),`
`,t.jsx(e.h4,{id:"scrollable-content",children:"Scrollable Content"}),`
`,t.jsxs(e.p,{children:["Set ",t.jsx(e.code,{children:"--forge-structured-card-body-height"})," to a fixed value to enable scrollable body content."]}),`
`,t.jsx(n,{of:m}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(l,{})]})}function dt(o={}){const{wrapper:e}={...r(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{dt as default};
