import{x as t}from"./iframe-DJZ_Mhdn.js";import{s as o}from"./decorators-DGNRYNou.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-BF8b74LB.js";import"./content-scaffold-B_1dm7y5.js";import"./structured-card-rpsPlFhQ.js";import{d as s}from"./index-3uDzBoil.js";import{d as m}from"./index-CV7Ac1pk.js";import{d}from"./index-CFkkeAfN.js";import{d as p}from"./index-VFdSlEYS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-zoTee3dw.js";import"./constants-DU7YENlu.js";import"./a11y-utils-BdEYBLk0.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bv0lYt6h.js";import"./async-directive-87g-kMN-.js";import"./directive-CJw_OlP2.js";import"./class-map-5ViRLiBk.js";import"./index-B0ZBKArx.js";import"./toolbar-gf0sVjE8.js";import"./base-button-adapter-JTDHV01r.js";import"./focus-indicator-CUZ9-AXC.js";import"./icon-Cj5Dx5Vx.js";import"./icon-button-eFRgNG73.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
