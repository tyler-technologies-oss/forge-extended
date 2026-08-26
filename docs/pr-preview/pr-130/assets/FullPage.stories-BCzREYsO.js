import{x as e}from"./iframe-Be-8WAtF.js";import{s as t}from"./decorators-CHyhkvXp.js";import{I as r,n,e as a,d as i}from"./with-default-aria-fXPLHj-L.js";import"./content-scaffold-Dbo_ihfE.js";import"./structured-card-BL13BE1-.js";import{d as s}from"./index-JWbAW6Tl.js";import{d as m}from"./index-BWW_2YhK.js";import{d}from"./index-BfZYzUXd.js";import{d as p}from"./index-DA0Dh1vd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-Dq7oX4ND.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-C49Pmm7a.js";import"./async-directive-DpeoARQz.js";import"./directive-CJw_OlP2.js";import"./class-map-LkDqZww_.js";import"./index-BCuR79Db.js";import"./toolbar-C0VZBJqn.js";import"./base-button-adapter-BuT7cJg_.js";import"./focus-indicator-B6XIgzXe.js";import"./icon-DGd7oIZ4.js";import"./icon-button-BtBoz5U4.js";s();m();d();p();r.define([n,a,i]);const c="forge-content-scaffold",O={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
