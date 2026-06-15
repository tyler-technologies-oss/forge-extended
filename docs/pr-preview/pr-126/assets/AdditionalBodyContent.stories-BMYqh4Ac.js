import{x as e}from"./iframe-BMmxjS7K.js";import{I as t,q as r,u as n}from"./with-default-aria-DUm9cFDb.js";import"./count-card-DWlPFdq-.js";import{d as a}from"./index-CH4_EQDb.js";import{d as s}from"./index-dplpX56E.js";import{d as p}from"./index-R22CT4LH.js";import"./constants-DxKBK66z.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-vFe5Fey2.js";import"./async-directive-C8AHgdeZ.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CvgiCefo.js";import"./index-D-iiUvd_.js";import"./tooltip-CX1jV9vj.js";import"./with-longpress-listener-ZBxJ2PG2.js";import"./position-utils-Dg6KB9wi.js";import"./dismissible-stack-BP6jnQvR.js";import"./icon-DHP83XnC.js";import"./state-Pz8kZyTN.js";import"./class-map-CNMADvTA.js";import"./style-map-lC-WH_oI.js";a();s();p();t.define([r,n]);const d="forge-count-card",E={title:"Components/Count Card",component:d,render:()=>e`
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
