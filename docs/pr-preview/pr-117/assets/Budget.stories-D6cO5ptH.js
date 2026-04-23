import{x as t}from"./iframe-CZPu-D1U.js";import{I as r,l as n,q as e,r as a,s as c,c as s}from"./with-default-aria-D7KCfSzQ.js";import"./count-card-ozGZrnh7.js";import{d as i}from"./index-c3BtHen4.js";import{d as p}from"./index-CIsPNzPZ.js";import{d as m}from"./index-BMiiY8TU.js";import"./constants-pmch7zZ6.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CsQHwhwS.js";import"./async-directive-ptfc4q4E.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-LYHbP_0-.js";import"./index-CT1ccKxh.js";import"./tooltip-DaOb7y6z.js";import"./with-longpress-listener-CmUuuU2G.js";import"./dismissible-stack-I1LEvZq_.js";import"./icon-Co630ox_.js";import"./icon-button-CBAAmoKT.js";import"./base-button-adapter-BluJsu7j.js";import"./focus-indicator-Du80mSZE.js";i();p();m();r.define([n,e,a,c,s]);const d="forge-count-card",F={title:"Components/Count Card",component:d,render:()=>t`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const M=["Budget"];export{o as Budget,M as __namedExportsOrder,F as default};
