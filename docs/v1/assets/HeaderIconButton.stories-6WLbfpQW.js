import{x as t}from"./iframe-Qh6uGKis.js";import{s as n}from"./decorators-Q9JXFVgn.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-Ci9C3nW2.js";import"./structured-card-CfiqgbZS.js";import{d as p}from"./index-CRKBQg5v.js";import{d as u}from"./index-B-f0Tlpv.js";import{d as g}from"./index-ClVoGirk.js";import{d as f}from"./index-DnN-RVHK.js";import{d as y}from"./index-COgV_mKb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-CHSR0lNw.js";import"./constants--Eb-8YTG.js";import"./utils-DV_ZlenX.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BCBS4o1b.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DxzwxjXc.js";import"./when-3fO0zp9C.js";import"./lit-utils-CcR0cCgf.js";import"./async-directive-CdlHa7rQ.js";import"./index-Btcm4i6H.js";import"./base-button-adapter-Byv4vKGr.js";import"./focus-indicator-9UpC3YRD.js";import"./icon-IVNKVlSn.js";import"./icon-button-D_-k_p5i.js";import"./list-dropdown-aware-core-DJXh3euF.js";import"./linear-progress-constants-DvyBCsCJ.js";import"./list-BWthdhg-.js";import"./popover-Co-ScF0z.js";import"./with-longpress-listener-CCdYr4S9.js";import"./dismissible-stack-BTasuI1h.js";import"./skeleton-constants-BAkejsfE.js";import"./tooltip-Dk5G-x2P.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
      .actions-card-container {
        max-width: 600px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>t`
      <div class="actions-card-container">
        <forge-structured-card heading-level="2">
          <div slot="title">Project Details</div>
          <forge-menu slot="after-header-actions" .options=${[{label:"Edit",value:"edit",leadingIcon:"edit",leadingIconType:"component"},{label:"Share",value:"share",leadingIcon:"share",leadingIconType:"component"},{label:"Download",value:"download",leadingIcon:"download",leadingIconType:"component"},{label:"Delete",value:"delete",leadingIcon:"delete",leadingIconType:"component"}]} @forge-menu-select=${o=>{console.log("Menu option selected:",o.detail)}}>
            <forge-icon-button aria-label="More actions">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
          </forge-menu>

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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const oe=["HeaderIconButton"];export{e as HeaderIconButton,oe as __namedExportsOrder,ee as default};
