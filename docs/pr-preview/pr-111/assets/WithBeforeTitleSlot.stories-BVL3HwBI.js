import{x as e}from"./iframe-CRGMA7MF.js";import{s as o}from"./decorators-yuALYnC9.js";import{I as r,p as n,n as a,j as s,s as i,k as c,m,i as d,g as p}from"./with-default-aria-B9Uqzh4X.js";import"./structured-card-DtwyOIDj.js";import{d as l}from"./index-BZVuSxJ2.js";import{d as f}from"./index-Dp2tWucw.js";import{d as u}from"./index-uXqUG2Aw.js";import{d as g}from"./index-CHIf7q-y.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-wEdw9n5d.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-PEn_HxmA.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D1ec7_f1.js";import"./async-directive-Dtl8rOlh.js";import"./index-BfNhydOc.js";import"./base-button-adapter-DuAZ2MZl.js";import"./icon-button-B3BzD6-P.js";l();f();u();g();r.define([n,a,s,i,c,m,d,p]);const y="forge-structured-card",W={title:"Components/Structured Card",component:y,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const O=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,O as __namedExportsOrder,W as default};
