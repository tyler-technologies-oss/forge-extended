import{x as t}from"./iframe-DvDuhlM-.js";import{s as n}from"./decorators-Cw2USgMK.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria--CksfNP1.js";import"./structured-card-Dh26G-3T.js";import{d as p}from"./index-B2hTHfe_.js";import{d as u}from"./index-CXZthq9t.js";import{d as g}from"./index-CYL5SFS8.js";import{d as f}from"./index-CYxPCT3s.js";import{d as y}from"./index-DsS0nc5t.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-Cf761MSM.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-5joOAaK_.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-B3T2Oj4h.js";import"./when-3fO0zp9C.js";import"./lit-utils-NleCEBoB.js";import"./async-directive-DByh7Oed.js";import"./index-pLevWjsw.js";import"./base-button-adapter-DenfhebP.js";import"./focus-indicator-CVJjMnDe.js";import"./icon-aaQwuLul.js";import"./icon-button-DVhuGFH4.js";import"./list-dropdown-aware-core-DbL3_nOQ.js";import"./linear-progress-constants-CMvnV1ZT.js";import"./list-BZSpsEtr.js";import"./popover-D2xdBQrw.js";import"./with-longpress-listener-B89tIIbF.js";import"./dismissible-stack-Csm1NLzW.js";import"./skeleton-constants-BcNSHoZ2.js";import"./tooltip-BqJ7-MUg.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
