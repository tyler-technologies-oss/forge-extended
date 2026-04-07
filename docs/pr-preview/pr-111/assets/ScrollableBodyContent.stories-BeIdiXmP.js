import{x as e}from"./iframe-D41Yxy1-.js";import{s as o}from"./decorators-CKhSRhED.js";import{I as r,k as n,n as i}from"./with-default-aria-DUhUIC4o.js";import"./structured-card-Ch9G3g0t.js";import{d as a}from"./index-BVR6h2RZ.js";import{d as s}from"./index-hEcfwdMy.js";import{d as m}from"./index-s7-6HoyW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DhvMCzkD.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-Zw1oJUMc.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Bq_-p6de.js";import"./async-directive-BJpdL-fk.js";import"./index-DhCAyGK6.js";import"./base-button-adapter-BfiWk_tK.js";import"./icon-button-LEzAtySL.js";a();s();m();r.define([n,i]);const d="forge-structured-card",_={title:"Components/Structured Card",component:d,decorators:[o(`
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
