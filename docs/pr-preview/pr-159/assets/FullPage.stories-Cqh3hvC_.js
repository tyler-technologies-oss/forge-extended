import{x as e}from"./iframe-CSr27Gi9.js";import{s as t}from"./decorators-jH5mbsPj.js";import{I as r,n,e as a,d as i}from"./with-default-aria-DqAXseBi.js";import"./content-scaffold-NcH_mt3m.js";import"./structured-card-puttL6qq.js";import{d as s}from"./index-7VsvyswD.js";import{d as m}from"./index-C0ZwjHuE.js";import{d as p}from"./index-XImc70I8.js";import{d}from"./index-DX-PHoPv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-DDaW1mI9.js";import"./constants-B0KOFcFf.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BDYppvBO.js";import"./async-directive-DdY3TFlF.js";import"./directive-CJw_OlP2.js";import"./utils-CaDkb-CY.js";import"./class-map-B6tseOWg.js";import"./index-S8W-aZjQ.js";import"./toolbar-B4e5c0Va.js";import"./base-button-adapter-_1Vo15z1.js";import"./focus-indicator-0djWxlSZ.js";import"./icon-C2DgJ4Of.js";import"./icon-button-CkTpJu7r.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
