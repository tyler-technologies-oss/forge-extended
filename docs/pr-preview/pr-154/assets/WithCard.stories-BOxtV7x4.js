import{x as t}from"./iframe-uYmMtFXe.js";import{s as e}from"./decorators-CdDnjmZ2.js";import{I as r,m as n,f as i}from"./with-default-aria-Ajc3U0-g.js";import"./content-scaffold-C31Bz0lK.js";import"./structured-card-AfuOk_JJ.js";import{d as a}from"./index-O7fHq4Q7.js";import{d as m}from"./index-BAQeSDAv.js";import{d as s}from"./index-Dav54a0r.js";import{d}from"./index-DY8pP0a5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-RnAbd9qQ.js";import"./constants-CpZXP-xH.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CpuDE9B8.js";import"./async-directive-DqvxUZro.js";import"./directive-CJw_OlP2.js";import"./utils-tJtJfoaq.js";import"./class-map-kcMyfuC-.js";import"./index-D1VuADBN.js";import"./toolbar-vwQAKoBO.js";import"./base-button-adapter-81PK7MPV.js";import"./focus-indicator-nFJ3EteD.js";import"./button-constants-BspY-3bl.js";import"./icon-D3Ok13p2.js";import"./icon-button-DbCPLHsE.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",T={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const V=["InACard"];export{o as InACard,V as __namedExportsOrder,T as default};
