import{x as e}from"./iframe-Divla-Cp.js";import{s as t}from"./decorators-HdD8mzBe.js";import{I as r,n,e as a,d as i}from"./with-default-aria-BEs3GmpT.js";import"./content-scaffold-CY4HPLmX.js";import"./structured-card-DAukMNtH.js";import{d as s}from"./index-DsolaIvU.js";import{d as m}from"./index-CrpGlOxL.js";import{d as p}from"./index-r3sRvHmc.js";import{d}from"./index-B9d_yM6M.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-D-5lT58i.js";import"./constants-DkN7ZGiS.js";import"./a11y-utils-BCt-Wh9D.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bi1B8CZI.js";import"./async-directive-D1XEcX9j.js";import"./directive-CJw_OlP2.js";import"./class-map-DifFCkIf.js";import"./index-DDtCiOcM.js";import"./toolbar-BJpGAHib.js";import"./base-button-adapter-uhdylO1A.js";import"./focus-indicator-CDDzSaVo.js";import"./icon-C6Jpggai.js";import"./icon-button-CTYCVtl8.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const V=["FullPage"];export{o as FullPage,V as __namedExportsOrder,T as default};
