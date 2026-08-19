import{x as e}from"./iframe-Divla-Cp.js";import{s as o}from"./decorators-HdD8mzBe.js";import{I as r,p as n,n as a,m as i,B as s,e as m,g as c,l as p,d}from"./with-default-aria-BEs3GmpT.js";import"./structured-card-DAukMNtH.js";import{d as l}from"./index-CrpGlOxL.js";import{d as f}from"./index-r3sRvHmc.js";import{d as u}from"./index-B9d_yM6M.js";import{d as g}from"./index-ZS20Axz8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-D-5lT58i.js";import"./constants-DkN7ZGiS.js";import"./a11y-utils-BCt-Wh9D.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DifFCkIf.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CY4HPLmX.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bi1B8CZI.js";import"./async-directive-D1XEcX9j.js";import"./index-DDtCiOcM.js";import"./base-button-adapter-uhdylO1A.js";import"./focus-indicator-CDDzSaVo.js";import"./icon-C6Jpggai.js";import"./icon-button-CTYCVtl8.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",F={title:"Components/Structured Card",component:y,decorators:[o(`
      .actions-card-container {
        max-width: 600px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>e`
      <div class="actions-card-container">
        <forge-structured-card heading-level="2">
          <forge-icon-button aria-label="Back" slot="before-title">
            <forge-icon name="arrow_back"></forge-icon>
          </forge-icon-button>
          <span slot="title">Project Details</span>
          <div slot="body" class="card-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <forge-button variant="text" slot="footer-secondary-action">
            <forge-icon slot="start" name="delete"></forge-icon>
            Cancel
          </forge-button>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const G=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,G as __namedExportsOrder,F as default};
