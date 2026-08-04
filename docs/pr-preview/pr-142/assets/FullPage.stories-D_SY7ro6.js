import{x as e}from"./iframe-Bi2jjneX.js";import{s as t}from"./decorators-DNY5vP3B.js";import{I as r,n,e as a,d as i}from"./with-default-aria-Bp7BOLsO.js";import"./content-scaffold-EaNV-Q01.js";import"./structured-card-DHVvfmbA.js";import{d as s}from"./index-Cfez67j6.js";import{d as m}from"./index-DHUKMcv2.js";import{d as p}from"./index-BCE9tY8-.js";import{d}from"./index-DWa_oEDo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-eW29fe97.js";import"./constants-Be1rccdx.js";import"./a11y-utils-DwvBqvsn.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cv2eJcz_.js";import"./async-directive-BIDRqgTX.js";import"./directive-CJw_OlP2.js";import"./utils-CcBW4sMr.js";import"./class-map-O7KlQ7_y.js";import"./index-Du7tMeRQ.js";import"./toolbar-DFEC9ZmG.js";import"./base-button-adapter-C8jd6JO5.js";import"./focus-indicator-DOPW3N_b.js";import"./icon-Ctp2z37r.js";import"./icon-button-wHfoQc6h.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",q={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
      body {
        height: 100dvh;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #fafafa;
      }
      
      p {
        padding: 0;
        margin: 0;
      }

      #storybook-root,
      #root-inner {
        height: 100%;
      }
    `)],render:()=>e`
      <forge-content-scaffold>
        <forge-icon-button aria-label="Back" slot="before-header-start">
          <forge-icon name="arrow_back"></forge-icon>
        </forge-icon-button>
        <h2 slot="header-start" class="forge-typography--heading4">Project Details</h2>
        <forge-icon-button aria-label="More actions" slot="header-end">
          <forge-icon name="more_vert"></forge-icon>
        </forge-icon-button>
        <div slot="body">
          <forge-card>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </forge-card>
        </div>
        <forge-button variant="filled" slot="footer-end">
          <forge-icon slot="start" name="save"></forge-icon>
          Save
        </forge-button>
      </forge-content-scaffold>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const z=["FullPage"];export{o as FullPage,z as __namedExportsOrder,q as default};
