import{x as t}from"./iframe-CxQwQddN.js";import{s as n}from"./decorators-CcQvquqg.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-CVu2yw52.js";import"./structured-card-BfB82lSW.js";import{d as p}from"./index-BvsF0Siy.js";import{d as u}from"./index-6c4Ag9Pi.js";import{d as g}from"./index-TkdPUO8k.js";import{d as f}from"./index-DS7qSviI.js";import{d as y}from"./index-2xzvyhDd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-C5QY3EhE.js";import"./constants-C5b45D2K.js";import"./utils-DAqdXIKN.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-y-43vWkH.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-v25MuZ1a.js";import"./when-3fO0zp9C.js";import"./lit-utils-CL8MOWRP.js";import"./async-directive-paHAad09.js";import"./index-BDxGwu8F.js";import"./base-button-adapter-B_nyIIrV.js";import"./focus-indicator-DHnEotdq.js";import"./icon-BDgIgzOI.js";import"./icon-button-CR-K_XB1.js";import"./list-dropdown-aware-core-B06wbuX1.js";import"./linear-progress-constants-OlxOi0-1.js";import"./list-DamYM-9x.js";import"./popover-B4LcEMhA.js";import"./with-longpress-listener-DE3q2kTi.js";import"./dismissible-stack-BeO_Jjma.js";import"./skeleton-constants-BdWfEZYj.js";import"./tooltip-DQRm7PkL.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
