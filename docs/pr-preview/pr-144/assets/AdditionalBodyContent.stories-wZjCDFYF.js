import{x as e}from"./iframe-Divla-Cp.js";import{I as t,q as r,u as n}from"./with-default-aria-BEs3GmpT.js";import"./count-card-DekcP9fG.js";import{d as a}from"./index-B9d_yM6M.js";import{d as s}from"./index-BZLP8QPd.js";import{d as p}from"./index-CWwm6ShL.js";import"./feature-detection-D-5lT58i.js";import"./constants-DkN7ZGiS.js";import"./a11y-utils-BCt-Wh9D.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-Bi1B8CZI.js";import"./async-directive-D1XEcX9j.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DDtCiOcM.js";import"./index-C48eAD1W.js";import"./tooltip-DlREf1Hp.js";import"./with-longpress-listener-D8tPz6R8.js";import"./dismissible-stack-DyjlOaHM.js";import"./icon-C6Jpggai.js";import"./state-CWeB6zh4.js";import"./class-map-DifFCkIf.js";import"./style-map-BsBaNyvw.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
