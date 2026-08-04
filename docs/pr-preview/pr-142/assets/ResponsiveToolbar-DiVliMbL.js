import{j as e,M as s,T as r,C as a}from"./blocks-CkfP8eTP.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-CkT2IjSF.js";import{R as p,D as c}from"./ResponsiveToolbar.stories-Dmge8Wk1.js";import"./iframe-BgG1mILm.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-7Af2jTHR.js";import"./if-defined-CMSu47Jh.js";import"./responsive-toolbar-wFvM52f8.js";import"./custom-element-C028faeO.js";import"./utils-BrQSBAEO.js";import"./ref-DcUDc_KR.js";import"./async-directive-C8qPSgQz.js";import"./directive-CJw_OlP2.js";import"./index-DpfKIUCk.js";import"./feature-detection-4yZjZMA_.js";import"./toolbar-DgyQODHV.js";import"./constants-D4w8ERcy.js";import"./index-DH-EBj3W.js";import"./with-default-aria-DhKreie1.js";import"./a11y-utils-Bqf6nmLH.js";import"./base-button-adapter-DJylsVrC.js";import"./focus-indicator-CvBVFsiv.js";import"./icon-DUW7oXzz.js";import"./index-p3jc0kAl.js";import"./index-CKj6teuh.js";import"./icon-button-CVlniPs4.js";import"./index-Cfi1VOKA.js";import"./list-dropdown-aware-core-DmDBQh6d.js";import"./linear-progress-constants-CZ8wiKdh.js";import"./list-EettIpcm.js";import"./popover-sLGswWmg.js";import"./with-longpress-listener-CWO8YKN7.js";import"./dismissible-stack-eDOO1x_W.js";import"./skeleton-constants-CxoxBVL1.js";import"./tooltip-DWgfTi28.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
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
