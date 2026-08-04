import{x as t}from"./iframe-8MwHtudQ.js";import{s as n}from"./decorators-Dr0Y6ZqA.js";import{I as r,p as a,n as i,m as s,B as m,e as d,g as c,l}from"./with-default-aria-BPqXu6Xp.js";import"./structured-card-CTB1_avN.js";import{d as p}from"./index-BkFqknIl.js";import{d as u}from"./index-BkLVSv1f.js";import{d as g}from"./index-DFX5CsMH.js";import{d as f}from"./index-BlNvjjwO.js";import{d as y}from"./index-DxsCArns.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-DEZcwXBI.js";import"./constants-DuGcWjEK.js";import"./a11y-utils-CKen7KlO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Bb9nqZzS.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-xQoyTBhq.js";import"./when-3fO0zp9C.js";import"./lit-utils-BxX9MyhQ.js";import"./async-directive-4ylYArEM.js";import"./index-Cv99O3Oe.js";import"./base-button-adapter-D5X63cTL.js";import"./focus-indicator-0SpCC1vE.js";import"./icon-CLiBI_A3.js";import"./icon-button-CSXFtLEd.js";import"./list-dropdown-aware-core-DkFtQ-iz.js";import"./linear-progress-constants-DGXRP5pg.js";import"./list-Dr3qmqxp.js";import"./popover-Cgs7gvHW.js";import"./with-longpress-listener-CPq0IsXs.js";import"./dismissible-stack-C_hXrryT.js";import"./skeleton-constants-DOSOf2_8.js";import"./tooltip-CP1rbqy9.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",ee={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const oe=["HeaderIconButton"];export{e as HeaderIconButton,oe as __namedExportsOrder,ee as default};
