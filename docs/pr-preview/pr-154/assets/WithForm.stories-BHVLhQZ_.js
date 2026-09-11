import{x as t}from"./iframe-BMggY0Eq.js";import{s as e}from"./decorators-D63UJ0xr.js";import{I as r,o as i,F as n}from"./with-default-aria-NpWy7zUu.js";import"./structured-card-QF1puaCQ.js";import{d as a,a as p,b as m}from"./index-BQbVJpGX.js";import{d as s}from"./index-B1v7lt4m.js";import{d as f}from"./index-CcueWhpz.js";import{d as l}from"./index-5wD8nJ0C.js";import{d as c}from"./index-5onNpJe-.js";import{d}from"./index-ChjM4iTk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-FMdYT5yi.js";import"./constants-o7gsy-Mc.js";import"./utils-Ci8BKDzo.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BX9NNbX2.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DAyfz4LZ.js";import"./when-3fO0zp9C.js";import"./lit-utils-CWd9ykg1.js";import"./async-directive-Bkkdsiao.js";import"./index-DQHA1GbE.js";import"./select-CCapt4Qk.js";import"./with-form-associated-wJwmldXl.js";import"./base-button-adapter-CeJFAvB2.js";import"./focus-indicator-CZ8Q_jHJ.js";import"./field-CY6YMjTl.js";import"./list-dropdown-aware-core-Df_Yx7SR.js";import"./linear-progress-constants-sP7-VXBx.js";import"./list-D06jlVyk.js";import"./popover-Dv1Ura9R.js";import"./with-longpress-listener-Dn5IepJm.js";import"./dismissible-stack-Bly2SCxr.js";import"./skeleton-constants-DLEQlIIU.js";import"./divider-BLlYHK1i.js";import"./circular-progress-BbGahz8R.js";import"./scaffold-DdcCtsHe.js";import"./icon-B7BdjdS-.js";import"./toolbar-CNb_cDVA.js";import"./icon-button-TlXi4X8k.js";import"./tooltip-BKYddWnJ.js";s();f();l();c();a();p();m();d();r.define([i,n]);const g="forge-structured-card",ro={title:"Components/Structured Card",component:g,decorators:[e(`
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
