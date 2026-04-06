import{x as t}from"./iframe-B2yBCF4T.js";import{s as o}from"./decorators-CmBLaqe8.js";import{I as n,l as r,e as i,n as a}from"./with-default-aria-Cy4LwxKl.js";import"./content-scaffold-hctf1GnA.js";import"./structured-card-DHsrGc5U.js";import{d as s}from"./index-Bk2Ay9ES.js";import{d}from"./index-Bvr1X5yu.js";import{d as m}from"./index-fWoOoD-c.js";import{d as p}from"./index-DJBjPYWg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BVE7gEr7.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DtEkOKL2.js";import"./async-directive-CHjnU3XE.js";import"./directive-CJw_OlP2.js";import"./class-map-CBsw2Rh9.js";import"./index-Co4nQ3Ql.js";import"./toolbar-BC6foDCO.js";import"./base-button-adapter-mA1es0a2.js";import"./focus-indicator-B2-T0_33.js";import"./icon-gxS78_8S.js";s();d();m();p();n.define([r,i,a]);const c="forge-content-scaffold",P={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const R=["ScrollableBody"];export{e as ScrollableBody,R as __namedExportsOrder,P as default};
