import{x as e}from"./iframe-CuIWC8FI.js";import{I as t,q as r,u as n}from"./with-default-aria-CMkXkpFU.js";import"./count-card-DmqZW089.js";import{d as a}from"./index-CfG6fK2G.js";import{d as s}from"./index-GG6tiWFQ.js";import{d as p}from"./index-omXqDjJC.js";import"./feature-detection-DimA5s9Y.js";import"./constants-DlZthJ05.js";import"./a11y-utils-Pqf8QPAB.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-B9FU4eDS.js";import"./async-directive-Dl5vg_mB.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CZv6At9A.js";import"./index-DuZZMuP8.js";import"./tooltip-c8vLaBOi.js";import"./with-longpress-listener-D41-sUQ5.js";import"./dismissible-stack-c8XRhsVn.js";import"./icon-Bq-EUyj3.js";import"./state-D7ic5OZR.js";import"./class-map-sZ8tE-fV.js";import"./style-map-D6w959gt.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
