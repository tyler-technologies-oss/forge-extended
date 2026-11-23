import{x as e}from"./iframe-aIta0XjW.js";import{I as t,q as r,u as n}from"./with-default-aria-B18WzXUc.js";import"./count-card-dIn2yVqm.js";import{d as a}from"./index-HhQTP63o.js";import{d as s}from"./index-CYgzP4mp.js";import{d as p}from"./index-Cs5jp7MO.js";import"./component-utils-BI5goMsi.js";import"./constants-C89t2nXh.js";import"./utils-qX0sCc6t.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-yhn8fLQC.js";import"./async-directive-B4pUYcG0.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-D37AZnfP.js";import"./index-ClZAV0Rm.js";import"./tooltip-a8xk4fMu.js";import"./with-longpress-listener-CRVOFTli.js";import"./dismissible-stack-BlFRNdPh.js";import"./icon-COisYVme.js";import"./state-BHusNp5X.js";import"./class-map-nJCrVyER.js";import"./style-map-DH4PMvgW.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
