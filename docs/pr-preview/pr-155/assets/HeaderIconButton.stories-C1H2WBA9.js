import{x as t}from"./iframe-C6uLETDu.js";import{s as n}from"./decorators-BW4Ng8Mp.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-qK7n-I_R.js";import"./structured-card-DzEWHTaZ.js";import{d as p}from"./index-BkiBS89O.js";import{d as u}from"./index-mqgXvycp.js";import{d as g}from"./index-BoZp-nHZ.js";import{d as f}from"./index-DffN9Trj.js";import{d as y}from"./index-CX4-JAup.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CwDoUV0x.js";import"./constants-B45z8Rzx.js";import"./utils-CifiO2q4.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DAEvk2iL.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-COJm1GIU.js";import"./when-3fO0zp9C.js";import"./lit-utils-QCR2zngV.js";import"./async-directive-DLnhQJrA.js";import"./index-aoFpfMfe.js";import"./base-button-adapter-CtIMfknO.js";import"./focus-indicator-C5nfhBw6.js";import"./icon-BFh6via-.js";import"./icon-button-DlErWaed.js";import"./list-dropdown-aware-core-DCNexDR9.js";import"./linear-progress-constants-B7pwFXlO.js";import"./list-CGrOvNgn.js";import"./popover-C0TqTFXK.js";import"./with-longpress-listener-BuIkq6Bn.js";import"./dismissible-stack-Dvaai9R7.js";import"./skeleton-constants-BKeDsvUJ.js";import"./tooltip-Vm8r6wFw.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
