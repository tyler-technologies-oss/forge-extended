import{x as t}from"./iframe-BJgCwms7.js";import{s as n}from"./decorators-DEFtzW0f.js";import{I as r,f as i,j as a,a as s,g as d,e as m}from"./with-default-aria-CL4w3eQ3.js";import"./structured-card-By8fvdJm.js";import{d as l}from"./index-DrJxZggi.js";import{d as c}from"./index-CkH_ZBJ2.js";import{d as p}from"./index-DW0sx6rU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-gWaXXiXq.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DHNDUa2W.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CU4dOKdC.js";import"./when-3fO0zp9C.js";import"./async-directive-B8kS1KgH.js";import"./index-BhSLG_zx.js";import"./index-CXI4dD8F.js";import"./base-button-adapter-CmNx4bX-.js";import"./list-dropdown-aware-core-DappvMac.js";import"./linear-progress-constants-ISIRy8Mb.js";import"./list-DXm_0A6W.js";import"./popover-DQZ4nUZO.js";import"./with-longpress-listener-C_GF0JWz.js";import"./dismissible-stack-Div5vy5E.js";import"./skeleton-constants-BdOGWORV.js";import"./tooltip-Cvrqam6L.js";l();c();p();r.define([i,a,s,d,m]);const u="forge-structured-card",q={title:"Components/Structured Card",component:u,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const z=["CardWithNoFooter"];export{e as CardWithNoFooter,z as __namedExportsOrder,q as default};
