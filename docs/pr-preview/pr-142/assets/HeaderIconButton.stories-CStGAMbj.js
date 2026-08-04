import{x as t}from"./iframe-C7fMUolH.js";import{s as n}from"./decorators-WkUwC5EI.js";import{I as r,p as a,n as i,m as s,P as m,e as d,g as c,l}from"./with-default-aria-271WHlov.js";import"./structured-card-PLx1yJtb.js";import{d as p}from"./index-DEDT6JJb.js";import{d as u}from"./index-Dq7PMuyO.js";import{d as g}from"./index-C_hig5gk.js";import{d as f}from"./index-Cl1vJGd-.js";import{d as y}from"./index-z8oy8DS3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-Cuu7LyiG.js";import"./constants-iVqEkiyf.js";import"./a11y-utils-D0XFVk2n.js";import"./custom-element-C028faeO.js";import"./utils-CuBSrgt8.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CFhQHarn.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BAfRIaYf.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cf0GtZU2.js";import"./async-directive-Da_1GK_R.js";import"./index-DYnsJCg6.js";import"./base-button-adapter-DsNiq0wh.js";import"./focus-indicator-Cj5G_QpO.js";import"./icon-DgvKQl-p.js";import"./icon-button-BItzV8X1.js";import"./list-dropdown-aware-core-0VZfkROE.js";import"./linear-progress-constants-CWY4OkXI.js";import"./list-Z-NBizvj.js";import"./popover-eMbDjwS3.js";import"./with-longpress-listener-DqSpwvI8.js";import"./dismissible-stack-NoLrZgwI.js";import"./skeleton-constants-CZxdpnZ1.js";import"./tooltip-CjKJV5zw.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",te={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const ne=["HeaderIconButton"];export{e as HeaderIconButton,ne as __namedExportsOrder,te as default};
