import{x as e}from"./iframe-BNRzrxvp.js";import{s as t}from"./decorators-Cj6lec-7.js";import{I as r,n,e as a,d as i}from"./with-default-aria-CKJa4TQ6.js";import"./content-scaffold-D76I5FTv.js";import"./structured-card-D49dMoFJ.js";import{d as s}from"./index-67sEGiTV.js";import{d as m}from"./index-_b89N1_M.js";import{d as p}from"./index-D6LEMRuS.js";import{d}from"./index-Cfk3cKct.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BuEtX1ez.js";import"./constants-ClOpupSA.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BC9rQbmr.js";import"./async-directive-D3BBrAEV.js";import"./directive-CJw_OlP2.js";import"./utils-DJdwSxH5.js";import"./class-map-BV2Dw1zj.js";import"./index-CcsIs4V7.js";import"./toolbar-CJcr3FPS.js";import"./base-button-adapter-VZYV8pMZ.js";import"./focus-indicator-CfBV9G0k.js";import"./icon-C6I8EL-q.js";import"./icon-button-DrEAubop.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
