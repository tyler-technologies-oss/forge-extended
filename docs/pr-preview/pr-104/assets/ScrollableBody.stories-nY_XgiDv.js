import{x as t}from"./iframe-BHE_MK2N.js";import{s as o}from"./decorators-BjNdz_J2.js";import{I as r,e as n,a,t as i}from"./with-default-aria-BHUCmVN4.js";import"./content-scaffold-Fu_gbUZO.js";import"./structured-card-qTr7X0um.js";import{d as s}from"./index-CNH7jrBs.js";import{d}from"./index-B2oEVnuO.js";import{d as m}from"./index-DkCtin9j.js";import{d as p}from"./index-IW50H0RU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BhXE-oDH.js";import"./when-3fO0zp9C.js";import"./async-directive-Cjyzb09r.js";import"./directive-CJw_OlP2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-GkhfMalX.js";import"./index-Cqw9y5Xb.js";import"./base-button-adapter-By0Le-ke.js";s();d();m();p();r.define([n,a,i]);const c="forge-content-scaffold",j={title:"Components/Content Scaffold",component:c,tags:[""],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const z=["ScrollableBody"];export{e as ScrollableBody,z as __namedExportsOrder,j as default};
