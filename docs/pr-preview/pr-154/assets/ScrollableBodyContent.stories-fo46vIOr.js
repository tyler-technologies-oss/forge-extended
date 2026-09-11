import{x as e}from"./iframe-CYs4rUqc.js";import{s as o}from"./decorators-D2WRb3SP.js";import{I as r,f as n,o as i}from"./with-default-aria-IIDqe1FM.js";import"./structured-card-B7pylLaO.js";import{d as a}from"./index-Bga8EQCr.js";import{d as s}from"./index-BUFnbwZi.js";import{d as m}from"./index-CT7xPl9a.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CDYWBB4R.js";import"./constants-BPzvPAwC.js";import"./utils-D4Tmth0h.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DcButXsH.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BTl4Y1k1.js";import"./when-3fO0zp9C.js";import"./lit-utils-D5rm5sHA.js";import"./async-directive-BlkTbESp.js";import"./index-Cna3cTfO.js";import"./base-button-adapter-NVSd6npM.js";import"./focus-indicator-CYx5OX-M.js";import"./icon-0n1M6L10.js";import"./icon-button-DvWO3SvX.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
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
