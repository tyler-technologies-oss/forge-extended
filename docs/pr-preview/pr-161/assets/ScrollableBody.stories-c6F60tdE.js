import{x as t}from"./iframe-CWwUEUts.js";import{s as o}from"./decorators-CxeU5LQv.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-BmTvV3yR.js";import"./content-scaffold-DG0hCdb_.js";import"./structured-card-0aQxf7tJ.js";import{d as s}from"./index-Dg2dkoab.js";import{d as m}from"./index-ChKW5gpP.js";import{d}from"./index-2qwXV0PB.js";import{d as p}from"./index-Cbrfqhkz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-CS0cJgNw.js";import"./constants-Be6bX2Od.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQvAh1tX.js";import"./async-directive-D82nVt7w.js";import"./directive-CJw_OlP2.js";import"./utils-ByLsL7Wi.js";import"./class-map-BKQOMfSV.js";import"./index-CYpxGDOm.js";import"./toolbar-CclkbabE.js";import"./base-button-adapter-CiMVbNdb.js";import"./focus-indicator-CAiYFYIA.js";import"./icon-CVYhSLfO.js";import"./icon-button-Cwc0cqEH.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
      * {
        box-sizing: border-box;
      }


      .card-container {
        max-width: 360px;
   
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>t`
      <div class="card-container">
        <forge-card style="--forge-card-padding: 0;">
          <forge-content-scaffold style="--forge-content-scaffold-body-height: 200px;">
            <div slot="header-start">Project Details</div>
            <forge-icon-button aria-label="More actions" slot="header-end">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
            <div slot="body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <forge-button variant="filled" slot="footer-end">
              <forge-icon slot="start" name="save"></forge-icon>
              Save
            </forge-button>
          </forge-content-scaffold>
        </forge-card>
      </div>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const q=["ScrollableBody"];export{e as ScrollableBody,q as __namedExportsOrder,V as default};
