import{x as e}from"./iframe-CoLC7Ddj.js";import{I as t,q as r,u as n}from"./with-default-aria-DnVksJc2.js";import"./count-card-Sk1fV_g-.js";import{d as a}from"./index-DWg-8V2P.js";import{d as s}from"./index-Bf0wIJ3c.js";import{d as p}from"./index-D0P-J5t-.js";import"./custom-element-DFE_Cjil.js";import"./constants-B-hZthFg.js";import"./utils-C1eBehht.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-B7Z3MGJH.js";import"./async-directive-CZeC78Nz.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CCe8DSny.js";import"./index-0dlbAkNb.js";import"./tooltip-BkKktXcc.js";import"./with-longpress-listener-DgQacVA_.js";import"./dismissible-stack-DKDJEgub.js";import"./icon-BcT5yCfR.js";import"./state-CsRH-63k.js";import"./class-map-Br341N1x.js";import"./style-map-CeZfPB9B.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
