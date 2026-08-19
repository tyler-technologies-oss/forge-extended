import{x as t}from"./iframe-wp6Y4X1Z.js";import{s as e}from"./decorators-DQ67Z-Ls.js";import{I as r,l as n,e as i}from"./with-default-aria-CVqkDYn1.js";import"./content-scaffold-CxoT8_on.js";import"./structured-card-B3K0tKm8.js";import{d as a}from"./index-ClZFo3pG.js";import{d as m}from"./index-CAUfugsS.js";import{d as s}from"./index-Cem7BACe.js";import{d}from"./index--CEVxK40.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-BWI71vpr.js";import"./constants-Uc3PCJIx.js";import"./a11y-utils-B6dbtuCh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-2YrF3CdM.js";import"./async-directive-CXaBKyKn.js";import"./directive-CJw_OlP2.js";import"./class-map-oYqt1_Oz.js";import"./index-DtBLHQ2d.js";import"./toolbar-nkK22NRm.js";import"./base-button-adapter-BSoBWcrC.js";import"./focus-indicator-BatZaZei.js";import"./icon-DbBPEUCr.js";import"./icon-button-CaDNzX8P.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",R={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const T=["InACard"];export{o as InACard,T as __namedExportsOrder,R as default};
