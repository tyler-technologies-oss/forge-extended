import{x as e}from"./iframe-D2auh-ob.js";import{s as o}from"./decorators-BWzLVk5d.js";import{I as r,e as n,n as i}from"./with-default-aria-givn-h4t.js";import"./structured-card-AHxw13IS.js";import{d as a}from"./index-DytvL9v2.js";import{d as s}from"./index-DXo3ReHK.js";import{d as m}from"./index-DfDBNFD5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-B5suZUFP.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Jo3VKbU_.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BmEgRkv_.js";import"./when-3fO0zp9C.js";import"./lit-utils-r13SEbDt.js";import"./async-directive-CXMWIWl6.js";import"./index-Bzw9ITyu.js";import"./base-button-adapter-Brj4AgaH.js";import"./focus-indicator-OGPrUnUk.js";import"./icon-Bg0ht1cC.js";import"./icon-button-kjWo9h6o.js";a();s();m();r.define([n,i]);const p="forge-structured-card",D={title:"Components/Structured Card",component:p,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const E=["ScrollableBodyContent"];export{t as ScrollableBodyContent,E as __namedExportsOrder,D as default};
