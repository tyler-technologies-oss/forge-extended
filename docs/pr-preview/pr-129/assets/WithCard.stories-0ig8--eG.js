import{x as t}from"./iframe-BTWM928H.js";import{s as e}from"./decorators-Clb0bK1c.js";import{I as r,l as n,e as a}from"./with-default-aria-xU-wGtUD.js";import"./content-scaffold-Do-LqXjd.js";import"./structured-card-B0rCrF6P.js";import{d as i}from"./index-DUzHJuzA.js";import{d as m}from"./index-D1ZWgNkk.js";import{d as s}from"./index-DMKc8jLN.js";import{d}from"./index-DNv18lDM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BDkZqNfO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-jcZMQK43.js";import"./async-directive-CR3mRzRK.js";import"./directive-CJw_OlP2.js";import"./class-map-CucrPsTa.js";import"./index-B4DVHpVw.js";import"./toolbar-DZd2IoV1.js";import"./base-button-adapter-epmXT1m8.js";import"./focus-indicator-3mHajcQl.js";import"./icon-CwrdGC3_.js";import"./icon-button-CVlUviaJ.js";i();m();s();d();r.define([n,a]);const p="forge-content-scaffold",D={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
      * {
        box-sizing: border-box;
      }

      forge-content-scaffold::part(header) {
        background: var(--forge-theme-primary-container-minimum);
        padding: 8px;
      }

      forge-content-scaffold::part(footer) {
        background: var(--forge-theme-primary-container-minimum);
        padding: 8px;
      }

      .card-container {
        max-width: 600px;
        margin: 0 auto;
        padding: var(--forge-spacing-medium);
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>t`
      <forge-card style="--forge-card-padding: 0;">
        <forge-content-scaffold>
          <!-- <div slot="before-header-start">before-start-slot</div> -->
          <h2 slot="header-start" class="forge-typography--heading4">Project Details</h2>
          <forge-icon-button aria-label="More actions" slot="header-end">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>
          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <forge-button variant="filled" slot="footer-end">
            <forge-icon slot="start" name="edit"></forge-icon>
            Edit Project
          </forge-button>
        </forge-content-scaffold>
      </forge-card>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const O=["InACard"];export{o as InACard,O as __namedExportsOrder,D as default};
