import{x as t}from"./iframe-CyKFM1XH.js";import{s as n}from"./decorators-BL1MTQ1U.js";import{I as r,p as a,n as i,j as s,u as d,k as c,m as l,i as m}from"./with-default-aria-q5L4000K.js";import"./structured-card-D7-ZbROX.js";import{d as p}from"./index-CrhPJV9V.js";import{d as u}from"./index-COmbQx8m.js";import{d as g}from"./index-BkIcSNvq.js";import{d as f}from"./index-Vne_ZgQ5.js";import{d as y}from"./index-2dEyxW_m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CoeSD5x0.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-BLhxKV3w.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Cfj7ltFl.js";import"./async-directive-BReZcScp.js";import"./index-BQ8vrbpF.js";import"./base-button-adapter-DIsL5Hld.js";import"./list-dropdown-aware-core-D-ejpB_e.js";import"./linear-progress-constants-BqIa_EAW.js";import"./list-h4SICi7V.js";import"./popover-RFzBsl9Y.js";import"./with-longpress-listener-CwoZSoQh.js";import"./dismissible-stack-DpRGEdLZ.js";import"./skeleton-constants-Da0oEJD1.js";import"./tooltip-DqMQSZ20.js";p();u();g();f();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",K={title:"Components/Structured Card",component:h,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const N=["WithHeaderActions"];export{e as WithHeaderActions,N as __namedExportsOrder,K as default};
