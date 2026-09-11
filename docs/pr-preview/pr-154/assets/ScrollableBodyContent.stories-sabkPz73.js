import{x as e}from"./iframe-BKxBIIJQ.js";import{s as o}from"./decorators-CiAOTrg1.js";import{I as r,f as n,o as i}from"./with-default-aria-DjItAXX6.js";import"./structured-card-Dw-wAYym.js";import{d as a}from"./index-CBKvSyMs.js";import{d as s}from"./index-DVopLR72.js";import{d as m}from"./index-0JZT0dcO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BldoUTPl.js";import"./constants-aeBb4lYV.js";import"./utils-B42KGafL.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BNDdSF1T.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-7A7AwKK6.js";import"./when-3fO0zp9C.js";import"./lit-utils-D3GzrXFC.js";import"./async-directive-CnrapT-E.js";import"./index-BaUYnTlJ.js";import"./base-button-adapter-B1QGS9Um.js";import"./focus-indicator-evqk8lHd.js";import"./button-constants-D3zZPESn.js";import"./icon-CGdxk2in.js";import"./icon-button-DNvrWAkH.js";a();s();m();r.define([n,i]);const p="forge-structured-card",P={title:"Components/Structured Card",component:p,decorators:[o(`
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
