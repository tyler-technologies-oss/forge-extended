import{j as t,M as s,T as a,C as n}from"./blocks-DuIon4JC.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-DCYdR7Io.js";import{S as d,D as c}from"./StructuredCard.stories-W1IKjfvv.js";import{WithTable as h}from"./WithTable.stories-C-9gSu2O.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-C87wPbXg.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-DXMu2iDS.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-BfcFK0ku.js";import"./iframe-hL2GryEj.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DZo-ugzr.js";import"./with-default-aria-Deb2R3fs.js";import"./constants-CfhAYYW-.js";import"./structured-card-BvZuJhZT.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-BiLfxf4d.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CU7yOUoB.js";import"./async-directive-djUPkaPj.js";import"./index-CHfE-mhc.js";import"./index-BKrikS_x.js";import"./base-button-adapter-BP-hQ-nz.js";import"./index-CXC0ACwP.js";import"./field-CI5JwHr1.js";import"./list-dropdown-aware-core-BAJZ3IAb.js";import"./linear-progress-constants-Rt6ieVoD.js";import"./list-IW8hwFty.js";import"./popover-rvrZHFWA.js";import"./with-longpress-listener-M5I-Y7w9.js";import"./dismissible-stack-CPJF0tnd.js";import"./skeleton-constants-dVJpzEQ5.js";import"./with-form-associated-2YgOtydM.js";import"./tooltip-DG2xWWNz.js";import"./divider-Bbo4y2rD.js";import"./circular-progress-CAJbCZ5W.js";import"./scaffold-DTkN6OCR.js";import"./toolbar-C_D1qs7Z.js";import"./index-Cbo-lifP.js";import"./decorators-DzpprPU5.js";import"./index-CjTsezGb.js";import"./index-BepSiPKD.js";function i(o){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
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
