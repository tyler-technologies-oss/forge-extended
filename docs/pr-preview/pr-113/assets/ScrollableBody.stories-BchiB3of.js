import{x as t}from"./iframe-BLBGr_e1.js";import{s as o}from"./decorators-DymKSVOx.js";import{I as n,i as r,k as i,n as a}from"./with-default-aria-j9_2aAXy.js";import"./content-scaffold-DDgS51On.js";import"./structured-card-gtJntq0p.js";import{d as s}from"./index-C46rp3iP.js";import{d}from"./index-Cvlr1Fow.js";import{d as m}from"./index-C6kC5_it.js";import{d as p}from"./index-JAfPDPI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BWeQaIEx.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-DMXmN-NY.js";import"./directive-CJw_OlP2.js";import"./class-map-Lixk5fnK.js";import"./index-WDId0Zsq.js";import"./toolbar-EY6IT7rT.js";import"./base-button-adapter-CmMwM6ia.js";import"./icon-button-CyO3fO9U.js";s();d();m();p();n.define([r,i,a]);const c="forge-content-scaffold",z={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
