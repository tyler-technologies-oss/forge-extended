import{q as T,u as I,v as R,c as $,r as z,i as M,x as c}from"./iframe-C1-2HsIT.js";import{n as Q,a as H}from"./when-DfnyT8j1.js";import{J as P,K as B,Y as _,D as F,_ as f,Q as b,C as y,E as C,A as D,r as x,I as G,g as W,F as X,s as g,w as s,u as U}from"./with-default-aria-CrrVNdqK.js";import{r as E}from"./state-WC-7kG8F.js";import{d as q}from"./index-DsG478pS.js";import{d as J}from"./index-CDraQJO6.js";import{p as K}from"./event-utils-CvsnGLPC.js";import{d as Y}from"./index-C2nVDBU9.js";import{d as Z}from"./index-BdHG0UBv.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const k={OPEN:"open",DIRECTION:"direction"},V={...k},S={DRAWER:"forge-drawer",LEFT:"left",RIGHT:"right",CLOSING:"closing",CLOSED:"closed",NO_TRANSITION:"no-transition"},j={DRAWER:`.${S.DRAWER}`},rr={AFTER_OPEN:"forge-drawer-after-open",AFTER_CLOSE:"forge-drawer-after-close"},t={observedAttributes:k,attributes:V,classes:S,selectors:j,events:rr};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class O extends P{constructor(r){super(r),this._component=r,this._drawerElement=B(this._component,t.selectors.DRAWER)}proxyScrollEvent(){this.tryUnproxyScrollEvent(),this._unproxyScrollEventCb=K(this._component.shadowRoot,this._component)}tryUnproxyScrollEvent(){this._unproxyScrollEventCb&&this._unproxyScrollEventCb()}setDirection(r){switch(r){case"left":this._drawerElement.classList.remove(t.classes.RIGHT),this._drawerElement.classList.add(t.classes.LEFT);break;case"right":this._drawerElement.classList.remove(t.classes.LEFT),this._drawerElement.classList.add(t.classes.RIGHT);break}}removeDrawerClass(r){T(r,this._drawerElement)}setDrawerClass(r){I(r,this._drawerElement)}listenTransitionComplete(r){this._activeTransitionListener&&this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=o=>{o.propertyName==="transform"&&(this._activeTransitionListener&&(this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=void 0),r())},this._drawerElement.addEventListener("transitionend",this._activeTransitionListener)}setInert(r){this._drawerElement.inert=r}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class L{constructor(r){this._adapter=r,this._open=!0,this._direction="left",this._openAnimationListener=()=>this._onOpenComplete(),this._closeAnimationListener=()=>this._onCloseComplete()}initialize(){this._open?this._setOpened():this._setClosed(),this._applyDirection(),this._adapter.setInert(!this._open),this._adapter.proxyScrollEvent()}destroy(){this._adapter.tryUnproxyScrollEvent()}_applyDirection(){this._adapter.setDirection(this._direction),this._adapter.setHostAttribute(t.attributes.DIRECTION,R(this._direction)?this._direction.toString():"")}_onOpenComplete(){if(!this._open)return;this._setOpened();const r=new CustomEvent(t.events.AFTER_OPEN,{bubbles:!0,composed:!0});this._adapter.dispatchHostEvent(r)}_onCloseComplete(){if(this._open)return;this._setClosed();const r=new CustomEvent(t.events.AFTER_CLOSE,{bubbles:!0,composed:!0});this._adapter.dispatchHostEvent(r)}_setOpened(){this._adapter.removeDrawerClass([t.classes.CLOSED,t.classes.CLOSING]),this._adapter.setHostAttribute(t.attributes.OPEN)}_setClosed(){this._adapter.removeDrawerClass([t.classes.CLOSING,t.classes.NO_TRANSITION]),this._adapter.setDrawerClass(t.classes.CLOSED),this._adapter.removeHostAttribute(t.attributes.OPEN)}_applyOpen(){this._open?(this._adapter.setInert(!1),this._triggerDrawerOpen(),this._adapter.setHostAttribute(t.attributes.OPEN)):(this._adapter.setInert(!0),this._triggerDrawerClose(),this._adapter.removeHostAttribute(t.attributes.OPEN))}async _triggerDrawerOpen(){this._adapter.listenTransitionComplete(this._openAnimationListener),await _(),this._adapter.removeDrawerClass([t.classes.CLOSED,t.classes.CLOSING])}async _triggerDrawerClose(){this._adapter.listenTransitionComplete(this._closeAnimationListener),await _(),this._adapter.setDrawerClass(t.classes.CLOSING)}get open(){return this._open}set open(r){r=!!r,this._open!==r&&(this._open=r,this._adapter.isConnected&&this._applyOpen())}get direction(){return this._direction}set direction(r){this._direction!==r&&(this._direction=r,this._adapter.isConnected&&this._applyDirection())}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class w extends F{static get observedAttributes(){return Object.values(t.observedAttributes)}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(r,o,n){switch(r){case t.observedAttributes.OPEN:this.open=$(n);break;case t.observedAttributes.DIRECTION:this.direction=n;break}}}f([b()],w.prototype,"open",void 0);f([b()],w.prototype,"direction",void 0);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const er=`${y}drawer`,tr={elementName:er};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const or='<template><div class="forge-drawer" part="root"><slot name="header"></slot><div class="content" part="content"><slot></slot></div><slot name="footer"></slot></div></template>',ar=':host{display:grid;box-sizing:border-box;height:100%;overflow:hidden!important;--forge-divider-margin:4px 0}.forge-drawer{--_drawer-background:var(--forge-drawer-background, var(--forge-theme-surface, #ffffff));--_drawer-border-color:var(--forge-drawer-border-color, var(--forge-theme-outline, #e0e0e0));--_drawer-width:var(--forge-drawer-width, 256px);--_drawer-border-width:var(--forge-drawer-border-width, var(--forge-border-thin, 1px));--_drawer-transition-duration:var(--forge-drawer-transition-duration, var(--forge-animation-duration-medium1, 250ms));--_drawer-transition-easing:var(--forge-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_drawer-transition-duration-close:var(--forge-drawer-transition-duration-close, var(--forge-animation-duration-short4, 200ms))}.forge-drawer{width:var(--_drawer-width);height:100%;box-sizing:border-box;overflow:hidden;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;background-color:var(--_drawer-background);border-color:var(--_drawer-border-color);transition-property:transform;transition-duration:var(--_drawer-transition-duration);transition-timing-function:var(--_drawer-transition-easing)}.forge-drawer ::slotted([slot=header]){grid-row:1}.forge-drawer ::slotted([slot=footer]){grid-row:3}.forge-drawer .content::-webkit-scrollbar{height:var(--forge-scrollbar-height,16px);width:var(--forge-scrollbar-width,16px)}.forge-drawer .content::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height,32px);width:var(--forge-scrollbar-thumb-min-width,32px);border-radius:var(--forge-scrollbar-border-radius,calc(var(--forge-shape-full,9999px) * var(--forge-shape-factor,1)));border-width:var(--forge-scrollbar-border-width,3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container,var(--forge-theme-surface-container-medium,#c2c2c2));background-clip:content-box}.forge-drawer .content::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover,var(--forge-theme-surface-container-high,#9e9e9e))}.forge-drawer .content{overflow-x:auto;-webkit-overflow-scrolling:"touch";display:flex;flex-direction:column;grid-row:2}.forge-drawer.left{border-right-width:var(--_drawer-border-width);border-right-style:solid}.forge-drawer.right{border-left-width:var(--_drawer-border-width);border-left-style:solid}.forge-drawer.right.closing{transform:translateX(100%);right:0;left:auto;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.right.closed{transform:translateX(100%);right:0;left:auto;width:0;border:none}.forge-drawer.closing{transform:translateX(-100%);left:0;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.closed{transform:translateX(-100%);left:0;width:0;border:none}.forge-drawer.no-transition{transition:none!important}:host([open]){transform:translateZ(0)}';let v=class extends w{constructor(){super(),C(this,or,ar),this._core=new L(new O(this))}};v=f([D({name:tr.elementName})],v);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function ir(){x(v)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const nr=`${y}mini-drawer`,sr={elementName:nr};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const dr='<template><div class="root" part="root"><div class="forge-drawer mini" part="container"><slot name="header"></slot><div class="content" part="content"><slot></slot></div><slot name="footer"></slot></div></div></template>',lr=':host{--_mini-drawer-width:var(--forge-mini-drawer-width, 56px);--_mini-drawer-min-width:var(--forge-mini-drawer-min-width, var(--_mini-drawer-width));--_mini-drawer-hover-width:var(--forge-mini-drawer-hover-width, var(--forge-drawer-width, 256px));--_mini-drawer-transition-duration:var(--forge-mini-drawer-transition-duration, var(--forge-animation-duration-short4, 200ms));--_mini-drawer-transition-easing:var(--forge-mini-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_mini-drawer-transition-delay:var(--forge-mini-drawer-transition-delay, 300ms);--_mini-drawer-hover-transition-duration:var(--forge-mini-drawer-hover-transition-duration, var(--forge-animation-duration-medium2, 300ms));--_mini-drawer-hover-transition-easing:var(--forge-mini-drawer-hover-transition-easing, var(--_mini-drawer-transition-easing));--_mini-drawer-hover-transition-delay:var(--forge-mini-drawer-hover-transition-delay, var(--forge-animation-duration-medium2, 300ms))}:host{display:grid;box-sizing:border-box;height:100%;overflow:hidden!important;width:var(--_mini-drawer-width);overflow:visible!important;--forge-divider-margin:4px 0}:host([direction=right]){min-width:var(--_mini-drawer-width);width:auto}:host([direction=right]) .root{position:relative}:host(:not([open])){display:none}:host([hover]) .right{position:absolute;right:0}:host([hover]) .forge-drawer:hover{width:var(--_mini-drawer-hover-width)!important;transition:width var(--_mini-drawer-hover-transition-duration) var(--_mini-drawer-hover-transition-easing) var(--_mini-drawer-hover-transition-delay)}:host([hover]) .forge-drawer:hover .content{overflow:auto}.forge-drawer{--_drawer-background:var(--forge-drawer-background, var(--forge-theme-surface, #ffffff));--_drawer-border-color:var(--forge-drawer-border-color, var(--forge-theme-outline, #e0e0e0));--_drawer-width:var(--forge-drawer-width, 256px);--_drawer-border-width:var(--forge-drawer-border-width, var(--forge-border-thin, 1px));--_drawer-transition-duration:var(--forge-drawer-transition-duration, var(--forge-animation-duration-medium1, 250ms));--_drawer-transition-easing:var(--forge-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_drawer-transition-duration-close:var(--forge-drawer-transition-duration-close, var(--forge-animation-duration-short4, 200ms))}.forge-drawer{width:var(--_drawer-width);height:100%;box-sizing:border-box;overflow:hidden;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;background-color:var(--_drawer-background);border-color:var(--_drawer-border-color);transition-property:transform;transition-duration:var(--_drawer-transition-duration);transition-timing-function:var(--_drawer-transition-easing)}.forge-drawer ::slotted([slot=header]){grid-row:1}.forge-drawer ::slotted([slot=footer]){grid-row:3}.forge-drawer .content::-webkit-scrollbar{height:var(--forge-scrollbar-height,16px);width:var(--forge-scrollbar-width,16px)}.forge-drawer .content::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height,32px);width:var(--forge-scrollbar-thumb-min-width,32px);border-radius:var(--forge-scrollbar-border-radius,calc(var(--forge-shape-full,9999px) * var(--forge-shape-factor,1)));border-width:var(--forge-scrollbar-border-width,3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container,var(--forge-theme-surface-container-medium,#c2c2c2));background-clip:content-box}.forge-drawer .content::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover,var(--forge-theme-surface-container-high,#9e9e9e))}.forge-drawer .content{overflow-x:auto;-webkit-overflow-scrolling:"touch";display:flex;flex-direction:column;grid-row:2}.forge-drawer.left{border-right-width:var(--_drawer-border-width);border-right-style:solid}.forge-drawer.right{border-left-width:var(--_drawer-border-width);border-left-style:solid}.forge-drawer.right.closing{transform:translateX(100%);right:0;left:auto;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.right.closed{transform:translateX(100%);right:0;left:auto;width:0;border:none}.forge-drawer.closing{transform:translateX(-100%);left:0;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.closed{transform:translateX(-100%);left:0;width:0;border:none}.forge-drawer.no-transition{transition:none!important}.root{z-index:var(--forge-z-index-surface,1);height:100%;min-width:var(--_mini-drawer-min-width)}.forge-drawer.mini{width:var(--_mini-drawer-width);z-index:var(--forge-z-index-surface,1);transition:width var(--_mini-drawer-transition-duration) var(--_mini-drawer-transition-easing)}.forge-drawer.mini .content{overflow:hidden}.forge-drawer.closed{width:0}';let u=class extends w{constructor(){super(),C(this,dr,lr),this._core=new L(new O(this))}get hover(){return this.hasAttribute("hover")}set hover(r){this.toggleAttribute("hover",r)}};u=f([D({name:sr.elementName})],u);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function hr(){x(u)}const cr=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{--_forge-app-layout-drawer-width: var(--forge-app-layout-drawer-width, 320px);--_forge-app-layout-dialog-width: var(--forge-app-layout-dialog-width, 320px);display:block;height:100%}forge-app-bar{--forge-app-bar-columns: auto 1fr auto}forge-app-bar :host(:state(small)){--forge-app-bar-row-padding: 0}.drawer-container.mini-hover{z-index:3;overflow:visible}forge-drawer{--forge-drawer-width: var(--_forge-app-layout-drawer-width)}.close-drawer-button{padding-inline-start:var(--forge-spacing-xxsmall, 4px)}.left-sheet-dialog{--forge-dialog-width: var(--_forge-app-layout-dialog-width)}.left-sheet-dialog::part(surface){display:block}`;var fr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,N=e=>{throw TypeError(e)},l=(e,r,o,n)=>{for(var h=n>1?void 0:n?gr(r,o):r,p=e.length-1,m;p>=0;p--)(m=e[p])&&(h=(n?m(r,o,h):m(h))||h);return n&&h&&fr(r,o,h),h},A=(e,r,o)=>r.has(e)||N("Cannot "+o),d=(e,r,o)=>(A(e,r,"read from private field"),o?o.call(e):r.get(e)),wr=(e,r,o)=>r.has(e)?N("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,o),pr=(e,r,o,n)=>(A(e,r,"write to private field"),r.set(e,o),o),a;const mr="forge-app-layout";let i=class extends M{constructor(){super(),this.appTitle="",this.breakpoint=960,this.useMiniDrawer=!1,this.miniHover=!1,this._leftDrawerOpen=!1,this._isLargeScreen=!1,this._mediaQuery=null,wr(this,a),this._handleMediaQueryChange=e=>{this._isLargeScreen=e.matches,this._updateStates()},this._toggleLeftDrawer=()=>{this._isLargeScreen||(this._leftDrawerOpen=!this._leftDrawerOpen,s(d(this,a),"drawer-open",this._leftDrawerOpen),s(d(this,a),"drawer-closed",!this._leftDrawerOpen),this._applyDrawerStates())},this._handleLeftDrawerAfterClose=()=>{this._leftDrawerOpen=!1,s(d(this,a),"drawer-open",!1),s(d(this,a),"drawer-closed",!0)},this._handleSlotChange=e=>{e.target.name==="navigation"&&this.requestUpdate()},pr(this,a,this.attachInternals()),this._leftDrawerOpen=!1}connectedCallback(){super.connectedCallback(),this._setupMediaQuery()}firstUpdated(e){super.firstUpdated(e),this._updateStates(),this._applyDrawerStates()}updated(e){super.updated(e),e.has("breakpoint")&&(this._cleanupMediaQuery(),this._setupMediaQuery())}disconnectedCallback(){super.disconnectedCallback(),this._cleanupMediaQuery()}_setupMediaQuery(){this._mediaQuery=window.matchMedia(`(min-width: ${this.breakpoint}px)`),this._isLargeScreen=this._mediaQuery.matches,this._updateStates(),this._mediaQuery.addEventListener("change",this._handleMediaQueryChange)}_cleanupMediaQuery(){this._mediaQuery&&(this._mediaQuery.removeEventListener("change",this._handleMediaQueryChange),this._mediaQuery=null)}_updateStates(){s(d(this,a),"small",!this._isLargeScreen),s(d(this,a),"large",this._isLargeScreen),this._isLargeScreen?this._leftDrawerOpen=!0:this._leftDrawerOpen=!1,s(d(this,a),"drawer-open",this._leftDrawerOpen),s(d(this,a),"drawer-closed",!this._leftDrawerOpen),this.hasUpdated&&this._applyDrawerStates()}_applyDrawerStates(){const e=this.useMiniDrawer?"forge-mini-drawer":"forge-drawer",r=this.shadowRoot?.querySelector(e);r&&r.open!==this._leftDrawerOpen&&(r.open=this._leftDrawerOpen)}get _hasNavigationContent(){return this._navigationNodes.length>0}render(){const e=c`<slot name="navigation" @slotchange=${this._handleSlotChange}></slot>`;return c`
      <forge-scaffold>
        <forge-app-bar slot="header" title-text=${this.appTitle} theme-mode="scoped">
          <slot name="app-bar-logo" slot="logo">
            <forge-icon name="tyler_talking_t_logo" external></forge-icon>
          </slot>
          <slot name="app-bar-start" slot="start"></slot>
          ${H(!this._isLargeScreen,()=>c`
              <forge-app-bar-menu-button slot="start" @click=${this._toggleLeftDrawer}> </forge-app-bar-menu-button>
            `)}
          <slot name="app-bar-center" slot="center"></slot>
          <slot name="app-bar-end" slot="end"></slot>
        </forge-app-bar>

        <!-- Small screens: Navigation in left slot -->
        ${this._isLargeScreen?"":this._hasNavigationContent?c`
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
                    <aside>${e}</aside>
                  </div>
                </forge-dialog>
              `:e}
        <slot name="body-header" slot="body-header"></slot>

        <!-- Large screens: Navigation in body-left slot -->
        ${this._isLargeScreen?this._hasNavigationContent?c`
                <div class="drawer-container ${this.miniHover?"mini-hover":""}" slot="body-left">
                  ${this.useMiniDrawer?c`
                        <forge-mini-drawer
                          ?hover=${this.miniHover}
                          ?open=${this._leftDrawerOpen}
                          @forge-drawer-after-close=${this._handleLeftDrawerAfterClose}>
                          ${e}
                        </forge-mini-drawer>
                      `:c`
                        <forge-drawer
                          ?open=${this._leftDrawerOpen}
                          @forge-drawer-after-close=${this._handleLeftDrawerAfterClose}>
                          ${e}
                        </forge-drawer>
                      `}
                </div>
              `:e:""}

        <div slot="body">
          <slot name="body"></slot>
        </div>

        <slot name="right" slot="right"></slot>
        <slot name="body-right" slot="body-right"></slot>
        <slot name="body-footer" slot="body-footer"></slot>

        <slot name="footer" slot="footer"></slot>
      </forge-scaffold>
    `}};a=new WeakMap;q();J();ir();hr();Y();Z();G.define([W,X]);i.styles=z(cr);l([Q({slot:"navigation",flatten:!0})],i.prototype,"_navigationNodes",2);l([g({type:String,attribute:"app-title"})],i.prototype,"appTitle",2);l([g({type:Number})],i.prototype,"breakpoint",2);l([g({type:Boolean,attribute:"use-mini-drawer"})],i.prototype,"useMiniDrawer",2);l([g({type:Boolean,attribute:"mini-hover"})],i.prototype,"miniHover",2);l([E()],i.prototype,"_leftDrawerOpen",2);l([E()],i.prototype,"_isLargeScreen",2);i=l([U(mr)],i);export{hr as a,ir as d};
