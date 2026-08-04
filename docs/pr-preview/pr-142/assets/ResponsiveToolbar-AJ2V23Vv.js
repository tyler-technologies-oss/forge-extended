import{j as e,M as s,T as r,C as a}from"./blocks-B83jmuW6.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-BTnXsP5T.js";import{R as p,D as c}from"./ResponsiveToolbar.stories-DKKZwQZT.js";import"./iframe-CpRQkBMQ.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-Ctz4RbrR.js";import"./if-defined-BEkLrFsj.js";import"./responsive-toolbar-DP97yo9E.js";import"./custom-element-C028faeO.js";import"./utils-DNsk33b7.js";import"./ref-CcF0eVeV.js";import"./async-directive-CWZGg9E5.js";import"./directive-CJw_OlP2.js";import"./index-BaEMFXl9.js";import"./feature-detection-qDrs-qqg.js";import"./toolbar-C9rJMiJt.js";import"./constants-6XKmeSe-.js";import"./index-M8L1-ckG.js";import"./with-default-aria-DCrQ45_b.js";import"./a11y-utils-D6lw3lX1.js";import"./base-button-adapter-CKJ2vgSn.js";import"./focus-indicator-BHpx-Ltw.js";import"./icon-BbBof2IO.js";import"./index-D3UXJ48p.js";import"./index-BPW4qMFY.js";import"./icon-button-B5ctXg8e.js";import"./index-BzWGHGqr.js";import"./list-dropdown-aware-core-D1Asbd84.js";import"./linear-progress-constants-lbEEJxCu.js";import"./list-ugGYK9Ud.js";import"./popover-BnM0KzaE.js";import"./with-longpress-listener-q-m3c7Jj.js";import"./dismissible-stack-ByH90fXI.js";import"./skeleton-constants-BaZapiCV.js";import"./tooltip-DaenRRu7.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(r,{}),`
`,e.jsxs(o.p,{children:["The Responsive Toolbar dynamically adjusts your toolbar content to prevent overlap on smaller screens. It leverages a ",e.jsx(o.code,{children:"ResizeObserver"}),` to detect
when the title content collides with the end slot content. When an overlap is detected, the toolbar automatically hides the `,e.jsx(o.code,{children:"desktop-actions"}),` slot
and displays the `,e.jsx(o.code,{children:"mobile-actions"})," slot instead."]}),`
`,e.jsxs(o.p,{children:[`This approach eliminates the need for manually configuring breakpoints or container queries, ensuring a seamless adaptive experience without extra
calculations. Simply provide your `,e.jsx(o.code,{children:"desktop-actions"})," slot content and your ",e.jsx(o.code,{children:"mobile-actions"})," slot content, and the component handles the rest."]}),`
`,e.jsx(a,{of:c}),`
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
`,e.jsx(l,{})]})}function J(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{J as default};
