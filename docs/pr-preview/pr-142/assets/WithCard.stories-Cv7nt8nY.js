import{x as t}from"./iframe-Bi2jjneX.js";import{s as e}from"./decorators-DNY5vP3B.js";import{I as r,l as n,e as i}from"./with-default-aria-Bp7BOLsO.js";import"./content-scaffold-EaNV-Q01.js";import"./structured-card-DHVvfmbA.js";import{d as a}from"./index-Cfez67j6.js";import{d as m}from"./index-DHUKMcv2.js";import{d as s}from"./index-BCE9tY8-.js";import{d}from"./index-DWa_oEDo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-eW29fe97.js";import"./constants-Be1rccdx.js";import"./a11y-utils-DwvBqvsn.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cv2eJcz_.js";import"./async-directive-BIDRqgTX.js";import"./directive-CJw_OlP2.js";import"./utils-CcBW4sMr.js";import"./class-map-O7KlQ7_y.js";import"./index-Du7tMeRQ.js";import"./toolbar-DFEC9ZmG.js";import"./base-button-adapter-C8jd6JO5.js";import"./focus-indicator-DOPW3N_b.js";import"./icon-Ctp2z37r.js";import"./icon-button-wHfoQc6h.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",V={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
