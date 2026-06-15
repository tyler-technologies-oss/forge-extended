import{j as e,M as i,T as r,C as a}from"./blocks-B5tY0qEs.js";import{useMDXComponents as s}from"./index-DNFFXgUn.js";import{C as l}from"./CustomArgTypes-ClUx8Ojk.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-DfvAYE4u.js";import"./iframe-BMmxjS7K.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CRcBmDtb.js";import"./if-defined-B8yDC-v8.js";import"./responsive-toolbar-Bd6l2_Ut.js";import"./constants-DxKBK66z.js";import"./with-default-aria-DUm9cFDb.js";import"./ref-KhGHN0Ac.js";import"./async-directive-C8AHgdeZ.js";import"./directive-CJw_OlP2.js";import"./index-CCdWMFaE.js";import"./toolbar-CHfb1Iys.js";import"./index-CmABe4zC.js";import"./base-button-adapter-DVfHKjLr.js";import"./focus-indicator-BZurIPmT.js";import"./icon-DHP83XnC.js";import"./index-BAIeuXSc.js";import"./index-CuaVTp8w.js";import"./icon-button-B-lwPuxH.js";import"./index-1PYaxWHl.js";import"./list-dropdown-aware-core-W9Dp6JBL.js";import"./linear-progress-constants-CdId7nyJ.js";import"./list-CcBQKVC4.js";import"./popover-CbV6AHdo.js";import"./position-utils-Dg6KB9wi.js";import"./with-longpress-listener-ZBxJ2PG2.js";import"./dismissible-stack-BP6jnQvR.js";import"./skeleton-constants-BQoiQmIz.js";import"./tooltip-CX1jV9vj.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
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
`,e.jsx(l,{})]})}function B(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{B as default};
