import{E as c}from"./lit-element-CxMangmT.js";import{f as $}from"./directive-helpers-D8tqYSsJ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l={ATTRIBUTE:1,CHILD:2},u=e=>(...t)=>({_$litDirective$:e,values:t});class _{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=(e,t)=>{var n;const s=e._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,t,!1),h(i,t);return!0},d=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},f=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),p(t)}};function a(e){this._$AN!==void 0?(d(this),this._$AM=e,f(this)):this._$AM=e}function A(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)h(n[r],!1),d(n[r]);else n!=null&&(h(n,!1),d(n));else h(this,e)}const p=e=>{e.type==l.CHILD&&(e._$AP??(e._$AP=A),e._$AQ??(e._$AQ=a))};class C extends _{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),f(this),this.isConnected=t._$AU}_$AO(t,s=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(h(this,t),d(this))}setValue(t){if($(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=()=>new Y;class Y{}const o=new WeakMap,N=u(class extends C{render(e){return c}update(e,[t]){var n;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(n=e.options)==null?void 0:n.host,this.rt(this.ct=e.element)),c}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=o.get(t);s===void 0&&(s=new WeakMap,o.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=o.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{T as a,u as e,_ as i,N as n,l as t};
