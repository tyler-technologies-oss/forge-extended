import{x as e}from"./iframe-Qh6uGKis.js";import{s as t}from"./decorators-Q9JXFVgn.js";import{I as r,n,e as a,d as i}from"./with-default-aria-Ci9C3nW2.js";import"./content-scaffold-DxzwxjXc.js";import"./structured-card-CfiqgbZS.js";import{d as s}from"./index-CQpNJDfN.js";import{d as m}from"./index-CRKBQg5v.js";import{d as p}from"./index-B-f0Tlpv.js";import{d}from"./index-ClVoGirk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-CHSR0lNw.js";import"./constants--Eb-8YTG.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CcR0cCgf.js";import"./async-directive-CdlHa7rQ.js";import"./directive-CJw_OlP2.js";import"./utils-DV_ZlenX.js";import"./class-map-BCBS4o1b.js";import"./index-Btcm4i6H.js";import"./toolbar-bpanSRZk.js";import"./base-button-adapter-Byv4vKGr.js";import"./focus-indicator-9UpC3YRD.js";import"./icon-IVNKVlSn.js";import"./icon-button-D_-k_p5i.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
      body {
        height: 100dvh;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #fafafa;
      }
      
      p {
        padding: 0;
        margin: 0;
      }

      #storybook-root,
      #root-inner {
        height: 100%;
      }
    `)],render:()=>e`
      <forge-content-scaffold>
        <forge-icon-button aria-label="Back" slot="before-header-start">
          <forge-icon name="arrow_back"></forge-icon>
        </forge-icon-button>
        <h2 slot="header-start" class="forge-typography--heading4">Project Details</h2>
        <forge-icon-button aria-label="More actions" slot="header-end">
          <forge-icon name="more_vert"></forge-icon>
        </forge-icon-button>
        <div slot="body">
          <forge-card>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </forge-card>
        </div>
        <forge-button variant="filled" slot="footer-end">
          <forge-icon slot="start" name="save"></forge-icon>
          Save
        </forge-button>
      </forge-content-scaffold>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const V=["FullPage"];export{o as FullPage,V as __namedExportsOrder,T as default};
