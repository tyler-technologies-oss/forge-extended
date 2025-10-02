import{j as e,M as s,T as l,C as n}from"./blocks-DEx0CQVg.js";import{useMDXComponents as r}from"./index-DNFFXgUn.js";import{C as a}from"./CustomArgTypes-DdXKHfag.js";import{U as h,D as p}from"./UserProfile.stories-DotWexis.js";import{Demo as c}from"./ProfileLink.stories-DXSCEfvd.js";import"./ThemeToggle.stories-1uMXhVzT.js";import"./iframe-CGuzONX_.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-B8GmwqSd.js";import"./icon-registry-mVGA_-i4.js";import"./ref-CtlrwaLU.js";import"./custom-element-BhZVzxrc.js";import"./property-DGwcTN3A.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./theme-toggle-DBqwxhD4.js";import"./with-default-aria-DVfgA1lb.js";import"./utils-Oij4eZxH.js";import"./popover-BFvuOvok.js";import"./with-longpress-listener-HFFGvIud.js";import"./dismissible-stack-KX1zmWuD.js";import"./index-BMxI_63a.js";import"./base-button-adapter-maTtzH39.js";import"./profile-link-BLs9K9J9.js";import"./list-DmliUt__.js";import"./style-map-sjXdlo3o.js";import"./class-map-B1jL19WM.js";import"./index-BzDAbKG4.js";import"./index-BjN8rh-Z.js";import"./index-BMbuRFt-.js";import"./index-CluDnuXS.js";function i(o){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(l,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<forge-user-profile>"}),` component is a versatile solution adhering to the Forge design language for displaying authenticated
user information within an application. It encapsulates a trigger button and a popover that reveals the signed-in user's
name, email, and sign out option. It also has support for optional features like a theme toggle and custom link slots.`]}),`
`,e.jsx(n,{of:p}),`
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
`,e.jsx(n,{of:c}),`
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
`,e.jsx(a,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Ensure you provide appropriate ",e.jsx(t.code,{children:"button-label"})," text for the ",e.jsx(t.code,{children:"aria-label"})," of the profile button if you need something other than the default."]}),`
`]})]})}function G(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{G as default};
