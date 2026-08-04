import{x as t}from"./iframe-CpRQkBMQ.js";import{I as r,l as n,q as e,r as a,s as c,c as i}from"./with-default-aria-DCrQ45_b.js";import"./count-card-sQBe7kdW.js";import{d as s}from"./index-CU70dnan.js";import{d as p}from"./index-BPW4qMFY.js";import{d as m}from"./index-BkCRnUT-.js";import"./feature-detection-qDrs-qqg.js";import"./constants-6XKmeSe-.js";import"./a11y-utils-D6lw3lX1.js";import"./custom-element-C028faeO.js";import"./utils-DNsk33b7.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-0zZ0wsQ3.js";import"./async-directive-CWZGg9E5.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DIPIoF2N.js";import"./index-D-UhK26u.js";import"./tooltip-DaenRRu7.js";import"./with-longpress-listener-q-m3c7Jj.js";import"./dismissible-stack-ByH90fXI.js";import"./icon-BbBof2IO.js";import"./icon-button-B5ctXg8e.js";import"./base-button-adapter-CKJ2vgSn.js";import"./focus-indicator-BHpx-Ltw.js";s();p();m();r.define([n,e,a,c,i]);const d="forge-count-card",V={title:"Components/Count Card",component:d,render:()=>t`
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--forge-spacing-medium);">
        <forge-count-card>
          <forge-icon slot="icon" name="attach_money"></forge-icon>
          <span slot="label">Cost</span>
          <span slot="count">$33,002.00</span>
        </forge-count-card>

        <forge-count-card>
          <forge-icon slot="icon" name="account_balance"></forge-icon>
          <span slot="label">Funding</span>
          <span slot="count">$23,001.00</span>
        </forge-count-card>

        <forge-count-card theme="error">
          <forge-icon slot="icon" name="trending_down"></forge-icon>
          <span slot="label">Variance</span>
          <forge-badge slot="header-end" theme="error">Over budget</forge-badge>
          <span slot="count">-$10,001.00</span>
        </forge-count-card>

        <forge-count-card>
          <forge-icon slot="icon" name="star"></forge-icon>
          <span slot="label">Total score</span>
          <forge-icon-button slot="action" aria-label="Edit">
            <forge-icon name="edit"></forge-icon>
          </forge-icon-button>
          <span slot="count">Not scored</span>
        </forge-count-card>
      </div>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const j=["Budget"];export{o as Budget,j as __namedExportsOrder,V as default};
