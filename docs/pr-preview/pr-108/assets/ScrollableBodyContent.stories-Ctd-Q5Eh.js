import{x as e}from"./iframe-BniGYPBV.js";import{s as o}from"./decorators-CEfk8PRB.js";import{I as r,e as n,n as i}from"./with-default-aria-DjjkLSOz.js";import"./structured-card-DJf6klst.js";import{d as a}from"./index-B0N8ydzv.js";import{d as s}from"./index-FY2TsAFj.js";import{d as m}from"./index-BQEN9SHQ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-5XJGMMD5.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-8Vpw1Umm.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CjHsvWhe.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cr8r3BZZ.js";import"./async-directive-CBsEWWjp.js";import"./index-BXUMO6Jc.js";import"./base-button-adapter-DbUntQM0.js";import"./focus-indicator-I8n0c5ll.js";import"./icon-CNY5uVgv.js";import"./icon-button-jUFwl3_A.js";a();s();m();r.define([n,i]);const p="forge-structured-card",D={title:"Components/Structured Card",component:p,decorators:[o(`
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
