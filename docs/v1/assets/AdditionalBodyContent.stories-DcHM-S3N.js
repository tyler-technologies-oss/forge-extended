import{x as e}from"./iframe-1dcdlrZB.js";import{I as t,q as r,u as n}from"./with-default-aria-CV78iXDo.js";import"./count-card-cuo-dAac.js";import{d as a}from"./index-Pwb0Rn0e.js";import{d as s}from"./index-DgzO1rya.js";import{d as p}from"./index-CgSTsiWD.js";import"./constants-CRBXf694.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BcnBu-T5.js";import"./async-directive-BB26Ng_H.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-B6kOa7HJ.js";import"./index-nHQkKTe-.js";import"./tooltip-D3AGXHhf.js";import"./with-longpress-listener-Cd8SlU9A.js";import"./dismissible-stack-B4_d_Qwd.js";import"./icon-DZQJbqqs.js";import"./state-CM2CsMPs.js";import"./class-map-Bs9SlVcM.js";import"./style-map-B0gGYBcB.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const E=["AdditionalBodyContent"];export{o as AdditionalBodyContent,E as __namedExportsOrder,q as default};
