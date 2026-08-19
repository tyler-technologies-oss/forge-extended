import{x as e}from"./iframe-wp6Y4X1Z.js";import{I as t,q as r,u as n}from"./with-default-aria-CVqkDYn1.js";import"./count-card-8lPI6E_o.js";import{d as a}from"./index--CEVxK40.js";import{d as s}from"./index-inyXsKH2.js";import{d as p}from"./index-Blm5DnDo.js";import"./feature-detection-BWI71vpr.js";import"./constants-Uc3PCJIx.js";import"./a11y-utils-B6dbtuCh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-2YrF3CdM.js";import"./async-directive-CXaBKyKn.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DtBLHQ2d.js";import"./index-BtA13VLP.js";import"./tooltip-CEnwjWC3.js";import"./with-longpress-listener-d_qiRR6E.js";import"./dismissible-stack-bGn6SY0q.js";import"./icon-DbBPEUCr.js";import"./state-CTxZCj7f.js";import"./class-map-oYqt1_Oz.js";import"./style-map-Cxd5I5wI.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
      <style>
        .meter-body {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--forge-theme-text-medium);
        }

        .body-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .last-updated {
          color: var(--forge-theme-text-low);
        }
      </style>
      <div style="width: 320px;">
        <forge-count-card>
          <span slot="label">Todays money</span>
          <forge-badge slot="header-end" theme="success">
            +8.2%
            <forge-icon slot="end" name="trending_up"></forge-icon>
          </forge-badge>
          <span slot="count">$50,846.00</span>
          <div slot="body" class="meter-body">
            <span class="forge-typography--body1">66% of monthly target</span>
            <span class="forge-typography--body1">100k</span>
          </div>
          <div slot="body" class="body-content">
            <forge-meter value="0.66" min="0" max="1" theme="success"></forge-meter>
            <span class="forge-typography--label1 last-updated">Last updated 12/12/2025</span>
          </div>
        </forge-count-card>
      </div>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const O=["AdditionalBodyContent"];export{o as AdditionalBodyContent,O as __namedExportsOrder,L as default};
