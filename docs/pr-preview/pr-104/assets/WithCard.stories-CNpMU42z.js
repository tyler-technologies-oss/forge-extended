import{x as e}from"./iframe-3wzo8pqg.js";import{s as t}from"./decorators-DqcU-3Ii.js";import{I as r,e as n,a}from"./with-default-aria-CKF43MRP.js";import"./content-scaffold-DW_ASeWw.js";import"./structured-card-BBWddpQN.js";import{d as i}from"./index-BdH-quNn.js";import{d as s}from"./index-hAF4A-D_.js";import{d}from"./index-Drq0aiji.js";import{d as m}from"./index-CE7NL8BP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-dKbZ8DJi.js";import"./when-3fO0zp9C.js";import"./async-directive-xH3GX8Fk.js";import"./directive-CJw_OlP2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-C-vj6smv.js";import"./index-Cul97sQH.js";import"./toolbar-Bt40y0M0.js";import"./base-button-adapter-BBTkTaCh.js";i();s();d();m();r.define([n,a]);const p="forge-content-scaffold",L={title:"Components/Content Scaffold",component:p,tags:[""],decorators:[t(`
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
