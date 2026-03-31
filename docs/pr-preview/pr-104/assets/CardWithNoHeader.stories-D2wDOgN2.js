import{x as e}from"./iframe-SK2PMNIF.js";import{s as o}from"./decorators-wuW5XaRX.js";import{I as r,n,p as a}from"./with-default-aria-BqQZ2yzA.js";import"./structured-card-BQHCsDR8.js";import{d as i}from"./index-DUBj99tu.js";import{d as s}from"./index-DWG_2-Wo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-D-IuVu2w.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-DhfKX3UQ.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-rE-EFLI6.js";import"./async-directive-4u_bWldE.js";import"./index-vZRSQ4bo.js";import"./base-button-adapter-DDFr_tnJ.js";i();s();r.define([n,a]);const d="forge-structured-card",w={title:"Components/Structured Card",component:d,decorators:[o(`
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
