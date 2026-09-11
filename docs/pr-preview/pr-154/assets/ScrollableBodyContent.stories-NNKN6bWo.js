import{x as e}from"./iframe-pX2mP6Yq.js";import{s as o}from"./decorators-Dk2-X6A_.js";import{I as r,f as n,o as i}from"./with-default-aria-D0R24zrx.js";import"./structured-card-D7Q60jFy.js";import{d as a}from"./index-B9wBF_Rg.js";import{d as s}from"./index-l5sDas4g.js";import{d as m}from"./index-DLHmM8kM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-DER5CWwz.js";import"./constants-Bf2qWwtf.js";import"./utils-BfHhYyJi.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-D3M3IjTv.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CTxYUhEl.js";import"./when-3fO0zp9C.js";import"./lit-utils-BPNP532N.js";import"./async-directive-D457AqlN.js";import"./index-Cel8ZMRv.js";import"./base-button-adapter-Dfmjl8hd.js";import"./focus-indicator-COl26dho.js";import"./button-constants-C_OH8Fqk.js";import"./icon-UK7y3e63.js";import"./icon-button-C5ML3Gbk.js";a();s();m();r.define([n,i]);const p="forge-structured-card",P={title:"Components/Structured Card",component:p,decorators:[o(`
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
