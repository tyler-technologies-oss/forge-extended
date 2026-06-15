import{j as e,M as s,T as d,C as o}from"./blocks-B5tY0qEs.js";import{useMDXComponents as r}from"./index-DNFFXgUn.js";import{C as a}from"./CustomArgTypes-ClUx8Ojk.js";import{C as l,D as c}from"./CountCard.stories-C0ReqOXR.js";import{MultipleCards as h}from"./MultipleCards.stories-BmIQf7pr.js";import{WithFullWidth as p}from"./WithFullWidth.stories-DUnqINgj.js";import{AdditionalBodyContent as m}from"./AdditionalBodyContent.stories-BMYqh4Ac.js";import{WithMenu as u}from"./WithMenu.stories-Dh7OzVqu.js";import{Themes as x}from"./Themes.stories-P9RNm_60.js";import"./iframe-BMmxjS7K.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CRcBmDtb.js";import"./with-default-aria-DUm9cFDb.js";import"./constants-DxKBK66z.js";import"./count-card-DWlPFdq-.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-vFe5Fey2.js";import"./async-directive-C8AHgdeZ.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CvgiCefo.js";import"./index-D-iiUvd_.js";import"./tooltip-CX1jV9vj.js";import"./with-longpress-listener-ZBxJ2PG2.js";import"./position-utils-Dg6KB9wi.js";import"./dismissible-stack-BP6jnQvR.js";import"./index-CH4_EQDb.js";import"./icon-DHP83XnC.js";import"./index-R22CT4LH.js";import"./index-CuaVTp8w.js";import"./icon-button-B-lwPuxH.js";import"./base-button-adapter-DVfHKjLr.js";import"./focus-indicator-BZurIPmT.js";import"./index-dplpX56E.js";import"./state-Pz8kZyTN.js";import"./class-map-CNMADvTA.js";import"./style-map-lC-WH_oI.js";import"./index-1PYaxWHl.js";import"./list-dropdown-aware-core-W9Dp6JBL.js";import"./linear-progress-constants-CdId7nyJ.js";import"./list-CcBQKVC4.js";import"./popover-CbV6AHdo.js";import"./skeleton-constants-BQoiQmIz.js";function i(t){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(d,{}),`
`,e.jsx(n.p,{children:"A card component for displaying counts, metrics, or key values with an accompanying icon and label. Ideal for dashboards and summary views where you need to highlight important numbers at a glance."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"The Count Card uses a slot-based architecture with eight main areas:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"icon"})," - An icon displayed in a styled container at the start of the header"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"label"})," - Descriptive text next to the icon explaining what the count represents"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"header-end"})," - Optional content at the end of the header, ideal for badges or small accessories"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"action"})," - Optional slot for a ",e.jsx(n.code,{children:"forge-icon-button"})," (see note below)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"count"})," - The main value or metric displayed prominently"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"count-end"})," - Optional content displayed after the count, ideal for units or secondary values"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"body"})," - Optional content below the count for additional details or secondary information"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"full-width"})," - Optional full-width content below the primary card content, ideal for sparklines, meters, or progress indicators"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Use the ",e.jsx(n.code,{children:"action"})," slot instead of ",e.jsx(n.code,{children:"header-end"})," when adding a ",e.jsx(n.code,{children:"forge-icon-button"}),". Icon buttons have a 48x48px touch target that can disrupt the card's layout when placed in ",e.jsx(n.code,{children:"header-end"}),". The ",e.jsx(n.code,{children:"action"})," slot provides proper alignment for icon buttons."]}),`
`]}),`
`,e.jsx(n.h3,{id:"structural-consistency",children:"Structural Consistency"}),`
`,e.jsx(n.p,{children:"For best results, use the same slot structure across all count cards on a page and always include at least an icon and count. This ensures visual balance and alignment when cards are displayed in a grid."}),`
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
`,e.jsx(n.h3,{id:"with-full-width-content",children:"With Full Width Content"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"full-width"})," slot to add full-width content below the primary card content. This is ideal for sparklines, progress bars, or any visualization that should span the entire width of the card."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"additional-body-content",children:"Additional Body Content"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"body"})," slot to add supplementary content below the count. This is useful for displaying additional context, progress indicators, or secondary metrics."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"with-menu",children:"With Menu"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"action"})," slot to add an icon button for card-level actions like an options menu."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"themes",children:"Themes"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"theme"})," property to apply semantic color styling to the card. Available themes include ",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"secondary"}),", ",e.jsx(n.code,{children:"tertiary"}),", ",e.jsx(n.code,{children:"success"}),", ",e.jsx(n.code,{children:"error"}),", ",e.jsx(n.code,{children:"warning"}),", ",e.jsx(n.code,{children:"info"}),", and ",e.jsx(n.code,{children:"info-secondary"}),"."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(a,{})]})}function de(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{de as default};
