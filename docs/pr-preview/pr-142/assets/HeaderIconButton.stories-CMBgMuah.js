import{x as t}from"./iframe-BONfeRbS.js";import{s as n}from"./decorators-CF2_DgP2.js";import{I as r,p as a,n as i,m as s,P as m,e as d,g as c,l}from"./with-default-aria-BX23kPsM.js";import"./structured-card-Cbzr-2-W.js";import{d as p}from"./index-DkaTdWA1.js";import{d as u}from"./index-UGwEVcKj.js";import{d as g}from"./index-BbuEY8TC.js";import{d as f}from"./index-EiVw4x8X.js";import{d as y}from"./index-nUOA6XBt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-BdDPgXkM.js";import"./constants-DnUFLkc1.js";import"./a11y-utils-CPysxFLW.js";import"./custom-element-C028faeO.js";import"./utils-D9p4bUJ4.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DP5Wz34w.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BEx6HTWz.js";import"./when-3fO0zp9C.js";import"./lit-utils-DJLuWaYS.js";import"./async-directive-CTteLgwZ.js";import"./index-DQWtLKbM.js";import"./base-button-adapter-DnYus6sP.js";import"./focus-indicator-COKKqZBY.js";import"./icon-C7xslxSO.js";import"./icon-button-OYsEtGQk.js";import"./list-dropdown-aware-core-D_MHrbwG.js";import"./linear-progress-constants-DoVvRo8z.js";import"./list-Y9tu5Xli.js";import"./popover-Dh6hBsmc.js";import"./with-longpress-listener-BBjmO5EP.js";import"./dismissible-stack--RH1Fewv.js";import"./skeleton-constants-DEC06Pfa.js";import"./tooltip-BOfBYoiw.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",te={title:"Components/Structured Card",component:I,decorators:[n(`
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
