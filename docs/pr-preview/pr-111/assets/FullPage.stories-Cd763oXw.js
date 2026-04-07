import{x as e}from"./iframe-D41Yxy1-.js";import{s as t}from"./decorators-CKhSRhED.js";import{I as r,n,k as a,g as i}from"./with-default-aria-DUhUIC4o.js";import"./content-scaffold-Bq_-p6de.js";import"./structured-card-Ch9G3g0t.js";import{d as s}from"./index--sskl4MY.js";import{d as m}from"./index-BVR6h2RZ.js";import{d}from"./index-hEcfwdMy.js";import{d as c}from"./index-s7-6HoyW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DhvMCzkD.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-BJpdL-fk.js";import"./directive-CJw_OlP2.js";import"./class-map-Zw1oJUMc.js";import"./index-DhCAyGK6.js";import"./toolbar-DVZCE89L.js";import"./base-button-adapter-BfiWk_tK.js";import"./icon-button-LEzAtySL.js";s();m();d();c();r.define([n,a,i]);const p="forge-content-scaffold",j={title:"Components/Content Scaffold",component:p,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
