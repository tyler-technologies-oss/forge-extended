import{x as e}from"./iframe-BHiuspMz.js";import{s as o}from"./decorators-Cm9aY5zn.js";import{I as r,e as n,n as i}from"./with-default-aria-Dr8txCyU.js";import"./structured-card-CRvBPypy.js";import{d as a}from"./index-DNb12-Nh.js";import{d as s}from"./index-CrIKbSsw.js";import{d as m}from"./index-DeRClaW4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CS6H0gzE.js";import"./constants-aKnaKg58.js";import"./utils-CTcdxc71.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BI-pJmnJ.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-J7PEc2fo.js";import"./when-3fO0zp9C.js";import"./lit-utils-CRjWUuMe.js";import"./async-directive-Xn8TSerS.js";import"./index-DQoQlId0.js";import"./base-button-adapter-GlzYkY-X.js";import"./focus-indicator-BLsqjX4f.js";import"./icon-zqjj0lUM.js";import"./icon-button-DjS9SVHO.js";a();s();m();r.define([n,i]);const p="forge-structured-card",O={title:"Components/Structured Card",component:p,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const P=["ScrollableBodyContent"];export{t as ScrollableBodyContent,P as __namedExportsOrder,O as default};
