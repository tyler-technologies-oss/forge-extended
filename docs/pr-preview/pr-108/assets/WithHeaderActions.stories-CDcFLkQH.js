import{x as t}from"./iframe-Bc1gK1D2.js";import{s as n}from"./decorators-B7Y3VDUB.js";import{I as r,p as a,n as i,m as s,A as d,e as m,g as c,l}from"./with-default-aria-DKBtCCS8.js";import"./structured-card-Pj8XuCtm.js";import{d as p}from"./index-BY6OoCBE.js";import{d as u}from"./index-DeunrSu9.js";import{d as g}from"./index-DzKHyiTq.js";import{d as f}from"./index-BnVq9kER.js";import{d as y}from"./index-DBWWZhSB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-C0oGLkIs.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-OtRBhPR7.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Dg-aQzLJ.js";import"./when-3fO0zp9C.js";import"./lit-utils-CGLJKfT8.js";import"./async-directive-BmRd90c7.js";import"./index-BhqZv3Ez.js";import"./base-button-adapter-LtjZ8eTY.js";import"./focus-indicator-CZ9tP9Vs.js";import"./icon-CR3saOZG.js";import"./list-dropdown-aware-core-CgsM0wa3.js";import"./linear-progress-constants-eXbPP9yr.js";import"./list-ld9TErgS.js";import"./popover-BjSvx2gC.js";import"./with-longpress-listener-DGK38dOB.js";import"./dismissible-stack-BXIOuyD2.js";import"./skeleton-constants-xE4Sx7tb.js";import"./tooltip-cGcMZM0Q.js";p();u();g();f();y();r.define([a,i,s,d,m,c,l]);const h="forge-structured-card",X={title:"Components/Structured Card",component:h,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Y=["WithHeaderActions"];export{e as WithHeaderActions,Y as __namedExportsOrder,X as default};
