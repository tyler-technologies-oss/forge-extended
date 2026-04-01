import{x as e}from"./iframe-BVi_FfxG.js";import{s as o}from"./decorators-CXQkRri3.js";import{I as r,p as n,n as a,j as s,u as i,k as c,m,i as d,g as p}from"./with-default-aria-DEGA_h8b.js";import"./structured-card-c4yNxdc1.js";import{d as l}from"./index-CeBmgFwd.js";import{d as f}from"./index-CF4O-VV3.js";import{d as u}from"./index-BPsVCX2O.js";import{d as g}from"./index-Bct7ZOUU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CuSrPhOm.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-BavBZg2L.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BMgx8Jnp.js";import"./async-directive-Cu1okbmx.js";import"./index-Dvuw0_ez.js";import"./base-button-adapter-D1h3Nket.js";l();f();u();g();r.define([n,a,s,i,c,m,d,p]);const y="forge-structured-card",T={title:"Components/Structured Card",component:y,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const W=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,W as __namedExportsOrder,T as default};
