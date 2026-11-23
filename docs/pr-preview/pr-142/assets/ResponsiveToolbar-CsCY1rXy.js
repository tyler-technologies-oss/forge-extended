import{j as e,M as s,T as r,C as a}from"./blocks-CmLPoNnd.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-B5-7u7q5.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-C-YN-eE_.js";import"./iframe-CEyoJGCy.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BqHHZyQE.js";import"./if-defined-eSz57CN-.js";import"./responsive-toolbar-BItruICU.js";import"./component-utils-xTTRT63M.js";import"./utils-b88vL7Ig.js";import"./ref-4_ui8yE2.js";import"./async-directive-BEktGq0z.js";import"./directive-CJw_OlP2.js";import"./index-CBSJ2TRK.js";import"./toolbar-BQKO2LhO.js";import"./constants-B19yLoP-.js";import"./index-DSgS9r4k.js";import"./with-default-aria-wByQ6wv-.js";import"./base-button-adapter-CaN2_8Rx.js";import"./focus-indicator-C-CA7k8r.js";import"./icon-BbEHwsUK.js";import"./index-_ZcP8bFw.js";import"./index-DoQqvjn8.js";import"./icon-button-Dtcqb8VK.js";import"./index-R_HVxVfY.js";import"./list-dropdown-aware-core-e6tZIU7d.js";import"./linear-progress-constants-9Icn1i_V.js";import"./list-CbSwbnM2.js";import"./popover-v-24eAq1.js";import"./with-longpress-listener-Dem-TUC1.js";import"./dismissible-stack-UIme5Hd9.js";import"./skeleton-constants-L_rJQcj2.js";import"./tooltip-WE6LANzM.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
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
`,e.jsx(l,{})]})}function G(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{G as default};
