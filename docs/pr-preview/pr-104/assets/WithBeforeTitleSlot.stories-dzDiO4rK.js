import{x as e}from"./iframe-o8AKceW-.js";import{s as o}from"./decorators-DGjX59FH.js";import{I as r,d as n,t as a,f as s,j as i,a as c,g as m,e as d,b as p}from"./with-default-aria-4hAzXmsh.js";import"./structured-card-xEoT-vJK.js";import{d as l}from"./index-DKpEeCOr.js";import{d as f}from"./index-Cwf-rS-Z.js";import{d as u}from"./index-CGJ6d-3c.js";import{d as g}from"./index-1eJYVTwN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-Coqop7Iu.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Ca8S5n4h.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CSNp5CPs.js";import"./when-3fO0zp9C.js";import"./async-directive-CDL1ONwT.js";import"./index-D6Rc6ePo.js";import"./index-BdQappt_.js";import"./base-button-adapter-3k_re6z4.js";l();f();u();g();r.define([n,a,s,i,c,m,d,p]);const y="forge-structured-card",O={title:"Components/Structured Card",component:y,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const R=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,R as __namedExportsOrder,O as default};
