import{x as e}from"./iframe-DM3VcRwQ.js";import{s as o}from"./decorators-BtzLxqDu.js";import{I as r,e as n,n as i}from"./with-default-aria-CbDiNaj6.js";import"./structured-card-BT99xFt5.js";import{d as a}from"./index-C0RNhWWv.js";import{d as s}from"./index-DM33Awa1.js";import{d as m}from"./index-DVLPIiIV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C99DI8oj.js";import"./constants-Cw5Hg5LI.js";import"./utils-DqrUBr-j.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BDJ7d3Iq.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CXRTOdxN.js";import"./when-3fO0zp9C.js";import"./lit-utils-CbD2rxyi.js";import"./async-directive-BE11uONG.js";import"./index-CUl2HWD5.js";import"./base-button-adapter-BWBlIri0.js";import"./focus-indicator-DIMQ33ld.js";import"./icon-CIVAmTYB.js";import"./icon-button-0QZ5U7ki.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
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
