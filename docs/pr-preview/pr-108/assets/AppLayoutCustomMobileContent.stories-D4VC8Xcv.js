import{t as m,x as p}from"./iframe-C4xYzNeS.js";import{I as d,t as f,a as h,b as y,c as v,G as b}from"./base-lit-element-CA1-SNEn.js";import"./app-layout-N6r3hJNm.js";import{d as u}from"./index-DxP5sdhf.js";import{C as w,B as k,f as _,b as C,e as x,d as T}from"./constants-BGw9Ygd1.js";import{d as E}from"./index-D2JoovWC.js";import{d as I}from"./index-_edBmRyY.js";import{d as M}from"./index-bSInoyeR.js";import"./when-3fO0zp9C.js";import"./state-1BMpxpZA.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./index-KAX_Zr_X.js";import"./scaffold-Bq5SWol0.js";import"./index-BDeTw_Vg.js";import"./with-default-aria-in2Bq8DU.js";import"./a11y-utils-DGwyeK1V.js";import"./dismissible-stack-BBF-r7lB.js";import"./list-B9vxI4aG.js";import"./index-IJrFI2gY.js";import"./base-button-adapter-sC9lokft.js";import"./icon-CEwzL3bw.js";import"./tooltip-CVwQ210y.js";import"./with-longpress-listener-CEhzrExr.js";import"./divider-ByW_TcsS.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const z=`${w}inline-message`,S={THEME:"theme"},B={THEME:"info"},n={elementName:z,attributes:S,defaults:B};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const A='<template><div class="forge-inline-message" part="root"><slot name="icon"></slot><div class="container" part="container"><slot name="title"></slot><slot></slot></div></div></template>',N=':host{display:block}:host([hidden]){display:none}.forge-inline-message{--_inline-message-background:var(--forge-inline-message-background, var(--forge-theme-info-container-low, #e3edf7));--_inline-message-color:var(--forge-inline-message-color, var(--forge-theme-text-high, rgba(0, 0, 0, 0.87)));--_inline-message-shape:var(--forge-inline-message-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_inline-message-padding:var(--forge-inline-message-padding, var(--forge-spacing-small, 12px));--_inline-message-padding-inline:var(--forge-inline-message-padding-inline, var(--_inline-message-padding));--_inline-message-padding-block:var(--forge-inline-message-padding-block, var(--_inline-message-padding));--_inline-message-border-width:var(--forge-inline-message-border-width, var(--forge-border-thin, 1px));--_inline-message-border-style:var(--forge-inline-message-border-style, none);--_inline-message-border-color:var(--forge-inline-message-border-color, var(--forge-theme-info-container, #c7daf0));--_inline-message-gap:var(--forge-inline-message-gap, var(--forge-spacing-small, 12px));--_inline-message-icon-gap:var(--forge-inline-message-icon-gap, var(--_inline-message-gap));--_inline-message-content-gap:var(--forge-inline-message-content-gap, var(--_inline-message-gap));--_inline-message-icon-color:var(--forge-inline-message-icon-color, var(--forge-theme-on-info-container-low, #0b3768))}.forge-inline-message{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight,400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform,inherit);text-decoration:var(--forge-typography-body1-text-decoration,inherit);background:var(--_inline-message-background);color:var(--_inline-message-color);border-radius:var(--_inline-message-shape);border-width:var(--_inline-message-border-width);border-style:var(--_inline-message-border-style);border-color:var(--_inline-message-border-color);display:flex;align-items:center;gap:var(--_inline-message-icon-gap);box-sizing:border-box;padding-inline:var(--_inline-message-padding-inline);padding-block:var(--_inline-message-padding-block)}.forge-inline-message .container{display:flex;flex-direction:column;gap:var(--_inline-message-content-gap)}::slotted(*){margin:0}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading1-font-size-scale, .875)));font-weight:var(--forge-typography-heading1-font-weight,500);line-height:var(--forge-typography-heading1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading1-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-heading1-letter-spacing, .0178571429em);text-transform:var(--forge-typography-heading1-text-transform,inherit);text-decoration:var(--forge-typography-heading1-text-decoration,inherit)}::slotted([slot=icon]){color:var(--_inline-message-icon-color);align-self:start}:host([theme=primary]) .forge-inline-message{--_inline-message-background:var(--forge-inline-message-background, var(--forge-theme-primary-container-low, #e8eaf6));--_inline-message-icon-color:var(--forge-inline-message-icon-color, var(--forge-theme-on-primary-container-low, #222c62));--_inline-message-border-color:var(--forge-inline-message-border-color, var(--forge-theme-primary-container, #d1d5ed))}:host([theme=secondary]) .forge-inline-message{--_inline-message-background:var(--forge-inline-message-background, var(--forge-theme-secondary-container, #fff0c3));--_inline-message-icon-color:var(--forge-inline-message-icon-color, var(--forge-theme-on-secondary-container, #8a6804));--_inline-message-border-color:var(--forge-inline-message-border-color, var(--forge-theme-secondary, #ffc107))}:host([theme=tertiary]) .forge-inline-message{--_inline-message-background:var(--forge-inline-message-background, var(--forge-theme-tertiary-container-low, #e8ebff));--_inline-message-icon-color:var(--forge-inline-message-icon-color, var(--forge-theme-on-tertiary-container-low, #213189));--_inline-message-border-color:var(--forge-inline-message-border-color, var(--forge-theme-tertiary-container, #d0d7ff))}:host([theme=success]) .forge-inline-message{--_inline-message-background:var(--forge-inline-message-background, var(--forge-theme-success-container-low, #e6efe6));--_inline-message-icon-color:var(--forge-inline-message-icon-color, var(--forge-theme-on-success-container-low, #19441b));--_inline-message-border-color:var(--forge-inline-message-border-color, var(--forge-theme-success-container, #cde0ce))}:host([theme=warning]) .forge-inline-message{--_inline-message-background:var(--forge-inline-message-background, var(--forge-theme-warning-container-low, #f9e9e0));--_inline-message-icon-color:var(--forge-inline-message-icon-color, var(--forge-theme-on-warning-container-low, #712700));--_inline-message-border-color:var(--forge-inline-message-border-color, var(--forge-theme-warning-container, #f4d3c2))}:host(:is([theme=error],[theme=danger])) .forge-inline-message{--_inline-message-background:var(--forge-inline-message-background, var(--forge-theme-error-container-low, #f6e0e4));--_inline-message-icon-color:var(--forge-inline-message-icon-color, var(--forge-theme-on-error-container-low, #5f0011));--_inline-message-border-color:var(--forge-inline-message-border-color, var(--forge-theme-error-container, #ecc2c9))}:host([theme=info-secondary]) .forge-inline-message{--_inline-message-background:var(--forge-inline-message-background, var(--forge-theme-surface-container-low, #ebebeb));--_inline-message-icon-color:var(--forge-inline-message-icon-color, var(--forge-theme-on-surface-container-low, #000000));--_inline-message-border-color:var(--forge-inline-message-border-color, var(--forge-theme-surface-container, #e0e0e0))}';let i=class extends k{constructor(){super(),_(this,A,N)}get theme(){return this.getAttribute(n.attributes.THEME)??n.defaults.THEME}set theme(o){m(this,o!==n.defaults.THEME,n.attributes.THEME,o)}};i=C([x({name:n.elementName})],i);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function D(){T(i)}const{action:s}=__STORYBOOK_MODULE_ACTIONS__;E();I();M();u();D();d.define([f,h,y,v,b]);const H="forge-app-layout",O=s("forge-app-layout-breakpoint-change"),$=s("forge-app-layout-drawer-change"),ce={title:"Components/App Layout",component:H,argTypes:{appTitle:{control:"text",description:"The title text to display in the app bar",table:{category:"Properties"}},breakpoint:{control:"number",description:"The screen width breakpoint in pixels for responsive behavior",table:{category:"Properties"}}},args:{appTitle:"Custom Mobile Content Demo",breakpoint:960}},r={render:a=>{let o=window.innerWidth>=a.breakpoint?"large":"small";const g=e=>{o=e.detail.breakpoint,t(),O(e)},l=e=>{$(e)},t=()=>{const e=document.getElementById("navigation-container");if(!e)return;const c=o==="small"?`<forge-inline-message theme="info-secondary" style="margin: var(--forge-spacing-medium);">
              <forge-icon slot="icon" name="info_outline"></forge-icon>
              This banner only appears in the mobile view.
            </forge-inline-message>`:"";e.innerHTML=`
        ${c}
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
      `};return setTimeout(()=>{t()},0),p`
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
        app-title=${a.appTitle}
        breakpoint=${a.breakpoint}
        @forge-app-layout-breakpoint-change=${g}
        @forge-app-layout-drawer-change=${l}>
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
    `}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const me=["CustomMobileContent"];export{r as CustomMobileContent,me as __namedExportsOrder,ce as default};
