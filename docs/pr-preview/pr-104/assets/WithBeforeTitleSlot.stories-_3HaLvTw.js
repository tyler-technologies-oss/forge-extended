import{x as e}from"./iframe-BheD9QLh.js";import{s as o}from"./decorators-D-9hlUdR.js";import{I as r,d as n,t as a,f as s,j as i,a as c,g as m,e as d,b as p}from"./with-default-aria-BsAd8IlS.js";import"./structured-card-o6sOu_XL.js";import{d as l}from"./index-Ol-bO7A1.js";import{d as f}from"./index-CWSkDPE8.js";import{d as u}from"./index-CjbEl3fH.js";import{d as g}from"./index-D1hIqIQK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-B14oXyAV.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-B_QznCea.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BLAmr7Nn.js";import"./when-3fO0zp9C.js";import"./async-directive-Dv48Yr-i.js";import"./index-CIVLg9p3.js";import"./base-button-adapter-DgVQ-STh.js";l();f();u();g();r.define([n,a,s,i,c,m,d,p]);const y="forge-structured-card",W={title:"Components/Structured Card",component:y,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const O=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,O as __namedExportsOrder,W as default};
