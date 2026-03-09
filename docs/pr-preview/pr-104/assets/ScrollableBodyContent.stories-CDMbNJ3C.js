import{x as t}from"./iframe-Dxb2KeVZ.js";import{s as o}from"./decorators-4q0M2Mqa.js";import{I as r,a as n,t as i}from"./with-default-aria-Pzw_Jr5V.js";import"./structured-card-B94--HPc.js";import{d as a}from"./index-CzVWnncg.js";import{d as s}from"./index-DKqaCjLN.js";import{d}from"./index-DUHbrLBU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BPpq6bMv.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-CPfkXDCp.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CteIJTDU.js";import"./index-BQChMZbL.js";import"./index-B_qmEqKH.js";import"./base-button-adapter-EaVvvjOq.js";a();s();d();r.define([n,i]);const m="forge-structured-card",L={title:"Components/Structured Card",component:m,decorators:[o(`
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
    `)],render:()=>t`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const _=["ScrollableBodyContent"];export{e as ScrollableBodyContent,_ as __namedExportsOrder,L as default};
