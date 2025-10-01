import{e as S,i as c}from"./iframe-bqRbncEZ.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function l(t){const o=t.shadowRoot,e=t.constructor.styles,n=t.ownerDocument.defaultView;if(!(!S||!o||!e||!n))if(Array.isArray(e)&&e.length){const s=e.map(a=>{const r=new n.CSSStyleSheet;return r.replaceSync(a.toString()),r});o.adoptedStyleSheets=s}else{const s=new n.CSSStyleSheet;s.replaceSync(e.toString()),o.adoptedStyleSheets=[s]}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class d extends c{adoptedCallback(){l(this)}}export{d as B};
