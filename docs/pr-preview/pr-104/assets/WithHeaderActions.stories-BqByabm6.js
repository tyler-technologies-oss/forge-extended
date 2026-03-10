import{x as t}from"./iframe-tOCS_65c.js";import{s as n}from"./decorators-XFRLIcMf.js";import{I as r,d as a,t as i,f as s,j as d,a as c,g as l,e as m}from"./with-default-aria-neuuPLFN.js";import"./structured-card-ConDlCOb.js";import{d as p}from"./index-BDIdkQnO.js";import{d as u}from"./index-BigR2QxF.js";import{d as g}from"./index-BIe65oR1.js";import{d as f}from"./index-DvvEaEwC.js";import{d as y}from"./index-CtnPPC9L.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-D-PvsXJA.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-A-G8ss4N.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CjQwSKXL.js";import"./when-3fO0zp9C.js";import"./async-directive-WBwhE4z-.js";import"./index-Dcw3G2vr.js";import"./base-button-adapter-ViUGljU0.js";import"./list-dropdown-aware-core-C0wKmBZy.js";import"./linear-progress-constants-CIoePVnw.js";import"./list-a27NTe6S.js";import"./popover-jCCUhnQ4.js";import"./with-longpress-listener-BFBT0FhV.js";import"./dismissible-stack-BS6_lswr.js";import"./skeleton-constants-CXdDga0j.js";import"./tooltip-dCqae8mE.js";p();u();g();f();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",N={title:"Components/Structured Card",component:h,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Q=["WithHeaderActions"];export{e as WithHeaderActions,Q as __namedExportsOrder,N as default};
