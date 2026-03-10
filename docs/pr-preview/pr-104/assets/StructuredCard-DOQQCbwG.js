import{j as t,M as s,T as a,C as o}from"./blocks-BV3b0Tgr.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as d}from"./CustomArgTypes-D2FBIvOO.js";import{S as l,D as c}from"./StructuredCard.stories-CNjn9bw9.js";import{WithTable as h}from"./WithTable.stories-C-RRFKMY.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-CMKOWPse.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-BNvMWoAQ.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-JOZd9ii1.js";import{CardWithNoHeader as j}from"./CardWithNoHeader.stories-BSXxZKon.js";import{CardWithNoFooter as u}from"./CardWithNoFooter.stories-DIDKsd1k.js";import"./iframe-B3gZ3oFh.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-FYS0o6zg.js";import"./with-default-aria-8W6OebjG.js";import"./constants-DKJckIIi.js";import"./structured-card-CqGeT56q.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CNSrAlmG.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D49A_AiZ.js";import"./when-3fO0zp9C.js";import"./async-directive-CZOyWRwl.js";import"./index-_sBZfrH2.js";import"./index-Bs9qPRnA.js";import"./base-button-adapter-A_AS9Ok9.js";import"./index-vqvgwLx9.js";import"./field-pwnMWLqs.js";import"./list-dropdown-aware-core-CaHcmA3e.js";import"./linear-progress-constants-eX-n7kZr.js";import"./list-DGvK65VO.js";import"./popover-BE8ofYnd.js";import"./with-longpress-listener-BKZaPZ6b.js";import"./dismissible-stack-BkroU71o.js";import"./skeleton-constants-B4TeotcN.js";import"./with-form-associated-ViQCdah7.js";import"./tooltip-CFquBHrF.js";import"./divider-DMX76Vds.js";import"./circular-progress-BYZPgaiz.js";import"./scaffold-DEdccEw0.js";import"./toolbar-Ct8NUfb3.js";import"./index-y8qBiPSR.js";import"./decorators-BR9xhnCs.js";import"./index-DyV16bHf.js";import"./index-qMA_u40J.js";function r(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l}),`
`,t.jsx(a,{}),`
`,t.jsxs(e.p,{children:["🚧 ",t.jsx(e.strong,{children:"Experimental"})," 🚧"]}),`
`,t.jsx(e.p,{children:"A pre-configured card layout optimized for common patterns in Tyler Cloud applications. Using a slot-based architecture, it provides designated areas for titles, actions, body content, and footer buttons—helping developers build consistent card UIs without manually configuring the same layout structure repeatedly. Ideal for table containers and self-contained content sections that require their own actions."}),`
`,t.jsx(o,{of:c}),`
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
`,t.jsx(o,{of:x}),`
`,t.jsx(e.h4,{id:"detail-panel-with-back-navigation",children:"Detail Panel with Back Navigation"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:"before-title"})," slot for back buttons or navigation icons."]}),`
`,t.jsx(o,{of:p}),`
`,t.jsx(e.h4,{id:"data-table-with-pagination",children:"Data Table with Pagination"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:"full-width"})," attribute (or ",t.jsx(e.code,{children:"fullWidth"})," property) for full-width content like tables. This removes body padding, sets gap to ",t.jsx(e.code,{children:"0"}),", and removes footer bottom padding to ensure content extends edge-to-edge. The data table demo below demonstrates the ",t.jsx(e.code,{children:"fullWidth"})," property in action."]}),`
`,t.jsx(o,{of:h}),`
`,t.jsx(e.h4,{id:"scrollable-content",children:"Scrollable Content"}),`
`,t.jsxs(e.p,{children:["Set ",t.jsx(e.code,{children:"--forge-structured-card-body-height"})," to a fixed value to enable scrollable body content."]}),`
`,t.jsx(o,{of:m}),`
`,t.jsx(e.h4,{id:"card-without-header",children:"Card Without Header"}),`
`,t.jsx(e.p,{children:"Simple cards that don't need a header section."}),`
`,t.jsx(o,{of:j}),`
`,t.jsx(e.h4,{id:"card-without-footer",children:"Card Without Footer"}),`
`,t.jsx(e.p,{children:"Cards that don't require footer actions."}),`
`,t.jsx(o,{of:u}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(d,{})]})}function lt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{lt as default};
