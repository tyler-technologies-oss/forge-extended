import{x as e}from"./iframe-BiqOLCym.js";import{s as t}from"./decorators-iAm4AAKN.js";import{I as r,n,e as a,d as i}from"./with-default-aria-B9u_I1Vb.js";import"./content-scaffold-OJl7znny.js";import"./structured-card-C-CEjD1m.js";import{d as s}from"./index-DAvhSMO5.js";import{d as m}from"./index-v9gmZ9YL.js";import{d}from"./index-nU3wy1kV.js";import{d as p}from"./index-BvCHHo4A.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CqaTs5fS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CpR51AY-.js";import"./async-directive-BRtB7_Lq.js";import"./directive-CJw_OlP2.js";import"./class-map-DwadfE0F.js";import"./index-P5eP_rHx.js";import"./toolbar-CD-9rqEB.js";import"./base-button-adapter-Dub1mvwR.js";import"./focus-indicator-Dd8QgJhF.js";import"./icon-CqcKSKcV.js";import"./icon-button-CKIgkTLl.js";s();m();d();p();r.define([n,a,i]);const c="forge-content-scaffold",O={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
