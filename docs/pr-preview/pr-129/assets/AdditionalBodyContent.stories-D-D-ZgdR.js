import{x as e}from"./iframe-BiqOLCym.js";import{I as t,q as r,u as n}from"./with-default-aria-B9u_I1Vb.js";import"./count-card-DDAk_e3i.js";import{d as a}from"./index-BvCHHo4A.js";import{d as s}from"./index-lP8MSrlI.js";import{d as p}from"./index-DJFfHrV4.js";import"./constants-CqaTs5fS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CpR51AY-.js";import"./async-directive-BRtB7_Lq.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-P5eP_rHx.js";import"./index-Ds-agNXc.js";import"./tooltip-CTDgzlkO.js";import"./with-longpress-listener-BACsXX7Q.js";import"./dismissible-stack-BoCPnbCA.js";import"./icon-CqcKSKcV.js";import"./state-DG_9V148.js";import"./class-map-DwadfE0F.js";import"./style-map-BI8jdJCX.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
