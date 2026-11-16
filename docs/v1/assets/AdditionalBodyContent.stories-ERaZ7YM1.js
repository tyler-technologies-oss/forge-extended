import{x as e}from"./iframe-C08US71-.js";import{I as t,q as r,u as n}from"./with-default-aria-BQE8XDIz.js";import"./count-card-DsgQHhEY.js";import{d as a}from"./index-BBQYzh_e.js";import{d as s}from"./index-ByNYrsfp.js";import{d as p}from"./index-B-RbE-Gn.js";import"./component-utils-Dk8e2pW9.js";import"./constants-BLBViMKp.js";import"./utils-C7jF9PmR.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DBbww9_W.js";import"./async-directive-DBIGADlc.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-PVZ9PkQy.js";import"./index-Bk6ii405.js";import"./tooltip-BYt622y1.js";import"./with-longpress-listener-BMUWV6uS.js";import"./dismissible-stack-BuxoUK8R.js";import"./icon-DQrVUb0Z.js";import"./state-DhnRwUSZ.js";import"./class-map-Dxz70OQS.js";import"./style-map-B7njCwnH.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
