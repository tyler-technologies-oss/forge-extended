import{x as e}from"./iframe-BZR3avPy.js";import{I as t,q as r,u as n}from"./with-default-aria-DrGQh3rA.js";import"./count-card-CZ8J7Gfd.js";import{d as a}from"./index-HGkRbmOl.js";import{d as s}from"./index-CNlqnerk.js";import{d as p}from"./index-C2vltYeh.js";import"./feature-detection-V1xjMoTa.js";import"./constants-Dczm6517.js";import"./a11y-utils-B2lvl91r.js";import"./custom-element-C028faeO.js";import"./utils-BeUVm7TG.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-B7mGwFLc.js";import"./async-directive-CduYbs5w.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BxeetAA7.js";import"./index-CKyYCgQv.js";import"./tooltip-B2OhOsWS.js";import"./with-longpress-listener-CZMXxJ4U.js";import"./dismissible-stack-BIXwkq1T.js";import"./icon-CAC4534v.js";import"./state-Die3n6np.js";import"./class-map-CBmZDkCE.js";import"./style-map-BVZwwXA2.js";a();s();p();t.define([r,n]);const m="forge-count-card",R={title:"Components/Count Card",component:m,render:()=>e`
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
