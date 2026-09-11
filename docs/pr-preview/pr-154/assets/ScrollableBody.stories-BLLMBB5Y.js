import{x as t}from"./iframe-CYs4rUqc.js";import{s as o}from"./decorators-D2WRb3SP.js";import{I as r,m as n,f as i,o as a}from"./with-default-aria-IIDqe1FM.js";import"./content-scaffold-BTl4Y1k1.js";import"./structured-card-B7pylLaO.js";import{d as s}from"./index-DUZlX8T8.js";import{d as m}from"./index-Bga8EQCr.js";import{d}from"./index-BUFnbwZi.js";import{d as p}from"./index-CT7xPl9a.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CDYWBB4R.js";import"./constants-BPzvPAwC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-D5rm5sHA.js";import"./async-directive-BlkTbESp.js";import"./directive-CJw_OlP2.js";import"./utils-D4Tmth0h.js";import"./class-map-DcButXsH.js";import"./index-Cna3cTfO.js";import"./toolbar-D5rv4FEn.js";import"./base-button-adapter-NVSd6npM.js";import"./focus-indicator-CYx5OX-M.js";import"./icon-0n1M6L10.js";import"./icon-button-DvWO3SvX.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
