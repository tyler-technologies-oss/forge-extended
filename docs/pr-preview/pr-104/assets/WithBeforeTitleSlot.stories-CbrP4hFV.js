import{x as e}from"./iframe-3wzo8pqg.js";import{s as o}from"./decorators-DqcU-3Ii.js";import{I as r,d as n,t as a,f as s,j as i,a as c,g as m,e as d,b as p}from"./with-default-aria-CKF43MRP.js";import"./structured-card-BBWddpQN.js";import{d as l}from"./index-hAF4A-D_.js";import{d as f}from"./index-Drq0aiji.js";import{d as u}from"./index-CE7NL8BP.js";import{d as g}from"./index-B_vFNNC6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-dKbZ8DJi.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-C-vj6smv.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DW_ASeWw.js";import"./when-3fO0zp9C.js";import"./async-directive-xH3GX8Fk.js";import"./index-Cul97sQH.js";import"./base-button-adapter-BBTkTaCh.js";l();f();u();g();r.define([n,a,s,i,c,m,d,p]);const y="forge-structured-card",W={title:"Components/Structured Card",component:y,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const O=["WithBeforeTitleSlot"];export{t as WithBeforeTitleSlot,O as __namedExportsOrder,W as default};
