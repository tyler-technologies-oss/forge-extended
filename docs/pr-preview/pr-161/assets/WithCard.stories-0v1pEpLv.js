import{x as t}from"./iframe-CWwUEUts.js";import{s as e}from"./decorators-CxeU5LQv.js";import{I as r,l as n,e as i}from"./with-default-aria-BmTvV3yR.js";import"./content-scaffold-DG0hCdb_.js";import"./structured-card-0aQxf7tJ.js";import{d as a}from"./index-Dg2dkoab.js";import{d as m}from"./index-ChKW5gpP.js";import{d as s}from"./index-2qwXV0PB.js";import{d}from"./index-Cbrfqhkz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-CS0cJgNw.js";import"./constants-Be6bX2Od.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQvAh1tX.js";import"./async-directive-D82nVt7w.js";import"./directive-CJw_OlP2.js";import"./utils-ByLsL7Wi.js";import"./class-map-BKQOMfSV.js";import"./index-CYpxGDOm.js";import"./toolbar-CclkbabE.js";import"./base-button-adapter-CiMVbNdb.js";import"./focus-indicator-CAiYFYIA.js";import"./icon-CVYhSLfO.js";import"./icon-button-Cwc0cqEH.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",R={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
      * {
        box-sizing: border-box;
      }

      forge-content-scaffold::part(header) {
        background: var(--forge-theme-primary-container-minimum);
        padding: 8px;
      }

      forge-content-scaffold::part(footer) {
        background: var(--forge-theme-primary-container-minimum);
        padding: 8px;
      }

      .card-container {
        max-width: 600px;
        margin: 0 auto;
        padding: var(--forge-spacing-medium);
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>t`
      <forge-card style="--forge-card-padding: 0;">
        <forge-content-scaffold>
          <!-- <div slot="before-header-start">before-start-slot</div> -->
          <h2 slot="header-start" class="forge-typography--heading4">Project Details</h2>
          <forge-icon-button aria-label="More actions" slot="header-end">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>
          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <forge-button variant="filled" slot="footer-end">
            <forge-icon slot="start" name="edit"></forge-icon>
            Edit Project
          </forge-button>
        </forge-content-scaffold>
      </forge-card>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const T=["InACard"];export{o as InACard,T as __namedExportsOrder,R as default};
