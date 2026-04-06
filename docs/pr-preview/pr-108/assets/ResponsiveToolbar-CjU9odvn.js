import{j as e,M as i,T as r,C as a}from"./blocks-enPbOPcO.js";import{useMDXComponents as s}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-CUaET8Um.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-B299RYJq.js";import"./iframe-Bc1gK1D2.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-GWARLwl4.js";import"./if-defined-DU7f9bnG.js";import"./responsive-toolbar-Ch6lJHG9.js";import"./constants-C0oGLkIs.js";import"./with-default-aria-DKBtCCS8.js";import"./ref-DWz9QPKb.js";import"./async-directive-BmRd90c7.js";import"./directive-CJw_OlP2.js";import"./index-But_pL5V.js";import"./toolbar-BsID2Yhs.js";import"./index-BY6OoCBE.js";import"./base-button-adapter-LtjZ8eTY.js";import"./focus-indicator-CZ9tP9Vs.js";import"./icon-CR3saOZG.js";import"./index-DBWWZhSB.js";import"./index-DeunrSu9.js";import"./index-BnVq9kER.js";import"./list-dropdown-aware-core-CgsM0wa3.js";import"./linear-progress-constants-eXbPP9yr.js";import"./list-ld9TErgS.js";import"./popover-BjSvx2gC.js";import"./with-longpress-listener-DGK38dOB.js";import"./dismissible-stack-BXIOuyD2.js";import"./skeleton-constants-xE4Sx7tb.js";import"./tooltip-cGcMZM0Q.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
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
`,e.jsx(l,{})]})}function U(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{U as default};
