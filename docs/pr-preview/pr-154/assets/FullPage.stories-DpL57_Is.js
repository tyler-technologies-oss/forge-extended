import{x as e}from"./iframe-BQvNP4M8.js";import{s as t}from"./decorators-DR7BoQuS.js";import{I as r,o as n,f as a,e as i}from"./with-default-aria-BV0tb14g.js";import"./content-scaffold-BdQ1grer.js";import"./structured-card-BqkvrJXT.js";import{d as s}from"./index-CqUYpRUX.js";import{d as m}from"./index-BOzD9efv.js";import{d as p}from"./index-CQOn-3Nq.js";import{d}from"./index-D2FhTJht.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CCcGDftf.js";import"./constants-vdQC6Ta-.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DMN2dfXf.js";import"./async-directive-CTOhvSPE.js";import"./directive-CJw_OlP2.js";import"./utils-DlINy0qF.js";import"./class-map-Dn5BTarG.js";import"./index-C7XE9NDI.js";import"./toolbar-CqEtmpme.js";import"./base-button-adapter-sdHxCcuI.js";import"./focus-indicator-B8XRN2Qz.js";import"./icon-CWB8ZOKZ.js";import"./icon-button-CY77UBum.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",T={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
      body {
        height: 100dvh;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #fafafa;
      }
      
      p {
        padding: 0;
        margin: 0;
      }

      #storybook-root,
      #root-inner {
        height: 100%;
      }
    `)],render:()=>e`
      <forge-content-scaffold>
        <forge-icon-button aria-label="Back" slot="before-header-start">
          <forge-icon name="arrow_back"></forge-icon>
        </forge-icon-button>
        <h2 slot="header-start" class="forge-typography--heading4">Project Details</h2>
        <forge-icon-button aria-label="More actions" slot="header-end">
          <forge-icon name="more_vert"></forge-icon>
        </forge-icon-button>
        <div slot="body">
          <forge-card>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </forge-card>
        </div>
        <forge-button variant="filled" slot="footer-end">
          <forge-icon slot="start" name="save"></forge-icon>
          Save
        </forge-button>
      </forge-content-scaffold>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const V=["FullPage"];export{o as FullPage,V as __namedExportsOrder,T as default};
