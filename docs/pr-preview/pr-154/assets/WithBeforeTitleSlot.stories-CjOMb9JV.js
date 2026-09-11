import{x as o}from"./iframe-BF-eadiO.js";import{s as e}from"./decorators-BfoY5jdu.js";import{I as r,q as n,o as a,n as i,C as s,f as m,h as c,m as p,e as d}from"./with-default-aria-C9Cpz9fo.js";import"./structured-card-Dhajx7DP.js";import{d as l}from"./index-lWkxKqp0.js";import{d as f}from"./index-Bf9budZ-.js";import{d as u}from"./index-BXjDdWpl.js";import{d as g}from"./index-h52c34fn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C71I-6m3.js";import"./constants-BoaaRiLs.js";import"./utils-BfbFTmRC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-D_T65IvU.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BSQYp9l0.js";import"./when-3fO0zp9C.js";import"./lit-utils-BHvSaoDW.js";import"./async-directive-Bduev6Sc.js";import"./index-CV3Mr06h.js";import"./base-button-adapter-DoZYG0eo.js";import"./focus-indicator-D-YpIZ-n.js";import"./icon-CQn9_tFD.js";import"./icon-button-DqObqSUj.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",F={title:"Components/Structured Card",component:y,decorators:[e(`
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
