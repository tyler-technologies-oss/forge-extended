import{x as e}from"./iframe-CvDen7jj.js";import{s as t}from"./decorators-CieCEVyF.js";import{I as r,n,k as a,g as i}from"./with-default-aria-DvI_GkHh.js";import"./content-scaffold-BY55CMxR.js";import"./structured-card-BghgIW9R.js";import{d as s}from"./index-Qq8hHtA0.js";import{d as m}from"./index-8wiImEks.js";import{d}from"./index-YEQnyyNX.js";import{d as c}from"./index-Bfn2cnRU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CWDydYTm.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-B-bdRhug.js";import"./directive-CJw_OlP2.js";import"./class-map-ZacDQJmd.js";import"./index-Baoujx7x.js";import"./toolbar-CllaGwLw.js";import"./base-button-adapter-4rkhQtln.js";import"./icon-button-DZMUXEXF.js";s();m();d();c();r.define([n,a,i]);const p="forge-content-scaffold",j={title:"Components/Content Scaffold",component:p,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const A=["FullPage"];export{o as FullPage,A as __namedExportsOrder,j as default};
