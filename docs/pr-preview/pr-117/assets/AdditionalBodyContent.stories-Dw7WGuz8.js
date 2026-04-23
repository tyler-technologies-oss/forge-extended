import{x as e}from"./iframe-CZPu-D1U.js";import{I as t,q as r,u as n}from"./with-default-aria-D7KCfSzQ.js";import"./count-card-ozGZrnh7.js";import{d as a}from"./index-c3BtHen4.js";import{d as s}from"./index-DV9f6JBd.js";import{d as p}from"./index-BMiiY8TU.js";import"./constants-pmch7zZ6.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CsQHwhwS.js";import"./async-directive-ptfc4q4E.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-LYHbP_0-.js";import"./index-CT1ccKxh.js";import"./tooltip-DaOb7y6z.js";import"./with-longpress-listener-CmUuuU2G.js";import"./dismissible-stack-I1LEvZq_.js";import"./icon-Co630ox_.js";import"./state-Qv2NKRYy.js";import"./class-map-BS-KI3zP.js";import"./style-map-Dgto3nrB.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
