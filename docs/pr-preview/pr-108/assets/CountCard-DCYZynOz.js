import{j as n,M as s,T as l,C as t}from"./blocks-sd2hdq4d.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as a}from"./CustomArgTypes-hO648qBp.js";import{C as d,D as c}from"./CountCard.stories-DYWCgaap.js";import{MultipleCards as h}from"./MultipleCards.stories-DdneLAH0.js";import{WithFullWidth as p}from"./WithFullWidth.stories-Cljdehiv.js";import{AdditionalBodyContent as m}from"./AdditionalBodyContent.stories-CIv_2CIQ.js";import{WithMenu as u}from"./WithMenu.stories-C6XI6UGk.js";import{Tonal as x}from"./Tonal.stories-e93xSr5g.js";import"./iframe-CXufK-1Q.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BRTQzNkg.js";import"./base-lit-element-Bi5P9PLz.js";import"./count-card-HR2_1Th0.js";import"./async-directive-C3Zf_1Ny.js";import"./directive-CJw_OlP2.js";import"./index-DsQYDjOS.js";import"./index-B8UqZJtS.js";import"./icon-DyzKykfQ.js";import"./index-3lbyffbi.js";import"./state-B-2IueFF.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BJy-kOHh.js";import"./style-map-bRca3UDx.js";import"./a11y-utils-fnbAUH6D.js";import"./index-DcCcLlNK.js";import"./base-button-adapter-CHIBVPBe.js";import"./with-default-aria-D3Qh2sz9.js";import"./index-BrDloBNX.js";import"./linear-progress-constants-B2RBRWRJ.js";import"./list-8bOHAV_e.js";import"./popover-CoQdSkmP.js";import"./with-longpress-listener-CTqy049j.js";import"./dismissible-stack-DyKgB--j.js";import"./skeleton-constants-D48PK3rl.js";import"./tooltip-C7SJX6TB.js";function i(o){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
`,n.jsx(l,{}),`
`,n.jsx(e.p,{children:"A card component for displaying counts, metrics, or key values with an accompanying icon and label. Ideal for dashboards and summary views where you need to highlight important numbers at a glance."}),`
`,n.jsx(t,{of:c}),`
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
`,n.jsx(e.h3,{id:"tonal",children:"Tonal"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.code,{children:"tonal"})," property to apply a subtle tonal background with an outline border, providing visual distinction while maintaining a softer appearance."]}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h2,{id:"css-custom-properties",children:"CSS Custom Properties"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--forge-count-card-icon-background"})," - Background color of the icon container. Defaults to surface-container."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--forge-count-card-icon-color"})," - Color of the icon. Defaults to on-surface."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--forge-count-card-icon-container-size"})," - Size of the icon container. Defaults to ",n.jsx(e.code,{children:"24px"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--forge-count-card-icon-size"})," - Size of the icon itself. Defaults to ",n.jsx(e.code,{children:"16px"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(a,{})]})}function nn(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{nn as default};
