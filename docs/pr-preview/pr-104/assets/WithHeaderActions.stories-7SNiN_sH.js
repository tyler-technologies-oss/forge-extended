import{x as t}from"./iframe-D_POcHjj.js";import{s as n}from"./decorators-COuIY4ic.js";import{I as r,p as a,n as i,j as s,u as d,k as c,m as l,i as m}from"./with-default-aria-DnjTbB4-.js";import"./structured-card-Q5wGCxWp.js";import{d as p}from"./index-D0uvl9CW.js";import{d as u}from"./index-DEKwVHY_.js";import{d as g}from"./index-D-KYdbbS.js";import{d as f}from"./index-DvP5Pa3w.js";import{d as y}from"./index-D68TWgNl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-FyE-gVIc.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-BZgL6Tl5.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-C918g_cV.js";import"./async-directive-zoLoyHwM.js";import"./index-BNnW_AEv.js";import"./base-button-adapter-aJYPmLgL.js";import"./list-dropdown-aware-core-CEFz1fdS.js";import"./linear-progress-constants-V0bMqBU4.js";import"./list-BeHDCq1B.js";import"./popover-DS-__P2h.js";import"./with-longpress-listener-Clpkl2tF.js";import"./dismissible-stack-CpVuYVOm.js";import"./skeleton-constants-DqDhApOu.js";import"./tooltip-D2tQ0vOB.js";p();u();g();f();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",K={title:"Components/Structured Card",component:h,decorators:[n(`
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
