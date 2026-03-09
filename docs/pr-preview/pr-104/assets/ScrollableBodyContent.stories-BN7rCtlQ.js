import{x as t}from"./iframe-DgM_YBnP.js";import{s as o}from"./decorators-IuwOfT-s.js";import{I as r,a as n,t as i}from"./with-default-aria-DtsBzZO1.js";import"./structured-card-D68VIq55.js";import{d as a}from"./index-DzCDnRYk.js";import{d as s}from"./index-TLX34D2h.js";import{d}from"./index-dhkt5BEK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CWbR4eAd.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-DVhbbNmU.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CbamNx1q.js";import"./index-BxWU0voc.js";import"./index-CzU3xEkc.js";import"./base-button-adapter-CKXlJ5O5.js";a();s();d();r.define([n,i]);const m="forge-structured-card",L={title:"Components/Structured Card",component:m,decorators:[o(`
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
