import{x as t}from"./iframe-CJA-oYji.js";import{s as n}from"./decorators-eIhikN9P.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-Cyn6jl-k.js";import"./structured-card-Bi28ONSB.js";import{d as p}from"./index-BFvX2EMV.js";import{d as u}from"./index-DFwCaa_u.js";import{d as g}from"./index-MdvfrA-s.js";import{d as f}from"./index-CMQmOt5t.js";import{d as y}from"./index-B2ZAUUEY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BWp4YXPh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DEfjwoUI.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BBiBNCfq.js";import"./when-3fO0zp9C.js";import"./lit-utils-07JDB8ZZ.js";import"./async-directive-DVtU5Q-2.js";import"./index-DdNbJoJK.js";import"./base-button-adapter-A0K3LK6K.js";import"./focus-indicator-D2GI4J6r.js";import"./icon-DZ9Vtx3q.js";import"./icon-button-BpsGkVSY.js";import"./list-dropdown-aware-core-8oO1ikCu.js";import"./linear-progress-constants-BWUJK2gM.js";import"./list-ynvVgyow.js";import"./popover-Dfrndn7Q.js";import"./with-longpress-listener-r6HsW6jA.js";import"./dismissible-stack-Dr2ZClqI.js";import"./skeleton-constants-BL-L33H_.js";import"./tooltip-4eI4fWgT.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
