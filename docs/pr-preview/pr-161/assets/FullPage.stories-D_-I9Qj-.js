import{x as e}from"./iframe-CxQwQddN.js";import{s as t}from"./decorators-CcQvquqg.js";import{I as r,n,e as a,d as i}from"./with-default-aria-CVu2yw52.js";import"./content-scaffold-v25MuZ1a.js";import"./structured-card-BfB82lSW.js";import{d as s}from"./index-agkHFfgl.js";import{d as m}from"./index-BvsF0Siy.js";import{d as p}from"./index-6c4Ag9Pi.js";import{d}from"./index-TkdPUO8k.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-C5QY3EhE.js";import"./constants-C5b45D2K.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CL8MOWRP.js";import"./async-directive-paHAad09.js";import"./directive-CJw_OlP2.js";import"./utils-DAqdXIKN.js";import"./class-map-y-43vWkH.js";import"./index-BDxGwu8F.js";import"./toolbar-4i-Gwf7G.js";import"./base-button-adapter-B_nyIIrV.js";import"./focus-indicator-DHnEotdq.js";import"./icon-BDgIgzOI.js";import"./icon-button-CR-K_XB1.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
