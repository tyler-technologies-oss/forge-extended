import{t as n}from"./iframe-Cdub68sG.js";import{s as u}from"./constants-DgOXzPoc.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 *//**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *
 * Adapted and influenced from [Material Web](https://github.com/material-components/material-web).
 * The original source code can be found at: [GitHub](https://github.com/material-components/material-web/blob/main/internal/aria/aria.ts)
 */function f(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function b(t,i,o,{setAttribute:s}={setAttribute:!0}){Object.entries(o).forEach(([e,r])=>{u()&&(i[e]=r);const a=f(e);(s||!t.hasAttribute(a))&&n(t,r!=null,a,r)})}export{b as s};
