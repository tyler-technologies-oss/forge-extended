import{i,g as a,h as p,j as f,k as g,l as x}from"./constants-BGw9Ygd1.js";import{t as I}from"./iframe-C4xYzNeS.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 *//**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *
 * Adapted and influenced from [Material Web](https://github.com/material-components/material-web).
 * The original source code can be found at: [GitHub](https://github.com/material-components/material-web/blob/main/labs/behaviors/focusable.ts)
 */const b=Symbol("privateIsFocusable"),r=Symbol("externalTabIndex"),o=Symbol("isUpdatingTabIndex"),h=Symbol("updateTabIndex");function E(l){var n,u,t;class s extends l{constructor(){super(...arguments),this[n]=!1,this[u]=null,this[t]=!1}get[i](){return this[b]}set[i](e){this[i]!==e&&(this[b]=e,this[h]())}connectedCallback(){this[i]=!0,super.connectedCallback?.()}attributeChangedCallback(e,c,m){if(super.attributeChangedCallback?.(e,c,m),!(e!=="tabindex"||this[o])){if(!this.hasAttribute("tabindex")){this[r]=null,this[h]();return}this[r]=this.tabIndex}}[(n=b,u=r,t=o,h)](){const e=this[i]?0:-1,c=this[r]??e;this[o]=!0,this.tabIndex=c,this[o]=!1}}return s}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 *//**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *
 * Adapted and influenced from [Material Web](https://github.com/material-components/material-web).
 * The original source code can be found at: [GitHub](https://github.com/material-components/material-web/blob/main/labs/behaviors/form-associated.ts)
 */function F(l){class n extends l{get form(){return this[a].form}get labels(){return this[a].labels}get name(){return this.getAttribute("name")??""}set name(t){I(this,!!t,"name",t)}[p](){return this[f]()}formDisabledCallback(t){this.disabled=t}set[g](t){const s=t==="select"?document.createElement("select"):document.createElement("input");s.setAttribute("type",t),s.name="internal",this._inputElement=s}[x](t){if(this._inputElement){if(this[a].validity.customError)return this[a].validationMessage;if(this._inputElement){const s=Object.entries(t);for(const[d,e]of s)this._inputElement[d]=e}return this._inputElement.validationMessage}}}return n.formAssociated=!0,n}export{E as W,F as a};
