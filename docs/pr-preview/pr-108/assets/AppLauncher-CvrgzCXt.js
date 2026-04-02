import{j as e,M as r,T as s,C as o}from"./blocks-4ZRmrKJW.js";import{useMDXComponents as t}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-Bd1WHL4v.js";import{A as p,D as c}from"./AppLauncher.stories-VwMOHNm_.js";import"./iframe-B5l1JCjG.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-prfETlqn.js";import"./base-lit-element-CXweCX9k.js";import"./state-BNMjGd4l.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./when-3fO0zp9C.js";import"./directive-CJw_OlP2.js";import"./icon-registry-CVZmjVkh.js";import"./index-BgoSBW8V.js";import"./style-map-BOLq2HyB.js";import"./class-map-ByaGkBuw.js";import"./index-D8zxfUIh.js";import"./base-button-adapter-Bq_ji-77.js";import"./with-default-aria-B-ZOXxlQ.js";import"./a11y-utils-LWi95G9o.js";import"./icon-IgZWaP6o.js";import"./index-Dm0xgiWr.js";import"./index-BVRcoZ34.js";import"./dismissible-stack-CrB4g1tl.js";import"./index-CNIBD4cQ.js";import"./index-CPHdt528.js";import"./index-aVseskA1.js";import"./popover-DK4jXWCQ.js";import"./with-longpress-listener-Bs0sRa0m.js";import"./index-DBMt9o1Q.js";import"./index-B6pKinLH.js";import"./tooltip-CyBFXGvP.js";import"./index-BCtbcYvd.js";import"./skeleton-constants-D_iEpmCM.js";import"./index-BQuqK5W8.js";import"./list-DQhLWSQ4.js";import"./index-DiXUrg5c.js";function a(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:p}),`
`,e.jsx(s,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-app-launcher>"})," component is a navigation solution designed for the Tyler Cloud ecosystem, enabling users to easily switch between applications and contexts. It provides a unified interface for accessing both related and all available applications within the Tyler platform, enhancing user workflow and navigation efficiency."]}),`
`,e.jsx(n.p,{children:"The component adapts responsively to screen size, presenting as a popover on desktop devices and a full-screen dialog on mobile devices to ensure optimal user experience across all platforms."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-app-launcher>"})," component is designed to be used within a ",e.jsx(n.code,{children:"<forge-app-bar>"}),", typically placed in the ",e.jsx(n.code,{children:"end"})," slot alongside other user-related actions like the user profile component. This ensures consistent navigation structure throughout Tyler Cloud applications."]}),`
`,e.jsx(n.p,{children:"When using the app launcher, you can provide two primary data sources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"relatedApps"}),": An array of applications relevant to the current user's context, displayed in the default view."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"allApps"}),': An array of all available applications within the Tyler Cloud ecosystem, accessible via the "View all apps" button.']}),`
`]}),`
`,e.jsx(n.p,{children:"To do so, this requires the use of JavaScript to set the properties on the component instance."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-bar theme-mode="scoped">
  <forge-app-launcher slot="end" id="app-launcher"></forge-app-launcher>
</forge-app-bar>

<script>
  const appLauncher = document.querySelector('#app-launcher');

  const relatedApps = [
    {
      label: 'Project Management',
      iconName: 'assignment',
      uri: 'https://project-management.example.com',
      target: '_blank'
    },
    {
      label: 'Time Tracking',
      iconName: 'access_time',
      uri: ''
      target: '_blank'
    }
  ];

  const allApps = [
    {
      label: 'Payments Administration',
      iconName: 'payment',
      uri: 'https://payments-admin.example.com',
      target: '_blank'
    },
    {
      label: 'PEP Administration',
      iconName: 'admin_panel_settings',
      uri: 'https://pep-admin.example.com',
      target: '_blank'
    },
    {
      label: 'User Management',
      iconName: 'people',
      uri: 'https://user-management.example.com',
      target: '_blank'
    }
  ];

  appLauncher.relatedApps = relatedApps;
  appLauncher.allApps = allApps;
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"app-bar-integration",children:"App Bar Integration"}),`
`,e.jsxs(n.p,{children:["When using the app launcher within an app bar, you should set the ",e.jsx(n.code,{children:'theme-mode="scoped"'})," attribute on the ",e.jsx(n.code,{children:"<forge-app-bar>"})," to ensure proper theming inheritance and prevent the app bar's theme tokens from cascading into the launcher's popover content."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Correct theming with theme-mode="scoped" -->
<forge-app-bar theme-mode="scoped">
  <forge-app-launcher slot="end" id="app-launcher">
    <!-- Content slots -->
  </forge-app-launcher>
</forge-app-bar>
`})}),`
`,e.jsx(n.h2,{id:"views",children:"Views"}),`
`,e.jsx(n.p,{children:"The app launcher supports three primary views:"}),`
`,e.jsx(n.h3,{id:"related-apps-view",children:"Related Apps View"}),`
`,e.jsx(n.p,{children:"The default view showing a curated list of applications relevant to the current user's context. This view includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A list of related applications with icons and labels"}),`
`,e.jsx(n.li,{children:'A "View all apps" button to access the complete application catalog'}),`
`,e.jsx(n.li,{children:"Optional custom links section for additional resources"}),`
`]}),`
`,e.jsx(n.h3,{id:"all-apps-view",children:"All Apps View"}),`
`,e.jsx(n.p,{children:"A comprehensive view displaying all available applications with:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Search functionality to filter applications by name"}),`
`,e.jsx(n.li,{children:"Complete list of applications in the Tyler Cloud ecosystem"}),`
`,e.jsx(n.li,{children:"Back button to return to the related apps view (when available)"}),`
`]}),`
`,e.jsx(n.h3,{id:"loading-view",children:"Loading View"}),`
`,e.jsx(n.p,{children:"A skeleton loading state that displays automatically when no application data is available:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Shows when both ",e.jsx(n.code,{children:"relatedApps"})," and ",e.jsx(n.code,{children:"allApps"})," arrays are empty"]}),`
`,e.jsx(n.li,{children:"Displays skeleton placeholders to provide visual feedback during data loading"}),`
`,e.jsx(n.li,{children:"Automatically transitions to the appropriate view when app data is provided"}),`
`]}),`
`,e.jsx(n.h2,{id:"custom-links",children:"Custom Links"}),`
`,e.jsxs(n.p,{children:["The component supports custom links through the ",e.jsx(n.code,{children:"<forge-app-launcher-link>"})," utility component, which provides accessible and visually consistent links within the launcher. Custom links appear in a separate section and are ideal for documentation, FAQ pages, or other supplementary resources."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-launcher>
  <span slot="app-launcher-links-title">Resources</span>
  <forge-app-launcher-link slot="app-launcher-link">
    <a href="/documentation" target="_blank">Documentation</a>
  </forge-app-launcher-link>
  <forge-app-launcher-link slot="app-launcher-link">
    <a href="/support" target="_blank">Support Center</a>
  </forge-app-launcher-link>
</forge-app-launcher>
`})}),`
`,e.jsx(n.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsx(n.p,{children:"The component automatically adapts to screen size using an internal media query breakpoint at 768px:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Desktop (>768px)"}),": Displays as a popover anchored to the launcher button"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mobile (≤768px)"}),": Displays as a full-screen persistent dialog for optimal touch interaction"]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The app launcher button includes appropriate ",e.jsx(n.code,{children:"aria-label"}),' text ("Open app launcher") for screen readers.']}),`
`,e.jsx(n.li,{children:"All application links maintain proper focus management and keyboard navigation."}),`
`,e.jsxs(n.li,{children:["The component supports standard dialog accessibility patterns with ",e.jsx(n.code,{children:'role="dialog"'})," and ",e.jsx(n.code,{children:'aria-modal="true"'})," when in mobile mode."]}),`
`,e.jsxs(n.li,{children:["Custom links should include descriptive link text and appropriate ",e.jsx(n.code,{children:"target"})," attributes for external resources."]}),`
`,e.jsxs(n.li,{children:["Search functionality includes proper labeling with ",e.jsx(n.code,{children:"placeholder"})," text and ",e.jsx(n.code,{children:'autocomplete="off"'})," for optimal screen reader experience."]}),`
`]})]})}function Y(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{Y as default};
