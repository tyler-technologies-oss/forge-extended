import{x as t}from"./iframe-D9HQDu7p.js";import{s as n}from"./decorators-CZOFQ3by.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-DEo4mC41.js";import"./structured-card-MOcmK2AE.js";import{d as p}from"./index-BhYHSfIt.js";import{d as u}from"./index-K-HPkp-G.js";import{d as g}from"./index-l6_PuuYe.js";import{d as f}from"./index-Cu2TWbU3.js";import{d as y}from"./index-CVyyhrr1.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BZ0i9X0W.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Qacjvx_q.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CAhUByjO.js";import"./when-3fO0zp9C.js";import"./lit-utils-DlMRMc4F.js";import"./async-directive-C80dpfX0.js";import"./index-osO6IpzO.js";import"./base-button-adapter-B8lUM2fR.js";import"./focus-indicator-UbAoJCCh.js";import"./icon-9Fch71G9.js";import"./icon-button-hpfAgSVF.js";import"./list-dropdown-aware-core-C8gCZFyn.js";import"./linear-progress-constants-BkZTPi-p.js";import"./list-DSPBVHzo.js";import"./popover-BuKnPi03.js";import"./with-longpress-listener-DK2GrRuL.js";import"./dismissible-stack-BGUxHMnw.js";import"./skeleton-constants-olArHOC-.js";import"./tooltip-C_gAXzPd.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
