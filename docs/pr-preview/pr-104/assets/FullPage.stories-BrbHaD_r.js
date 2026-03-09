import{x as e}from"./iframe-BHE_MK2N.js";import{s as t}from"./decorators-BjNdz_J2.js";import{I as r,t as n,a,b as i}from"./with-default-aria-BHUCmVN4.js";import"./content-scaffold-Fu_gbUZO.js";import"./structured-card-qTr7X0um.js";import{d as s}from"./index-CNH7jrBs.js";import{d as m}from"./index-B2oEVnuO.js";import{d as c}from"./index-DkCtin9j.js";import{d}from"./index-IW50H0RU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BhXE-oDH.js";import"./when-3fO0zp9C.js";import"./async-directive-Cjyzb09r.js";import"./directive-CJw_OlP2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-GkhfMalX.js";import"./index-Cqw9y5Xb.js";import"./base-button-adapter-By0Le-ke.js";s();m();c();d();r.define([n,a,i]);const f="forge-content-scaffold",M={title:"Components/Content Scaffold",component:f,tags:[""],parameters:{layout:"fullscreen"},decorators:[t(`
      body {
        height: 100dvh;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #fafafa;
      }
      
      p {
        padding: 0;
        margin: 0;
      }

      #storybook-root,
      #root-inner {
        height: 100%;
      }
    `)],render:()=>e`
      <forge-content-scaffold>
        <forge-icon-button aria-label="Back" slot="before-header-start">
          <forge-icon name="arrow_back"></forge-icon>
        </forge-icon-button>
        <h2 slot="header-start" class="forge-typography--heading4">Project Details</h2>
        <forge-icon-button aria-label="More actions" slot="header-end">
          <forge-icon name="more_vert"></forge-icon>
        </forge-icon-button>
        <div slot="body">
          <forge-card>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </forge-card>
        </div>
        <forge-button variant="filled" slot="footer-end">
          <forge-icon slot="start" name="save"></forge-icon>
          Save
        </forge-button>
      </forge-content-scaffold>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const j=["FullPage"];export{o as FullPage,j as __namedExportsOrder,M as default};
