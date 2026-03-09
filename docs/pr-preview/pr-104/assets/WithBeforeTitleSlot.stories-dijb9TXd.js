import{x as e}from"./iframe-Dxb2KeVZ.js";import{s as o}from"./decorators-4q0M2Mqa.js";import{I as r,c as n,t as a,e as s,i,a as c,f as m,d,b as l}from"./with-default-aria-Pzw_Jr5V.js";import"./structured-card-B94--HPc.js";import{d as p}from"./index-CzVWnncg.js";import{d as f}from"./index-DKqaCjLN.js";import{d as u}from"./index-DUHbrLBU.js";import{d as g}from"./index-B1lLZYWE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BPpq6bMv.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-CPfkXDCp.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CteIJTDU.js";import"./index-BQChMZbL.js";import"./index-B_qmEqKH.js";import"./base-button-adapter-EaVvvjOq.js";p();f();u();g();r.define([n,a,s,i,c,m,d,l]);const y="forge-structured-card",W={title:"Components/Structured Card",component:y,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const j=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,j as __namedExportsOrder,W as default};
