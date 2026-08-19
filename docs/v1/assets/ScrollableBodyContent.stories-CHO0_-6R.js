import{x as e}from"./iframe-C7JWi23m.js";import{s as o}from"./decorators-DBsa8SrM.js";import{I as r,e as n,n as i}from"./with-default-aria-K3PJ0_SZ.js";import"./structured-card-ALvzq-X7.js";import{d as a}from"./index-BW3nIMKg.js";import{d as s}from"./index-B32YAwfk.js";import{d as m}from"./index-B8HFBbmF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-DwRFlNSf.js";import"./constants-DPUAL7_7.js";import"./a11y-utils-DHYwHs7X.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DtSCGelo.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CA5uZtOr.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bj7toZcH.js";import"./async-directive-CknBIbyc.js";import"./index-DD9qsl0c.js";import"./base-button-adapter-CIPT0ae9.js";import"./focus-indicator-Bgm9uuur.js";import"./icon-D1pxQFQj.js";import"./icon-button-plYv35EG.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
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
