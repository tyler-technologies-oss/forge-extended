import{x as t}from"./iframe-BQvNP4M8.js";import{s as n}from"./decorators-DR7BoQuS.js";import{I as r,q as a,o as i,n as s,C as m,f as d,h as c,m as l}from"./with-default-aria-BV0tb14g.js";import"./structured-card-BqkvrJXT.js";import{d as p}from"./index-BOzD9efv.js";import{d as u}from"./index-CQOn-3Nq.js";import{d as f}from"./index-D2FhTJht.js";import{d as g}from"./index-BohMcYGV.js";import{d as y}from"./index-CHkvTw8R.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CCcGDftf.js";import"./constants-vdQC6Ta-.js";import"./utils-DlINy0qF.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Dn5BTarG.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BdQ1grer.js";import"./when-3fO0zp9C.js";import"./lit-utils-DMN2dfXf.js";import"./async-directive-CTOhvSPE.js";import"./index-C7XE9NDI.js";import"./base-button-adapter-sdHxCcuI.js";import"./focus-indicator-B8XRN2Qz.js";import"./icon-CWB8ZOKZ.js";import"./icon-button-CY77UBum.js";import"./list-dropdown-aware-core-DU_RKMJO.js";import"./linear-progress-constants-CXnj5Sji.js";import"./list-DL8pH3ud.js";import"./popover-C32PU8bG.js";import"./with-longpress-listener-DlzEWfJP.js";import"./dismissible-stack-2XmwfeXm.js";import"./skeleton-constants-y8qOw96Q.js";import"./tooltip-DPZurtrE.js";p();u();f();g();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
