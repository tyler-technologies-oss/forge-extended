import{x as t}from"./iframe-DXZ6s83A.js";import{s as o}from"./decorators-DVmMYtb2.js";import{I as n,e as r,a as i,t as a}from"./with-default-aria-CMgLG5pf.js";import"./content-scaffold-5oEyEHQB.js";import"./structured-card-BIscgXXW.js";import{d as s}from"./index-ee7vie9D.js";import{d}from"./index-C-Sl4zbR.js";import{d as m}from"./index-_pc6oYc4.js";import{d as p}from"./index-D3XE4yzi.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BlXYQ2LB.js";import"./when-3fO0zp9C.js";import"./async-directive-CUmTCJqj.js";import"./directive-CJw_OlP2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DqqWpVAk.js";import"./index-DWOWOpY5.js";import"./toolbar-BWoa5-Ja.js";import"./base-button-adapter-C2tW8SUu.js";s();d();m();p();n.define([r,i,a]);const c="forge-content-scaffold",z={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
