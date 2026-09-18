import{x as e}from"./iframe-Qh6uGKis.js";import{s as o}from"./decorators-Q9JXFVgn.js";import{I as r,p as n,n as a,m as i,B as s,e as m,g as c,l as p,d}from"./with-default-aria-Ci9C3nW2.js";import"./structured-card-CfiqgbZS.js";import{d as l}from"./index-CRKBQg5v.js";import{d as f}from"./index-B-f0Tlpv.js";import{d as u}from"./index-ClVoGirk.js";import{d as g}from"./index-COgV_mKb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-CHSR0lNw.js";import"./constants--Eb-8YTG.js";import"./utils-DV_ZlenX.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BCBS4o1b.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DxzwxjXc.js";import"./when-3fO0zp9C.js";import"./lit-utils-CcR0cCgf.js";import"./async-directive-CdlHa7rQ.js";import"./index-Btcm4i6H.js";import"./base-button-adapter-Byv4vKGr.js";import"./focus-indicator-9UpC3YRD.js";import"./icon-IVNKVlSn.js";import"./icon-button-D_-k_p5i.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",F={title:"Components/Structured Card",component:y,decorators:[o(`
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
