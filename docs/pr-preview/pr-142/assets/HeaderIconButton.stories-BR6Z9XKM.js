import{x as t}from"./iframe-CRRWsFO6.js";import{s as n}from"./decorators-BOUt-MKA.js";import{I as r,p as a,n as i,m as s,P as m,e as d,g as c,l}from"./with-default-aria-Bcp56cC_.js";import"./structured-card-uaMeLF9N.js";import{d as p}from"./index-DUUZrg5-.js";import{d as u}from"./index-CsscYSZa.js";import{d as g}from"./index-DbgnvWAV.js";import{d as f}from"./index-vItx2O37.js";import{d as y}from"./index-CyOHxw4l.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-DORgUmeG.js";import"./constants-DF-bkflD.js";import"./a11y-utils-Dg0RZKx4.js";import"./custom-element-C028faeO.js";import"./utils-DW1uEvJt.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-a-EV7ysE.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-COWRcNLn.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQS22zAF.js";import"./async-directive-BAPHCo-g.js";import"./index-cp2xh2wR.js";import"./base-button-adapter-BW-SKBtx.js";import"./focus-indicator-CbeWKEVM.js";import"./icon-wTiQ3Xju.js";import"./icon-button-D_MzAVsy.js";import"./list-dropdown-aware-core-CLZAaL_A.js";import"./linear-progress-constants-DOGUMLcH.js";import"./list-D7Ee6tbM.js";import"./popover-LzDRV1YJ.js";import"./with-longpress-listener-Cr6rroE_.js";import"./dismissible-stack-_LOSF9TE.js";import"./skeleton-constants-C17eiZbD.js";import"./tooltip-CeNfZGwP.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",te={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const ne=["HeaderIconButton"];export{e as HeaderIconButton,ne as __namedExportsOrder,te as default};
