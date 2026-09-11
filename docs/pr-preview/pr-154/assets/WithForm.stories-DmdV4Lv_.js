import{x as t}from"./iframe-D_NpdGMW.js";import{s as e}from"./decorators-BGtlJFC5.js";import{I as r,o as i,F as n}from"./with-default-aria-QQHkHnUD.js";import"./structured-card-Dm2Fy9jW.js";import{d as a,a as p,b as m}from"./index-Csjgs8G6.js";import{d as s}from"./index-cQL53Ya2.js";import{d as f}from"./index-D1Q40_o8.js";import{d as l}from"./index-BVIHw5f8.js";import{d as c}from"./index-C7e5CFZ9.js";import{d}from"./index-CYHX8xAo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CyYN7QVE.js";import"./constants-B5g2L9LN.js";import"./utils-Duph8ic8.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-pH4tyynp.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-B20VKqCn.js";import"./when-3fO0zp9C.js";import"./lit-utils-DQdM5MP4.js";import"./async-directive-CI_QSR1Q.js";import"./index-q9xROInv.js";import"./select-DqnMJWbk.js";import"./with-form-associated-Cw-EPjlx.js";import"./base-button-adapter-BO3BfEkZ.js";import"./focus-indicator-DP9wjAbI.js";import"./field-DcSzRj8X.js";import"./button-constants-0Bfcv2FI.js";import"./button-toggle-group-constants-Bo49vgYl.js";import"./icon-button-4GgzV-1p.js";import"./icon-Dd_9Vvpg.js";import"./list-dropdown-aware-core-BD33dnOX.js";import"./linear-progress-constants-C0luehvm.js";import"./list-GS8h1t_U.js";import"./popover-Xht5KpYt.js";import"./with-longpress-listener-dfgopyNX.js";import"./dismissible-stack-BlfoJVVW.js";import"./skeleton-constants-BxIJ0k3n.js";import"./divider-DQDisoZe.js";import"./circular-progress-CfgYXd9J.js";import"./scaffold-B4n7LoDj.js";import"./toolbar-B4ibBQfC.js";import"./tooltip-9D2XTgYD.js";s();f();l();c();a();p();m();d();r.define([i,n]);const g="forge-structured-card",no={title:"Components/Structured Card",component:g,decorators:[e(`
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
