import{x as t}from"./iframe-3wzo8pqg.js";import{s as o}from"./decorators-DqcU-3Ii.js";import{I as n,e as r,a as i,t as a}from"./with-default-aria-CKF43MRP.js";import"./content-scaffold-DW_ASeWw.js";import"./structured-card-BBWddpQN.js";import{d as s}from"./index-BdH-quNn.js";import{d}from"./index-hAF4A-D_.js";import{d as m}from"./index-Drq0aiji.js";import{d as p}from"./index-CE7NL8BP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-dKbZ8DJi.js";import"./when-3fO0zp9C.js";import"./async-directive-xH3GX8Fk.js";import"./directive-CJw_OlP2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-C-vj6smv.js";import"./index-Cul97sQH.js";import"./toolbar-Bt40y0M0.js";import"./base-button-adapter-BBTkTaCh.js";s();d();m();p();n.define([r,i,a]);const c="forge-content-scaffold",z={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const D=["ScrollableBody"];export{e as ScrollableBody,D as __namedExportsOrder,z as default};
