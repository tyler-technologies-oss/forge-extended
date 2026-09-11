import{x as t}from"./iframe-BKxBIIJQ.js";import{s as n}from"./decorators-CiAOTrg1.js";import{I as r,q as a,o as i,n as s,C as m,f as d,h as c,m as l}from"./with-default-aria-DjItAXX6.js";import"./structured-card-Dw-wAYym.js";import{d as p}from"./index-CBKvSyMs.js";import{d as u}from"./index-DVopLR72.js";import{d as f}from"./index-0JZT0dcO.js";import{d as g}from"./index-BWb4NUA4.js";import{d as y}from"./index-CqqeFtKj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BldoUTPl.js";import"./constants-aeBb4lYV.js";import"./utils-B42KGafL.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BNDdSF1T.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-7A7AwKK6.js";import"./when-3fO0zp9C.js";import"./lit-utils-D3GzrXFC.js";import"./async-directive-CnrapT-E.js";import"./index-BaUYnTlJ.js";import"./base-button-adapter-B1QGS9Um.js";import"./focus-indicator-evqk8lHd.js";import"./button-constants-D3zZPESn.js";import"./icon-CGdxk2in.js";import"./icon-button-DNvrWAkH.js";import"./list-dropdown-aware-core-ODUd_dV0.js";import"./linear-progress-constants-D_6jO8mF.js";import"./list-Ddtt4Jaf.js";import"./popover-BB3pmc-g.js";import"./with-longpress-listener-VROGiMiY.js";import"./dismissible-stack-DkTmbPfG.js";import"./skeleton-constants-2T5bCXss.js";import"./tooltip-C_fHynxG.js";p();u();f();g();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",oe={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const te=["HeaderIconButton"];export{e as HeaderIconButton,te as __namedExportsOrder,oe as default};
