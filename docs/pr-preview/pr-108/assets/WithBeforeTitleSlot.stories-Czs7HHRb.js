import{x as e}from"./iframe-DatE1pPE.js";import{s as o}from"./decorators-D6rrKW_H.js";import{I as r,p as n,n as a,m as i,C as s,e as c,g as m,l as p,d}from"./with-default-aria-D1B2n6Ht.js";import"./structured-card-LoxBuQVX.js";import{d as l}from"./index-BF_Gb8vv.js";import{d as f}from"./index-C_JSjESe.js";import{d as u}from"./index-DalXRqud.js";import{d as g}from"./index-BL3_VDB5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BuXSMmg1.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DHwt3Od8.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-IGo-mzja.js";import"./when-3fO0zp9C.js";import"./lit-utils-CnQt0oyh.js";import"./async-directive-0rciksg7.js";import"./index-BxqU3naQ.js";import"./base-button-adapter-CjJaTJRp.js";import"./focus-indicator-Iu12CDTY.js";import"./icon-BtY27vTh.js";import"./icon-button-BLN4LihF.js";l();f();u();g();r.define([n,a,i,s,c,m,p,d]);const y="forge-structured-card",q={title:"Components/Structured Card",component:y,decorators:[o(`
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
