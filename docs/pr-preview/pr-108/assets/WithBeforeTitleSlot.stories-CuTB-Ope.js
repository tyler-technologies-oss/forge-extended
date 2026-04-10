import{x as e}from"./iframe-DvDuhlM-.js";import{s as o}from"./decorators-Cw2USgMK.js";import{I as r,p as n,n as a,m as i,B as s,e as c,g as m,l as p,d}from"./with-default-aria--CksfNP1.js";import"./structured-card-Dh26G-3T.js";import{d as l}from"./index-B2hTHfe_.js";import{d as f}from"./index-CXZthq9t.js";import{d as u}from"./index-CYL5SFS8.js";import{d as g}from"./index-DsS0nc5t.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-Cf761MSM.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-5joOAaK_.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-B3T2Oj4h.js";import"./when-3fO0zp9C.js";import"./lit-utils-NleCEBoB.js";import"./async-directive-DByh7Oed.js";import"./index-pLevWjsw.js";import"./base-button-adapter-DenfhebP.js";import"./focus-indicator-CVJjMnDe.js";import"./icon-aaQwuLul.js";import"./icon-button-DVhuGFH4.js";l();f();u();g();r.define([n,a,i,s,c,m,p,d]);const y="forge-structured-card",q={title:"Components/Structured Card",component:y,decorators:[o(`
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
