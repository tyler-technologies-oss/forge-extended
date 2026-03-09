import{x as t}from"./iframe-Dxb2KeVZ.js";import{s as n}from"./decorators-4q0M2Mqa.js";import{I as r,c as a,t as i,e as s,i as d,a as c,f as l,d as m}from"./with-default-aria-Pzw_Jr5V.js";import"./structured-card-B94--HPc.js";import{d as p}from"./index-CzVWnncg.js";import{d as u}from"./index-DKqaCjLN.js";import{d as f}from"./index-DUHbrLBU.js";import{d as g}from"./index-DcxoRaoc.js";import{d as y}from"./index-B1lLZYWE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BPpq6bMv.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-CPfkXDCp.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CteIJTDU.js";import"./index-BQChMZbL.js";import"./index-B_qmEqKH.js";import"./base-button-adapter-EaVvvjOq.js";import"./list-dropdown-aware-core-Bq5lcuSa.js";import"./linear-progress-constants-B0ljMIsv.js";import"./list-9G1D_fUJ.js";import"./popover-BVcdjoKh.js";import"./with-longpress-listener-DPOUe2mJ.js";import"./dismissible-stack-Cnw1O-q1.js";import"./skeleton-constants-D2sUC9gL.js";import"./tooltip-Dh5PLOPC.js";p();u();f();g();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",K={title:"Components/Structured Card",component:h,decorators:[n(`
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
