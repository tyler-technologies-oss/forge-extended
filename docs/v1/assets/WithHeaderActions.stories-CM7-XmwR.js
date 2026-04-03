import{x as t}from"./iframe-BKVmTI1Z.js";import{s as n}from"./decorators-BJSnXr1H.js";import{I as r,h as a,d as i,j as s,o as d,e as c,k as l,i as m}from"./with-default-aria-BJogXISp.js";import"./structured-card-B9ploB8r.js";import{d as p}from"./index-DxctuT6B.js";import{d as u}from"./index-CKH2P456.js";import{d as g}from"./index-BWDpmwP5.js";import{d as f}from"./index-CnZzeaEA.js";import{d as y}from"./index-DeuvWIo0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-sl9xqBt4.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-CXd_Hm1l.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DXjJ--2c.js";import"./async-directive-BCWsHmit.js";import"./index-DU2XGcmM.js";import"./base-button-adapter-DfHIstSL.js";import"./list-dropdown-aware-core-CI473WC_.js";import"./linear-progress-constants-B39KDbyD.js";import"./list-DOtW54yk.js";import"./popover-BUlLOusG.js";import"./with-longpress-listener-C6g1GfWo.js";import"./dismissible-stack-CayrFjmg.js";import"./skeleton-constants-DOazu93z.js";import"./tooltip-jyiLRhv3.js";p();u();g();f();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",K={title:"Components/Structured Card",component:h,decorators:[n(`
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
