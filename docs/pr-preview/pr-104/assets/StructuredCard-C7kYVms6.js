import{j as t,M as s,T as a,C as o}from"./blocks-BkD1pHQ7.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-B6k_cI7N.js";import{S as c,D as d}from"./StructuredCard.stories-apNayjsq.js";import{WithTable as h}from"./WithTable.stories-CqRYo6BM.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-BAzlPgD_.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-CO-jCMrI.js";import"./iframe-Ca4_EFk3.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-Cn2Jz5Lo.js";import"./with-default-aria-jbFF_u3Y.js";import"./constants-jtdDfxOl.js";import"./structured-card-BfF83TJC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CONCp-DB.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-N7Izrb8t.js";import"./when-3fO0zp9C.js";import"./async-directive-B1n48Go4.js";import"./index-c_rMPOME.js";import"./index-CP2J4JFd.js";import"./index-DV0c8yBv.js";import"./base-button-adapter-P6h1VIma.js";import"./index-Df7d_uCa.js";import"./field-ByzWhCsL.js";import"./list-dropdown-aware-core-Cj9BXPQn.js";import"./linear-progress-constants-BcBuGxn0.js";import"./list-D3U5XtsL.js";import"./popover-DUJKWiPv.js";import"./with-longpress-listener-BdFxB5OO.js";import"./dismissible-stack-DMEGKUAi.js";import"./skeleton-constants-CJz3eXQJ.js";import"./with-form-associated-B1KlsXmx.js";import"./tooltip-KWOnE55x.js";import"./divider-GsJwSfFG.js";import"./circular-progress-sf5aTAcl.js";import"./scaffold-CgsthEe0.js";import"./index-DppkHxwl.js";import"./decorators-DfPxFmbz.js";import"./index-Cm9lK_lU.js";function i(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(a,{}),`
`,t.jsxs(e.p,{children:["🚧 ",t.jsx(e.strong,{children:"Experimental"})," 🚧"]}),`
`,t.jsx(e.p,{children:"The Structured Card component provides a pre-configured card layout optimized for the most common card patterns in Tyler Cloud applications. Built on top of the Content Scaffold component, it combines a card shell with a structured header, body, and footer layout—providing designated slots for titles, actions, content, and buttons."}),`
`,t.jsx(e.p,{children:"This component is the recommended approach for building card-based UIs throughout Tyler Cloud applications. It ensures visual consistency and eliminates the repetitive work of manually configuring the same card structure for common patterns like data tables, detail panels, workflow cards, and form containers."}),`
`,t.jsx(o,{of:d}),`
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
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:"with-table"})," attribute when the body contains a table. This attribute:"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Removes the default body padding to allow tables to extend edge-to-edge"}),`
`,t.jsxs(e.li,{children:["Sets the gap between sections to ",t.jsx(e.code,{children:"0"})," for a seamless table integration"]}),`
`,t.jsx(e.li,{children:"Removes the footer's bottom padding for consistent spacing"}),`
`]}),`
`,t.jsx(e.p,{children:"This ensures tables fit naturally within the card while maintaining proper alignment with the header and footer elements."}),`
`,t.jsx(o,{of:h}),`
`,t.jsx(e.h3,{id:"detail-panel-with-back-navigation",children:"Detail Panel with Back Navigation"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:"before-title"})," slot for back buttons or icons that appear before the title:"]}),`
`,t.jsx(o,{of:p}),`
`,t.jsx(e.h3,{id:"scrollable-content-with-fixed-height",children:"Scrollable Content with Fixed Height"}),`
`,t.jsx(e.p,{children:"Control the body height using the CSS custom property for scrollable content areas:"}),`
`,t.jsx(o,{of:m}),`
`,t.jsx(e.h2,{id:"layout-details",children:"Layout Details"}),`
`,t.jsx(e.p,{children:"The Structured Card automatically handles spacing and layout:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"The header includes a bottom border to visually separate it from the body content"}),`
`,t.jsxs(e.li,{children:["When the ",t.jsx(e.code,{children:"before-title"})," slot is empty, the title automatically receives left margin for proper spacing"]}),`
`,t.jsx(e.li,{children:"The footer provides separate areas for secondary and primary actions with appropriate spacing"}),`
`,t.jsx(e.li,{children:"All spacing uses Forge design tokens to ensure consistency across the application"}),`
`]}),`
`,t.jsx(e.h2,{id:"css-custom-properties",children:"CSS Custom Properties"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:"--forge-structured-card-body-height"})," - Controls the height of the body content. Defaults to ",t.jsx(e.code,{children:"auto"}),". Set this to a fixed value to enable scrollable content."]}),`
`]}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(l,{})]})}function nt(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{nt as default};
