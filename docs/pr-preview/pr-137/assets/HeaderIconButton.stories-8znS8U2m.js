import{x as t}from"./iframe-C5GBHaJ-.js";import{s as n}from"./decorators-CxXIyBnQ.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-Dz9T_Goq.js";import"./structured-card-DFqUasRh.js";import{d as p}from"./index-CgvyWZqe.js";import{d as u}from"./index-Bl4qMOUU.js";import{d as g}from"./index-DD9SkGUH.js";import{d as f}from"./index-Bjczkcuq.js";import{d as y}from"./index-DUiiCDZK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DI1fRxpn.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-ChDuzkOW.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CYbjsdG6.js";import"./when-3fO0zp9C.js";import"./lit-utils-D9NxibOS.js";import"./async-directive-C918TF4t.js";import"./index-CiSVdpj5.js";import"./base-button-adapter-Lkk2y8ge.js";import"./focus-indicator-DZ8vxoSo.js";import"./icon-ClPouMlv.js";import"./icon-button-rZiUfr68.js";import"./list-dropdown-aware-core-D93tWis4.js";import"./linear-progress-constants-BozTPWC3.js";import"./list-CBeceRp6.js";import"./popover-CT8uwSJL.js";import"./position-utils-CzFs10Td.js";import"./with-longpress-listener-dRw0-SDN.js";import"./dismissible-stack-f-YEJexU.js";import"./skeleton-constants-DeNTurMy.js";import"./tooltip-BnMs8FQV.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Z={title:"Components/Structured Card",component:I,decorators:[n(`
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
