import{j as e,M as i,T as a,C as s}from"./blocks-CraljzJV.js";import{useMDXComponents as o}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-B0Xq2PZI.js";import{A as d,D as c}from"./AppLayout.stories-BAN3ms6I.js";import"./iframe-C44ATlN0.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-C1sCl9VR.js";import"./if-defined-DpKpZsq1.js";import"./app-layout-zv20x4E2.js";import"./when-3fO0zp9C.js";import"./constants-DSgRJEDh.js";import"./with-default-aria-DEeb_wyb.js";import"./state-DpTv8ICE.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./index-DGAZgQ00.js";import"./scaffold-Cn4XAYyP.js";import"./index-WqZDX3f5.js";import"./dismissible-stack-DkzqwRYE.js";import"./list-Bf10YP8d.js";import"./focus-indicator-CzWXVDLT.js";import"./index-DNmQ7YPe.js";import"./icon-button-D2WVgfRC.js";import"./base-button-adapter-DJQ79g8S.js";import"./icon-j-OxqPb8.js";import"./index-B1JO16kf.js";import"./tooltip-BptsRu5z.js";import"./with-longpress-listener-BBdOH933.js";import"./index-DEQkiF7r.js";import"./index-BysSV1_j.js";import"./index-FhMfyMYK.js";function r(t){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(a,{}),`
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
`,e.jsx(n.h3,{id:"asymmetric-drawer-behavior",children:"Asymmetric Drawer Behavior"}),`
`,e.jsx(n.p,{children:"The left and right drawers intentionally have different default behaviors:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Left Navigation Drawer:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Auto-opens on large screens because it serves as primary navigation that should typically be visible on desktop"}),`
`,e.jsx(n.li,{children:"Auto-closes when transitioning to small screens"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Right Content Drawer:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Remains closed by default on all screen sizes"}),`
`,e.jsx(n.li,{children:"Contains contextual content (details panels, filters, etc.) that should be user-triggered"}),`
`,e.jsxs(n.li,{children:["Must be explicitly opened via ",e.jsx(n.code,{children:"openRightDrawer()"})," or by wiring up your own toggle button"]}),`
`]}),`
`,e.jsx(n.p,{children:"This asymmetry reflects the typical usage pattern where primary navigation should be readily accessible, while supplementary content panels are shown on demand."}),`
`,e.jsx(n.h3,{id:"auto-close-on-navigation",children:"Auto-close on Navigation"}),`
`,e.jsxs(n.p,{children:["On small screens, you can automatically close the modal drawer when a user clicks on a navigation item by adding the ",e.jsx(n.code,{children:"data-forge-app-layout-close"})," attribute to any element within the navigation slot. The attribute can be placed on a parent element (like ",e.jsx(n.code,{children:"<forge-list>"}),") to close the drawer on any click within that element:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="My Application">
  <!-- All clicks within this list will close the drawer -->
  <forge-list slot="navigation" navlist data-forge-app-layout-close>
    <forge-list-item>
      <forge-icon slot="start" name="home"></forge-icon>
      <a href="/home">Home</a>
    </forge-list-item>
    <forge-list-item>
      <forge-icon slot="start" name="settings"></forge-icon>
      <a href="/settings">Settings</a>
    </forge-list-item>
  </forge-list>
</forge-app-layout>
`})}),`
`,e.jsx(n.p,{children:"For more granular control, you can place the attribute on individual items:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="My Application">
  <forge-list slot="navigation" navlist>
    <!-- These items will close the drawer when clicked -->
    <forge-list-item data-forge-app-layout-close>
      <forge-icon slot="start" name="home"></forge-icon>
      <a href="/home">Home</a>
    </forge-list-item>

    <!-- This item won't close the drawer (e.g., submenu toggle) -->
    <forge-list-item>
      <forge-icon slot="start" name="expand_more"></forge-icon>
      <button type="button">Expand submenu</button>
    </forge-list-item>
  </forge-list>
</forge-app-layout>
`})}),`
`,e.jsxs(n.p,{children:["You can also programmatically close the drawer using the ",e.jsx(n.code,{children:"closeDrawer()"})," method:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const appLayout = document.querySelector('forge-app-layout');
appLayout.closeDrawer();
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"APP_LAYOUT_CLOSE_ATTRIBUTE"})," constant is exported for use in JavaScript/TypeScript:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { APP_LAYOUT_CLOSE_ATTRIBUTE } from '@tylertech/forge-extended';

element.setAttribute(APP_LAYOUT_CLOSE_ATTRIBUTE, '');
`})}),`
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
`,e.jsx(n.h3,{id:"independent-breakpoints-for-left-and-right-drawers",children:"Independent Breakpoints for Left and Right Drawers"}),`
`,e.jsxs(n.p,{children:["You can set separate breakpoints for the left navigation drawer and right content drawer using ",e.jsx(n.code,{children:"left-breakpoint"})," and ",e.jsx(n.code,{children:"right-breakpoint"}),". This allows the drawers to respond independently to different screen sizes:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Left drawer switches at 1200px, right drawer switches at 1400px -->
<forge-app-layout app-title="Complex Layout" breakpoint="960" left-breakpoint="1200" right-breakpoint="1400">
  <nav slot="navigation">Navigation</nav>
  <main>Content</main>
  <aside slot="body-right-content">Details Panel</aside>
</forge-app-layout>
`})}),`
`,e.jsx(n.p,{children:"When using independent breakpoints:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The main ",e.jsx(n.code,{children:"breakpoint"})," property remains as the default fallback"]}),`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"left-breakpoint"})," is set, the left navigation uses that breakpoint; otherwise it falls back to ",e.jsx(n.code,{children:"breakpoint"})]}),`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"right-breakpoint"})," is set, the right content drawer uses that breakpoint; otherwise it falls back to ",e.jsx(n.code,{children:"breakpoint"})]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"isLargeScreen"})," property still reflects the main ",e.jsx(n.code,{children:"breakpoint"})," for backwards compatibility"]}),`
`]}),`
`,e.jsx(n.p,{children:"This is useful when you want the navigation to remain visible at larger screen sizes but have the right panel collapse earlier, or vice versa."}),`
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
`,e.jsx(n.h2,{id:"right-drawer-content",children:"Right Drawer Content"}),`
`,e.jsxs(n.p,{children:["Similar to the navigation drawer, the ",e.jsx(n.code,{children:"body-right-content"})," slot provides responsive content that appears in a drawer on the right side. On large screens, it renders as a drawer in the body-right area. On small screens, it transforms into a modal dialog."]}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="My Application">
  <!-- Main content -->
  <main>Your content here</main>

  <!-- Right drawer content -->
  <aside slot="body-right-content">
    <h2>Details Panel</h2>
    <p>Additional information displayed in the right drawer.</p>
  </aside>
</forge-app-layout>
`})}),`
`,e.jsx(n.h3,{id:"toggling-the-right-drawer",children:"Toggling the Right Drawer"}),`
`,e.jsxs(n.p,{children:["Unlike the navigation drawer which has a built-in menu button, the right drawer requires you to wire up your own trigger element. Use the ",e.jsx(n.code,{children:"toggleRightDrawer()"}),", ",e.jsx(n.code,{children:"openRightDrawer()"}),", or ",e.jsx(n.code,{children:"closeRightDrawer()"})," methods to control the drawer:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout id="app-layout" app-title="My Application">
  <!-- App bar with toggle button -->
  <forge-icon-button id="right-drawer-toggle" slot="app-bar-end" aria-label="Toggle details panel">
    <forge-icon name="info"></forge-icon>
  </forge-icon-button>

  <!-- Main content -->
  <main>Your content here</main>

  <!-- Right drawer content -->
  <aside slot="body-right-content">
    <h2>Details Panel</h2>
    <p>Additional information displayed in the right drawer.</p>
  </aside>
</forge-app-layout>

<script>
  const appLayout = document.getElementById('app-layout');
  const toggleButton = document.getElementById('right-drawer-toggle');

  toggleButton.addEventListener('click', () => {
    appLayout.toggleRightDrawer();
  });
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"programmatic-control",children:"Programmatic Control"}),`
`,e.jsx(n.p,{children:"You can control the right drawer programmatically using the following methods:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const appLayout = document.querySelector('forge-app-layout');

// Open the right drawer
appLayout.openRightDrawer();

// Close the right drawer
appLayout.closeRightDrawer();

// Toggle the right drawer
appLayout.toggleRightDrawer();
`})}),`
`,e.jsx(n.h3,{id:"right-drawer-events",children:"Right Drawer Events"}),`
`,e.jsxs(n.p,{children:["The component emits a ",e.jsx(n.code,{children:"forge-app-layout-right-drawer-change"})," event when the right drawer opens or closes:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`appLayout.addEventListener('forge-app-layout-right-drawer-change', event => {
  console.log('Right drawer is now:', event.detail.open ? 'open' : 'closed');
});
`})}),`
`,e.jsx(n.h3,{id:"right-drawer-css-custom-properties",children:"Right Drawer CSS Custom Properties"}),`
`,e.jsx(n.p,{children:"You can customize the right drawer dimensions using CSS custom properties:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`forge-app-layout {
  /* Width of the right drawer on large screens */
  --forge-app-layout-right-drawer-width: 400px;

  /* Width of the right drawer dialog on small screens */
  --forge-app-layout-right-dialog-width: 320px;
}
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
`]})]})}function q(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{q as default};
