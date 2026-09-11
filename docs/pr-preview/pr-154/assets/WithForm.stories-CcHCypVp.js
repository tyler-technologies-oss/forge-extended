import{x as t}from"./iframe-BQvNP4M8.js";import{s as e}from"./decorators-DR7BoQuS.js";import{I as r,o as i,F as n}from"./with-default-aria-BV0tb14g.js";import"./structured-card-BqkvrJXT.js";import{d as a,a as p,b as m}from"./index-D9q-kx-R.js";import{d as s}from"./index-BOzD9efv.js";import{d as f}from"./index-D2FhTJht.js";import{d as l}from"./index-CyjgtSgf.js";import{d as c}from"./index-CHkvTw8R.js";import{d}from"./index-CkHWdMCc.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CCcGDftf.js";import"./constants-vdQC6Ta-.js";import"./utils-DlINy0qF.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Dn5BTarG.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BdQ1grer.js";import"./when-3fO0zp9C.js";import"./lit-utils-DMN2dfXf.js";import"./async-directive-CTOhvSPE.js";import"./index-C7XE9NDI.js";import"./select-Dkuu_PRO.js";import"./with-form-associated-wboGwm6d.js";import"./base-button-adapter-sdHxCcuI.js";import"./focus-indicator-B8XRN2Qz.js";import"./field-ySV4EWnx.js";import"./list-dropdown-aware-core-DU_RKMJO.js";import"./linear-progress-constants-CXnj5Sji.js";import"./list-DL8pH3ud.js";import"./popover-C32PU8bG.js";import"./with-longpress-listener-DlzEWfJP.js";import"./dismissible-stack-2XmwfeXm.js";import"./skeleton-constants-y8qOw96Q.js";import"./divider-Dge--zq7.js";import"./circular-progress-aBLK6EqM.js";import"./scaffold-L1IAQ4dn.js";import"./icon-CWB8ZOKZ.js";import"./toolbar-CqEtmpme.js";import"./icon-button-CY77UBum.js";import"./tooltip-DPZurtrE.js";s();f();l();c();a();p();m();d();r.define([i,n]);const g="forge-structured-card",ro={title:"Components/Structured Card",component:g,decorators:[e(`
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
