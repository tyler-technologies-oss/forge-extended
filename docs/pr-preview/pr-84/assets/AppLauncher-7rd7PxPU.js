import{j as e,M as s,T as r,C as a}from"./blocks-B0OjSayb.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as l}from"./CustomArgTypes-CYvgLjEA.js";import{A as p,D as c}from"./AppLauncher.stories-lkn8d1Pb.js";import"./iframe-B2mV9RtW.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-lNsBCyRy.js";import"./with-default-aria-Cs-n8B87.js";import"./base-button-adapter-DvNRkuco.js";import"./index-DRK5Ctgm.js";import"./popover-C1Q0NY-F.js";import"./with-longpress-listener-MySXEwC6.js";import"./dismissible-stack-3sNUeYhj.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./when-DfnyT8j1.js";import"./directive-CJw_OlP2.js";import"./index-DCfU7iAS.js";import"./style-map-DcAJogwl.js";import"./class-map-Blf8sudV.js";import"./index-BM_V16Yt.js";import"./list-8Z0Zn0BE.js";import"./index-C5khFUYW.js";import"./index-D3D_E62T.js";import"./index-VOSQ-5iy.js";import"./index-Cyz5RnJe.js";import"./index-Cz4gCKnF.js";import"./tooltip-D9zyC_CU.js";import"./index-BuBTZvtv.js";import"./skeleton-constants-BPJuMnjf.js";function t(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(r,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-app-launcher>"})," component is a navigation solution designed for the Tyler Cloud ecosystem, enabling users to easily switch between applications and contexts. It provides a unified interface for accessing both related and all available applications within the Tyler platform, enhancing user workflow and navigation efficiency."]}),`
`,e.jsx(n.p,{children:"The component adapts responsively to screen size, presenting as a popover on desktop devices and a full-screen dialog on mobile devices to ensure optimal user experience across all platforms."}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-app-launcher>"})," component is designed to be used within a ",e.jsx(n.code,{children:"<forge-app-bar>"}),", typically placed in the ",e.jsx(n.code,{children:"end"})," slot alongside other user-related actions like the user profile component. This ensures consistent navigation structure throughout Tyler Cloud applications."]}),`
`,e.jsx(n.h3,{id:"app-bar-integration",children:"App Bar Integration"}),`
`,e.jsxs(n.p,{children:["When using the app launcher within an app bar, you should set the ",e.jsx(n.code,{children:'theme-mode="scoped"'})," attribute on the ",e.jsx(n.code,{children:"<forge-app-bar>"})," to ensure proper theming inheritance and prevent the app bar's theme tokens from cascading into the launcher's popover content."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-bar theme-mode="scoped">
  <forge-app-launcher slot="end" id="app-launcher">
    <!-- Content slots -->
  </forge-app-launcher>
</forge-app-bar>

<script>
  const appLauncher = document.querySelector('#app-launcher');

  const allApps = [
    {
      label: 'Payments Administration',
      iconName: 'payment',
      uri: 'http://www.google.com',
      target: '_blank'
    },
    {
      label: 'PEP Administration',
      iconName: 'admin_panel_settings',
      uri: 'http://www.google.com',
      target: '_blank'
    }
  ];

  appLauncher.allApps = allApps;
<\/script>
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
`,e.jsx(n.p,{children:"A skeleton loading state that displays while application data is being fetched:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Configurable number of skeleton placeholders via the ",e.jsx(n.code,{children:"numberOfSkeletons"})," property"]}),`
`,e.jsxs(n.li,{children:["Replaces all other content when the ",e.jsx(n.code,{children:"loading"})," property is set to ",e.jsx(n.code,{children:"true"})]}),`
`,e.jsx(n.li,{children:"Provides visual feedback during async operations"}),`
`,e.jsx(n.li,{children:"Automatically returns to the previous view when loading completes"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-launcher loading number-of-skeletons="8">
  <!-- Slots will be hidden during loading state -->
</forge-app-launcher>

<script>
  const appLauncher = document.querySelector('forge-app-launcher');

  // Show loading state
  appLauncher.loading = true;
  appLauncher.numberOfSkeletons = 6;

  // Simulate data loading
  setTimeout(() => {
    appLauncher.loading = false;
    // Set your app data here
  }, 2000);
<\/script>
`})}),`
`,e.jsx(n.h2,{id:"custom-links",children:"Custom Links"}),`
`,e.jsxs(n.p,{children:["The component supports custom links through the ",e.jsx(n.code,{children:"<forge-custom-link>"})," utility component, which provides accessible and visually consistent links within the launcher. Custom links appear in a separate section and are ideal for documentation, FAQ pages, or other supplementary resources."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-launcher>
  <span slot="custom-links-title">Resources</span>
  <forge-custom-link slot="custom-link">
    <a href="/documentation" target="_blank">Documentation</a>
  </forge-custom-link>
  <forge-custom-link slot="custom-link">
    <a href="/support" target="_blank">Support Center</a>
  </forge-custom-link>
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
`]})]})}function E(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{E as default};
