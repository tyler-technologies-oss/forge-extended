import{x as t}from"./iframe-CB6BRAcV.js";import{s as n}from"./decorators-CCVIysQL.js";import{I as r,p as a,n as i,j as s,u as d,k as c,m as l,i as m}from"./with-default-aria-id6T8pUN.js";import"./structured-card-DVLkkgTN.js";import{d as p}from"./index-SzOPYOJ6.js";import{d as u}from"./index-i_H-Ej6E.js";import{d as g}from"./index-DhU1IAg9.js";import{d as f}from"./index-DsGuzGnU.js";import{d as y}from"./index-DEZHJI4e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-Bc0BYJiE.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-BwxMQtMH.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CDTqyRdS.js";import"./async-directive-DYKuR3nN.js";import"./index-SHHR4MWo.js";import"./base-button-adapter-BNNiu4hP.js";import"./list-dropdown-aware-core-Qsl_QI4x.js";import"./linear-progress-constants-qCn_V5d1.js";import"./list-DuqAtbX3.js";import"./popover-WbZOSFIA.js";import"./with-longpress-listener-ChS9yqG0.js";import"./dismissible-stack-Dm4Ojmcw.js";import"./skeleton-constants-BtQ0FkNG.js";import"./tooltip-ha3Pr2yi.js";p();u();g();f();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",K={title:"Components/Structured Card",component:h,decorators:[n(`
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
