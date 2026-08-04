import{x as e}from"./iframe-8MwHtudQ.js";import{I as t,q as r,u as n}from"./with-default-aria-BPqXu6Xp.js";import"./count-card-BlUcAo79.js";import{d as a}from"./index-DFX5CsMH.js";import{d as s}from"./index-CjJZS86v.js";import{d as p}from"./index-CfxS1IX_.js";import"./feature-detection-DEZcwXBI.js";import"./constants-DuGcWjEK.js";import"./a11y-utils-CKen7KlO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BxX9MyhQ.js";import"./async-directive-4ylYArEM.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Cv99O3Oe.js";import"./index-E1wU_2kJ.js";import"./tooltip-CP1rbqy9.js";import"./with-longpress-listener-CPq0IsXs.js";import"./dismissible-stack-C_hXrryT.js";import"./icon-CLiBI_A3.js";import"./state-CZd9qnQx.js";import"./class-map-Bb9nqZzS.js";import"./style-map-VD4PCJpf.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
