import{x as t}from"./iframe-Bmpo7mK4.js";import{s as o}from"./decorators-D1xcKosb.js";import{I as n,e as r,a,t as s}from"./with-default-aria-CqHJAmJ_.js";import"./content-scaffold-CeiNuTct.js";import"./structured-card-COxCKnW9.js";import{d as i}from"./index-BinP8Lry.js";import{d}from"./index-BwGY1Jp9.js";import{d as m}from"./index-DW5czcRD.js";import{d as p}from"./index-DPgfpJZF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DWkFozGy.js";import"./when-3fO0zp9C.js";import"./async-directive-a_IyjKek.js";import"./directive-CJw_OlP2.js";import"./style-map-F9UlsvX2.js";import"./index-BJPpmeSU.js";import"./base-button-adapter-A8-Yu6iA.js";i();d();m();p();n.define([r,a,s]);const c="forge-content-scaffold",E={title:"Components/Content Scaffold",component:c,tags:[""],decorators:[o(`
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
            <!-- <div slot="before-header-start">before-start-slot</div> -->
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const M=["ScrollableBody"];export{e as ScrollableBody,M as __namedExportsOrder,E as default};
