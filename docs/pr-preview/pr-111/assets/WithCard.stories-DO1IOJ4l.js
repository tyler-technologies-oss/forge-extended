import{x as e}from"./iframe-CRGMA7MF.js";import{s as t}from"./decorators-yuALYnC9.js";import{I as r,i as n,k as a}from"./with-default-aria-B9Uqzh4X.js";import"./content-scaffold-D1ec7_f1.js";import"./structured-card-DtwyOIDj.js";import{d as i}from"./index-DTmatjjE.js";import{d as s}from"./index-BZVuSxJ2.js";import{d}from"./index-Dp2tWucw.js";import{d as m}from"./index-uXqUG2Aw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-wEdw9n5d.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-Dtl8rOlh.js";import"./directive-CJw_OlP2.js";import"./class-map-PEn_HxmA.js";import"./index-BfNhydOc.js";import"./toolbar-BRe9leVG.js";import"./base-button-adapter-DuAZ2MZl.js";import"./icon-button-B3BzD6-P.js";i();s();d();m();r.define([n,a]);const p="forge-content-scaffold",L={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[t(`
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
