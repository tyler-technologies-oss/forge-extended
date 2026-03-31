import{j as t,M as s,T as a,C as o}from"./blocks-CFDNBWMM.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as d}from"./CustomArgTypes-BEY2dtWr.js";import{S as c,D as l}from"./StructuredCard.stories-9d_x3osR.js";import{WithTable as h}from"./WithTable.stories-CMqlydKW.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-Ci2BnjkY.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-jt54xG91.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-COHimhRB.js";import{CardWithNoHeader as j}from"./CardWithNoHeader.stories-DFtfpYvp.js";import{CardWithNoFooter as u}from"./CardWithNoFooter.stories-BWD7I1Yo.js";import"./iframe-BxKkWUAw.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DGEy--NH.js";import"./with-default-aria-DBafLuCR.js";import"./constants-Bb7Ji_uf.js";import"./structured-card-DVy3E9V-.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-BiMib_8G.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BwTR8TXa.js";import"./async-directive-BuvWFHC9.js";import"./index-6LNK74y6.js";import"./index-x8pHq2sF.js";import"./base-button-adapter-Citqn4_V.js";import"./index-Bzg87ibL.js";import"./field-BZ5ujhpS.js";import"./list-dropdown-aware-core-B0GGg6FR.js";import"./linear-progress-constants-DetBVwU9.js";import"./list-DknRKGZn.js";import"./popover-CVafd2lv.js";import"./with-longpress-listener-BgdtlSzr.js";import"./dismissible-stack-YlLJc74w.js";import"./skeleton-constants-7ESO1nHL.js";import"./with-form-associated-B8tYzFjU.js";import"./tooltip-G8Tuou5k.js";import"./divider-D-xkKXNI.js";import"./circular-progress-BEyB4nUv.js";import"./scaffold-BSHJiHnn.js";import"./toolbar-MYMqhbyN.js";import"./index-DOp-TA7O.js";import"./decorators-CXnVMgQf.js";import"./index-BepwhwEu.js";import"./index-ChLTTEib.js";function r(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(a,{}),`
`,t.jsxs(e.p,{children:["🚧 ",t.jsx(e.strong,{children:"Experimental"})," 🚧"]}),`
`,t.jsx(e.p,{children:"A pre-configured card layout optimized for common patterns in Tyler Cloud applications. Using a slot-based architecture, it provides designated areas for titles, actions, body content, and footer buttons—helping developers build consistent card UIs without manually configuring the same layout structure repeatedly. Ideal for table containers and self-contained content sections that require their own actions."}),`
`,t.jsx(o,{of:l}),`
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
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:'body-spacing="none"'})," attribute (or ",t.jsx(e.code,{children:"bodySpacing"})," property) for full-width content like tables. This removes body padding, sets gap to ",t.jsx(e.code,{children:"0"}),", and removes footer bottom padding to ensure content extends edge-to-edge. The data table demo below demonstrates the ",t.jsx(e.code,{children:"bodySpacing"})," property in action."]}),`
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
`,t.jsx(d,{})]})}function dt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{dt as default};
