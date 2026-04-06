import{x as e}from"./iframe-D_k7Yc7z.js";import{s as o}from"./decorators-lmW4X0pn.js";import{I as r,p as n,n as a,m as i,A as s,e as c,g as m,l as p,d}from"./with-default-aria-D52gWb8s.js";import"./structured-card-B2Mhq6ga.js";import{d as l}from"./index-Bnz1Nm44.js";import{d as f}from"./index-B6uNYQYq.js";import{d as u}from"./index-BmhyFQMn.js";import{d as g}from"./index-BcZfZIIH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DY0TjSdo.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BUn3t_br.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CnqEGl4j.js";import"./when-3fO0zp9C.js";import"./lit-utils-DamIkZ81.js";import"./async-directive-OePmMPJE.js";import"./index-2h6eze9v.js";import"./base-button-adapter-L9LhOcQD.js";import"./focus-indicator-D-bmF3Ux.js";import"./icon-BoTXdo_E.js";l();f();u();g();r.define([n,a,i,s,c,m,p,d]);const y="forge-structured-card",V={title:"Components/Structured Card",component:y,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const q=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,q as __namedExportsOrder,V as default};
