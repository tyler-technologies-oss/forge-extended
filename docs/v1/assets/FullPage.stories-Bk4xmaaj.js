import{x as e}from"./iframe-DJZ_Mhdn.js";import{s as t}from"./decorators-DGNRYNou.js";import{I as r,n,e as a,d as i}from"./with-default-aria-BF8b74LB.js";import"./content-scaffold-B_1dm7y5.js";import"./structured-card-rpsPlFhQ.js";import{d as s}from"./index-3uDzBoil.js";import{d as m}from"./index-CV7Ac1pk.js";import{d as p}from"./index-CFkkeAfN.js";import{d}from"./index-VFdSlEYS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-zoTee3dw.js";import"./constants-DU7YENlu.js";import"./a11y-utils-BdEYBLk0.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bv0lYt6h.js";import"./async-directive-87g-kMN-.js";import"./directive-CJw_OlP2.js";import"./class-map-5ViRLiBk.js";import"./index-B0ZBKArx.js";import"./toolbar-gf0sVjE8.js";import"./base-button-adapter-JTDHV01r.js";import"./focus-indicator-CUZ9-AXC.js";import"./icon-Cj5Dx5Vx.js";import"./icon-button-eFRgNG73.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
