import{x as e}from"./iframe-BMggY0Eq.js";import{I as t,r,v as n}from"./with-default-aria-NpWy7zUu.js";import"./count-card-BGPR7qtB.js";import{d as a}from"./index-CcueWhpz.js";import{d as s}from"./index-iM_rqbAl.js";import{d as p}from"./index-ChjM4iTk.js";import"./custom-element-FMdYT5yi.js";import"./constants-o7gsy-Mc.js";import"./utils-Ci8BKDzo.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CWd9ykg1.js";import"./async-directive-Bkkdsiao.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DQHA1GbE.js";import"./index-DLamJMGI.js";import"./tooltip-BKYddWnJ.js";import"./with-longpress-listener-Dn5IepJm.js";import"./dismissible-stack-Bly2SCxr.js";import"./icon-B7BdjdS-.js";import"./state-Dyl8P-GI.js";import"./class-map-BX9NNbX2.js";import"./style-map-Dkf97-q5.js";a();s();p();t.define([r,n]);const d="forge-count-card",O={title:"Components/Count Card",component:d,render:()=>e`
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
