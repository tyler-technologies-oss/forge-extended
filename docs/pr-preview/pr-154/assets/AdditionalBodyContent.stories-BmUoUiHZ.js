import{x as e}from"./iframe-BKxBIIJQ.js";import{I as t,r,v as n}from"./with-default-aria-DjItAXX6.js";import"./count-card-C-MQ-MuR.js";import{d as a}from"./index-0JZT0dcO.js";import{d as s}from"./index-B1Kvo2_8.js";import{d as p}from"./index-v3JyUmzH.js";import"./custom-element-BldoUTPl.js";import"./constants-aeBb4lYV.js";import"./utils-B42KGafL.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-D3GzrXFC.js";import"./async-directive-CnrapT-E.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BaUYnTlJ.js";import"./index-Cf-yF1Nt.js";import"./tooltip-C_fHynxG.js";import"./with-longpress-listener-VROGiMiY.js";import"./dismissible-stack-DkTmbPfG.js";import"./icon-CGdxk2in.js";import"./state-CaY3QDV3.js";import"./class-map-BNDdSF1T.js";import"./style-map-BHjVEl-t.js";a();s();p();t.define([r,n]);const d="forge-count-card",O={title:"Components/Count Card",component:d,render:()=>e`
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
