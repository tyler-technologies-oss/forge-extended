import{x as e}from"./iframe-Bi2jjneX.js";import{s as o}from"./decorators-DNY5vP3B.js";import{I as r,e as n,n as i}from"./with-default-aria-Bp7BOLsO.js";import"./structured-card-DHVvfmbA.js";import{d as a}from"./index-DHUKMcv2.js";import{d as s}from"./index-BCE9tY8-.js";import{d as m}from"./index-DWa_oEDo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-eW29fe97.js";import"./constants-Be1rccdx.js";import"./a11y-utils-DwvBqvsn.js";import"./custom-element-C028faeO.js";import"./utils-CcBW4sMr.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-O7KlQ7_y.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-EaNV-Q01.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cv2eJcz_.js";import"./async-directive-BIDRqgTX.js";import"./index-Du7tMeRQ.js";import"./base-button-adapter-C8jd6JO5.js";import"./focus-indicator-DOPW3N_b.js";import"./icon-Ctp2z37r.js";import"./icon-button-wHfoQc6h.js";a();s();m();r.define([n,i]);const p="forge-structured-card",R={title:"Components/Structured Card",component:p,decorators:[o(`
      * {
        box-sizing: border-box;
      }

      .card-container {
        max-width: 360px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>e`
      <div class="card-container">
        <forge-structured-card style="--forge-structured-card-body-height: 200px;">
          <span slot="title">Project Details</span>
          <forge-icon-button aria-label="More actions" slot="after-header-actions">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>
          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const V=["ScrollableBodyContent"];export{t as ScrollableBodyContent,V as __namedExportsOrder,R as default};
