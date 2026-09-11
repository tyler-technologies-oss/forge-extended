import{x as t}from"./iframe-CYs4rUqc.js";import{s as e}from"./decorators-D2WRb3SP.js";import{I as r,o as i,F as n}from"./with-default-aria-IIDqe1FM.js";import"./structured-card-B7pylLaO.js";import{d as a,a as p,b as m}from"./index-B9JCN8LW.js";import{d as s}from"./index-Bga8EQCr.js";import{d as f}from"./index-CT7xPl9a.js";import{d as l}from"./index-nOF3D9E9.js";import{d as c}from"./index-B59deXtE.js";import{d}from"./index-C5m3cR43.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CDYWBB4R.js";import"./constants-BPzvPAwC.js";import"./utils-D4Tmth0h.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DcButXsH.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BTl4Y1k1.js";import"./when-3fO0zp9C.js";import"./lit-utils-D5rm5sHA.js";import"./async-directive-BlkTbESp.js";import"./index-Cna3cTfO.js";import"./select-DalOYgir.js";import"./with-form-associated-CwYtFu3O.js";import"./base-button-adapter-NVSd6npM.js";import"./focus-indicator-CYx5OX-M.js";import"./field-BRjIRUKC.js";import"./list-dropdown-aware-core-SZ81rRJB.js";import"./linear-progress-constants-B8PRsZXu.js";import"./list-YaOfIVb6.js";import"./popover-C-JuMD1I.js";import"./with-longpress-listener-Bj8Pz6MQ.js";import"./dismissible-stack-B5VulF68.js";import"./skeleton-constants-C5aIp4aK.js";import"./divider-DM8EAu5m.js";import"./circular-progress-DY-vaI0Q.js";import"./scaffold-BtebTbd2.js";import"./icon-0n1M6L10.js";import"./toolbar-D5rv4FEn.js";import"./icon-button-DvWO3SvX.js";import"./tooltip-BiQHgGlu.js";s();f();l();c();a();p();m();d();r.define([i,n]);const g="forge-structured-card",ro={title:"Components/Structured Card",component:g,decorators:[e(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const io=["WithForm"];export{o as WithForm,io as __namedExportsOrder,ro as default};
