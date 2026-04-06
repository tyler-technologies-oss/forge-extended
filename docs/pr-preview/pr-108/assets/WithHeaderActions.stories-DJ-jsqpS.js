import{x as t}from"./iframe-Dy9ZuCLJ.js";import{s as n}from"./decorators-BqeNuF5E.js";import{I as r,p as i,n as a,j as s,A as m,k as d,m as c,i as l}from"./base-lit-element-CjIWlCjo.js";import"./structured-card-9zuEdp3L.js";import{d as p}from"./index-BSpaDUMw.js";import{d as u}from"./index-BUil6sxV.js";import{d as g}from"./index-Cx3mqWG-.js";import{d as f}from"./index-DA6mogsH.js";import{d as y}from"./index-D_IYGbwF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-F41sgjvV.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Cz-aJC0y.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Db1ev-K7.js";import"./when-3fO0zp9C.js";import"./lit-utils-B87wv_Jy.js";import"./async-directive-DUaxLVJQ.js";import"./index-CdADrInV.js";import"./base-button-adapter-C259_nzw.js";import"./with-default-aria-D3L2nNoI.js";import"./a11y-utils-DGcTJp_D.js";import"./icon-CDOvWK1U.js";import"./list-dropdown-aware-core-Byvl8vKU.js";import"./linear-progress-constants-DNWwoLca.js";import"./list-BDM4ezUP.js";import"./popover-Ch7Ir01i.js";import"./with-longpress-listener-C6eq-NGh.js";import"./dismissible-stack-CmztALXC.js";import"./skeleton-constants-aJczyKEI.js";import"./tooltip-B9G5OCiE.js";p();u();g();f();y();r.define([i,a,s,m,d,c,l]);const h="forge-structured-card",Y={title:"Components/Structured Card",component:h,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["WithHeaderActions"];export{e as WithHeaderActions,Z as __namedExportsOrder,Y as default};
