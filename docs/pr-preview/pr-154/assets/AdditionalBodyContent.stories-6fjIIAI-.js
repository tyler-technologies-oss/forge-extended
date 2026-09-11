import{x as e}from"./iframe-pX2mP6Yq.js";import{I as t,r,v as n}from"./with-default-aria-D0R24zrx.js";import"./count-card-8PS46m9m.js";import{d as a}from"./index-DLHmM8kM.js";import{d as s}from"./index-7rJH8_RR.js";import{d as p}from"./index-BAvURvlC.js";import"./custom-element-DER5CWwz.js";import"./constants-Bf2qWwtf.js";import"./utils-BfHhYyJi.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BPNP532N.js";import"./async-directive-D457AqlN.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Cel8ZMRv.js";import"./index-BPY36sUL.js";import"./tooltip-DS299O4x.js";import"./with-longpress-listener-Dd9tt_HC.js";import"./dismissible-stack-Bs1vGjwE.js";import"./icon-UK7y3e63.js";import"./state-BAEis6Wi.js";import"./class-map-D3M3IjTv.js";import"./style-map-xkSYaI8Y.js";a();s();p();t.define([r,n]);const d="forge-count-card",O={title:"Components/Count Card",component:d,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const R=["AdditionalBodyContent"];export{o as AdditionalBodyContent,R as __namedExportsOrder,O as default};
