import{x as e}from"./iframe-CvDen7jj.js";import{s as t}from"./decorators-CieCEVyF.js";import{I as r,i as n,k as a}from"./with-default-aria-DvI_GkHh.js";import"./content-scaffold-BY55CMxR.js";import"./structured-card-BghgIW9R.js";import{d as i}from"./index-Qq8hHtA0.js";import{d as s}from"./index-8wiImEks.js";import{d}from"./index-YEQnyyNX.js";import{d as m}from"./index-Bfn2cnRU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CWDydYTm.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-B-bdRhug.js";import"./directive-CJw_OlP2.js";import"./class-map-ZacDQJmd.js";import"./index-Baoujx7x.js";import"./toolbar-CllaGwLw.js";import"./base-button-adapter-4rkhQtln.js";import"./icon-button-DZMUXEXF.js";i();s();d();m();r.define([n,a]);const p="forge-content-scaffold",L={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const M=["InACard"];export{o as InACard,M as __namedExportsOrder,L as default};
