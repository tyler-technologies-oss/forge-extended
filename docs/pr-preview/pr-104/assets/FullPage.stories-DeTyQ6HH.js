import{x as e}from"./iframe-DB7khuar.js";import{s as t}from"./decorators-UG1vF1ly.js";import{I as r,t as n,a,b as i}from"./with-default-aria-DgzfDd8k.js";import"./content-scaffold-yFt3Bvs6.js";import"./structured-card-CkyEsAk_.js";import{d as s}from"./index-DhCrqmz7.js";import{d as m}from"./index-Ca38EChD.js";import{d as c}from"./index-RO2oMO-W.js";import{d}from"./index-6Sip5Tjo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BMWnaSmQ.js";import"./when-3fO0zp9C.js";import"./async-directive-DqBYNgnJ.js";import"./directive-CJw_OlP2.js";import"./style-map-BvuDHFBf.js";import"./index-C5QB_oV8.js";import"./base-button-adapter-C-uPU8dd.js";s();m();c();d();r.define([n,a,i]);const f="forge-content-scaffold",F={title:"Components/Content Scaffold",component:f,tags:[""],parameters:{layout:"fullscreen"},decorators:[t(`
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
