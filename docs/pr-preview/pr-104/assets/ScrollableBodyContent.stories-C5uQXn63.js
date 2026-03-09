import{x as e}from"./iframe-DzMABE0J.js";import{s as o}from"./decorators-Bvbs7tRY.js";import{I as r,a as n,t as i}from"./with-default-aria-95UvAwgt.js";import"./structured-card-Dr5ouBaJ.js";import{d as a}from"./index-BNcDufrq.js";import{d as s}from"./index-DDmcS6Ts.js";import{d as m}from"./index-gaO1S0DB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-v1LuvkTS.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-B5WkjWt2.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D7DbRIMc.js";import"./class-map-DM8pdLL7.js";import"./index-D392OEpP.js";import"./index-BxmYG8Fc.js";import"./base-button-adapter-Dvd2gz0U.js";a();s();m();r.define([n,i]);const d="forge-structured-card",_={title:"Components/Structured Card",component:d,decorators:[o(`
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
          <div slot="title" class="forge-typography--heading4">Project Details</div>
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const M=["ScrollableBodyContent"];export{t as ScrollableBodyContent,M as __namedExportsOrder,_ as default};
