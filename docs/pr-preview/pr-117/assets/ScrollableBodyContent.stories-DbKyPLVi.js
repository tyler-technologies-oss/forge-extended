import{x as e}from"./iframe-BSkrS8By.js";import{s as o}from"./decorators-DwJpY63K.js";import{I as r,e as n,n as i}from"./with-default-aria-BWwvJ9Lo.js";import"./structured-card-luGuxjLr.js";import{d as a}from"./index-8MCv1UnX.js";import{d as s}from"./index-BKh-270t.js";import{d as m}from"./index-DUzO_SJj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CXiCJegp.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CBDFGRMD.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Wvay5j8Z.js";import"./when-3fO0zp9C.js";import"./lit-utils-Q5cAF7hS.js";import"./async-directive-B8ouUbHu.js";import"./index-BA2iSPP3.js";import"./base-button-adapter-wUPioLqY.js";import"./focus-indicator-B3PaEGqS.js";import"./icon-CvWIsA02.js";import"./icon-button-D1WnB9XE.js";a();s();m();r.define([n,i]);const p="forge-structured-card",D={title:"Components/Structured Card",component:p,decorators:[o(`
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
