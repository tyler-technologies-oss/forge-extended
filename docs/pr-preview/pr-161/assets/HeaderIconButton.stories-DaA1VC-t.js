import{x as t}from"./iframe-CWwUEUts.js";import{s as n}from"./decorators-CxeU5LQv.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-BmTvV3yR.js";import"./structured-card-0aQxf7tJ.js";import{d as p}from"./index-ChKW5gpP.js";import{d as u}from"./index-2qwXV0PB.js";import{d as g}from"./index-Cbrfqhkz.js";import{d as f}from"./index-CPB-YcpN.js";import{d as y}from"./index-DzBvQH4b.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-CS0cJgNw.js";import"./constants-Be6bX2Od.js";import"./utils-ByLsL7Wi.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BKQOMfSV.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DG0hCdb_.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQvAh1tX.js";import"./async-directive-D82nVt7w.js";import"./index-CYpxGDOm.js";import"./base-button-adapter-CiMVbNdb.js";import"./focus-indicator-CAiYFYIA.js";import"./icon-CVYhSLfO.js";import"./icon-button-Cwc0cqEH.js";import"./list-dropdown-aware-core-C3tAUzz7.js";import"./linear-progress-constants-CD6Ynwry.js";import"./list-Gr-9IQgh.js";import"./popover-CFvMlNQ3.js";import"./with-longpress-listener-DeNIdfjd.js";import"./dismissible-stack-gdj2rnfw.js";import"./skeleton-constants-BcloRW7W.js";import"./tooltip-3tQHK1AW.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
