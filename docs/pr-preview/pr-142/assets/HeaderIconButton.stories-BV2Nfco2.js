import{x as t}from"./iframe-BZR3avPy.js";import{s as n}from"./decorators-Btj57eUi.js";import{I as r,p as a,n as i,m as s,P as m,e as d,g as c,l}from"./with-default-aria-DrGQh3rA.js";import"./structured-card-CBV2m1K1.js";import{d as p}from"./index-CCo5mcVb.js";import{d as u}from"./index-DSF_ghjH.js";import{d as g}from"./index-HGkRbmOl.js";import{d as f}from"./index-B90u7Vzf.js";import{d as y}from"./index-fAASf5uX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-V1xjMoTa.js";import"./constants-Dczm6517.js";import"./a11y-utils-B2lvl91r.js";import"./custom-element-C028faeO.js";import"./utils-BeUVm7TG.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CBmZDkCE.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BiY-VgIw.js";import"./when-3fO0zp9C.js";import"./lit-utils-B7mGwFLc.js";import"./async-directive-CduYbs5w.js";import"./index-BxeetAA7.js";import"./base-button-adapter-BBLLx2xC.js";import"./focus-indicator-BBF39Pup.js";import"./icon-CAC4534v.js";import"./icon-button-DD2_Bu8d.js";import"./list-dropdown-aware-core-Q_ZMTdaU.js";import"./linear-progress-constants-fVTKB38b.js";import"./list-BwTq-bh5.js";import"./popover-BEPu-OAd.js";import"./with-longpress-listener-CZMXxJ4U.js";import"./dismissible-stack-BIXwkq1T.js";import"./skeleton-constants-j2RNU9wn.js";import"./tooltip-B2OhOsWS.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",te={title:"Components/Structured Card",component:I,decorators:[n(`
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
