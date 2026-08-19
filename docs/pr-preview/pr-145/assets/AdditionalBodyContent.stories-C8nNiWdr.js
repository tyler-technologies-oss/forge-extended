import{x as e}from"./iframe-C7JWi23m.js";import{I as t,q as r,u as n}from"./with-default-aria-K3PJ0_SZ.js";import"./count-card--hzp0oNs.js";import{d as a}from"./index-B8HFBbmF.js";import{d as s}from"./index-BM8DFtIT.js";import{d as p}from"./index-DHi96QGJ.js";import"./feature-detection-DwRFlNSf.js";import"./constants-DPUAL7_7.js";import"./a11y-utils-DHYwHs7X.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-Bj7toZcH.js";import"./async-directive-CknBIbyc.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DD9qsl0c.js";import"./index-DrG4UHzn.js";import"./tooltip-C-Y5oe1s.js";import"./with-longpress-listener-RE8qQjre.js";import"./dismissible-stack-BQ_5nqAG.js";import"./icon-D1pxQFQj.js";import"./state-DnUESnFS.js";import"./class-map-DtSCGelo.js";import"./style-map-CKuFOp2Q.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
