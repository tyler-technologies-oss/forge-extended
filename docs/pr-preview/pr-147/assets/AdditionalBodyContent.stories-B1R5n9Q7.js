import{x as e}from"./iframe-DM3VcRwQ.js";import{I as t,q as r,u as n}from"./with-default-aria-CbDiNaj6.js";import"./count-card-B1vMbG0q.js";import{d as a}from"./index-DVLPIiIV.js";import{d as s}from"./index-DS4OfG2J.js";import{d as p}from"./index-Dmpjt9sg.js";import"./custom-element-C99DI8oj.js";import"./constants-Cw5Hg5LI.js";import"./utils-DqrUBr-j.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CbD2rxyi.js";import"./async-directive-BE11uONG.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CUl2HWD5.js";import"./index-B-aybNLN.js";import"./tooltip-CElvEOvC.js";import"./with-longpress-listener-Hv5cQ4AQ.js";import"./dismissible-stack-COhslb2o.js";import"./icon-CIVAmTYB.js";import"./state-CiPZ0u0C.js";import"./class-map-BDJ7d3Iq.js";import"./style-map-C27VZBUn.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
