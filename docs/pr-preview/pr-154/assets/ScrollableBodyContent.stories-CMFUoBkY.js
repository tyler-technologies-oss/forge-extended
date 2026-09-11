import{x as e}from"./iframe-B-hqvoN1.js";import{s as o}from"./decorators-Cpx4MEKW.js";import{I as r,f as n,o as i}from"./with-default-aria-UTb2ZfEa.js";import"./structured-card-BiPXsTQp.js";import{d as a}from"./index-QNvooWwG.js";import{d as s}from"./index-D9577PU0.js";import{d as m}from"./index-CTAqYqwJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C0MWYpx0.js";import"./constants-BzUGdP7s.js";import"./utils-BpfZpwkX.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DYK85YWM.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BXdNFto4.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bk_RM_31.js";import"./async-directive-By6MWvSL.js";import"./index-Db49f7Dd.js";import"./base-button-adapter-D9nRSDVN.js";import"./focus-indicator-DAcdgG1c.js";import"./button-constants-DFK1DSfd.js";import"./icon-y17Z_xfo.js";import"./icon-button-DfhV15n1.js";a();s();m();r.define([n,i]);const p="forge-structured-card",P={title:"Components/Structured Card",component:p,decorators:[o(`
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
