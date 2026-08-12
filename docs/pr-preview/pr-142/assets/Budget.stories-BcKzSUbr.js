import{x as t}from"./iframe-BZR3avPy.js";import{I as r,l as n,q as e,r as a,s as c,c as i}from"./with-default-aria-DrGQh3rA.js";import"./count-card-CZ8J7Gfd.js";import{d as s}from"./index-HGkRbmOl.js";import{d as p}from"./index-DSF_ghjH.js";import{d as m}from"./index-C2vltYeh.js";import"./feature-detection-V1xjMoTa.js";import"./constants-Dczm6517.js";import"./a11y-utils-B2lvl91r.js";import"./custom-element-C028faeO.js";import"./utils-BeUVm7TG.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-B7mGwFLc.js";import"./async-directive-CduYbs5w.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BxeetAA7.js";import"./index-CKyYCgQv.js";import"./tooltip-B2OhOsWS.js";import"./with-longpress-listener-CZMXxJ4U.js";import"./dismissible-stack-BIXwkq1T.js";import"./icon-CAC4534v.js";import"./icon-button-DD2_Bu8d.js";import"./base-button-adapter-BBLLx2xC.js";import"./focus-indicator-BBF39Pup.js";s();p();m();r.define([n,e,a,c,i]);const d="forge-count-card",V={title:"Components/Count Card",component:d,render:()=>t`
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
