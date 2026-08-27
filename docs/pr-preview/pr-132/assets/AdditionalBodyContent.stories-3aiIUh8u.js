import{x as e}from"./iframe-C1IwHWh4.js";import{I as t,q as r,u as n}from"./with-default-aria-vNQzvBvA.js";import"./count-card-ofQNWtg9.js";import{d as a}from"./index-BrM1vFRX.js";import{d as s}from"./index-BmXKovgp.js";import{d as p}from"./index-BMZFXSJE.js";import"./constants-CR--KdMw.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CGstrqhG.js";import"./async-directive-DgVrjHLV.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-iSqkMykt.js";import"./index-BaDKEIV7.js";import"./tooltip-C5a22RZN.js";import"./with-longpress-listener-CwBHWrNA.js";import"./dismissible-stack-B9OuHJfx.js";import"./icon-CmQFPV-F.js";import"./state-2YV6o7hr.js";import"./class-map-CQT56oMp.js";import"./style-map-CLJpZ6Eq.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
