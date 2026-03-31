import{x as t}from"./iframe-SK2PMNIF.js";import{s as o}from"./decorators-wuW5XaRX.js";import{I as r,k as n,n as i}from"./with-default-aria-BqQZ2yzA.js";import"./structured-card-BQHCsDR8.js";import{d as s}from"./index-DUBj99tu.js";import{d as a}from"./index-C5qYFdzG.js";import{d as m}from"./index-DWG_2-Wo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-D-IuVu2w.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-DhfKX3UQ.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-rE-EFLI6.js";import"./async-directive-4u_bWldE.js";import"./index-vZRSQ4bo.js";import"./base-button-adapter-DDFr_tnJ.js";s();a();m();r.define([n,i]);const d="forge-structured-card",L={title:"Components/Structured Card",component:d,decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const _=["ScrollableBodyContent"];export{e as ScrollableBodyContent,_ as __namedExportsOrder,L as default};
