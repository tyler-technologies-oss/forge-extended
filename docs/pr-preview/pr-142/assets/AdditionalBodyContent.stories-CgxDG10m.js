import{x as e}from"./iframe-CEyoJGCy.js";import{I as t,q as r,u as n}from"./with-default-aria-wByQ6wv-.js";import"./count-card-BUhRUWE6.js";import{d as a}from"./index-BtBfNd7y.js";import{d as s}from"./index-DjtDwQc8.js";import{d as p}from"./index-qF3WSjnn.js";import"./component-utils-xTTRT63M.js";import"./constants-B19yLoP-.js";import"./utils-b88vL7Ig.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-Ci86qQTg.js";import"./async-directive-BEktGq0z.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BRMSJSki.js";import"./index-DndfI7F7.js";import"./tooltip-WE6LANzM.js";import"./with-longpress-listener-Dem-TUC1.js";import"./dismissible-stack-UIme5Hd9.js";import"./icon-BbEHwsUK.js";import"./state-Czw1uTDT.js";import"./class-map-C8foIcm9.js";import"./style-map-BtE3L0A0.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
