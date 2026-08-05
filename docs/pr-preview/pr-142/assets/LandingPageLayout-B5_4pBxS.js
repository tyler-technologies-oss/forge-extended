import{j as e,M as a}from"./blocks-Ds6rXq2h.js";import{useMDXComponents as t}from"./index-De36GQbW.js";import"./iframe-PAcmqUG6.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Migration/Landing Page Layout"}),`
`,e.jsx(n.h1,{id:"landing-page-layout-migration",children:"Landing Page Layout Migration"}),`
`,e.jsxs(n.p,{children:["Migrating from the ",e.jsx(n.code,{children:"forge-internal"})," ",e.jsx(n.code,{children:"<forge-landing-page-layout>"})," to ",e.jsx(n.code,{children:"@tylertech/forge-extended"}),"."]}),`
`,e.jsx(n.h2,{id:"key-changes",children:"Key Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSS custom states replace attribute selectors:"})," external styles targeting ",e.jsx(n.code,{children:'forge-landing-page-layout[mode="…"]'}),", ",e.jsx(n.code,{children:'[alignment="…"]'}),", or ",e.jsx(n.code,{children:'[size="…"]'})," must move to ",e.jsx(n.code,{children:":state(mode-…)"}),", ",e.jsx(n.code,{children:":state(alignment-…)"}),", and ",e.jsx(n.code,{children:":state(size-…)"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Background image slots:"})," the ",e.jsx(n.code,{children:"image-small"})," and ",e.jsx(n.code,{children:"image-large"})," slots have been removed. Use the ",e.jsx(n.code,{children:"image-url-small"})," and ",e.jsx(n.code,{children:"image-url-large"})," attributes for responsive sources, or slot a single ",e.jsx(n.code,{children:"<img>"})," / ",e.jsx(n.code,{children:"<picture>"})," into the ",e.jsx(n.code,{children:"image"})," slot for full control. A direct-child ",e.jsx(n.code,{children:"<img>"})," without a ",e.jsx(n.code,{children:"slot"})," attribute is auto-assigned to the ",e.jsx(n.code,{children:"image"})," slot as a convenience."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"on-image"})," utility class:"]})," apply ",e.jsx(n.code,{children:'class="on-image"'})," to a ",e.jsx(n.code,{children:"forge-button"})," in the ",e.jsx(n.code,{children:"action"})," slot to make it legible over a background image (text/outlined buttons render white; filled buttons swap to a white background with a dark label)."]}),`
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
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"New states available on the host:"})," ",e.jsx(n.code,{children:":state(empty-announcements)"}),", ",e.jsx(n.code,{children:":state(body-only)"}),", ",e.jsx(n.code,{children:":state(has-image)"}),", ",e.jsx(n.code,{children:":state(mode-two-third | mode-equal | mode-three | mode-single)"}),", ",e.jsx(n.code,{children:":state(alignment-center | alignment-left)"}),", and ",e.jsx(n.code,{children:":state(size-normal | size-wide)"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"visual-changes",children:"Visual changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header gradient:"})," the default header background is a fixed indigo/blue gradient rather than one derived from the current theme's tertiary and primary colors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header text color:"})," header title and secondary title text renders in white by default (no longer derived from a theme token) so the light-on-dark treatment holds in every theme, including dark mode. Override with the new ",e.jsx(n.code,{children:"--forge-landing-page-layout-header-color"})," CSS custom property when a different color is needed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Background image overlay:"})," when a background image is present, a darkening gradient overlay (denser at the top, lighter at the bottom) is layered over it instead of dimming the image itself. Header content contrast is preserved without washing out image detail."]}),`
`]}),`
`,e.jsx(n.h2,{id:"before--after",children:"Before / After"}),`
`,e.jsx(n.h3,{id:"selecting-a-variant-from-outside-the-component",children:"Selecting a variant from outside the component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Before — attribute selectors on the host */
forge-landing-page-layout[mode='three'] { … }
forge-landing-page-layout[alignment='left'] { … }
forge-landing-page-layout[size='wide'] { … }
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* After — custom state selectors on the host */
forge-landing-page-layout:state(mode-three) { … }
forge-landing-page-layout:state(alignment-left) { … }
forge-landing-page-layout:state(size-wide) { … }
`})}),`
`,e.jsx(n.h3,{id:"providing-a-responsive-background-image",children:"Providing a responsive background image"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Before — separate slots for small/large images -->
<forge-landing-page-layout>
  <img slot="image-small" src="/hero-small.jpg" alt="" />
  <img slot="image-large" src="/hero-large.jpg" alt="" />
</forge-landing-page-layout>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- After — attributes drive an internal <picture> element -->
<forge-landing-page-layout image-url-small="/hero-small.jpg" image-url-large="/hero-large.jpg">
  <!-- header, body, and footer content -->
</forge-landing-page-layout>

<!-- Or, slot in a custom picture element when you need full control -->
<forge-landing-page-layout>
  <picture slot="image">
    <source srcset="/hero-small.avif" media="(max-width: 768px)" />
    <source srcset="/hero-large.avif" media="(min-width: 769px)" />
    <img src="/hero-large.jpg" alt="" />
  </picture>
</forge-landing-page-layout>
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
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"?path=/docs/components-landing-page-layout--docs",children:"Landing Page Layout docs"})," for the full API."]})]})}function g(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{g as default};
