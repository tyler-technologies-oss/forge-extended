import{x as e}from"./iframe-BalPjLB1.js";import{s as o}from"./decorators-BOsrHm3p.js";import{I as r,d as n,t as a,f as s,j as i,a as c,g as m,e as d,b as l}from"./with-default-aria-CgGVtW00.js";import"./structured-card-BvG3HOy4.js";import{d as p}from"./index-BptDatkp.js";import{d as f}from"./index-X2uJkQIO.js";import{d as u}from"./index-kk4BV0dI.js";import{d as g}from"./index-ytUfYw-W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DrpErmGl.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-mLaARIl1.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CTIbYiXK.js";import"./async-directive-9-HjHcYf.js";import"./index-NqreQ29v.js";import"./base-button-adapter-DLO7aBOX.js";p();f();u();g();r.define([n,a,s,i,c,m,d,l]);const y="forge-structured-card",T={title:"Components/Structured Card",component:y,decorators:[o(`
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
