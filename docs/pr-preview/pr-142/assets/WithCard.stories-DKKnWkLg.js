import{x as t}from"./iframe-CpRQkBMQ.js";import{s as e}from"./decorators-B70T1YDM.js";import{I as r,l as n,e as i}from"./with-default-aria-DCrQ45_b.js";import"./content-scaffold-BinYAOls.js";import"./structured-card-BDF1Jf09.js";import{d as a}from"./index-BaEMFXl9.js";import{d as m}from"./index-M8L1-ckG.js";import{d as s}from"./index-BPW4qMFY.js";import{d}from"./index-CU70dnan.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-qDrs-qqg.js";import"./constants-6XKmeSe-.js";import"./a11y-utils-D6lw3lX1.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-0zZ0wsQ3.js";import"./async-directive-CWZGg9E5.js";import"./directive-CJw_OlP2.js";import"./utils-DNsk33b7.js";import"./class-map-CivAwYMn.js";import"./index-DIPIoF2N.js";import"./toolbar-C9rJMiJt.js";import"./base-button-adapter-CKJ2vgSn.js";import"./focus-indicator-BHpx-Ltw.js";import"./icon-BbBof2IO.js";import"./icon-button-B5ctXg8e.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",V={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
      * {
        box-sizing: border-box;
      }

      forge-content-scaffold::part(header) {
        background: var(--forge-theme-primary-container-minimum);
        padding: 8px;
      }

      forge-content-scaffold::part(footer) {
        background: var(--forge-theme-primary-container-minimum);
        padding: 8px;
      }

      .card-container {
        max-width: 600px;
        margin: 0 auto;
        padding: var(--forge-spacing-medium);
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>t`
      <forge-card style="--forge-card-padding: 0;">
        <forge-content-scaffold>
          <!-- <div slot="before-header-start">before-start-slot</div> -->
          <h2 slot="header-start" class="forge-typography--heading4">Project Details</h2>
          <forge-icon-button aria-label="More actions" slot="header-end">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>
          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <forge-button variant="filled" slot="footer-end">
            <forge-icon slot="start" name="edit"></forge-icon>
            Edit Project
          </forge-button>
        </forge-content-scaffold>
      </forge-card>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const q=["InACard"];export{o as InACard,q as __namedExportsOrder,V as default};
