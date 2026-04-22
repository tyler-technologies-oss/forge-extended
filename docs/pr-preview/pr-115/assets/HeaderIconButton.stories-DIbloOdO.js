import{x as t}from"./iframe-DctCxiSq.js";import{s as n}from"./decorators-8Fo8zmO1.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-CNms5Vty.js";import"./structured-card-bixkQ0ES.js";import{d as p}from"./index-BoLWFwk5.js";import{d as u}from"./index-D125PVOJ.js";import{d as g}from"./index-CoWFMgSH.js";import{d as f}from"./index-DtXef-UB.js";import{d as y}from"./index-HBNxUhCI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CS4zXbsk.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-K8DqNwWa.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Cf4EZyvw.js";import"./when-3fO0zp9C.js";import"./lit-utils-BjQhxcrF.js";import"./async-directive-hMS-Qt5r.js";import"./index-KZwkj2I_.js";import"./base-button-adapter-DyQ7pt74.js";import"./focus-indicator-Diq_EcWA.js";import"./icon-BW_dzchp.js";import"./icon-button-DwZ-7yaj.js";import"./list-dropdown-aware-core-in1kzSoo.js";import"./linear-progress-constants-C8nGds3p.js";import"./list-C9gR7WRW.js";import"./popover-Co0NGWdd.js";import"./with-longpress-listener-Cx26JS2z.js";import"./dismissible-stack-D2yQ4f0P.js";import"./skeleton-constants-58wSoob0.js";import"./tooltip-BTEnoueP.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
