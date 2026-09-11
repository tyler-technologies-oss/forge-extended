import{x as t}from"./iframe-SHp831uv.js";import{s as n}from"./decorators-D3zuKrK4.js";import{I as r,q as a,o as i,n as s,C as m,f as d,h as c,m as l}from"./with-default-aria-8o2urQtC.js";import"./structured-card-CEY4gkbz.js";import{d as p}from"./index-BKf0lMQ0.js";import{d as u}from"./index-BvX6YG-j.js";import{d as f}from"./index-QCVF5AdA.js";import{d as g}from"./index-DmbUqmOF.js";import{d as y}from"./index-CCaHehHy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-B6C_dIc3.js";import"./constants-DRnO8cEF.js";import"./utils-BQMvIrLC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BFLBEnAY.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DLp9mQPY.js";import"./when-3fO0zp9C.js";import"./lit-utils-kTKF_2VI.js";import"./async-directive-sXoZ91VK.js";import"./index-D9hqbZqQ.js";import"./base-button-adapter-BVuIt3Kj.js";import"./focus-indicator-B9vvCHqs.js";import"./button-constants-BjrjrMWP.js";import"./icon-rFRese_m.js";import"./icon-button-q71bmWIK.js";import"./list-dropdown-aware-core-VqYDPu-u.js";import"./linear-progress-constants-DYYvrefD.js";import"./list-CwHjiN9d.js";import"./popover-C195UbFv.js";import"./with-longpress-listener-BbaSALIF.js";import"./dismissible-stack-DesdIcOG.js";import"./skeleton-constants-_FgaUUgn.js";import"./tooltip-BjVCG211.js";p();u();f();g();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",oe={title:"Components/Structured Card",component:I,decorators:[n(`
      .actions-card-container {
        max-width: 600px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>t`
      <div class="actions-card-container">
        <forge-structured-card heading-level="2">
          <div slot="title">Project Details</div>
          <forge-menu slot="after-header-actions" .options=${[{label:"Edit",value:"edit",leadingIcon:"edit",leadingIconType:"component"},{label:"Share",value:"share",leadingIcon:"share",leadingIconType:"component"},{label:"Download",value:"download",leadingIcon:"download",leadingIconType:"component"},{label:"Delete",value:"delete",leadingIcon:"delete",leadingIconType:"component"}]} @forge-menu-select=${o=>{console.log("Menu option selected:",o.detail)}}>
            <forge-icon-button aria-label="More actions">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
          </forge-menu>

          <div slot="body" class="card-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <forge-button variant="text" slot="footer-secondary-action">
            <forge-icon slot="start" name="delete"></forge-icon>
            Cancel
          </forge-button>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const te=["HeaderIconButton"];export{e as HeaderIconButton,te as __namedExportsOrder,oe as default};
