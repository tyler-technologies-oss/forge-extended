import{j as e,M as i,T as r,C as a}from"./blocks-CI4saWeo.js";import{useMDXComponents as s}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-D5A_daf5.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-p-kl6Okz.js";import"./iframe-Dl9rccmp.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-Cflfi7zi.js";import"./if-defined-OGRiJYcs.js";import"./responsive-toolbar-D8HctbWo.js";import"./constants-DhgAIoth.js";import"./with-default-aria-Dz8WdObG.js";import"./ref-D0wIX8RE.js";import"./async-directive-Dn4kAKBX.js";import"./directive-CJw_OlP2.js";import"./index-DrNjr0CF.js";import"./toolbar-LUhNY6Wp.js";import"./index-CnDlsITW.js";import"./base-button-adapter-D3g6KwJ2.js";import"./index-Bd4FKW0B.js";import"./index-DlU3dv5c.js";import"./icon-button-DYrB2kr7.js";import"./index-CXG4jztD.js";import"./list-dropdown-aware-core-CcSZyX01.js";import"./linear-progress-constants-B_TZItgy.js";import"./list-BXQ2jWEL.js";import"./popover-FF1Bk4KT.js";import"./with-longpress-listener-BkDJcoU7.js";import"./dismissible-stack-BSUgafRy.js";import"./skeleton-constants-CEQ1QCtk.js";import"./tooltip-DzghVVIJ.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
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
`,e.jsx(l,{})]})}function P(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{P as default};
