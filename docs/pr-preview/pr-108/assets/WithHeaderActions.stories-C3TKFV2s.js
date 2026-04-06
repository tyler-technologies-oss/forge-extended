import{x as t}from"./iframe-DttLrut8.js";import{s as n}from"./decorators-BMgxjYYu.js";import{I as r,p as a,n as i,m as s,A as d,e as m,g as c,l}from"./with-default-aria-BBgQnutl.js";import"./structured-card-BoFaXbJO.js";import{d as p}from"./index-CZuHuUAw.js";import{d as u}from"./index-DG4QzpJo.js";import{d as g}from"./index-BLaZ9X0s.js";import{d as f}from"./index-CU22uSNu.js";import{d as y}from"./index-LO2j8wQA.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CIll2i5Z.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CEbYB_a-.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CL0v_556.js";import"./when-3fO0zp9C.js";import"./lit-utils-C3g8SD7Z.js";import"./async-directive-CYL7xBIF.js";import"./index-DR1v3xxJ.js";import"./base-button-adapter-BsbJCaCn.js";import"./focus-indicator-MdB1-hKZ.js";import"./icon-WnYytd-d.js";import"./list-dropdown-aware-core-MREHD3mO.js";import"./linear-progress-constants-CyTXBetq.js";import"./list-DMT4f_c4.js";import"./popover-C_DlrDm8.js";import"./with-longpress-listener-BMSiRudW.js";import"./dismissible-stack-XFAHp1Zv.js";import"./skeleton-constants-Uskzrc4f.js";import"./tooltip-Z60FQyCK.js";p();u();g();f();y();r.define([a,i,s,d,m,c,l]);const h="forge-structured-card",X={title:"Components/Structured Card",component:h,decorators:[n(`
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
          <forge-menu slot="header-actions" .options=${[{label:"Edit",value:"edit",leadingIcon:"edit",leadingIconType:"component"},{label:"Share",value:"share",leadingIcon:"share",leadingIconType:"component"},{label:"Download",value:"download",leadingIcon:"download",leadingIconType:"component"},{label:"Delete",value:"delete",leadingIcon:"delete",leadingIconType:"component"}]} @forge-menu-select=${o=>{console.log("Menu option selected:",o.detail)}}>
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Y=["WithHeaderActions"];export{e as WithHeaderActions,Y as __namedExportsOrder,X as default};
