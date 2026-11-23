import{x as e}from"./iframe-CEyoJGCy.js";import{s as t}from"./decorators-COQVsPJj.js";import{I as r,n,e as a,d as i}from"./with-default-aria-wByQ6wv-.js";import"./content-scaffold-CIO1AcYg.js";import"./structured-card-BYGK7sRc.js";import{d as s}from"./index-CBSJ2TRK.js";import{d as m}from"./index-DSgS9r4k.js";import{d as p}from"./index-DoQqvjn8.js";import{d}from"./index-BtBfNd7y.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-xTTRT63M.js";import"./constants-B19yLoP-.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Ci86qQTg.js";import"./async-directive-BEktGq0z.js";import"./directive-CJw_OlP2.js";import"./utils-b88vL7Ig.js";import"./class-map-C8foIcm9.js";import"./index-BRMSJSki.js";import"./toolbar-BQKO2LhO.js";import"./base-button-adapter-CaN2_8Rx.js";import"./focus-indicator-C-CA7k8r.js";import"./icon-BbEHwsUK.js";import"./icon-button-Dtcqb8VK.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
