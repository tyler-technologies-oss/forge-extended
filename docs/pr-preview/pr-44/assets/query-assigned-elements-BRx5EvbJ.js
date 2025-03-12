import{e as u}from"./base-Bk1rqh9v.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(t){return(c,i)=>{const{slot:r,selector:n}=t??{},l="slot"+(r?`[name=${r}]`:":not([name])");return u(c,i,{get(){var s;const e=(s=this.renderRoot)==null?void 0:s.querySelector(l),o=(e==null?void 0:e.assignedElements(t))??[];return n===void 0?o:o.filter(m=>m.matches(n))}})}}export{d as o};
