import{x as e}from"./iframe-CSr27Gi9.js";import{s as o}from"./decorators-jH5mbsPj.js";import{I as r,e as n,n as i}from"./with-default-aria-DqAXseBi.js";import"./structured-card-puttL6qq.js";import{d as a}from"./index-C0ZwjHuE.js";import{d as s}from"./index-XImc70I8.js";import{d as m}from"./index-DX-PHoPv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-DDaW1mI9.js";import"./constants-B0KOFcFf.js";import"./utils-CaDkb-CY.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-B6tseOWg.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-NcH_mt3m.js";import"./when-3fO0zp9C.js";import"./lit-utils-BDYppvBO.js";import"./async-directive-DdY3TFlF.js";import"./index-S8W-aZjQ.js";import"./base-button-adapter-_1Vo15z1.js";import"./focus-indicator-0djWxlSZ.js";import"./icon-C2DgJ4Of.js";import"./icon-button-CkTpJu7r.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
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
