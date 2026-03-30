import{j as e,M as a,T as r,C as s}from"./blocks-Cv4__f6F.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-3wdG1k5P.js";import{A as d,D as c}from"./AppLayout.stories-kxyN6EGu.js";import"./iframe-QkmlJ-kp.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-B8t19-e8.js";import"./app-layout-C1J5EsAx.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./with-default-aria-CvB9LU3Y.js";import"./state-DBVR7dm4.js";import"./index-CI_IGYGh.js";import"./index-DBwK1UT7.js";import"./dismissible-stack-BX5JF-f_.js";import"./list-C43hS4oY.js";import"./index-cBelV4uK.js";import"./base-button-adapter-B1Z38RWC.js";import"./index-N2IZRE9S.js";import"./tooltip-DGcf6yzS.js";import"./with-longpress-listener-DAN0CR8F.js";import"./index-Buy3jA5E.js";import"./index-BCOt392e.js";import"./index-j4wPbdGw.js";function t(o){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(r,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-app-layout>"})," component provides a responsive layout structure for Tyler Cloud applications, featuring an embedded app bar with navigation drawer functionality. This component adapts automatically to different screen sizes, providing an optimal user experience across desktop and mobile devices."]}),`
`,e.jsx(n.p,{children:"The layout includes a built-in app bar with configurable slots and a responsive navigation system that transforms between a persistent side drawer on large screens and a modal drawer on smaller screens."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-app-layout>"})," component serves as the foundational layout structure for applications, providing both the app bar and navigation framework in a single, cohesive component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="My Application">
  <!-- App bar content -->
  <img src="/logo.png" alt="Company Logo" slot="app-bar-logo" />
  <forge-button slot="app-bar-end" variant="raised">Action</forge-button>

  <!-- Navigation content -->
  <forge-list slot="navigation">
    <forge-list-item>
      <forge-icon slot="start" name="dashboard"></forge-icon>
      <button type="button">Dashboard</button>
    </forge-list-item>
    <forge-list-item>
      <forge-icon slot="start" name="people"></forge-icon>
      <button type="button">Users</button>
    </forge-list-item>
  </forge-list>

  <!-- Main content -->
  <main>
    <h1>Page Content</h1>
    <p>Your application content goes here.</p>
  </main>

  <!-- Footer -->
  <div slot="footer">
    <p>&copy; 2024 Tyler Technologies</p>
  </div>
</forge-app-layout>
`})}),`
`,e.jsx(n.h2,{id:"app-bar-integration",children:"App Bar Integration"}),`
`,e.jsxs(n.p,{children:["The component includes an embedded ",e.jsx(n.code,{children:"<forge-app-bar>"})," with several configurable slots for custom content. The app bar automatically includes a menu button on small screens to control the navigation drawer."]}),`
`,e.jsx(n.h3,{id:"app-bar-slots",children:"App Bar Slots"}),`
`,e.jsx(n.p,{children:"The app bar provides dedicated slots for different types of content:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Logo slot"}),": For company or application branding"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Start slot"}),": For actions at the beginning of the app bar"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Center slot"}),": For centered content like search bars"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"End slot"}),": For actions at the end of the app bar (user profile, settings, etc.)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="Dashboard">
  <!-- Logo in the app bar -->
  <forge-avatar slot="app-bar-logo" size="small">
    <img src="/company-logo.png" alt="Company" />
  </forge-avatar>

  <!-- Start actions -->
  <forge-button slot="app-bar-start" variant="text">
    <forge-icon name="refresh" slot="start"></forge-icon>
    Refresh
  </forge-button>

  <!-- Center content -->
  <forge-text-field slot="app-bar-center" placeholder="Search...">
    <forge-icon slot="leading" name="search"></forge-icon>
  </forge-text-field>

  <!-- End actions -->
  <forge-user-profile slot="app-bar-end" full-name="John Doe" email="john.doe@example.com"> </forge-user-profile>
