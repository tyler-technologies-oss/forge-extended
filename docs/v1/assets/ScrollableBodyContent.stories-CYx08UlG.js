import{x as e}from"./iframe-BNRzrxvp.js";import{s as o}from"./decorators-Cj6lec-7.js";import{I as r,e as n,n as i}from"./with-default-aria-CKJa4TQ6.js";import"./structured-card-D49dMoFJ.js";import{d as a}from"./index-_b89N1_M.js";import{d as s}from"./index-D6LEMRuS.js";import{d as m}from"./index-Cfk3cKct.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BuEtX1ez.js";import"./constants-ClOpupSA.js";import"./utils-DJdwSxH5.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BV2Dw1zj.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D76I5FTv.js";import"./when-3fO0zp9C.js";import"./lit-utils-BC9rQbmr.js";import"./async-directive-D3BBrAEV.js";import"./index-CcsIs4V7.js";import"./base-button-adapter-VZYV8pMZ.js";import"./focus-indicator-CfBV9G0k.js";import"./icon-C6I8EL-q.js";import"./icon-button-DrEAubop.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
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
