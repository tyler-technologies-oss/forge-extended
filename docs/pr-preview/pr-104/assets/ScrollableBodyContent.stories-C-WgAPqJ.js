import{x as e}from"./iframe-B0rgvcMd.js";import{s as o}from"./decorators-DYz-y-PS.js";import{I as r,a as n,t as i}from"./with-default-aria-BUhlkTmW.js";import"./structured-card-D3jia-61.js";import{d as a}from"./index-CRJHHdFl.js";import{d as s}from"./index-DsQ5XK4e.js";import{d as m}from"./index-OlYWjQus.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CtQmhAAe.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-CINNvP5M.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CO6DW3xH.js";import"./async-directive-BkQirC5F.js";import"./index-DZbgxP8_.js";import"./base-button-adapter-Q-z38xU5.js";a();s();m();r.define([n,i]);const d="forge-structured-card",L={title:"Components/Structured Card",component:d,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const _=["ScrollableBodyContent"];export{t as ScrollableBodyContent,_ as __namedExportsOrder,L as default};
