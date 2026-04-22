import{x as t}from"./iframe-BvnLkDOK.js";import{s as n}from"./decorators-BJE7UAOv.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-y-32z6A_.js";import"./structured-card-ukm54vnU.js";import{d as p}from"./index-BtmWCw-J.js";import{d as u}from"./index-7VHYH-Jx.js";import{d as g}from"./index-BTX5vJi5.js";import{d as f}from"./index-9YAjE-gd.js";import{d as y}from"./index-DYnTcu58.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-kTHrmdCT.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CPXrpwa3.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CH17ylxq.js";import"./when-3fO0zp9C.js";import"./lit-utils-2hRzsoI_.js";import"./async-directive-Bhjl9_g_.js";import"./index-Dxv-koxG.js";import"./base-button-adapter-g1RwZUjD.js";import"./focus-indicator-DL0sKKHm.js";import"./icon-B2kwpamn.js";import"./icon-button-DmmTK0rA.js";import"./list-dropdown-aware-core-CDUTk67e.js";import"./linear-progress-constants-C462IbpD.js";import"./list-C589_Yxf.js";import"./popover-SffOaZUO.js";import"./with-longpress-listener-DWuZ0OGt.js";import"./dismissible-stack-BAILyQq7.js";import"./skeleton-constants-Bg6tF1yR.js";import"./tooltip-BDE0IBXy.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
