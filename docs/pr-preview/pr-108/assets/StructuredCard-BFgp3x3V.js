import{j as t,M as s,T as a,C as n}from"./blocks-BOor0MWG.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-D9xbSrlI.js";import{S as d,D as c}from"./StructuredCard.stories-DrgEHCGe.js";import{WithTable as p}from"./WithTable.stories-BrJ7yYA7.js";import{WithBeforeTitleSlot as h}from"./WithBeforeTitleSlot.stories-DlXb7FhU.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-DgB_p_jX.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-uAMqR_dt.js";import"./iframe-D-b265Qe.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-C1_75Mco.js";import"./base-lit-element-CHK6hcJb.js";import"./constants-BZeAcB7O.js";import"./structured-card-CZbeOORn.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BlNvkze3.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-xdtsj-m2.js";import"./when-3fO0zp9C.js";import"./lit-utils-Dp8OgWBi.js";import"./async-directive-Ddbstadh.js";import"./index-ffW596Mg.js";import"./index-j42Td1BD.js";import"./base-button-adapter-Cf7Momcl.js";import"./with-default-aria-CfYAYNVS.js";import"./a11y-utils-BEJ5Kgpe.js";import"./icon-CAmrsB6e.js";import"./index-Db7SBkgZ.js";import"./field-Aj93D46M.js";import"./list-dropdown-aware-core-CBYCFNne.js";import"./linear-progress-constants-BJ7z4uC0.js";import"./list-DNfzCp7d.js";import"./popover-BmoUkBFq.js";import"./with-longpress-listener-B8HAkEoO.js";import"./dismissible-stack-vo2DHQrS.js";import"./skeleton-constants-DSdPkdlv.js";import"./with-form-associated-D96OSYiz.js";import"./tooltip-BRacqxYw.js";import"./divider-DprdIxnR.js";import"./circular-progress-CNhoy90k.js";import"./scaffold-DNVMkTmn.js";import"./toolbar-DwWZojgp.js";import"./index-DatREZyY.js";import"./decorators-owxWNVv9.js";import"./index-CvSZODRs.js";import"./index-D8JZA6f0.js";function i(o){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
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
