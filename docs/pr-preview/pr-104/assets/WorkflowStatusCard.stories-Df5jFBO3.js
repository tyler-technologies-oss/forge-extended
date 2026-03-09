import{x as t}from"./iframe-ClfnVjJE.js";import{s as r}from"./decorators-1S8OYJgI.js";import{I as n,c as i,t as a}from"./with-default-aria-CUvJvLa9.js";import"./structured-card-CYc2-5V5.js";import{d as p}from"./index-BNR-50hP.js";import{d as m}from"./index-CGIuqMbJ.js";import{d}from"./index-DCic9jWt.js";import{d as e}from"./constants-Dgh3IKuY.js";import{O as s,S as f}from"./select-DUanJ4BZ.js";import{d as c}from"./index-CqdHh3tg.js";import{d as l}from"./index-DgqgHZ9i.js";import"./_commonjsHelpers-CqkleIqs.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-Cq14IUd3.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-XWBlqaF6.js";import"./index-Dy49ZmVH.js";import"./index-BsUWP1B4.js";import"./base-button-adapter-BIIoUXqG.js";import"./with-form-associated-BQVgRbEe.js";import"./field-D1-Lk_H6.js";import"./list-dropdown-aware-core-CbZnhh4f.js";import"./linear-progress-constants-3KLLvimS.js";import"./list-Q2DuAwii.js";import"./popover-D7gcX0e7.js";import"./with-longpress-listener-CFRwkZEX.js";import"./dismissible-stack-Sk_8olgg.js";import"./skeleton-constants-BmYaPu7E.js";import"./divider-C7Qb9seT.js";import"./circular-progress-w3xO6jwU.js";import"./scaffold-D8M973Ob.js";import"./tooltip-gFSH8iS4.js";/**
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
