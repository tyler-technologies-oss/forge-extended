import{x as e}from"./iframe-2Sbhygbf.js";import{I as t,q as r,u as n}from"./with-default-aria-mhKvke9N.js";import"./count-card-8q5XoNtO.js";import{d as a}from"./index-CS3aADBg.js";import{d as s}from"./index-CmHEw3HE.js";import{d as p}from"./index-C9M8MSvJ.js";import"./constants-BEkbKOlm.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CBwKQi_Z.js";import"./async-directive-C2-a4nic.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Ch6eXN49.js";import"./index-BdhuiPcj.js";import"./tooltip-fk37u-wm.js";import"./with-longpress-listener-DWOqTDJ5.js";import"./dismissible-stack-l44ptn7x.js";import"./icon-UtUX4HYL.js";import"./state-DOELCKgL.js";import"./class-map-C06VkqGx.js";import"./style-map-BNVLr8fw.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
