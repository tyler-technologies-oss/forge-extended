import{x as e}from"./iframe-BONfeRbS.js";import{I as t,q as r,u as n}from"./with-default-aria-BX23kPsM.js";import"./count-card-DpCfFgSH.js";import{d as a}from"./index-BbuEY8TC.js";import{d as s}from"./index-DHwt00KK.js";import{d as p}from"./index-zLV5Feyi.js";import"./feature-detection-BdDPgXkM.js";import"./constants-DnUFLkc1.js";import"./a11y-utils-CPysxFLW.js";import"./custom-element-C028faeO.js";import"./utils-D9p4bUJ4.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DJLuWaYS.js";import"./async-directive-CTteLgwZ.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DQWtLKbM.js";import"./index-D-4eG0O1.js";import"./tooltip-BOfBYoiw.js";import"./with-longpress-listener-BBjmO5EP.js";import"./dismissible-stack--RH1Fewv.js";import"./icon-C7xslxSO.js";import"./state-BBrMM9pm.js";import"./class-map-DP5Wz34w.js";import"./style-map-BBE2BW0r.js";a();s();p();t.define([r,n]);const m="forge-count-card",R={title:"Components/Count Card",component:m,render:()=>e`
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
