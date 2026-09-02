import{x as t}from"./iframe-BjE-IuEP.js";import{s as n}from"./decorators-DYGFEv9O.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-C0mEQDuz.js";import"./structured-card-Dg3WGW04.js";import{d as p}from"./index-B9OvMKAB.js";import{d as u}from"./index-dXsVakPE.js";import{d as g}from"./index-V5h_WnEl.js";import{d as f}from"./index-7tfsQukT.js";import{d as y}from"./index-DiZ07tv4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CRIYNPs9.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CCdL37ts.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CgomlBE2.js";import"./when-3fO0zp9C.js";import"./lit-utils-CcVjPa8J.js";import"./async-directive-lTSM_AAO.js";import"./index-DbrSAVoz.js";import"./base-button-adapter-CZgVjPHX.js";import"./focus-indicator-D8d7aSmQ.js";import"./icon-Ww3ryr7l.js";import"./icon-button-CrI3QfR_.js";import"./list-dropdown-aware-core-DD369hWO.js";import"./linear-progress-constants-CGAwsFoC.js";import"./list-_5p6RBzw.js";import"./popover-BGRzSqC8.js";import"./with-longpress-listener-CJAmkkZ3.js";import"./dismissible-stack-4jy-EvEg.js";import"./skeleton-constants-CZRE8HQC.js";import"./tooltip-DuxrE-tx.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
