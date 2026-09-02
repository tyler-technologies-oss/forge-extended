import{x as e}from"./iframe-D2auh-ob.js";import{I as t,q as r,u as n}from"./with-default-aria-givn-h4t.js";import"./count-card-AWm8sAis.js";import{d as a}from"./index-DfDBNFD5.js";import{d as s}from"./index-DCcTpInV.js";import{d as p}from"./index-CZrF53zS.js";import"./constants-B5suZUFP.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-r13SEbDt.js";import"./async-directive-CXMWIWl6.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Bzw9ITyu.js";import"./index-DR25KBDy.js";import"./tooltip-CURlvU88.js";import"./with-longpress-listener-Ffn_3kRX.js";import"./dismissible-stack-CfLYgfgr.js";import"./icon-Bg0ht1cC.js";import"./state-uLWmtRFL.js";import"./class-map-Jo3VKbU_.js";import"./style-map-CxO4Fkfr.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
