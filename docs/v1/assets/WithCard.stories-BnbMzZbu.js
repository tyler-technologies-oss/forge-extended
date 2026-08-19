import{x as t}from"./iframe-CuIWC8FI.js";import{s as e}from"./decorators-CKAbKWa9.js";import{I as r,l as n,e as i}from"./with-default-aria-CMkXkpFU.js";import"./content-scaffold-DUNmMSE4.js";import"./structured-card-DsQuev3c.js";import{d as a}from"./index-BL9EcY2_.js";import{d as m}from"./index-eMaK3uUL.js";import{d as s}from"./index-BV6pRYsg.js";import{d}from"./index-CfG6fK2G.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-DimA5s9Y.js";import"./constants-DlZthJ05.js";import"./a11y-utils-Pqf8QPAB.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-B9FU4eDS.js";import"./async-directive-Dl5vg_mB.js";import"./directive-CJw_OlP2.js";import"./class-map-sZ8tE-fV.js";import"./index-CZv6At9A.js";import"./toolbar-DbFaLPUg.js";import"./base-button-adapter-BMH4q6e1.js";import"./focus-indicator-olkUSk6R.js";import"./icon-Bq-EUyj3.js";import"./icon-button-CimfH_dc.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",R={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
