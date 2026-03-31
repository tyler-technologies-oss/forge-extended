import{x as e}from"./iframe-BxKkWUAw.js";import{s as o}from"./decorators-CXnVMgQf.js";import{I as r,n,p as a}from"./with-default-aria-DBafLuCR.js";import"./structured-card-DVy3E9V-.js";import{d as i}from"./index-x8pHq2sF.js";import{d as s}from"./index-DOp-TA7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-Bb7Ji_uf.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-BiMib_8G.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BwTR8TXa.js";import"./async-directive-BuvWFHC9.js";import"./index-6LNK74y6.js";import"./base-button-adapter-Citqn4_V.js";i();s();r.define([n,a]);const d="forge-structured-card",w={title:"Components/Structured Card",component:d,decorators:[o(`
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
