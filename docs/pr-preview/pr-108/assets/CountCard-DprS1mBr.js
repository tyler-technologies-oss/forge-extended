import{j as n,M as s,T as d,C as t}from"./blocks-CEfaSVay.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-kTqIBohZ.js";import{C as c,D as a}from"./CountCard.stories-_fKl3utx.js";import{MultipleCards as h}from"./MultipleCards.stories-BKsZgQFu.js";import{WithFullWidth as p}from"./WithFullWidth.stories-3fvkrgW4.js";import{AdditionalBodyContent as m}from"./AdditionalBodyContent.stories-CCJswEHq.js";import{WithMenu as u}from"./WithMenu.stories-B3wVpiOH.js";import"./iframe-EDkMU2yp.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CoHhGLqH.js";import"./base-lit-element-Dhv28x6J.js";import"./count-card-CdEISWPB.js";import"./async-directive-D3HuHHO1.js";import"./directive-CJw_OlP2.js";import"./index-M_YRJUU7.js";import"./index-DHBW_WKC.js";import"./icon-BuX8VuLc.js";import"./index-2_1Se5EE.js";import"./state-DPM7ueda.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-kNo1vpzp.js";import"./style-map-DEjVIbgm.js";import"./a11y-utils-BZ8s_mJV.js";import"./index-DDtLjli4.js";import"./base-button-adapter-BYjQ0PED.js";import"./with-default-aria-b1hez3S3.js";import"./index-CNF42aYi.js";import"./linear-progress-constants-j6V6rFIx.js";import"./list-Crz0kYaN.js";import"./popover-Dkg5VYzu.js";import"./with-longpress-listener-CYF-rl7-.js";import"./dismissible-stack-CAhVmd_O.js";import"./skeleton-constants-Dy7tYtNo.js";import"./tooltip-DsTtONL6.js";function i(o){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:c}),`
`,n.jsx(d,{}),`
`,n.jsx(e.p,{children:"A card component for displaying counts, metrics, or key values with an accompanying icon and label. Ideal for dashboards and summary views where you need to highlight important numbers at a glance."}),`
`,n.jsx(t,{of:a}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"The Count Card uses a slot-based architecture with six main areas:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"icon"})," - An icon displayed in a styled container at the start of the header"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"label"})," - Descriptive text next to the icon explaining what the count represents"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"header-end"})," - Optional content at the end of the header, ideal for badges or accessory menus"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"count"})," - The main value or metric displayed prominently"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"body"})," - Optional content below the count for additional details or secondary information"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"full-width"})," - Optional full-width content below the primary card content, ideal for sparklines, meters, or progress indicators"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<forge-count-card>
  <forge-icon slot="icon" name="attach_money"></forge-icon>
  <span slot="label">Revenue</span>
  <span slot="count">$12,450.00</span>
</forge-count-card>
`})}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"multiple-cards",children:"Multiple Cards"}),`
`,n.jsx(e.p,{children:"Count cards work well in grid layouts to create dashboard-style displays."}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h3,{id:"with-full-width-content",children:"With Full Width Content"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.code,{children:"full-width"})," slot to add full-width content below the primary card content. This is ideal for sparklines, progress bars, or any visualization that should span the entire width of the card."]}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h3,{id:"additional-body-content",children:"Additional Body Content"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.code,{children:"body"})," slot to add supplementary content below the count. This is useful for displaying additional context, progress indicators, or secondary metrics."]}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"with-menu",children:"With Menu"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.code,{children:"header-end"})," slot to add an options menu for card-level actions."]}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.h2,{id:"css-custom-properties",children:"CSS Custom Properties"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--forge-count-card-icon-background"})," - Background color of the icon container. Defaults to surface-container."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--forge-count-card-icon-color"})," - Color of the icon. Defaults to on-surface."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--forge-count-card-icon-container-size"})," - Size of the icon container. Defaults to ",n.jsx(e.code,{children:"24px"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--forge-count-card-icon-size"})," - Size of the icon itself. Defaults to ",n.jsx(e.code,{children:"16px"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(l,{})]})}function Y(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{Y as default};
