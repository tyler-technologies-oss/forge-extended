import{j as e,M as s,T as r,C as a}from"./blocks-DZP928M8.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-CfHM9xO6.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-DxVs7vjU.js";import"./iframe-CYs4rUqc.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-Dp7mW3RG.js";import"./if-defined-Ds7xRwBU.js";import"./responsive-toolbar-BPIspo3T.js";import"./custom-element-CDYWBB4R.js";import"./utils-D4Tmth0h.js";import"./ref-CnBMewXI.js";import"./async-directive-BlkTbESp.js";import"./directive-CJw_OlP2.js";import"./index-DUZlX8T8.js";import"./toolbar-D5rv4FEn.js";import"./constants-BPzvPAwC.js";import"./index-Bga8EQCr.js";import"./with-default-aria-IIDqe1FM.js";import"./base-button-adapter-NVSd6npM.js";import"./focus-indicator-CYx5OX-M.js";import"./icon-0n1M6L10.js";import"./index-B59deXtE.js";import"./index-BUFnbwZi.js";import"./icon-button-DvWO3SvX.js";import"./index-CD57U0HP.js";import"./list-dropdown-aware-core-SZ81rRJB.js";import"./linear-progress-constants-B8PRsZXu.js";import"./list-YaOfIVb6.js";import"./popover-C-JuMD1I.js";import"./with-longpress-listener-Bj8Pz6MQ.js";import"./dismissible-stack-B5VulF68.js";import"./skeleton-constants-C5aIp4aK.js";import"./tooltip-BiQHgGlu.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
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
