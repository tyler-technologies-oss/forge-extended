import{x as e}from"./iframe-Dw63orgv.js";import{s as o}from"./decorators-D91PMSFZ.js";import{I as r,a as n,t as i}from"./with-default-aria-C6cWEsYw.js";import"./structured-card-CGokAZ-d.js";import{d as a}from"./index-C-gukQgV.js";import{d as s}from"./index-CCfV6emy.js";import{d as m}from"./index-CrwJhf2A.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-s5OOLmKV.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CSf3K4e7.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BtwldoSz.js";import"./when-3fO0zp9C.js";import"./async-directive-skWUiMCP.js";import"./index-D6Jmgstu.js";import"./base-button-adapter-Dq0prut0.js";a();s();m();r.define([n,i]);const d="forge-structured-card",_={title:"Components/Structured Card",component:d,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const M=["ScrollableBodyContent"];export{t as ScrollableBodyContent,M as __namedExportsOrder,_ as default};
