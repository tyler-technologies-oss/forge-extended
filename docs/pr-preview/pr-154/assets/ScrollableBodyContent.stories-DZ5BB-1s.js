import{x as e}from"./iframe-BF-eadiO.js";import{s as o}from"./decorators-BfoY5jdu.js";import{I as r,f as n,o as i}from"./with-default-aria-C9Cpz9fo.js";import"./structured-card-Dhajx7DP.js";import{d as a}from"./index-lWkxKqp0.js";import{d as s}from"./index-Bf9budZ-.js";import{d as m}from"./index-BXjDdWpl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C71I-6m3.js";import"./constants-BoaaRiLs.js";import"./utils-BfbFTmRC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-D_T65IvU.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BSQYp9l0.js";import"./when-3fO0zp9C.js";import"./lit-utils-BHvSaoDW.js";import"./async-directive-Bduev6Sc.js";import"./index-CV3Mr06h.js";import"./base-button-adapter-DoZYG0eo.js";import"./focus-indicator-D-YpIZ-n.js";import"./icon-CQn9_tFD.js";import"./icon-button-DqObqSUj.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
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
