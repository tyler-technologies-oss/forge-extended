import{j as t,M as s,T as a,C as n}from"./blocks-DIm017Bc.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-CaxJiTNx.js";import{S as d,D as c}from"./StructuredCard.stories-BSIMrvqF.js";import{WithTable as h}from"./WithTable.stories-CHqu-nq4.js";import{WithBeforeTitleSlot as p}from"./WithBeforeTitleSlot.stories-CF_4aUzK.js";import{ScrollableBodyContent as m}from"./ScrollableBodyContent.stories-PaVYUFiI.js";import{WithHeaderActions as x}from"./WithHeaderActions.stories-BTTrWFhI.js";import"./iframe-NwOXt5PQ.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-C2QRyfwd.js";import"./with-default-aria-BWByo8DH.js";import"./constants-DIc64ebK.js";import"./structured-card-BXvOTVDH.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-DTRcdMv-.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-J4JXRIIR.js";import"./async-directive-CbsTFFCg.js";import"./index-D3TiFRY1.js";import"./index-BL-Q2rop.js";import"./base-button-adapter-C87ZiUDG.js";import"./index-kJbDEwPY.js";import"./field-B9luxlMN.js";import"./list-dropdown-aware-core-2mZ6bd9k.js";import"./linear-progress-constants-LhDrC0NS.js";import"./list-Cebecn-8.js";import"./popover-BVgRB_ig.js";import"./with-longpress-listener-2uU0m6-c.js";import"./dismissible-stack-DZh-VEnw.js";import"./skeleton-constants-DlwCpT_P.js";import"./with-form-associated-0PE0byYq.js";import"./tooltip-9ELd1Nf9.js";import"./divider-DjZmYh1j.js";import"./circular-progress-XiK79wFW.js";import"./scaffold-BIzHmLRS.js";import"./toolbar-BeQnPoZu.js";import"./index-n9pwQX00.js";import"./decorators-BanK_np2.js";import"./index-Bpy3ApAp.js";import"./index-BkNHCwpn.js";function i(o){const e={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
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
