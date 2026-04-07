import{x as t}from"./iframe-CRGMA7MF.js";import{s as n}from"./decorators-yuALYnC9.js";import{I as r,p as a,n as i,j as s,s as d,k as c,m as l,i as m}from"./with-default-aria-B9Uqzh4X.js";import"./structured-card-DtwyOIDj.js";import{d as p}from"./index-BZVuSxJ2.js";import{d as u}from"./index-Dp2tWucw.js";import{d as f}from"./index-uXqUG2Aw.js";import{d as g}from"./index-CbRMXvP2.js";import{d as y}from"./index-CHIf7q-y.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-wEdw9n5d.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-PEn_HxmA.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D1ec7_f1.js";import"./async-directive-Dtl8rOlh.js";import"./index-BfNhydOc.js";import"./base-button-adapter-DuAZ2MZl.js";import"./icon-button-B3BzD6-P.js";import"./list-dropdown-aware-core-6rpwm9Cr.js";import"./linear-progress-constants-Cj-uOWyw.js";import"./list-CqM-9NjE.js";import"./popover-CVBQ3llC.js";import"./with-longpress-listener-BZkLXekD.js";import"./dismissible-stack-Bxn_Linv.js";import"./skeleton-constants-D3G3oW52.js";import"./tooltip-j_a7kkYW.js";p();u();f();g();y();r.define([a,i,s,d,c,l,m]);const I="forge-structured-card",Q={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const U=["HeaderIconButton"];export{e as HeaderIconButton,U as __namedExportsOrder,Q as default};
