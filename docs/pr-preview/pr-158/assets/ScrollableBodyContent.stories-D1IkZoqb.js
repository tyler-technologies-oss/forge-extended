import{x as e}from"./iframe-Qh6uGKis.js";import{s as o}from"./decorators-Q9JXFVgn.js";import{I as r,e as n,n as i}from"./with-default-aria-Ci9C3nW2.js";import"./structured-card-CfiqgbZS.js";import{d as a}from"./index-CRKBQg5v.js";import{d as s}from"./index-B-f0Tlpv.js";import{d as m}from"./index-ClVoGirk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-CHSR0lNw.js";import"./constants--Eb-8YTG.js";import"./utils-DV_ZlenX.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BCBS4o1b.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DxzwxjXc.js";import"./when-3fO0zp9C.js";import"./lit-utils-CcR0cCgf.js";import"./async-directive-CdlHa7rQ.js";import"./index-Btcm4i6H.js";import"./base-button-adapter-Byv4vKGr.js";import"./focus-indicator-9UpC3YRD.js";import"./icon-IVNKVlSn.js";import"./icon-button-D_-k_p5i.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
      * {
        box-sizing: border-box;
      }

      .card-container {
        max-width: 360px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>e`
      <div class="card-container">
        <forge-structured-card style="--forge-structured-card-body-height: 200px;">
          <span slot="title">Project Details</span>
          <forge-icon-button aria-label="More actions" slot="after-header-actions">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>
          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const P=["ScrollableBodyContent"];export{t as ScrollableBodyContent,P as __namedExportsOrder,O as default};
