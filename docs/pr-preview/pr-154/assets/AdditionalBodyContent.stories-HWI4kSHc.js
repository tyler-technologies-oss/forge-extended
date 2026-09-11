import{x as e}from"./iframe-D_NpdGMW.js";import{I as t,r,v as n}from"./with-default-aria-QQHkHnUD.js";import"./count-card-BawiTtF_.js";import{d as a}from"./index-D1Q40_o8.js";import{d as s}from"./index-BfnnNpso.js";import{d as p}from"./index-CYHX8xAo.js";import"./custom-element-CyYN7QVE.js";import"./constants-B5g2L9LN.js";import"./utils-Duph8ic8.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DQdM5MP4.js";import"./async-directive-CI_QSR1Q.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-q9xROInv.js";import"./index-BQJ5BcfM.js";import"./tooltip-9D2XTgYD.js";import"./with-longpress-listener-dfgopyNX.js";import"./dismissible-stack-BlfoJVVW.js";import"./icon-Dd_9Vvpg.js";import"./state-C9-AOl8Q.js";import"./class-map-pH4tyynp.js";import"./style-map-Bge-VfZu.js";a();s();p();t.define([r,n]);const d="forge-count-card",O={title:"Components/Count Card",component:d,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const R=["AdditionalBodyContent"];export{o as AdditionalBodyContent,R as __namedExportsOrder,O as default};
