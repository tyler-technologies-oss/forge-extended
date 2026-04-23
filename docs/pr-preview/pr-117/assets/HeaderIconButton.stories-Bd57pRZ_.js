import{x as t}from"./iframe-CZPu-D1U.js";import{s as n}from"./decorators-B7YqewMU.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-D7KCfSzQ.js";import"./structured-card-NyaD42IH.js";import{d as p}from"./index-BSBCPjw-.js";import{d as u}from"./index-CIsPNzPZ.js";import{d as g}from"./index-c3BtHen4.js";import{d as f}from"./index-Cqs-qQR2.js";import{d as y}from"./index-DfqG8tfa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-pmch7zZ6.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BS-KI3zP.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BQ3dL5bG.js";import"./when-3fO0zp9C.js";import"./lit-utils-CsQHwhwS.js";import"./async-directive-ptfc4q4E.js";import"./index-LYHbP_0-.js";import"./base-button-adapter-BluJsu7j.js";import"./focus-indicator-Du80mSZE.js";import"./icon-Co630ox_.js";import"./icon-button-CBAAmoKT.js";import"./list-dropdown-aware-core-C2wStSQk.js";import"./linear-progress-constants-DzK6QW-6.js";import"./list-3E5lO_PM.js";import"./popover-B7NrNTqN.js";import"./with-longpress-listener-CmUuuU2G.js";import"./dismissible-stack-I1LEvZq_.js";import"./skeleton-constants-B-iUoIrb.js";import"./tooltip-DaOb7y6z.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
