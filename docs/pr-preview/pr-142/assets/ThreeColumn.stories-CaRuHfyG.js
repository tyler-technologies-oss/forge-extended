import{x as o}from"./iframe-CEyoJGCy.js";import"./landing-page-layout-D1HnQN9t.js";import{s as r}from"./decorators-COQVsPJj.js";import{d as a}from"./index-DSgS9r4k.js";import"./utils-b88vL7Ig.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./component-utils-xTTRT63M.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-B19yLoP-.js";import"./with-default-aria-wByQ6wv-.js";import"./base-button-adapter-CaN2_8Rx.js";import"./focus-indicator-C-CA7k8r.js";import"./icon-BbEHwsUK.js";a();const t="forge-landing-page-layout",b={title:"Components/Landing Page Layout",component:t,parameters:{layout:"fullscreen"},decorators:[r(`
      body {
        margin: 0;
        padding: 0;
        background-color: var(--forge-theme-surface);
      }

      #storybook-root,
      #root-inner {
        height: 100%;
      }

      .demo-title {
        color: var(--forge-landing-page-layout-header-color, #ffffff);
      }

      .demo-area {
        border: dashed 2px var(--forge-theme-primary-container-high);
        background-color: var(--forge-theme-primary-container-minimum);
        border-radius: var(--forge-shape-medium);
        display: flex;
        place-content: center;
        text-align: center;
        color: var(--forge-theme-on-primary-container);
        padding: var(--forge-spacing-large);
        min-height: 300px;
      }

      .demo-footer-area {
        border: dashed 2px var(--forge-theme-on-surface-inverse);
        color: var(--forge-theme-on-surface-inverse);
        display: flex;
        place-content: center;
        text-align: center;
        padding: var(--forge-spacing-large);
        min-height: 90px;
      }
    `)],render:()=>o`
      <forge-landing-page-layout mode="three">
        <span class="forge-typography--subheading7" slot="secondary-title">Dashboard</span>
        <h2 class="forge-typography--display6 demo-title" slot="main-title">Three-column overview</h2>
        <forge-button slot="action" variant="filled">Take action</forge-button>

        <div class="demo-area forge-typography--label1" slot="left">Left column</div>
        <div class="demo-area forge-typography--label1" slot="center">Center column</div>
        <div class="demo-area forge-typography--label1" slot="right">Right column</div>

        <div class="demo-footer-area forge-typography--body2" slot="footer">Footer</div>
      </forge-landing-page-layout>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const x=["ThreeColumn"];export{e as ThreeColumn,x as __namedExportsOrder,b as default};
