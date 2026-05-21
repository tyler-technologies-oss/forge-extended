import{x as t}from"./iframe-GrTRO8L1.js";import{s as n}from"./decorators-DJ7vnBOj.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-CAYkoqVR.js";import"./structured-card-BI0LI0QG.js";import{d as p}from"./index-C8SR9MVk.js";import{d as u}from"./index-BWwdvYCc.js";import{d as g}from"./index-CZHUx46f.js";import{d as f}from"./index-yTC2G2LX.js";import{d as y}from"./index-BAKiMXer.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DGCB8oWA.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DYGP3HQW.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DUrSKShD.js";import"./when-3fO0zp9C.js";import"./lit-utils-CFhwIMsU.js";import"./async-directive-wEvzFno2.js";import"./index-DStYB2pB.js";import"./base-button-adapter-BKm9wL5-.js";import"./focus-indicator-CxrxGy1T.js";import"./icon-jmlsD8Z8.js";import"./icon-button-BvdXsyIG.js";import"./list-dropdown-aware-core-C_uEUrTC.js";import"./linear-progress-constants-TR9EyRWD.js";import"./list-3RtIrHcL.js";import"./popover-Am-zAE31.js";import"./with-longpress-listener-72ALMor3.js";import"./dismissible-stack--a8Vtlke.js";import"./skeleton-constants-BC0s8iFT.js";import"./tooltip-C37glYKj.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["HeaderIconButton"];export{e as HeaderIconButton,Z as __namedExportsOrder,Y as default};
