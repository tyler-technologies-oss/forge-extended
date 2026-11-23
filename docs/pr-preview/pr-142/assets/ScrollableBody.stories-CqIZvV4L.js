import{x as t}from"./iframe-aIta0XjW.js";import{s as o}from"./decorators-D2VId2oZ.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-B18WzXUc.js";import"./content-scaffold-DP1HJTSM.js";import"./structured-card-3aH3RvdT.js";import{d as s}from"./index-DFMht-Jr.js";import{d as m}from"./index-D28XLDrM.js";import{d}from"./index-d0_CFtxH.js";import{d as p}from"./index-HhQTP63o.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-BI5goMsi.js";import"./constants-C89t2nXh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-yhn8fLQC.js";import"./async-directive-B4pUYcG0.js";import"./directive-CJw_OlP2.js";import"./utils-qX0sCc6t.js";import"./class-map-nJCrVyER.js";import"./index-D37AZnfP.js";import"./toolbar-BOgCGGCx.js";import"./base-button-adapter-CZogyW6-.js";import"./focus-indicator-DCygggO6.js";import"./icon-COisYVme.js";import"./icon-button-B6dAQuk5.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
