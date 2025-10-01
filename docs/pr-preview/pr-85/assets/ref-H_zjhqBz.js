import{a as d,E as $}from"./iframe-CSIB9BhH.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a={ATTRIBUTE:1,CHILD:2},_=e=>(...t)=>({_$litDirective$:e,values:t});class A{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(t,!1),h(i,t);return!0},o=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},l=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),v(t)}};function f(e){this._$AN!==void 0?(o(this),this._$AM=e,l(this)):this._$AM=e}function u(e,t=!1,s=0){const i=this._$AH,c=this._$AN;if(c!==void 0&&c.size!==0)if(t)if(Array.isArray(i))for(let n=s;n<i.length;n++)h(i[n],!1),o(i[n]);else i!=null&&(h(i,!1),o(i));else h(this,e)}const v=e=>{e.type==a.CHILD&&(e._$AP??=u,e._$AQ??=f)};class p extends A{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),l(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(h(this,t),o(this))}setValue(t){if(d(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=()=>new C;class C{}const r=new WeakMap,M=_(class extends p{render(e){return $}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),$}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=r.get(t);s===void 0&&(s=new WeakMap,r.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?r.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{g as a,_ as e,A as i,M as n,a as t};
