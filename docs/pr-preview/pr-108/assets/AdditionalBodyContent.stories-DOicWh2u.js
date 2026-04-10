import{x as e}from"./iframe-WkiIhNRu.js";import{I as t,q as r,u as n}from"./with-default-aria-CWoTHr42.js";import"./count-card-bFtMwIPk.js";import{d as a}from"./index-CsZ0-Chf.js";import{d as s}from"./index-DGq2iuOp.js";import{d as p}from"./index-BjQk7Ojm.js";import"./constants-FxeZkf1O.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DYV1PXcC.js";import"./async-directive-CYwW8XHA.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CahP77Za.js";import"./index-DkwKZpNf.js";import"./tooltip-CB9OE-zy.js";import"./with-longpress-listener-9CPbYCsD.js";import"./dismissible-stack-TjpC2y4d.js";import"./icon-DmHnI5V9.js";import"./state-BSLa_aGT.js";import"./class-map-Dy22Wng_.js";import"./style-map-xrte-eec.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
