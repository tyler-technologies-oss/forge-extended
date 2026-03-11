import{x as e}from"./iframe-B0rgvcMd.js";import{s as t}from"./decorators-DYz-y-PS.js";import{I as r,e as n,a}from"./with-default-aria-BUhlkTmW.js";import"./content-scaffold-CO6DW3xH.js";import"./structured-card-D3jia-61.js";import{d as i}from"./index-BoHudAmg.js";import{d as s}from"./index-CRJHHdFl.js";import{d}from"./index-DsQ5XK4e.js";import{d as m}from"./index-OlYWjQus.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CtQmhAAe.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-BkQirC5F.js";import"./directive-CJw_OlP2.js";import"./class-map-CINNvP5M.js";import"./index-DZbgxP8_.js";import"./toolbar-Cnk9CDBA.js";import"./base-button-adapter-Q-z38xU5.js";i();s();d();m();r.define([n,a]);const p="forge-content-scaffold",B={title:"Components/Content Scaffold",component:p,tags:["hidden"],decorators:[t(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const L=["InACard"];export{o as InACard,L as __namedExportsOrder,B as default};
