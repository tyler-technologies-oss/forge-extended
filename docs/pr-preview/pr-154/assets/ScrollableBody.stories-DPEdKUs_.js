import{x as t}from"./iframe-BKxBIIJQ.js";import{s as o}from"./decorators-CiAOTrg1.js";import{I as r,m as n,f as i,o as a}from"./with-default-aria-DjItAXX6.js";import"./content-scaffold-7A7AwKK6.js";import"./structured-card-Dw-wAYym.js";import{d as s}from"./index-B9PZSlU1.js";import{d as m}from"./index-CBKvSyMs.js";import{d}from"./index-DVopLR72.js";import{d as p}from"./index-0JZT0dcO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BldoUTPl.js";import"./constants-aeBb4lYV.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-D3GzrXFC.js";import"./async-directive-CnrapT-E.js";import"./directive-CJw_OlP2.js";import"./utils-B42KGafL.js";import"./class-map-BNDdSF1T.js";import"./index-BaUYnTlJ.js";import"./toolbar-Be9BG9fS.js";import"./base-button-adapter-B1QGS9Um.js";import"./focus-indicator-evqk8lHd.js";import"./button-constants-D3zZPESn.js";import"./icon-CGdxk2in.js";import"./icon-button-DNvrWAkH.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",q={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const A=["ScrollableBody"];export{e as ScrollableBody,A as __namedExportsOrder,q as default};
