import{x as e}from"./iframe-ULyB_0Dy.js";import{I as t,q as r,u as n}from"./with-default-aria-CpHhlmZ0.js";import"./count-card-BOBSqbRd.js";import{d as a}from"./index-CkUW9AMb.js";import{d as s}from"./index-CSNzvmIf.js";import{d as p}from"./index-LN5RuzT8.js";import"./feature-detection-CE0UCYUK.js";import"./constants-CCgJ39ZP.js";import"./a11y-utils-BDdgGlMC.js";import"./custom-element-C028faeO.js";import"./utils-XRW8HtJy.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BE-mNjuD.js";import"./async-directive-BgnHwQy-.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Caovf1aY.js";import"./index-DHfuUUiM.js";import"./tooltip-CGlkN96O.js";import"./with-longpress-listener-9zNpMFVf.js";import"./dismissible-stack-KFmmCPeV.js";import"./icon-DfG7xEKj.js";import"./state-BKP-bjza.js";import"./class-map-BEBg8r6d.js";import"./style-map-KOunK3sf.js";a();s();p();t.define([r,n]);const m="forge-count-card",R={title:"Components/Count Card",component:m,render:()=>e`
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
