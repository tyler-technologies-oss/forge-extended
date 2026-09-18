import{x as t}from"./iframe-CSr27Gi9.js";import{s as o}from"./decorators-jH5mbsPj.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-DqAXseBi.js";import"./content-scaffold-NcH_mt3m.js";import"./structured-card-puttL6qq.js";import{d as s}from"./index-7VsvyswD.js";import{d as m}from"./index-C0ZwjHuE.js";import{d}from"./index-XImc70I8.js";import{d as p}from"./index-DX-PHoPv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-DDaW1mI9.js";import"./constants-B0KOFcFf.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BDYppvBO.js";import"./async-directive-DdY3TFlF.js";import"./directive-CJw_OlP2.js";import"./utils-CaDkb-CY.js";import"./class-map-B6tseOWg.js";import"./index-S8W-aZjQ.js";import"./toolbar-B4e5c0Va.js";import"./base-button-adapter-_1Vo15z1.js";import"./focus-indicator-0djWxlSZ.js";import"./icon-C2DgJ4Of.js";import"./icon-button-CkTpJu7r.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
