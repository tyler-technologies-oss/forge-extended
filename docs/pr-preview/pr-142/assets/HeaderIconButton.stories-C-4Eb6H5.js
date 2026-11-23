import{x as t}from"./iframe-aIta0XjW.js";import{s as n}from"./decorators-D2VId2oZ.js";import{I as r,p as a,n as i,m as s,P as m,e as d,g as c,l}from"./with-default-aria-B18WzXUc.js";import"./structured-card-3aH3RvdT.js";import{d as p}from"./index-D28XLDrM.js";import{d as u}from"./index-d0_CFtxH.js";import{d as g}from"./index-HhQTP63o.js";import{d as f}from"./index-BFugYcb3.js";import{d as y}from"./index-CLQ_eMfe.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-BI5goMsi.js";import"./constants-C89t2nXh.js";import"./utils-qX0sCc6t.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-nJCrVyER.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DP1HJTSM.js";import"./when-3fO0zp9C.js";import"./lit-utils-yhn8fLQC.js";import"./async-directive-B4pUYcG0.js";import"./index-D37AZnfP.js";import"./base-button-adapter-CZogyW6-.js";import"./focus-indicator-DCygggO6.js";import"./icon-COisYVme.js";import"./icon-button-B6dAQuk5.js";import"./list-dropdown-aware-core-naRdIUSN.js";import"./linear-progress-constants-Di84Ggj_.js";import"./list-BtUAAgAz.js";import"./popover-CVYp0ER-.js";import"./with-longpress-listener-CRVOFTli.js";import"./dismissible-stack-BlFRNdPh.js";import"./skeleton-constants-0CYeGdwF.js";import"./tooltip-a8xk4fMu.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
