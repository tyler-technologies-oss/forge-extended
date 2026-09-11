import{x as t}from"./iframe-CYs4rUqc.js";import{s as e}from"./decorators-D2WRb3SP.js";import{I as r,m as n,f as i}from"./with-default-aria-IIDqe1FM.js";import"./content-scaffold-BTl4Y1k1.js";import"./structured-card-B7pylLaO.js";import{d as a}from"./index-DUZlX8T8.js";import{d as m}from"./index-Bga8EQCr.js";import{d as s}from"./index-BUFnbwZi.js";import{d}from"./index-CT7xPl9a.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CDYWBB4R.js";import"./constants-BPzvPAwC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-D5rm5sHA.js";import"./async-directive-BlkTbESp.js";import"./directive-CJw_OlP2.js";import"./utils-D4Tmth0h.js";import"./class-map-DcButXsH.js";import"./index-Cna3cTfO.js";import"./toolbar-D5rv4FEn.js";import"./base-button-adapter-NVSd6npM.js";import"./focus-indicator-CYx5OX-M.js";import"./icon-0n1M6L10.js";import"./icon-button-DvWO3SvX.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",R={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
