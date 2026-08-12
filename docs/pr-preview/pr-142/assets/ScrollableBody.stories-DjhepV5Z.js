import{x as t}from"./iframe-BONfeRbS.js";import{s as o}from"./decorators-CF2_DgP2.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-BX23kPsM.js";import"./content-scaffold-BEx6HTWz.js";import"./structured-card-Cbzr-2-W.js";import{d as s}from"./index-Dahtyj0_.js";import{d as m}from"./index-DkaTdWA1.js";import{d}from"./index-UGwEVcKj.js";import{d as p}from"./index-BbuEY8TC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-BdDPgXkM.js";import"./constants-DnUFLkc1.js";import"./a11y-utils-CPysxFLW.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DJLuWaYS.js";import"./async-directive-CTteLgwZ.js";import"./directive-CJw_OlP2.js";import"./utils-D9p4bUJ4.js";import"./class-map-DP5Wz34w.js";import"./index-DQWtLKbM.js";import"./toolbar-aubVMfRE.js";import"./base-button-adapter-DnYus6sP.js";import"./focus-indicator-COKKqZBY.js";import"./icon-C7xslxSO.js";import"./icon-button-OYsEtGQk.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",A={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
