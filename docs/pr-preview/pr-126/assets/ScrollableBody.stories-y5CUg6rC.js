import{x as t}from"./iframe-BMmxjS7K.js";import{s as o}from"./decorators-CR9RZ1DV.js";import{I as n,l as r,e as i,n as a}from"./with-default-aria-DUm9cFDb.js";import"./content-scaffold-yFm0t9et.js";import"./structured-card-CZyz745l.js";import{d as s}from"./index-CCdWMFaE.js";import{d as m}from"./index-CmABe4zC.js";import{d}from"./index-CuaVTp8w.js";import{d as p}from"./index-CH4_EQDb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DxKBK66z.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-vFe5Fey2.js";import"./async-directive-C8AHgdeZ.js";import"./directive-CJw_OlP2.js";import"./class-map-CNMADvTA.js";import"./index-CvgiCefo.js";import"./toolbar-CHfb1Iys.js";import"./base-button-adapter-DVfHKjLr.js";import"./focus-indicator-BZurIPmT.js";import"./icon-DHP83XnC.js";import"./icon-button-B-lwPuxH.js";s();m();d();p();n.define([r,i,a]);const c="forge-content-scaffold",R={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
