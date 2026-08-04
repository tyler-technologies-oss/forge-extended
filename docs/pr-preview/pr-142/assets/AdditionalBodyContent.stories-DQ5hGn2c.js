import{x as e}from"./iframe-BgG1mILm.js";import{I as t,q as r,u as n}from"./with-default-aria-DhKreie1.js";import"./count-card-c59N-dLp.js";import{d as a}from"./index-IpHzfxDW.js";import{d as s}from"./index-Cv1TBrBI.js";import{d as p}from"./index-DkaSey4m.js";import"./feature-detection-4yZjZMA_.js";import"./constants-D4w8ERcy.js";import"./a11y-utils-Bqf6nmLH.js";import"./custom-element-C028faeO.js";import"./utils-BrQSBAEO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CbFCRKzL.js";import"./async-directive-C8qPSgQz.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Brr_ru3-.js";import"./index-UrO_bokh.js";import"./tooltip-DWgfTi28.js";import"./with-longpress-listener-CWO8YKN7.js";import"./dismissible-stack-eDOO1x_W.js";import"./icon-DUW7oXzz.js";import"./state-LMASPUqT.js";import"./class-map-nSt2BsDm.js";import"./style-map-B_9V7DJ2.js";a();s();p();t.define([r,n]);const m="forge-count-card",R={title:"Components/Count Card",component:m,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const S=["AdditionalBodyContent"];export{o as AdditionalBodyContent,S as __namedExportsOrder,R as default};
