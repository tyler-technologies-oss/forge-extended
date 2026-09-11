import{x as t}from"./iframe-BKxBIIJQ.js";import{s as e}from"./decorators-CiAOTrg1.js";import{I as r,m as n,f as i}from"./with-default-aria-DjItAXX6.js";import"./content-scaffold-7A7AwKK6.js";import"./structured-card-Dw-wAYym.js";import{d as a}from"./index-B9PZSlU1.js";import{d as m}from"./index-CBKvSyMs.js";import{d as s}from"./index-DVopLR72.js";import{d}from"./index-0JZT0dcO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BldoUTPl.js";import"./constants-aeBb4lYV.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-D3GzrXFC.js";import"./async-directive-CnrapT-E.js";import"./directive-CJw_OlP2.js";import"./utils-B42KGafL.js";import"./class-map-BNDdSF1T.js";import"./index-BaUYnTlJ.js";import"./toolbar-Be9BG9fS.js";import"./base-button-adapter-B1QGS9Um.js";import"./focus-indicator-evqk8lHd.js";import"./button-constants-D3zZPESn.js";import"./icon-CGdxk2in.js";import"./icon-button-DNvrWAkH.js";a();m();s();d();r.define([n,i]);const p="forge-content-scaffold",T={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[e(`
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
