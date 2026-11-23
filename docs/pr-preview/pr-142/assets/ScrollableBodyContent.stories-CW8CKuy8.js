import{x as e}from"./iframe-CEyoJGCy.js";import{s as o}from"./decorators-COQVsPJj.js";import{I as r,e as n,n as i}from"./with-default-aria-wByQ6wv-.js";import"./structured-card-BYGK7sRc.js";import{d as a}from"./index-DSgS9r4k.js";import{d as s}from"./index-DoQqvjn8.js";import{d as m}from"./index-BtBfNd7y.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-xTTRT63M.js";import"./constants-B19yLoP-.js";import"./utils-b88vL7Ig.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-C8foIcm9.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CIO1AcYg.js";import"./when-3fO0zp9C.js";import"./lit-utils-Ci86qQTg.js";import"./async-directive-BEktGq0z.js";import"./index-BRMSJSki.js";import"./base-button-adapter-CaN2_8Rx.js";import"./focus-indicator-C-CA7k8r.js";import"./icon-BbEHwsUK.js";import"./icon-button-Dtcqb8VK.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
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
