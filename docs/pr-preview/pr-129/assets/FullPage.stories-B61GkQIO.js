import{x as e}from"./iframe-CJA-oYji.js";import{s as t}from"./decorators-eIhikN9P.js";import{I as r,n,e as a,d as i}from"./with-default-aria-Cyn6jl-k.js";import"./content-scaffold-BBiBNCfq.js";import"./structured-card-Bi28ONSB.js";import{d as s}from"./index-Dhltft6a.js";import{d as m}from"./index-BFvX2EMV.js";import{d}from"./index-DFwCaa_u.js";import{d as p}from"./index-MdvfrA-s.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BWp4YXPh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-07JDB8ZZ.js";import"./async-directive-DVtU5Q-2.js";import"./directive-CJw_OlP2.js";import"./class-map-DEfjwoUI.js";import"./index-DdNbJoJK.js";import"./toolbar-CKYt7XE_.js";import"./base-button-adapter-A0K3LK6K.js";import"./focus-indicator-D2GI4J6r.js";import"./icon-DZ9Vtx3q.js";import"./icon-button-BpsGkVSY.js";s();m();d();p();r.define([n,a,i]);const c="forge-content-scaffold",O={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const R=["FullPage"];export{o as FullPage,R as __namedExportsOrder,O as default};
