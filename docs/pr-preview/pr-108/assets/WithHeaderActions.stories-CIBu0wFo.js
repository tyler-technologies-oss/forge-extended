import{x as t}from"./iframe-DwMgCYtb.js";import{s as n}from"./decorators-m6SO4lg7.js";import{I as r,p as a,n as i,m as s,A as d,e as m,g as c,l}from"./with-default-aria-CfDmXVrN.js";import"./structured-card-DmcbwF3V.js";import{d as p}from"./index-B6Lj0VmS.js";import{d as u}from"./index-BcDQlmui.js";import{d as g}from"./index-ejc1wpxF.js";import{d as f}from"./index-bFeyiobf.js";import{d as y}from"./index-D0ij77G6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DwvutvYf.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BO8v6kK4.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BNlEXA4r.js";import"./when-3fO0zp9C.js";import"./lit-utils-Dtck85ND.js";import"./async-directive-DIhw622m.js";import"./index-Ca5FURsm.js";import"./base-button-adapter-mogBfOAi.js";import"./focus-indicator-DiukMVQo.js";import"./icon-DoJXhL7p.js";import"./list-dropdown-aware-core-BonT3z6l.js";import"./linear-progress-constants-D_HycEkg.js";import"./list-BOutDYRr.js";import"./popover-DwonYCL9.js";import"./with-longpress-listener-BwNJhBSA.js";import"./dismissible-stack-siMKySCy.js";import"./skeleton-constants-BFB-SZew.js";import"./tooltip-C8esL34X.js";p();u();g();f();y();r.define([a,i,s,d,m,c,l]);const h="forge-structured-card",X={title:"Components/Structured Card",component:h,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Y=["WithHeaderActions"];export{e as WithHeaderActions,Y as __namedExportsOrder,X as default};
