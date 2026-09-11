import{x as e}from"./iframe-BKxBIIJQ.js";import{s as t}from"./decorators-CiAOTrg1.js";import{I as r,o as n,f as a,e as i}from"./with-default-aria-DjItAXX6.js";import"./content-scaffold-7A7AwKK6.js";import"./structured-card-Dw-wAYym.js";import{d as s}from"./index-B9PZSlU1.js";import{d as m}from"./index-CBKvSyMs.js";import{d as p}from"./index-DVopLR72.js";import{d}from"./index-0JZT0dcO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BldoUTPl.js";import"./constants-aeBb4lYV.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-D3GzrXFC.js";import"./async-directive-CnrapT-E.js";import"./directive-CJw_OlP2.js";import"./utils-B42KGafL.js";import"./class-map-BNDdSF1T.js";import"./index-BaUYnTlJ.js";import"./toolbar-Be9BG9fS.js";import"./base-button-adapter-B1QGS9Um.js";import"./focus-indicator-evqk8lHd.js";import"./button-constants-D3zZPESn.js";import"./icon-CGdxk2in.js";import"./icon-button-DNvrWAkH.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
