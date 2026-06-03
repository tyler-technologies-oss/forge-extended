import{x as t}from"./iframe-C44ATlN0.js";import{s as e}from"./decorators-cT0On30w.js";import{I as r,m as n,f as a}from"./with-default-aria-DEeb_wyb.js";import"./content-scaffold-kKEurgLr.js";import"./structured-card-B-sMzFQQ.js";import{d as i}from"./index-CkV1r-DH.js";import{d as m}from"./index-BYMSFbIc.js";import{d as s}from"./index-DNmQ7YPe.js";import{d}from"./index-B1JO16kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DSgRJEDh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-C7ZpBEv9.js";import"./async-directive-CKU25sS1.js";import"./directive-CJw_OlP2.js";import"./class-map-9k28UoYM.js";import"./index-B4vRstRi.js";import"./toolbar-8MgjLBcO.js";import"./base-button-adapter-DJQ79g8S.js";import"./focus-indicator-CzWXVDLT.js";import"./icon-j-OxqPb8.js";import"./icon-button-D2WVgfRC.js";i();m();s();d();r.define([n,a]);const p="forge-content-scaffold",D={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const O=["InACard"];export{o as InACard,O as __namedExportsOrder,D as default};
