import{x as t}from"./iframe-DM3VcRwQ.js";import{s as n}from"./decorators-BtzLxqDu.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-CbDiNaj6.js";import"./structured-card-BT99xFt5.js";import{d as p}from"./index-C0RNhWWv.js";import{d as u}from"./index-DM33Awa1.js";import{d as g}from"./index-DVLPIiIV.js";import{d as f}from"./index-CXgxHjGk.js";import{d as y}from"./index-BLkHpTFT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C99DI8oj.js";import"./constants-Cw5Hg5LI.js";import"./utils-DqrUBr-j.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BDJ7d3Iq.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CXRTOdxN.js";import"./when-3fO0zp9C.js";import"./lit-utils-CbD2rxyi.js";import"./async-directive-BE11uONG.js";import"./index-CUl2HWD5.js";import"./base-button-adapter-BWBlIri0.js";import"./focus-indicator-DIMQ33ld.js";import"./icon-CIVAmTYB.js";import"./icon-button-0QZ5U7ki.js";import"./list-dropdown-aware-core-DxcfIjmG.js";import"./linear-progress-constants-Dn8ec4-A.js";import"./list-DYtkBbRD.js";import"./popover-BStDwZZG.js";import"./with-longpress-listener-Hv5cQ4AQ.js";import"./dismissible-stack-COhslb2o.js";import"./skeleton-constants-DZ7X_Zn4.js";import"./tooltip-CElvEOvC.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
