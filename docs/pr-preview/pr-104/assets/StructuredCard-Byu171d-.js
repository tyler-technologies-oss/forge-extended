import{j as t,M as s,T as a,C as o}from"./blocks-thcYCzUI.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as d}from"./CustomArgTypes-AB8iWXTs.js";import{S as c,D as l}from"./StructuredCard.stories-DDRU62Ti.js";import{WithTable as h}from"./WithTable.stories-CZ2pnhYV.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-r22vixFL.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-CMQyQVml.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-CYLWeZXh.js";import{CardWithNoHeader as j}from"./CardWithNoHeader.stories-DQU4lyGO.js";import{CardWithNoFooter as u}from"./CardWithNoFooter.stories-BCqqt0-E.js";import"./iframe-BalPjLB1.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-ad5kjpwN.js";import"./with-default-aria-CgGVtW00.js";import"./constants-DrpErmGl.js";import"./structured-card-BvG3HOy4.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-mLaARIl1.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CTIbYiXK.js";import"./async-directive-9-HjHcYf.js";import"./index-NqreQ29v.js";import"./index-BptDatkp.js";import"./base-button-adapter-DLO7aBOX.js";import"./index-X2uJkQIO.js";import"./field-BU-j4FoR.js";import"./list-dropdown-aware-core-DCxaD-ga.js";import"./linear-progress-constants-DZ8ksEjx.js";import"./list-CKAuIEiS.js";import"./popover-BDsUKBi5.js";import"./with-longpress-listener-DtUx7B94.js";import"./dismissible-stack-Cfgp7kp2.js";import"./skeleton-constants-Cj3miX8f.js";import"./with-form-associated-CXBg4FRW.js";import"./tooltip-BcnJC-kf.js";import"./divider-8j1SECf4.js";import"./circular-progress-Cw4fMtmP.js";import"./scaffold-DL2cEzcD.js";import"./toolbar-BEQJBx8-.js";import"./index-kk4BV0dI.js";import"./decorators-BOsrHm3p.js";import"./index-ytUfYw-W.js";import"./index-DU1Uca0X.js";function r(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
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
