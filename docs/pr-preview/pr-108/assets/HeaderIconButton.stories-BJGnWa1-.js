import{x as t}from"./iframe-CmpYG8UB.js";import{s as n}from"./decorators-a8lqixdP.js";import{I as r,p as a,n as i,m as s,A as m,e as d,g as c,l}from"./with-default-aria-D19lJxx9.js";import"./structured-card-CquuUNCC.js";import{d as p}from"./index-BDvr1x00.js";import{d as u}from"./index-dyXGcnV_.js";import{d as g}from"./index-CsK1mkvm.js";import{d as f}from"./index-CWqODyDi.js";import{d as y}from"./index-L1myGUYJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DihiovMj.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DE9fVmf2.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-ByWmCV5G.js";import"./when-3fO0zp9C.js";import"./lit-utils-DcwCEZxR.js";import"./async-directive-D6X1PGy4.js";import"./index-C_PceBU_.js";import"./base-button-adapter-DX5ysMMI.js";import"./focus-indicator-VXk6Z9Zx.js";import"./icon-DJaeDvr-.js";import"./icon-button-C5oqhYM3.js";import"./list-dropdown-aware-core-wF-D4jxg.js";import"./linear-progress-constants-noT2Q0uk.js";import"./list-COhXsYdm.js";import"./popover-BKKyi2P5.js";import"./with-longpress-listener-OO3QabC0.js";import"./dismissible-stack-BzkaHwIP.js";import"./skeleton-constants-CiBFedv6.js";import"./tooltip-Cu-msO0p.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
