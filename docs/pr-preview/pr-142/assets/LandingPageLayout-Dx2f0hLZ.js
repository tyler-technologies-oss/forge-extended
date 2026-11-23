import{j as e,M as t}from"./blocks-DGUkakZ9.js";import{useMDXComponents as d}from"./index-De36GQbW.js";import"./iframe-aIta0XjW.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Migration/Landing Page Layout"}),`
`,e.jsx(n.h1,{id:"landing-page-layout-migration",children:"Landing Page Layout Migration"}),`
`,e.jsxs(n.p,{children:["Migrating from the ",e.jsx(n.code,{children:"forge-internal"})," ",e.jsx(n.code,{children:"<forge-landing-page-layout>"})," to ",e.jsx(n.code,{children:"@tylertech/forge-extended"}),"."]}),`
`,e.jsxs(n.p,{children:["The tag name, properties (",e.jsx(n.code,{children:"mode"}),", ",e.jsx(n.code,{children:"alignment"}),", ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"imageUrlLarge"}),", ",e.jsx(n.code,{children:"imageUrlSmall"}),"), slots, and existing CSS custom properties (",e.jsx(n.code,{children:"--forge-landing-page-layout-actions-gap"}),", ",e.jsx(n.code,{children:"-actions-gap-mobile"}),", ",e.jsx(n.code,{children:"-footer-padding"}),", ",e.jsx(n.code,{children:"-root-height"}),") are unchanged."]}),`
`,e.jsx(n.h2,{id:"key-changes",children:"Key Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No attribute reflection:"})," ",e.jsx(n.code,{children:"mode"}),", ",e.jsx(n.code,{children:"alignment"}),", ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"image-url-large"}),", and ",e.jsx(n.code,{children:"image-url-small"})," no longer reflect to host attributes. A selector such as ",e.jsx(n.code,{children:"forge-landing-page-layout[mode='three']"})," only matches if you set that attribute in markup yourself, and never matches a default value. Use ",e.jsx(n.code,{children:":state(mode-…)"}),", ",e.jsx(n.code,{children:":state(alignment-…)"}),", and ",e.jsx(n.code,{children:":state(size-…)"})," instead."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSS parts renamed:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"header-background-container"})," → ",e.jsx(n.code,{children:"header-background"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"header-welcome-container"})," → ",e.jsx(n.code,{children:"header-welcome"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"header-actions-container"})," → ",e.jsx(n.code,{children:"header-actions"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"body-container"})," → ",e.jsx(n.code,{children:"body"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"body-topcontainer"})," → ",e.jsx(n.code,{children:"body-top"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"body-left-container"})," → ",e.jsx(n.code,{children:"body-left"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"body-center-container"})," → ",e.jsx(n.code,{children:"body-center"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"body-right-container"})," → ",e.jsx(n.code,{children:"body-right"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"body-footer-container"})," → ",e.jsx(n.code,{children:"body-footer"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"footer-container"})," → ",e.jsx(n.code,{children:"footer"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Actions gap overrides now apply:"})," in ",e.jsx(n.code,{children:"forge-internal"}),", ",e.jsx(n.code,{children:"--forge-landing-page-layout-actions-gap"})," and ",e.jsx(n.code,{children:"--forge-landing-page-layout-actions-gap-mobile"})," were redeclared inside the component, so setting them on the host had no effect. They now work as documented, so remove any leftover overrides you don't want applied."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"New:"})," an ",e.jsx(n.code,{children:"on-image"})," class for buttons in the ",e.jsx(n.code,{children:"action"})," slot, CSS custom properties for content width, body padding, header colors, and the image overlay, and the ",e.jsx(n.code,{children:":state(empty-announcements)"}),", ",e.jsx(n.code,{children:":state(body-only)"}),", and ",e.jsx(n.code,{children:":state(has-image)"})," custom states."]}),`
`]}),`
`,e.jsx(n.h2,{id:"visual-changes",children:"Visual changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header gradient:"})," the default header background is a fixed blue/indigo gradient. In ",e.jsx(n.code,{children:"forge-internal"})," it was derived from the theme's ",e.jsx(n.code,{children:"tertiary"})," and ",e.jsx(n.code,{children:"primary"})," colors. See ",e.jsx(n.a,{href:"#restoring-the-theme-derived-header",children:"Restoring the theme-derived header"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header text color:"})," the header title and secondary title render in white by default. In ",e.jsx(n.code,{children:"forge-internal"})," they used the theme's ",e.jsx(n.code,{children:"on-primary"})," color. Override with ",e.jsx(n.code,{children:"--forge-landing-page-layout-header-color"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Background image dimming:"})," a background image is no longer dimmed with ",e.jsx(n.code,{children:"filter: brightness(0.5)"}),". A darkening gradient overlay is layered over it instead, denser at the top and lighter at the bottom. Tune it with ",e.jsx(n.code,{children:"--forge-landing-page-layout-header-overlay-start"})," and ",e.jsx(n.code,{children:"--forge-landing-page-layout-header-overlay-end"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Body spacing without ",e.jsx(n.code,{children:"top"})," content:"]})," when nothing is slotted into ",e.jsx(n.code,{children:"top"}),", the body columns now sit directly below the header. In ",e.jsx(n.code,{children:"forge-internal"})," this only happened after ",e.jsx(n.code,{children:"top"})," content was added and then removed, so most pages rendered about 48px of extra space above the body columns. Pages that use the ",e.jsx(n.code,{children:"top"})," slot are unaffected."]}),`
`]}),`
`,e.jsx(n.h2,{id:"before--after",children:"Before / After"}),`
`,e.jsx(n.h3,{id:"selecting-a-variant-from-outside-the-component",children:"Selecting a variant from outside the component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Before — reflected attributes on the host */
forge-landing-page-layout[mode='three'] { … }
forge-landing-page-layout[alignment='left'] { … }
forge-landing-page-layout[size='wide'] { … }
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* After — custom states on the host */
forge-landing-page-layout:state(mode-three) { … }
forge-landing-page-layout:state(alignment-left) { … }
forge-landing-page-layout:state(size-wide) { … }
`})}),`
`,e.jsx(n.h3,{id:"restoring-the-theme-derived-header",children:"Restoring the theme-derived header"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`forge-landing-page-layout {
  --forge-landing-page-layout-header-gradient-start: var(--forge-theme-tertiary);
  --forge-landing-page-layout-header-gradient-end: var(--forge-theme-primary);
  --forge-landing-page-layout-header-color: var(--forge-theme-on-primary);
}
`})}),`
`,e.jsx(n.h3,{id:"buttons-over-a-background-image",children:"Buttons over a background image"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- After — opt into the built-in on-image treatment -->
<forge-landing-page-layout image-url-large="/hero.jpg" image-url-small="/hero.jpg">
  <forge-button class="on-image" slot="action" variant="filled">Explore</forge-button>
  <forge-button class="on-image" slot="action" variant="outlined">Buy a pass</forge-button>
</forge-landing-page-layout>
`})}),`
`,e.jsx(n.h3,{id:"targeting-parts",children:"Targeting parts"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Before */
forge-landing-page-layout::part(body-container) { … }
forge-landing-page-layout::part(footer-container) { … }
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* After */
forge-landing-page-layout::part(body) { … }
forge-landing-page-layout::part(footer) { … }
`})}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"?path=/docs/components-landing-page-layout--docs",children:"Landing Page Layout docs"})," for the full API."]})]})}function h(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{h as default};
