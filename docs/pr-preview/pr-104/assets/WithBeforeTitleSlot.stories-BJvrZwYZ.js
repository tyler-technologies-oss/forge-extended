import{x as e}from"./iframe-CyKFM1XH.js";import{s as o}from"./decorators-BL1MTQ1U.js";import{I as r,p as n,n as a,j as s,u as i,k as c,m,i as d,g as p}from"./with-default-aria-q5L4000K.js";import"./structured-card-D7-ZbROX.js";import{d as l}from"./index-CrhPJV9V.js";import{d as f}from"./index-COmbQx8m.js";import{d as u}from"./index-BkIcSNvq.js";import{d as g}from"./index-2dEyxW_m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CoeSD5x0.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-BLhxKV3w.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Cfj7ltFl.js";import"./async-directive-BReZcScp.js";import"./index-BQ8vrbpF.js";import"./base-button-adapter-DIsL5Hld.js";l();f();u();g();r.define([n,a,s,i,c,m,d,p]);const y="forge-structured-card",T={title:"Components/Structured Card",component:y,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const W=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,W as __namedExportsOrder,T as default};
