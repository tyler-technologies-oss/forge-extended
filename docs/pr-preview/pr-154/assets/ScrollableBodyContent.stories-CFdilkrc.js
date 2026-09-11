import{x as e}from"./iframe-BMggY0Eq.js";import{s as o}from"./decorators-D63UJ0xr.js";import{I as r,f as n,o as i}from"./with-default-aria-NpWy7zUu.js";import"./structured-card-QF1puaCQ.js";import{d as a}from"./index-B1v7lt4m.js";import{d as s}from"./index-DJgm2yXY.js";import{d as m}from"./index-CcueWhpz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-FMdYT5yi.js";import"./constants-o7gsy-Mc.js";import"./utils-Ci8BKDzo.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BX9NNbX2.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DAyfz4LZ.js";import"./when-3fO0zp9C.js";import"./lit-utils-CWd9ykg1.js";import"./async-directive-Bkkdsiao.js";import"./index-DQHA1GbE.js";import"./base-button-adapter-CeJFAvB2.js";import"./focus-indicator-CZ8Q_jHJ.js";import"./icon-B7BdjdS-.js";import"./icon-button-TlXi4X8k.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
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
