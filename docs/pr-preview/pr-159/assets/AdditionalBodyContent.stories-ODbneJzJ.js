import{x as e}from"./iframe-CSr27Gi9.js";import{I as t,q as r,u as n}from"./with-default-aria-DqAXseBi.js";import"./count-card-DlyUa6nx.js";import{d as a}from"./index-DX-PHoPv.js";import{d as s}from"./index-8N_lAb06.js";import{d as p}from"./index-CaDzBq-P.js";import"./component-utils-DDaW1mI9.js";import"./constants-B0KOFcFf.js";import"./utils-CaDkb-CY.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BDYppvBO.js";import"./async-directive-DdY3TFlF.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-S8W-aZjQ.js";import"./index-DllKOV-2.js";import"./tooltip-UOOAfJ-G.js";import"./with-longpress-listener-BiENMdof.js";import"./dismissible-stack-CYkZnnQl.js";import"./icon-C2DgJ4Of.js";import"./state-C-klXQBz.js";import"./class-map-B6tseOWg.js";import"./style-map-ZfLdavep.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
