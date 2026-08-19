import{x as t}from"./iframe-Divla-Cp.js";import{s as n}from"./decorators-HdD8mzBe.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-BEs3GmpT.js";import"./structured-card-DAukMNtH.js";import{d as p}from"./index-CrpGlOxL.js";import{d as u}from"./index-r3sRvHmc.js";import{d as g}from"./index-B9d_yM6M.js";import{d as f}from"./index-Dn8OEefT.js";import{d as y}from"./index-ZS20Axz8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-D-5lT58i.js";import"./constants-DkN7ZGiS.js";import"./a11y-utils-BCt-Wh9D.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DifFCkIf.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CY4HPLmX.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bi1B8CZI.js";import"./async-directive-D1XEcX9j.js";import"./index-DDtCiOcM.js";import"./base-button-adapter-uhdylO1A.js";import"./focus-indicator-CDDzSaVo.js";import"./icon-C6Jpggai.js";import"./icon-button-CTYCVtl8.js";import"./list-dropdown-aware-core-DeBgxIvc.js";import"./linear-progress-constants-IvNJ2lcy.js";import"./list-CW12Vp-6.js";import"./popover-BijGC2rA.js";import"./with-longpress-listener-D8tPz6R8.js";import"./dismissible-stack-DyjlOaHM.js";import"./skeleton-constants-9zF4Smu6.js";import"./tooltip-DlREf1Hp.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
