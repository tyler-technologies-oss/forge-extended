import{j as t,M as s,T as a,C as o}from"./blocks-Bp06V0R0.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as d}from"./CustomArgTypes-BodajyIM.js";import{S as l,D as c}from"./StructuredCard.stories-C3hbXdA4.js";import{WithTable as h}from"./WithTable.stories-JlWucIKD.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-CjQUWa6R.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-jI3hXp0r.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-xs5RrU7e.js";import{CardWithNoHeader as j}from"./CardWithNoHeader.stories-ColdLAcU.js";import{CardWithNoFooter as u}from"./CardWithNoFooter.stories-Cy7G1-bJ.js";import"./iframe-C3eZW3rL.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CZbapTs6.js";import"./with-default-aria-DKAeA4QY.js";import"./constants-DW0rNuKk.js";import"./structured-card-CmIm_S-0.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-XX9qvObf.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BIHIHvoc.js";import"./when-3fO0zp9C.js";import"./async-directive-CMnc_OKY.js";import"./index-BE4hfNLg.js";import"./index-BPl-BkRA.js";import"./base-button-adapter-D8cvGOi4.js";import"./index-VzNzZ2-9.js";import"./field-DEttI4Y8.js";import"./list-dropdown-aware-core-BW0Q0tnO.js";import"./linear-progress-constants-CNNgNj3W.js";import"./list-Dvkl_B8J.js";import"./popover-Cp97zB2X.js";import"./with-longpress-listener-vy6g_AD8.js";import"./dismissible-stack-C_kutC66.js";import"./skeleton-constants-I_Cs1tVo.js";import"./with-form-associated-CtbmfPW_.js";import"./tooltip-DkzHlAeP.js";import"./divider-B2KFNC9Z.js";import"./circular-progress-BhP5ArPC.js";import"./scaffold-COFZw97z.js";import"./toolbar-DmZBOJwd.js";import"./index-DTVNQNM0.js";import"./decorators-PWTArte_.js";import"./index-LnuKR7pm.js";import"./index-Bk9fwFW8.js";function i(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l}),`
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
`,t.jsxs(e.p,{children:["Set ",t.jsx(e.code,{children:"with-table"})," when the body contains a table. This removes body padding, sets gap to ",t.jsx(e.code,{children:"0"}),", and removes footer bottom padding for edge-to-edge table layouts."]}),`
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
`,t.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Header includes a bottom border separator"}),`
`,t.jsxs(e.li,{children:["Title receives automatic left margin when ",t.jsx(e.code,{children:"before-title"})," slot is empty"]}),`
`,t.jsx(e.li,{children:"All spacing uses Forge design tokens"}),`
`]}),`
`,t.jsx(e.h2,{id:"css-custom-properties",children:"CSS Custom Properties"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:"--forge-structured-card-body-height"})," - Body height. Defaults to ",t.jsx(e.code,{children:"auto"}),". Set a fixed value to enable scrolling."]}),`
`]}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(d,{})]})}function lt(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{lt as default};
