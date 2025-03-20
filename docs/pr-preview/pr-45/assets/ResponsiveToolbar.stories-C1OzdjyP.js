import{E as y,r as x,a as E,x as d}from"./lit-element-CxMangmT.js";import{s as T}from"./decorators-DScKEY3p.js";import{C as R,B as O,a as S,_ as $,c as B,d as A,n as g,b as z,t as N}from"./property-D_Q-X6Xo.js";import{a as p,n as f}from"./ref-BAtbkH2N.js";import{c as I}from"./service-adapter-CRnntHsK.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const D=`${R}toolbar`,C={INVERTED:"inverted"},P={...C},h={elementName:D,observedAttributes:C,attributes:P};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const H='<template><div class="forge-toolbar" part="root"><div class="section" part="before-section-start"><slot name="before-start"></slot></div><div class="inner center" part="inner"><div class="section" part="section-start"><slot name="start"></slot><slot></slot></div><div class="section center" part="section-center"><slot name="center"></slot></div><div class="section end" part="section-end"><slot name="end"></slot></div></div><div class="section end" part="after-section-end"><slot name="after-end"></slot></div></div></template>',U=":host{display:block}:host([hidden]){display:none}.forge-toolbar{--_toolbar-background:var(--forge-toolbar-background, var(--forge-theme-surface, #ffffff));--_toolbar-height:var(--forge-toolbar-height, 56px);--_toolbar-min-height:var(--forge-toolbar-min-height, var(--_toolbar-height));--_toolbar-divider-width:var(--forge-toolbar-divider-width, var(--forge-border-thin, 1px));--_toolbar-divider-style:var(--forge-toolbar-divider-style, solid);--_toolbar-divider-color:var(--forge-toolbar-divider-color, var(--forge-theme-outline, #e0e0e0));--_toolbar-shape:var(--forge-toolbar-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_toolbar-start-start-shape:var(--forge-toolbar-start-start-shape, var(--_toolbar-shape));--_toolbar-start-end-shape:var(--forge-toolbar-start-end-shape, var(--_toolbar-shape));--_toolbar-end-start-shape:var(--forge-toolbar-end-start-shape, 0);--_toolbar-end-end-shape:var(--forge-toolbar-end-end-shape, 0);--_toolbar-padding:var(--forge-toolbar-padding, var(--forge-spacing-medium, 16px));--_toolbar-padding-block:var(--forge-toolbar-padding-block, 0);--_toolbar-padding-inline:var(--forge-toolbar-padding-inline, var(--_toolbar-padding));--_toolbar-columns:var(--forge-toolbar-columns, auto 1fr auto)}.forge-toolbar{display:grid;grid-template-columns:var(--_toolbar-columns);height:var(--_toolbar-height);min-height:var(--_toolbar-min-height);box-sizing:border-box;padding-inline:0;border-block-end-width:var(--_toolbar-divider-width);border-block-end-style:var(--_toolbar-divider-style);border-block-end-color:var(--_toolbar-divider-color);border-start-start-radius:var(--_toolbar-start-start-shape);border-start-end-radius:var(--_toolbar-start-end-shape);border-end-start-radius:var(--_toolbar-end-start-shape);border-end-end-radius:var(--_toolbar-end-end-shape);background:var(--_toolbar-background)}.inner{display:grid;grid-template-columns:var(--_toolbar-columns);padding-inline:var(--_toolbar-padding-inline);padding-block:var(--_toolbar-padding-block);box-sizing:border-box}.section{display:flex;align-items:center;width:100%;box-sizing:border-box}.section.center{justify-content:center}.section.end{justify-content:end}:host([inverted]) .forge-toolbar{--_toolbar-start-start-shape:var(--forge-toolbar-start-start-shape, 0);--_toolbar-start-end-shape:var(--forge-toolbar-start-end-shape, 0);--_toolbar-end-start-shape:var(--_toolbar-shape);--_toolbar-end-end-shape:var(--_toolbar-shape);border-block-end:none;border-block-start-width:var(--_toolbar-divider-width);border-block-start-style:var(--_toolbar-divider-style);border-block-start-color:var(--_toolbar-divider-color)}:host(:is([no-divider],[no-border])) .forge-toolbar{border:none}:host([no-padding]) .forge-toolbar{--_toolbar-padding:var(--forge-toolbar-padding, 0)}:host([auto-height]) .forge-toolbar{--_toolbar-height:var(--forge-toolbar-height, auto)}::slotted(:is(h1,h2,h3,h4,h5,h6,p)){margin:0}";let v=class extends O{static get observedAttributes(){return Object.values(h.observedAttributes)}constructor(){super(),this._inverted=!1,S(this,H,U)}attributeChangedCallback(e,o,r){switch(e){case h.observedAttributes.INVERTED:this.inverted=I(r);break}}get inverted(){return this._inverted}set inverted(e){this._inverted!==e&&(this._inverted=e,this.toggleAttribute(h.attributes.INVERTED,this._inverted))}};v=$([B({name:h.elementName})],v);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function F(){A(v)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=t=>t??y;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class V{constructor(e,{target:o,config:r,callback:a,skipInitial:s}){this.t=new Set,this.o=!1,this.i=!1,this.h=e,o!==null&&this.t.add(o??e),this.l=r,this.o=s??this.o,this.callback=a,window.ResizeObserver?(this.u=new ResizeObserver(i=>{this.handleChanges(i),this.h.requestUpdate()}),e.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(e){var o;this.value=(o=this.callback)==null?void 0:o.call(this,e,this.u)}hostConnected(){for(const e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.t.add(e),this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}}const W=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;position:relative}forge-toolbar[auto-height]{--forge-toolbar-min-height: var(--forge-toolbar-height, 56px)}#end-small,#end-large{margin-inline-start:var(--forge-spacing-medium, 16px)}[slot=start]{padding-block:var(--forge-spacing-xxxsmall, 2px)}:host(:state(overflowing)) #end-large,:host(:not(:state(overflowing))) #end-small{visibility:hidden;position:absolute}`;var q=Object.defineProperty,j=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},b=(t,e,o,r)=>{for(var a=r>1?void 0:r?j(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(a=(r?i(e,o,a):i(a))||a);return r&&a&&q(e,o,a),a},k=(t,e,o)=>e.has(t)||w("Cannot "+o),L=(t,e,o)=>(k(t,e,"read from private field"),o?o.call(t):e.get(t)),G=(t,e,o)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),X=(t,e,o,r)=>(k(t,e,"write to private field"),e.set(t,o),o),c;const J=24,K="forge-responsive-toolbar";let n=class extends E{constructor(){super(),this.autoHeight=!0,this.noBorder=!1,this.inverted=!1,this._startSlotContainer=p(),this._endSlotContainer=p(),G(this,c),X(this,c,this.attachInternals())}connectedCallback(){super.connectedCallback(),new V(this,{callback:()=>requestAnimationFrame(()=>this._handleResize())})}_handleResize(){var r,a;const t=((r=this._startSlotContainer.value)==null?void 0:r.getBoundingClientRect().right)||0,e=((a=this._endSlotContainer.value)==null?void 0:a.getBoundingClientRect().left)||0,o=t+J>=e;z(L(this,c),"overflowing",o),this._emitOverflowEvent(o)}_emitOverflowEvent(t){const e=new CustomEvent("forge-responsive-toolbar-overflow",{bubbles:!0,cancelable:!0,detail:{overflow:t}});this.dispatchEvent(e)}render(){return d`
      <forge-toolbar
        ?auto-height=${this.autoHeight}
        ?no-border=${this.noBorder}
        ?inverted=${this.inverted}
        @slotchange=${this._handleResize}>
        <slot name="before-start" slot="before-start"></slot>
        <div ${f(this._startSlotContainer)} slot="start">
          <slot name="start"></slot>
        </div>

        <div slot="end" id="end-large" ${f(this._endSlotContainer)}>
          <slot name="end-large"></slot>
        </div>

        <div slot="end" id="end-small">
          <slot name="end-small"></slot>
        </div>
        <slot name="after-end" slot="after-end"></slot>
      </forge-toolbar>
    `}};c=new WeakMap;F();n.styles=x(W);b([g({type:Boolean,attribute:"auto-height"})],n.prototype,"autoHeight",2);b([g({type:Boolean,attribute:"no-border"})],n.prototype,"noBorder",2);b([g({type:Boolean,attribute:"inverted"})],n.prototype,"inverted",2);n=b([N(K)],n);const Q="forge-responsive-toolbar",Y={title:"Components/Responsive Toolbar",decorators:[T(`
      .rt-container {
        max-width: 960px;
        resize: both;
        overflow: auto;
      }

      .rt-card {
        height: 100%;
      }

      .rt-content {
        padding: var(--forge-spacing-medium);
      }
    `)],render:t=>{const e=[{label:"Add User ",value:"add-user",variant:"text"},{label:"Remove User",value:"remove-user",variant:"outlined"},{label:"Third action",value:"third-action",variant:"raised"}];return d`<div class="rt-container">
      <forge-card no-padding class="rt-card">
        <forge-responsive-toolbar
          ?no-border=${t.noBorder}
          ?auto-height=${t.autoHeight}
          ?inverted=${t.inverted}>
          <forge-icon-button aria-label="Icon button demo" slot="before-start">
            <forge-icon name="arrow_back" external></forge-icon>
          </forge-icon-button>
          <div slot="start" class="forge-typography--heading4">${t.title}</div>
          <forge-stack inline alignment="center" slot="end-large">
            ${e.map(o=>d` <forge-button variant=${M(o.variant)}>${o.label}</forge-button> `)}
          </forge-stack>
          <div slot="end-small">
            <forge-menu .options=${e}>
              <forge-icon-button aria-label="Open menu">
                <forge-icon name="more_vert" external></forge-icon>
              </forge-icon-button>
            </forge-menu>
          </div>
          ${t.afterEnd?d`<div slot="after-end">
                <forge-button>After end</forge-button>
              </div>`:y}
        </forge-responsive-toolbar>

        <p class="rt-content">
          To see this component respond, drag this div smaller using the drag handle on the bottom right of the card
        </p>
      </forge-card>
    </div>`},component:Q,argTypes:{title:{control:"text"},noBorder:{control:"boolean"},autoHeight:{control:"boolean"},inverted:{control:"boolean"},afterEnd:{control:"boolean",name:"Show after-end slot content"}},args:{title:"This is a really really long title",noBorder:!1,autoHeight:!0,inverted:!1,afterEnd:!1}},l={args:{demoWidth:855,afterEnd:!1}};var u,m,_;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    demoWidth: 855,
    afterEnd: false
  }
}`,...(_=(m=l.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const Z=["Demo"],se=Object.freeze(Object.defineProperty({__proto__:null,Demo:l,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{l as D,se as R};
