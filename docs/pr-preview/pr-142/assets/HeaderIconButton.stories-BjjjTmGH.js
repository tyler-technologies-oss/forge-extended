import{x as t}from"./iframe-PAcmqUG6.js";import{s as n}from"./decorators-BO-g6OUX.js";import{I as r,p as a,n as i,m as s,P as m,e as d,g as c,l}from"./with-default-aria-C94a9uFn.js";import"./structured-card-DWUKFSsW.js";import{d as p}from"./index-_OO7FmJl.js";import{d as u}from"./index-Drzkv_8K.js";import{d as g}from"./index-B3t8z8gC.js";import{d as f}from"./index-DBM5c7bP.js";import{d as y}from"./index-vAvOdD-J.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-BOdxSeCd.js";import"./constants-CJiu0c9M.js";import"./a11y-utils-H-OyiifR.js";import"./custom-element-C028faeO.js";import"./utils-C5cUnwQo.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DzN9jdVO.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DWSwjSgG.js";import"./when-3fO0zp9C.js";import"./lit-utils-BklS-4kJ.js";import"./async-directive-CgiLW7ik.js";import"./index-CXEOG6x9.js";import"./base-button-adapter-K6HIUfEq.js";import"./focus-indicator-BgHurxD4.js";import"./icon-Cqpt27RA.js";import"./icon-button-C7FqYiw7.js";import"./list-dropdown-aware-core-C8Uj9n3H.js";import"./linear-progress-constants-CVSa3tmn.js";import"./list-Btq4RUTN.js";import"./popover-kMqW_B6Y.js";import"./with-longpress-listener-CnolrIXH.js";import"./dismissible-stack-Mo_Nexm6.js";import"./skeleton-constants-D3tLTSWs.js";import"./tooltip-BxzjC1nD.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",te={title:"Components/Structured Card",component:I,decorators:[n(`
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
          <forge-menu slot="after-header-actions" .options=${[{label:"Edit",value:"edit",leadingIcon:"edit",leadingIconType:"component"},{label:"Share",value:"share",leadingIcon:"share",leadingIconType:"component"},{label:"Download",value:"download",leadingIcon:"download",leadingIconType:"component"},{label:"Delete",value:"delete",leadingIcon:"delete",leadingIconType:"component"}]} @forge-menu-select=${o=>{console.log("Menu option selected:",o.detail)}}>
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const ne=["HeaderIconButton"];export{e as HeaderIconButton,ne as __namedExportsOrder,te as default};
