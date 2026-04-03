import{j as n,M as s,T as a,C as e}from"./blocks-BOor0MWG.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-D9xbSrlI.js";import{C as d,D as c}from"./CountCard.stories-DQTK08k-.js";import{MultipleCards as h}from"./MultipleCards.stories-QNxU4zd1.js";import{WithFullWidth as p}from"./WithFullWidth.stories-Ds9WAkbW.js";import{AdditionalBodyContent as m}from"./AdditionalBodyContent.stories-BURMgqYJ.js";import{WithMenu as u}from"./WithMenu.stories-Cs1-btvk.js";import{Tonal as x}from"./Tonal.stories-BwN0lmEN.js";import"./iframe-D-b265Qe.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-C1_75Mco.js";import"./base-lit-element-CHK6hcJb.js";import"./constants-BZeAcB7O.js";import"./count-card-C9XOAi55.js";import"./lit-utils-Dp8OgWBi.js";import"./async-directive-Ddbstadh.js";import"./directive-CJw_OlP2.js";import"./index-ffW596Mg.js";import"./index-DatREZyY.js";import"./icon-CAmrsB6e.js";import"./index-FLK3H2Q5.js";import"./state-CoKH03yd.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BlNvkze3.js";import"./style-map-BL7kWBHr.js";import"./a11y-utils-BEJ5Kgpe.js";import"./index-Db7SBkgZ.js";import"./base-button-adapter-Cf7Momcl.js";import"./with-default-aria-CfYAYNVS.js";import"./index-D8JZA6f0.js";import"./list-dropdown-aware-core-CBYCFNne.js";import"./linear-progress-constants-BJ7z4uC0.js";import"./list-DNfzCp7d.js";import"./popover-BmoUkBFq.js";import"./with-longpress-listener-B8HAkEoO.js";import"./dismissible-stack-vo2DHQrS.js";import"./skeleton-constants-DSdPkdlv.js";import"./tooltip-BRacqxYw.js";function i(o){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
`,n.jsx(a,{}),`
`,n.jsx(t.p,{children:"A card component for displaying counts, metrics, or key values with an accompanying icon and label. Ideal for dashboards and summary views where you need to highlight important numbers at a glance."}),`
`,n.jsx(e,{of:c}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.p,{children:"The Count Card uses a slot-based architecture with six main areas:"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"icon"})," - An icon displayed in a styled container at the start of the header"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"label"})," - Descriptive text next to the icon explaining what the count represents"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"header-end"})," - Optional content at the end of the header, ideal for badges or accessory menus"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"count"})," - The main value or metric displayed prominently"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"body"})," - Optional content below the count for additional details or secondary information"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"full-width"})," - Optional full-width content below the primary card content, ideal for sparklines, meters, or progress indicators"]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<forge-count-card>
  <forge-icon slot="icon" name="attach_money"></forge-icon>
  <span slot="label">Revenue</span>
  <span slot="count">$12,450.00</span>
</forge-count-card>
`})}),`
`,n.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(t.h3,{id:"multiple-cards",children:"Multiple Cards"}),`
`,n.jsx(t.p,{children:"Count cards work well in grid layouts to create dashboard-style displays."}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(t.h3,{id:"with-full-width-content",children:"With Full Width Content"}),`
`,n.jsxs(t.p,{children:["Use the ",n.jsx(t.code,{children:"full-width"})," slot to add full-width content below the primary card content. This is ideal for sparklines, progress bars, or any visualization that should span the entire width of the card."]}),`
`,n.jsx(e,{of:p}),`
`,n.jsx(t.h3,{id:"additional-body-content",children:"Additional Body Content"}),`
`,n.jsxs(t.p,{children:["Use the ",n.jsx(t.code,{children:"body"})," slot to add supplementary content below the count. This is useful for displaying additional context, progress indicators, or secondary metrics."]}),`
`,n.jsx(e,{of:m}),`
`,n.jsx(t.h3,{id:"with-menu",children:"With Menu"}),`
`,n.jsxs(t.p,{children:["Use the ",n.jsx(t.code,{children:"header-end"})," slot to add an options menu for card-level actions."]}),`
`,n.jsx(e,{of:u}),`
`,n.jsx(t.h3,{id:"tonal",children:"Tonal"}),`
`,n.jsxs(t.p,{children:["Use the ",n.jsx(t.code,{children:"tonal"})," property to apply a subtle tonal background with an outline border, providing visual distinction while maintaining a softer appearance."]}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(t.h2,{id:"api",children:"API"}),`
`,n.jsx(l,{})]})}function en(o={}){const{wrapper:t}={...r(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(i,{...o})}):i(o)}export{en as default};
