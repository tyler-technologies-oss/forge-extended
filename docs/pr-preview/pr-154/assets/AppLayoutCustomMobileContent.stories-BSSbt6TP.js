import{x as l}from"./iframe-CYs4rUqc.js";import{I as g,t as m,a as d,b as c,c as h,d as f}from"./with-default-aria-IIDqe1FM.js";import"./app-layout-DHr8aGWM.js";import{d as y}from"./index-BU0gkOB8.js";import{d as v}from"./index-BtcHbGyr.js";import{d as b}from"./index-Tl_xzxYX.js";import{d as u}from"./index-Bop7IQRN.js";import{d as k}from"./index-CT7xPl9a.js";import"./custom-element-CDYWBB4R.js";import"./constants-BPzvPAwC.js";import"./when-3fO0zp9C.js";import"./utils-D4Tmth0h.js";import"./state-BctSlBrf.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./index-b6Iz--uP.js";import"./scaffold-BtebTbd2.js";import"./index-CwWiYWLA.js";import"./dismissible-stack-B5VulF68.js";import"./list-YaOfIVb6.js";import"./focus-indicator-CYx5OX-M.js";import"./index-BUFnbwZi.js";import"./icon-button-DvWO3SvX.js";import"./base-button-adapter-NVSd6npM.js";import"./icon-0n1M6L10.js";import"./tooltip-BiQHgGlu.js";import"./with-longpress-listener-Bj8Pz6MQ.js";import"./divider-DM8EAu5m.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__;b();u();k();y();v();g.define([m,d,c,h,f]);const w="forge-app-layout",C=i("forge-app-layout-breakpoint-change"),T=i("forge-app-layout-drawer-change"),X={title:"Components/App Layout",component:w,argTypes:{appTitle:{control:"text",description:"The title text to display in the app bar",table:{category:"Properties"}},breakpoint:{control:"number",description:"The screen width breakpoint in pixels for responsive behavior",table:{category:"Properties"}}},args:{appTitle:"Custom Mobile Content Demo",breakpoint:960}},t={render:o=>{let a=window.innerWidth>=o.breakpoint?"large":"small";const r=e=>{a=e.detail.breakpoint,n(),C(e)},s=e=>{T(e)},n=()=>{const e=document.getElementById("navigation-container");if(!e)return;const p=a==="small"?`<forge-inline-message theme="info-secondary" style="margin: var(--forge-spacing-medium);">
              <forge-icon slot="icon" name="info_outline"></forge-icon>
              This banner only appears in the mobile view.
            </forge-inline-message>`:"";e.innerHTML=`
        ${p}
        <forge-list navlist data-forge-app-layout-close>
          <forge-list-item>
            <forge-icon slot="start" name="home"></forge-icon>
            <a href="javascript: void(0);">Home</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="inbox"></forge-icon>
            <a href="javascript: void(0);">Inbox</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="star"></forge-icon>
            <a href="javascript: void(0);">Starred</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="settings"></forge-icon>
            <a href="javascript: void(0);">Settings</a>
          </forge-list-item>
        </forge-list>
      `};return setTimeout(()=>{n()},0),l`
      <style>
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
        }
      </style>
      <forge-app-layout
        app-title=${o.appTitle}
        breakpoint=${o.breakpoint}
        @forge-app-layout-breakpoint-change=${r}
        @forge-app-layout-drawer-change=${s}>
        <div id="navigation-container" slot="navigation">
          <!-- Content will be dynamically updated based on breakpoint -->
        </div>

        <div slot="body" style="padding: var(--forge-spacing-medium);">
          <h2 class="forge-typography--display1">Custom Mobile Content Demo</h2>
          <p class="forge-typography--body1" style="margin-block: var(--forge-spacing-medium);">
            This demo demonstrates that you can use the <code>forge-app-layout-breakpoint-change</code> event to detect
            when the layout changes between mobile and desktop modes, and render different content accordingly.
          </p>
          <p class="forge-typography--body1" style="margin-block-end: var(--forge-spacing-medium);">
            Try resizing the window to see the navigation content change:
          </p>
          <ul class="forge-typography--body1">
            <li>
              <span class="forge-typography--heading1">Mobile (small):</span> Shows an inline message that only appears
              in mobile view
            </li>
            <li>
              <span class="forge-typography--heading1">Desktop (large):</span> Shows standard navigation list without
              the message
            </li>
          </ul>
          <p
            class="forge-typography--body2"
            style="margin-block-start: var(--forge-spacing-large); color: var(--forge-theme-text-medium);">
            Check the Actions panel below to see the events being emitted as you resize the window or toggle the drawer.
          </p>
        </div>
      </forge-app-layout>
    `}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    // Track the current breakpoint state
    let currentBreakpoint: 'small' | 'large' = window.innerWidth >= args.breakpoint ? 'large' : 'small';

    // Handle breakpoint change event
    const handleBreakpointChange = (event: CustomEvent<AppLayoutBreakpointChangeEventData>): void => {
      currentBreakpoint = event.detail.breakpoint;
      updateNavigationContent();
      breakpointChangeAction(event);
    };

    // Handle drawer change event
    const handleDrawerChange = (event: CustomEvent<AppLayoutDrawerChangeEventData>): void => {
      drawerChangeAction(event);
    };

    // Update the navigation content based on the current breakpoint
    const updateNavigationContent = (): void => {
      const navigationContainer = document.getElementById('navigation-container');
      if (!navigationContainer) return;
      const mobileOnlyBanner = currentBreakpoint === 'small' ? \`<forge-inline-message theme="info-secondary" style="margin: var(--forge-spacing-medium);">
              <forge-icon slot="icon" name="info_outline"></forge-icon>
              This banner only appears in the mobile view.
            </forge-inline-message>\` : '';
      navigationContainer.innerHTML = \`
        \${mobileOnlyBanner}
        <forge-list navlist data-forge-app-layout-close>
          <forge-list-item>
            <forge-icon slot="start" name="home"></forge-icon>
            <a href="javascript: void(0);">Home</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="inbox"></forge-icon>
            <a href="javascript: void(0);">Inbox</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="star"></forge-icon>
            <a href="javascript: void(0);">Starred</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="settings"></forge-icon>
            <a href="javascript: void(0);">Settings</a>
          </forge-list-item>
        </forge-list>
      \`;
    };

    // Initialize content after render
    setTimeout(() => {
      updateNavigationContent();
    }, 0);
    return html\`
      <style>
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
        }
      </style>
      <forge-app-layout
        app-title=\${args.appTitle}
        breakpoint=\${args.breakpoint}
        @forge-app-layout-breakpoint-change=\${handleBreakpointChange}
        @forge-app-layout-drawer-change=\${handleDrawerChange}>
        <div id="navigation-container" slot="navigation">
          <!-- Content will be dynamically updated based on breakpoint -->
        </div>

        <div slot="body" style="padding: var(--forge-spacing-medium);">
          <h2 class="forge-typography--display1">Custom Mobile Content Demo</h2>
          <p class="forge-typography--body1" style="margin-block: var(--forge-spacing-medium);">
            This demo demonstrates that you can use the <code>forge-app-layout-breakpoint-change</code> event to detect
            when the layout changes between mobile and desktop modes, and render different content accordingly.
          </p>
          <p class="forge-typography--body1" style="margin-block-end: var(--forge-spacing-medium);">
            Try resizing the window to see the navigation content change:
          </p>
          <ul class="forge-typography--body1">
            <li>
              <span class="forge-typography--heading1">Mobile (small):</span> Shows an inline message that only appears
              in mobile view
            </li>
            <li>
              <span class="forge-typography--heading1">Desktop (large):</span> Shows standard navigation list without
              the message
            </li>
          </ul>
          <p
            class="forge-typography--body2"
            style="margin-block-start: var(--forge-spacing-large); color: var(--forge-theme-text-medium);">
            Check the Actions panel below to see the events being emitted as you resize the window or toggle the drawer.
          </p>
        </div>
      </forge-app-layout>
    \`;
  }
}`,...t.parameters?.docs?.source}}};const Z=["CustomMobileContent"];export{t as CustomMobileContent,Z as __namedExportsOrder,X as default};
