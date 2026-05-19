import{x as t}from"./iframe-1dcdlrZB.js";import{s as n}from"./decorators-CM0gvY1i.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-CV78iXDo.js";import"./structured-card-D0mjUNgB.js";import{d as p}from"./index-C1wyvNNH.js";import{d as u}from"./index-DG168QC-.js";import{d as g}from"./index-Pwb0Rn0e.js";import{d as f}from"./index-sDRgf7DX.js";import{d as y}from"./index-CdR9ScdD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CRBXf694.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Bs9SlVcM.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-C62WyhHV.js";import"./when-3fO0zp9C.js";import"./lit-utils-BcnBu-T5.js";import"./async-directive-BB26Ng_H.js";import"./index-B6kOa7HJ.js";import"./base-button-adapter-jab__om5.js";import"./focus-indicator-CVN0kG-m.js";import"./icon-DZQJbqqs.js";import"./icon-button-DE3JhtkL.js";import"./list-dropdown-aware-core-LtyXznqV.js";import"./linear-progress-constants-D2htPlNf.js";import"./list-DMwHu_Nc.js";import"./popover-CSICA1Vn.js";import"./with-longpress-listener-Cd8SlU9A.js";import"./dismissible-stack-B4_d_Qwd.js";import"./skeleton-constants-Di_7XvUW.js";import"./tooltip-D3AGXHhf.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
