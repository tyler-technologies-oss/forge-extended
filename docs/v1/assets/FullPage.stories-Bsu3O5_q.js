import{x as e}from"./iframe-C08US71-.js";import{s as t}from"./decorators-BefWZWl6.js";import{I as r,n,e as a,d as i}from"./with-default-aria-BQE8XDIz.js";import"./content-scaffold-nlWmsRED.js";import"./structured-card-C4B201xh.js";import{d as s}from"./index-DpYh05JD.js";import{d as m}from"./index-BFT0Y5rM.js";import{d as p}from"./index-Dl8A3P2F.js";import{d}from"./index-BBQYzh_e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-Dk8e2pW9.js";import"./constants-BLBViMKp.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DBbww9_W.js";import"./async-directive-DBIGADlc.js";import"./directive-CJw_OlP2.js";import"./utils-C7jF9PmR.js";import"./class-map-Dxz70OQS.js";import"./index-PVZ9PkQy.js";import"./toolbar-I6kK8L-A.js";import"./base-button-adapter-CNE4gXS8.js";import"./focus-indicator-Bchj9TEM.js";import"./icon-DQrVUb0Z.js";import"./icon-button-xZ8SOnqC.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
