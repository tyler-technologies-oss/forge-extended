import{x as t}from"./iframe-BMggY0Eq.js";import{s as o}from"./decorators-D63UJ0xr.js";import{I as r,m as n,f as i,o as a}from"./with-default-aria-NpWy7zUu.js";import"./content-scaffold-DAyfz4LZ.js";import"./structured-card-QF1puaCQ.js";import{d as s}from"./index-BmpyAemi.js";import{d as m}from"./index-B1v7lt4m.js";import{d}from"./index-DJgm2yXY.js";import{d as p}from"./index-CcueWhpz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-FMdYT5yi.js";import"./constants-o7gsy-Mc.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CWd9ykg1.js";import"./async-directive-Bkkdsiao.js";import"./directive-CJw_OlP2.js";import"./utils-Ci8BKDzo.js";import"./class-map-BX9NNbX2.js";import"./index-DQHA1GbE.js";import"./toolbar-CNb_cDVA.js";import"./base-button-adapter-CeJFAvB2.js";import"./focus-indicator-CZ8Q_jHJ.js";import"./icon-B7BdjdS-.js";import"./icon-button-TlXi4X8k.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
