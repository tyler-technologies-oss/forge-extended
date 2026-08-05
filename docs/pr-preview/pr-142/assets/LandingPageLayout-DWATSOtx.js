import{j as e,M as a,T as s,C as o}from"./blocks-CHX6097g.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-BysUN5C5.js";import{L as d,D as c}from"./LandingPageLayout.stories-g8KJhpj3.js";import{WithBackgroundImage as h}from"./WithBackgroundImage.stories-BshBHuT_.js";import{WithTopContent as g}from"./WithTopContent.stories-D7frjwa2.js";import{ThreeColumn as p}from"./ThreeColumn.stories-efP1U0ga.js";import{SingleColumn as m}from"./SingleColumn.stories-CTOxx1ds.js";import"./iframe-ULyB_0Dy.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DgRBaGEM.js";import"./if-defined-CRIgc7XT.js";import"./landing-page-layout-hyGhUf9i.js";import"./custom-element-C028faeO.js";import"./utils-XRW8HtJy.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./decorators-CKHwrViY.js";import"./with-default-aria-CpHhlmZ0.js";import"./feature-detection-CE0UCYUK.js";import"./constants-CCgJ39ZP.js";import"./a11y-utils-BDdgGlMC.js";import"./structured-card-B8p37Ihy.js";import"./class-map-BEBg8r6d.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CO77zMEz.js";import"./when-3fO0zp9C.js";import"./lit-utils-BE-mNjuD.js";import"./async-directive-BgnHwQy-.js";import"./index-Caovf1aY.js";import"./snowboarding-bg-BMhqgckq.js";import"./index-LN5RuzT8.js";import"./index-CWnIIei3.js";import"./base-button-adapter-B415vPD3.js";import"./focus-indicator-C3NuoBrz.js";import"./icon-DfG7xEKj.js";import"./index-D9mK_lAs.js";import"./divider-pkDy_FkS.js";import"./index-CkUW9AMb.js";import"./index-D9WzwKfJ.js";import"./icon-button-CbaSmUOT.js";import"./index-DClRI9_T.js";import"./list-BGVMCl5V.js";import"./index-CVRltK1y.js";function i(n){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(s,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<forge-landing-page-layout>"})," component is a structural layout utility for building citizen-facing landing pages that follow the patterns common across Tyler applications. It provides a themed header with a title, actions, and an optional announcements region, a body area that supports one, two, or three columns, and a page footer. The layout is fully responsive: columns collapse and paddings shrink at tablet and mobile breakpoints without any additional work on your part."]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:"<forge-landing-page-layout>"})," when you need a consistent starting point for a landing page. The component handles the header background gradient, responsive image swapping, column layout, and footer styling for you, so you can focus on the content itself."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-landing-page-layout mode="two-third" alignment="center" size="normal">
  <span slot="secondary-title">Welcome</span>
  <h2 slot="main-title">Get started with your services</h2>
  <forge-button slot="action" variant="filled">Primary action</forge-button>
  <forge-button slot="action" variant="outlined">Secondary action</forge-button>

  <forge-card slot="announcements">
    <h3>Announcements</h3>
    <p>Have any events or important updates? Highlight them here.</p>
  </forge-card>

  <div slot="left">Popular services</div>
  <div slot="right">Recent activity</div>

  <div slot="footer">© 2026 City Services</div>
</forge-landing-page-layout>
`})}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," This component accepts arbitrary content in its slots. Treat the examples on this page as starting points and tailor the projected content to your application."]}),`
`]}),`
`,e.jsx(t.h2,{id:"body-layout-modes",children:"Body layout modes"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"mode"})," property to control the column layout of the body. The layout responds automatically to tablet and mobile widths, stacking columns as space becomes constrained."]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Mode"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsxs(t.td,{style:{textAlign:"left"},children:[e.jsx(t.code,{children:"two-third"})," (default)"]}),e.jsxs(t.td,{style:{textAlign:"left"},children:["A two-column layout where ",e.jsx(t.code,{children:"left"})," occupies two thirds of the width and ",e.jsx(t.code,{children:"right"})," occupies one third."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"equal"})}),e.jsxs(t.td,{style:{textAlign:"left"},children:["A two-column layout where ",e.jsx(t.code,{children:"left"})," and ",e.jsx(t.code,{children:"right"})," each occupy half of the width."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"three"})}),e.jsxs(t.td,{style:{textAlign:"left"},children:["A three-column layout using ",e.jsx(t.code,{children:"left"}),", ",e.jsx(t.code,{children:"center"}),", and ",e.jsx(t.code,{children:"right"}),"."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"single"})}),e.jsxs(t.td,{style:{textAlign:"left"},children:["A single-column layout that only renders the ",e.jsx(t.code,{children:"left"})," slot."]})]})]})]}),`
`,e.jsx(t.h3,{id:"three-column-mode",children:"Three-column mode"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(t.h3,{id:"single-column-mode",children:"Single-column mode"}),`
`,e.jsxs(t.p,{children:["Combine ",e.jsx(t.code,{children:'mode="single"'})," with ",e.jsx(t.code,{children:'alignment="left"'})," for content-focused landing pages such as articles or long-form details."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h2,{id:"header-content",children:"Header content"}),`
`,e.jsxs(t.p,{children:["The header contains a two-part title, an actions region, and an optional announcements region. The header body left region (",e.jsx(t.code,{children:"secondary-title"}),", ",e.jsx(t.code,{children:"main-title"}),", ",e.jsx(t.code,{children:"action"}),") is centered by default. When the ",e.jsx(t.code,{children:"announcements"})," slot has content, the layout switches to a two-column header with the announcements displayed on the right side. When the announcements slot is empty, the title and actions span the full width and remain centered."]}),`
`,e.jsx(t.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"alignment"})," property to switch between ",e.jsx(t.code,{children:"center"})," (default) and ",e.jsx(t.code,{children:"left"})," alignment for the header content."]}),`
`,e.jsx(t.h3,{id:"announcements",children:"Announcements"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"announcements"})," slot to surface time-sensitive information — outages, holidays, promoted features — beside the header title. The layout automatically re-balances the header when the announcements slot has content."]}),`
`,e.jsx(t.h2,{id:"background-image",children:"Background image"}),`
`,e.jsxs(t.p,{children:["The header ships with a gradient background by default. To display an image behind the header, provide ",e.jsx(t.code,{children:"image-url-large"})," and ",e.jsx(t.code,{children:"image-url-small"})," attributes and the component will render a responsive ",e.jsx(t.code,{children:"<picture>"})," element that swaps sources at the mobile breakpoint (768px). If you need full control over the picture element, you can instead slot in your own ",e.jsx(t.code,{children:"<img>"})," or ",e.jsx(t.code,{children:"<picture>"})," using the ",e.jsx(t.code,{children:"image"})," slot. A direct-child ",e.jsx(t.code,{children:"<img>"})," without a slot attribute is automatically assigned to the ",e.jsx(t.code,{children:"image"})," slot as a convenience."]}),`
`,e.jsxs(t.p,{children:["When a background image is present, the component sets a ",e.jsx(t.code,{children:":state(has-image)"})," custom state on the host and layers a darkening gradient overlay on top of the image (denser at the top, lighter at the bottom) so the header title, actions, and announcements remain legible against arbitrary photo content. Tune the top and bottom colors of that overlay with ",e.jsx(t.code,{children:"--forge-landing-page-layout-header-overlay-start"})," and ",e.jsx(t.code,{children:"--forge-landing-page-layout-header-overlay-end"})," if the default treatment is too dark, too light, or you'd like a color-tinted overlay:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`forge-landing-page-layout {
  --forge-landing-page-layout-header-overlay-start: rgba(0, 0, 0, 0.85);
  --forge-landing-page-layout-header-overlay-end: rgba(0, 0, 0, 0.25);
}
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-landing-page-layout
  image-url-large="https://example.com/large.jpg"
  image-url-small="https://example.com/small.jpg">
  <!-- header, body, and footer content -->
</forge-landing-page-layout>
`})}),`
`,e.jsx(o,{of:h}),`
`,e.jsxs(t.h3,{id:"on-image-button-utility-class",children:[e.jsx(t.code,{children:"on-image"})," button utility class"]}),`
`,e.jsxs(t.p,{children:["When you use a background image, the default Forge button colors (typically indigo) may not have enough contrast against the image. Apply the ",e.jsx(t.code,{children:"on-image"})," class to any ",e.jsx(t.code,{children:"forge-button"})," in the ",e.jsx(t.code,{children:"action"})," slot to opt into a light-on-image treatment:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Text"})," buttons render with white label text."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Outlined"})," buttons render with a white border and white label text."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Filled"})," buttons swap to a white background with a dark label."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-landing-page-layout image-url-large="/hero.jpg" image-url-small="/hero.jpg">
  <span slot="secondary-title">Winter is here</span>
  <h2 slot="main-title">Hit the slopes this season</h2>
  <forge-button class="on-image" slot="action" variant="filled">Explore trails</forge-button>
  <forge-button class="on-image" slot="action" variant="outlined">Buy a pass</forge-button>
</forge-landing-page-layout>
`})}),`
`,e.jsxs(t.p,{children:["The utility is scoped to buttons projected into the ",e.jsx(t.code,{children:"action"})," slot — it does not affect buttons elsewhere on the page."]}),`
`,e.jsx(t.h3,{id:"text-color",children:"Text color"}),`
`,e.jsxs(t.p,{children:["The header title and secondary title render in white by default so the light-on-dark treatment holds across every theme. Override ",e.jsx(t.code,{children:"--forge-landing-page-layout-header-color"})," on the host if you need a different color for a bespoke background treatment:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`forge-landing-page-layout {
  --forge-landing-page-layout-header-color: var(--forge-theme-primary-container-low);
}
`})}),`
`,e.jsx(t.h3,{id:"background-gradient",children:"Background gradient"}),`
`,e.jsxs(t.p,{children:["The default header background is a diagonal gradient from Forge blue-800 to indigo-900. Adjust either end of the gradient with ",e.jsx(t.code,{children:"--forge-landing-page-layout-header-gradient-start"})," and ",e.jsx(t.code,{children:"--forge-landing-page-layout-header-gradient-end"})," to match your app's theme:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`forge-landing-page-layout {
  --forge-landing-page-layout-header-gradient-start: var(--forge-theme-primary);
  --forge-landing-page-layout-header-gradient-end: var(--forge-theme-tertiary);
}
`})}),`
`,e.jsx(t.h2,{id:"top-and-body-footer-content",children:"Top and body-footer content"}),`
`,e.jsx(t.p,{children:"Two additional slots span the full width of the body:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"top"})," — Rendered above the body columns. Use it for callouts, stats rows, or featured cards."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"body-footer"})," — Rendered below the body columns. Use it for supporting content that should stay inside the body's max width."]}),`
`]}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.code,{children:"top"})," slot is empty, the body area sits flush against the header. When it has content, additional spacing is applied so it separates cleanly from the header."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(t.h2,{id:"size",children:"Size"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"size"})," property to switch between the default ",e.jsx(t.code,{children:"normal"})," content width (1040px) and ",e.jsx(t.code,{children:"wide"})," (1280px) when you need more horizontal breathing room."]}),`
`,e.jsx(t.h2,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsx(t.p,{children:"The component ships with two responsive breakpoints out of the box:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Tablet (max-width: 900px)"})," — The body switches to a four-column grid, and ",e.jsx(t.code,{children:"three"}),"-column mode collapses to a stacked single-column layout."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Mobile (max-width: 768px)"})," — The header body switches to a stacked layout with centered content, action buttons stack vertically, and body columns are rendered in a single-column flow."]}),`
`]}),`
`,e.jsxs(t.p,{children:["You do not need to configure these breakpoints. The responsive behavior is applied automatically and works alongside the ",e.jsx(t.code,{children:"mode"}),", ",e.jsx(t.code,{children:"alignment"}),", and ",e.jsx(t.code,{children:"size"})," properties."]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{})]})}function ae(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{ae as default};
