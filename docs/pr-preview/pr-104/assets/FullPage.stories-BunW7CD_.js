import{x as e}from"./iframe-3wzo8pqg.js";import{s as t}from"./decorators-DqcU-3Ii.js";import{I as r,t as n,a,b as i}from"./with-default-aria-CKF43MRP.js";import"./content-scaffold-DW_ASeWw.js";import"./structured-card-BBWddpQN.js";import{d as s}from"./index-BdH-quNn.js";import{d as m}from"./index-hAF4A-D_.js";import{d}from"./index-Drq0aiji.js";import{d as c}from"./index-CE7NL8BP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-dKbZ8DJi.js";import"./when-3fO0zp9C.js";import"./async-directive-xH3GX8Fk.js";import"./directive-CJw_OlP2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-C-vj6smv.js";import"./index-Cul97sQH.js";import"./toolbar-Bt40y0M0.js";import"./base-button-adapter-BBTkTaCh.js";s();m();d();c();r.define([n,a,i]);const p="forge-content-scaffold",j={title:"Components/Content Scaffold",component:p,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const A=["FullPage"];export{o as FullPage,A as __namedExportsOrder,j as default};
