import{x as t}from"./iframe-D57lnzun.js";import{s as o}from"./decorators-CFSCtWt1.js";import{I as r,k as n,n as i}from"./with-default-aria-DA-8eCL_.js";import"./structured-card-BsBd1gza.js";import{d as s}from"./index-D4nVRwkL.js";import{d as a}from"./index-Cumu2rFi.js";import{d as m}from"./index-DZ8fPbc3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DdZyzDPp.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-x4fM8xZp.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-rFyuqOke.js";import"./async-directive-SbbwZGlH.js";import"./index-DvvphVy4.js";import"./base-button-adapter-w5D8OH20.js";s();a();m();r.define([n,i]);const d="forge-structured-card",L={title:"Components/Structured Card",component:d,decorators:[o(`
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
