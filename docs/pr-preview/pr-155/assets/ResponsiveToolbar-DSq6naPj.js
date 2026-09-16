import{j as e,M as s,T as r,C as a}from"./blocks-C5hoWnHL.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-3XHTrCy6.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-DvE12p3r.js";import"./iframe-Dms13Zq_.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DztLpd-5.js";import"./if-defined-BenIPQ6a.js";import"./responsive-toolbar-D-dbmiMb.js";import"./custom-element-_XMhrF5O.js";import"./utils-CKW-Y7iA.js";import"./ref-BOOt7n8R.js";import"./async-directive-D4vy_6ok.js";import"./directive-CJw_OlP2.js";import"./index-B0--X1Xu.js";import"./toolbar-Dnk_NqpW.js";import"./constants-VXsM_ZgY.js";import"./index-BVWKZWHV.js";import"./with-default-aria-DIEogLWd.js";import"./base-button-adapter-DV_yZ0yv.js";import"./focus-indicator-B-JnphJ-.js";import"./icon-DOY4ZfAJ.js";import"./index-Qaod93hV.js";import"./index-DABgc_rx.js";import"./icon-button-DP_Lk4AN.js";import"./index-BLC_4Dgh.js";import"./list-dropdown-aware-core-BePoxm6n.js";import"./linear-progress-constants-BqJ0ARvk.js";import"./list-BsiMgXyj.js";import"./popover-DHNCHrQ2.js";import"./with-longpress-listener-YWKEXeKL.js";import"./dismissible-stack-BBpZ5CI_.js";import"./skeleton-constants-DgbBpjMr.js";import"./tooltip-CZHplz9r.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
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
