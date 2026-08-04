import{x as t}from"./iframe-C7fMUolH.js";import{s as o}from"./decorators-WkUwC5EI.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-271WHlov.js";import"./content-scaffold-BAfRIaYf.js";import"./structured-card-PLx1yJtb.js";import{d as s}from"./index-KTcN2m5r.js";import{d as m}from"./index-DEDT6JJb.js";import{d}from"./index-Dq7PMuyO.js";import{d as p}from"./index-C_hig5gk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-Cuu7LyiG.js";import"./constants-iVqEkiyf.js";import"./a11y-utils-D0XFVk2n.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cf0GtZU2.js";import"./async-directive-Da_1GK_R.js";import"./directive-CJw_OlP2.js";import"./utils-CuBSrgt8.js";import"./class-map-CFhQHarn.js";import"./index-DYnsJCg6.js";import"./toolbar-DU0hNpQq.js";import"./base-button-adapter-DsNiq0wh.js";import"./focus-indicator-Cj5G_QpO.js";import"./icon-DgvKQl-p.js";import"./icon-button-BItzV8X1.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",A={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
