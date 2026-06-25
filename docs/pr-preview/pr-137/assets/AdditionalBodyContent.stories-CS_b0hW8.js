import{x as e}from"./iframe-BJ_QdE3d.js";import{I as t,q as r,u as n}from"./with-default-aria-COFgV0Us.js";import"./count-card-COE-xkEU.js";import{d as a}from"./index-CYGJhcJZ.js";import{d as s}from"./index-CgISdW51.js";import{d as p}from"./index-Xa04bjka.js";import"./constants-CXrUjLap.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DYLvGOzX.js";import"./async-directive-Ci_UA772.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Dh1WI3Jb.js";import"./index-CM0da9Oh.js";import"./tooltip-DyIgac-l.js";import"./with-longpress-listener-CzoXCZwA.js";import"./position-utils-CyX4xxp3.js";import"./dismissible-stack-C5oeQ0jE.js";import"./icon-BnTKu5AW.js";import"./state-Cp4j3q9X.js";import"./class-map-9P7OYce-.js";import"./style-map-BlZCDBKq.js";a();s();p();t.define([r,n]);const d="forge-count-card",E={title:"Components/Count Card",component:d,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const L=["AdditionalBodyContent"];export{o as AdditionalBodyContent,L as __namedExportsOrder,E as default};
