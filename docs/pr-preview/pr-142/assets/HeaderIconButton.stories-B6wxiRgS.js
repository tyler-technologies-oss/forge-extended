import{x as t}from"./iframe-Bi2jjneX.js";import{s as n}from"./decorators-DNY5vP3B.js";import{I as r,p as a,n as i,m as s,P as m,e as d,g as c,l}from"./with-default-aria-Bp7BOLsO.js";import"./structured-card-DHVvfmbA.js";import{d as p}from"./index-DHUKMcv2.js";import{d as u}from"./index-BCE9tY8-.js";import{d as g}from"./index-DWa_oEDo.js";import{d as f}from"./index-hRQkz5w9.js";import{d as y}from"./index-C0Oo9ld7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-eW29fe97.js";import"./constants-Be1rccdx.js";import"./a11y-utils-DwvBqvsn.js";import"./custom-element-C028faeO.js";import"./utils-CcBW4sMr.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-O7KlQ7_y.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-EaNV-Q01.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cv2eJcz_.js";import"./async-directive-BIDRqgTX.js";import"./index-Du7tMeRQ.js";import"./base-button-adapter-C8jd6JO5.js";import"./focus-indicator-DOPW3N_b.js";import"./icon-Ctp2z37r.js";import"./icon-button-wHfoQc6h.js";import"./list-dropdown-aware-core-CdpH7wGz.js";import"./linear-progress-constants-Bvf6UPhG.js";import"./list-CzKhlGGg.js";import"./popover-DrcrzHVK.js";import"./with-longpress-listener-UPFaAWLE.js";import"./dismissible-stack-Cj9RVODa.js";import"./skeleton-constants-NPtbkoSs.js";import"./tooltip-DdUToc9Z.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",te={title:"Components/Structured Card",component:I,decorators:[n(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const ne=["HeaderIconButton"];export{e as HeaderIconButton,ne as __namedExportsOrder,te as default};
