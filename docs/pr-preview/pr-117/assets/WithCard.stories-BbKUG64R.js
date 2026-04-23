import{x as t}from"./iframe-CZPu-D1U.js";import{s as e}from"./decorators-B7YqewMU.js";import{I as r,l as n,e as a}from"./with-default-aria-D7KCfSzQ.js";import"./content-scaffold-BQ3dL5bG.js";import"./structured-card-NyaD42IH.js";import{d as i}from"./index-D8E0CNGE.js";import{d as m}from"./index-BSBCPjw-.js";import{d as s}from"./index-CIsPNzPZ.js";import{d}from"./index-c3BtHen4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-pmch7zZ6.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CsQHwhwS.js";import"./async-directive-ptfc4q4E.js";import"./directive-CJw_OlP2.js";import"./class-map-BS-KI3zP.js";import"./index-LYHbP_0-.js";import"./toolbar-BFrIutW-.js";import"./base-button-adapter-BluJsu7j.js";import"./focus-indicator-Du80mSZE.js";import"./icon-Co630ox_.js";import"./icon-button-CBAAmoKT.js";i();m();s();d();r.define([n,a]);const p="forge-content-scaffold",D={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
