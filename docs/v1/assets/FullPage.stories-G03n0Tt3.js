import{x as e}from"./iframe-1dcdlrZB.js";import{s as t}from"./decorators-CM0gvY1i.js";import{I as r,n,e as a,d as i}from"./with-default-aria-CV78iXDo.js";import"./content-scaffold-C62WyhHV.js";import"./structured-card-D0mjUNgB.js";import{d as s}from"./index-BS8D1Wlv.js";import{d as m}from"./index-C1wyvNNH.js";import{d}from"./index-DG168QC-.js";import{d as p}from"./index-Pwb0Rn0e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CRBXf694.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BcnBu-T5.js";import"./async-directive-BB26Ng_H.js";import"./directive-CJw_OlP2.js";import"./class-map-Bs9SlVcM.js";import"./index-B6kOa7HJ.js";import"./toolbar-B1_Egwrn.js";import"./base-button-adapter-jab__om5.js";import"./focus-indicator-CVN0kG-m.js";import"./icon-DZQJbqqs.js";import"./icon-button-DE3JhtkL.js";s();m();d();p();r.define([n,a,i]);const c="forge-content-scaffold",O={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
