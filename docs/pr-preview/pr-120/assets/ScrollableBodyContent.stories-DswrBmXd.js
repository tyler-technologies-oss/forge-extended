import{x as e}from"./iframe-GrTRO8L1.js";import{s as o}from"./decorators-DJ7vnBOj.js";import{I as r,e as n,n as i}from"./with-default-aria-CAYkoqVR.js";import"./structured-card-BI0LI0QG.js";import{d as a}from"./index-C8SR9MVk.js";import{d as s}from"./index-BWwdvYCc.js";import{d as m}from"./index-CZHUx46f.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DGCB8oWA.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DYGP3HQW.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DUrSKShD.js";import"./when-3fO0zp9C.js";import"./lit-utils-CFhwIMsU.js";import"./async-directive-wEvzFno2.js";import"./index-DStYB2pB.js";import"./base-button-adapter-BKm9wL5-.js";import"./focus-indicator-CxrxGy1T.js";import"./icon-jmlsD8Z8.js";import"./icon-button-BvdXsyIG.js";a();s();m();r.define([n,i]);const p="forge-structured-card",D={title:"Components/Structured Card",component:p,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const E=["ScrollableBodyContent"];export{t as ScrollableBodyContent,E as __namedExportsOrder,D as default};
