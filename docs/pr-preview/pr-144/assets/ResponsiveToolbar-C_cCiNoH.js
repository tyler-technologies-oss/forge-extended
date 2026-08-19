import{j as e,M as s,T as r,C as a}from"./blocks-DrpK51zt.js";import{useMDXComponents as i}from"./index-C_l8DU2D.js";import{C as l}from"./CustomArgTypes-MKHbymv9.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-BVcdyL9Q.js";import"./iframe-Divla-Cp.js";import"./index-C69yvurJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CacDshAx.js";import"./if-defined-BylLjL-U.js";import"./responsive-toolbar-BOm6WImz.js";import"./feature-detection-D-5lT58i.js";import"./a11y-utils-BCt-Wh9D.js";import"./ref-DrRtyWka.js";import"./async-directive-D1XEcX9j.js";import"./directive-CJw_OlP2.js";import"./index-DsolaIvU.js";import"./toolbar-BJpGAHib.js";import"./constants-DkN7ZGiS.js";import"./index-CrpGlOxL.js";import"./with-default-aria-BEs3GmpT.js";import"./base-button-adapter-uhdylO1A.js";import"./focus-indicator-CDDzSaVo.js";import"./icon-C6Jpggai.js";import"./index-ZS20Axz8.js";import"./index-r3sRvHmc.js";import"./icon-button-CTYCVtl8.js";import"./index-Dn8OEefT.js";import"./list-dropdown-aware-core-DeBgxIvc.js";import"./linear-progress-constants-IvNJ2lcy.js";import"./list-CW12Vp-6.js";import"./popover-BijGC2rA.js";import"./with-longpress-listener-D8tPz6R8.js";import"./dismissible-stack-DyjlOaHM.js";import"./skeleton-constants-9zF4Smu6.js";import"./tooltip-DlREf1Hp.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
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
