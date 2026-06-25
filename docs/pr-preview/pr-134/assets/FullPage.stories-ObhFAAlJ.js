import{x as e}from"./iframe-C_q70EjJ.js";import{s as t}from"./decorators-Bh6ZZlTW.js";import{I as r,n,e as a,d as i}from"./with-default-aria-DoUMoyAO.js";import"./content-scaffold-CLhTGUGH.js";import"./structured-card-BdX8Br1J.js";import{d as s}from"./index-fjB_3uN-.js";import{d as m}from"./index-DYHwHMNC.js";import{d}from"./index-DeIFq22o.js";import{d as p}from"./index-a4-2iaGm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-Bz-XVs7i.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BIeNeJUJ.js";import"./async-directive-CEApR3Nx.js";import"./directive-CJw_OlP2.js";import"./class-map-DkYPREOc.js";import"./index--VMotkga.js";import"./toolbar-DYp5PUmZ.js";import"./base-button-adapter-D8bdyaXz.js";import"./focus-indicator-B5nfyM7B.js";import"./icon-v3qIUZe9.js";import"./icon-button-BYpqW0EQ.js";s();m();d();p();r.define([n,a,i]);const c="forge-content-scaffold",O={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const R=["FullPage"];export{o as FullPage,R as __namedExportsOrder,O as default};
