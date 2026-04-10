import{x as t}from"./iframe-BniGYPBV.js";import{s as n}from"./decorators-CEfk8PRB.js";import{I as r,p as a,n as i,m as s,A as m,e as d,g as c,l}from"./with-default-aria-DjjkLSOz.js";import"./structured-card-DJf6klst.js";import{d as p}from"./index-B0N8ydzv.js";import{d as u}from"./index-FY2TsAFj.js";import{d as g}from"./index-BQEN9SHQ.js";import{d as f}from"./index-CPm3EWHl.js";import{d as y}from"./index-DrVCVhiD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-5XJGMMD5.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-8Vpw1Umm.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CjHsvWhe.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cr8r3BZZ.js";import"./async-directive-CBsEWWjp.js";import"./index-BXUMO6Jc.js";import"./base-button-adapter-DbUntQM0.js";import"./focus-indicator-I8n0c5ll.js";import"./icon-CNY5uVgv.js";import"./icon-button-jUFwl3_A.js";import"./list-dropdown-aware-core--Qwn9mys.js";import"./linear-progress-constants-tpm1N5q-.js";import"./list-DKLIRG1F.js";import"./popover-CpJPmu0X.js";import"./with-longpress-listener-Dg0ZDqmN.js";import"./dismissible-stack-6IllbWia.js";import"./skeleton-constants-BiGM6-fT.js";import"./tooltip-DCQpeXi0.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["HeaderIconButton"];export{e as HeaderIconButton,Z as __namedExportsOrder,Y as default};
