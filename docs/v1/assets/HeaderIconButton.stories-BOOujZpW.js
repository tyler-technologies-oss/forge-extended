import{x as t}from"./iframe-DJZ_Mhdn.js";import{s as n}from"./decorators-DGNRYNou.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-BF8b74LB.js";import"./structured-card-rpsPlFhQ.js";import{d as p}from"./index-CV7Ac1pk.js";import{d as u}from"./index-CFkkeAfN.js";import{d as g}from"./index-VFdSlEYS.js";import{d as f}from"./index-DyefCN9J.js";import{d as y}from"./index-wdUecVP9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-zoTee3dw.js";import"./constants-DU7YENlu.js";import"./a11y-utils-BdEYBLk0.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-5ViRLiBk.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-B_1dm7y5.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bv0lYt6h.js";import"./async-directive-87g-kMN-.js";import"./index-B0ZBKArx.js";import"./base-button-adapter-JTDHV01r.js";import"./focus-indicator-CUZ9-AXC.js";import"./icon-Cj5Dx5Vx.js";import"./icon-button-eFRgNG73.js";import"./list-dropdown-aware-core-GJzKEQPe.js";import"./linear-progress-constants-CoGL8QjI.js";import"./list-avqJ0u8M.js";import"./popover-BoGZH0XV.js";import"./with-longpress-listener-DROXINLL.js";import"./dismissible-stack-DLVlKvqQ.js";import"./skeleton-constants-Bx7Sz_Nh.js";import"./tooltip-BLUVMeWv.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
