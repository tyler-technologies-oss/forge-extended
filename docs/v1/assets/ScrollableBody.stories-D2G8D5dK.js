import{x as t}from"./iframe-wp6Y4X1Z.js";import{s as o}from"./decorators-DQ67Z-Ls.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-CVqkDYn1.js";import"./content-scaffold-CxoT8_on.js";import"./structured-card-B3K0tKm8.js";import{d as s}from"./index-ClZFo3pG.js";import{d as m}from"./index-CAUfugsS.js";import{d}from"./index-Cem7BACe.js";import{d as p}from"./index--CEVxK40.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-BWI71vpr.js";import"./constants-Uc3PCJIx.js";import"./a11y-utils-B6dbtuCh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-2YrF3CdM.js";import"./async-directive-CXaBKyKn.js";import"./directive-CJw_OlP2.js";import"./class-map-oYqt1_Oz.js";import"./index-DtBLHQ2d.js";import"./toolbar-nkK22NRm.js";import"./base-button-adapter-BSoBWcrC.js";import"./focus-indicator-BatZaZei.js";import"./icon-DbBPEUCr.js";import"./icon-button-CaDNzX8P.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
