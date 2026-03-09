import{x as t}from"./iframe-CVNQnw_n.js";import{s as o}from"./decorators-Df9cRaVj.js";import{I as n,d as r,a,t as i}from"./with-default-aria-YnUymmup.js";import"./content-scaffold-C3Wo-2y8.js";import"./structured-card-BCFh8FOD.js";import{d as s}from"./index-BFGvebPf.js";import{d}from"./index-OcvsHiQW.js";import{d as m}from"./index-B1lUAh7d.js";import{d as p}from"./index-BKePeJ-r.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CT4hc6nY.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-DGF6iGYy.js";import"./directive-CJw_OlP2.js";import"./index-gex9ljS6.js";import"./base-button-adapter-DpRT1I6F.js";s();d();m();p();n.define([r,a,i]);const c="forge-content-scaffold",E={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
            <!-- <div slot="before-header-start">before-start-slot</div> -->
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const M=["ScrollableBody"];export{e as ScrollableBody,M as __namedExportsOrder,E as default};
