import{x as e}from"./iframe-C08US71-.js";import{s as o}from"./decorators-BefWZWl6.js";import{I as r,e as n,n as i}from"./with-default-aria-BQE8XDIz.js";import"./structured-card-C4B201xh.js";import{d as a}from"./index-BFT0Y5rM.js";import{d as s}from"./index-Dl8A3P2F.js";import{d as m}from"./index-BBQYzh_e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-Dk8e2pW9.js";import"./constants-BLBViMKp.js";import"./utils-C7jF9PmR.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Dxz70OQS.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-nlWmsRED.js";import"./when-3fO0zp9C.js";import"./lit-utils-DBbww9_W.js";import"./async-directive-DBIGADlc.js";import"./index-PVZ9PkQy.js";import"./base-button-adapter-CNE4gXS8.js";import"./focus-indicator-Bchj9TEM.js";import"./icon-DQrVUb0Z.js";import"./icon-button-xZ8SOnqC.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
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
