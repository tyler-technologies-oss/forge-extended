import{x as t}from"./iframe-DJJrKURQ.js";import{s as e}from"./decorators-C6ZV6Agc.js";import{I as r,i as n,k as a}from"./base-lit-element-vmXY1wJz.js";import"./content-scaffold-DysJf_j-.js";import"./structured-card-IWkKjKw-.js";import{d as i}from"./index-Lr5-ziNB.js";import{d as m}from"./index-mOTL_MfX.js";import{d as s}from"./index-BBCl63Nt.js";import{d}from"./index-CG8S_DSJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BA7R9qv6.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CyawYGe9.js";import"./async-directive-CR4E1cQb.js";import"./directive-CJw_OlP2.js";import"./class-map-B4e2qcDP.js";import"./index-BCxpDdaq.js";import"./toolbar-BtJ9Y1gR.js";import"./base-button-adapter-qbbVp5fc.js";import"./with-default-aria-DcEun3SM.js";import"./a11y-utils-CcnpHkzJ.js";import"./icon-CoutffEd.js";i();m();s();d();r.define([n,a]);const p="forge-content-scaffold",D={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
