import{x as t}from"./iframe-Cdub68sG.js";import{s as n}from"./decorators-B3rQJDfz.js";import{I as r,p as i,n as a,j as s,A as m,k as d,m as c,i as l}from"./base-lit-element-Dvqq96TE.js";import"./structured-card-C7rSo9uL.js";import{d as p}from"./index-BdqCOSPS.js";import{d as u}from"./index-ChKzpunO.js";import{d as g}from"./index-CfOkB06a.js";import{d as f}from"./index-DRtXrPjV.js";import{d as y}from"./index-FU_2li4r.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DgOXzPoc.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CnkXNtxA.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-HGbODzIU.js";import"./when-3fO0zp9C.js";import"./lit-utils-BUazNZie.js";import"./async-directive-ClRcxluw.js";import"./index-Cm61bmp4.js";import"./base-button-adapter-BTEWft6w.js";import"./with-default-aria-GYIwOTw2.js";import"./a11y-utils-3T20ILqt.js";import"./icon-CvzxXqxi.js";import"./list-dropdown-aware-core-aB0-BX8W.js";import"./linear-progress-constants-C_2BZ04B.js";import"./list-D-KS_517.js";import"./popover-DHi7SQ_-.js";import"./with-longpress-listener-DsIhSFSn.js";import"./dismissible-stack-BEWy4iBp.js";import"./skeleton-constants-DHj7p7Ja.js";import"./tooltip-DQjis345.js";p();u();g();f();y();r.define([i,a,s,m,d,c,l]);const h="forge-structured-card",Y={title:"Components/Structured Card",component:h,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["WithHeaderActions"];export{e as WithHeaderActions,Z as __namedExportsOrder,Y as default};
