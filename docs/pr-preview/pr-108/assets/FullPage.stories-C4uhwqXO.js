import{x as e}from"./iframe-D-b265Qe.js";import{s as t}from"./decorators-owxWNVv9.js";import{I as r,n,k as a,g as i}from"./base-lit-element-CHK6hcJb.js";import"./content-scaffold-xdtsj-m2.js";import"./structured-card-CZbeOORn.js";import{d as s}from"./index-BErJb6bw.js";import{d as m}from"./index-j42Td1BD.js";import{d}from"./index-Db7SBkgZ.js";import{d as p}from"./index-DatREZyY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BZeAcB7O.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Dp8OgWBi.js";import"./async-directive-Ddbstadh.js";import"./directive-CJw_OlP2.js";import"./class-map-BlNvkze3.js";import"./index-ffW596Mg.js";import"./toolbar-DwWZojgp.js";import"./base-button-adapter-Cf7Momcl.js";import"./with-default-aria-CfYAYNVS.js";import"./a11y-utils-BEJ5Kgpe.js";import"./icon-CAmrsB6e.js";s();m();d();p();r.define([n,a,i]);const c="forge-content-scaffold",O={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
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
