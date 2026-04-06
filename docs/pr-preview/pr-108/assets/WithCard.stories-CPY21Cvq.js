import{x as e}from"./iframe-DttLrut8.js";import{s as t}from"./decorators-BMgxjYYu.js";import{I as r,l as n,e as a}from"./with-default-aria-BBgQnutl.js";import"./content-scaffold-CL0v_556.js";import"./structured-card-BoFaXbJO.js";import{d as i}from"./index-eAONSdLR.js";import{d as s}from"./index-CZuHuUAw.js";import{d}from"./index-DG4QzpJo.js";import{d as m}from"./index-BLaZ9X0s.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CIll2i5Z.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-C3g8SD7Z.js";import"./async-directive-CYL7xBIF.js";import"./directive-CJw_OlP2.js";import"./class-map-CEbYB_a-.js";import"./index-DR1v3xxJ.js";import"./toolbar-BCRVhEfa.js";import"./base-button-adapter-BsbJCaCn.js";import"./focus-indicator-MdB1-hKZ.js";import"./icon-WnYytd-d.js";i();s();d();m();r.define([n,a]);const p="forge-content-scaffold",z={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[t(`
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
    `)],render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const D=["InACard"];export{o as InACard,D as __namedExportsOrder,z as default};
