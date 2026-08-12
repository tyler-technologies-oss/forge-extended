import{x as o}from"./iframe-BZR3avPy.js";import{s as e}from"./decorators-Btj57eUi.js";import{I as r,p as n,n as a,m as i,P as s,e as m,g as c,l as p,d}from"./with-default-aria-DrGQh3rA.js";import"./structured-card-CBV2m1K1.js";import{d as l}from"./index-CCo5mcVb.js";import{d as f}from"./index-DSF_ghjH.js";import{d as u}from"./index-HGkRbmOl.js";import{d as g}from"./index-fAASf5uX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-V1xjMoTa.js";import"./constants-Dczm6517.js";import"./a11y-utils-B2lvl91r.js";import"./custom-element-C028faeO.js";import"./utils-BeUVm7TG.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CBmZDkCE.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BiY-VgIw.js";import"./when-3fO0zp9C.js";import"./lit-utils-B7mGwFLc.js";import"./async-directive-CduYbs5w.js";import"./index-BxeetAA7.js";import"./base-button-adapter-BBLLx2xC.js";import"./focus-indicator-BBF39Pup.js";import"./icon-CAC4534v.js";import"./icon-button-DD2_Bu8d.js";l();f();u();g();r.define([n,a,i,s,m,c,p,d]);const y="forge-structured-card",H={title:"Components/Structured Card",component:y,decorators:[e(`
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
