import{x as e}from"./iframe-CsIWdsoO.js";import{I as t,q as r,u as n}from"./with-default-aria-7etb-YMf.js";import"./count-card-DRq5R4ih.js";import{d as a}from"./index-DyZC5Fdy.js";import{d as s}from"./index-CFOQnjMZ.js";import{d as p}from"./index-vIIzwTeQ.js";import"./constants-DRaU4qN_.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-Cwm0xWgJ.js";import"./async-directive-XX5Cxs9U.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-qwT5Amny.js";import"./index-qh-qnrZ4.js";import"./tooltip-DpD9tm3o.js";import"./with-longpress-listener-CJLyaPGH.js";import"./dismissible-stack-7Qf7hkIc.js";import"./icon-DeCYe8gL.js";import"./state-C0rWMgxl.js";import"./class-map-Be-9tENx.js";import"./style-map-Bthb6DNJ.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
