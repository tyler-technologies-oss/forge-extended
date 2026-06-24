import{x as t}from"./iframe-BiqOLCym.js";import{s as o}from"./decorators-iAm4AAKN.js";import{I as n,l as r,e as i,n as a}from"./with-default-aria-B9u_I1Vb.js";import"./content-scaffold-OJl7znny.js";import"./structured-card-C-CEjD1m.js";import{d as s}from"./index-DAvhSMO5.js";import{d as m}from"./index-v9gmZ9YL.js";import{d}from"./index-nU3wy1kV.js";import{d as p}from"./index-BvCHHo4A.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CqaTs5fS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CpR51AY-.js";import"./async-directive-BRtB7_Lq.js";import"./directive-CJw_OlP2.js";import"./class-map-DwadfE0F.js";import"./index-P5eP_rHx.js";import"./toolbar-CD-9rqEB.js";import"./base-button-adapter-Dub1mvwR.js";import"./focus-indicator-Dd8QgJhF.js";import"./icon-CqcKSKcV.js";import"./icon-button-CKIgkTLl.js";s();m();d();p();n.define([r,i,a]);const c="forge-content-scaffold",R={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
