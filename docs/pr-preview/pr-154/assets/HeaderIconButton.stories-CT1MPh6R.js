import{x as t}from"./iframe-BF-eadiO.js";import{s as n}from"./decorators-BfoY5jdu.js";import{I as r,q as a,o as i,n as s,C as m,f as d,h as c,m as l}from"./with-default-aria-C9Cpz9fo.js";import"./structured-card-Dhajx7DP.js";import{d as p}from"./index-lWkxKqp0.js";import{d as u}from"./index-Bf9budZ-.js";import{d as f}from"./index-BXjDdWpl.js";import{d as g}from"./index-eoPtNyLh.js";import{d as y}from"./index-h52c34fn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C71I-6m3.js";import"./constants-BoaaRiLs.js";import"./utils-BfbFTmRC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-D_T65IvU.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BSQYp9l0.js";import"./when-3fO0zp9C.js";import"./lit-utils-BHvSaoDW.js";import"./async-directive-Bduev6Sc.js";import"./index-CV3Mr06h.js";import"./base-button-adapter-DoZYG0eo.js";import"./focus-indicator-D-YpIZ-n.js";import"./icon-CQn9_tFD.js";import"./icon-button-DqObqSUj.js";import"./list-dropdown-aware-core-DnBWHYp6.js";import"./linear-progress-constants-BB5TDrBM.js";import"./list-BB3ktmOI.js";import"./popover-CcQ25Hi3.js";import"./with-longpress-listener-BYdzOJl2.js";import"./dismissible-stack-DjoGjvdr.js";import"./skeleton-constants-BjWOtiy4.js";import"./tooltip-DjNUajub.js";p();u();f();g();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
