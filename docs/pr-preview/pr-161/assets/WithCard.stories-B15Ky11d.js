import{x as t}from"./iframe-CxQwQddN.js";import{s as e}from"./decorators-CcQvquqg.js";import{I as r,l as n,e as i}from"./with-default-aria-CVu2yw52.js";import"./content-scaffold-v25MuZ1a.js";import"./structured-card-BfB82lSW.js";import{d as a}from"./index-agkHFfgl.js";import{d as m}from"./index-BvsF0Siy.js";import{d as s}from"./index-6c4Ag9Pi.js";import{d}from"./index-TkdPUO8k.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-C5QY3EhE.js";import"./constants-C5b45D2K.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CL8MOWRP.js";import"./async-directive-paHAad09.js";import"./directive-CJw_OlP2.js";import"./utils-DAqdXIKN.js";import"./class-map-y-43vWkH.js";import"./index-BDxGwu8F.js";import"./toolbar-4i-Gwf7G.js";import"./base-button-adapter-B_nyIIrV.js";import"./focus-indicator-DHnEotdq.js";import"./icon-BDgIgzOI.js";import"./icon-button-CR-K_XB1.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",R={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
