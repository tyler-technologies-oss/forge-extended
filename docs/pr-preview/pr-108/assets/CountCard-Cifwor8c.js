import{j as e,M as s,T as d,C as o}from"./blocks-CPDuGWkH.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-B4xb3ML1.js";import{C as a,D as c}from"./CountCard.stories-pS0bdJR5.js";import{MultipleCards as h}from"./MultipleCards.stories-BvEIQ2jc.js";import{WithFullWidth as p}from"./WithFullWidth.stories-Cs1z6F1y.js";import{AdditionalBodyContent as m}from"./AdditionalBodyContent.stories-D_NBwpjN.js";import{WithMenu as x}from"./WithMenu.stories-D7XxLEYo.js";import{Themes as u}from"./Themes.stories-CePKvHxI.js";import"./iframe-DwMgCYtb.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-GWARLwl4.js";import"./with-default-aria-CfDmXVrN.js";import"./constants-DwvutvYf.js";import"./count-card-DdCLAgs6.js";import"./state-DYKNkNE_.js";import"./lit-utils-Dtck85ND.js";import"./async-directive-DIhw622m.js";import"./directive-CJw_OlP2.js";import"./index-Ca5FURsm.js";import"./index-D_7o31Vz.js";import"./tooltip-C8esL34X.js";import"./with-longpress-listener-BwNJhBSA.js";import"./dismissible-stack-siMKySCy.js";import"./index-ejc1wpxF.js";import"./icon-DoJXhL7p.js";import"./index-Fm-7uJrG.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BO8v6kK4.js";import"./style-map-EVoX9JUW.js";import"./index-BcDQlmui.js";import"./base-button-adapter-mogBfOAi.js";import"./focus-indicator-DiukMVQo.js";import"./index-bFeyiobf.js";import"./list-dropdown-aware-core-BonT3z6l.js";import"./linear-progress-constants-D_HycEkg.js";import"./list-BOutDYRr.js";import"./popover-DwonYCL9.js";import"./skeleton-constants-BFB-SZew.js";function r(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(d,{}),`
`,e.jsx(n.p,{children:"A card component for displaying counts, metrics, or key values with an accompanying icon and label. Ideal for dashboards and summary views where you need to highlight important numbers at a glance."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"The Count Card uses a slot-based architecture with seven main areas:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"icon"})," - An icon displayed in a styled container at the start of the header"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"label"})," - Descriptive text next to the icon explaining what the count represents"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"header-end"})," - Optional content at the end of the header, ideal for badges or accessory menus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"count"})," - The main value or metric displayed prominently"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"count-end"})," - Optional content displayed after the count, ideal for units or secondary values"]}),`
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
`,e.jsx(n.h3,{id:"with-full-width-content",children:"With Full Width Content"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"full-width"})," slot to add full-width content below the primary card content. This is ideal for sparklines, progress bars, or any visualization that should span the entire width of the card."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"additional-body-content",children:"Additional Body Content"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"body"})," slot to add supplementary content below the count. This is useful for displaying additional context, progress indicators, or secondary metrics."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"with-menu",children:"With Menu"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"header-end"})," slot to add an options menu for card-level actions."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"themes",children:"Themes"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"theme"})," property to apply semantic color styling to the card. Available themes include ",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"secondary"}),", ",e.jsx(n.code,{children:"tertiary"}),", ",e.jsx(n.code,{children:"success"}),", ",e.jsx(n.code,{children:"error"}),", ",e.jsx(n.code,{children:"warning"}),", ",e.jsx(n.code,{children:"info"}),", and ",e.jsx(n.code,{children:"info-secondary"}),"."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{})]})}function oe(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{oe as default};
