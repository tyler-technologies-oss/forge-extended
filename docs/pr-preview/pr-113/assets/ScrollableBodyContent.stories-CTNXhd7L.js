import{x as e}from"./iframe-D2O19Nz9.js";import{s as o}from"./decorators-Gjdf27rj.js";import{I as r,k as n,n as i}from"./with-default-aria-CGi1gEF_.js";import"./structured-card-B4ha8fis.js";import{d as a}from"./index-q-MrScl9.js";import{d as s}from"./index-BnfSE_z3.js";import{d as m}from"./index-CFWa17Ds.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-Bx1vnTPb.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-CrQVRBLG.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-C2nrVIme.js";import"./async-directive-BEFCRJIm.js";import"./index-DCU1msnm.js";import"./base-button-adapter-CXZ2tuaD.js";import"./icon-button-C8o1sauA.js";a();s();m();r.define([n,i]);const d="forge-structured-card",_={title:"Components/Structured Card",component:d,decorators:[o(`
      * {
        box-sizing: border-box;
      }

      .card-container {
        max-width: 360px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>e`
      <div class="card-container">
        <forge-structured-card style="--forge-structured-card-body-height: 200px;">
          <span slot="title">Project Details</span>
          <forge-icon-button aria-label="More actions" slot="after-header-actions">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>
          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const M=["ScrollableBodyContent"];export{t as ScrollableBodyContent,M as __namedExportsOrder,_ as default};
