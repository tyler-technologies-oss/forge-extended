import{x as e}from"./iframe-Divla-Cp.js";import{s as o}from"./decorators-HdD8mzBe.js";import{I as r,e as n,n as i}from"./with-default-aria-BEs3GmpT.js";import"./structured-card-DAukMNtH.js";import{d as a}from"./index-CrpGlOxL.js";import{d as s}from"./index-r3sRvHmc.js";import{d as m}from"./index-B9d_yM6M.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-D-5lT58i.js";import"./constants-DkN7ZGiS.js";import"./a11y-utils-BCt-Wh9D.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DifFCkIf.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CY4HPLmX.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bi1B8CZI.js";import"./async-directive-D1XEcX9j.js";import"./index-DDtCiOcM.js";import"./base-button-adapter-uhdylO1A.js";import"./focus-indicator-CDDzSaVo.js";import"./icon-C6Jpggai.js";import"./icon-button-CTYCVtl8.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const P=["ScrollableBodyContent"];export{t as ScrollableBodyContent,P as __namedExportsOrder,O as default};
