import{x as e}from"./iframe-DvDuhlM-.js";import{I as t,r,s as n}from"./with-default-aria--CksfNP1.js";import"./count-card-BD7ZEdbR.js";import{d as a}from"./index-CYL5SFS8.js";import{d as s}from"./index-CEufbgOC.js";import{d as p}from"./index-DLtDxj3h.js";import"./constants-Cf761MSM.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-NleCEBoB.js";import"./async-directive-DByh7Oed.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-pLevWjsw.js";import"./index-DwsTqmix.js";import"./tooltip-BqJ7-MUg.js";import"./with-longpress-listener-B89tIIbF.js";import"./dismissible-stack-Csm1NLzW.js";import"./icon-aaQwuLul.js";import"./state-09LYenXj.js";import"./class-map-5joOAaK_.js";import"./style-map-Bu5nKaUG.js";a();s();p();t.define([r,n]);const d="forge-count-card",E={title:"Components/Count Card",component:d,render:()=>e`
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
