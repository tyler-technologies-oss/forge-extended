import{x as o}from"./iframe-uYmMtFXe.js";import{s as e}from"./decorators-CdDnjmZ2.js";import{I as r,q as n,o as a,n as i,C as s,f as m,h as c,m as p,e as d}from"./with-default-aria-Ajc3U0-g.js";import"./structured-card-AfuOk_JJ.js";import{d as l}from"./index-BAQeSDAv.js";import{d as f}from"./index-Dav54a0r.js";import{d as u}from"./index-DY8pP0a5.js";import{d as g}from"./index-CRPDCMdI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-RnAbd9qQ.js";import"./constants-CpZXP-xH.js";import"./utils-tJtJfoaq.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-kcMyfuC-.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-C31Bz0lK.js";import"./when-3fO0zp9C.js";import"./lit-utils-CpuDE9B8.js";import"./async-directive-DqvxUZro.js";import"./index-D1VuADBN.js";import"./base-button-adapter-81PK7MPV.js";import"./focus-indicator-nFJ3EteD.js";import"./button-constants-BspY-3bl.js";import"./icon-D3Ok13p2.js";import"./icon-button-DbCPLHsE.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",G={title:"Components/Structured Card",component:y,decorators:[e(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const H=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,H as __namedExportsOrder,G as default};
