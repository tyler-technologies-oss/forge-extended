import{x as e}from"./iframe-CUmtllDg.js";import{I as t,q as r,u as n}from"./with-default-aria-sX8zJ_2t.js";import"./count-card-NNTh0A_R.js";import{d as a}from"./index-DPhamwrd.js";import{d as s}from"./index-Bva2fajR.js";import{d as p}from"./index-Cp1Yinde.js";import"./custom-element-2Mrb3U_x.js";import"./constants-DTntG4X6.js";import"./utils-CNfRvMhc.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DFQytTxg.js";import"./async-directive-B9BDXmta.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Cahstr3s.js";import"./index-BtidZxFX.js";import"./tooltip-B4GxzS7-.js";import"./with-longpress-listener-CIBU5OM7.js";import"./dismissible-stack-Dq8Wx7Op.js";import"./icon-BoaZPg9x.js";import"./state-Cg3j5OBz.js";import"./class-map-7F1FW_MX.js";import"./style-map-CXxblk-R.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
