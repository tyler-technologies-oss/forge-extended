import{x as e}from"./iframe-Be-8WAtF.js";import{I as t,q as r,u as n}from"./with-default-aria-fXPLHj-L.js";import"./count-card-s7EYwd0C.js";import{d as a}from"./index-DA0Dh1vd.js";import{d as s}from"./index-Bd-T0R79.js";import{d as p}from"./index-B7UAeTFd.js";import"./constants-Dq7oX4ND.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-C49Pmm7a.js";import"./async-directive-DpeoARQz.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BCuR79Db.js";import"./index-DJ1VCy7E.js";import"./tooltip-DnGmtwFb.js";import"./with-longpress-listener-i061tCQZ.js";import"./dismissible-stack-Cdjp4gTp.js";import"./icon-DGd7oIZ4.js";import"./state-DS4CqdcM.js";import"./class-map-LkDqZww_.js";import"./style-map-cag5cXlT.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
