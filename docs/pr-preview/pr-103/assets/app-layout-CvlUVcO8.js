import{t as F,v as G,w as X,q,c as Z,r as K,i as V,x as h}from"./iframe-BMApIYoO.js";import{n as J,a as Y}from"./when-DfnyT8j1.js";import{C as O,D as T,at as _,I,au as j,av as ee,a8 as re,_ as p,A as N,d as S,K as te,L as oe,Z as A,R as $,E as R,h as ae,F as ie,aw as ne,s as w,w as d,u as se}from"./with-default-aria-B9ZiPzeC.js";import{r as z}from"./state-B3pJ5z9J.js";import{d as de}from"./index-C3zumD9I.js";import{d as le}from"./index-oyETBQQr.js";import{p as ce}from"./list-CVyEsjlM.js";import{I as he,a as fe,d as ge}from"./index-DOPoGvOl.js";import{d as pe}from"./index-9dF0Tnn5.js";import{f as we}from"./base-button-adapter-DK7gIryc.js";import{T as me}from"./tooltip-TqhZOuw8.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const ue=`${O}app-bar-menu-button`,M={ICON:"icon"},be={...M},_e=["aria-label","aria-labelledby"],g={elementName:ue,observedAttributes:M,attributes:be,forwardedAttributes:_e};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const ve='<template><forge-icon-button theme="app-bar"><forge-icon name="menu"></forge-icon></forge-icon-button><forge-tooltip type="label" placement="bottom">Menu</forge-tooltip></template>';let y=class extends T{static get observedAttributes(){return Object.values(g.observedAttributes)}constructor(){super(),this._iconName=_.name,I.define(_)}initializedCallback(){j(this,ve)}connectedCallback(){this._iconButtonElement=ee(this,he.elementName),this._iconElement=this._iconButtonElement.querySelector(re.elementName),this._iconElement.name!==this._iconName&&(this._iconElement.name=this._iconName);const e=this._iconButtonElement.getAttribute("aria-labelledby");this._forwardObserver=we(this,g.forwardedAttributes,(o,a)=>{o==="aria-labelledby"&&!a&&(a=e),F(this._iconButtonElement,!!a,o,a??void 0)})}disconnectedCallback(){this._forwardObserver?.disconnect(),this._forwardObserver=void 0}attributeChangedCallback(e,o,a){switch(e){case g.attributes.ICON:this.icon=a;break}}get icon(){return this._iconName}set icon(e){this._iconName!==e&&(this._iconName=e??_.name,this._iconElement&&(this._iconElement.name=this._iconName),this.setAttribute(g.attributes.ICON,this._iconName))}};y=p([N({name:g.elementName,dependencies:[fe,me]})],y);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function ye(){S(y)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const B={OPEN:"open",DIRECTION:"direction"},Ce={...B},P={DRAWER:"forge-drawer",LEFT:"left",RIGHT:"right",CLOSING:"closing",CLOSED:"closed",NO_TRANSITION:"no-transition"},Ee={DRAWER:`.${P.DRAWER}`},De={AFTER_OPEN:"forge-drawer-after-open",AFTER_CLOSE:"forge-drawer-after-close"},t={observedAttributes:B,attributes:Ce,classes:P,selectors:Ee,events:De};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class Q extends te{constructor(e){super(e),this._component=e,this._drawerElement=oe(this._component,t.selectors.DRAWER)}proxyScrollEvent(){this.tryUnproxyScrollEvent(),this._unproxyScrollEventCb=ce(this._component.shadowRoot,this._component)}tryUnproxyScrollEvent(){this._unproxyScrollEventCb&&this._unproxyScrollEventCb()}setDirection(e){switch(e){case"left":this._drawerElement.classList.remove(t.classes.RIGHT),this._drawerElement.classList.add(t.classes.LEFT);break;case"right":this._drawerElement.classList.remove(t.classes.LEFT),this._drawerElement.classList.add(t.classes.RIGHT);break}}removeDrawerClass(e){G(e,this._drawerElement)}setDrawerClass(e){X(e,this._drawerElement)}listenTransitionComplete(e){this._activeTransitionListener&&this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=o=>{o.propertyName==="transform"&&(this._activeTransitionListener&&(this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=void 0),e())},this._drawerElement.addEventListener("transitionend",this._activeTransitionListener)}setInert(e){this._drawerElement.inert=e}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class H{constructor(e){this._adapter=e,this._open=!0,this._direction="left",this._openAnimationListener=()=>this._onOpenComplete(),this._closeAnimationListener=()=>this._onCloseComplete()}initialize(){this._open?this._setOpened():this._setClosed(),this._applyDirection(),this._adapter.setInert(!this._open),this._adapter.proxyScrollEvent()}destroy(){this._adapter.tryUnproxyScrollEvent()}_applyDirection(){this._adapter.setDirection(this._direction),this._adapter.setHostAttribute(t.attributes.DIRECTION,q(this._direction)?this._direction.toString():"")}_onOpenComplete(){if(!this._open)return;this._setOpened();const e=new CustomEvent(t.events.AFTER_OPEN,{bubbles:!0,composed:!0});this._adapter.dispatchHostEvent(e)}_onCloseComplete(){if(this._open)return;this._setClosed();const e=new CustomEvent(t.events.AFTER_CLOSE,{bubbles:!0,composed:!0});this._adapter.dispatchHostEvent(e)}_setOpened(){this._adapter.removeDrawerClass([t.classes.CLOSED,t.classes.CLOSING]),this._adapter.setHostAttribute(t.attributes.OPEN)}_setClosed(){this._adapter.removeDrawerClass([t.classes.CLOSING,t.classes.NO_TRANSITION]),this._adapter.setDrawerClass(t.classes.CLOSED),this._adapter.removeHostAttribute(t.attributes.OPEN)}_applyOpen(){this._open?(this._adapter.setInert(!1),this._triggerDrawerOpen(),this._adapter.setHostAttribute(t.attributes.OPEN)):(this._adapter.setInert(!0),this._triggerDrawerClose(),this._adapter.removeHostAttribute(t.attributes.OPEN))}async _triggerDrawerOpen(){this._adapter.listenTransitionComplete(this._openAnimationListener),await A(),this._adapter.removeDrawerClass([t.classes.CLOSED,t.classes.CLOSING])}async _triggerDrawerClose(){this._adapter.listenTransitionComplete(this._closeAnimationListener),await A(),this._adapter.setDrawerClass(t.classes.CLOSING)}get open(){return this._open}set open(e){e=!!e,this._open!==e&&(this._open=e,this._adapter.isConnected&&this._applyOpen())}get direction(){return this._direction}set direction(e){this._direction!==e&&(this._direction=e,this._adapter.isConnected&&this._applyDirection())}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class m extends T{static get observedAttributes(){return Object.values(t.observedAttributes)}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(e,o,a){switch(e){case t.observedAttributes.OPEN:this.open=Z(a);break;case t.observedAttributes.DIRECTION:this.direction=a;break}}}p([$()],m.prototype,"open",void 0);p([$()],m.prototype,"direction",void 0);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const xe=`${O}drawer`,Oe={elementName:xe};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Ne='<template><div class="forge-drawer" part="root"><slot name="header"></slot><div class="content" part="content"><slot></slot></div><slot name="footer"></slot></div></template>',Se=':host{display:grid;box-sizing:border-box;height:100%;overflow:hidden!important;--forge-divider-margin:4px 0}.forge-drawer{--_drawer-background:var(--forge-drawer-background, var(--forge-theme-surface, #ffffff));--_drawer-border-color:var(--forge-drawer-border-color, var(--forge-theme-outline, #e0e0e0));--_drawer-width:var(--forge-drawer-width, 256px);--_drawer-border-width:var(--forge-drawer-border-width, var(--forge-border-thin, 1px));--_drawer-transition-duration:var(--forge-drawer-transition-duration, var(--forge-animation-duration-medium1, 250ms));--_drawer-transition-easing:var(--forge-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_drawer-transition-duration-close:var(--forge-drawer-transition-duration-close, var(--forge-animation-duration-short4, 200ms))}.forge-drawer{width:var(--_drawer-width);height:100%;box-sizing:border-box;overflow:hidden;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;background-color:var(--_drawer-background);border-color:var(--_drawer-border-color);transition-property:transform;transition-duration:var(--_drawer-transition-duration);transition-timing-function:var(--_drawer-transition-easing)}.forge-drawer ::slotted([slot=header]){grid-row:1}.forge-drawer ::slotted([slot=footer]){grid-row:3}.forge-drawer .content::-webkit-scrollbar{height:var(--forge-scrollbar-height,16px);width:var(--forge-scrollbar-width,16px)}.forge-drawer .content::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height,32px);width:var(--forge-scrollbar-thumb-min-width,32px);border-radius:var(--forge-scrollbar-border-radius,calc(var(--forge-shape-full,9999px) * var(--forge-shape-factor,1)));border-width:var(--forge-scrollbar-border-width,3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container,var(--forge-theme-surface-container-medium,#c2c2c2));background-clip:content-box}.forge-drawer .content::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover,var(--forge-theme-surface-container-high,#9e9e9e))}.forge-drawer .content{overflow-x:auto;-webkit-overflow-scrolling:"touch";display:flex;flex-direction:column;grid-row:2}.forge-drawer.left{border-right-width:var(--_drawer-border-width);border-right-style:solid}.forge-drawer.right{border-left-width:var(--_drawer-border-width);border-left-style:solid}.forge-drawer.right.closing{transform:translateX(100%);right:0;left:auto;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.right.closed{transform:translateX(100%);right:0;left:auto;width:0;border:none}.forge-drawer.closing{transform:translateX(-100%);left:0;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.closed{transform:translateX(-100%);left:0;width:0;border:none}.forge-drawer.no-transition{transition:none!important}:host([open]){transform:translateZ(0)}';let C=class extends m{constructor(){super(),R(this,Ne,Se),this._core=new H(new Q(this))}};C=p([N({name:Oe.elementName})],C);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function ke(){S(C)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Ae=`${O}mini-drawer`,Le={elementName:Ae};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Te='<template><div class="root" part="root"><div class="forge-drawer mini" part="container"><slot name="header"></slot><div class="content" part="content"><slot></slot></div><slot name="footer"></slot></div></div></template>',Ie=':host{--_mini-drawer-width:var(--forge-mini-drawer-width, 56px);--_mini-drawer-min-width:var(--forge-mini-drawer-min-width, var(--_mini-drawer-width));--_mini-drawer-hover-width:var(--forge-mini-drawer-hover-width, var(--forge-drawer-width, 256px));--_mini-drawer-transition-duration:var(--forge-mini-drawer-transition-duration, var(--forge-animation-duration-short4, 200ms));--_mini-drawer-transition-easing:var(--forge-mini-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_mini-drawer-transition-delay:var(--forge-mini-drawer-transition-delay, 300ms);--_mini-drawer-hover-transition-duration:var(--forge-mini-drawer-hover-transition-duration, var(--forge-animation-duration-medium2, 300ms));--_mini-drawer-hover-transition-easing:var(--forge-mini-drawer-hover-transition-easing, var(--_mini-drawer-transition-easing));--_mini-drawer-hover-transition-delay:var(--forge-mini-drawer-hover-transition-delay, var(--forge-animation-duration-medium2, 300ms))}:host{display:grid;box-sizing:border-box;height:100%;overflow:hidden!important;width:var(--_mini-drawer-width);overflow:visible!important;--forge-divider-margin:4px 0}:host([direction=right]){min-width:var(--_mini-drawer-width);width:auto}:host([direction=right]) .root{position:relative}:host(:not([open])){display:none}:host([hover]) .right{position:absolute;right:0}:host([hover]) .forge-drawer:hover{width:var(--_mini-drawer-hover-width)!important;transition:width var(--_mini-drawer-hover-transition-duration) var(--_mini-drawer-hover-transition-easing) var(--_mini-drawer-hover-transition-delay)}:host([hover]) .forge-drawer:hover .content{overflow:auto}.forge-drawer{--_drawer-background:var(--forge-drawer-background, var(--forge-theme-surface, #ffffff));--_drawer-border-color:var(--forge-drawer-border-color, var(--forge-theme-outline, #e0e0e0));--_drawer-width:var(--forge-drawer-width, 256px);--_drawer-border-width:var(--forge-drawer-border-width, var(--forge-border-thin, 1px));--_drawer-transition-duration:var(--forge-drawer-transition-duration, var(--forge-animation-duration-medium1, 250ms));--_drawer-transition-easing:var(--forge-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_drawer-transition-duration-close:var(--forge-drawer-transition-duration-close, var(--forge-animation-duration-short4, 200ms))}.forge-drawer{width:var(--_drawer-width);height:100%;box-sizing:border-box;overflow:hidden;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;background-color:var(--_drawer-background);border-color:var(--_drawer-border-color);transition-property:transform;transition-duration:var(--_drawer-transition-duration);transition-timing-function:var(--_drawer-transition-easing)}.forge-drawer ::slotted([slot=header]){grid-row:1}.forge-drawer ::slotted([slot=footer]){grid-row:3}.forge-drawer .content::-webkit-scrollbar{height:var(--forge-scrollbar-height,16px);width:var(--forge-scrollbar-width,16px)}.forge-drawer .content::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height,32px);width:var(--forge-scrollbar-thumb-min-width,32px);border-radius:var(--forge-scrollbar-border-radius,calc(var(--forge-shape-full,9999px) * var(--forge-shape-factor,1)));border-width:var(--forge-scrollbar-border-width,3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container,var(--forge-theme-surface-container-medium,#c2c2c2));background-clip:content-box}.forge-drawer .content::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover,var(--forge-theme-surface-container-high,#9e9e9e))}.forge-drawer .content{overflow-x:auto;-webkit-overflow-scrolling:"touch";display:flex;flex-direction:column;grid-row:2}.forge-drawer.left{border-right-width:var(--_drawer-border-width);border-right-style:solid}.forge-drawer.right{border-left-width:var(--_drawer-border-width);border-left-style:solid}.forge-drawer.right.closing{transform:translateX(100%);right:0;left:auto;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.right.closed{transform:translateX(100%);right:0;left:auto;width:0;border:none}.forge-drawer.closing{transform:translateX(-100%);left:0;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.closed{transform:translateX(-100%);left:0;width:0;border:none}.forge-drawer.no-transition{transition:none!important}.root{z-index:var(--forge-z-index-surface,1);height:100%;min-width:var(--_mini-drawer-min-width)}.forge-drawer.mini{width:var(--_mini-drawer-width);z-index:var(--forge-z-index-surface,1);transition:width var(--_mini-drawer-transition-duration) var(--_mini-drawer-transition-easing)}.forge-drawer.mini .content{overflow:hidden}.forge-drawer.closed{width:0}';let E=class extends m{constructor(){super(),R(this,Te,Ie),this._core=new H(new Q(this))}get hover(){return this.hasAttribute("hover")}set hover(e){this.toggleAttribute("hover",e)}};E=p([N({name:Le.elementName})],E);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function $e(){S(E)}const Re=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{--_drawer-width: var(--forge-app-layout-drawer-width, 320px);--_dialog-width: var(--forge-app-layout-dialog-width, 320px);--_mini-drawer-z-index: var(--forge-app-layout-mini-drawer-z-index, 3);display:block;height:100%}forge-app-bar{--forge-app-bar-logo-font-size: 40px;--forge-app-bar-columns: auto 1fr auto}forge-app-bar :host(:state(small)){--forge-app-bar-row-padding: 0}slot[name=app-bar-logo]{--forge-icon-font-size: var(--forge-app-bar-logo-font-size)}.drawer-container.mini-hover{z-index:var(--_mini-drawer-z-index);overflow:visible}forge-drawer{--forge-drawer-width: var(--_drawer-width)}.close-drawer-button{padding-inline-start:var(--forge-spacing-xxsmall, 4px)}.left-sheet-dialog{--forge-dialog-width: var(--_dialog-width)}.left-sheet-dialog::part(surface){display:block}`;var ze=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,U=r=>{throw TypeError(r)},l=(r,e,o,a)=>{for(var c=a>1?void 0:a?Me(e,o):e,u=r.length-1,b;u>=0;u--)(b=r[u])&&(c=(a?b(e,o,c):b(c))||c);return a&&c&&ze(e,o,c),c},k=(r,e,o)=>e.has(r)||U("Cannot "+o),n=(r,e,o)=>(k(r,e,"read from private field"),o?o.call(r):e.get(r)),L=(r,e,o)=>e.has(r)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,o),Be=(r,e,o,a)=>(k(r,e,"write to private field"),e.set(r,o),o),v=(r,e,o)=>(k(r,e,"access private method"),o),i,f,W,D,x;const Pe="forge-app-layout";let s=class extends V{constructor(){super(),L(this,f),this.appTitle="",this.breakpoint=960,this.useMiniDrawer=!1,this.miniHover=!1,this._leftDrawerOpen=!1,this._isLargeScreen=!1,this._mediaQuery=null,L(this,i),this._handleMediaQueryChange=r=>{this._isLargeScreen=r.matches,this._updateStates(),v(this,f,W).call(this,this._isLargeScreen?"large":"small")},this._toggleLeftDrawer=()=>{this._isLargeScreen||(this._leftDrawerOpen=!this._leftDrawerOpen,d(n(this,i),"drawer-open",this._leftDrawerOpen),d(n(this,i),"drawer-closed",!this._leftDrawerOpen),this._applyDrawerStates(),v(this,f,D).call(this,this._leftDrawerOpen))},this._handleLeftDrawerAfterClose=()=>{this._leftDrawerOpen=!1,d(n(this,i),"drawer-open",!1),d(n(this,i),"drawer-closed",!0),v(this,f,D).call(this,!1)},this._handleSlotChange=r=>{r.target.name==="navigation"&&this.requestUpdate()},Be(this,i,this.attachInternals()),this._leftDrawerOpen=!1}get isLargeScreen(){return this._isLargeScreen}connectedCallback(){super.connectedCallback(),this._setupMediaQuery()}firstUpdated(r){super.firstUpdated(r),this._updateStates(),this._applyDrawerStates()}updated(r){super.updated(r),r.has("breakpoint")&&(this._cleanupMediaQuery(),this._setupMediaQuery())}disconnectedCallback(){super.disconnectedCallback(),this._cleanupMediaQuery()}_setupMediaQuery(){this._mediaQuery=window.matchMedia(`(min-width: ${this.breakpoint}px)`),this._isLargeScreen=this._mediaQuery.matches,this._updateStates(),this._mediaQuery.addEventListener("change",this._handleMediaQueryChange)}_cleanupMediaQuery(){this._mediaQuery&&(this._mediaQuery.removeEventListener("change",this._handleMediaQueryChange),this._mediaQuery=null)}_updateStates(){d(n(this,i),"small",!this._isLargeScreen),d(n(this,i),"large",this._isLargeScreen),this._isLargeScreen?this._leftDrawerOpen=!0:this._leftDrawerOpen=!1,d(n(this,i),"drawer-open",this._leftDrawerOpen),d(n(this,i),"drawer-closed",!this._leftDrawerOpen),this.hasUpdated&&this._applyDrawerStates()}_applyDrawerStates(){const r=this.useMiniDrawer?"forge-mini-drawer":"forge-drawer",e=this.shadowRoot?.querySelector(r);e&&e.open!==this._leftDrawerOpen&&(e.open=this._leftDrawerOpen)}render(){const r=h`<slot name="navigation" @slotchange=${this._handleSlotChange}></slot>`;return h`
      <forge-scaffold>
        <forge-app-bar slot="header" .titleText=${this.appTitle} theme-mode="scoped">
          <slot name="app-bar-logo" slot="logo">
            <forge-icon name="tyler_talking_t_logo"></forge-icon>
          </slot>
          <slot name="app-bar-start" slot="start"></slot>
          ${Y(!this._isLargeScreen,()=>h`<forge-app-bar-menu-button
                slot="start"
                @click=${this._toggleLeftDrawer}></forge-app-bar-menu-button>`)}
          <slot name="app-bar-center" slot="center"></slot>
          <slot name="app-bar-end" slot="end"></slot>
        </forge-app-bar>

        <!-- Small screens: Navigation in left slot -->
        ${this._isLargeScreen?"":n(this,f,x)?h`
                <forge-dialog
                  class="left-sheet-dialog"
                  fullscreen-threshold="0"
                  preset="left-sheet"
                  slot="left"
                  ?open=${this._leftDrawerOpen}
                  @forge-dialog-close=${this._handleLeftDrawerAfterClose}>
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
        ${this._isLargeScreen?n(this,f,x)?h`
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

        <slot name="body" slot="body"></slot>
        <slot name="right" slot="right"></slot>
        <slot name="body-right" slot="body-right"></slot>
        <slot name="body-footer" slot="body-footer"></slot>

        <slot name="footer" slot="footer"></slot>
      </forge-scaffold>
    `}};i=new WeakMap;f=new WeakSet;W=function(r){const e=new CustomEvent("forge-app-layout-breakpoint-change",{bubbles:!0,composed:!0,cancelable:!0,detail:{breakpoint:r}});this.dispatchEvent(e)};D=function(r){const e=new CustomEvent("forge-app-layout-drawer-change",{bubbles:!0,composed:!0,cancelable:!0,detail:{open:r}});this.dispatchEvent(e)};x=function(){return this._navigationNodes.length>0};de();le();ke();$e();ge();pe();ye();I.define([ae,ie,ne]);s.styles=K(Re);l([J({slot:"navigation",flatten:!0})],s.prototype,"_navigationNodes",2);l([w({type:String,attribute:"app-title"})],s.prototype,"appTitle",2);l([w({type:Number})],s.prototype,"breakpoint",2);l([w({type:Boolean,attribute:"use-mini-drawer"})],s.prototype,"useMiniDrawer",2);l([w({type:Boolean,attribute:"mini-hover"})],s.prototype,"miniHover",2);l([z()],s.prototype,"_leftDrawerOpen",2);l([z()],s.prototype,"_isLargeScreen",2);s=l([se(Pe)],s);export{$e as a,ke as d};
