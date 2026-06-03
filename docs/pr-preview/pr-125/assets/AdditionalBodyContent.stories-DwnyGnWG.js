import{x as e}from"./iframe-CpBRfrzJ.js";import{I as t,r,v as n}from"./with-default-aria-CNCzwp3d.js";import"./count-card-BcgpUioE.js";import{d as a}from"./index-Cv_cvAeD.js";import{d as s}from"./index-CM0HW16z.js";import{d as p}from"./index-Cm6FKZ62.js";import"./constants-gVnml2HS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BzwyD-AX.js";import"./async-directive-3bm8YuDq.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-2TN2ydWO.js";import"./index-CS_uJAMA.js";import"./tooltip-DNkxIzFe.js";import"./with-longpress-listener-DqjEQq5X.js";import"./dismissible-stack-DrWzySwM.js";import"./icon-C8Wdfnfi.js";import"./state-CjBfugW4.js";import"./class-map-DnTDE1Du.js";import"./style-map-B3ljcnA1.js";a();s();p();t.define([r,n]);const d="forge-count-card",E={title:"Components/Count Card",component:d,render:()=>e`
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
