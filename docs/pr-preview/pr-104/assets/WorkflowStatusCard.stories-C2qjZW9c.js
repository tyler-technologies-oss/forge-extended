import{x as t}from"./iframe-DB7khuar.js";import{s as r}from"./decorators-UG1vF1ly.js";import{I as n,d as i,t as a}from"./with-default-aria-DgzfDd8k.js";import"./structured-card-CkyEsAk_.js";import{d as p}from"./index-Ca38EChD.js";import{d as m}from"./index-RO2oMO-W.js";import{d}from"./index-6Sip5Tjo.js";import{d as e}from"./constants-BMWnaSmQ.js";import{O as s,S as f}from"./select-BxDurEg4.js";import{d as c}from"./index-58-Icikv.js";import{d as l}from"./index-0747GUEQ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-map-BvuDHFBf.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-yFt3Bvs6.js";import"./when-3fO0zp9C.js";import"./async-directive-DqBYNgnJ.js";import"./index-DhCrqmz7.js";import"./index-C5QB_oV8.js";import"./base-button-adapter-C-uPU8dd.js";import"./with-form-associated-CCCZO_Vv.js";import"./field-CoyAvxQ3.js";import"./list-dropdown-aware-core-BRo_LFnX.js";import"./linear-progress-constants-CY85v_hl.js";import"./list-8KuYcnc1.js";import"./popover-BIxd14mu.js";import"./with-longpress-listener-BjkQTcWc.js";import"./dismissible-stack-DeFK8Kbz.js";import"./skeleton-constants-n_uuRaNC.js";import"./divider-H1n21uAZ.js";import"./circular-progress-0xM_ldm6.js";import"./scaffold-BCz7niqv.js";import"./tooltip-D5Dwqa-r.js";/**
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
