import{x as t}from"./iframe-CEaEySpr.js";import{s as n}from"./decorators-6IB1iDAo.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-C4n4_au4.js";import"./structured-card-BXLCSo13.js";import{d as p}from"./index-DzZirHD5.js";import{d as u}from"./index-DnaM4FFE.js";import{d as g}from"./index-BTu78JOc.js";import{d as f}from"./index-Ckfon9Zd.js";import{d as y}from"./index-DdFfKbCa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-B0HNckU6.js";import"./constants-CTXNzd9R.js";import"./utils-DtyNcxMd.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-D-c3fhie.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Ea8EU5jv.js";import"./when-3fO0zp9C.js";import"./lit-utils-FwKPFzFF.js";import"./async-directive-CtIWyUPN.js";import"./index-BCcA4Tq5.js";import"./base-button-adapter-jVdNcW1L.js";import"./focus-indicator-DQbw7lnq.js";import"./icon-Conhr7Vm.js";import"./icon-button-DTo5oUvJ.js";import"./list-dropdown-aware-core-BAW28Kbr.js";import"./linear-progress-constants-Caekq9wb.js";import"./list-BL2BLWyr.js";import"./popover-BAVW41HB.js";import"./with-longpress-listener-n-apoziF.js";import"./dismissible-stack-GVLFeEfG.js";import"./skeleton-constants-BytCpobG.js";import"./tooltip-BtWojpAZ.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
