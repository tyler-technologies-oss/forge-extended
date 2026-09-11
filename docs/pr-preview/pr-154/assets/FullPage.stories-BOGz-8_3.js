import{x as e}from"./iframe-D_NpdGMW.js";import{s as t}from"./decorators-BGtlJFC5.js";import{I as r,o as n,f as a,e as i}from"./with-default-aria-QQHkHnUD.js";import"./content-scaffold-B20VKqCn.js";import"./structured-card-Dm2Fy9jW.js";import{d as s}from"./index-DCI5EXVu.js";import{d as m}from"./index-cQL53Ya2.js";import{d as p}from"./index-DZYfwwJc.js";import{d}from"./index-D1Q40_o8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CyYN7QVE.js";import"./constants-B5g2L9LN.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQdM5MP4.js";import"./async-directive-CI_QSR1Q.js";import"./directive-CJw_OlP2.js";import"./utils-Duph8ic8.js";import"./class-map-pH4tyynp.js";import"./index-q9xROInv.js";import"./toolbar-B4ibBQfC.js";import"./base-button-adapter-BO3BfEkZ.js";import"./focus-indicator-DP9wjAbI.js";import"./button-constants-0Bfcv2FI.js";import"./icon-Dd_9Vvpg.js";import"./icon-button-4GgzV-1p.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const q=["FullPage"];export{o as FullPage,q as __namedExportsOrder,V as default};
