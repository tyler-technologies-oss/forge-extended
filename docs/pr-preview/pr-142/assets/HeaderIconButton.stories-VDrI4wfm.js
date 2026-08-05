import{x as t}from"./iframe-ULyB_0Dy.js";import{s as n}from"./decorators-CKHwrViY.js";import{I as r,p as a,n as i,m as s,P as m,e as d,g as c,l}from"./with-default-aria-CpHhlmZ0.js";import"./structured-card-B8p37Ihy.js";import{d as p}from"./index-CWnIIei3.js";import{d as u}from"./index-D9WzwKfJ.js";import{d as g}from"./index-CkUW9AMb.js";import{d as f}from"./index-CCyGOxVT.js";import{d as y}from"./index-DkIyAlzx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-CE0UCYUK.js";import"./constants-CCgJ39ZP.js";import"./a11y-utils-BDdgGlMC.js";import"./custom-element-C028faeO.js";import"./utils-XRW8HtJy.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BEBg8r6d.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CO77zMEz.js";import"./when-3fO0zp9C.js";import"./lit-utils-BE-mNjuD.js";import"./async-directive-BgnHwQy-.js";import"./index-Caovf1aY.js";import"./base-button-adapter-B415vPD3.js";import"./focus-indicator-C3NuoBrz.js";import"./icon-DfG7xEKj.js";import"./icon-button-CbaSmUOT.js";import"./list-dropdown-aware-core-BZ90VYQ8.js";import"./linear-progress-constants-BG-kZHI7.js";import"./list-BGVMCl5V.js";import"./popover-D69UUhih.js";import"./with-longpress-listener-9zNpMFVf.js";import"./dismissible-stack-KFmmCPeV.js";import"./skeleton-constants-DMyiwnQS.js";import"./tooltip-CGlkN96O.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",te={title:"Components/Structured Card",component:I,decorators:[n(`
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
