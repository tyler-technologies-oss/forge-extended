import{x as t}from"./iframe-BF-eadiO.js";import{s as o}from"./decorators-BfoY5jdu.js";import{I as r,m as n,f as i,o as a}from"./with-default-aria-C9Cpz9fo.js";import"./content-scaffold-BSQYp9l0.js";import"./structured-card-Dhajx7DP.js";import{d as s}from"./index-Cu3I02Pi.js";import{d as m}from"./index-lWkxKqp0.js";import{d}from"./index-Bf9budZ-.js";import{d as p}from"./index-BXjDdWpl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C71I-6m3.js";import"./constants-BoaaRiLs.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BHvSaoDW.js";import"./async-directive-Bduev6Sc.js";import"./directive-CJw_OlP2.js";import"./utils-BfbFTmRC.js";import"./class-map-D_T65IvU.js";import"./index-CV3Mr06h.js";import"./toolbar-XCuAAbPt.js";import"./base-button-adapter-DoZYG0eo.js";import"./focus-indicator-D-YpIZ-n.js";import"./icon-CQn9_tFD.js";import"./icon-button-DqObqSUj.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const q=["ScrollableBody"];export{e as ScrollableBody,q as __namedExportsOrder,V as default};
