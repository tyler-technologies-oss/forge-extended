import{x as t}from"./iframe-SK2PMNIF.js";import{s as n}from"./decorators-wuW5XaRX.js";import{I as r,j as i,u as a,k as s,m as d,i as l}from"./with-default-aria-BqQZ2yzA.js";import"./structured-card-BQHCsDR8.js";import{d as m}from"./index-C5qYFdzG.js";import{d as c}from"./index-DWG_2-Wo.js";import{d as p}from"./index-CmYBZt3c.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-D-IuVu2w.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-DhfKX3UQ.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-rE-EFLI6.js";import"./async-directive-4u_bWldE.js";import"./index-vZRSQ4bo.js";import"./base-button-adapter-DDFr_tnJ.js";import"./list-dropdown-aware-core-C9Gy5ZPq.js";import"./linear-progress-constants-B_UG5ukX.js";import"./list-DDVB2sHV.js";import"./popover-CWiMbbfP.js";import"./with-longpress-listener-CgWUrzBh.js";import"./dismissible-stack-Dh_93R1y.js";import"./skeleton-constants-CqDS3mjX.js";import"./tooltip-D4n6fmGd.js";m();c();p();r.define([i,a,s,d,l]);const u="forge-structured-card",R={title:"Components/Structured Card",component:u,decorators:[n(`
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
