import{x as t}from"./iframe-BZR3avPy.js";import{s as e}from"./decorators-Btj57eUi.js";import{I as r,l as n,e as i}from"./with-default-aria-DrGQh3rA.js";import"./content-scaffold-BiY-VgIw.js";import"./structured-card-CBV2m1K1.js";import{d as a}from"./index--AiHFgJZ.js";import{d as m}from"./index-CCo5mcVb.js";import{d as s}from"./index-DSF_ghjH.js";import{d}from"./index-HGkRbmOl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-V1xjMoTa.js";import"./constants-Dczm6517.js";import"./a11y-utils-B2lvl91r.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-B7mGwFLc.js";import"./async-directive-CduYbs5w.js";import"./directive-CJw_OlP2.js";import"./utils-BeUVm7TG.js";import"./class-map-CBmZDkCE.js";import"./index-BxeetAA7.js";import"./toolbar-twtT2uP-.js";import"./base-button-adapter-BBLLx2xC.js";import"./focus-indicator-BBF39Pup.js";import"./icon-CAC4534v.js";import"./icon-button-DD2_Bu8d.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",V={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
