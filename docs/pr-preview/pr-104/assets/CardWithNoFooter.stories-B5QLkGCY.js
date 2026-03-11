import{x as t}from"./iframe-B0rgvcMd.js";import{s as n}from"./decorators-DYz-y-PS.js";import{I as r,f as a,j as i,a as s,g as d,e as l}from"./with-default-aria-BUhlkTmW.js";import"./structured-card-D3jia-61.js";import{d as c}from"./index-DsQ5XK4e.js";import{d as m}from"./index-OlYWjQus.js";import{d as p}from"./index-DaeAzRCO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CtQmhAAe.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-CINNvP5M.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CO6DW3xH.js";import"./async-directive-BkQirC5F.js";import"./index-DZbgxP8_.js";import"./base-button-adapter-Q-z38xU5.js";import"./list-dropdown-aware-core-BB3nVrna.js";import"./linear-progress-constants-CX4LB-Zl.js";import"./list-EbEdh8pe.js";import"./popover-D-hS1e5_.js";import"./with-longpress-listener-Zplw5zzh.js";import"./dismissible-stack-CVDof81j.js";import"./skeleton-constants-Cn47Ngqq.js";import"./tooltip-mGUfv5eR.js";c();m();p();r.define([a,i,s,d,l]);const u="forge-structured-card",R={title:"Components/Structured Card",component:u,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const V=["CardWithNoFooter"];export{e as CardWithNoFooter,V as __namedExportsOrder,R as default};
