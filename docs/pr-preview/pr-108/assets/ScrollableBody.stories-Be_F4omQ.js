import{x as t}from"./iframe-Dy9ZuCLJ.js";import{s as o}from"./decorators-BqeNuF5E.js";import{I as n,i as r,k as i,n as a}from"./base-lit-element-CjIWlCjo.js";import"./content-scaffold-Db1ev-K7.js";import"./structured-card-9zuEdp3L.js";import{d as s}from"./index-D_8IXaId.js";import{d as m}from"./index-BSpaDUMw.js";import{d}from"./index-BUil6sxV.js";import{d as p}from"./index-Cx3mqWG-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-F41sgjvV.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-B87wv_Jy.js";import"./async-directive-DUaxLVJQ.js";import"./directive-CJw_OlP2.js";import"./class-map-Cz-aJC0y.js";import"./index-CdADrInV.js";import"./toolbar-BS_s2sZq.js";import"./base-button-adapter-C259_nzw.js";import"./with-default-aria-D3L2nNoI.js";import"./a11y-utils-DGcTJp_D.js";import"./icon-CDOvWK1U.js";s();m();d();p();n.define([r,i,a]);const c="forge-content-scaffold",R={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
