import{x as e}from"./iframe-pX2mP6Yq.js";import{s as t}from"./decorators-Dk2-X6A_.js";import{I as r,o as n,f as a,e as i}from"./with-default-aria-D0R24zrx.js";import"./content-scaffold-CTxYUhEl.js";import"./structured-card-D7Q60jFy.js";import{d as s}from"./index-Bw8xjwVn.js";import{d as m}from"./index-B9wBF_Rg.js";import{d as p}from"./index-l5sDas4g.js";import{d}from"./index-DLHmM8kM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-DER5CWwz.js";import"./constants-Bf2qWwtf.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BPNP532N.js";import"./async-directive-D457AqlN.js";import"./directive-CJw_OlP2.js";import"./utils-BfHhYyJi.js";import"./class-map-D3M3IjTv.js";import"./index-Cel8ZMRv.js";import"./toolbar-CSNH2X33.js";import"./base-button-adapter-Dfmjl8hd.js";import"./focus-indicator-COl26dho.js";import"./button-constants-C_OH8Fqk.js";import"./icon-UK7y3e63.js";import"./icon-button-C5ML3Gbk.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
