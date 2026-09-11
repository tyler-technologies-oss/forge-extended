import{x as e}from"./iframe-B-hqvoN1.js";import{I as t,r,v as n}from"./with-default-aria-UTb2ZfEa.js";import"./count-card-Ct6p50ku.js";import{d as a}from"./index-CTAqYqwJ.js";import{d as s}from"./index-DkjqiZMU.js";import{d as p}from"./index-BE5_aBI8.js";import"./custom-element-C0MWYpx0.js";import"./constants-BzUGdP7s.js";import"./utils-BpfZpwkX.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-Bk_RM_31.js";import"./async-directive-By6MWvSL.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Db49f7Dd.js";import"./index-D5VChY-S.js";import"./tooltip-XRL_YT2R.js";import"./with-longpress-listener-B_LXqv_X.js";import"./dismissible-stack-BCvcndys.js";import"./icon-y17Z_xfo.js";import"./state-DJU2YaQu.js";import"./class-map-DYK85YWM.js";import"./style-map--KBZMGXr.js";a();s();p();t.define([r,n]);const d="forge-count-card",O={title:"Components/Count Card",component:d,render:()=>e`
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
