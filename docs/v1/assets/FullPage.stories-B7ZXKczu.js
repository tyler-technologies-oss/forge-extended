import{x as e}from"./iframe-C7JWi23m.js";import{s as t}from"./decorators-DBsa8SrM.js";import{I as r,n,e as a,d as i}from"./with-default-aria-K3PJ0_SZ.js";import"./content-scaffold-CA5uZtOr.js";import"./structured-card-ALvzq-X7.js";import{d as s}from"./index-CDZBTxsR.js";import{d as m}from"./index-BW3nIMKg.js";import{d as p}from"./index-B32YAwfk.js";import{d}from"./index-B8HFBbmF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-DwRFlNSf.js";import"./constants-DPUAL7_7.js";import"./a11y-utils-DHYwHs7X.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bj7toZcH.js";import"./async-directive-CknBIbyc.js";import"./directive-CJw_OlP2.js";import"./class-map-DtSCGelo.js";import"./index-DD9qsl0c.js";import"./toolbar-Cj8PjM56.js";import"./base-button-adapter-CIPT0ae9.js";import"./focus-indicator-Bgm9uuur.js";import"./icon-D1pxQFQj.js";import"./icon-button-plYv35EG.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
