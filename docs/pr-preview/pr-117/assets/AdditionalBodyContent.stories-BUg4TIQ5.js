import{x as e}from"./iframe-BSkrS8By.js";import{I as t,q as r,u as n}from"./with-default-aria-BWwvJ9Lo.js";import"./count-card-hKbnNdQn.js";import{d as a}from"./index-DUzO_SJj.js";import{d as s}from"./index-XFxuRhb5.js";import{d as p}from"./index-k4YzgUzZ.js";import"./constants-CXiCJegp.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-Q5cAF7hS.js";import"./async-directive-B8ouUbHu.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BA2iSPP3.js";import"./index-Crfirdtn.js";import"./tooltip-CXBUCp3G.js";import"./with-longpress-listener-Y-iOePj_.js";import"./dismissible-stack-C3Vt60bg.js";import"./icon-CvWIsA02.js";import"./state-scmLy77C.js";import"./class-map-CBDFGRMD.js";import"./style-map-B1bh3OzE.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
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
