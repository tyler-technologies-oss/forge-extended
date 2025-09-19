import{j as e,M as i,T as r,C as a}from"./blocks-thZhTl7O.js";import{useMDXComponents as s}from"./index-DNFFXgUn.js";import{C as l}from"./CustomArgTypes-DwlxoW7G.js";import{R as c,D as d}from"./ResponsiveToolbar.stories-l6oEGEbi.js";import"./iframe-jjB25JuI.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-3d6WLTXN.js";import"./with-default-aria-Bnrm7Muh.js";import"./base-button-adapter-BHi6R9uZ.js";import"./ref-CgYMIJ-D.js";import"./directive-CJw_OlP2.js";import"./index-D5hZvh-J.js";import"./linear-progress-constants-ChnArrt8.js";import"./list-Cd5dlkL0.js";import"./popover-n-mAeygP.js";import"./with-longpress-listener-CpTrBmfm.js";import"./dismissible-stack-xVAdIIkQ.js";import"./tooltip-B5DyGB9J.js";import"./index-DzrMvV3C.js";import"./index-DlRm-url.js";function t(n){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(r,{}),`
`,e.jsxs(o.p,{children:["The Responsive Toolbar dynamically adjusts your toolbar content to prevent overlap on smaller screens. It leverages a ",e.jsx(o.code,{children:"ResizeObserver"}),` to detect
when the title content collides with the end slot content. When an overlap is detected, the toolbar automatically hides the `,e.jsx(o.code,{children:"desktop-actions"}),` slot
and displays the `,e.jsx(o.code,{children:"mobile-actions"})," slot instead."]}),`
`,e.jsxs(o.p,{children:[`This approach eliminates the need for manually configuring breakpoints or container queries, ensuring a seamless adaptive experience without extra
calculations. Simply provide your `,e.jsx(o.code,{children:"desktop-actions"})," slot content and your ",e.jsx(o.code,{children:"mobile-actions"})," slot content, and the component handles the rest."]}),`
`,e.jsx(a,{of:d}),`
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
`,e.jsx(l,{})]})}function W(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{W as default};