</forge-app-layout>
`})}),`
`,e.jsx(n.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsx(n.p,{children:"The component automatically adapts to screen size using a configurable breakpoint (default: 960px):"}),`
`,e.jsx(n.h3,{id:"large-screens--breakpoint",children:"Large Screens (>= breakpoint)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Navigation appears as a persistent drawer in the body-left area"}),`
`,e.jsxs(n.li,{children:["Can use standard drawer (default) or mini drawer mode via the ",e.jsx(n.code,{children:"use-mini-drawer"})," attribute"]}),`
`,e.jsx(n.li,{children:"Menu button is hidden since navigation is always visible"}),`
`,e.jsx(n.li,{children:"Full scaffold layout with dedicated navigation space"}),`
`,e.jsx(n.li,{children:"Toggle button available to collapse/expand the drawer"}),`
`]}),`
`,e.jsx(n.h3,{id:"small-screens--breakpoint",children:"Small Screens (< breakpoint)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Navigation appears as a modal drawer triggered by the menu button"}),`
`,e.jsx(n.li,{children:"Menu button becomes visible in the app bar start slot"}),`
`,e.jsx(n.li,{children:"Drawer overlays content and can be toggled open/closed"}),`
`,e.jsx(n.li,{children:"Drawer automatically closes when screen size increases"}),`
`,e.jsxs(n.li,{children:["Always uses a modal dialog drawer regardless of ",e.jsx(n.code,{children:"use-mini-drawer"})," setting"]}),`
`]}),`
`,e.jsx(n.h3,{id:"custom-breakpoint",children:"Custom Breakpoint"}),`
`,e.jsxs(n.p,{children:["You can customize the responsive breakpoint by setting the ",e.jsx(n.code,{children:"breakpoint"})," property:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Use a 1024px breakpoint instead of the default 960px -->
<forge-app-layout app-title="Desktop App" breakpoint="1024">
  <!-- Navigation will switch to drawer mode at 1024px -->
</forge-app-layout>

<!-- Use a smaller 768px breakpoint for tablets -->
<forge-app-layout app-title="Tablet App" breakpoint="768">
  <!-- Navigation switches to drawer mode at 768px -->
</forge-app-layout>
`})}),`
`,e.jsx(n.h2,{id:"navigation-content",children:"Navigation Content"}),`
`,e.jsxs(n.p,{children:["The navigation slot accepts any content but works best with structured navigation elements like ",e.jsx(n.code,{children:"<forge-list>"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="Administration">
  <forge-list slot="navigation" navlist>
    <!-- Dashboard Section -->
    <forge-list-item>
      <forge-icon slot="start" name="dashboard"></forge-icon>
      <a href="/dashboard">Dashboard</a>
    </forge-list-item>

    <!-- Divider -->
    <forge-divider></forge-divider>

    <!-- Users Section -->
    <forge-list-item>
      <forge-icon slot="start" name="people"></forge-icon>
      <a href="/users">Users</a>
    </forge-list-item>
    <forge-list-item>
      <forge-icon slot="start" name="admin_panel_settings"></forge-icon>
      <a href="/roles">Roles & Permissions</a>
    </forge-list-item>
  </forge-list>
</forge-app-layout>
`})}),`
`,e.jsx(n.h2,{id:"mini-drawer-mode",children:"Mini Drawer Mode"}),`
`,e.jsx(n.p,{children:"The app-layout component supports using a mini drawer for navigation on large screens. The mini drawer provides a collapsed view that shows only icons, allowing for more content space while maintaining quick access to navigation."}),`
`,e.jsx(n.h3,{id:"using-mini-drawer",children:"Using Mini Drawer"}),`
`,e.jsxs(n.p,{children:["Enable mini drawer mode by setting the ",e.jsx(n.code,{children:"use-mini-drawer"})," attribute:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="My Application" use-mini-drawer>
  <forge-list slot="navigation" navlist>
    <forge-list-item>
      <forge-icon slot="start" name="dashboard"></forge-icon>
      <button type="button">Dashboard</button>
    </forge-list-item>
    <forge-list-item>
      <forge-icon slot="start" name="people"></forge-icon>
      <button type="button">Users</button>
    </forge-list-item>
  </forge-list>

  <!-- Main content -->
  <main>Your content here</main>
</forge-app-layout>
`})}),`
`,e.jsxs(n.p,{children:["When enabled, the navigation drawer on large screens will use the ",e.jsx(n.code,{children:"<forge-mini-drawer>"})," component instead of the standard ",e.jsx(n.code,{children:"<forge-drawer>"}),", providing a more compact navigation experience."]}),`
`,e.jsx(n.h3,{id:"hover-expansion",children:"Hover Expansion"}),`
`,e.jsx(n.p,{children:"Enable hover expansion to allow the mini drawer to temporarily expand when the user hovers over it:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="My Application" use-mini-drawer mini-hover>
  <forge-list slot="navigation" navlist>
    <!-- Navigation items -->
  </forge-list>
</forge-app-layout>
`})}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"mini-hover"})," is enabled:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The drawer remains collapsed by default, showing only icons"}),`
`,e.jsx(n.li,{children:"Hovering over the drawer temporarily expands it to show full labels"}),`
`,e.jsx(n.li,{children:"The drawer collapses again when the mouse leaves the drawer area"}),`
`,e.jsx(n.li,{children:"This provides a space-efficient navigation option while maintaining easy access to full labels"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The mini drawer mode only affects the navigation drawer on large screens (above the breakpoint). On small screens, the navigation will always use a modal drawer regardless of the ",e.jsx(n.code,{children:"use-mini-drawer"})," setting."]}),`
`]}),`
`,e.jsx(n.h2,{id:"layout-slots",children:"Layout Slots"}),`
`,e.jsx(n.p,{children:"Beyond the app bar and navigation, the component provides additional layout slots for content placement:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default slot"}),": Main content area"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Body slots"}),": ",e.jsx(n.code,{children:"body-header"}),", ",e.jsx(n.code,{children:"body-footer"}),", ",e.jsx(n.code,{children:"body-left"}),", ",e.jsx(n.code,{children:"body-right"})," for additional content areas"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Footer slot"}),": Application footer content"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="Complex Layout">
  <!-- Navigation -->
  <nav slot="navigation">...</nav>

  <!-- Body header -->
  <div slot="body-header">
    <forge-toolbar>
      <h1>Page Title</h1>
      <forge-button slot="end">Action</forge-button>
    </forge-toolbar>
  </div>

  <!-- Main content (default slot) -->
  <main>
    <h2>Primary Content</h2>
    <p>Your main application content.</p>
  </main>

  <!-- Body footer -->
  <div slot="body-footer">
    <forge-pagination></forge-pagination>
  </div>

  <!-- Application footer -->
  <footer slot="footer">
    <p>&copy; 2024 Tyler Technologies. All rights reserved.</p>
  </footer>
</forge-app-layout>
`})}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The embedded menu button includes appropriate focus management and keyboard navigation"}),`
`,e.jsx(n.li,{children:"Navigation drawer follows standard dialog accessibility patterns when in modal mode"}),`
`,e.jsx(n.li,{children:"App bar maintains proper heading structure and landmark roles"}),`
`,e.jsx(n.li,{children:"All slots support proper semantic markup for screen readers"}),`
`,e.jsx(n.li,{children:"Responsive behavior maintains keyboard accessibility across screen sizes"}),`
`]})]})}function E(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{E as default};
