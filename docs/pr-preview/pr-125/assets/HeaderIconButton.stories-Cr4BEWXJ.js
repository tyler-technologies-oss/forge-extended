import{x as t}from"./iframe-CpBRfrzJ.js";import{s as n}from"./decorators-YS-lJ5Px.js";import{I as r,q as a,o as i,n as s,C as m,f as d,h as c,m as l}from"./with-default-aria-CNCzwp3d.js";import"./structured-card-DK8lQNzm.js";import{d as p}from"./index-B6uwA5O0.js";import{d as u}from"./index-CPqxRXg2.js";import{d as f}from"./index-Cv_cvAeD.js";import{d as g}from"./index-95DKEdR3.js";import{d as y}from"./index-D5MzLC53.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-gVnml2HS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DnTDE1Du.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CRjsCpj6.js";import"./when-3fO0zp9C.js";import"./lit-utils-BzwyD-AX.js";import"./async-directive-3bm8YuDq.js";import"./index-2TN2ydWO.js";import"./base-button-adapter-BElXDfEx.js";import"./focus-indicator-BNQconvI.js";import"./icon-C8Wdfnfi.js";import"./icon-button-Ci9JJxnx.js";import"./list-dropdown-aware-core-BqcA0KMQ.js";import"./linear-progress-constants-D0XW2r4i.js";import"./list-CdnnGO3_.js";import"./popover-Dqz_2LnJ.js";import"./with-longpress-listener-DqjEQq5X.js";import"./dismissible-stack-DrWzySwM.js";import"./skeleton-constants-D_Q_KRBQ.js";import"./tooltip-DNkxIzFe.js";p();u();f();g();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
