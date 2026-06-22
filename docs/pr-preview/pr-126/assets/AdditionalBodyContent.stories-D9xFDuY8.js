import{x as e}from"./iframe-5kvxEXBs.js";import{I as t,q as r,u as n}from"./with-default-aria-D2-0LCTD.js";import"./count-card-CRRwzVx5.js";import{d as a}from"./index-DrNGMHL6.js";import{d as s}from"./index-CHmNB9Kl.js";import{d as p}from"./index-Def6vlQ0.js";import"./constants-CvINzan8.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CALHhatl.js";import"./async-directive-eZbcblda.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Qu5WVgYb.js";import"./index-BdI9Jh-f.js";import"./tooltip-D6ltCyxV.js";import"./with-longpress-listener-C5sO1yjx.js";import"./position-utils-D5l6lBfm.js";import"./dismissible-stack-DN5JaK5C.js";import"./icon-D_imERFk.js";import"./state-Chl1syOk.js";import"./class-map-Bf52595e.js";import"./style-map-BrHpnArY.js";a();s();p();t.define([r,n]);const d="forge-count-card",E={title:"Components/Count Card",component:d,render:()=>e`
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
