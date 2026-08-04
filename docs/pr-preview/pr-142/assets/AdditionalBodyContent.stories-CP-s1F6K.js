import{x as e}from"./iframe-C7fMUolH.js";import{I as t,q as r,u as n}from"./with-default-aria-271WHlov.js";import"./count-card-vb6qimWV.js";import{d as a}from"./index-C_hig5gk.js";import{d as s}from"./index-D96rtq9C.js";import{d as p}from"./index-Coo-ck4l.js";import"./feature-detection-Cuu7LyiG.js";import"./constants-iVqEkiyf.js";import"./a11y-utils-D0XFVk2n.js";import"./custom-element-C028faeO.js";import"./utils-CuBSrgt8.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-Cf0GtZU2.js";import"./async-directive-Da_1GK_R.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DYnsJCg6.js";import"./index-CsJAi2sU.js";import"./tooltip-CjKJV5zw.js";import"./with-longpress-listener-DqSpwvI8.js";import"./dismissible-stack-NoLrZgwI.js";import"./icon-DgvKQl-p.js";import"./state-Bw6qk2-T.js";import"./class-map-CFhQHarn.js";import"./style-map-EqPt0941.js";a();s();p();t.define([r,n]);const m="forge-count-card",R={title:"Components/Count Card",component:m,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const S=["AdditionalBodyContent"];export{o as AdditionalBodyContent,S as __namedExportsOrder,R as default};
