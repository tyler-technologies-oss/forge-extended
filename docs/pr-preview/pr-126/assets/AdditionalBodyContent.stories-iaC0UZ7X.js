import{x as e}from"./iframe-BID06n7E.js";import{I as t,q as r,u as n}from"./with-default-aria-BREs-j-N.js";import"./count-card-Dyev5xDN.js";import{d as a}from"./index-2i5Wi6_R.js";import{d as s}from"./index-7Cwq59RR.js";import{d as p}from"./index-DyZbf5sF.js";import"./constants-B3tN-dMS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DaTy1hpd.js";import"./async-directive-ZEndwiQE.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-RJA0Keow.js";import"./index-mLeSSAwG.js";import"./tooltip-Byk3k62C.js";import"./with-longpress-listener-Baz068-U.js";import"./position-utils-DfGP7yHD.js";import"./dismissible-stack-CG-qEoPu.js";import"./icon-CYK8fSKq.js";import"./state-BmOlXKM6.js";import"./class-map-hW_n5mGN.js";import"./style-map-rRKqdM8O.js";a();s();p();t.define([r,n]);const d="forge-count-card",E={title:"Components/Count Card",component:d,render:()=>e`
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
