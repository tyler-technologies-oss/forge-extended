import{x as e}from"./iframe-BNRzrxvp.js";import{I as t,q as r,u as n}from"./with-default-aria-CKJa4TQ6.js";import"./count-card-BUJtmcRl.js";import{d as a}from"./index-Cfk3cKct.js";import{d as s}from"./index-C9f8Tyi6.js";import{d as p}from"./index-D6Q7UvHX.js";import"./custom-element-BuEtX1ez.js";import"./constants-ClOpupSA.js";import"./utils-DJdwSxH5.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BC9rQbmr.js";import"./async-directive-D3BBrAEV.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CcsIs4V7.js";import"./index-0szwGzId.js";import"./tooltip-Cb9fx1qF.js";import"./with-longpress-listener-QNAKRk3Q.js";import"./dismissible-stack-sCr0Xbre.js";import"./icon-C6I8EL-q.js";import"./state-Dy05jHKv.js";import"./class-map-BV2Dw1zj.js";import"./style-map-WFuhwlXU.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
