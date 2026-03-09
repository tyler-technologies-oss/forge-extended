import{x as t}from"./iframe-BJgCwms7.js";import{s as o}from"./decorators-DEFtzW0f.js";import{I as r,e as n,a,t as i}from"./with-default-aria-CL4w3eQ3.js";import"./content-scaffold-CU4dOKdC.js";import"./structured-card-By8fvdJm.js";import{d as s}from"./index-BhSLG_zx.js";import{d}from"./index-a1rKQGxq.js";import{d as m}from"./index-DrJxZggi.js";import{d as p}from"./index-CkH_ZBJ2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-gWaXXiXq.js";import"./when-3fO0zp9C.js";import"./async-directive-B8kS1KgH.js";import"./directive-CJw_OlP2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DHNDUa2W.js";import"./index-CXI4dD8F.js";import"./base-button-adapter-CmNx4bX-.js";s();d();m();p();r.define([n,a,i]);const c="forge-content-scaffold",j={title:"Components/Content Scaffold",component:c,tags:[""],decorators:[o(`
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
