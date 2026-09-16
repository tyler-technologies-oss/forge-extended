import{x as e}from"./iframe-CEaEySpr.js";import{I as t,q as r,u as n}from"./with-default-aria-C4n4_au4.js";import"./count-card-HPaUMrR8.js";import{d as a}from"./index-BTu78JOc.js";import{d as s}from"./index-BlHyGU8p.js";import{d as p}from"./index-C0Dco3Ft.js";import"./custom-element-B0HNckU6.js";import"./constants-CTXNzd9R.js";import"./utils-DtyNcxMd.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-FwKPFzFF.js";import"./async-directive-CtIWyUPN.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BCcA4Tq5.js";import"./index-pDRkl3G0.js";import"./tooltip-BtWojpAZ.js";import"./with-longpress-listener-n-apoziF.js";import"./dismissible-stack-GVLFeEfG.js";import"./icon-Conhr7Vm.js";import"./state-CgEwcDA1.js";import"./class-map-D-c3fhie.js";import"./style-map-c4G3FvDS.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
