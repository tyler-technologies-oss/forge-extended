import{x as t}from"./iframe-B0AtGDgb.js";import{s as e}from"./decorators-BwfRRHRp.js";import{I as r,l as n,e as i}from"./with-default-aria-COcIHYuM.js";import"./content-scaffold-BWb_KxPt.js";import"./structured-card-BQl7CIfV.js";import{d as a}from"./index-Ct2UX_MZ.js";import{d as m}from"./index-D9wBivic.js";import{d as s}from"./index-DPOH3Jf1.js";import{d}from"./index-CCtbLpO9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-DA12Qcjc.js";import"./constants-gS8DU6NI.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cqgx-vau.js";import"./async-directive-DQ2_zMza.js";import"./directive-CJw_OlP2.js";import"./utils-CQ1-LirU.js";import"./class-map-B8dOviBx.js";import"./index-CQflxhl7.js";import"./toolbar-p7519Qea.js";import"./base-button-adapter-ZAAtK1Ey.js";import"./focus-indicator-B5cqEtEi.js";import"./icon-D_OqDmAk.js";import"./icon-button-DbRGp_sD.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",R={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
