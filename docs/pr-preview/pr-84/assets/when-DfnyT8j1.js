import{e as s}from"./base-CShCMygk.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c(t){return(e,n)=>{const{slot:r}=t??{},o="slot"+(r?`[name=${r}]`:":not([name])");return s(e,n,{get(){return this.renderRoot?.querySelector(o)?.assignedNodes(t)??[]}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t,e,n){return t?e(t):n?.(t)}export{i as a,c as n};
