import{x as e}from"./iframe-BONfeRbS.js";import{s as o}from"./decorators-CF2_DgP2.js";import{I as r,e as n,n as i}from"./with-default-aria-BX23kPsM.js";import"./structured-card-Cbzr-2-W.js";import{d as a}from"./index-DkaTdWA1.js";import{d as s}from"./index-UGwEVcKj.js";import{d as m}from"./index-BbuEY8TC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-BdDPgXkM.js";import"./constants-DnUFLkc1.js";import"./a11y-utils-CPysxFLW.js";import"./custom-element-C028faeO.js";import"./utils-D9p4bUJ4.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DP5Wz34w.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BEx6HTWz.js";import"./when-3fO0zp9C.js";import"./lit-utils-DJLuWaYS.js";import"./async-directive-CTteLgwZ.js";import"./index-DQWtLKbM.js";import"./base-button-adapter-DnYus6sP.js";import"./focus-indicator-COKKqZBY.js";import"./icon-C7xslxSO.js";import"./icon-button-OYsEtGQk.js";a();s();m();r.define([n,i]);const p="forge-structured-card",R={title:"Components/Structured Card",component:p,decorators:[o(`
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
