import{x as e}from"./iframe-BVi_FfxG.js";import{s as t}from"./decorators-CXQkRri3.js";import{I as r,n,k as a,g as i}from"./with-default-aria-DEGA_h8b.js";import"./content-scaffold-BMgx8Jnp.js";import"./structured-card-c4yNxdc1.js";import{d as s}from"./index-BPPAXXU6.js";import{d as m}from"./index-CeBmgFwd.js";import{d}from"./index-CF4O-VV3.js";import{d as c}from"./index-BPsVCX2O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CuSrPhOm.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-Cu1okbmx.js";import"./directive-CJw_OlP2.js";import"./class-map-BavBZg2L.js";import"./index-Dvuw0_ez.js";import"./toolbar-BRiHb968.js";import"./base-button-adapter-D1h3Nket.js";s();m();d();c();r.define([n,a,i]);const f="forge-content-scaffold",M={title:"Components/Content Scaffold",component:f,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const j=["FullPage"];export{o as FullPage,j as __namedExportsOrder,M as default};
