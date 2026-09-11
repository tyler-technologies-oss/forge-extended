import{x as t}from"./iframe-SHp831uv.js";import{s as e}from"./decorators-D3zuKrK4.js";import{I as r,o as i,F as n}from"./with-default-aria-8o2urQtC.js";import"./structured-card-CEY4gkbz.js";import{d as a,a as p,b as m}from"./index-Bjm368ns.js";import{d as s}from"./index-BKf0lMQ0.js";import{d as f}from"./index-QCVF5AdA.js";import{d as l}from"./index-BMo0Mogn.js";import{d as c}from"./index-CCaHehHy.js";import{d}from"./index-KZ9udkuJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-B6C_dIc3.js";import"./constants-DRnO8cEF.js";import"./utils-BQMvIrLC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BFLBEnAY.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DLp9mQPY.js";import"./when-3fO0zp9C.js";import"./lit-utils-kTKF_2VI.js";import"./async-directive-sXoZ91VK.js";import"./index-D9hqbZqQ.js";import"./select-DL8z86Bp.js";import"./with-form-associated-CrAn_-fE.js";import"./base-button-adapter-BVuIt3Kj.js";import"./focus-indicator-B9vvCHqs.js";import"./field-7mXRGzaS.js";import"./button-constants-BjrjrMWP.js";import"./button-toggle-group-constants-BJfObX6l.js";import"./icon-button-q71bmWIK.js";import"./icon-rFRese_m.js";import"./list-dropdown-aware-core-VqYDPu-u.js";import"./linear-progress-constants-DYYvrefD.js";import"./list-CwHjiN9d.js";import"./popover-C195UbFv.js";import"./with-longpress-listener-BbaSALIF.js";import"./dismissible-stack-DesdIcOG.js";import"./skeleton-constants-_FgaUUgn.js";import"./divider-C6ejeDne.js";import"./circular-progress-LqVQE4DK.js";import"./scaffold-dEdRzjMI.js";import"./toolbar-92yZYbx_.js";import"./tooltip-BjVCG211.js";s();f();l();c();a();p();m();d();r.define([i,n]);const g="forge-structured-card",no={title:"Components/Structured Card",component:g,decorators:[e(`
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
