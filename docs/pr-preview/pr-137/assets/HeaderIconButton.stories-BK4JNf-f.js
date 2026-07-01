import{x as t}from"./iframe-DY84GSRf.js";import{s as n}from"./decorators-CS-oNxyJ.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-Tl2r-4IA.js";import"./structured-card-BwCV-JWb.js";import{d as p}from"./index-CufxL9Nd.js";import{d as u}from"./index-Dy3cNjOb.js";import{d as g}from"./index-BvExAWeJ.js";import{d as f}from"./index-Do-7Ottf.js";import{d as y}from"./index-DEtYm0Zz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-D98kDqAv.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-RoITrbLe.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CEoRK7e6.js";import"./when-3fO0zp9C.js";import"./lit-utils-CnZXxtpX.js";import"./async-directive-Bh2jcCLL.js";import"./index-CMteLulR.js";import"./base-button-adapter-Ca8PAt1F.js";import"./focus-indicator-B4Vch2QM.js";import"./icon-DCc3zBHq.js";import"./icon-button-CKHcbntS.js";import"./list-dropdown-aware-core-DyDO9SYE.js";import"./linear-progress-constants-p76Xl7g2.js";import"./list-Dhrja6HF.js";import"./popover-CSNBv7VL.js";import"./position-utils-BmD1PIUA.js";import"./with-longpress-listener-DHTwpRzc.js";import"./dismissible-stack-Byk0QYSR.js";import"./skeleton-constants-Bfo-mjyd.js";import"./tooltip-D2bd8WoD.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Z={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const ee=["HeaderIconButton"];export{e as HeaderIconButton,ee as __namedExportsOrder,Z as default};
