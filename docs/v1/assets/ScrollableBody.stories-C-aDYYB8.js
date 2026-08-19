import{x as t}from"./iframe-DM3VcRwQ.js";import{s as o}from"./decorators-BtzLxqDu.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-CbDiNaj6.js";import"./content-scaffold-CXRTOdxN.js";import"./structured-card-BT99xFt5.js";import{d as s}from"./index-8YZyPydv.js";import{d as m}from"./index-C0RNhWWv.js";import{d}from"./index-DM33Awa1.js";import{d as p}from"./index-DVLPIiIV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C99DI8oj.js";import"./constants-Cw5Hg5LI.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CbD2rxyi.js";import"./async-directive-BE11uONG.js";import"./directive-CJw_OlP2.js";import"./utils-DqrUBr-j.js";import"./class-map-BDJ7d3Iq.js";import"./index-CUl2HWD5.js";import"./toolbar-CrSP9-Ec.js";import"./base-button-adapter-BWBlIri0.js";import"./focus-indicator-DIMQ33ld.js";import"./icon-CIVAmTYB.js";import"./icon-button-0QZ5U7ki.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
