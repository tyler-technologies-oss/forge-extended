import{x as t}from"./iframe-BHiuspMz.js";import{s as n}from"./decorators-Cm9aY5zn.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-Dr8txCyU.js";import"./structured-card-CRvBPypy.js";import{d as p}from"./index-DNb12-Nh.js";import{d as u}from"./index-CrIKbSsw.js";import{d as g}from"./index-DeRClaW4.js";import{d as f}from"./index-DfWDXUE2.js";import{d as y}from"./index-C1x-JLZX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CS6H0gzE.js";import"./constants-aKnaKg58.js";import"./utils-CTcdxc71.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BI-pJmnJ.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-J7PEc2fo.js";import"./when-3fO0zp9C.js";import"./lit-utils-CRjWUuMe.js";import"./async-directive-Xn8TSerS.js";import"./index-DQoQlId0.js";import"./base-button-adapter-GlzYkY-X.js";import"./focus-indicator-BLsqjX4f.js";import"./icon-zqjj0lUM.js";import"./icon-button-DjS9SVHO.js";import"./list-dropdown-aware-core-Cs1mVT8-.js";import"./linear-progress-constants-oleZAC3s.js";import"./list-C6rOCZwd.js";import"./popover-Dv9qTCRO.js";import"./with-longpress-listener-zKQBTxwL.js";import"./dismissible-stack-BiKy2JpF.js";import"./skeleton-constants-DN2wYhOu.js";import"./tooltip-MwSLxXkO.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
