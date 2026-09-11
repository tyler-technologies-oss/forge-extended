import{j as e,M as s,T as a,C as i}from"./blocks-B6dpfGno.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-Coi2GiBK.js";import{U as p,D as h}from"./UserProfile.stories-CTG2BzmD.js";import{Demo as c}from"./ProfileLink.stories-ByaSBRuH.js";import"./ThemeToggle.stories-Cxi8TmD4.js";import"./iframe-SHp831uv.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CCL4gPRI.js";import"./with-default-aria-8o2urQtC.js";import"./custom-element-B6C_dIc3.js";import"./constants-DRnO8cEF.js";import"./ref-BUQFqKvx.js";import"./async-directive-sXoZ91VK.js";import"./directive-CJw_OlP2.js";import"./utils-BQMvIrLC.js";import"./state-CuQqgled.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./theme-toggle-DIWphspx.js";import"./index-BvX6YG-j.js";import"./icon-button-q71bmWIK.js";import"./base-button-adapter-BVuIt3Kj.js";import"./focus-indicator-B9vvCHqs.js";import"./icon-rFRese_m.js";import"./index-poksSxGQ.js";import"./popover-C195UbFv.js";import"./with-longpress-listener-BbaSALIF.js";import"./dismissible-stack-DesdIcOG.js";import"./index-CpfWDvCn.js";import"./with-form-associated-CrAn_-fE.js";import"./button-toggle-group-constants-BJfObX6l.js";import"./profile-link-Bn_95VK5.js";import"./index-CmhctiGB.js";import"./list-CwHjiN9d.js";import"./index-BlpkZ6i7.js";import"./style-map-DTIaQhkS.js";import"./class-map-BFLBEnAY.js";import"./index-BKf0lMQ0.js";import"./button-constants-BjrjrMWP.js";import"./index-DcKUdkzw.js";import"./divider-C6ejeDne.js";import"./index-QCVF5AdA.js";import"./index-Cx5EkvF8.js";import"./toolbar-92yZYbx_.js";import"./index-VXU64xX2.js";function n(o){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(a,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<forge-user-profile>"}),` component is a versatile solution adhering to the Forge design language for displaying user
authentication state within an application. When a user is signed in (has a `,e.jsx(t.code,{children:"full-name"}),` value), it displays an avatar
button that opens a popover containing the user's name, email, and sign out option. When no user is signed in, it displays
a sign-in button instead. It also has support for optional features like a theme toggle and custom link slots.`]}),`
`,e.jsx(i,{of:h}),`
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
`]})]})}function se(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{se as default};
