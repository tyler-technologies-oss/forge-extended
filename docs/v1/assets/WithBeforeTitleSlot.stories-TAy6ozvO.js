import{x as e}from"./iframe-BNRzrxvp.js";import{s as o}from"./decorators-Cj6lec-7.js";import{I as r,p as n,n as a,m as i,B as s,e as m,g as c,l as p,d}from"./with-default-aria-CKJa4TQ6.js";import"./structured-card-D49dMoFJ.js";import{d as l}from"./index-_b89N1_M.js";import{d as f}from"./index-D6LEMRuS.js";import{d as u}from"./index-Cfk3cKct.js";import{d as g}from"./index-BUq26AKS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BuEtX1ez.js";import"./constants-ClOpupSA.js";import"./utils-DJdwSxH5.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BV2Dw1zj.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D76I5FTv.js";import"./when-3fO0zp9C.js";import"./lit-utils-BC9rQbmr.js";import"./async-directive-D3BBrAEV.js";import"./index-CcsIs4V7.js";import"./base-button-adapter-VZYV8pMZ.js";import"./focus-indicator-CfBV9G0k.js";import"./icon-C6I8EL-q.js";import"./icon-button-DrEAubop.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",F={title:"Components/Structured Card",component:y,decorators:[o(`
      .actions-card-container {
        max-width: 600px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>e`
      <div class="actions-card-container">
        <forge-structured-card heading-level="2">
          <forge-icon-button aria-label="Back" slot="before-title">
            <forge-icon name="arrow_back"></forge-icon>
          </forge-icon-button>
          <span slot="title">Project Details</span>
          <div slot="body" class="card-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <forge-button variant="text" slot="footer-secondary-action">
            <forge-icon slot="start" name="delete"></forge-icon>
            Cancel
          </forge-button>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const G=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,G as __namedExportsOrder,F as default};
