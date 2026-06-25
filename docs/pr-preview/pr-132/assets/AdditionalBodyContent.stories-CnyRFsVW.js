import{x as e}from"./iframe-BMqNQSB3.js";import{I as t,q as r,u as n}from"./with-default-aria-B5Gz3KW5.js";import"./count-card-DEAA4zv2.js";import{d as a}from"./index-BZg0-s7Y.js";import{d as s}from"./index-9o6I-DjB.js";import{d as p}from"./index-mH9jHWiH.js";import"./constants-dm9VtAl7.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DbQLnnc2.js";import"./async-directive-Dvrkdtd5.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-0bXiUZPH.js";import"./index-DYscERrA.js";import"./tooltip-CMC2NEER.js";import"./with-longpress-listener-5-WmNr5L.js";import"./dismissible-stack-D7F1XTx3.js";import"./icon-DAICiFsx.js";import"./state-B1UgwSPM.js";import"./class-map-CcStgTUM.js";import"./style-map-BV2EJDi1.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
