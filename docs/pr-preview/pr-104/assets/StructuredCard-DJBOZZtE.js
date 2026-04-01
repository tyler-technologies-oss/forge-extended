import{j as t,M as s,T as a,C as o}from"./blocks-nR8wDWqD.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as d}from"./CustomArgTypes-C_EdOOMQ.js";import{S as c,D as l}from"./StructuredCard.stories-CM-VAmLH.js";import{WithTable as h}from"./WithTable.stories-ikTs24rO.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-Bsk1n0ji.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-B_58uxuL.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-z4jl70MT.js";import{CardWithNoHeader as j}from"./CardWithNoHeader.stories-BhCT4wmx.js";import{CardWithNoFooter as u}from"./CardWithNoFooter.stories-BZYE4nXb.js";import"./iframe-Xxe9UVZ_.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CuwL6c5V.js";import"./with-default-aria-C2Is6Fdf.js";import"./constants-qkP8fwFy.js";import"./structured-card-6YMtrnKW.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-Dm_BWqA9.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DYFjpwTR.js";import"./async-directive-CdDLLNN1.js";import"./index-CN0IzmLW.js";import"./index-C7Ibue3p.js";import"./base-button-adapter-C1g0uc2x.js";import"./index-Dq5j3USq.js";import"./field-aBR0VJHj.js";import"./list-dropdown-aware-core-bl0-YSkH.js";import"./linear-progress-constants-DuZrb91Y.js";import"./list-C3P2FDpJ.js";import"./popover-B6DcpAwH.js";import"./with-longpress-listener-I4U8Fhc5.js";import"./dismissible-stack-CJwW0dIE.js";import"./skeleton-constants-BJAY2Ard.js";import"./with-form-associated-CKZBkQan.js";import"./tooltip-Dh8kYa2V.js";import"./divider-DnXUwiSR.js";import"./circular-progress-DSB7svzb.js";import"./scaffold-DZGFU-5F.js";import"./toolbar-D9zYUxpJ.js";import"./index-CFaM97qN.js";import"./decorators-BsTXl0Jb.js";import"./index-PwrbrF7s.js";import"./index-48tKd3T0.js";function r(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
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
