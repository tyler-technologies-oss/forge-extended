import{x as t}from"./iframe-BHE_MK2N.js";import{s as n}from"./decorators-BjNdz_J2.js";import{I as r,f as i,j as a,a as s,g as d,e as m}from"./with-default-aria-BHUCmVN4.js";import"./structured-card-qTr7X0um.js";import{d as l}from"./index-DkCtin9j.js";import{d as c}from"./index-IW50H0RU.js";import{d as p}from"./index-Ce3hm6z0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BhXE-oDH.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-GkhfMalX.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Fu_gbUZO.js";import"./when-3fO0zp9C.js";import"./async-directive-Cjyzb09r.js";import"./index-CNH7jrBs.js";import"./index-Cqw9y5Xb.js";import"./base-button-adapter-By0Le-ke.js";import"./list-dropdown-aware-core-aXOqmBbE.js";import"./linear-progress-constants-DqjGfKXO.js";import"./list-Bt5GHEZQ.js";import"./popover-Da4tPStV.js";import"./with-longpress-listener-LgK9IZf7.js";import"./dismissible-stack-QmoG41yS.js";import"./skeleton-constants-CY2J-uoS.js";import"./tooltip-9-0I3Zpf.js";l();c();p();r.define([i,a,s,d,m]);const u="forge-structured-card",q={title:"Components/Structured Card",component:u,decorators:[n(`
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
