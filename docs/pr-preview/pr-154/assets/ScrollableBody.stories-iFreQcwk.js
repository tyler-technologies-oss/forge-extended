import{x as t}from"./iframe-tSrdq99I.js";import{s as o}from"./decorators-Be_BwGSL.js";import{I as r,m as n,f as i,o as a}from"./with-default-aria-Cjw09Hyt.js";import"./content-scaffold-BxTyVT-B.js";import"./structured-card-DS1evckj.js";import{d as s}from"./index-WnaP6io9.js";import{d as m}from"./index-DgOFm9rI.js";import{d}from"./index-BvK_xeaI.js";import{d as p}from"./index-DUD4nVta.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-Cg4oYBYF.js";import"./constants-DEDYFPik.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-C9gaqnGj.js";import"./async-directive-BwzQrKcK.js";import"./directive-CJw_OlP2.js";import"./utils-BuNvph6x.js";import"./class-map-CTBWGCQU.js";import"./index-DxuUp4FF.js";import"./toolbar-dj6PAa2g.js";import"./base-button-adapter-BUXivA6l.js";import"./focus-indicator-DCA67l5Z.js";import"./button-constants-C8sFYYY3.js";import"./icon-xRFOyXu1.js";import"./icon-button-CPvX5qA1.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",q={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
