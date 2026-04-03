import{x as e}from"./iframe-Cdub68sG.js";import{s as o}from"./decorators-B3rQJDfz.js";import{I as r,k as n,n as i}from"./base-lit-element-Dvqq96TE.js";import"./structured-card-C7rSo9uL.js";import{d as s}from"./index-BdqCOSPS.js";import{d as a}from"./index-ChKzpunO.js";import{d as m}from"./index-CfOkB06a.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DgOXzPoc.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CnkXNtxA.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-HGbODzIU.js";import"./when-3fO0zp9C.js";import"./lit-utils-BUazNZie.js";import"./async-directive-ClRcxluw.js";import"./index-Cm61bmp4.js";import"./base-button-adapter-BTEWft6w.js";import"./with-default-aria-GYIwOTw2.js";import"./a11y-utils-3T20ILqt.js";import"./icon-CvzxXqxi.js";s();a();m();r.define([n,i]);const p="forge-structured-card",D={title:"Components/Structured Card",component:p,decorators:[o(`
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
          <forge-icon-button aria-label="More actions" slot="header-actions">
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
