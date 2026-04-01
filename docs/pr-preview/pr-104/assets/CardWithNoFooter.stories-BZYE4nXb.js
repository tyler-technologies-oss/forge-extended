import{x as t}from"./iframe-Xxe9UVZ_.js";import{s as n}from"./decorators-BsTXl0Jb.js";import{I as r,j as i,u as a,k as s,m as d,i as l}from"./with-default-aria-C2Is6Fdf.js";import"./structured-card-6YMtrnKW.js";import{d as m}from"./index-Dq5j3USq.js";import{d as c}from"./index-CFaM97qN.js";import{d as p}from"./index-48tKd3T0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-qkP8fwFy.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-Dm_BWqA9.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DYFjpwTR.js";import"./async-directive-CdDLLNN1.js";import"./index-CN0IzmLW.js";import"./base-button-adapter-C1g0uc2x.js";import"./list-dropdown-aware-core-bl0-YSkH.js";import"./linear-progress-constants-DuZrb91Y.js";import"./list-C3P2FDpJ.js";import"./popover-B6DcpAwH.js";import"./with-longpress-listener-I4U8Fhc5.js";import"./dismissible-stack-CJwW0dIE.js";import"./skeleton-constants-BJAY2Ard.js";import"./tooltip-Dh8kYa2V.js";m();c();p();r.define([i,a,s,d,l]);const u="forge-structured-card",R={title:"Components/Structured Card",component:u,decorators:[n(`
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
        </forge-structured-card>
      </div>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const V=["CardWithNoFooter"];export{e as CardWithNoFooter,V as __namedExportsOrder,R as default};
