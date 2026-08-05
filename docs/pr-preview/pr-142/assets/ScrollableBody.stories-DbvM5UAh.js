import{x as t}from"./iframe-PAcmqUG6.js";import{s as o}from"./decorators-BO-g6OUX.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-C94a9uFn.js";import"./content-scaffold-DWSwjSgG.js";import"./structured-card-DWUKFSsW.js";import{d as s}from"./index-DoaAQejo.js";import{d as m}from"./index-_OO7FmJl.js";import{d}from"./index-Drzkv_8K.js";import{d as p}from"./index-B3t8z8gC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-BOdxSeCd.js";import"./constants-CJiu0c9M.js";import"./a11y-utils-H-OyiifR.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BklS-4kJ.js";import"./async-directive-CgiLW7ik.js";import"./directive-CJw_OlP2.js";import"./utils-C5cUnwQo.js";import"./class-map-DzN9jdVO.js";import"./index-CXEOG6x9.js";import"./toolbar-1R5JIcgu.js";import"./base-button-adapter-K6HIUfEq.js";import"./focus-indicator-BgHurxD4.js";import"./icon-Cqpt27RA.js";import"./icon-button-C7FqYiw7.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",A={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const F=["ScrollableBody"];export{e as ScrollableBody,F as __namedExportsOrder,A as default};
