import{x as o}from"./iframe-SHp831uv.js";import{s as e}from"./decorators-D3zuKrK4.js";import{I as r,q as n,o as a,n as i,C as s,f as m,h as c,m as p,e as d}from"./with-default-aria-8o2urQtC.js";import"./structured-card-CEY4gkbz.js";import{d as l}from"./index-BKf0lMQ0.js";import{d as f}from"./index-BvX6YG-j.js";import{d as u}from"./index-QCVF5AdA.js";import{d as g}from"./index-CCaHehHy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-B6C_dIc3.js";import"./constants-DRnO8cEF.js";import"./utils-BQMvIrLC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BFLBEnAY.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DLp9mQPY.js";import"./when-3fO0zp9C.js";import"./lit-utils-kTKF_2VI.js";import"./async-directive-sXoZ91VK.js";import"./index-D9hqbZqQ.js";import"./base-button-adapter-BVuIt3Kj.js";import"./focus-indicator-B9vvCHqs.js";import"./button-constants-BjrjrMWP.js";import"./icon-rFRese_m.js";import"./icon-button-q71bmWIK.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",G={title:"Components/Structured Card",component:y,decorators:[e(`
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
