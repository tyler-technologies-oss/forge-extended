import{x as o}from"./iframe-Bi2jjneX.js";import"./landing-page-layout-B6nDYNP6.js";import{s as r}from"./decorators-DNY5vP3B.js";import{d as t}from"./index-DHUKMcv2.js";import"./custom-element-C028faeO.js";import"./utils-CcBW4sMr.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-eW29fe97.js";import"./constants-Be1rccdx.js";import"./with-default-aria-Bp7BOLsO.js";import"./a11y-utils-DwvBqvsn.js";import"./base-button-adapter-C8jd6JO5.js";import"./focus-indicator-DOPW3N_b.js";import"./icon-Ctp2z37r.js";t();const a="forge-landing-page-layout",C={title:"Components/Landing Page Layout",component:a,parameters:{layout:"fullscreen"},decorators:[r(`
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
        min-height: 400px;
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
      <forge-landing-page-layout mode="single" alignment="left">
        <span class="forge-typography--subheading7" slot="secondary-title">Article</span>
        <h2 class="forge-typography--display6" slot="main-title">A single column, edge-aligned layout</h2>
        <forge-button slot="action" variant="filled">Read more</forge-button>

        <div class="demo-area forge-typography--label1" slot="left">Article content</div>

        <div class="demo-footer-area forge-typography--body2" slot="footer">Footer</div>
      </forge-landing-page-layout>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const S=["SingleColumn"];export{e as SingleColumn,S as __namedExportsOrder,C as default};
