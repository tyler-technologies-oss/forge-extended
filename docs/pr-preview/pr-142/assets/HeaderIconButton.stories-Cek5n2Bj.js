import{x as t}from"./iframe-BgG1mILm.js";import{s as n}from"./decorators-CGtwCCji.js";import{I as r,p as a,n as i,m as s,P as m,e as d,g as c,l}from"./with-default-aria-DhKreie1.js";import"./structured-card-DqTFIYN0.js";import{d as p}from"./index-DH-EBj3W.js";import{d as u}from"./index-CKj6teuh.js";import{d as g}from"./index-IpHzfxDW.js";import{d as f}from"./index-Cfi1VOKA.js";import{d as y}from"./index-p3jc0kAl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-4yZjZMA_.js";import"./constants-D4w8ERcy.js";import"./a11y-utils-Bqf6nmLH.js";import"./custom-element-C028faeO.js";import"./utils-BrQSBAEO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-nSt2BsDm.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CZmYL34l.js";import"./when-3fO0zp9C.js";import"./lit-utils-CbFCRKzL.js";import"./async-directive-C8qPSgQz.js";import"./index-Brr_ru3-.js";import"./base-button-adapter-DJylsVrC.js";import"./focus-indicator-CvBVFsiv.js";import"./icon-DUW7oXzz.js";import"./icon-button-CVlniPs4.js";import"./list-dropdown-aware-core-DmDBQh6d.js";import"./linear-progress-constants-CZ8wiKdh.js";import"./list-EettIpcm.js";import"./popover-sLGswWmg.js";import"./with-longpress-listener-CWO8YKN7.js";import"./dismissible-stack-eDOO1x_W.js";import"./skeleton-constants-CxoxBVL1.js";import"./tooltip-DWgfTi28.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",te={title:"Components/Structured Card",component:I,decorators:[n(`
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
