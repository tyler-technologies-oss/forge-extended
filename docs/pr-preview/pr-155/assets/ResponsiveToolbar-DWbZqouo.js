import{j as e,M as s,T as r,C as a}from"./blocks-7q4wAfru.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-DqgHOdKX.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-B-IDnGs6.js";import"./iframe-CUmtllDg.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CWC4kzIU.js";import"./if-defined-BN5jKShr.js";import"./responsive-toolbar-Dk0EULuq.js";import"./custom-element-2Mrb3U_x.js";import"./utils-CNfRvMhc.js";import"./ref-CGMZ7Di9.js";import"./async-directive-B9BDXmta.js";import"./directive-CJw_OlP2.js";import"./index-V6C0Ot5w.js";import"./toolbar-C8PIq56b.js";import"./constants-DTntG4X6.js";import"./index-BqzDyQ2H.js";import"./with-default-aria-sX8zJ_2t.js";import"./base-button-adapter-BgBVsM7d.js";import"./focus-indicator-fO4DkNkz.js";import"./icon-BoaZPg9x.js";import"./index-CL41bM25.js";import"./index-CGaJoAh_.js";import"./icon-button-BERNpzaX.js";import"./index-DEAnuKYv.js";import"./list-dropdown-aware-core-C7lslI6Q.js";import"./linear-progress-constants-DLKacN3g.js";import"./list-fY0-hWWQ.js";import"./popover-iXOrT8w4.js";import"./with-longpress-listener-CIBU5OM7.js";import"./dismissible-stack-Dq8Wx7Op.js";import"./skeleton-constants-BMCz4G6W.js";import"./tooltip-B4GxzS7-.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
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
