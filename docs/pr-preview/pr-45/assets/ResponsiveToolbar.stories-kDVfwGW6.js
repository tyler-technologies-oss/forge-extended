import{E as w,r as T,a as x,x as h}from"./lit-element-CxMangmT.js";import{C as R,B as O,a as $,c as S,_ as B,b as A,d as z,n as g,t as N}from"./property-NpxWfahL.js";import{e as p,n as f}from"./ref-3566f8QO.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const I=`${R}toolbar`,C={INVERTED:"inverted"},D={...C},b={elementName:I,observedAttributes:C,attributes:D};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const P='<template><div class="forge-toolbar" part="root"><div class="section" part="before-section-start"><slot name="before-start"></slot></div><div class="inner center" part="inner"><div class="section" part="section-start"><slot name="start"></slot><slot></slot></div><div class="section center" part="section-center"><slot name="center"></slot></div><div class="section end" part="section-end"><slot name="end"></slot></div></div><div class="section end" part="after-section-end"><slot name="after-end"></slot></div></div></template>',H=":host{display:block}:host([hidden]){display:none}.forge-toolbar{--_toolbar-background:var(--forge-toolbar-background, var(--forge-theme-surface, #ffffff));--_toolbar-height:var(--forge-toolbar-height, 56px);--_toolbar-min-height:var(--forge-toolbar-min-height, var(--_toolbar-height));--_toolbar-divider-width:var(--forge-toolbar-divider-width, var(--forge-border-thin, 1px));--_toolbar-divider-style:var(--forge-toolbar-divider-style, solid);--_toolbar-divider-color:var(--forge-toolbar-divider-color, var(--forge-theme-outline, #e0e0e0));--_toolbar-shape:var(--forge-toolbar-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_toolbar-start-start-shape:var(--forge-toolbar-start-start-shape, var(--_toolbar-shape));--_toolbar-start-end-shape:var(--forge-toolbar-start-end-shape, var(--_toolbar-shape));--_toolbar-end-start-shape:var(--forge-toolbar-end-start-shape, 0);--_toolbar-end-end-shape:var(--forge-toolbar-end-end-shape, 0);--_toolbar-padding:var(--forge-toolbar-padding, var(--forge-spacing-medium, 16px));--_toolbar-padding-block:var(--forge-toolbar-padding-block, 0);--_toolbar-padding-inline:var(--forge-toolbar-padding-inline, var(--_toolbar-padding));--_toolbar-columns:var(--forge-toolbar-columns, auto 1fr auto)}.forge-toolbar{display:grid;grid-template-columns:var(--_toolbar-columns);height:var(--_toolbar-height);min-height:var(--_toolbar-min-height);box-sizing:border-box;padding-inline:0;border-block-end-width:var(--_toolbar-divider-width);border-block-end-style:var(--_toolbar-divider-style);border-block-end-color:var(--_toolbar-divider-color);border-start-start-radius:var(--_toolbar-start-start-shape);border-start-end-radius:var(--_toolbar-start-end-shape);border-end-start-radius:var(--_toolbar-end-start-shape);border-end-end-radius:var(--_toolbar-end-end-shape);background:var(--_toolbar-background)}.inner{display:grid;grid-template-columns:var(--_toolbar-columns);padding-inline:var(--_toolbar-padding-inline);padding-block:var(--_toolbar-padding-block);box-sizing:border-box}.section{display:flex;align-items:center;width:100%;box-sizing:border-box}.section.center{justify-content:center}.section.end{justify-content:end}:host([inverted]) .forge-toolbar{--_toolbar-start-start-shape:var(--forge-toolbar-start-start-shape, 0);--_toolbar-start-end-shape:var(--forge-toolbar-start-end-shape, 0);--_toolbar-end-start-shape:var(--_toolbar-shape);--_toolbar-end-end-shape:var(--_toolbar-shape);border-block-end:none;border-block-start-width:var(--_toolbar-divider-width);border-block-start-style:var(--_toolbar-divider-style);border-block-start-color:var(--_toolbar-divider-color)}:host(:is([no-divider],[no-border])) .forge-toolbar{border:none}:host([no-padding]) .forge-toolbar{--_toolbar-padding:var(--forge-toolbar-padding, 0)}:host([auto-height]) .forge-toolbar{--_toolbar-height:var(--forge-toolbar-height, auto)}::slotted(:is(h1,h2,h3,h4,h5,h6,p)){margin:0}";let v=class extends O{static get observedAttributes(){return Object.values(b.observedAttributes)}constructor(){super(),this._inverted=!1,$(this,P,H)}attributeChangedCallback(e,o,r){switch(e){case b.observedAttributes.INVERTED:this.inverted=S(r);break}}get inverted(){return this._inverted}set inverted(e){this._inverted!==e&&(this._inverted=e,this.toggleAttribute(b.attributes.INVERTED,this._inverted))}};v=B([A({name:b.elementName})],v);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function U(){z(v)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=t=>t??w;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class M{constructor(e,{target:o,config:r,callback:a,skipInitial:n}){this.t=new Set,this.o=!1,this.i=!1,this.h=e,o!==null&&this.t.add(o??e),this.l=r,this.o=n??this.o,this.callback=a,window.ResizeObserver?(this.u=new ResizeObserver(i=>{this.handleChanges(i),this.h.requestUpdate()}),e.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(e){var o;this.value=(o=this.callback)==null?void 0:o.call(this,e,this.u)}hostConnected(){for(const e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.t.add(e),this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}}const V=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;position:relative}forge-toolbar[auto-height]{--forge-toolbar-min-height: var(--forge-toolbar-height, 56px)}:host(:state(overflowing)) #actions-desktop,:host(:not(:state(overflowing))) #actions-mobile{visibility:hidden;position:absolute}`;var W=Object.defineProperty,q=Object.getOwnPropertyDescriptor,k=t=>{throw TypeError(t)},c=(t,e,o,r)=>{for(var a=r>1?void 0:r?q(e,o):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(a=(r?i(e,o,a):i(a))||a);return r&&a&&W(e,o,a),a},E=(t,e,o)=>e.has(t)||k("Cannot "+o),u=(t,e,o)=>(E(t,e,"read from private field"),o?o.call(t):e.get(t)),j=(t,e,o)=>e.has(t)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),L=(t,e,o,r)=>(E(t,e,"write to private field"),e.set(t,o),o),l;const G=24,X="forge-responsive-toolbar";let s=class extends x{constructor(){super(),this.autoHeight=!0,this.noBorder=!1,this.inverted=!1,this._startSlotContainer=p(),this._endSlotContainer=p(),j(this,l),L(this,l,this.attachInternals())}connectedCallback(){super.connectedCallback(),new M(this,{callback:()=>requestAnimationFrame(()=>this._handleResize())})}_handleResize(){var o,r;const t=((o=this._startSlotContainer.value)==null?void 0:o.getBoundingClientRect().right)||0,e=((r=this._endSlotContainer.value)==null?void 0:r.getBoundingClientRect().left)||0;t+G>=e?(u(this,l).states.add("overflowing"),this._emitOverflowEvent(!0)):(u(this,l).states.delete("overflowing"),this._emitOverflowEvent(!1))}_emitOverflowEvent(t){const e=new CustomEvent("forge-responsive-toolbar-overflow",{bubbles:!0,cancelable:!0,detail:{overflow:t}});this.dispatchEvent(e)}render(){return h`
      <forge-toolbar
        ?auto-height=${this.autoHeight}
        ?no-border=${this.noBorder}
        ?inverted=${this.inverted}
        @slotchange=${this._handleResize}>
        <slot name="before-start" slot="before-start"></slot>
        <div ${f(this._startSlotContainer)} slot="start">
          <slot name="start"></slot>
        </div>

        <div slot="end" id="actions-desktop" ${f(this._endSlotContainer)}>
          <slot name="actions-desktop"></slot>
        </div>

        <div slot="end" id="actions-mobile">
          <slot name="actions-mobile"></slot>
        </div>
        <slot name="after-end" slot="after-end"></slot>
      </forge-toolbar>
    `}};l=new WeakMap;U();s.styles=T(V);c([g({type:Boolean,attribute:"auto-height"})],s.prototype,"autoHeight",2);c([g({type:Boolean,attribute:"no-border"})],s.prototype,"noBorder",2);c([g({type:Boolean,attribute:"inverted"})],s.prototype,"inverted",2);s=c([N(X)],s);const J="forge-responsive-toolbar",K={title:"Components/Responsive Toolbar",render:t=>{const e=[{label:"Add User ",value:"add-user",variant:"text"},{label:"Remove User",value:"remove-user",variant:"outlined"},{label:"Third action",value:"third-action",variant:"raised"}];return h`<div style="width: 960px; resize:both; overflow:auto;">
      <forge-card style="--forge-card-padding: 0; height: 100%;">
        <forge-responsive-toolbar
          ?no-border=${t.noBorder}
          ?auto-height=${t.autoHeight}
          ?inverted=${t.inverted}>
          <forge-icon-button aria-label="Icon button demo" slot="before-start">
            <forge-icon name="arrow_back" external></forge-icon>
          </forge-icon-button>
          <div slot="start" class="forge-typography--heading4">${t.title}</div>
          <forge-stack inline alignment="center" slot="actions-desktop">
            ${e.map(o=>h` <forge-button variant=${F(o.variant)}>${o.label}</forge-button> `)}
          </forge-stack>
          <div slot="actions-mobile">
            <forge-menu .options=${e}>
              <forge-icon-button aria-label="Open menu">
                <forge-icon name="more_vert" external></forge-icon>
              </forge-icon-button>
            </forge-menu>
          </div>
          ${t.afterEnd?h`<div slot="after-end">
                <forge-button>After end</forge-button>
              </div>`:w}
        </forge-responsive-toolbar>

        <div style="padding: 16px;">
          <p>
            To see this component respond, drag this div smaller using the drag handle on the bottom right of the card
          </p>
        </div>
      </forge-card>
    </div>`},component:J,argTypes:{title:{control:"text"},noBorder:{control:"boolean"},autoHeight:{control:"boolean"},inverted:{control:"boolean"},afterEnd:{control:"boolean",name:"Show after-end slot content"}},args:{title:"This is a really really long title",noBorder:!1,autoHeight:!0,inverted:!1,afterEnd:!1}},d={args:{demoWidth:855,afterEnd:!1}};var _,m,y;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    demoWidth: 855,
    afterEnd: false
  }
}`,...(y=(m=d.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const Q=["Demo"],oe=Object.freeze(Object.defineProperty({__proto__:null,Demo:d,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{d as D,oe as R};
