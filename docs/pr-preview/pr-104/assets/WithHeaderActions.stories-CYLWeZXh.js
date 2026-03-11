import{x as t}from"./iframe-BalPjLB1.js";import{s as n}from"./decorators-BOsrHm3p.js";import{I as r,d as a,t as i,f as s,j as d,a as c,g as l,e as m}from"./with-default-aria-CgGVtW00.js";import"./structured-card-BvG3HOy4.js";import{d as p}from"./index-BptDatkp.js";import{d as u}from"./index-X2uJkQIO.js";import{d as g}from"./index-kk4BV0dI.js";import{d as f}from"./index-DU1Uca0X.js";import{d as y}from"./index-ytUfYw-W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DrpErmGl.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-mLaARIl1.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CTIbYiXK.js";import"./async-directive-9-HjHcYf.js";import"./index-NqreQ29v.js";import"./base-button-adapter-DLO7aBOX.js";import"./list-dropdown-aware-core-DCxaD-ga.js";import"./linear-progress-constants-DZ8ksEjx.js";import"./list-CKAuIEiS.js";import"./popover-BDsUKBi5.js";import"./with-longpress-listener-DtUx7B94.js";import"./dismissible-stack-Cfgp7kp2.js";import"./skeleton-constants-Cj3miX8f.js";import"./tooltip-BcnJC-kf.js";p();u();g();f();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",K={title:"Components/Structured Card",component:h,decorators:[n(`
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
