import{j as t,M as s,T as a,C as n}from"./blocks-CPDuGWkH.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-B4xb3ML1.js";import{S as d,D as c}from"./StructuredCard.stories-B716ySIL.js";import{WithTable as h}from"./WithTable.stories-Cj5DzQjz.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-B3jPmobk.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-BmUFh3xN.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-CIBu0wFo.js";import"./iframe-DwMgCYtb.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-GWARLwl4.js";import"./with-default-aria-CfDmXVrN.js";import"./constants-DwvutvYf.js";import"./structured-card-DmcbwF3V.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BO8v6kK4.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BNlEXA4r.js";import"./when-3fO0zp9C.js";import"./lit-utils-Dtck85ND.js";import"./async-directive-DIhw622m.js";import"./index-Ca5FURsm.js";import"./index-B6Lj0VmS.js";import"./base-button-adapter-mogBfOAi.js";import"./focus-indicator-DiukMVQo.js";import"./icon-DoJXhL7p.js";import"./index-BcDQlmui.js";import"./field-Bf2RMnNx.js";import"./list-dropdown-aware-core-BonT3z6l.js";import"./linear-progress-constants-D_HycEkg.js";import"./list-BOutDYRr.js";import"./popover-DwonYCL9.js";import"./with-longpress-listener-BwNJhBSA.js";import"./dismissible-stack-siMKySCy.js";import"./skeleton-constants-BFB-SZew.js";import"./with-form-associated-DExLm3tB.js";import"./tooltip-C8esL34X.js";import"./divider-OFLHGciu.js";import"./circular-progress-Cw1RelTu.js";import"./scaffold-Cjd6W0b-.js";import"./toolbar-DsKnEXbg.js";import"./index-ejc1wpxF.js";import"./decorators-m6SO4lg7.js";import"./index-D0ij77G6.js";import"./index-bFeyiobf.js";function i(o){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
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
`,t.jsx(n,{of:p}),`
`,t.jsx(e.h4,{id:"data-table-with-pagination",children:"Data Table with Pagination"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:'body-spacing="none"'})," attribute (or ",t.jsx(e.code,{children:"bodySpacing"})," property) for full-width content like tables. This removes body padding, sets gap to ",t.jsx(e.code,{children:"0"}),", and removes footer bottom padding to ensure content extends edge-to-edge. The data table demo below demonstrates the ",t.jsx(e.code,{children:"bodySpacing"})," property in action."]}),`
`,t.jsx(n,{of:h}),`
`,t.jsx(e.h4,{id:"scrollable-content",children:"Scrollable Content"}),`
`,t.jsxs(e.p,{children:["Set ",t.jsx(e.code,{children:"--forge-structured-card-body-height"})," to a fixed value to enable scrollable body content."]}),`
`,t.jsx(n,{of:m}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(l,{})]})}function lt(o={}){const{wrapper:e}={...r(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{lt as default};
