import{j as t,M as a,T as s,C as n}from"./blocks-oMDD4F4E.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-BY-QjPXb.js";import{S as c,D as d}from"./StructuredCard.stories-DOB48uON.js";import{WithTable as h}from"./WithTable.stories-BW4-SkxB.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-Blokv5DD.js";import{WorkflowStatusCard as m}from"./WorkflowStatusCard.stories-C2qjZW9c.js";import{ScrollableBodyContent as u}from"./ScrollableBodyContent.stories-DxVGuvjE.js";import"./iframe-DB7khuar.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-Dpb3S0wX.js";import"./with-default-aria-DgzfDd8k.js";import"./constants-BMWnaSmQ.js";import"./structured-card-CkyEsAk_.js";import"./style-map-BvuDHFBf.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-yFt3Bvs6.js";import"./when-3fO0zp9C.js";import"./async-directive-DqBYNgnJ.js";import"./index-DhCrqmz7.js";import"./index-C5QB_oV8.js";import"./index-Ca38EChD.js";import"./base-button-adapter-C-uPU8dd.js";import"./index-RO2oMO-W.js";import"./field-CoyAvxQ3.js";import"./list-dropdown-aware-core-BRo_LFnX.js";import"./linear-progress-constants-CY85v_hl.js";import"./list-8KuYcnc1.js";import"./popover-BIxd14mu.js";import"./with-longpress-listener-BjkQTcWc.js";import"./dismissible-stack-DeFK8Kbz.js";import"./skeleton-constants-n_uuRaNC.js";import"./with-form-associated-CCCZO_Vv.js";import"./tooltip-D5Dwqa-r.js";import"./select-BxDurEg4.js";import"./divider-H1n21uAZ.js";import"./circular-progress-0xM_ldm6.js";import"./scaffold-BCz7niqv.js";import"./index-6Sip5Tjo.js";import"./decorators-UG1vF1ly.js";import"./index-0747GUEQ.js";import"./index-58-Icikv.js";function r(o){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:c}),`
`,t.jsx(s,{}),`
`,t.jsxs(e.p,{children:["🚧 ",t.jsx(e.strong,{children:"Experimental"})," 🚧"]}),`
`,t.jsx(e.p,{children:"The Structured Card component provides a pre-configured card layout optimized for the most common card patterns in Tyler Cloud applications. Built on top of the Content Scaffold component, it combines a card shell with a structured header, body, and footer layout—providing designated slots for titles, actions, content, and buttons."}),`
`,t.jsx(e.p,{children:"This component is the recommended approach for building card-based UIs throughout Tyler Cloud applications. It ensures visual consistency and eliminates the repetitive work of manually configuring the same card structure for common patterns like data tables, detail panels, workflow cards, and form containers."}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.p,{children:"The Structured Card is the recommended way to build consistent card-based UIs throughout Tyler Cloud applications. It provides a standardized layout pattern that ensures visual consistency while eliminating the need to manually configure the same card structure repeatedly."}),`
`,t.jsx(e.h2,{id:"structure",children:"Structure"}),`
`,t.jsx(e.p,{children:"The component provides several slots for organizing content:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"before-title"})," - Optional slot for content before the title in the header (e.g., back button, icon)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"title"})," - Title/heading content for the card"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"header-actions"})," - Optional actions or controls displayed in the header (e.g., menus, icon buttons)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"body"})," - Main content area that expands to fill available space"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"footer-start"})," - Optional content at the start of the footer (e.g., pagination controls)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"footer-secondary-action"})," - Optional secondary action button (typically cancel or back)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"footer-primary-action"})," - Optional primary action button (typically save or submit)"]}),`
`]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Note:"})," For the Structured Card to properly fill available space, ensure its parent container has a defined height."]}),`
`]}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.h3,{id:"data-table-with-pagination",children:"Data Table with Pagination"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:"with-table"})," attribute when the body contains a table to remove default padding. Combine with header actions and footer pagination for complete data management UIs:"]}),`
`,t.jsx(n,{of:h}),`
`,t.jsx(e.h3,{id:"detail-panel-with-back-navigation",children:"Detail Panel with Back Navigation"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:"before-title"})," slot for back buttons or icons that appear before the title:"]}),`
`,t.jsx(n,{of:p}),`
`,t.jsx(e.h3,{id:"workflow-card-with-actions",children:"Workflow Card with Actions"}),`
`,t.jsx(e.p,{children:"Compact cards for workflow management and status updates:"}),`
`,t.jsx(n,{of:m}),`
`,t.jsx(e.h3,{id:"scrollable-content-with-fixed-height",children:"Scrollable Content with Fixed Height"}),`
`,t.jsx(e.p,{children:"Control the body height using the CSS custom property for scrollable content areas:"}),`
`,t.jsx(n,{of:u}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(l,{})]})}function rt(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{rt as default};
