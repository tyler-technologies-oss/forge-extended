import{x as t}from"./iframe-BcE93Zz5.js";import{s as n}from"./decorators-CJoHE9IJ.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-Ctm27gPP.js";import"./structured-card-CNfdRQGx.js";import{d as p}from"./index-BGENJ8Kb.js";import{d as u}from"./index-Bpce5LPy.js";import{d as g}from"./index-BiPGyJDG.js";import{d as f}from"./index-BP1engEx.js";import{d as y}from"./index-CH5bIhxy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-Dh5Svg1S.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-ruiMqfj1.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D8p_C29K.js";import"./when-3fO0zp9C.js";import"./lit-utils-w4IX00lO.js";import"./async-directive-D1frOKea.js";import"./index-D7BbtT26.js";import"./base-button-adapter-DoNszb5A.js";import"./focus-indicator-B9933ltP.js";import"./icon-Dt-aqUlq.js";import"./icon-button-Blln7NbG.js";import"./list-dropdown-aware-core-LPzyPM1n.js";import"./linear-progress-constants-CB24seMq.js";import"./list-DTGe0pfB.js";import"./popover-DoVP4jsg.js";import"./with-longpress-listener-eZ12HZJc.js";import"./dismissible-stack-7I7vA9YH.js";import"./skeleton-constants-oQDPZR89.js";import"./tooltip-DBAIdnrm.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
