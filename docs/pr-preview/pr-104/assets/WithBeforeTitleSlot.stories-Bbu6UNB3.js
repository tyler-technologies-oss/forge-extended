import{x as e}from"./iframe-DzMABE0J.js";import{s as o}from"./decorators-Bvbs7tRY.js";import{I as r,c as n,t as a,e as s,i,a as c,f as m,d,b as p}from"./with-default-aria-95UvAwgt.js";import"./structured-card-Dr5ouBaJ.js";import{d as l}from"./index-BNcDufrq.js";import{d as f}from"./index-DDmcS6Ts.js";import{d as u}from"./index-gaO1S0DB.js";import{d as g}from"./index-B8Y54OuA.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-v1LuvkTS.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-B5WkjWt2.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D7DbRIMc.js";import"./class-map-DM8pdLL7.js";import"./index-D392OEpP.js";import"./index-BxmYG8Fc.js";import"./base-button-adapter-Dvd2gz0U.js";l();f();u();g();r.define([n,a,s,i,c,m,d,p]);const y="forge-structured-card",j={title:"Components/Structured Card",component:y,decorators:[o(`
      .actions-card-container {
        max-width: 600px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>e`
      <div class="actions-card-container">
        <forge-structured-card heading-level="2">
          <forge-icon-button aria-label="Back" slot="before-title">
            <forge-icon name="arrow_back"></forge-icon>
          </forge-icon-button>
          <span slot="title">Project Details</span>
          <div slot="body" class="card-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <forge-button variant="text" slot="footer-secondary-action">
            <forge-icon slot="start" name="delete"></forge-icon>
            Cancel
          </forge-button>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const O=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,O as __namedExportsOrder,j as default};
