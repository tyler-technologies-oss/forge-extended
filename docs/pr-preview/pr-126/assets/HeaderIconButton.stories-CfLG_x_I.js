import{x as t}from"./iframe-BMmxjS7K.js";import{s as n}from"./decorators-CR9RZ1DV.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-DUm9cFDb.js";import"./structured-card-CZyz745l.js";import{d as p}from"./index-CmABe4zC.js";import{d as u}from"./index-CuaVTp8w.js";import{d as g}from"./index-CH4_EQDb.js";import{d as f}from"./index-1PYaxWHl.js";import{d as y}from"./index-BAIeuXSc.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DxKBK66z.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CNMADvTA.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-yFm0t9et.js";import"./when-3fO0zp9C.js";import"./lit-utils-vFe5Fey2.js";import"./async-directive-C8AHgdeZ.js";import"./index-CvgiCefo.js";import"./base-button-adapter-DVfHKjLr.js";import"./focus-indicator-BZurIPmT.js";import"./icon-DHP83XnC.js";import"./icon-button-B-lwPuxH.js";import"./list-dropdown-aware-core-W9Dp6JBL.js";import"./linear-progress-constants-CdId7nyJ.js";import"./list-CcBQKVC4.js";import"./popover-CbV6AHdo.js";import"./position-utils-Dg6KB9wi.js";import"./with-longpress-listener-ZBxJ2PG2.js";import"./dismissible-stack-BP6jnQvR.js";import"./skeleton-constants-BQoiQmIz.js";import"./tooltip-CX1jV9vj.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Z={title:"Components/Structured Card",component:I,decorators:[n(`
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
