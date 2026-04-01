import{j as e,M as s,T as a,C as i}from"./blocks-BW4u9Lsg.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-BunTHmWN.js";import{U as h,D as p}from"./UserProfile.stories-BrcdO94y.js";import{Demo as c}from"./ProfileLink.stories-DA_-RrZh.js";import"./ThemeToggle.stories-CPRXG6iw.js";import"./iframe-D57lnzun.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-T1MgWK6d.js";import"./with-default-aria-DA-8eCL_.js";import"./constants-DdZyzDPp.js";import"./ref-C8dMY2Gd.js";import"./async-directive-SbbwZGlH.js";import"./directive-CJw_OlP2.js";import"./state-DGP-eT7s.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./theme-toggle-Dnr0KVhS.js";import"./index-Cumu2rFi.js";import"./base-button-adapter-w5D8OH20.js";import"./index-CFHPfiOd.js";import"./popover-B8X_r6vR.js";import"./with-longpress-listener-XGr-ra-8.js";import"./dismissible-stack-Rwd4Acpy.js";import"./with-form-associated-BG03-zjz.js";import"./profile-link-JhSyOE-v.js";import"./index-p8-3bjxY.js";import"./list-jX-2e4kn.js";import"./index-DFD3oKCU.js";import"./style-map-Daq6ut8_.js";import"./class-map-x4fM8xZp.js";import"./index-D4nVRwkL.js";import"./index-DOhh0tEB.js";import"./divider-Cy3mGc1-.js";import"./index-DZ8fPbc3.js";import"./index-CVfrQ3uQ.js";import"./toolbar-qOt-92_m.js";import"./index-rBv2xUk8.js";function n(o){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(a,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<forge-user-profile>"}),` component is a versatile solution adhering to the Forge design language for displaying user
authentication state within an application. When a user is signed in (has a `,e.jsx(t.code,{children:"full-name"}),` value), it displays an avatar
button that opens a popover containing the user's name, email, and sign out option. When no user is signed in, it displays
a sign-in button instead. It also has support for optional features like a theme toggle and custom link slots.`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["It's important to note that the ",e.jsx(t.code,{children:"<forge-user-profile>"})," component is designed to be used within a ",e.jsx(t.code,{children:"<forge-app-bar>"}),`. This ensures that the user profile is
integrated seamlessly into the application's navigation structure. The component can be placed in the `,e.jsx(t.code,{children:"end"})," slot of the ",e.jsx(t.code,{children:"<forge-app-bar>"}),`, which is
typically reserved for user-related actions.`]}),`
`,e.jsx(t.h3,{id:"app-bar-theme-mode",children:"App Bar Theme Mode"}),`
`,e.jsxs(t.p,{children:["Due to the ",e.jsx(t.code,{children:"<forge-user-profile>"})," being comprised of multiple components, including the ",e.jsx(t.code,{children:"<forge-popover>"}),", you need to set the ",e.jsx(t.code,{children:'theme-mode="scoped"'}),` attribute
on the `,e.jsx(t.code,{children:"<forge-app-bar>"}),` to ensure that it inherits the correct design and the app bar's theme tokens do not cascade down into the user profile popover. If you
do not set this attribute, the user profile popover may not display correctly.`]}),`
`,e.jsxs(t.p,{children:["See the ",e.jsx(t.a,{href:"https://forge.tylerdev.io/main/?path=/docs/components-app-bar--docs#theme-mode",rel:"nofollow",children:"Forge App Bar documentation"})," for more details on the ",e.jsx(t.code,{children:"theme-mode"})," attribute."]}),`
`,e.jsx(t.h2,{id:"custom-links",children:"Custom Links"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<forge-profile-link>"}),` component is a utility component for rendering accessible, visually consistent links within the
`,e.jsx(t.code,{children:"<forge-user-profile>"})," popover. This component is configured to render in the ",e.jsx(t.code,{children:"link"})," slot of the ",e.jsx(t.code,{children:"<forge-user-profile>"}),`. It
supports an optional icon and ensures links are part of a fully accessible list structure.`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"The optional profile link should appear last in the user profile link list to maintain a consistent design and user experience across all apps"}),`
`]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(t.h2,{id:"theme-toggle",children:"Theme Toggle"}),`
`,e.jsxs(t.p,{children:["You can also include a theme toggle within the user profile popover by specifying the ",e.jsx(t.code,{children:"theme-toggle"}),` attribute. This allows
users to switch between light and dark themes directly from their profile menu.`]}),`
`,e.jsxs(t.p,{children:["The theme toggle will set the ",e.jsx(t.code,{children:"data-forge-theme"})," attribute on the ",e.jsx(t.code,{children:"<html>"}),` element, which you can use CSS to target for styling
and the correct theme.`]}),`
`,e.jsx(t.h4,{id:"usage-example",children:"Usage example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`@use '@tylertech/forge/sass/theme/theme-dark';

html[data-forge-theme='dark'] {
  @include theme-dark.theme-properties;
}
`})}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Ensure you provide appropriate ",e.jsx(t.code,{children:"button-label"})," text for the ",e.jsx(t.code,{children:"aria-label"})," of the profile button if you need something other than the default."]}),`
`]})]})}function Q(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{Q as default};
