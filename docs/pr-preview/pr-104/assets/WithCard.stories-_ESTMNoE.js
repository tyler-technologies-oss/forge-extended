import{x as e}from"./iframe-Dw63orgv.js";import{s as t}from"./decorators-D91PMSFZ.js";import{I as r,e as n,a}from"./with-default-aria-C6cWEsYw.js";import"./content-scaffold-BtwldoSz.js";import"./structured-card-CGokAZ-d.js";import{d as i}from"./index-CwaqND4b.js";import{d as s}from"./index-C-gukQgV.js";import{d}from"./index-CCfV6emy.js";import{d as m}from"./index-CrwJhf2A.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-s5OOLmKV.js";import"./when-3fO0zp9C.js";import"./async-directive-skWUiMCP.js";import"./directive-CJw_OlP2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CSf3K4e7.js";import"./index-D6Jmgstu.js";import"./toolbar-RHF1vNLs.js";import"./base-button-adapter-Dq0prut0.js";i();s();d();m();r.define([n,a]);const p="forge-content-scaffold",L={title:"Components/Content Scaffold",component:p,tags:[""],decorators:[t(`
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
