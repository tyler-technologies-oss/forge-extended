import{x as e}from"./iframe-Bmpo7mK4.js";import{s as t}from"./decorators-D1xcKosb.js";import{I as r,t as n,a,b as i}from"./with-default-aria-CqHJAmJ_.js";import"./content-scaffold-CeiNuTct.js";import"./structured-card-COxCKnW9.js";import{d as s}from"./index-BinP8Lry.js";import{d as m}from"./index-BwGY1Jp9.js";import{d as c}from"./index-DW5czcRD.js";import{d}from"./index-DPgfpJZF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DWkFozGy.js";import"./when-3fO0zp9C.js";import"./async-directive-a_IyjKek.js";import"./directive-CJw_OlP2.js";import"./style-map-F9UlsvX2.js";import"./index-BJPpmeSU.js";import"./base-button-adapter-A8-Yu6iA.js";s();m();c();d();r.define([n,a,i]);const f="forge-content-scaffold",F={title:"Components/Content Scaffold",component:f,tags:[""],parameters:{layout:"fullscreen"},decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const L=["FullPage"];export{o as FullPage,L as __namedExportsOrder,F as default};
