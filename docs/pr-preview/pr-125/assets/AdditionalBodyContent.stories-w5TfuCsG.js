import{x as e}from"./iframe-C44ATlN0.js";import{I as t,r,v as n}from"./with-default-aria-DEeb_wyb.js";import"./count-card-BF1LPZdW.js";import{d as a}from"./index-B1JO16kf.js";import{d as s}from"./index-CADQadt2.js";import{d as p}from"./index-YOaGXbRq.js";import"./constants-DSgRJEDh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-C7ZpBEv9.js";import"./async-directive-CKU25sS1.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-B4vRstRi.js";import"./index-D2wgg6jS.js";import"./tooltip-BptsRu5z.js";import"./with-longpress-listener-BBdOH933.js";import"./dismissible-stack-DkzqwRYE.js";import"./icon-j-OxqPb8.js";import"./state-DpTv8ICE.js";import"./class-map-9k28UoYM.js";import"./style-map-YRARWqqF.js";a();s();p();t.define([r,n]);const d="forge-count-card",E={title:"Components/Count Card",component:d,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const L=["AdditionalBodyContent"];export{o as AdditionalBodyContent,L as __namedExportsOrder,E as default};
