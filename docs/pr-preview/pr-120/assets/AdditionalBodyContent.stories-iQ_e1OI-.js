import{x as e}from"./iframe-DeCz1NxP.js";import{I as t,q as r,u as n}from"./with-default-aria-I7DctnY-.js";import"./count-card-Dj0vOM2W.js";import{d as a}from"./index-y6YfRWNK.js";import{d as s}from"./index-Dpk5nzj8.js";import{d as p}from"./index-BGrwdg2k.js";import"./constants-H4k9CvBY.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BuEhPJXb.js";import"./async-directive-CiAFc-zp.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CGu_mIUY.js";import"./index-BMw_Prgi.js";import"./tooltip-CtF5mnC2.js";import"./with-longpress-listener-CYjYA53N.js";import"./dismissible-stack-CkIBD97B.js";import"./icon-CiK0WDc_.js";import"./state-DnM88mh2.js";import"./class-map-DVuUGvG9.js";import"./style-map-Bew5MGVR.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
