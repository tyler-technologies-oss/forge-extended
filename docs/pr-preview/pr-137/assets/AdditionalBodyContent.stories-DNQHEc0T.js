import{x as e}from"./iframe-DY84GSRf.js";import{I as t,q as r,u as n}from"./with-default-aria-Tl2r-4IA.js";import"./count-card-A52F8alu.js";import{d as a}from"./index-BvExAWeJ.js";import{d as s}from"./index-C4QrGCyd.js";import{d as p}from"./index-D3g5dggv.js";import"./constants-D98kDqAv.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CnZXxtpX.js";import"./async-directive-Bh2jcCLL.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CMteLulR.js";import"./index-BRkhxT5_.js";import"./tooltip-D2bd8WoD.js";import"./with-longpress-listener-DHTwpRzc.js";import"./position-utils-BmD1PIUA.js";import"./dismissible-stack-Byk0QYSR.js";import"./icon-DCc3zBHq.js";import"./state-qT09zmhL.js";import"./class-map-RoITrbLe.js";import"./style-map-DG4xZIi3.js";a();s();p();t.define([r,n]);const d="forge-count-card",E={title:"Components/Count Card",component:d,render:()=>e`
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
