import{x as t}from"./iframe-Bmpo7mK4.js";import{s as n}from"./decorators-D1xcKosb.js";import{I as r,d as a,t as i,f as s,j as d,a as c,g as l,e as m}from"./with-default-aria-CqHJAmJ_.js";import"./structured-card-COxCKnW9.js";import{d as p}from"./index-BwGY1Jp9.js";import{d as u}from"./index-DW5czcRD.js";import{d as g}from"./index-DPgfpJZF.js";import{d as f}from"./index-BakkqaDo.js";import{d as y}from"./index-DEmuYXEO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DWkFozGy.js";import"./style-map-F9UlsvX2.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CeiNuTct.js";import"./when-3fO0zp9C.js";import"./async-directive-a_IyjKek.js";import"./index-BinP8Lry.js";import"./index-BJPpmeSU.js";import"./base-button-adapter-A8-Yu6iA.js";import"./list-dropdown-aware-core-DGY5Q-rr.js";import"./linear-progress-constants-B1Nw5llz.js";import"./list-DJPP6oMQ.js";import"./popover-QffRQ1-M.js";import"./with-longpress-listener-DO6A1saC.js";import"./dismissible-stack-XioNhfYM.js";import"./skeleton-constants-3OTTJm1s.js";import"./tooltip-B2oAtwak.js";p();u();g();f();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",K={title:"Components/Structured Card",component:h,decorators:[n(`
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
