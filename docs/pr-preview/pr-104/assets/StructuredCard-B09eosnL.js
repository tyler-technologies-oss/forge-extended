import{j as t,M as a,T as s,C as n}from"./blocks-D1kHe58C.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-DMu0gFMM.js";import{S as c,D as d}from"./StructuredCard.stories-tSrugPE0.js";import{WithTable as h}from"./WithTable.stories-DHNapJQA.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-CNo23mwN.js";import{WorkflowStatusCard as m}from"./WorkflowStatusCard.stories-Zu0xwlr9.js";import{ScrollableBodyContent as u}from"./ScrollableBodyContent.stories-DtBK8_KY.js";import"./iframe-4iFiJTyg.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CpSZRHbt.js";import"./with-default-aria-D2csPgel.js";import"./constants-Das5twfs.js";import"./structured-card-BxAM3PZ6.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-UEQKXORL.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CFKk3rrs.js";import"./index-BkNzMWyx.js";import"./index-C4Q9D1PT.js";import"./index-BwWO67qM.js";import"./base-button-adapter-DlfSI3Sy.js";import"./index-BxwW0c7l.js";import"./field-CbwI_Y1t.js";import"./list-dropdown-aware-core-Bh8iLnfj.js";import"./linear-progress-constants-D4Pu9t0-.js";import"./list-p_2rJArk.js";import"./popover-D_6XvdZv.js";import"./with-longpress-listener-Ci13eENt.js";import"./dismissible-stack-DIz5D_1_.js";import"./skeleton-constants-bPDlrQFI.js";import"./with-form-associated-PBFCvzuY.js";import"./tooltip-BJAtDOG4.js";import"./select-Bigt74ea.js";import"./divider-CbCyjs9T.js";import"./circular-progress-DOQXpkYq.js";import"./scaffold-CVxpwlO-.js";import"./index-nuWLtSYU.js";import"./decorators-C8peinN-.js";import"./index-DobcG04P.js";import"./index-t1ud0DDi.js";function r(o){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:c}),`
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
