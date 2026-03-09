import{x as t}from"./iframe-CVNQnw_n.js";import{s as r}from"./decorators-Df9cRaVj.js";import{I as n,c as i,t as a}from"./with-default-aria-YnUymmup.js";import"./structured-card-BCFh8FOD.js";import{d as p}from"./index-OcvsHiQW.js";import{d as m}from"./index-B1lUAh7d.js";import{d}from"./index-BKePeJ-r.js";import{d as e}from"./constants-CT4hc6nY.js";import{O as s,S as f}from"./select-qP5qCALj.js";import{d as c}from"./index-B4dz0Bv5.js";import{d as l}from"./index-shD0SyI7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-DGF6iGYy.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-C3Wo-2y8.js";import"./index-BFGvebPf.js";import"./index-gex9ljS6.js";import"./base-button-adapter-DpRT1I6F.js";import"./with-form-associated-DmrYMBI5.js";import"./field-CH2lCydG.js";import"./list-dropdown-aware-core-CVRFwoUb.js";import"./linear-progress-constants-1g4hXK_X.js";import"./list-BHr-W1ZY.js";import"./popover-DCd-rQqo.js";import"./with-longpress-listener-BF8o-vni.js";import"./dismissible-stack-CTIDD9LU.js";import"./skeleton-constants-DQe2qQ0w.js";import"./divider-DE5vvSZF.js";import"./circular-progress-DtByY-J7.js";import"./scaffold-mem2UgVY.js";import"./tooltip-CCuaDwjC.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function u(){e(s)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function g(){e(f)}p();m();d();g();u();c();l();n.define([i,a]);const v="forge-structured-card",X={title:"Components/Structured Card",component:v,decorators:[r(`
      .workflow-card-container {
        max-width: 320px;
      }

    `)],render:()=>t`
      <div class="workflow-card-container">
        <forge-structured-card heading-level="2">
          <div slot="title">Workflow Status</div>

          <div slot="body">
            <forge-stack gap="16">
              <forge-select label="Update status" label-position="block-start" variant="outlined" value="pending">
                <forge-option value="pending">Pending Review</forge-option>
                <forge-option value="approved">Approved</forge-option>
                <forge-option value="rejected">Rejected</forge-option>
                <forge-option value="revision">Needs Revision</forge-option>
              </forge-select>
              <forge-stack gap="8">
                <forge-button variant="filled">
                  <forge-icon name="calendar" external></forge-icon>
                  Schedule interview
                </forge-button>
                <forge-button variant="tonal">
                  <forge-icon name="send" external></forge-icon>
                  Send reference request
                </forge-button>
              </forge-stack>
            </forge-stack>
          </div>
        </forge-structured-card>
      </div>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const Y=["WorkflowStatusCard"];export{o as WorkflowStatusCard,Y as __namedExportsOrder,X as default};
