import{x as e}from"./iframe-Bc1gK1D2.js";import{s as t}from"./decorators-B7Y3VDUB.js";import{I as r,n,e as a,d as i}from"./with-default-aria-DKBtCCS8.js";import"./content-scaffold-Dg-aQzLJ.js";import"./structured-card-Pj8XuCtm.js";import{d as s}from"./index-But_pL5V.js";import{d as m}from"./index-BY6OoCBE.js";import{d}from"./index-DeunrSu9.js";import{d as p}from"./index-DzKHyiTq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-C0oGLkIs.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CGLJKfT8.js";import"./async-directive-BmRd90c7.js";import"./directive-CJw_OlP2.js";import"./class-map-OtRBhPR7.js";import"./index-BhqZv3Ez.js";import"./toolbar-BsID2Yhs.js";import"./base-button-adapter-LtjZ8eTY.js";import"./focus-indicator-CZ9tP9Vs.js";import"./icon-CR3saOZG.js";s();m();d();p();r.define([n,a,i]);const c="forge-content-scaffold",E={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const O=["FullPage"];export{o as FullPage,O as __namedExportsOrder,E as default};
