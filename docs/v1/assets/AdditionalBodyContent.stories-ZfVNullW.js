import{x as e}from"./iframe-Qh6uGKis.js";import{I as t,q as r,u as n}from"./with-default-aria-Ci9C3nW2.js";import"./count-card-5pJbFc4J.js";import{d as a}from"./index-ClVoGirk.js";import{d as s}from"./index-CHdIvzN8.js";import{d as p}from"./index-D_k87163.js";import"./component-utils-CHSR0lNw.js";import"./constants--Eb-8YTG.js";import"./utils-DV_ZlenX.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CcR0cCgf.js";import"./async-directive-CdlHa7rQ.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Btcm4i6H.js";import"./index-COA60wNR.js";import"./tooltip-Dk5G-x2P.js";import"./with-longpress-listener-CCdYr4S9.js";import"./dismissible-stack-BTasuI1h.js";import"./icon-IVNKVlSn.js";import"./state-Xd9mEVwF.js";import"./class-map-BCBS4o1b.js";import"./style-map-BRnBBsed.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
