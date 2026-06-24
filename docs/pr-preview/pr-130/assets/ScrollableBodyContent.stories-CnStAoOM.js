import{x as e}from"./iframe-CsIWdsoO.js";import{s as o}from"./decorators-a31kDVbj.js";import{I as r,e as n,n as i}from"./with-default-aria-7etb-YMf.js";import"./structured-card-B1izcCMy.js";import{d as a}from"./index-C4Nwcmnl.js";import{d as s}from"./index-CQRRmHVD.js";import{d as m}from"./index-DyZC5Fdy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DRaU4qN_.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Be-9tENx.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Cn5yX2m0.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cwm0xWgJ.js";import"./async-directive-XX5Cxs9U.js";import"./index-qwT5Amny.js";import"./base-button-adapter-DvjcpeiH.js";import"./focus-indicator-DOkwNuDB.js";import"./icon-DeCYe8gL.js";import"./icon-button-BFpACNpD.js";a();s();m();r.define([n,i]);const p="forge-structured-card",D={title:"Components/Structured Card",component:p,decorators:[o(`
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
