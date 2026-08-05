import{x as t}from"./iframe-ULyB_0Dy.js";import{s as e}from"./decorators-CKHwrViY.js";import{I as r,l as n,e as i}from"./with-default-aria-CpHhlmZ0.js";import"./content-scaffold-CO77zMEz.js";import"./structured-card-B8p37Ihy.js";import{d as a}from"./index-pBIS1Ift.js";import{d as m}from"./index-CWnIIei3.js";import{d as s}from"./index-D9WzwKfJ.js";import{d}from"./index-CkUW9AMb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-CE0UCYUK.js";import"./constants-CCgJ39ZP.js";import"./a11y-utils-BDdgGlMC.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BE-mNjuD.js";import"./async-directive-BgnHwQy-.js";import"./directive-CJw_OlP2.js";import"./utils-XRW8HtJy.js";import"./class-map-BEBg8r6d.js";import"./index-Caovf1aY.js";import"./toolbar-FIo7vZzp.js";import"./base-button-adapter-B415vPD3.js";import"./focus-indicator-C3NuoBrz.js";import"./icon-DfG7xEKj.js";import"./icon-button-CbaSmUOT.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",V={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
