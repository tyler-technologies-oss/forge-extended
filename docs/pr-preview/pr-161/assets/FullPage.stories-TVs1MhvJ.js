import{x as e}from"./iframe-CWwUEUts.js";import{s as t}from"./decorators-CxeU5LQv.js";import{I as r,n,e as a,d as i}from"./with-default-aria-BmTvV3yR.js";import"./content-scaffold-DG0hCdb_.js";import"./structured-card-0aQxf7tJ.js";import{d as s}from"./index-Dg2dkoab.js";import{d as m}from"./index-ChKW5gpP.js";import{d as p}from"./index-2qwXV0PB.js";import{d}from"./index-Cbrfqhkz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-CS0cJgNw.js";import"./constants-Be6bX2Od.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQvAh1tX.js";import"./async-directive-D82nVt7w.js";import"./directive-CJw_OlP2.js";import"./utils-ByLsL7Wi.js";import"./class-map-BKQOMfSV.js";import"./index-CYpxGDOm.js";import"./toolbar-CclkbabE.js";import"./base-button-adapter-CiMVbNdb.js";import"./focus-indicator-CAiYFYIA.js";import"./icon-CVYhSLfO.js";import"./icon-button-Cwc0cqEH.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
