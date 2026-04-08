import{x as e}from"./iframe-BLBGr_e1.js";import{s as o}from"./decorators-DymKSVOx.js";import{I as r,k as n,n as i}from"./with-default-aria-j9_2aAXy.js";import"./structured-card-gtJntq0p.js";import{d as a}from"./index-Cvlr1Fow.js";import{d as s}from"./index-C6kC5_it.js";import{d as m}from"./index-JAfPDPI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BWeQaIEx.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-Lixk5fnK.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DDgS51On.js";import"./async-directive-DMXmN-NY.js";import"./index-WDId0Zsq.js";import"./base-button-adapter-CmMwM6ia.js";import"./icon-button-CyO3fO9U.js";a();s();m();r.define([n,i]);const d="forge-structured-card",_={title:"Components/Structured Card",component:d,decorators:[o(`
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
