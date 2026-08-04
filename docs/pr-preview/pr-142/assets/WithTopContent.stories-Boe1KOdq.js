import{x as o}from"./iframe-BgG1mILm.js";import"./landing-page-layout-BZXE9MsK.js";import{s as r}from"./decorators-CGtwCCji.js";import{d as a}from"./index-DH-EBj3W.js";import{d as t}from"./index-Brr_ru3-.js";import"./custom-element-C028faeO.js";import"./utils-BrQSBAEO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-4yZjZMA_.js";import"./constants-D4w8ERcy.js";import"./with-default-aria-DhKreie1.js";import"./a11y-utils-Bqf6nmLH.js";import"./base-button-adapter-DJylsVrC.js";import"./focus-indicator-CvBVFsiv.js";import"./icon-DUW7oXzz.js";a();t();const l="forge-landing-page-layout",k={title:"Components/Landing Page Layout",component:l,parameters:{layout:"fullscreen"},decorators:[r(`
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

      .demo-callout {
        display: flex;
        gap: var(--forge-spacing-medium);
        padding: var(--forge-spacing-medium);
      }

      .demo-callout forge-card {
        flex: 1;
        text-align: center;
        padding: var(--forge-spacing-medium);
      }

      .demo-callout-value {
        margin: 0 0 var(--forge-spacing-xxsmall);
      }

      .demo-callout-label {
        margin: 0;
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
      <forge-landing-page-layout>
        <span class="forge-typography--subheading7" slot="secondary-title">Overview</span>
        <h2 class="forge-typography--display6" slot="main-title">Featured highlights above the fold</h2>
        <forge-button slot="action" variant="filled">Get started</forge-button>

        <div class="demo-callout" slot="top">
          <forge-card>
            <h4 class="forge-typography--heading4 demo-callout-value">120+</h4>
            <p class="forge-typography--body2 demo-callout-label">Services online</p>
          </forge-card>
          <forge-card>
            <h4 class="forge-typography--heading4 demo-callout-value">24/7</h4>
            <p class="forge-typography--body2 demo-callout-label">Self-service portal</p>
          </forge-card>
          <forge-card>
            <h4 class="forge-typography--heading4 demo-callout-value">98%</h4>
            <p class="forge-typography--body2 demo-callout-label">Satisfaction rating</p>
          </forge-card>
        </div>

        <div class="demo-area forge-typography--label1" slot="left">Left column</div>
        <div class="demo-area forge-typography--label1" slot="right">Right column</div>

        <div class="demo-footer-area forge-typography--body2" slot="footer">Footer</div>
      </forge-landing-page-layout>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const L=["WithTopContent"];export{e as WithTopContent,L as __namedExportsOrder,k as default};
