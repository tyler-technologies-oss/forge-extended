import{x as e}from"./iframe-CuIWC8FI.js";import{s as o}from"./decorators-CKAbKWa9.js";import{I as r,p as n,n as a,m as i,B as s,e as m,g as c,l as p,d}from"./with-default-aria-CMkXkpFU.js";import"./structured-card-DsQuev3c.js";import{d as l}from"./index-eMaK3uUL.js";import{d as f}from"./index-BV6pRYsg.js";import{d as u}from"./index-CfG6fK2G.js";import{d as g}from"./index-vrgytHJX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-DimA5s9Y.js";import"./constants-DlZthJ05.js";import"./a11y-utils-Pqf8QPAB.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-sZ8tE-fV.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DUNmMSE4.js";import"./when-3fO0zp9C.js";import"./lit-utils-B9FU4eDS.js";import"./async-directive-Dl5vg_mB.js";import"./index-CZv6At9A.js";import"./base-button-adapter-BMH4q6e1.js";import"./focus-indicator-olkUSk6R.js";import"./icon-Bq-EUyj3.js";import"./icon-button-CimfH_dc.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",F={title:"Components/Structured Card",component:y,decorators:[o(`
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
