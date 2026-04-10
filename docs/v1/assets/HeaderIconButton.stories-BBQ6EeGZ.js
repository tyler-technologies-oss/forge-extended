import{x as t}from"./iframe-_4hlFKQj.js";import{s as n}from"./decorators-Qpnt2RMz.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-DivMzomX.js";import"./structured-card-Dh9j_OmG.js";import{d as p}from"./index-DqXfG2P6.js";import{d as u}from"./index-BQxhPO2r.js";import{d as g}from"./index-DM1NEpjt.js";import{d as f}from"./index-BRSxzMEJ.js";import{d as y}from"./index-C8rru8Kv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CJ48DbBL.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BEUkFaMc.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BbjGlENw.js";import"./when-3fO0zp9C.js";import"./lit-utils-C7vIwOMK.js";import"./async-directive-D-qUlIdF.js";import"./index-BqMAhigS.js";import"./base-button-adapter-BNoTqDAF.js";import"./focus-indicator-D01OLwhO.js";import"./icon-BHP1Au3O.js";import"./icon-button-BDyk_Rtl.js";import"./list-dropdown-aware-core-YsPkrX09.js";import"./linear-progress-constants-BfA9YdrA.js";import"./list-BKAUIfdJ.js";import"./popover-Ct469kNn.js";import"./with-longpress-listener-B3p2Bz_x.js";import"./dismissible-stack-C6iny2x7.js";import"./skeleton-constants-DJgjDaeW.js";import"./tooltip-C5Kfw4l-.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["HeaderIconButton"];export{e as HeaderIconButton,Z as __namedExportsOrder,Y as default};
