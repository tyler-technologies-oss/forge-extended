import{x as e}from"./iframe-CxQwQddN.js";import{I as t,q as r,u as n}from"./with-default-aria-CVu2yw52.js";import"./count-card-CEFPzrP_.js";import{d as a}from"./index-TkdPUO8k.js";import{d as s}from"./index-C7DJAKrK.js";import{d as p}from"./index-DLIs_KsT.js";import"./component-utils-C5QY3EhE.js";import"./constants-C5b45D2K.js";import"./utils-DAqdXIKN.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CL8MOWRP.js";import"./async-directive-paHAad09.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BDxGwu8F.js";import"./index-ClcsuzaP.js";import"./tooltip-DQRm7PkL.js";import"./with-longpress-listener-DE3q2kTi.js";import"./dismissible-stack-BeO_Jjma.js";import"./icon-BDgIgzOI.js";import"./state-CY0t6aDd.js";import"./class-map-y-43vWkH.js";import"./style-map-ByO0B9OY.js";a();s();p();t.define([r,n]);const d="forge-count-card",L={title:"Components/Count Card",component:d,render:()=>e`
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
