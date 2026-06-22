import{x as e}from"./iframe-BID06n7E.js";import{s as o}from"./decorators-D4L2Ude1.js";import{I as r,p as n,n as a,m as i,C as s,e as c,g as m,l as p,d}from"./with-default-aria-BREs-j-N.js";import"./structured-card-BOs80ld9.js";import{d as l}from"./index-CxGmXz6D.js";import{d as f}from"./index-DeiAQ4QI.js";import{d as u}from"./index-2i5Wi6_R.js";import{d as g}from"./index-CjSwxtiy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-B3tN-dMS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-hW_n5mGN.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-xw_oOeud.js";import"./when-3fO0zp9C.js";import"./lit-utils-DaTy1hpd.js";import"./async-directive-ZEndwiQE.js";import"./index-RJA0Keow.js";import"./base-button-adapter-5b8XMu03.js";import"./focus-indicator-DyBlokG3.js";import"./icon-CYK8fSKq.js";import"./icon-button-HRYonJzk.js";l();f();u();g();r.define([n,a,i,s,c,m,p,d]);const y="forge-structured-card",q={title:"Components/Structured Card",component:y,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const z=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,z as __namedExportsOrder,q as default};
