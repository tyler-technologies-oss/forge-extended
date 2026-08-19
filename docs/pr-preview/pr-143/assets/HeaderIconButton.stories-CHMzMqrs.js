import{x as t}from"./iframe-wp6Y4X1Z.js";import{s as n}from"./decorators-DQ67Z-Ls.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-CVqkDYn1.js";import"./structured-card-B3K0tKm8.js";import{d as p}from"./index-CAUfugsS.js";import{d as u}from"./index-Cem7BACe.js";import{d as g}from"./index--CEVxK40.js";import{d as f}from"./index-B47lQk5O.js";import{d as y}from"./index--IXhQmtg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-BWI71vpr.js";import"./constants-Uc3PCJIx.js";import"./a11y-utils-B6dbtuCh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-oYqt1_Oz.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CxoT8_on.js";import"./when-3fO0zp9C.js";import"./lit-utils-2YrF3CdM.js";import"./async-directive-CXaBKyKn.js";import"./index-DtBLHQ2d.js";import"./base-button-adapter-BSoBWcrC.js";import"./focus-indicator-BatZaZei.js";import"./icon-DbBPEUCr.js";import"./icon-button-CaDNzX8P.js";import"./list-dropdown-aware-core-CB9DG7Eo.js";import"./linear-progress-constants-BlCia6st.js";import"./list-Dyk0yipq.js";import"./popover-DuA3f3WJ.js";import"./with-longpress-listener-d_qiRR6E.js";import"./dismissible-stack-bGn6SY0q.js";import"./skeleton-constants-DCAd3ois.js";import"./tooltip-CEnwjWC3.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
