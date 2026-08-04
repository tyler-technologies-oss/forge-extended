import{x as t}from"./iframe-CRRWsFO6.js";import{s as o}from"./decorators-BOUt-MKA.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-Bcp56cC_.js";import"./content-scaffold-COWRcNLn.js";import"./structured-card-uaMeLF9N.js";import{d as s}from"./index-T8a9f3-6.js";import{d as m}from"./index-DUUZrg5-.js";import{d}from"./index-CsscYSZa.js";import{d as p}from"./index-DbgnvWAV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-DORgUmeG.js";import"./constants-DF-bkflD.js";import"./a11y-utils-Dg0RZKx4.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQS22zAF.js";import"./async-directive-BAPHCo-g.js";import"./directive-CJw_OlP2.js";import"./utils-DW1uEvJt.js";import"./class-map-a-EV7ysE.js";import"./index-cp2xh2wR.js";import"./toolbar-bJ2Brz6N.js";import"./base-button-adapter-BW-SKBtx.js";import"./focus-indicator-CbeWKEVM.js";import"./icon-wTiQ3Xju.js";import"./icon-button-D_MzAVsy.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",A={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const F=["ScrollableBody"];export{e as ScrollableBody,F as __namedExportsOrder,A as default};
