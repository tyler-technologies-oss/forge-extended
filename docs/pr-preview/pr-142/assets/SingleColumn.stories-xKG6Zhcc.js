import{x as o}from"./iframe-BONfeRbS.js";import"./landing-page-layout-DybkNz45.js";import{s as r}from"./decorators-CF2_DgP2.js";import{d as t}from"./index-DkaTdWA1.js";import"./custom-element-C028faeO.js";import"./utils-D9p4bUJ4.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-BdDPgXkM.js";import"./constants-DnUFLkc1.js";import"./with-default-aria-BX23kPsM.js";import"./a11y-utils-CPysxFLW.js";import"./base-button-adapter-DnYus6sP.js";import"./focus-indicator-COKKqZBY.js";import"./icon-C7xslxSO.js";t();const a="forge-landing-page-layout",C={title:"Components/Landing Page Layout",component:a,parameters:{layout:"fullscreen"},decorators:[r(`
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
        <h2
          class="forge-typography--display6"
          slot="main-title"
          style="color: var(--forge-landing-page-layout-header-color, #ffffff)">
          A single column, edge-aligned layout
        </h2>
        <forge-button slot="action" variant="filled">Read more</forge-button>

        <div class="demo-area forge-typography--label1" slot="left">Article content</div>

        <div class="demo-footer-area forge-typography--body2" slot="footer">Footer</div>
      </forge-landing-page-layout>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const S=["SingleColumn"];export{e as SingleColumn,S as __namedExportsOrder,C as default};
