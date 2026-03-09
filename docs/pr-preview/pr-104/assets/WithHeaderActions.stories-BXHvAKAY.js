import{x as t}from"./iframe-CVNQnw_n.js";import{s as n}from"./decorators-Df9cRaVj.js";import{I as r,c as a,t as i,e as s,i as d,a as c,f as l,d as m}from"./with-default-aria-YnUymmup.js";import"./structured-card-BCFh8FOD.js";import{d as p}from"./index-OcvsHiQW.js";import{d as u}from"./index-B1lUAh7d.js";import{d as f}from"./index-BKePeJ-r.js";import{d as g}from"./index-DC5z13AS.js";import{d as y}from"./index-shD0SyI7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CT4hc6nY.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-DGF6iGYy.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-C3Wo-2y8.js";import"./index-BFGvebPf.js";import"./index-gex9ljS6.js";import"./base-button-adapter-DpRT1I6F.js";import"./list-dropdown-aware-core-CVRFwoUb.js";import"./linear-progress-constants-1g4hXK_X.js";import"./list-BHr-W1ZY.js";import"./popover-DCd-rQqo.js";import"./with-longpress-listener-BF8o-vni.js";import"./dismissible-stack-CTIDD9LU.js";import"./skeleton-constants-DQe2qQ0w.js";import"./tooltip-CCuaDwjC.js";p();u();f();g();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",K={title:"Components/Structured Card",component:h,decorators:[n(`
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
