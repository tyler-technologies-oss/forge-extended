import{j as t,M as s,T as a,C as o}from"./blocks-YN5sL15g.js";import{useMDXComponents as i}from"./index-C_l8DU2D.js";import{C as d}from"./CustomArgTypes-DQ8FEYPe.js";import{S as l,D as c}from"./StructuredCard.stories-BMh2c79Q.js";import{WithTable as h}from"./WithTable.stories-ZruwkcMm.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-B4Uryflc.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-3FLYcpny.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-Cyiq1iSh.js";import{CardWithNoHeader as j}from"./CardWithNoHeader.stories-0WxPkLT8.js";import{CardWithNoFooter as u}from"./CardWithNoFooter.stories-BhICpacK.js";import"./iframe-_Oj7DJKB.js";import"./index-C69yvurJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-Dzd-yitq.js";import"./with-default-aria-C5iQh0up.js";import"./constants-DVgvuCGK.js";import"./structured-card-zfHJrzMN.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DNAd802M.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BY_dmDYi.js";import"./when-3fO0zp9C.js";import"./async-directive-T0NmPtJp.js";import"./index-CNskqjFE.js";import"./index-C6A5Q754.js";import"./base-button-adapter-D13kLxLh.js";import"./index-FKfsHv4Q.js";import"./field-DhV19Bar.js";import"./list-dropdown-aware-core-BeuyKzOC.js";import"./linear-progress-constants-Dr47Oomf.js";import"./list-BT_Cqkyr.js";import"./popover-yTzLStyM.js";import"./with-longpress-listener-DwRkTorF.js";import"./dismissible-stack-DK_VpXeh.js";import"./skeleton-constants-MIyL1xo7.js";import"./with-form-associated-DjpoFI_M.js";import"./tooltip-Cn58uIPa.js";import"./divider-D-y3A-eY.js";import"./circular-progress-D2sl05XS.js";import"./scaffold-Cnv-U5jD.js";import"./toolbar-D5ccKJIi.js";import"./index-DMozj5AA.js";import"./decorators-BgUPVGV4.js";import"./index-DCeG9Fq8.js";import"./index-BjD4oZpK.js";function r(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l}),`
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
