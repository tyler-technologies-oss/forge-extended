import{x as e}from"./iframe-C5GBHaJ-.js";import{I as t,q as r,u as n}from"./with-default-aria-Dz9T_Goq.js";import"./count-card-B1PrLY3K.js";import{d as a}from"./index-DD9SkGUH.js";import{d as s}from"./index-B3Hmyshg.js";import{d as p}from"./index-CBRPS9Ca.js";import"./constants-DI1fRxpn.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-D9NxibOS.js";import"./async-directive-C918TF4t.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CiSVdpj5.js";import"./index-ChfXJ1jg.js";import"./tooltip-BnMs8FQV.js";import"./with-longpress-listener-dRw0-SDN.js";import"./position-utils-CzFs10Td.js";import"./dismissible-stack-f-YEJexU.js";import"./icon-ClPouMlv.js";import"./state-CoA54oL7.js";import"./class-map-ChDuzkOW.js";import"./style-map-BhS-ynK6.js";a();s();p();t.define([r,n]);const d="forge-count-card",E={title:"Components/Count Card",component:d,render:()=>e`
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
