import{x as e}from"./iframe-Dms13Zq_.js";import{I as t,q as r,u as n}from"./with-default-aria-DIEogLWd.js";import"./count-card-ahFeX9pw.js";import{d as a}from"./index-CHjFsM_0.js";import{d as s}from"./index-4GRAoSjH.js";import{d as p}from"./index-C0X41ZRh.js";import"./custom-element-_XMhrF5O.js";import"./constants-VXsM_ZgY.js";import"./utils-CKW-Y7iA.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DjheCZrT.js";import"./async-directive-D4vy_6ok.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-C6Gd5NcK.js";import"./index-BTI9JXud.js";import"./tooltip-CZHplz9r.js";import"./with-longpress-listener-YWKEXeKL.js";import"./dismissible-stack-BBpZ5CI_.js";import"./icon-DOY4ZfAJ.js";import"./state-EL7y8e4Q.js";import"./class-map-B_T3H8Jb.js";import"./style-map-Cm36ogrO.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
