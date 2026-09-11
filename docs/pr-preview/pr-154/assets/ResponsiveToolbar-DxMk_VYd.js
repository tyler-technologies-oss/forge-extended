import{j as e,M as s,T as r,C as a}from"./blocks-GUvA1fCu.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-GPFpWJQj.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-Brl6Meqx.js";import"./iframe-uYmMtFXe.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CuOcRuaU.js";import"./if-defined-CceKsZIR.js";import"./responsive-toolbar-qoVMVY0G.js";import"./custom-element-RnAbd9qQ.js";import"./utils-tJtJfoaq.js";import"./ref-BUi4Aay2.js";import"./async-directive-DqvxUZro.js";import"./directive-CJw_OlP2.js";import"./index-O7fHq4Q7.js";import"./toolbar-vwQAKoBO.js";import"./constants-CpZXP-xH.js";import"./index-BAQeSDAv.js";import"./with-default-aria-Ajc3U0-g.js";import"./base-button-adapter-81PK7MPV.js";import"./focus-indicator-nFJ3EteD.js";import"./button-constants-BspY-3bl.js";import"./icon-D3Ok13p2.js";import"./index-CRPDCMdI.js";import"./index-Dav54a0r.js";import"./icon-button-DbCPLHsE.js";import"./index-D5h3PDOK.js";import"./list-dropdown-aware-core-CPh5XRX1.js";import"./linear-progress-constants-Dz-MRBIH.js";import"./list-CbfRLLJl.js";import"./popover-DWJoAGkp.js";import"./with-longpress-listener-DRadE3GR.js";import"./dismissible-stack-BvYLNEYj.js";import"./skeleton-constants-Dsvlu_GE.js";import"./tooltip-D3av5xGC.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(r,{}),`
`,e.jsxs(o.p,{children:["The Responsive Toolbar dynamically adjusts your toolbar content to prevent overlap on smaller screens. It leverages a ",e.jsx(o.code,{children:"ResizeObserver"}),` to detect
when the title content collides with the end slot content. When an overlap is detected, the toolbar automatically hides the `,e.jsx(o.code,{children:"desktop-actions"}),` slot
and displays the `,e.jsx(o.code,{children:"mobile-actions"})," slot instead."]}),`
`,e.jsxs(o.p,{children:[`This approach eliminates the need for manually configuring breakpoints or container queries, ensuring a seamless adaptive experience without extra
calculations. Simply provide your `,e.jsx(o.code,{children:"desktop-actions"})," slot content and your ",e.jsx(o.code,{children:"mobile-actions"})," slot content, and the component handles the rest."]}),`
`,e.jsx(a,{of:p}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),` The responsive toolbar will not automatically create a mobile friendly version of your end slot content. You
should be providing markup for both the `,e.jsx(o.code,{children:"desktop-actions"})," slot and the ",e.jsx(o.code,{children:"mobile-actions"}),` slot, this lets you fine tune
the user experience based on available space.`]}),`
`]}),`
`,e.jsx(o.h3,{id:"why-a-responsive-toolbar",children:"Why a responsive toolbar?"}),`
`,e.jsxs(o.p,{children:[`The toolbar is a common source of layout issues in applications, often overlooked when adapting to different screen sizes. Managing multiple instances
of the primitive `,e.jsx(o.code,{children:"<forge-toolbar>"})," across a page can make breakpoint handling complex and inconsistent."]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"<forge-responsive-toolbar>"}),` solves this by automatically adjusting to various container sizes, preventing hidden content, overlapping text, and
broken layouts. It ensures a clean, readable UI without the need for manual breakpoint management.`]}),`
`,e.jsx(o.h3,{id:"when-to-use-a-responsive-toolbar",children:"When to use a responsive toolbar"}),`
`,e.jsx(o.p,{children:`If you know that your application could potentially be used on lower resolutions or mobile devices, and you're currently using toolbars with actions
in the end slot, then you should use a responsive toolbar instead.`}),`
`,e.jsx(o.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{})]})}function H(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{H as default};
