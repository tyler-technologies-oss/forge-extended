import{x as e}from"./iframe-D_NpdGMW.js";import{s as o}from"./decorators-BGtlJFC5.js";import{I as r,f as n,o as i}from"./with-default-aria-QQHkHnUD.js";import"./structured-card-Dm2Fy9jW.js";import{d as a}from"./index-cQL53Ya2.js";import{d as s}from"./index-DZYfwwJc.js";import{d as m}from"./index-D1Q40_o8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CyYN7QVE.js";import"./constants-B5g2L9LN.js";import"./utils-Duph8ic8.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-pH4tyynp.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-B20VKqCn.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQdM5MP4.js";import"./async-directive-CI_QSR1Q.js";import"./index-q9xROInv.js";import"./base-button-adapter-BO3BfEkZ.js";import"./focus-indicator-DP9wjAbI.js";import"./button-constants-0Bfcv2FI.js";import"./icon-Dd_9Vvpg.js";import"./icon-button-4GgzV-1p.js";a();s();m();r.define([n,i]);const p="forge-structured-card",P={title:"Components/Structured Card",component:p,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const R=["ScrollableBodyContent"];export{t as ScrollableBodyContent,R as __namedExportsOrder,P as default};
