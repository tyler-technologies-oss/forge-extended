import{t as z,v as Q,w as P,q as H,c as U,r as F,i as G,x as h}from"./iframe-BXpu8WS9.js";import{n as W,a as X}from"./when-DfnyT8j1.js";import{C,D as O,as as u,I as x,at as q,au as J,a7 as K,_ as g,A as E,r as D,J as V,K as Y,Y as N,Q as S,E as k,g as Z,F as j,s as p,w as s,u as ee}from"./with-default-aria-C_nvProZ.js";import{r as A}from"./state-BfsZzwhA.js";import{d as re}from"./index-zDhrQkFi.js";import{d as te}from"./index-Dmz7pUfJ.js";import{p as oe}from"./event-utils-CvsnGLPC.js";import{I as ae,a as ie,d as ne}from"./index-vY3z9zGq.js";import{d as se}from"./index-DzI3bu0U.js";import{f as de}from"./base-button-adapter-nVZCLDsz.js";import{T as le}from"./tooltip-BTU7KZxs.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const ce=`${C}app-bar-menu-button`,L={ICON:"icon"},he={...L},fe=["aria-label","aria-labelledby"],f={elementName:ce,observedAttributes:L,attributes:he,forwardedAttributes:fe};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const ge='<template><forge-icon-button theme="app-bar"><forge-icon name="menu"></forge-icon></forge-icon-button><forge-tooltip type="label" placement="bottom">Menu</forge-tooltip></template>';let _=class extends O{static get observedAttributes(){return Object.values(f.observedAttributes)}constructor(){super(),this._iconName=u.name,x.define(u)}initializedCallback(){q(this,ge)}connectedCallback(){this._iconButtonElement=J(this,ae.elementName),this._iconElement=this._iconButtonElement.querySelector(K.elementName),this._iconElement.name!==this._iconName&&(this._iconElement.name=this._iconName);const e=this._iconButtonElement.getAttribute("aria-labelledby");this._forwardObserver=de(this,f.forwardedAttributes,(o,a)=>{o==="aria-labelledby"&&!a&&(a=e),z(this._iconButtonElement,!!a,o,a??void 0)})}disconnectedCallback(){this._forwardObserver?.disconnect(),this._forwardObserver=void 0}attributeChangedCallback(e,o,a){switch(e){case f.attributes.ICON:this.icon=a;break}}get icon(){return this._iconName}set icon(e){this._iconName!==e&&(this._iconName=e??u.name,this._iconElement&&(this._iconElement.name=this._iconName),this.setAttribute(f.attributes.ICON,this._iconName))}};_=g([E({name:f.elementName,dependencies:[ie,le]})],_);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function pe(){D(_)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const T={OPEN:"open",DIRECTION:"direction"},we={...T},I={DRAWER:"forge-drawer",LEFT:"left",RIGHT:"right",CLOSING:"closing",CLOSED:"closed",NO_TRANSITION:"no-transition"},me={DRAWER:`.${I.DRAWER}`},be={AFTER_OPEN:"forge-drawer-after-open",AFTER_CLOSE:"forge-drawer-after-close"},t={observedAttributes:T,attributes:we,classes:I,selectors:me,events:be};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class $ extends V{constructor(e){super(e),this._component=e,this._drawerElement=Y(this._component,t.selectors.DRAWER)}proxyScrollEvent(){this.tryUnproxyScrollEvent(),this._unproxyScrollEventCb=oe(this._component.shadowRoot,this._component)}tryUnproxyScrollEvent(){this._unproxyScrollEventCb&&this._unproxyScrollEventCb()}setDirection(e){switch(e){case"left":this._drawerElement.classList.remove(t.classes.RIGHT),this._drawerElement.classList.add(t.classes.LEFT);break;case"right":this._drawerElement.classList.remove(t.classes.LEFT),this._drawerElement.classList.add(t.classes.RIGHT);break}}removeDrawerClass(e){Q(e,this._drawerElement)}setDrawerClass(e){P(e,this._drawerElement)}listenTransitionComplete(e){this._activeTransitionListener&&this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=o=>{o.propertyName==="transform"&&(this._activeTransitionListener&&(this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=void 0),e())},this._drawerElement.addEventListener("transitionend",this._activeTransitionListener)}setInert(e){this._drawerElement.inert=e}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class R{constructor(e){this._adapter=e,this._open=!0,this._direction="left",this._openAnimationListener=()=>this._onOpenComplete(),this._closeAnimationListener=()=>this._onCloseComplete()}initialize(){this._open?this._setOpened():this._setClosed(),this._applyDirection(),this._adapter.setInert(!this._open),this._adapter.proxyScrollEvent()}destroy(){this._adapter.tryUnproxyScrollEvent()}_applyDirection(){this._adapter.setDirection(this._direction),this._adapter.setHostAttribute(t.attributes.DIRECTION,H(this._direction)?this._direction.toString():"")}_onOpenComplete(){if(!this._open)return;this._setOpened();const e=new CustomEvent(t.events.AFTER_OPEN,{bubbles:!0,composed:!0});this._adapter.dispatchHostEvent(e)}_onCloseComplete(){if(this._open)return;this._setClosed();const e=new CustomEvent(t.events.AFTER_CLOSE,{bubbles:!0,composed:!0});this._adapter.dispatchHostEvent(e)}_setOpened(){this._adapter.removeDrawerClass([t.classes.CLOSED,t.classes.CLOSING]),this._adapter.setHostAttribute(t.attributes.OPEN)}_setClosed(){this._adapter.removeDrawerClass([t.classes.CLOSING,t.classes.NO_TRANSITION]),this._adapter.setDrawerClass(t.classes.CLOSED),this._adapter.removeHostAttribute(t.attributes.OPEN)}_applyOpen(){this._open?(this._adapter.setInert(!1),this._triggerDrawerOpen(),this._adapter.setHostAttribute(t.attributes.OPEN)):(this._adapter.setInert(!0),this._triggerDrawerClose(),this._adapter.removeHostAttribute(t.attributes.OPEN))}async _triggerDrawerOpen(){this._adapter.listenTransitionComplete(this._openAnimationListener),await N(),this._adapter.removeDrawerClass([t.classes.CLOSED,t.classes.CLOSING])}async _triggerDrawerClose(){this._adapter.listenTransitionComplete(this._closeAnimationListener),await N(),this._adapter.setDrawerClass(t.classes.CLOSING)}get open(){return this._open}set open(e){e=!!e,this._open!==e&&(this._open=e,this._adapter.isConnected&&this._applyOpen())}get direction(){return this._direction}set direction(e){this._direction!==e&&(this._direction=e,this._adapter.isConnected&&this._applyDirection())}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class w extends O{static get observedAttributes(){return Object.values(t.observedAttributes)}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(e,o,a){switch(e){case t.observedAttributes.OPEN:this.open=U(a);break;case t.observedAttributes.DIRECTION:this.direction=a;break}}}g([S()],w.prototype,"open",void 0);g([S()],w.prototype,"direction",void 0);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const ue=`${C}drawer`,_e={elementName:ue};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const ve='<template><div class="forge-drawer" part="root"><slot name="header"></slot><div class="content" part="content"><slot></slot></div><slot name="footer"></slot></div></template>',ye=':host{display:grid;box-sizing:border-box;height:100%;overflow:hidden!important;--forge-divider-margin:4px 0}.forge-drawer{--_drawer-background:var(--forge-drawer-background, var(--forge-theme-surface, #ffffff));--_drawer-border-color:var(--forge-drawer-border-color, var(--forge-theme-outline, #e0e0e0));--_drawer-width:var(--forge-drawer-width, 256px);--_drawer-border-width:var(--forge-drawer-border-width, var(--forge-border-thin, 1px));--_drawer-transition-duration:var(--forge-drawer-transition-duration, var(--forge-animation-duration-medium1, 250ms));--_drawer-transition-easing:var(--forge-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_drawer-transition-duration-close:var(--forge-drawer-transition-duration-close, var(--forge-animation-duration-short4, 200ms))}.forge-drawer{width:var(--_drawer-width);height:100%;box-sizing:border-box;overflow:hidden;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;background-color:var(--_drawer-background);border-color:var(--_drawer-border-color);transition-property:transform;transition-duration:var(--_drawer-transition-duration);transition-timing-function:var(--_drawer-transition-easing)}.forge-drawer ::slotted([slot=header]){grid-row:1}.forge-drawer ::slotted([slot=footer]){grid-row:3}.forge-drawer .content::-webkit-scrollbar{height:var(--forge-scrollbar-height,16px);width:var(--forge-scrollbar-width,16px)}.forge-drawer .content::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height,32px);width:var(--forge-scrollbar-thumb-min-width,32px);border-radius:var(--forge-scrollbar-border-radius,calc(var(--forge-shape-full,9999px) * var(--forge-shape-factor,1)));border-width:var(--forge-scrollbar-border-width,3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container,var(--forge-theme-surface-container-medium,#c2c2c2));background-clip:content-box}.forge-drawer .content::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover,var(--forge-theme-surface-container-high,#9e9e9e))}.forge-drawer .content{overflow-x:auto;-webkit-overflow-scrolling:"touch";display:flex;flex-direction:column;grid-row:2}.forge-drawer.left{border-right-width:var(--_drawer-border-width);border-right-style:solid}.forge-drawer.right{border-left-width:var(--_drawer-border-width);border-left-style:solid}.forge-drawer.right.closing{transform:translateX(100%);right:0;left:auto;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.right.closed{transform:translateX(100%);right:0;left:auto;width:0;border:none}.forge-drawer.closing{transform:translateX(-100%);left:0;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.closed{transform:translateX(-100%);left:0;width:0;border:none}.forge-drawer.no-transition{transition:none!important}:host([open]){transform:translateZ(0)}';let v=class extends w{constructor(){super(),k(this,ve,ye),this._core=new R(new $(this))}};v=g([E({name:_e.elementName})],v);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function Ce(){D(v)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Ee=`${C}mini-drawer`,De={elementName:Ee};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Ne='<template><div class="root" part="root"><div class="forge-drawer mini" part="container"><slot name="header"></slot><div class="content" part="content"><slot></slot></div><slot name="footer"></slot></div></div></template>',Oe=':host{--_mini-drawer-width:var(--forge-mini-drawer-width, 56px);--_mini-drawer-min-width:var(--forge-mini-drawer-min-width, var(--_mini-drawer-width));--_mini-drawer-hover-width:var(--forge-mini-drawer-hover-width, var(--forge-drawer-width, 256px));--_mini-drawer-transition-duration:var(--forge-mini-drawer-transition-duration, var(--forge-animation-duration-short4, 200ms));--_mini-drawer-transition-easing:var(--forge-mini-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_mini-drawer-transition-delay:var(--forge-mini-drawer-transition-delay, 300ms);--_mini-drawer-hover-transition-duration:var(--forge-mini-drawer-hover-transition-duration, var(--forge-animation-duration-medium2, 300ms));--_mini-drawer-hover-transition-easing:var(--forge-mini-drawer-hover-transition-easing, var(--_mini-drawer-transition-easing));--_mini-drawer-hover-transition-delay:var(--forge-mini-drawer-hover-transition-delay, var(--forge-animation-duration-medium2, 300ms))}:host{display:grid;box-sizing:border-box;height:100%;overflow:hidden!important;width:var(--_mini-drawer-width);overflow:visible!important;--forge-divider-margin:4px 0}:host([direction=right]){min-width:var(--_mini-drawer-width);width:auto}:host([direction=right]) .root{position:relative}:host(:not([open])){display:none}:host([hover]) .right{position:absolute;right:0}:host([hover]) .forge-drawer:hover{width:var(--_mini-drawer-hover-width)!important;transition:width var(--_mini-drawer-hover-transition-duration) var(--_mini-drawer-hover-transition-easing) var(--_mini-drawer-hover-transition-delay)}:host([hover]) .forge-drawer:hover .content{overflow:auto}.forge-drawer{--_drawer-background:var(--forge-drawer-background, var(--forge-theme-surface, #ffffff));--_drawer-border-color:var(--forge-drawer-border-color, var(--forge-theme-outline, #e0e0e0));--_drawer-width:var(--forge-drawer-width, 256px);--_drawer-border-width:var(--forge-drawer-border-width, var(--forge-border-thin, 1px));--_drawer-transition-duration:var(--forge-drawer-transition-duration, var(--forge-animation-duration-medium1, 250ms));--_drawer-transition-easing:var(--forge-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_drawer-transition-duration-close:var(--forge-drawer-transition-duration-close, var(--forge-animation-duration-short4, 200ms))}.forge-drawer{width:var(--_drawer-width);height:100%;box-sizing:border-box;overflow:hidden;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;background-color:var(--_drawer-background);border-color:var(--_drawer-border-color);transition-property:transform;transition-duration:var(--_drawer-transition-duration);transition-timing-function:var(--_drawer-transition-easing)}.forge-drawer ::slotted([slot=header]){grid-row:1}.forge-drawer ::slotted([slot=footer]){grid-row:3}.forge-drawer .content::-webkit-scrollbar{height:var(--forge-scrollbar-height,16px);width:var(--forge-scrollbar-width,16px)}.forge-drawer .content::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height,32px);width:var(--forge-scrollbar-thumb-min-width,32px);border-radius:var(--forge-scrollbar-border-radius,calc(var(--forge-shape-full,9999px) * var(--forge-shape-factor,1)));border-width:var(--forge-scrollbar-border-width,3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container,var(--forge-theme-surface-container-medium,#c2c2c2));background-clip:content-box}.forge-drawer .content::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover,var(--forge-theme-surface-container-high,#9e9e9e))}.forge-drawer .content{overflow-x:auto;-webkit-overflow-scrolling:"touch";display:flex;flex-direction:column;grid-row:2}.forge-drawer.left{border-right-width:var(--_drawer-border-width);border-right-style:solid}.forge-drawer.right{border-left-width:var(--_drawer-border-width);border-left-style:solid}.forge-drawer.right.closing{transform:translateX(100%);right:0;left:auto;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.right.closed{transform:translateX(100%);right:0;left:auto;width:0;border:none}.forge-drawer.closing{transform:translateX(-100%);left:0;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.closed{transform:translateX(-100%);left:0;width:0;border:none}.forge-drawer.no-transition{transition:none!important}.root{z-index:var(--forge-z-index-surface,1);height:100%;min-width:var(--_mini-drawer-min-width)}.forge-drawer.mini{width:var(--_mini-drawer-width);z-index:var(--forge-z-index-surface,1);transition:width var(--_mini-drawer-transition-duration) var(--_mini-drawer-transition-easing)}.forge-drawer.mini .content{overflow:hidden}.forge-drawer.closed{width:0}';let y=class extends w{constructor(){super(),k(this,Ne,Oe),this._core=new R(new $(this))}get hover(){return this.hasAttribute("hover")}set hover(e){this.toggleAttribute("hover",e)}};y=g([E({name:De.elementName})],y);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function xe(){D(y)}const Se=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{--_forge-app-layout-drawer-width: var(--forge-app-layout-drawer-width, 320px);--_forge-app-layout-dialog-width: var(--forge-app-layout-dialog-width, 320px);display:block;height:100%}forge-app-bar{--forge-app-bar-columns: auto 1fr auto}forge-app-bar :host(:state(small)){--forge-app-bar-row-padding: 0}.drawer-container.mini-hover{z-index:3;overflow:visible}forge-drawer{--forge-drawer-width: var(--_forge-app-layout-drawer-width)}.close-drawer-button{padding-inline-start:var(--forge-spacing-xxsmall, 4px)}.left-sheet-dialog{--forge-dialog-width: var(--_forge-app-layout-dialog-width)}.left-sheet-dialog::part(surface){display:block}`;var ke=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,M=r=>{throw TypeError(r)},l=(r,e,o,a)=>{for(var c=a>1?void 0:a?Ae(e,o):e,m=r.length-1,b;m>=0;m--)(b=r[m])&&(c=(a?b(e,o,c):b(c))||c);return a&&c&&ke(e,o,c),c},B=(r,e,o)=>e.has(r)||M("Cannot "+o),d=(r,e,o)=>(B(r,e,"read from private field"),o?o.call(r):e.get(r)),Le=(r,e,o)=>e.has(r)?M("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,o),Te=(r,e,o,a)=>(B(r,e,"write to private field"),e.set(r,o),o),i;const Ie="forge-app-layout";let n=class extends G{constructor(){super(),this.appTitle="",this.breakpoint=960,this.useMiniDrawer=!1,this.miniHover=!1,this._leftDrawerOpen=!1,this._isLargeScreen=!1,this._mediaQuery=null,Le(this,i),this._handleMediaQueryChange=r=>{this._isLargeScreen=r.matches,this._updateStates()},this._toggleLeftDrawer=()=>{this._isLargeScreen||(this._leftDrawerOpen=!this._leftDrawerOpen,s(d(this,i),"drawer-open",this._leftDrawerOpen),s(d(this,i),"drawer-closed",!this._leftDrawerOpen),this._applyDrawerStates())},this._handleLeftDrawerAfterClose=()=>{this._leftDrawerOpen=!1,s(d(this,i),"drawer-open",!1),s(d(this,i),"drawer-closed",!0)},this._handleSlotChange=r=>{r.target.name==="navigation"&&this.requestUpdate()},Te(this,i,this.attachInternals()),this._leftDrawerOpen=!1}connectedCallback(){super.connectedCallback(),this._setupMediaQuery()}firstUpdated(r){super.firstUpdated(r),this._updateStates(),this._applyDrawerStates()}updated(r){super.updated(r),r.has("breakpoint")&&(this._cleanupMediaQuery(),this._setupMediaQuery())}disconnectedCallback(){super.disconnectedCallback(),this._cleanupMediaQuery()}_setupMediaQuery(){this._mediaQuery=window.matchMedia(`(min-width: ${this.breakpoint}px)`),this._isLargeScreen=this._mediaQuery.matches,this._updateStates(),this._mediaQuery.addEventListener("change",this._handleMediaQueryChange)}_cleanupMediaQuery(){this._mediaQuery&&(this._mediaQuery.removeEventListener("change",this._handleMediaQueryChange),this._mediaQuery=null)}_updateStates(){s(d(this,i),"small",!this._isLargeScreen),s(d(this,i),"large",this._isLargeScreen),this._isLargeScreen?this._leftDrawerOpen=!0:this._leftDrawerOpen=!1,s(d(this,i),"drawer-open",this._leftDrawerOpen),s(d(this,i),"drawer-closed",!this._leftDrawerOpen),this.hasUpdated&&this._applyDrawerStates()}_applyDrawerStates(){const r=this.useMiniDrawer?"forge-mini-drawer":"forge-drawer",e=this.shadowRoot?.querySelector(r);e&&e.open!==this._leftDrawerOpen&&(e.open=this._leftDrawerOpen)}get _hasNavigationContent(){return this._navigationNodes.length>0}render(){const r=h`<slot name="navigation" @slotchange=${this._handleSlotChange}></slot>`;return h`
      <forge-scaffold>
        <forge-app-bar slot="header" title-text=${this.appTitle} theme-mode="scoped">
          <slot name="app-bar-logo" slot="logo">
            <forge-icon name="tyler_talking_t_logo" external></forge-icon>
          </slot>
          <slot name="app-bar-start" slot="start"></slot>
          ${X(!this._isLargeScreen,()=>h`
              <forge-app-bar-menu-button slot="start" @click=${this._toggleLeftDrawer}> </forge-app-bar-menu-button>
            `)}
          <slot name="app-bar-center" slot="center"></slot>
          <slot name="app-bar-end" slot="end"></slot>
        </forge-app-bar>

        <!-- Small screens: Navigation in left slot -->
        ${this._isLargeScreen?"":this._hasNavigationContent?h`
                <forge-dialog
                  class="left-sheet-dialog"
                  fullscreen-threshold="0"
                  preset="left-sheet"
                  slot="left"
                  ?open=${this._leftDrawerOpen}
                  @forge-drawer-after-close=${this._handleLeftDrawerAfterClose}>
                  <div class="drawer-container">
                    <forge-toolbar no-border>
                      <forge-icon-button
                        autofocus
                        class="close-drawer-button"
                        slot="before-start"
                        aria-label="Close navigation drawer"
                        @click=${this._toggleLeftDrawer}>
                        <forge-icon name="close"></forge-icon>
                      </forge-icon-button>
                    </forge-toolbar>
                    <aside>${r}</aside>
                  </div>
                </forge-dialog>
              `:r}
        <slot name="body-header" slot="body-header"></slot>

        <!-- Large screens: Navigation in body-left slot -->
        ${this._isLargeScreen?this._hasNavigationContent?h`
                <div class="drawer-container ${this.miniHover?"mini-hover":""}" slot="body-left">
                  ${this.useMiniDrawer?h`
                        <forge-mini-drawer
                          ?hover=${this.miniHover}
                          ?open=${this._leftDrawerOpen}
                          @forge-drawer-after-close=${this._handleLeftDrawerAfterClose}>
                          ${r}
                        </forge-mini-drawer>
                      `:h`
                        <forge-drawer
                          ?open=${this._leftDrawerOpen}
                          @forge-drawer-after-close=${this._handleLeftDrawerAfterClose}>
                          ${r}
                        </forge-drawer>
                      `}
                </div>
              `:r:""}

        <div slot="body">
          <slot name="body"></slot>
        </div>

        <slot name="right" slot="right"></slot>
        <slot name="body-right" slot="body-right"></slot>
        <slot name="body-footer" slot="body-footer"></slot>

        <slot name="footer" slot="footer"></slot>
      </forge-scaffold>
    `}};i=new WeakMap;re();te();Ce();xe();ne();se();pe();x.define([Z,j]);n.styles=F(Se);l([W({slot:"navigation",flatten:!0})],n.prototype,"_navigationNodes",2);l([p({type:String,attribute:"app-title"})],n.prototype,"appTitle",2);l([p({type:Number})],n.prototype,"breakpoint",2);l([p({type:Boolean,attribute:"use-mini-drawer"})],n.prototype,"useMiniDrawer",2);l([p({type:Boolean,attribute:"mini-hover"})],n.prototype,"miniHover",2);l([A()],n.prototype,"_leftDrawerOpen",2);l([A()],n.prototype,"_isLargeScreen",2);n=l([ee(Ie)],n);export{xe as a,Ce as d};
