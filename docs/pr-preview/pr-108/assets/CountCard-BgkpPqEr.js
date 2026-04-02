import{j as e,M as i,T as d,C as o}from"./blocks-DxWM0ItD.js";import{useMDXComponents as s}from"./index-De36GQbW.js";import{C as c}from"./CustomArgTypes-DwHRpGxy.js";import{C as l,D as a}from"./CountCard.stories-Ca29KBdN.js";import{MultipleCards as h}from"./MultipleCards.stories-DCg0I7YL.js";import{WithoutIcon as x}from"./WithoutIcon.stories-DWGetZSH.js";import{WithFullWidth as j}from"./WithFullWidth.stories-D_bPU1If.js";import{AdditionalBodyContent as u}from"./AdditionalBodyContent.stories-QRLfGRO6.js";import{WithCountBadge as p}from"./WithCountBadge.stories-Dd3vEZe3.js";import"./iframe-D5gp5AXJ.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DAK13wqQ.js";import"./icon-registry-BKaPAxu6.js";import"./base-lit-element-D7QvbJt5.js";import"./count-badge-CkSm50WQ.js";import"./async-directive-B0TTTRK3.js";import"./directive-CJw_OlP2.js";import"./index-BFzUPLoA.js";import"./index-CRoqkBYx.js";import"./icon-BdBrgfPu.js";import"./state-DNZHkB8x.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DmBPA7AH.js";import"./style-map-BAnr-LCU.js";import"./a11y-utils-CfIStGmx.js";function r(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(d,{}),`
`,e.jsx(n.p,{children:"A card component for displaying counts, metrics, or key values with an accompanying icon and label. Ideal for dashboards and summary views where you need to highlight important numbers at a glance."}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"The Count Card uses a slot-based architecture with six main areas:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"icon"})," - An icon displayed in a styled container at the start of the header"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"label"})," - Descriptive text next to the icon explaining what the count represents"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"header-end"})," - Optional content at the end of the header, ideal for badges or accessory menus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"count"})," - The main value or metric displayed prominently"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"body"})," - Optional content below the count for additional details or secondary information"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"full-width"})," - Optional full-width content below the primary card content, ideal for sparklines, meters, or progress indicators"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-count-card>
  <forge-icon slot="icon" name="attach_money"></forge-icon>
  <span slot="label">Revenue</span>
  <span slot="count">$12,450.00</span>
</forge-count-card>
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"multiple-cards",children:"Multiple Cards"}),`
`,e.jsx(n.p,{children:"Count cards work well in grid layouts to create dashboard-style displays."}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"without-icon",children:"Without Icon"}),`
`,e.jsx(n.p,{children:"The icon slot is optional. When omitted, the icon container is automatically hidden."}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"with-full-width-content",children:"With Full Width Content"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"full-width"})," slot to add full-width content below the primary card content. This is ideal for sparklines, progress bars, or any visualization that should span the entire width of the card."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h3,{id:"additional-body-content",children:"Additional Body Content"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"body"})," slot to add supplementary content below the count. This is useful for displaying additional context, progress indicators, or secondary metrics."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"with-count-badge",children:"With Count Badge"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"forge-count-badge"})," component in the ",e.jsx(n.code,{children:"header-end"})," slot to display change indicators, status badges, or other supplementary information."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"count-badge",children:"Count Badge"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"forge-count-badge"})," is a utility component designed to work alongside the count card. It wraps the core ",e.jsx(n.code,{children:"forge-badge"}),` component with
modified styling that better complements the count card's visual design, including adjusted shape and container-based theme colors.`]}),`
`,e.jsx(n.h3,{id:"usage-1",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Place the count badge in the ",e.jsx(n.code,{children:"header-end"})," slot to display change indicators, status labels, or other supplementary information."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-count-card>
  <forge-icon slot="icon" name="trending_up"></forge-icon>
  <span slot="label">Revenue</span>
  <forge-count-badge slot="header-end" theme="success">+12.5%</forge-count-badge>
  <span slot="count">$48,250.00</span>
</forge-count-card>
`})}),`
`,e.jsx(n.h3,{id:"theme-variants",children:"Theme Variants"}),`
`,e.jsx(n.p,{children:"The count badge supports the following theme variants:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Theme"}),e.jsx(n.th,{children:"Use Case"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"success"})}),e.jsx(n.td,{children:"Positive changes, growth indicators"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"error"})}),e.jsx(n.td,{children:"Negative changes, decline indicators"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"warning"})}),e.jsx(n.td,{children:"Cautionary or attention-needed states"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"info"})}),e.jsx(n.td,{children:"Neutral information"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"primary"})}),e.jsx(n.td,{children:"Primary brand emphasis"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"secondary"})}),e.jsx(n.td,{children:"Secondary emphasis"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"tertiary"})}),e.jsx(n.td,{children:"Tertiary emphasis"})]})]})]}),`
`,e.jsx(n.h3,{id:"count-badge-slots",children:"Count Badge Slots"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"default"}),' - The badge content (e.g., "+12%", "New")']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"end"})," - Optional content placed at the end of the badge, passed through to the inner ",e.jsx(n.code,{children:"forge-badge"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"count-badge-css-custom-properties",children:"Count Badge CSS Custom Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--forge-count-badge-background"})," - Override the background color of the badge."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--forge-count-badge-color"})," - Override the text color of the badge."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--forge-count-badge-border-color"})," - Override the border color of the badge."]}),`
`]}),`
`,e.jsx(n.h2,{id:"css-custom-properties",children:"CSS Custom Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--forge-count-card-icon-background"})," - Background color of the icon container. Defaults to surface-container."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--forge-count-card-icon-color"})," - Color of the icon. Defaults to on-surface."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--forge-count-card-icon-container-size"})," - Size of the icon container. Defaults to ",e.jsx(n.code,{children:"24px"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--forge-count-card-icon-size"})," - Size of the icon itself. Defaults to ",e.jsx(n.code,{children:"16px"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{})]})}function $(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{$ as default};
