import{x as t}from"./iframe-D_NpdGMW.js";import{s as n}from"./decorators-BGtlJFC5.js";import{I as r,q as a,o as i,n as s,C as m,f as d,h as c,m as l}from"./with-default-aria-QQHkHnUD.js";import"./structured-card-Dm2Fy9jW.js";import{d as p}from"./index-cQL53Ya2.js";import{d as u}from"./index-DZYfwwJc.js";import{d as f}from"./index-D1Q40_o8.js";import{d as g}from"./index-CRuLIxMQ.js";import{d as y}from"./index-C7e5CFZ9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CyYN7QVE.js";import"./constants-B5g2L9LN.js";import"./utils-Duph8ic8.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-pH4tyynp.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-B20VKqCn.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQdM5MP4.js";import"./async-directive-CI_QSR1Q.js";import"./index-q9xROInv.js";import"./base-button-adapter-BO3BfEkZ.js";import"./focus-indicator-DP9wjAbI.js";import"./button-constants-0Bfcv2FI.js";import"./icon-Dd_9Vvpg.js";import"./icon-button-4GgzV-1p.js";import"./list-dropdown-aware-core-BD33dnOX.js";import"./linear-progress-constants-C0luehvm.js";import"./list-GS8h1t_U.js";import"./popover-Xht5KpYt.js";import"./with-longpress-listener-dfgopyNX.js";import"./dismissible-stack-BlfoJVVW.js";import"./skeleton-constants-BxIJ0k3n.js";import"./tooltip-9D2XTgYD.js";p();u();f();g();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",oe={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const te=["HeaderIconButton"];export{e as HeaderIconButton,te as __namedExportsOrder,oe as default};
