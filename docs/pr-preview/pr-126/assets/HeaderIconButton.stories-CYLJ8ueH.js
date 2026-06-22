import{x as t}from"./iframe-BID06n7E.js";import{s as n}from"./decorators-D4L2Ude1.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-BREs-j-N.js";import"./structured-card-BOs80ld9.js";import{d as p}from"./index-CxGmXz6D.js";import{d as u}from"./index-DeiAQ4QI.js";import{d as g}from"./index-2i5Wi6_R.js";import{d as f}from"./index-CNXONB87.js";import{d as y}from"./index-CjSwxtiy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-B3tN-dMS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-hW_n5mGN.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-xw_oOeud.js";import"./when-3fO0zp9C.js";import"./lit-utils-DaTy1hpd.js";import"./async-directive-ZEndwiQE.js";import"./index-RJA0Keow.js";import"./base-button-adapter-5b8XMu03.js";import"./focus-indicator-DyBlokG3.js";import"./icon-CYK8fSKq.js";import"./icon-button-HRYonJzk.js";import"./list-dropdown-aware-core-pfq_6N92.js";import"./linear-progress-constants-BV5J_STX.js";import"./list-jZZXe4tA.js";import"./popover-D7cvF1P4.js";import"./position-utils-DfGP7yHD.js";import"./with-longpress-listener-Baz068-U.js";import"./dismissible-stack-CG-qEoPu.js";import"./skeleton-constants-jGjDr0qC.js";import"./tooltip-Byk3k62C.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Z={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const ee=["HeaderIconButton"];export{e as HeaderIconButton,ee as __namedExportsOrder,Z as default};
