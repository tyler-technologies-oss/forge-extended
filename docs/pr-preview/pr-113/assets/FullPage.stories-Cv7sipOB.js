import{x as e}from"./iframe-Dl9rccmp.js";import{s as t}from"./decorators-Dulwwya8.js";import{I as r,n,k as a,g as i}from"./with-default-aria-Dz8WdObG.js";import"./content-scaffold-C2mxD0hM.js";import"./structured-card-C8keIczd.js";import{d as s}from"./index-DrNjr0CF.js";import{d as m}from"./index-CnDlsITW.js";import{d}from"./index-DlU3dv5c.js";import{d as c}from"./index-9ZHXBsQk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DhgAIoth.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-Dn4kAKBX.js";import"./directive-CJw_OlP2.js";import"./class-map-h91WH6Qb.js";import"./index-5ipHNH6c.js";import"./toolbar-LUhNY6Wp.js";import"./base-button-adapter-D3g6KwJ2.js";import"./icon-button-DYrB2kr7.js";s();m();d();c();r.define([n,a,i]);const p="forge-content-scaffold",j={title:"Components/Content Scaffold",component:p,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
