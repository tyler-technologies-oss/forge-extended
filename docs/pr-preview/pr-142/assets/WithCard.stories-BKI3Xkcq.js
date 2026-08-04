import{x as t}from"./iframe-CRRWsFO6.js";import{s as e}from"./decorators-BOUt-MKA.js";import{I as r,l as n,e as i}from"./with-default-aria-Bcp56cC_.js";import"./content-scaffold-COWRcNLn.js";import"./structured-card-uaMeLF9N.js";import{d as a}from"./index-T8a9f3-6.js";import{d as m}from"./index-DUUZrg5-.js";import{d as s}from"./index-CsscYSZa.js";import{d}from"./index-DbgnvWAV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-DORgUmeG.js";import"./constants-DF-bkflD.js";import"./a11y-utils-Dg0RZKx4.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQS22zAF.js";import"./async-directive-BAPHCo-g.js";import"./directive-CJw_OlP2.js";import"./utils-DW1uEvJt.js";import"./class-map-a-EV7ysE.js";import"./index-cp2xh2wR.js";import"./toolbar-bJ2Brz6N.js";import"./base-button-adapter-BW-SKBtx.js";import"./focus-indicator-CbeWKEVM.js";import"./icon-wTiQ3Xju.js";import"./icon-button-D_MzAVsy.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",V={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
