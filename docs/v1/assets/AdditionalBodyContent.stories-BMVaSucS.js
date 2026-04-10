import{x as e}from"./iframe-_4hlFKQj.js";import{I as t,q as r,u as n}from"./with-default-aria-DivMzomX.js";import"./count-card-BM_eI7pL.js";import{d as a}from"./index-DM1NEpjt.js";import{d as s}from"./index-D0gVUqX-.js";import{d as p}from"./index-zquUmkeF.js";import"./constants-CJ48DbBL.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-C7vIwOMK.js";import"./async-directive-D-qUlIdF.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BqMAhigS.js";import"./index-dvTGGRfO.js";import"./tooltip-C5Kfw4l-.js";import"./with-longpress-listener-B3p2Bz_x.js";import"./dismissible-stack-C6iny2x7.js";import"./icon-BHP1Au3O.js";import"./state-BI_7nERN.js";import"./class-map-BEUkFaMc.js";import"./style-map-B6vOWOSl.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const E=["AdditionalBodyContent"];export{o as AdditionalBodyContent,E as __namedExportsOrder,q as default};
