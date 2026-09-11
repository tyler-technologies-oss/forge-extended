import{x as e}from"./iframe-BQvNP4M8.js";import{I as t,r,v as n}from"./with-default-aria-BV0tb14g.js";import"./count-card-uQ3oAo-X.js";import{d as a}from"./index-D2FhTJht.js";import{d as s}from"./index-CurIM-Sx.js";import{d as p}from"./index-CkHWdMCc.js";import"./custom-element-CCcGDftf.js";import"./constants-vdQC6Ta-.js";import"./utils-DlINy0qF.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DMN2dfXf.js";import"./async-directive-CTOhvSPE.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-C7XE9NDI.js";import"./index-CytBHAll.js";import"./tooltip-DPZurtrE.js";import"./with-longpress-listener-DlzEWfJP.js";import"./dismissible-stack-2XmwfeXm.js";import"./icon-CWB8ZOKZ.js";import"./state-qOj0pOFb.js";import"./class-map-Dn5BTarG.js";import"./style-map-LthcQtPp.js";a();s();p();t.define([r,n]);const d="forge-count-card",O={title:"Components/Count Card",component:d,render:()=>e`
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
