import{x as e}from"./iframe-CRRWsFO6.js";import{I as t,q as r,u as n}from"./with-default-aria-Bcp56cC_.js";import"./count-card-CdyBOcoI.js";import{d as a}from"./index-DbgnvWAV.js";import{d as s}from"./index-DVaSGcBa.js";import{d as p}from"./index-DG1jaPF4.js";import"./feature-detection-DORgUmeG.js";import"./constants-DF-bkflD.js";import"./a11y-utils-Dg0RZKx4.js";import"./custom-element-C028faeO.js";import"./utils-DW1uEvJt.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DQS22zAF.js";import"./async-directive-BAPHCo-g.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-cp2xh2wR.js";import"./index-8Hr6Scwl.js";import"./tooltip-CeNfZGwP.js";import"./with-longpress-listener-Cr6rroE_.js";import"./dismissible-stack-_LOSF9TE.js";import"./icon-wTiQ3Xju.js";import"./state-Dop-9PfM.js";import"./class-map-a-EV7ysE.js";import"./style-map-SKz4c8Rq.js";a();s();p();t.define([r,n]);const m="forge-count-card",R={title:"Components/Count Card",component:m,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const S=["AdditionalBodyContent"];export{o as AdditionalBodyContent,S as __namedExportsOrder,R as default};
