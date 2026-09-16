import{x as t}from"./iframe-Dms13Zq_.js";import{s as o}from"./decorators-CvzrAun6.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-DIEogLWd.js";import"./content-scaffold-BlhSwhPs.js";import"./structured-card-LD1Pi9li.js";import{d as s}from"./index-B0--X1Xu.js";import{d as m}from"./index-BVWKZWHV.js";import{d}from"./index-DABgc_rx.js";import{d as p}from"./index-CHjFsM_0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-_XMhrF5O.js";import"./constants-VXsM_ZgY.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DjheCZrT.js";import"./async-directive-D4vy_6ok.js";import"./directive-CJw_OlP2.js";import"./utils-CKW-Y7iA.js";import"./class-map-B_T3H8Jb.js";import"./index-C6Gd5NcK.js";import"./toolbar-Dnk_NqpW.js";import"./base-button-adapter-DV_yZ0yv.js";import"./focus-indicator-B-JnphJ-.js";import"./icon-DOY4ZfAJ.js";import"./icon-button-DP_Lk4AN.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
