import{j as e,M as i,T as r,C as a}from"./blocks-6hjO-_jr.js";import{useMDXComponents as s}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-BbWSk6gR.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-D7eGOJBo.js";import"./iframe-_4hlFKQj.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BFGQbA5i.js";import"./if-defined-MWGWi_1a.js";import"./responsive-toolbar-D6G2eSCl.js";import"./constants-CJ48DbBL.js";import"./with-default-aria-DivMzomX.js";import"./ref-fcXrZeX-.js";import"./async-directive-D-qUlIdF.js";import"./directive-CJw_OlP2.js";import"./index-C1EMm88Q.js";import"./toolbar-Qzlsm6My.js";import"./index-DqXfG2P6.js";import"./base-button-adapter-BNoTqDAF.js";import"./focus-indicator-D01OLwhO.js";import"./icon-BHP1Au3O.js";import"./index-C8rru8Kv.js";import"./index-BQxhPO2r.js";import"./icon-button-BDyk_Rtl.js";import"./index-BRSxzMEJ.js";import"./list-dropdown-aware-core-YsPkrX09.js";import"./linear-progress-constants-BfA9YdrA.js";import"./list-BKAUIfdJ.js";import"./popover-Ct469kNn.js";import"./with-longpress-listener-B3p2Bz_x.js";import"./dismissible-stack-C6iny2x7.js";import"./skeleton-constants-DJgjDaeW.js";import"./tooltip-C5Kfw4l-.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
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
