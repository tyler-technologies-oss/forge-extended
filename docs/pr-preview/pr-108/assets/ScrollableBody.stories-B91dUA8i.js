import{x as t}from"./iframe-D-b265Qe.js";import{s as o}from"./decorators-owxWNVv9.js";import{I as n,i as r,k as i,n as a}from"./base-lit-element-CHK6hcJb.js";import"./content-scaffold-xdtsj-m2.js";import"./structured-card-CZbeOORn.js";import{d as s}from"./index-BErJb6bw.js";import{d as m}from"./index-j42Td1BD.js";import{d}from"./index-Db7SBkgZ.js";import{d as p}from"./index-DatREZyY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BZeAcB7O.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Dp8OgWBi.js";import"./async-directive-Ddbstadh.js";import"./directive-CJw_OlP2.js";import"./class-map-BlNvkze3.js";import"./index-ffW596Mg.js";import"./toolbar-DwWZojgp.js";import"./base-button-adapter-Cf7Momcl.js";import"./with-default-aria-CfYAYNVS.js";import"./a11y-utils-BEJ5Kgpe.js";import"./icon-CAmrsB6e.js";s();m();d();p();n.define([r,i,a]);const c="forge-content-scaffold",R={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
      * {
        box-sizing: border-box;
      }


      .card-container {
        max-width: 360px;
   
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>t`
      <div class="card-container">
        <forge-card style="--forge-card-padding: 0;">
          <forge-content-scaffold style="--forge-content-scaffold-body-height: 200px;">
            <div slot="header-start">Project Details</div>
            <forge-icon-button aria-label="More actions" slot="header-end">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
            <div slot="body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <forge-button variant="filled" slot="footer-end">
              <forge-icon slot="start" name="save"></forge-icon>
              Save
            </forge-button>
          </forge-content-scaffold>
        </forge-card>
      </div>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const T=["ScrollableBody"];export{e as ScrollableBody,T as __namedExportsOrder,R as default};
