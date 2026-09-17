import{j as e,M as s,T as r,C as a}from"./blocks-CM5MSK9_.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-DiNHeEDs.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-DS0AntFj.js";import"./iframe-CoLC7Ddj.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CfWWwVyd.js";import"./if-defined-CN0O7bt7.js";import"./responsive-toolbar-C6tAJ_gR.js";import"./custom-element-DFE_Cjil.js";import"./utils-C1eBehht.js";import"./ref-BjEH-elH.js";import"./async-directive-CZeC78Nz.js";import"./directive-CJw_OlP2.js";import"./index-Dk74H9c0.js";import"./toolbar-DVZ9tCKv.js";import"./constants-B-hZthFg.js";import"./index-X5IwznWq.js";import"./with-default-aria-DnVksJc2.js";import"./base-button-adapter-DLCL2B1S.js";import"./focus-indicator-FepI7CHW.js";import"./icon-BcT5yCfR.js";import"./index-C2CyKbRh.js";import"./index-BD78FBOp.js";import"./icon-button-BshidE3t.js";import"./index-Dlb7d9c4.js";import"./list-dropdown-aware-core-DOsW-JKg.js";import"./linear-progress-constants-D4tcHxS7.js";import"./list-DDqXXIUS.js";import"./popover-WW2lnk8B.js";import"./with-longpress-listener-DgQacVA_.js";import"./dismissible-stack-DKDJEgub.js";import"./skeleton-constants-WQa7xbY0.js";import"./tooltip-BkKktXcc.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
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
