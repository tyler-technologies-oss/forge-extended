import{x as e}from"./iframe-tSrdq99I.js";import{I as t,r,v as n}from"./with-default-aria-Cjw09Hyt.js";import"./count-card-DAPTWarz.js";import{d as a}from"./index-DUD4nVta.js";import{d as s}from"./index-D9GFWDsH.js";import{d as p}from"./index-D5SF0yP_.js";import"./custom-element-Cg4oYBYF.js";import"./constants-DEDYFPik.js";import"./utils-BuNvph6x.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-C9gaqnGj.js";import"./async-directive-BwzQrKcK.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DxuUp4FF.js";import"./index-mfrX86El.js";import"./tooltip-D7GcPVGW.js";import"./with-longpress-listener-DCkSJ2mx.js";import"./dismissible-stack-DyydnwZ9.js";import"./icon-xRFOyXu1.js";import"./state-BT5CJi-g.js";import"./class-map-CTBWGCQU.js";import"./style-map-mgzE6KRN.js";a();s();p();t.define([r,n]);const d="forge-count-card",O={title:"Components/Count Card",component:d,render:()=>e`
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
