import{x as o}from"./iframe-tSrdq99I.js";import{s as e}from"./decorators-Be_BwGSL.js";import{I as r,q as n,o as a,n as i,C as s,f as m,h as c,m as p,e as d}from"./with-default-aria-Cjw09Hyt.js";import"./structured-card-DS1evckj.js";import{d as l}from"./index-DgOFm9rI.js";import{d as f}from"./index-BvK_xeaI.js";import{d as u}from"./index-DUD4nVta.js";import{d as g}from"./index-B-43NA9w.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-Cg4oYBYF.js";import"./constants-DEDYFPik.js";import"./utils-BuNvph6x.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CTBWGCQU.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BxTyVT-B.js";import"./when-3fO0zp9C.js";import"./lit-utils-C9gaqnGj.js";import"./async-directive-BwzQrKcK.js";import"./index-DxuUp4FF.js";import"./base-button-adapter-BUXivA6l.js";import"./focus-indicator-DCA67l5Z.js";import"./button-constants-C8sFYYY3.js";import"./icon-xRFOyXu1.js";import"./icon-button-CPvX5qA1.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",G={title:"Components/Structured Card",component:y,decorators:[e(`
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
