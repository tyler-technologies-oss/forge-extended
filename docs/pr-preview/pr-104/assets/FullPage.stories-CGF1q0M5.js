import{x as e}from"./iframe-tOCS_65c.js";import{s as t}from"./decorators-XFRLIcMf.js";import{I as r,t as n,a,b as i}from"./with-default-aria-neuuPLFN.js";import"./content-scaffold-CjQwSKXL.js";import"./structured-card-ConDlCOb.js";import{d as s}from"./index-Dys_pqPk.js";import{d as m}from"./index-BDIdkQnO.js";import{d}from"./index-BigR2QxF.js";import{d as c}from"./index-BIe65oR1.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-D-PvsXJA.js";import"./when-3fO0zp9C.js";import"./async-directive-WBwhE4z-.js";import"./directive-CJw_OlP2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-A-G8ss4N.js";import"./index-Dcw3G2vr.js";import"./toolbar-6yfyRLb0.js";import"./base-button-adapter-ViUGljU0.js";s();m();d();c();r.define([n,a,i]);const p="forge-content-scaffold",j={title:"Components/Content Scaffold",component:p,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
