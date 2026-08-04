import{x as o}from"./iframe-BgG1mILm.js";import{s as e}from"./decorators-CGtwCCji.js";import{I as r,p as n,n as a,m as i,P as s,e as m,g as c,l as p,d}from"./with-default-aria-DhKreie1.js";import"./structured-card-DqTFIYN0.js";import{d as l}from"./index-DH-EBj3W.js";import{d as f}from"./index-CKj6teuh.js";import{d as u}from"./index-IpHzfxDW.js";import{d as g}from"./index-p3jc0kAl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-4yZjZMA_.js";import"./constants-D4w8ERcy.js";import"./a11y-utils-Bqf6nmLH.js";import"./custom-element-C028faeO.js";import"./utils-BrQSBAEO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-nSt2BsDm.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CZmYL34l.js";import"./when-3fO0zp9C.js";import"./lit-utils-CbFCRKzL.js";import"./async-directive-C8qPSgQz.js";import"./index-Brr_ru3-.js";import"./base-button-adapter-DJylsVrC.js";import"./focus-indicator-CvBVFsiv.js";import"./icon-DUW7oXzz.js";import"./icon-button-CVlniPs4.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",H={title:"Components/Structured Card",component:y,decorators:[e(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const J=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,J as __namedExportsOrder,H as default};
