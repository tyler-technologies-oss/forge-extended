import{x as e}from"./iframe-Bi2jjneX.js";import{I as t,q as r,u as n}from"./with-default-aria-Bp7BOLsO.js";import"./count-card-DU3Wlftj.js";import{d as a}from"./index-DWa_oEDo.js";import{d as s}from"./index-i8Sfxnvq.js";import{d as p}from"./index-mAh3jkfA.js";import"./feature-detection-eW29fe97.js";import"./constants-Be1rccdx.js";import"./a11y-utils-DwvBqvsn.js";import"./custom-element-C028faeO.js";import"./utils-CcBW4sMr.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-Cv2eJcz_.js";import"./async-directive-BIDRqgTX.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Du7tMeRQ.js";import"./index-IuhBtKh4.js";import"./tooltip-DdUToc9Z.js";import"./with-longpress-listener-UPFaAWLE.js";import"./dismissible-stack-Cj9RVODa.js";import"./icon-Ctp2z37r.js";import"./state-Czs04_Sg.js";import"./class-map-O7KlQ7_y.js";import"./style-map-CPZE9Abe.js";a();s();p();t.define([r,n]);const m="forge-count-card",R={title:"Components/Count Card",component:m,render:()=>e`
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
