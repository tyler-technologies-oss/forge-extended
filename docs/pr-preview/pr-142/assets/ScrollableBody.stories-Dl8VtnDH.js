import{x as t}from"./iframe-CpRQkBMQ.js";import{s as o}from"./decorators-B70T1YDM.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-DCrQ45_b.js";import"./content-scaffold-BinYAOls.js";import"./structured-card-BDF1Jf09.js";import{d as s}from"./index-BaEMFXl9.js";import{d as m}from"./index-M8L1-ckG.js";import{d}from"./index-BPW4qMFY.js";import{d as p}from"./index-CU70dnan.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-qDrs-qqg.js";import"./constants-6XKmeSe-.js";import"./a11y-utils-D6lw3lX1.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-0zZ0wsQ3.js";import"./async-directive-CWZGg9E5.js";import"./directive-CJw_OlP2.js";import"./utils-DNsk33b7.js";import"./class-map-CivAwYMn.js";import"./index-DIPIoF2N.js";import"./toolbar-C9rJMiJt.js";import"./base-button-adapter-CKJ2vgSn.js";import"./focus-indicator-BHpx-Ltw.js";import"./icon-BbBof2IO.js";import"./icon-button-B5ctXg8e.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",A={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
