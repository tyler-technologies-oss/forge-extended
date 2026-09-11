import{x as t}from"./iframe-D_NpdGMW.js";import{s as o}from"./decorators-BGtlJFC5.js";import{I as r,m as n,f as i,o as a}from"./with-default-aria-QQHkHnUD.js";import"./content-scaffold-B20VKqCn.js";import"./structured-card-Dm2Fy9jW.js";import{d as s}from"./index-DCI5EXVu.js";import{d as m}from"./index-cQL53Ya2.js";import{d}from"./index-DZYfwwJc.js";import{d as p}from"./index-D1Q40_o8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CyYN7QVE.js";import"./constants-B5g2L9LN.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQdM5MP4.js";import"./async-directive-CI_QSR1Q.js";import"./directive-CJw_OlP2.js";import"./utils-Duph8ic8.js";import"./class-map-pH4tyynp.js";import"./index-q9xROInv.js";import"./toolbar-B4ibBQfC.js";import"./base-button-adapter-BO3BfEkZ.js";import"./focus-indicator-DP9wjAbI.js";import"./button-constants-0Bfcv2FI.js";import"./icon-Dd_9Vvpg.js";import"./icon-button-4GgzV-1p.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",q={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const A=["ScrollableBody"];export{e as ScrollableBody,A as __namedExportsOrder,q as default};
