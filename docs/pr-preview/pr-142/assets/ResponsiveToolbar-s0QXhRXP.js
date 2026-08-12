import{j as e,M as s,T as r,C as a}from"./blocks-5_TpJD9V.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-u9g2Wcj6.js";import{R as p,D as c}from"./ResponsiveToolbar.stories-C6dFO2WA.js";import"./iframe-BONfeRbS.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BCnW-Qli.js";import"./if-defined-BsYLMlcI.js";import"./responsive-toolbar-DUIQLo6m.js";import"./custom-element-C028faeO.js";import"./utils-D9p4bUJ4.js";import"./ref-CdLEfdiH.js";import"./async-directive-CTteLgwZ.js";import"./directive-CJw_OlP2.js";import"./index-Dahtyj0_.js";import"./feature-detection-BdDPgXkM.js";import"./toolbar-aubVMfRE.js";import"./constants-DnUFLkc1.js";import"./index-DkaTdWA1.js";import"./with-default-aria-BX23kPsM.js";import"./a11y-utils-CPysxFLW.js";import"./base-button-adapter-DnYus6sP.js";import"./focus-indicator-COKKqZBY.js";import"./icon-C7xslxSO.js";import"./index-nUOA6XBt.js";import"./index-UGwEVcKj.js";import"./icon-button-OYsEtGQk.js";import"./index-EiVw4x8X.js";import"./list-dropdown-aware-core-D_MHrbwG.js";import"./linear-progress-constants-DoVvRo8z.js";import"./list-Y9tu5Xli.js";import"./popover-Dh6hBsmc.js";import"./with-longpress-listener-BBjmO5EP.js";import"./dismissible-stack--RH1Fewv.js";import"./skeleton-constants-DEC06Pfa.js";import"./tooltip-BOfBYoiw.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
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
