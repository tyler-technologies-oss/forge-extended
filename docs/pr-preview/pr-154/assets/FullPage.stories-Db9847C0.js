import{x as e}from"./iframe-BMggY0Eq.js";import{s as t}from"./decorators-D63UJ0xr.js";import{I as r,o as n,f as a,e as i}from"./with-default-aria-NpWy7zUu.js";import"./content-scaffold-DAyfz4LZ.js";import"./structured-card-QF1puaCQ.js";import{d as s}from"./index-BmpyAemi.js";import{d as m}from"./index-B1v7lt4m.js";import{d as p}from"./index-DJgm2yXY.js";import{d}from"./index-CcueWhpz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-FMdYT5yi.js";import"./constants-o7gsy-Mc.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CWd9ykg1.js";import"./async-directive-Bkkdsiao.js";import"./directive-CJw_OlP2.js";import"./utils-Ci8BKDzo.js";import"./class-map-BX9NNbX2.js";import"./index-DQHA1GbE.js";import"./toolbar-CNb_cDVA.js";import"./base-button-adapter-CeJFAvB2.js";import"./focus-indicator-CZ8Q_jHJ.js";import"./icon-B7BdjdS-.js";import"./icon-button-TlXi4X8k.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
