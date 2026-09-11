import{x as o}from"./iframe-B-hqvoN1.js";import{s as e}from"./decorators-Cpx4MEKW.js";import{I as r,q as n,o as a,n as i,C as s,f as m,h as c,m as p,e as d}from"./with-default-aria-UTb2ZfEa.js";import"./structured-card-BiPXsTQp.js";import{d as l}from"./index-QNvooWwG.js";import{d as f}from"./index-D9577PU0.js";import{d as u}from"./index-CTAqYqwJ.js";import{d as g}from"./index-jx0yBWf-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C0MWYpx0.js";import"./constants-BzUGdP7s.js";import"./utils-BpfZpwkX.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DYK85YWM.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BXdNFto4.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bk_RM_31.js";import"./async-directive-By6MWvSL.js";import"./index-Db49f7Dd.js";import"./base-button-adapter-D9nRSDVN.js";import"./focus-indicator-DAcdgG1c.js";import"./button-constants-DFK1DSfd.js";import"./icon-y17Z_xfo.js";import"./icon-button-DfhV15n1.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",G={title:"Components/Structured Card",component:y,decorators:[e(`
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
