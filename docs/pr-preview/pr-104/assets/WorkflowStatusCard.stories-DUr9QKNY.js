import{x as t}from"./iframe-Dxb2KeVZ.js";import{s as r}from"./decorators-4q0M2Mqa.js";import{I as n,c as i,t as a}from"./with-default-aria-Pzw_Jr5V.js";import"./structured-card-B94--HPc.js";import{d as p}from"./index-CzVWnncg.js";import{d as m}from"./index-DKqaCjLN.js";import{d}from"./index-DUHbrLBU.js";import{d as e}from"./constants-BPpq6bMv.js";import{O as s,S as f}from"./select-CSatKw0c.js";import{d as c}from"./index-2LvtLvFD.js";import{d as l}from"./index-B1lLZYWE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-CPfkXDCp.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CteIJTDU.js";import"./index-BQChMZbL.js";import"./index-B_qmEqKH.js";import"./base-button-adapter-EaVvvjOq.js";import"./with-form-associated-C9ej7B0M.js";import"./field-D1HRHaLi.js";import"./list-dropdown-aware-core-Bq5lcuSa.js";import"./linear-progress-constants-B0ljMIsv.js";import"./list-9G1D_fUJ.js";import"./popover-BVcdjoKh.js";import"./with-longpress-listener-DPOUe2mJ.js";import"./dismissible-stack-Cnw1O-q1.js";import"./skeleton-constants-D2sUC9gL.js";import"./divider-EjcYkCQ6.js";import"./circular-progress-CfsP8TBo.js";import"./scaffold-C-deRj1s.js";import"./tooltip-Dh5PLOPC.js";/**
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
