import{x as t}from"./iframe-tSrdq99I.js";import{s as n}from"./decorators-Be_BwGSL.js";import{I as r,q as a,o as i,n as s,C as m,f as d,h as c,m as l}from"./with-default-aria-Cjw09Hyt.js";import"./structured-card-DS1evckj.js";import{d as p}from"./index-DgOFm9rI.js";import{d as u}from"./index-BvK_xeaI.js";import{d as f}from"./index-DUD4nVta.js";import{d as g}from"./index-Cxdg2s-E.js";import{d as y}from"./index-B-43NA9w.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-Cg4oYBYF.js";import"./constants-DEDYFPik.js";import"./utils-BuNvph6x.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CTBWGCQU.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BxTyVT-B.js";import"./when-3fO0zp9C.js";import"./lit-utils-C9gaqnGj.js";import"./async-directive-BwzQrKcK.js";import"./index-DxuUp4FF.js";import"./base-button-adapter-BUXivA6l.js";import"./focus-indicator-DCA67l5Z.js";import"./button-constants-C8sFYYY3.js";import"./icon-xRFOyXu1.js";import"./icon-button-CPvX5qA1.js";import"./list-dropdown-aware-core-DnX_nJmP.js";import"./linear-progress-constants-BGY00k5Y.js";import"./list-CkvIqOPB.js";import"./popover-DbbcMMsL.js";import"./with-longpress-listener-DCkSJ2mx.js";import"./dismissible-stack-DyydnwZ9.js";import"./skeleton-constants-BEUUO9S0.js";import"./tooltip-D7GcPVGW.js";p();u();f();g();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",oe={title:"Components/Structured Card",component:I,decorators:[n(`
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
