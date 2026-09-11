import{x as t}from"./iframe-BMggY0Eq.js";import{s as n}from"./decorators-D63UJ0xr.js";import{I as r,q as a,o as i,n as s,C as m,f as d,h as c,m as l}from"./with-default-aria-NpWy7zUu.js";import"./structured-card-QF1puaCQ.js";import{d as p}from"./index-B1v7lt4m.js";import{d as u}from"./index-DJgm2yXY.js";import{d as f}from"./index-CcueWhpz.js";import{d as g}from"./index-ZHDTHkHl.js";import{d as y}from"./index-5onNpJe-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-FMdYT5yi.js";import"./constants-o7gsy-Mc.js";import"./utils-Ci8BKDzo.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BX9NNbX2.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DAyfz4LZ.js";import"./when-3fO0zp9C.js";import"./lit-utils-CWd9ykg1.js";import"./async-directive-Bkkdsiao.js";import"./index-DQHA1GbE.js";import"./base-button-adapter-CeJFAvB2.js";import"./focus-indicator-CZ8Q_jHJ.js";import"./icon-B7BdjdS-.js";import"./icon-button-TlXi4X8k.js";import"./list-dropdown-aware-core-Df_Yx7SR.js";import"./linear-progress-constants-sP7-VXBx.js";import"./list-D06jlVyk.js";import"./popover-Dv1Ura9R.js";import"./with-longpress-listener-Dn5IepJm.js";import"./dismissible-stack-Bly2SCxr.js";import"./skeleton-constants-DLEQlIIU.js";import"./tooltip-BKYddWnJ.js";p();u();f();g();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
