import{x as t}from"./iframe-B-hqvoN1.js";import{s as n}from"./decorators-Cpx4MEKW.js";import{I as r,q as a,o as i,n as s,C as m,f as d,h as c,m as l}from"./with-default-aria-UTb2ZfEa.js";import"./structured-card-BiPXsTQp.js";import{d as p}from"./index-QNvooWwG.js";import{d as u}from"./index-D9577PU0.js";import{d as f}from"./index-CTAqYqwJ.js";import{d as g}from"./index-B8rf749d.js";import{d as y}from"./index-jx0yBWf-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C0MWYpx0.js";import"./constants-BzUGdP7s.js";import"./utils-BpfZpwkX.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DYK85YWM.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BXdNFto4.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bk_RM_31.js";import"./async-directive-By6MWvSL.js";import"./index-Db49f7Dd.js";import"./base-button-adapter-D9nRSDVN.js";import"./focus-indicator-DAcdgG1c.js";import"./button-constants-DFK1DSfd.js";import"./icon-y17Z_xfo.js";import"./icon-button-DfhV15n1.js";import"./list-dropdown-aware-core-BxCWhu19.js";import"./linear-progress-constants-DGrLFOyv.js";import"./list-1cByGSGC.js";import"./popover-NY4XGJLp.js";import"./with-longpress-listener-B_LXqv_X.js";import"./dismissible-stack-BCvcndys.js";import"./skeleton-constants-CuB2XE6P.js";import"./tooltip-XRL_YT2R.js";p();u();f();g();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",oe={title:"Components/Structured Card",component:I,decorators:[n(`
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
