import{x as e}from"./iframe-Bmpo7mK4.js";import{s as o}from"./decorators-D1xcKosb.js";import{I as r,t as n,d as a}from"./with-default-aria-CqHJAmJ_.js";import"./structured-card-COxCKnW9.js";import{d as i}from"./index-BwGY1Jp9.js";import{d as s}from"./index-DPgfpJZF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DWkFozGy.js";import"./style-map-F9UlsvX2.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CeiNuTct.js";import"./when-3fO0zp9C.js";import"./async-directive-a_IyjKek.js";import"./index-BinP8Lry.js";import"./index-BJPpmeSU.js";import"./base-button-adapter-A8-Yu6iA.js";i();s();r.define([n,a]);const d="forge-structured-card",w={title:"Components/Structured Card",component:d,decorators:[o(`
      .no-header-card-container {
        max-width: 600px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>e`
      <div class="no-header-card-container">
        <forge-structured-card>
          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          <forge-button variant="text" slot="footer-secondary-action">
            <forge-icon slot="start" name="close"></forge-icon>
            Cancel
          </forge-button>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const H=["CardWithNoHeader"];export{t as CardWithNoHeader,H as __namedExportsOrder,w as default};
