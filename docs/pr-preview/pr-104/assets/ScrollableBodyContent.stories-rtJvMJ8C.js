import{x as t}from"./iframe-C_gvn9Wl.js";import{s as o}from"./decorators-CbCekqrR.js";import{I as r,k as n,n as i}from"./with-default-aria-Bnq6mFHu.js";import"./structured-card-B8BPh_2Y.js";import{d as s}from"./index-DhdGG7kx.js";import{d as a}from"./index-B_3ShfVN.js";import{d as m}from"./index-BaTUmXDb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-EZ5a0zyM.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-BehU3M2F.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CDFqUxus.js";import"./async-directive-B1lMd8rW.js";import"./index-BSUNpZPz.js";import"./base-button-adapter-BCsTjzZq.js";s();a();m();r.define([n,i]);const d="forge-structured-card",L={title:"Components/Structured Card",component:d,decorators:[o(`
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
