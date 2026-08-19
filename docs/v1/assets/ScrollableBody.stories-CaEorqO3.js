import{x as t}from"./iframe-BNRzrxvp.js";import{s as o}from"./decorators-Cj6lec-7.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-CKJa4TQ6.js";import"./content-scaffold-D76I5FTv.js";import"./structured-card-D49dMoFJ.js";import{d as s}from"./index-67sEGiTV.js";import{d as m}from"./index-_b89N1_M.js";import{d}from"./index-D6LEMRuS.js";import{d as p}from"./index-Cfk3cKct.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BuEtX1ez.js";import"./constants-ClOpupSA.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BC9rQbmr.js";import"./async-directive-D3BBrAEV.js";import"./directive-CJw_OlP2.js";import"./utils-DJdwSxH5.js";import"./class-map-BV2Dw1zj.js";import"./index-CcsIs4V7.js";import"./toolbar-CJcr3FPS.js";import"./base-button-adapter-VZYV8pMZ.js";import"./focus-indicator-CfBV9G0k.js";import"./icon-C6I8EL-q.js";import"./icon-button-DrEAubop.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
