import{x as t}from"./iframe-CoLC7Ddj.js";import{s as o}from"./decorators-C5MMFQYd.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-DnVksJc2.js";import"./content-scaffold-jI0fp0ly.js";import"./structured-card-D8khqQtU.js";import{d as s}from"./index-Dk74H9c0.js";import{d as m}from"./index-X5IwznWq.js";import{d}from"./index-BD78FBOp.js";import{d as p}from"./index-DWg-8V2P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-DFE_Cjil.js";import"./constants-B-hZthFg.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-B7Z3MGJH.js";import"./async-directive-CZeC78Nz.js";import"./directive-CJw_OlP2.js";import"./utils-C1eBehht.js";import"./class-map-Br341N1x.js";import"./index-CCe8DSny.js";import"./toolbar-DVZ9tCKv.js";import"./base-button-adapter-DLCL2B1S.js";import"./focus-indicator-FepI7CHW.js";import"./icon-BcT5yCfR.js";import"./icon-button-BshidE3t.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
