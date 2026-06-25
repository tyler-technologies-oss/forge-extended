import{x as e}from"./iframe-2Sbhygbf.js";import{s as o}from"./decorators-BOKPsSVL.js";import{I as r,e as n,n as i}from"./with-default-aria-mhKvke9N.js";import"./structured-card-bWSB5Psv.js";import{d as a}from"./index-BKK1wYma.js";import{d as s}from"./index-CYt5Y0Et.js";import{d as m}from"./index-CS3aADBg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BEkbKOlm.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-C06VkqGx.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Cwd49he-.js";import"./when-3fO0zp9C.js";import"./lit-utils-CBwKQi_Z.js";import"./async-directive-C2-a4nic.js";import"./index-Ch6eXN49.js";import"./base-button-adapter-atF8o2Y8.js";import"./focus-indicator-nwjhrUoT.js";import"./icon-UtUX4HYL.js";import"./icon-button-CLtckAnN.js";a();s();m();r.define([n,i]);const p="forge-structured-card",D={title:"Components/Structured Card",component:p,decorators:[o(`
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
