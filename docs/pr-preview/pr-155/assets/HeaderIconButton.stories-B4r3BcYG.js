import{x as t}from"./iframe-B0AtGDgb.js";import{s as n}from"./decorators-BwfRRHRp.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-COcIHYuM.js";import"./structured-card-BQl7CIfV.js";import{d as p}from"./index-D9wBivic.js";import{d as u}from"./index-DPOH3Jf1.js";import{d as g}from"./index-CCtbLpO9.js";import{d as f}from"./index-9-u4eN-q.js";import{d as y}from"./index-DuFe0Xcx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-DA12Qcjc.js";import"./constants-gS8DU6NI.js";import"./utils-CQ1-LirU.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-B8dOviBx.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BWb_KxPt.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cqgx-vau.js";import"./async-directive-DQ2_zMza.js";import"./index-CQflxhl7.js";import"./base-button-adapter-ZAAtK1Ey.js";import"./focus-indicator-B5cqEtEi.js";import"./icon-D_OqDmAk.js";import"./icon-button-DbRGp_sD.js";import"./list-dropdown-aware-core-_IRO9UXl.js";import"./linear-progress-constants-ChVgJ2gq.js";import"./list-QiFvwS9W.js";import"./popover-ur2I9i_i.js";import"./with-longpress-listener-CDNSMlmV.js";import"./dismissible-stack-M_yh7eVE.js";import"./skeleton-constants-BmJqqom9.js";import"./tooltip-BUYI1011.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const oe=["HeaderIconButton"];export{e as HeaderIconButton,oe as __namedExportsOrder,ee as default};
