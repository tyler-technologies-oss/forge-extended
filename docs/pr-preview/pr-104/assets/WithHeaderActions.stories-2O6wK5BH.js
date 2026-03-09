import{x as t}from"./iframe-Bh2WAvr8.js";import{s as n}from"./decorators-CBGj8ob2.js";import{I as r,d as a,t as i,f as s,j as d,a as c,g as l,e as m}from"./with-default-aria-DOpCHJ_z.js";import"./structured-card-BbizcReJ.js";import{d as p}from"./index-CXZibWz-.js";import{d as u}from"./index-cCGc-5LU.js";import{d as g}from"./index-D7CiFxdb.js";import{d as f}from"./index-BmYgX8Jw.js";import{d as y}from"./index-DKul-HUv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CwqiNehv.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-C9sFmGpb.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CyQjSei4.js";import"./when-3fO0zp9C.js";import"./async-directive-raK5qyB5.js";import"./index-gUmn8spR.js";import"./index-B3aNJ3qy.js";import"./base-button-adapter-DeeekiZj.js";import"./list-dropdown-aware-core-DhpLPTs4.js";import"./linear-progress-constants-CY3ZmsTz.js";import"./list-kRPT8MPw.js";import"./popover-CHThUh0F.js";import"./with-longpress-listener-DsZ3a19P.js";import"./dismissible-stack-CzeyyJHo.js";import"./skeleton-constants-2IcnLE2V.js";import"./tooltip-DA22pwE5.js";p();u();g();f();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",Q={title:"Components/Structured Card",component:h,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const U=["WithHeaderActions"];export{e as WithHeaderActions,U as __namedExportsOrder,Q as default};
