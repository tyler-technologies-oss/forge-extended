import{j as e,M as i,T as r,C as a}from"./blocks-ZoxYwHKg.js";import{useMDXComponents as s}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-Bx-fdWgC.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-Dj6zjQFs.js";import"./iframe-DJJrKURQ.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DNyIteCe.js";import"./if-defined-BSIkL8tH.js";import"./responsive-toolbar-QRCYNvp_.js";import"./constants-BA7R9qv6.js";import"./base-lit-element-vmXY1wJz.js";import"./ref-eHU_qeGQ.js";import"./async-directive-CR4E1cQb.js";import"./directive-CJw_OlP2.js";import"./index-Lr5-ziNB.js";import"./toolbar-BtJ9Y1gR.js";import"./index-mOTL_MfX.js";import"./base-button-adapter-qbbVp5fc.js";import"./with-default-aria-DcEun3SM.js";import"./a11y-utils-CcnpHkzJ.js";import"./icon-CoutffEd.js";import"./index-C-BVQ-f1.js";import"./index-BBCl63Nt.js";import"./index-CDS-JjR6.js";import"./list-dropdown-aware-core-C1pE82KF.js";import"./linear-progress-constants-RbAoUNVu.js";import"./list-B3eRYWBH.js";import"./popover-CxtzQtka.js";import"./with-longpress-listener-DNz4LEpN.js";import"./dismissible-stack-CykLgMft.js";import"./skeleton-constants-BtvLVoU9.js";import"./tooltip-iigeSYTB.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
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
`,e.jsx(l,{})]})}function Y(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{Y as default};
