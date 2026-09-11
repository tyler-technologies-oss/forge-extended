import{x as o}from"./iframe-CYs4rUqc.js";import{s as e}from"./decorators-D2WRb3SP.js";import{I as r,q as n,o as a,n as i,C as s,f as m,h as c,m as p,e as d}from"./with-default-aria-IIDqe1FM.js";import"./structured-card-B7pylLaO.js";import{d as l}from"./index-Bga8EQCr.js";import{d as f}from"./index-BUFnbwZi.js";import{d as u}from"./index-CT7xPl9a.js";import{d as g}from"./index-B59deXtE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CDYWBB4R.js";import"./constants-BPzvPAwC.js";import"./utils-D4Tmth0h.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DcButXsH.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BTl4Y1k1.js";import"./when-3fO0zp9C.js";import"./lit-utils-D5rm5sHA.js";import"./async-directive-BlkTbESp.js";import"./index-Cna3cTfO.js";import"./base-button-adapter-NVSd6npM.js";import"./focus-indicator-CYx5OX-M.js";import"./icon-0n1M6L10.js";import"./icon-button-DvWO3SvX.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",F={title:"Components/Structured Card",component:y,decorators:[e(`
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
