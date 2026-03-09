import{x as e}from"./iframe-DB7khuar.js";import{s as o}from"./decorators-UG1vF1ly.js";import{I as r,d as n,t as a,f as s,j as i,a as c,g as m,e as d,b as l}from"./with-default-aria-DgzfDd8k.js";import"./structured-card-CkyEsAk_.js";import{d as p}from"./index-Ca38EChD.js";import{d as f}from"./index-RO2oMO-W.js";import{d as u}from"./index-6Sip5Tjo.js";import{d as g}from"./index-0747GUEQ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BMWnaSmQ.js";import"./style-map-BvuDHFBf.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-yFt3Bvs6.js";import"./when-3fO0zp9C.js";import"./async-directive-DqBYNgnJ.js";import"./index-DhCrqmz7.js";import"./index-C5QB_oV8.js";import"./base-button-adapter-C-uPU8dd.js";p();f();u();g();r.define([n,a,s,i,c,m,d,l]);const y="forge-structured-card",T={title:"Components/Structured Card",component:y,decorators:[o(`
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
