import{x as e}from"./iframe-C6uLETDu.js";import{s as t}from"./decorators-BW4Ng8Mp.js";import{I as r,n,e as a,d as i}from"./with-default-aria-qK7n-I_R.js";import"./content-scaffold-COJm1GIU.js";import"./structured-card-DzEWHTaZ.js";import{d as s}from"./index-CTj1O39E.js";import{d as m}from"./index-BkiBS89O.js";import{d as p}from"./index-mqgXvycp.js";import{d}from"./index-BoZp-nHZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CwDoUV0x.js";import"./constants-B45z8Rzx.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-QCR2zngV.js";import"./async-directive-DLnhQJrA.js";import"./directive-CJw_OlP2.js";import"./utils-CifiO2q4.js";import"./class-map-DAEvk2iL.js";import"./index-aoFpfMfe.js";import"./toolbar-bWoqmU_S.js";import"./base-button-adapter-CtIMfknO.js";import"./focus-indicator-C5nfhBw6.js";import"./icon-BFh6via-.js";import"./icon-button-DlErWaed.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
