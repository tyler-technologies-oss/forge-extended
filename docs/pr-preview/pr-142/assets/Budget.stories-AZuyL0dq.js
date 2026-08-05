import{x as t}from"./iframe-ULyB_0Dy.js";import{I as r,l as n,q as e,r as a,s as c,c as i}from"./with-default-aria-CpHhlmZ0.js";import"./count-card-BOBSqbRd.js";import{d as s}from"./index-CkUW9AMb.js";import{d as p}from"./index-D9WzwKfJ.js";import{d as m}from"./index-LN5RuzT8.js";import"./feature-detection-CE0UCYUK.js";import"./constants-CCgJ39ZP.js";import"./a11y-utils-BDdgGlMC.js";import"./custom-element-C028faeO.js";import"./utils-XRW8HtJy.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BE-mNjuD.js";import"./async-directive-BgnHwQy-.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Caovf1aY.js";import"./index-DHfuUUiM.js";import"./tooltip-CGlkN96O.js";import"./with-longpress-listener-9zNpMFVf.js";import"./dismissible-stack-KFmmCPeV.js";import"./icon-DfG7xEKj.js";import"./icon-button-CbaSmUOT.js";import"./base-button-adapter-B415vPD3.js";import"./focus-indicator-C3NuoBrz.js";s();p();m();r.define([n,e,a,c,i]);const d="forge-count-card",V={title:"Components/Count Card",component:d,render:()=>t`
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
