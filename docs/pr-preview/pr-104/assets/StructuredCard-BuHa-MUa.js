import{j as t,M as s,T as a,C as n}from"./blocks-BW4u9Lsg.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-BunTHmWN.js";import{S as d,D as c}from"./StructuredCard.stories-DS9tKTq9.js";import{WithTable as h}from"./WithTable.stories-5Qpk-VAb.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-Dk-SZZqD.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-D3dl1k7n.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-D2L4y0C6.js";import"./iframe-D57lnzun.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-T1MgWK6d.js";import"./with-default-aria-DA-8eCL_.js";import"./constants-DdZyzDPp.js";import"./structured-card-BsBd1gza.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-x4fM8xZp.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-rFyuqOke.js";import"./async-directive-SbbwZGlH.js";import"./index-DvvphVy4.js";import"./index-D4nVRwkL.js";import"./base-button-adapter-w5D8OH20.js";import"./index-Cumu2rFi.js";import"./field-BWnlWapF.js";import"./list-dropdown-aware-core-zBB1cIWc.js";import"./linear-progress-constants-CMTyE2ci.js";import"./list-jX-2e4kn.js";import"./popover-B8X_r6vR.js";import"./with-longpress-listener-XGr-ra-8.js";import"./dismissible-stack-Rwd4Acpy.js";import"./skeleton-constants-wc_Qw8Ua.js";import"./with-form-associated-BG03-zjz.js";import"./tooltip-DL3z5gV7.js";import"./divider-Cy3mGc1-.js";import"./circular-progress-RUZAHBmZ.js";import"./scaffold-D4ckkdXg.js";import"./toolbar-qOt-92_m.js";import"./index-DZ8fPbc3.js";import"./decorators-CFSCtWt1.js";import"./index-ByZxb3fy.js";import"./index-in1U1ea3.js";function i(o){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
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
`,t.jsx(l,{})]})}function it(o={}){const{wrapper:e}={...r(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{it as default};
