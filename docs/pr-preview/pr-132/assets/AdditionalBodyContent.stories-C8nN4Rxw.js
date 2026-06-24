import{x as e}from"./iframe-DXbn4rxA.js";import{I as t,q as r,u as n}from"./with-default-aria-Cx645oS7.js";import"./count-card-MihF7BY3.js";import{d as a}from"./index-BQBStG7r.js";import{d as s}from"./index-Dd-5WqHW.js";import{d as p}from"./index-BFVOiteL.js";import"./constants-DjAQnJTr.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-tmm0hn-_.js";import"./async-directive-lseVjRFh.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-C7xLUIcQ.js";import"./index-DOtjK1od.js";import"./tooltip-CpUsp_Pk.js";import"./with-longpress-listener-Bygt3nKN.js";import"./dismissible-stack-aqNiWXAU.js";import"./icon-TYDC0QZ8.js";import"./state-DYG8DvPV.js";import"./class-map-BlBQRB-3.js";import"./style-map-ESNGbK9W.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
