import{x as e}from"./iframe-B0AtGDgb.js";import{I as t,q as r,u as n}from"./with-default-aria-COcIHYuM.js";import"./count-card-VmGmMs5o.js";import{d as a}from"./index-CCtbLpO9.js";import{d as s}from"./index-DIBujNwg.js";import{d as p}from"./index-CFEFfP7r.js";import"./custom-element-DA12Qcjc.js";import"./constants-gS8DU6NI.js";import"./utils-CQ1-LirU.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-Cqgx-vau.js";import"./async-directive-DQ2_zMza.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CQflxhl7.js";import"./index-BMA36r70.js";import"./tooltip-BUYI1011.js";import"./with-longpress-listener-CDNSMlmV.js";import"./dismissible-stack-M_yh7eVE.js";import"./icon-D_OqDmAk.js";import"./state-DUi26-dh.js";import"./class-map-B8dOviBx.js";import"./style-map-DnkwTIo9.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
