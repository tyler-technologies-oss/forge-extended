import{x as t}from"./iframe-uYmMtFXe.js";import{s as e}from"./decorators-CdDnjmZ2.js";import{I as r,o as i,F as n}from"./with-default-aria-Ajc3U0-g.js";import"./structured-card-AfuOk_JJ.js";import{d as a,a as p,b as m}from"./index-rAS_Haiz.js";import{d as s}from"./index-BAQeSDAv.js";import{d as f}from"./index-DY8pP0a5.js";import{d as l}from"./index-CUDm76qG.js";import{d as c}from"./index-CRPDCMdI.js";import{d}from"./index-BPv42_UP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-RnAbd9qQ.js";import"./constants-CpZXP-xH.js";import"./utils-tJtJfoaq.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-kcMyfuC-.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-C31Bz0lK.js";import"./when-3fO0zp9C.js";import"./lit-utils-CpuDE9B8.js";import"./async-directive-DqvxUZro.js";import"./index-D1VuADBN.js";import"./select-B3oxsEcV.js";import"./with-form-associated-Boco0UHE.js";import"./base-button-adapter-81PK7MPV.js";import"./focus-indicator-nFJ3EteD.js";import"./field-B1KUtsFm.js";import"./button-constants-BspY-3bl.js";import"./button-toggle-group-constants-B_lkEInh.js";import"./icon-button-DbCPLHsE.js";import"./icon-D3Ok13p2.js";import"./list-dropdown-aware-core-CPh5XRX1.js";import"./linear-progress-constants-Dz-MRBIH.js";import"./list-CbfRLLJl.js";import"./popover-DWJoAGkp.js";import"./with-longpress-listener-DRadE3GR.js";import"./dismissible-stack-BvYLNEYj.js";import"./skeleton-constants-Dsvlu_GE.js";import"./divider-Bbvv2etO.js";import"./circular-progress-Od4bI8lH.js";import"./scaffold-BiiYTHn_.js";import"./toolbar-vwQAKoBO.js";import"./tooltip-D3av5xGC.js";s();f();l();c();a();p();m();d();r.define([i,n]);const g="forge-structured-card",no={title:"Components/Structured Card",component:g,decorators:[e(`
      .actions-card-container {
        max-width: 600px;
      }
    `)],render:()=>t`
      <div class="actions-card-container">
        <forge-structured-card heading-level="2">
          <div slot="title">Project Details</div>

          <forge-badge theme="warning" slot="header-actions">
            <span>In progress</span>
            <forge-icon name="construction" slot="end"></forge-icon>
          </forge-badge>
          <form slot="body">
            <forge-stack>
              <forge-text-field label-position="block-start">
                <label>Project name</label>
                <input type="text" />
              </forge-text-field>
              <forge-text-field label-position="block-start">
                <label>Description</label>
                <textarea></textarea>
              </forge-text-field>
              <forge-select label="Category" label-position="block-start">
                <forge-option value="development">Development</forge-option>
                <forge-option value="design">Design</forge-option>
                <forge-option value="marketing">Marketing</forge-option>
                <forge-option value="research">Research</forge-option>
              </forge-select>
              <forge-text-field label-position="block-start">
                <label>Owner</label>
                <input type="text" />
              </forge-text-field>
              <forge-file-picker accept=".jpg,.png,.pdf">
                <forge-button variant="outlined">Attach files</forge-button>
              </forge-file-picker>
            </forge-stack>
          </form>
          <forge-button variant="text" slot="footer-secondary-action">
            <forge-icon slot="start" name="delete"></forge-icon>
            Cancel
          </forge-button>
          <forge-button variant="tonal" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const ao=["WithForm"];export{o as WithForm,ao as __namedExportsOrder,no as default};
