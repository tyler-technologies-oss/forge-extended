import{x as t}from"./iframe-DB7khuar.js";import{s as n}from"./decorators-UG1vF1ly.js";import{I as r,d as a,t as i,f as s,j as d,a as c,g as l,e as m}from"./with-default-aria-DgzfDd8k.js";import"./structured-card-CkyEsAk_.js";import{d as p}from"./index-Ca38EChD.js";import{d as u}from"./index-RO2oMO-W.js";import{d as g}from"./index-6Sip5Tjo.js";import{d as f}from"./index-4G7udB7h.js";import{d as y}from"./index-0747GUEQ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BMWnaSmQ.js";import"./style-map-BvuDHFBf.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-yFt3Bvs6.js";import"./when-3fO0zp9C.js";import"./async-directive-DqBYNgnJ.js";import"./index-DhCrqmz7.js";import"./index-C5QB_oV8.js";import"./base-button-adapter-C-uPU8dd.js";import"./list-dropdown-aware-core-BRo_LFnX.js";import"./linear-progress-constants-CY85v_hl.js";import"./list-8KuYcnc1.js";import"./popover-BIxd14mu.js";import"./with-longpress-listener-BjkQTcWc.js";import"./dismissible-stack-DeFK8Kbz.js";import"./skeleton-constants-n_uuRaNC.js";import"./tooltip-D5Dwqa-r.js";p();u();g();f();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",K={title:"Components/Structured Card",component:h,decorators:[n(`
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
