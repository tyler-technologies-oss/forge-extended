import{x as t}from"./iframe-DgM_YBnP.js";import{s as n}from"./decorators-IuwOfT-s.js";import{I as r,c as a,t as i,e as s,i as d,a as c,f as l,d as m}from"./with-default-aria-DtsBzZO1.js";import"./structured-card-D68VIq55.js";import{d as p}from"./index-DzCDnRYk.js";import{d as u}from"./index-TLX34D2h.js";import{d as f}from"./index-dhkt5BEK.js";import{d as g}from"./index-wN5A_3uO.js";import{d as y}from"./index-CiGAiN60.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CWbR4eAd.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-DVhbbNmU.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CbamNx1q.js";import"./index-BxWU0voc.js";import"./index-CzU3xEkc.js";import"./base-button-adapter-CKXlJ5O5.js";import"./list-dropdown-aware-core-jOanyD3H.js";import"./linear-progress-constants-v5Wr_WrA.js";import"./list-edJCLIdU.js";import"./popover-Chw9NT3_.js";import"./with-longpress-listener-COLePBh0.js";import"./dismissible-stack-C6iDpq_p.js";import"./skeleton-constants-DXDWSROO.js";import"./tooltip-Cr_sGlMX.js";p();u();f();g();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",K={title:"Components/Structured Card",component:h,decorators:[n(`
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
