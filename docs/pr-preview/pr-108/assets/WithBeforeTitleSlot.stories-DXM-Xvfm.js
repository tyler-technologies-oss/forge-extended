import{x as e}from"./iframe-C4xYzNeS.js";import{s as o}from"./decorators-Drr-8VSW.js";import{I as r,p as n,n as a,j as i,A as s,k as c,m,i as p,g as d}from"./base-lit-element-CA1-SNEn.js";import"./structured-card-DegOOcju.js";import{d as l}from"./index-dgX_BGTH.js";import{d as f}from"./index-IJrFI2gY.js";import{d as u}from"./index-bSInoyeR.js";import{d as g}from"./index-Dwdr0h6g.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BGw9Ygd1.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-C-I_Yz7X.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-xKbv7GnK.js";import"./when-3fO0zp9C.js";import"./lit-utils-Dv64Iohg.js";import"./async-directive-BmxHseOJ.js";import"./index-_f68ILjs.js";import"./base-button-adapter-sC9lokft.js";import"./with-default-aria-in2Bq8DU.js";import"./a11y-utils-DGwyeK1V.js";import"./icon-CEwzL3bw.js";l();f();u();g();r.define([n,a,i,s,c,m,p,d]);const y="forge-structured-card",q={title:"Components/Structured Card",component:y,decorators:[o(`
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
