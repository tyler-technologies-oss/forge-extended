import{x as e}from"./iframe-SHp831uv.js";import{I as t,r,v as n}from"./with-default-aria-8o2urQtC.js";import"./count-card-BfcXrTvr.js";import{d as a}from"./index-QCVF5AdA.js";import{d as s}from"./index-B7fL4CPR.js";import{d as p}from"./index-KZ9udkuJ.js";import"./custom-element-B6C_dIc3.js";import"./constants-DRnO8cEF.js";import"./utils-BQMvIrLC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-kTKF_2VI.js";import"./async-directive-sXoZ91VK.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-D9hqbZqQ.js";import"./index-DLWqkgo1.js";import"./tooltip-BjVCG211.js";import"./with-longpress-listener-BbaSALIF.js";import"./dismissible-stack-DesdIcOG.js";import"./icon-rFRese_m.js";import"./state-CuQqgled.js";import"./class-map-BFLBEnAY.js";import"./style-map-DTIaQhkS.js";a();s();p();t.define([r,n]);const d="forge-count-card",O={title:"Components/Count Card",component:d,render:()=>e`
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
