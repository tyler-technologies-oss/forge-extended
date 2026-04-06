import{x as e}from"./iframe-Bc1gK1D2.js";import{s as o}from"./decorators-B7Y3VDUB.js";import{I as r,e as n,n as i}from"./with-default-aria-DKBtCCS8.js";import"./structured-card-Pj8XuCtm.js";import{d as s}from"./index-BY6OoCBE.js";import{d as a}from"./index-DeunrSu9.js";import{d as m}from"./index-DzKHyiTq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-C0oGLkIs.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-OtRBhPR7.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Dg-aQzLJ.js";import"./when-3fO0zp9C.js";import"./lit-utils-CGLJKfT8.js";import"./async-directive-BmRd90c7.js";import"./index-BhqZv3Ez.js";import"./base-button-adapter-LtjZ8eTY.js";import"./focus-indicator-CZ9tP9Vs.js";import"./icon-CR3saOZG.js";s();a();m();r.define([n,i]);const p="forge-structured-card",z={title:"Components/Structured Card",component:p,decorators:[o(`
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
          <forge-icon-button aria-label="More actions" slot="header-actions">
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const D=["ScrollableBodyContent"];export{t as ScrollableBodyContent,D as __namedExportsOrder,z as default};
