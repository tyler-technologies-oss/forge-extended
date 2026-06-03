import{x as e}from"./iframe-C44ATlN0.js";import{s as o}from"./decorators-cT0On30w.js";import{I as r,f as n,o as i}from"./with-default-aria-DEeb_wyb.js";import"./structured-card-B-sMzFQQ.js";import{d as a}from"./index-BYMSFbIc.js";import{d as s}from"./index-DNmQ7YPe.js";import{d as m}from"./index-B1JO16kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DSgRJEDh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-9k28UoYM.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-kKEurgLr.js";import"./when-3fO0zp9C.js";import"./lit-utils-C7ZpBEv9.js";import"./async-directive-CKU25sS1.js";import"./index-B4vRstRi.js";import"./base-button-adapter-DJQ79g8S.js";import"./focus-indicator-CzWXVDLT.js";import"./icon-j-OxqPb8.js";import"./icon-button-D2WVgfRC.js";a();s();m();r.define([n,i]);const p="forge-structured-card",D={title:"Components/Structured Card",component:p,decorators:[o(`
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
