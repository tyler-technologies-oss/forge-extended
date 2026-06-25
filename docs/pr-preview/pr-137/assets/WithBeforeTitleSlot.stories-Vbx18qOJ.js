import{x as e}from"./iframe-BJ_QdE3d.js";import{s as o}from"./decorators-Dkn3s0I4.js";import{I as r,p as n,n as a,m as i,C as s,e as c,g as m,l as p,d}from"./with-default-aria-COFgV0Us.js";import"./structured-card-CA3EDAWY.js";import{d as l}from"./index-D0oKLaWU.js";import{d as f}from"./index-BucxSjNl.js";import{d as u}from"./index-CYGJhcJZ.js";import{d as g}from"./index-S0TA8W-N.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CXrUjLap.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-9P7OYce-.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DhF0Baaf.js";import"./when-3fO0zp9C.js";import"./lit-utils-DYLvGOzX.js";import"./async-directive-Ci_UA772.js";import"./index-Dh1WI3Jb.js";import"./base-button-adapter-Dfkg-xXC.js";import"./focus-indicator-jrKRuM4L.js";import"./icon-BnTKu5AW.js";import"./icon-button-BMyexPuL.js";l();f();u();g();r.define([n,a,i,s,c,m,p,d]);const y="forge-structured-card",q={title:"Components/Structured Card",component:y,decorators:[o(`
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
