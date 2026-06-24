import{x as e}from"./iframe-D5y4AxAu.js";import{I as t,q as r,u as n}from"./with-default-aria-wA-QA0TJ.js";import"./count-card-BjzW13pK.js";import{d as a}from"./index-BKv8pDoJ.js";import{d as s}from"./index-Bs7YWywE.js";import{d as p}from"./index-CpSDpuen.js";import"./constants-BL4Uhso2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CLrUsRtL.js";import"./async-directive-Ck1GLDgE.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-HEkN-Qk6.js";import"./index-B_9mff-0.js";import"./tooltip-iBg2SyZ0.js";import"./with-longpress-listener-CqBEgAny.js";import"./dismissible-stack-CdMxcwTL.js";import"./icon-CNYE5Fre.js";import"./state-jUAyD9Ix.js";import"./class-map-2_wuikYn.js";import"./style-map-pICas4Pc.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
