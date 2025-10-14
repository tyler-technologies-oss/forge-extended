import{j as e,M as i,T as r,C as a}from"./blocks-Dw38-v_Q.js";import{useMDXComponents as s}from"./index-DNFFXgUn.js";import{C as l}from"./CustomArgTypes-CBB2vsLV.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-CoR7JWM2.js";import"./iframe-xC0vBhGT.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CFJ29bQZ.js";import"./if-defined-C0JCoJMV.js";import"./custom-element-BhZVzxrc.js";import"./property-BFnaNwe7.js";import"./ref-CMx0jFBH.js";import"./directive-CJw_OlP2.js";import"./index-CGHuFJtT.js";import"./tslib.es6-CysHtoFa.js";import"./base-adapter-C3OfKSi0.js";import"./icon-registry-ChndCm7L.js";import"./utils-Bn45QkHx.js";import"./linear-progress-constants-FF4V9E7k.js";import"./list-8JEDMbk9.js";import"./with-default-aria-Cz5xYbxd.js";import"./popover-DM4v4vyh.js";import"./with-longpress-listener-D7T3vO1J.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./dismissible-stack-DCWKnNij.js";import"./tooltip-BHsH8GFd.js";import"./index-CQ-3MUU4.js";import"./base-button-adapter-OqeLpwyh.js";import"./icon-ByDI8jG0.js";import"./index-DV1tlNf3.js";import"./index-DK3gNycP.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
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
`,e.jsx(l,{})]})}function P(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{P as default};
