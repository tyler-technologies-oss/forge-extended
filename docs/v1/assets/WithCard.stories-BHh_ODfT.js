import{x as t}from"./iframe-DJZ_Mhdn.js";import{s as e}from"./decorators-DGNRYNou.js";import{I as r,l as n,e as i}from"./with-default-aria-BF8b74LB.js";import"./content-scaffold-B_1dm7y5.js";import"./structured-card-rpsPlFhQ.js";import{d as a}from"./index-3uDzBoil.js";import{d as m}from"./index-CV7Ac1pk.js";import{d as s}from"./index-CFkkeAfN.js";import{d}from"./index-VFdSlEYS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-zoTee3dw.js";import"./constants-DU7YENlu.js";import"./a11y-utils-BdEYBLk0.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bv0lYt6h.js";import"./async-directive-87g-kMN-.js";import"./directive-CJw_OlP2.js";import"./class-map-5ViRLiBk.js";import"./index-B0ZBKArx.js";import"./toolbar-gf0sVjE8.js";import"./base-button-adapter-JTDHV01r.js";import"./focus-indicator-CUZ9-AXC.js";import"./icon-Cj5Dx5Vx.js";import"./icon-button-eFRgNG73.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",R={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
