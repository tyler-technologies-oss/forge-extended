import{x as e}from"./iframe-CWwUEUts.js";import{I as t,q as r,u as n}from"./with-default-aria-BmTvV3yR.js";import"./count-card-DqjrtRVm.js";import{d as a}from"./index-Cbrfqhkz.js";import{d as s}from"./index-B6NyjrK0.js";import{d as p}from"./index-C-YNpYz3.js";import"./component-utils-CS0cJgNw.js";import"./constants-Be6bX2Od.js";import"./utils-ByLsL7Wi.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DQvAh1tX.js";import"./async-directive-D82nVt7w.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CYpxGDOm.js";import"./index-ChD94X3s.js";import"./tooltip-3tQHK1AW.js";import"./with-longpress-listener-DeNIdfjd.js";import"./dismissible-stack-gdj2rnfw.js";import"./icon-CVYhSLfO.js";import"./state-Di9M7JQI.js";import"./class-map-BKQOMfSV.js";import"./style-map-3uMI90Ue.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
