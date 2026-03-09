import{x as e}from"./iframe-DB7khuar.js";import{s as o}from"./decorators-UG1vF1ly.js";import{I as r,t as n,d as a}from"./with-default-aria-DgzfDd8k.js";import"./structured-card-CkyEsAk_.js";import{d as i}from"./index-Ca38EChD.js";import{d as s}from"./index-6Sip5Tjo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BMWnaSmQ.js";import"./style-map-BvuDHFBf.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-yFt3Bvs6.js";import"./when-3fO0zp9C.js";import"./async-directive-DqBYNgnJ.js";import"./index-DhCrqmz7.js";import"./index-C5QB_oV8.js";import"./base-button-adapter-C-uPU8dd.js";i();s();r.define([n,a]);const d="forge-structured-card",w={title:"Components/Structured Card",component:d,decorators:[o(`
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
