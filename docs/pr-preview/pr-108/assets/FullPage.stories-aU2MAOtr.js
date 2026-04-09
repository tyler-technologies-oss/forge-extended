import{x as e}from"./iframe-CmpYG8UB.js";import{s as t}from"./decorators-a8lqixdP.js";import{I as r,n,e as a,d as i}from"./with-default-aria-D19lJxx9.js";import"./content-scaffold-ByWmCV5G.js";import"./structured-card-CquuUNCC.js";import{d as s}from"./index-Dv59AjNk.js";import{d as m}from"./index-BDvr1x00.js";import{d}from"./index-dyXGcnV_.js";import{d as p}from"./index-CsK1mkvm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DihiovMj.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DcwCEZxR.js";import"./async-directive-D6X1PGy4.js";import"./directive-CJw_OlP2.js";import"./class-map-DE9fVmf2.js";import"./index-C_PceBU_.js";import"./toolbar-C3YPbMB1.js";import"./base-button-adapter-DX5ysMMI.js";import"./focus-indicator-VXk6Z9Zx.js";import"./icon-DJaeDvr-.js";import"./icon-button-C5oqhYM3.js";s();m();d();p();r.define([n,a,i]);const c="forge-content-scaffold",O={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const R=["FullPage"];export{o as FullPage,R as __namedExportsOrder,O as default};
