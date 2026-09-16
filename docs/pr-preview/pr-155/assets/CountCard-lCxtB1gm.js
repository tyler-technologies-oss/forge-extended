import{j as e,M as s,T as d,C as o}from"./blocks-CM5MSK9_.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as a}from"./CustomArgTypes-DiNHeEDs.js";import{C as l,D as c}from"./CountCard.stories-gY3u0ovm.js";import{MultipleCards as h}from"./MultipleCards.stories-BGlrhVM3.js";import{WithFullWidth as p}from"./WithFullWidth.stories-DA6FKH5o.js";import{AdditionalBodyContent as m}from"./AdditionalBodyContent.stories-BRPt9QGJ.js";import{WithMenu as u}from"./WithMenu.stories-if-tDKPV.js";import{Themes as x}from"./Themes.stories-DcAlSxT_.js";import"./iframe-CoLC7Ddj.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CfWWwVyd.js";import"./with-default-aria-DnVksJc2.js";import"./custom-element-DFE_Cjil.js";import"./constants-B-hZthFg.js";import"./count-card-Sk1fV_g-.js";import"./utils-C1eBehht.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-B7Z3MGJH.js";import"./async-directive-CZeC78Nz.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CCe8DSny.js";import"./index-0dlbAkNb.js";import"./tooltip-BkKktXcc.js";import"./with-longpress-listener-DgQacVA_.js";import"./dismissible-stack-DKDJEgub.js";import"./index-DWg-8V2P.js";import"./icon-BcT5yCfR.js";import"./index-D0P-J5t-.js";import"./index-BD78FBOp.js";import"./icon-button-BshidE3t.js";import"./base-button-adapter-DLCL2B1S.js";import"./focus-indicator-FepI7CHW.js";import"./index-Bf0wIJ3c.js";import"./state-CsRH-63k.js";import"./class-map-Br341N1x.js";import"./style-map-CeZfPB9B.js";import"./index-Dlb7d9c4.js";import"./list-dropdown-aware-core-DOsW-JKg.js";import"./linear-progress-constants-D4tcHxS7.js";import"./list-DDqXXIUS.js";import"./popover-WW2lnk8B.js";import"./skeleton-constants-WQa7xbY0.js";function i(t){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
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
`,e.jsx(a,{})]})}function ae(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ae as default};
