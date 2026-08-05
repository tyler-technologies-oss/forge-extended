import{x as e}from"./iframe-PAcmqUG6.js";import{s as t}from"./decorators-BO-g6OUX.js";import{I as r,n,e as a,d as i}from"./with-default-aria-C94a9uFn.js";import"./content-scaffold-DWSwjSgG.js";import"./structured-card-DWUKFSsW.js";import{d as s}from"./index-DoaAQejo.js";import{d as m}from"./index-_OO7FmJl.js";import{d as p}from"./index-Drzkv_8K.js";import{d}from"./index-B3t8z8gC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-BOdxSeCd.js";import"./constants-CJiu0c9M.js";import"./a11y-utils-H-OyiifR.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BklS-4kJ.js";import"./async-directive-CgiLW7ik.js";import"./directive-CJw_OlP2.js";import"./utils-C5cUnwQo.js";import"./class-map-DzN9jdVO.js";import"./index-CXEOG6x9.js";import"./toolbar-1R5JIcgu.js";import"./base-button-adapter-K6HIUfEq.js";import"./focus-indicator-BgHurxD4.js";import"./icon-Cqpt27RA.js";import"./icon-button-C7FqYiw7.js";s();m();p();d();r.define([n,a,i]);const c="forge-content-scaffold",q={title:"Components/Content Scaffold",component:c,tags:["hidden"],parameters:{layout:"fullscreen"},decorators:[t(`
      body {
        height: 100dvh;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #fafafa;
      }
      
      p {
        padding: 0;
        margin: 0;
      }

      #storybook-root,
      #root-inner {
        height: 100%;
      }
    `)],render:()=>e`
      <forge-content-scaffold>
        <forge-icon-button aria-label="Back" slot="before-header-start">
          <forge-icon name="arrow_back"></forge-icon>
        </forge-icon-button>
        <h2 slot="header-start" class="forge-typography--heading4">Project Details</h2>
        <forge-icon-button aria-label="More actions" slot="header-end">
          <forge-icon name="more_vert"></forge-icon>
        </forge-icon-button>
        <div slot="body">
          <forge-card>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </forge-card>
        </div>
        <forge-button variant="filled" slot="footer-end">
          <forge-icon slot="start" name="save"></forge-icon>
          Save
        </forge-button>
      </forge-content-scaffold>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const z=["FullPage"];export{o as FullPage,z as __namedExportsOrder,q as default};
