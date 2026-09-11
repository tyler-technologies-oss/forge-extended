import{x as o}from"./iframe-BQvNP4M8.js";import{s as e}from"./decorators-DR7BoQuS.js";import{I as r,q as n,o as a,n as i,C as s,f as m,h as c,m as p,e as d}from"./with-default-aria-BV0tb14g.js";import"./structured-card-BqkvrJXT.js";import{d as l}from"./index-BOzD9efv.js";import{d as f}from"./index-CQOn-3Nq.js";import{d as u}from"./index-D2FhTJht.js";import{d as g}from"./index-CHkvTw8R.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CCcGDftf.js";import"./constants-vdQC6Ta-.js";import"./utils-DlINy0qF.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Dn5BTarG.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BdQ1grer.js";import"./when-3fO0zp9C.js";import"./lit-utils-DMN2dfXf.js";import"./async-directive-CTOhvSPE.js";import"./index-C7XE9NDI.js";import"./base-button-adapter-sdHxCcuI.js";import"./focus-indicator-B8XRN2Qz.js";import"./icon-CWB8ZOKZ.js";import"./icon-button-CY77UBum.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",F={title:"Components/Structured Card",component:y,decorators:[e(`
      .actions-card-container {
        max-width: 600px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>o`
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
