import{x as t}from"./iframe-BW_m5cCo.js";import{s as n}from"./decorators-BsFZNwTU.js";import{I as r,f as i,j as a,a as s,g as d,e as l}from"./with-default-aria-DBaLB9kF.js";import"./structured-card-CtJqLjDk.js";import{d as m}from"./index-BnVZr6lo.js";import{d as c}from"./index-DEGxcSF1.js";import{d as p}from"./index-BqAd8sPh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CbeTkNTW.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CxvdJXlt.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DgHSE5Tn.js";import"./when-3fO0zp9C.js";import"./async-directive-D0v1LoxC.js";import"./index-BqFYUwgM.js";import"./base-button-adapter-DiaV7ZXR.js";import"./list-dropdown-aware-core-CQytQJJe.js";import"./linear-progress-constants-Br-kS9HK.js";import"./list-p7QBDxIo.js";import"./popover-CsB3WPl3.js";import"./with-longpress-listener-Bn4rMgw4.js";import"./dismissible-stack-B80liRG6.js";import"./skeleton-constants-ZWqrTz9U.js";import"./tooltip-Cft_v8Um.js";m();c();p();r.define([i,a,s,d,l]);const u="forge-structured-card",V={title:"Components/Structured Card",component:u,decorators:[n(`
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
        </forge-structured-card>
      </div>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const q=["CardWithNoFooter"];export{e as CardWithNoFooter,q as __namedExportsOrder,V as default};
