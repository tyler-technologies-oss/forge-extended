import{x as e}from"./iframe-DctCxiSq.js";import{I as t,q as r,u as n}from"./with-default-aria-CNms5Vty.js";import"./count-card-DQA2aGbd.js";import{d as a}from"./index-CoWFMgSH.js";import{d as s}from"./index-Bg2jk-db.js";import{d as p}from"./index-_k3rayXD.js";import"./constants-CS4zXbsk.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BjQhxcrF.js";import"./async-directive-hMS-Qt5r.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-KZwkj2I_.js";import"./index-BEwsWSw8.js";import"./tooltip-BTEnoueP.js";import"./with-longpress-listener-Cx26JS2z.js";import"./dismissible-stack-D2yQ4f0P.js";import"./icon-BW_dzchp.js";import"./state-BpobjxgB.js";import"./class-map-K8DqNwWa.js";import"./style-map-auOw9Js3.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
