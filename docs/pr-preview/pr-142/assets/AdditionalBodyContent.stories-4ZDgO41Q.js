import{x as e}from"./iframe-CpRQkBMQ.js";import{I as t,q as r,u as n}from"./with-default-aria-DCrQ45_b.js";import"./count-card-sQBe7kdW.js";import{d as a}from"./index-CU70dnan.js";import{d as s}from"./index-CK946pi9.js";import{d as p}from"./index-BkCRnUT-.js";import"./feature-detection-qDrs-qqg.js";import"./constants-6XKmeSe-.js";import"./a11y-utils-D6lw3lX1.js";import"./custom-element-C028faeO.js";import"./utils-DNsk33b7.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-0zZ0wsQ3.js";import"./async-directive-CWZGg9E5.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DIPIoF2N.js";import"./index-D-UhK26u.js";import"./tooltip-DaenRRu7.js";import"./with-longpress-listener-q-m3c7Jj.js";import"./dismissible-stack-ByH90fXI.js";import"./icon-BbBof2IO.js";import"./state-BfTBKv9z.js";import"./class-map-CivAwYMn.js";import"./style-map-CFoRdjYL.js";a();s();p();t.define([r,n]);const m="forge-count-card",R={title:"Components/Count Card",component:m,render:()=>e`
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
