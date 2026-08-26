import{j as e,M as i,T as r,C as a}from"./blocks-BDtwJjTP.js";import{useMDXComponents as s}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-DtntxQ7Y.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-CjUP-kmA.js";import"./iframe-BcE93Zz5.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-Pr6fi8H4.js";import"./if-defined-DlKd4RNB.js";import"./responsive-toolbar-DME_H_1z.js";import"./constants-Dh5Svg1S.js";import"./with-default-aria-Ctm27gPP.js";import"./ref-ByoIV5QJ.js";import"./async-directive-D1frOKea.js";import"./directive-CJw_OlP2.js";import"./index-DE5YMHwP.js";import"./toolbar-BWL3vhFG.js";import"./index-BGENJ8Kb.js";import"./base-button-adapter-DoNszb5A.js";import"./focus-indicator-B9933ltP.js";import"./icon-Dt-aqUlq.js";import"./index-CH5bIhxy.js";import"./index-Bpce5LPy.js";import"./icon-button-Blln7NbG.js";import"./index-BP1engEx.js";import"./list-dropdown-aware-core-LPzyPM1n.js";import"./linear-progress-constants-CB24seMq.js";import"./list-DTGe0pfB.js";import"./popover-DoVP4jsg.js";import"./with-longpress-listener-eZ12HZJc.js";import"./dismissible-stack-7I7vA9YH.js";import"./skeleton-constants-oQDPZR89.js";import"./tooltip-DBAIdnrm.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
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
