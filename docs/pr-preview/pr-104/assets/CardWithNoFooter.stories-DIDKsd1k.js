import{x as t}from"./iframe-B3gZ3oFh.js";import{s as n}from"./decorators-BR9xhnCs.js";import{I as r,f as i,j as a,a as s,g as d,e as l}from"./with-default-aria-8W6OebjG.js";import"./structured-card-CqGeT56q.js";import{d as m}from"./index-vqvgwLx9.js";import{d as c}from"./index-y8qBiPSR.js";import{d as p}from"./index-qMA_u40J.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DKJckIIi.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CNSrAlmG.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D49A_AiZ.js";import"./when-3fO0zp9C.js";import"./async-directive-CZOyWRwl.js";import"./index-_sBZfrH2.js";import"./base-button-adapter-A_AS9Ok9.js";import"./list-dropdown-aware-core-CaHcmA3e.js";import"./linear-progress-constants-eX-n7kZr.js";import"./list-DGvK65VO.js";import"./popover-BE8ofYnd.js";import"./with-longpress-listener-BKZaPZ6b.js";import"./dismissible-stack-BkroU71o.js";import"./skeleton-constants-B4TeotcN.js";import"./tooltip-CFquBHrF.js";m();c();p();r.define([i,a,s,d,l]);const u="forge-structured-card",V={title:"Components/Structured Card",component:u,decorators:[n(`
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
