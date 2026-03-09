import{x as t}from"./iframe-DzMABE0J.js";import{s as n}from"./decorators-Bvbs7tRY.js";import{I as r,c as a,t as i,e as s,i as d,a as c,f as l,d as m}from"./with-default-aria-95UvAwgt.js";import"./structured-card-Dr5ouBaJ.js";import{d as p}from"./index-BNcDufrq.js";import{d as u}from"./index-DDmcS6Ts.js";import{d as f}from"./index-gaO1S0DB.js";import{d as g}from"./index-D5HRIzus.js";import{d as y}from"./index-B8Y54OuA.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-v1LuvkTS.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-B5WkjWt2.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D7DbRIMc.js";import"./class-map-DM8pdLL7.js";import"./index-D392OEpP.js";import"./index-BxmYG8Fc.js";import"./base-button-adapter-Dvd2gz0U.js";import"./list-dropdown-aware-core-wGBlrZUN.js";import"./linear-progress-constants-pNPD-TN7.js";import"./list-BMlSR59_.js";import"./popover-CUPt1dqs.js";import"./with-longpress-listener-DBH80Hg0.js";import"./dismissible-stack-BcBmKDrd.js";import"./skeleton-constants-Bn8xuMCh.js";import"./tooltip-CjRSMWIE.js";p();u();f();g();y();r.define([a,i,s,d,c,l,m]);const h="forge-structured-card",N={title:"Components/Structured Card",component:h,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Q=["WithHeaderActions"];export{e as WithHeaderActions,Q as __namedExportsOrder,N as default};
