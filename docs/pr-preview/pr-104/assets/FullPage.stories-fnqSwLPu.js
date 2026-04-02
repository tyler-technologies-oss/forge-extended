import{x as e}from"./iframe-D_POcHjj.js";import{s as t}from"./decorators-COuIY4ic.js";import{I as r,n,k as a,g as i}from"./with-default-aria-DnjTbB4-.js";import"./content-scaffold-C918g_cV.js";import"./structured-card-Q5wGCxWp.js";import{d as s}from"./index-B6Bh0NQ1.js";import{d as m}from"./index-D0uvl9CW.js";import{d}from"./index-DEKwVHY_.js";import{d as c}from"./index-D-KYdbbS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-FyE-gVIc.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-zoLoyHwM.js";import"./directive-CJw_OlP2.js";import"./class-map-BZgL6Tl5.js";import"./index-BNnW_AEv.js";import"./toolbar-BRVBAtF0.js";import"./base-button-adapter-aJYPmLgL.js";s();m();d();c();r.define([n,a,i]);const f="forge-content-scaffold",M={title:"Components/Content Scaffold",component:f,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
