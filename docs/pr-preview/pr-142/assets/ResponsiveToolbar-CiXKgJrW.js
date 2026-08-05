import{j as e,M as s,T as r,C as a}from"./blocks-CHX6097g.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-BysUN5C5.js";import{R as p,D as c}from"./ResponsiveToolbar.stories-rw-ASFY3.js";import"./iframe-ULyB_0Dy.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DgRBaGEM.js";import"./if-defined-CRIgc7XT.js";import"./responsive-toolbar-DP2kpbGs.js";import"./custom-element-C028faeO.js";import"./utils-XRW8HtJy.js";import"./ref-CAmpc1ly.js";import"./async-directive-BgnHwQy-.js";import"./directive-CJw_OlP2.js";import"./index-pBIS1Ift.js";import"./feature-detection-CE0UCYUK.js";import"./toolbar-FIo7vZzp.js";import"./constants-CCgJ39ZP.js";import"./index-CWnIIei3.js";import"./with-default-aria-CpHhlmZ0.js";import"./a11y-utils-BDdgGlMC.js";import"./base-button-adapter-B415vPD3.js";import"./focus-indicator-C3NuoBrz.js";import"./icon-DfG7xEKj.js";import"./index-DkIyAlzx.js";import"./index-D9WzwKfJ.js";import"./icon-button-CbaSmUOT.js";import"./index-CCyGOxVT.js";import"./list-dropdown-aware-core-BZ90VYQ8.js";import"./linear-progress-constants-BG-kZHI7.js";import"./list-BGVMCl5V.js";import"./popover-D69UUhih.js";import"./with-longpress-listener-9zNpMFVf.js";import"./dismissible-stack-KFmmCPeV.js";import"./skeleton-constants-DMyiwnQS.js";import"./tooltip-CGlkN96O.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
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
