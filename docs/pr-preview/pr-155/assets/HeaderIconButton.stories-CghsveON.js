import{x as t}from"./iframe-CUmtllDg.js";import{s as n}from"./decorators-CsVrvnvb.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-sX8zJ_2t.js";import"./structured-card-DjcXOB7Y.js";import{d as p}from"./index-BqzDyQ2H.js";import{d as u}from"./index-CGaJoAh_.js";import{d as g}from"./index-DPhamwrd.js";import{d as f}from"./index-DEAnuKYv.js";import{d as y}from"./index-CL41bM25.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-2Mrb3U_x.js";import"./constants-DTntG4X6.js";import"./utils-CNfRvMhc.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-7F1FW_MX.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BzICSKmu.js";import"./when-3fO0zp9C.js";import"./lit-utils-DFQytTxg.js";import"./async-directive-B9BDXmta.js";import"./index-Cahstr3s.js";import"./base-button-adapter-BgBVsM7d.js";import"./focus-indicator-fO4DkNkz.js";import"./icon-BoaZPg9x.js";import"./icon-button-BERNpzaX.js";import"./list-dropdown-aware-core-C7lslI6Q.js";import"./linear-progress-constants-DLKacN3g.js";import"./list-fY0-hWWQ.js";import"./popover-iXOrT8w4.js";import"./with-longpress-listener-CIBU5OM7.js";import"./dismissible-stack-Dq8Wx7Op.js";import"./skeleton-constants-BMCz4G6W.js";import"./tooltip-B4GxzS7-.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
