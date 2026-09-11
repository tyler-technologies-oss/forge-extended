import{x as t}from"./iframe-BQvNP4M8.js";import{s as o}from"./decorators-DR7BoQuS.js";import{I as r,m as n,f as i,o as a}from"./with-default-aria-BV0tb14g.js";import"./content-scaffold-BdQ1grer.js";import"./structured-card-BqkvrJXT.js";import{d as s}from"./index-CqUYpRUX.js";import{d as m}from"./index-BOzD9efv.js";import{d}from"./index-CQOn-3Nq.js";import{d as p}from"./index-D2FhTJht.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CCcGDftf.js";import"./constants-vdQC6Ta-.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DMN2dfXf.js";import"./async-directive-CTOhvSPE.js";import"./directive-CJw_OlP2.js";import"./utils-DlINy0qF.js";import"./class-map-Dn5BTarG.js";import"./index-C7XE9NDI.js";import"./toolbar-CqEtmpme.js";import"./base-button-adapter-sdHxCcuI.js";import"./focus-indicator-B8XRN2Qz.js";import"./icon-CWB8ZOKZ.js";import"./icon-button-CY77UBum.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
