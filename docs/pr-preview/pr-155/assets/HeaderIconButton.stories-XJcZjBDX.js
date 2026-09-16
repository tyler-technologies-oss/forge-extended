import{x as t}from"./iframe-Dms13Zq_.js";import{s as n}from"./decorators-CvzrAun6.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-DIEogLWd.js";import"./structured-card-LD1Pi9li.js";import{d as p}from"./index-BVWKZWHV.js";import{d as u}from"./index-DABgc_rx.js";import{d as g}from"./index-CHjFsM_0.js";import{d as f}from"./index-BLC_4Dgh.js";import{d as y}from"./index-Qaod93hV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-_XMhrF5O.js";import"./constants-VXsM_ZgY.js";import"./utils-CKW-Y7iA.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-B_T3H8Jb.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BlhSwhPs.js";import"./when-3fO0zp9C.js";import"./lit-utils-DjheCZrT.js";import"./async-directive-D4vy_6ok.js";import"./index-C6Gd5NcK.js";import"./base-button-adapter-DV_yZ0yv.js";import"./focus-indicator-B-JnphJ-.js";import"./icon-DOY4ZfAJ.js";import"./icon-button-DP_Lk4AN.js";import"./list-dropdown-aware-core-BePoxm6n.js";import"./linear-progress-constants-BqJ0ARvk.js";import"./list-BsiMgXyj.js";import"./popover-DHNCHrQ2.js";import"./with-longpress-listener-YWKEXeKL.js";import"./dismissible-stack-BBpZ5CI_.js";import"./skeleton-constants-DgbBpjMr.js";import"./tooltip-CZHplz9r.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
