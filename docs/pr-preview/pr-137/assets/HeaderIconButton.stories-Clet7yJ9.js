import{x as t}from"./iframe-BJ_QdE3d.js";import{s as n}from"./decorators-Dkn3s0I4.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-COFgV0Us.js";import"./structured-card-CA3EDAWY.js";import{d as p}from"./index-D0oKLaWU.js";import{d as u}from"./index-BucxSjNl.js";import{d as g}from"./index-CYGJhcJZ.js";import{d as f}from"./index-idXmuvn-.js";import{d as y}from"./index-S0TA8W-N.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CXrUjLap.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-9P7OYce-.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DhF0Baaf.js";import"./when-3fO0zp9C.js";import"./lit-utils-DYLvGOzX.js";import"./async-directive-Ci_UA772.js";import"./index-Dh1WI3Jb.js";import"./base-button-adapter-Dfkg-xXC.js";import"./focus-indicator-jrKRuM4L.js";import"./icon-BnTKu5AW.js";import"./icon-button-BMyexPuL.js";import"./list-dropdown-aware-core-zjCPPACv.js";import"./linear-progress-constants-DFCi8GHE.js";import"./list-BO8GHU2n.js";import"./popover-CVuRzcxI.js";import"./position-utils-CyX4xxp3.js";import"./with-longpress-listener-CzoXCZwA.js";import"./dismissible-stack-C5oeQ0jE.js";import"./skeleton-constants-CzY_4Sx_.js";import"./tooltip-DyIgac-l.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Z={title:"Components/Structured Card",component:I,decorators:[n(`
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
