import{x as t}from"./iframe-uYmMtFXe.js";import{s as n}from"./decorators-CdDnjmZ2.js";import{I as r,q as a,o as i,n as s,C as m,f as d,h as c,m as l}from"./with-default-aria-Ajc3U0-g.js";import"./structured-card-AfuOk_JJ.js";import{d as p}from"./index-BAQeSDAv.js";import{d as u}from"./index-Dav54a0r.js";import{d as f}from"./index-DY8pP0a5.js";import{d as g}from"./index-D5h3PDOK.js";import{d as y}from"./index-CRPDCMdI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-RnAbd9qQ.js";import"./constants-CpZXP-xH.js";import"./utils-tJtJfoaq.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-kcMyfuC-.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-C31Bz0lK.js";import"./when-3fO0zp9C.js";import"./lit-utils-CpuDE9B8.js";import"./async-directive-DqvxUZro.js";import"./index-D1VuADBN.js";import"./base-button-adapter-81PK7MPV.js";import"./focus-indicator-nFJ3EteD.js";import"./button-constants-BspY-3bl.js";import"./icon-D3Ok13p2.js";import"./icon-button-DbCPLHsE.js";import"./list-dropdown-aware-core-CPh5XRX1.js";import"./linear-progress-constants-Dz-MRBIH.js";import"./list-CbfRLLJl.js";import"./popover-DWJoAGkp.js";import"./with-longpress-listener-DRadE3GR.js";import"./dismissible-stack-BvYLNEYj.js";import"./skeleton-constants-Dsvlu_GE.js";import"./tooltip-D3av5xGC.js";p();u();f();g();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",oe={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const te=["HeaderIconButton"];export{e as HeaderIconButton,te as __namedExportsOrder,oe as default};
