import{x as t}from"./iframe-BSkrS8By.js";import{s as o}from"./decorators-DwJpY63K.js";import{I as n,l as r,e as i,n as a}from"./with-default-aria-BWwvJ9Lo.js";import"./content-scaffold-Wvay5j8Z.js";import"./structured-card-luGuxjLr.js";import{d as s}from"./index-3ddXEUd6.js";import{d as m}from"./index-8MCv1UnX.js";import{d}from"./index-BKh-270t.js";import{d as p}from"./index-DUzO_SJj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CXiCJegp.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Q5cAF7hS.js";import"./async-directive-B8ouUbHu.js";import"./directive-CJw_OlP2.js";import"./class-map-CBDFGRMD.js";import"./index-BA2iSPP3.js";import"./toolbar-_v_vjmTf.js";import"./base-button-adapter-wUPioLqY.js";import"./focus-indicator-B3PaEGqS.js";import"./icon-CvWIsA02.js";import"./icon-button-D1WnB9XE.js";s();m();d();p();n.define([r,i,a]);const c="forge-content-scaffold",R={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const T=["ScrollableBody"];export{e as ScrollableBody,T as __namedExportsOrder,R as default};
