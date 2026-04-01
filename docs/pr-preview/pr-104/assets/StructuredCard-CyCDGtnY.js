import{j as t,M as s,T as a,C as n}from"./blocks-D5eN1GXX.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-CUEfE2kf.js";import{S as d,D as c}from"./StructuredCard.stories-FuvaNNKB.js";import{WithTable as h}from"./WithTable.stories-DQ5yoyNT.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-BJtuslnl.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-BwBx_xo-.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-DbzCdscu.js";import"./iframe-CDvSdWWu.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CW72Ls3l.js";import"./with-default-aria-CBP-syo7.js";import"./constants-CS0ZySMU.js";import"./structured-card-PoeIVTDs.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-D4mmuwrz.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-9IX-PmQS.js";import"./async-directive-Bh71c5iw.js";import"./index-BVmhvLCV.js";import"./index-HlEvWwkw.js";import"./base-button-adapter-Dmdnsfvc.js";import"./index-C1vF6rMp.js";import"./field-kUIyFpRM.js";import"./list-dropdown-aware-core-Brv9a247.js";import"./linear-progress-constants-DXwKGaeA.js";import"./list-BkysfUrb.js";import"./popover-DRNF2Vi5.js";import"./with-longpress-listener-Bxehasly.js";import"./dismissible-stack-I7wDWF7Y.js";import"./skeleton-constants-B7PlJ7Dz.js";import"./with-form-associated-CgHn5sPe.js";import"./tooltip-tUzCr1ZG.js";import"./divider-B76ukrN4.js";import"./circular-progress-gtxiHTJt.js";import"./scaffold-xdLfmZ2M.js";import"./toolbar-C5KnbF2F.js";import"./index-uTDamdRs.js";import"./decorators-bWwebubM.js";import"./index-bAgFc5LE.js";import"./index-Dpm70xyy.js";function i(o){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
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
