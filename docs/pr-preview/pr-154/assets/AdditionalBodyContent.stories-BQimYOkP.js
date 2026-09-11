import{x as e}from"./iframe-CYs4rUqc.js";import{I as t,r,v as n}from"./with-default-aria-IIDqe1FM.js";import"./count-card-CaMmrBNa.js";import{d as a}from"./index-CT7xPl9a.js";import{d as s}from"./index-BHHPSOx4.js";import{d as p}from"./index-C5m3cR43.js";import"./custom-element-CDYWBB4R.js";import"./constants-BPzvPAwC.js";import"./utils-D4Tmth0h.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-D5rm5sHA.js";import"./async-directive-BlkTbESp.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Cna3cTfO.js";import"./index-DNEPaDKp.js";import"./tooltip-BiQHgGlu.js";import"./with-longpress-listener-Bj8Pz6MQ.js";import"./dismissible-stack-B5VulF68.js";import"./icon-0n1M6L10.js";import"./state-BctSlBrf.js";import"./class-map-DcButXsH.js";import"./style-map-BoO3HD6L.js";a();s();p();t.define([r,n]);const d="forge-count-card",O={title:"Components/Count Card",component:d,render:()=>e`
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
