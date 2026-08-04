import{x as e}from"./iframe-BgG1mILm.js";import{s as t}from"./decorators-CGtwCCji.js";import{I as r,n,e as a,d as i}from"./with-default-aria-DhKreie1.js";import"./content-scaffold-CZmYL34l.js";import"./structured-card-DqTFIYN0.js";import{d as s}from"./index-DpfKIUCk.js";import{d as m}from"./index-DH-EBj3W.js";import{d as p}from"./index-CKj6teuh.js";import{d}from"./index-IpHzfxDW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-4yZjZMA_.js";import"./constants-D4w8ERcy.js";import"./a11y-utils-Bqf6nmLH.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CbFCRKzL.js";import"./async-directive-C8qPSgQz.js";import"./directive-CJw_OlP2.js";import"./utils-BrQSBAEO.js";import"./class-map-nSt2BsDm.js";import"./index-Brr_ru3-.js";import"./toolbar-DgyQODHV.js";import"./base-button-adapter-DJylsVrC.js";import"./focus-indicator-CvBVFsiv.js";import"./icon-DUW7oXzz.js";import"./icon-button-CVlniPs4.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",q={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const z=["FullPage"];export{o as FullPage,z as __namedExportsOrder,q as default};
