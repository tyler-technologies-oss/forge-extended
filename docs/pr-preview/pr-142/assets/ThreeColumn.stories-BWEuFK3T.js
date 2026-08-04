import{x as r}from"./iframe-BgG1mILm.js";import"./landing-page-layout-BZXE9MsK.js";import{s as o}from"./decorators-CGtwCCji.js";import{d as a}from"./index-DH-EBj3W.js";import"./custom-element-C028faeO.js";import"./utils-BrQSBAEO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-4yZjZMA_.js";import"./constants-D4w8ERcy.js";import"./with-default-aria-DhKreie1.js";import"./a11y-utils-Bqf6nmLH.js";import"./base-button-adapter-DJylsVrC.js";import"./focus-indicator-CvBVFsiv.js";import"./icon-DUW7oXzz.js";a();const t="forge-landing-page-layout",C={title:"Components/Landing Page Layout",component:t,parameters:{layout:"fullscreen"},decorators:[o(`
      body {
        margin: 0;
        padding: 0;
        background-color: var(--forge-theme-surface);
      }

      #storybook-root,
      #root-inner {
        height: 100%;
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
    `)],render:()=>r`
      <forge-landing-page-layout mode="three">
        <span class="forge-typography--subheading7" slot="secondary-title">Dashboard</span>
        <h2 class="forge-typography--display6" slot="main-title">Three-column overview</h2>
        <forge-button slot="action" variant="filled">Take action</forge-button>

        <div class="demo-area forge-typography--label1" slot="left">Left column</div>
        <div class="demo-area forge-typography--label1" slot="center">Center column</div>
        <div class="demo-area forge-typography--label1" slot="right">Right column</div>

        <div class="demo-footer-area forge-typography--body2" slot="footer">Footer</div>
      </forge-landing-page-layout>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const k=["ThreeColumn"];export{e as ThreeColumn,k as __namedExportsOrder,C as default};
