import{x as t}from"./iframe-DyfqOSFq.js";import{s as n}from"./decorators-B6szFfUV.js";import{I as r,p as i,n as a,j as s,A as m,k as d,m as c,i as l}from"./base-lit-element-leRID3-N.js";import"./structured-card-BO5lQD9Q.js";import{d as p}from"./index-DrHQjKF_.js";import{d as u}from"./index-DKeBkJvV.js";import{d as g}from"./index-BSvV2XHR.js";import{d as f}from"./index-BU8gyMeb.js";import{d as y}from"./index-tccQUbXm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BK4Zzzz7.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Ci33CiEv.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CB9XiAzj.js";import"./when-3fO0zp9C.js";import"./lit-utils-B44VXt5K.js";import"./async-directive-yge4yuT-.js";import"./index-sMgF6BIz.js";import"./base-button-adapter-BGKztrSH.js";import"./with-default-aria-CZFCDsee.js";import"./a11y-utils-BfYtZAlg.js";import"./icon-J58JRLFr.js";import"./list-dropdown-aware-core-DVx1ooJ9.js";import"./linear-progress-constants-EhcGLknv.js";import"./list-B8SgKtFP.js";import"./popover-Dcu9JvEZ.js";import"./with-longpress-listener-BS6nt5RX.js";import"./dismissible-stack-BfFaG_w-.js";import"./skeleton-constants-DUrCw8dv.js";import"./tooltip-B_vMNiA4.js";p();u();g();f();y();r.define([i,a,s,m,d,c,l]);const h="forge-structured-card",Y={title:"Components/Structured Card",component:h,decorators:[n(`
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
          <forge-menu slot="header-actions" .options=${[{label:"Edit",value:"edit",leadingIcon:"edit",leadingIconType:"component"},{label:"Share",value:"share",leadingIcon:"share",leadingIconType:"component"},{label:"Download",value:"download",leadingIcon:"download",leadingIconType:"component"},{label:"Delete",value:"delete",leadingIcon:"delete",leadingIconType:"component"}]} @forge-menu-select=${o=>{console.log("Menu option selected:",o.detail)}}>
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["WithHeaderActions"];export{e as WithHeaderActions,Z as __namedExportsOrder,Y as default};
