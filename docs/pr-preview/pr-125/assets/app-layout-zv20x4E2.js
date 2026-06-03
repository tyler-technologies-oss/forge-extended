import{t as Ce,l as ke,j as Le,h as Se,c as De,r as Ee,i as Oe,x as f,E as x}from"./iframe-C44ATlN0.js";import{n as xe}from"./when-3fO0zp9C.js";import{C as X,B as te,y as Ne,z as Te,_ as D,e as F,d as q,m as Ae,f as ie,t as Be}from"./constants-DSgRJEDh.js";import{aq as I,I as ae,_ as Re,S as $e,a3 as re,R as oe,e as Ie,q as Me,ar as ze,B as m,O as c}from"./with-default-aria-DEeb_wyb.js";import{r as E}from"./state-DpTv8ICE.js";import{n as ne}from"./query-assigned-nodes-cwDSNLIu.js";import{d as He}from"./index-DGAZgQ00.js";import{d as We}from"./index-WqZDX3f5.js";import{p as Pe}from"./list-Bf10YP8d.js";import{d as Ue}from"./index-DNmQ7YPe.js";import{d as Qe}from"./index-B1JO16kf.js";import{f as Ge}from"./base-button-adapter-DJQ79g8S.js";import{a as Xe,I as Fe}from"./icon-button-D2WVgfRC.js";import{T as qe}from"./tooltip-BptsRu5z.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Ve=`${X}app-bar-menu-button`,se={ICON:"icon"},Ye={...se},Ze=["aria-label","aria-labelledby"],y={elementName:Ve,observedAttributes:se,attributes:Ye,forwardedAttributes:Ze};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const je='<template><forge-icon-button theme="app-bar"><forge-icon name="menu"></forge-icon></forge-icon-button><forge-tooltip type="label" placement="bottom">Menu</forge-tooltip></template>';let M=class extends te{static get observedAttributes(){return Object.values(y.observedAttributes)}constructor(){super(),this._iconName=I.name,ae.define(I)}initializedCallback(){Ne(this,je)}connectedCallback(){this._iconButtonElement=Te(this,Xe.elementName),this._iconElement=this._iconButtonElement.querySelector(Re.elementName),this._iconElement.name!==this._iconName&&(this._iconElement.name=this._iconName);const e=this._iconButtonElement.getAttribute("aria-labelledby");this._forwardObserver=Ge(this,y.forwardedAttributes,(o,s)=>{o==="aria-labelledby"&&!s&&(s=e),Ce(this._iconButtonElement,!!s,o,s??void 0)})}disconnectedCallback(){this._forwardObserver?.disconnect(),this._forwardObserver=void 0}attributeChangedCallback(e,o,s){switch(e){case y.attributes.ICON:this.icon=s;break}}get icon(){return this._iconName}set icon(e){this._iconName!==e&&(this._iconName=e??I.name,this._iconElement&&(this._iconElement.name=this._iconName),this.setAttribute(y.attributes.ICON,this._iconName))}};M=D([F({name:y.elementName,dependencies:[Fe,qe]})],M);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function Je(){q(M)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const le={OPEN:"open",DIRECTION:"direction"},Ke={...le},de={DRAWER:"forge-drawer",LEFT:"left",RIGHT:"right",CLOSING:"closing",CLOSED:"closed",NO_TRANSITION:"no-transition"},er={DRAWER:`.${de.DRAWER}`},rr={AFTER_OPEN:"forge-drawer-after-open",AFTER_CLOSE:"forge-drawer-after-close"},n={observedAttributes:le,attributes:Ke,classes:de,selectors:er,events:rr};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class he extends $e{constructor(e){super(e),this._component=e,this._drawerElement=Ae(this._component,n.selectors.DRAWER)}proxyScrollEvent(){this.tryUnproxyScrollEvent(),this._unproxyScrollEventCb=Pe(this._component.shadowRoot,this._component)}tryUnproxyScrollEvent(){this._unproxyScrollEventCb&&this._unproxyScrollEventCb()}setDirection(e){switch(e){case"left":this._drawerElement.classList.remove(n.classes.RIGHT),this._drawerElement.classList.add(n.classes.LEFT);break;case"right":this._drawerElement.classList.remove(n.classes.LEFT),this._drawerElement.classList.add(n.classes.RIGHT);break}}removeDrawerClass(e){ke(e,this._drawerElement)}setDrawerClass(e){Le(e,this._drawerElement)}listenTransitionComplete(e){this._activeTransitionListener&&this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=o=>{o.propertyName==="transform"&&(this._activeTransitionListener&&(this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=void 0),e())},this._drawerElement.addEventListener("transitionend",this._activeTransitionListener)}setInert(e){this._drawerElement.inert=e}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class ce{constructor(e){this._adapter=e,this._open=!0,this._direction="left",this._openAnimationListener=()=>this._onOpenComplete(),this._closeAnimationListener=()=>this._onCloseComplete()}initialize(){this._open?this._setOpened():this._setClosed(),this._applyDirection(),this._adapter.setInert(!this._open),this._adapter.proxyScrollEvent()}destroy(){this._adapter.tryUnproxyScrollEvent()}_applyDirection(){this._adapter.setDirection(this._direction),this._adapter.setHostAttribute(n.attributes.DIRECTION,Se(this._direction)?this._direction.toString():"")}_onOpenComplete(){if(!this._open)return;this._setOpened();const e=new CustomEvent(n.events.AFTER_OPEN,{bubbles:!0,composed:!0});this._adapter.dispatchHostEvent(e)}_onCloseComplete(){if(this._open)return;this._setClosed();const e=new CustomEvent(n.events.AFTER_CLOSE,{bubbles:!0,composed:!0});this._adapter.dispatchHostEvent(e)}_setOpened(){this._adapter.removeDrawerClass([n.classes.CLOSED,n.classes.CLOSING]),this._adapter.setHostAttribute(n.attributes.OPEN)}_setClosed(){this._adapter.removeDrawerClass([n.classes.CLOSING,n.classes.NO_TRANSITION]),this._adapter.setDrawerClass(n.classes.CLOSED),this._adapter.removeHostAttribute(n.attributes.OPEN)}_applyOpen(){this._open?(this._adapter.setInert(!1),this._triggerDrawerOpen(),this._adapter.setHostAttribute(n.attributes.OPEN)):(this._adapter.setInert(!0),this._triggerDrawerClose(),this._adapter.removeHostAttribute(n.attributes.OPEN))}async _triggerDrawerOpen(){this._adapter.listenTransitionComplete(this._openAnimationListener),await re(),this._adapter.removeDrawerClass([n.classes.CLOSED,n.classes.CLOSING])}async _triggerDrawerClose(){this._adapter.listenTransitionComplete(this._closeAnimationListener),await re(),this._adapter.setDrawerClass(n.classes.CLOSING)}get open(){return this._open}set open(e){e=!!e,this._open!==e&&(this._open=e,this._adapter.isConnected&&this._applyOpen())}get direction(){return this._direction}set direction(e){this._direction!==e&&(this._direction=e,this._adapter.isConnected&&this._applyDirection())}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class N extends te{static get observedAttributes(){return Object.values(n.observedAttributes)}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(e,o,s){switch(e){case n.observedAttributes.OPEN:this.open=De(s);break;case n.observedAttributes.DIRECTION:this.direction=s;break}}}D([oe()],N.prototype,"open",void 0);D([oe()],N.prototype,"direction",void 0);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const tr=`${X}drawer`,ir={elementName:tr};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const ar='<template><div class="forge-drawer" part="root"><slot name="header"></slot><div class="content" part="content"><slot></slot></div><slot name="footer"></slot></div></template>',or=':host{display:grid;box-sizing:border-box;height:100%;overflow:hidden!important;--forge-divider-margin:4px 0}.forge-drawer{--_drawer-background:var(--forge-drawer-background, var(--forge-theme-surface, #ffffff));--_drawer-border-color:var(--forge-drawer-border-color, var(--forge-theme-outline, #e0e0e0));--_drawer-width:var(--forge-drawer-width, 256px);--_drawer-border-width:var(--forge-drawer-border-width, var(--forge-border-thin, 1px));--_drawer-transition-duration:var(--forge-drawer-transition-duration, var(--forge-animation-duration-medium1, 250ms));--_drawer-transition-easing:var(--forge-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_drawer-transition-duration-close:var(--forge-drawer-transition-duration-close, var(--forge-animation-duration-short4, 200ms))}.forge-drawer{width:var(--_drawer-width);height:100%;box-sizing:border-box;overflow:hidden;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;background-color:var(--_drawer-background);border-color:var(--_drawer-border-color);transition-property:transform;transition-duration:var(--_drawer-transition-duration);transition-timing-function:var(--_drawer-transition-easing)}.forge-drawer ::slotted([slot=header]){grid-row:1}.forge-drawer ::slotted([slot=footer]){grid-row:3}.forge-drawer .content::-webkit-scrollbar{height:var(--forge-scrollbar-height,16px);width:var(--forge-scrollbar-width,16px)}.forge-drawer .content::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height,32px);width:var(--forge-scrollbar-thumb-min-width,32px);border-radius:var(--forge-scrollbar-border-radius,calc(var(--forge-shape-full,9999px) * var(--forge-shape-factor,1)));border-width:var(--forge-scrollbar-border-width,3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container,var(--forge-theme-surface-container-medium,#c2c2c2));background-clip:content-box}.forge-drawer .content::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover,var(--forge-theme-surface-container-high,#9e9e9e))}.forge-drawer .content{overflow-x:auto;-webkit-overflow-scrolling:"touch";display:flex;flex-direction:column;grid-row:2}.forge-drawer.left{border-right-width:var(--_drawer-border-width);border-right-style:solid}.forge-drawer.right{border-left-width:var(--_drawer-border-width);border-left-style:solid}.forge-drawer.right.closing{transform:translateX(100%);right:0;left:auto;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.right.closed{transform:translateX(100%);right:0;left:auto;width:0;border:none}.forge-drawer.closing{transform:translateX(-100%);left:0;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.closed{transform:translateX(-100%);left:0;width:0;border:none}.forge-drawer.no-transition{transition:none!important}:host([open]){transform:translateZ(0)}';let z=class extends N{constructor(){super(),ie(this,ar,or),this._core=new ce(new he(this))}};z=D([F({name:ir.elementName})],z);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function nr(){q(z)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const sr=`${X}mini-drawer`,lr={elementName:sr};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const dr='<template><div class="root" part="root"><div class="forge-drawer mini" part="container"><slot name="header"></slot><div class="content" part="content"><slot></slot></div><slot name="footer"></slot></div></div></template>',hr=':host{--_mini-drawer-width:var(--forge-mini-drawer-width, 56px);--_mini-drawer-min-width:var(--forge-mini-drawer-min-width, var(--_mini-drawer-width));--_mini-drawer-hover-width:var(--forge-mini-drawer-hover-width, var(--forge-drawer-width, 256px));--_mini-drawer-transition-duration:var(--forge-mini-drawer-transition-duration, var(--forge-animation-duration-short4, 200ms));--_mini-drawer-transition-easing:var(--forge-mini-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_mini-drawer-transition-delay:var(--forge-mini-drawer-transition-delay, 300ms);--_mini-drawer-hover-transition-duration:var(--forge-mini-drawer-hover-transition-duration, var(--forge-animation-duration-medium2, 300ms));--_mini-drawer-hover-transition-easing:var(--forge-mini-drawer-hover-transition-easing, var(--_mini-drawer-transition-easing));--_mini-drawer-hover-transition-delay:var(--forge-mini-drawer-hover-transition-delay, var(--forge-animation-duration-medium2, 300ms))}:host{display:grid;box-sizing:border-box;height:100%;overflow:hidden!important;width:var(--_mini-drawer-width);overflow:visible!important;--forge-divider-margin:4px 0}:host([direction=right]){min-width:var(--_mini-drawer-width);width:auto}:host([direction=right]) .root{position:relative}:host(:not([open])){display:none}:host([hover]) .right{position:absolute;right:0}:host([hover]) .forge-drawer:hover{width:var(--_mini-drawer-hover-width)!important;transition:width var(--_mini-drawer-hover-transition-duration) var(--_mini-drawer-hover-transition-easing) var(--_mini-drawer-hover-transition-delay)}:host([hover]) .forge-drawer:hover .content{overflow:auto}.forge-drawer{--_drawer-background:var(--forge-drawer-background, var(--forge-theme-surface, #ffffff));--_drawer-border-color:var(--forge-drawer-border-color, var(--forge-theme-outline, #e0e0e0));--_drawer-width:var(--forge-drawer-width, 256px);--_drawer-border-width:var(--forge-drawer-border-width, var(--forge-border-thin, 1px));--_drawer-transition-duration:var(--forge-drawer-transition-duration, var(--forge-animation-duration-medium1, 250ms));--_drawer-transition-easing:var(--forge-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_drawer-transition-duration-close:var(--forge-drawer-transition-duration-close, var(--forge-animation-duration-short4, 200ms))}.forge-drawer{width:var(--_drawer-width);height:100%;box-sizing:border-box;overflow:hidden;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;background-color:var(--_drawer-background);border-color:var(--_drawer-border-color);transition-property:transform;transition-duration:var(--_drawer-transition-duration);transition-timing-function:var(--_drawer-transition-easing)}.forge-drawer ::slotted([slot=header]){grid-row:1}.forge-drawer ::slotted([slot=footer]){grid-row:3}.forge-drawer .content::-webkit-scrollbar{height:var(--forge-scrollbar-height,16px);width:var(--forge-scrollbar-width,16px)}.forge-drawer .content::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container,var(--forge-theme-surface-container-low,#ebebeb))}.forge-drawer .content::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height,32px);width:var(--forge-scrollbar-thumb-min-width,32px);border-radius:var(--forge-scrollbar-border-radius,calc(var(--forge-shape-full,9999px) * var(--forge-shape-factor,1)));border-width:var(--forge-scrollbar-border-width,3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container,var(--forge-theme-surface-container-medium,#c2c2c2));background-clip:content-box}.forge-drawer .content::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover,var(--forge-theme-surface-container-high,#9e9e9e))}.forge-drawer .content{overflow-x:auto;-webkit-overflow-scrolling:"touch";display:flex;flex-direction:column;grid-row:2}.forge-drawer.left{border-right-width:var(--_drawer-border-width);border-right-style:solid}.forge-drawer.right{border-left-width:var(--_drawer-border-width);border-left-style:solid}.forge-drawer.right.closing{transform:translateX(100%);right:0;left:auto;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.right.closed{transform:translateX(100%);right:0;left:auto;width:0;border:none}.forge-drawer.closing{transform:translateX(-100%);left:0;z-index:var(--forge-z-index-surface,1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.closed{transform:translateX(-100%);left:0;width:0;border:none}.forge-drawer.no-transition{transition:none!important}.root{z-index:var(--forge-z-index-surface,1);height:100%;min-width:var(--_mini-drawer-min-width)}.forge-drawer.mini{width:var(--_mini-drawer-width);z-index:var(--forge-z-index-surface,1);transition:width var(--_mini-drawer-transition-duration) var(--_mini-drawer-transition-easing)}.forge-drawer.mini .content{overflow:hidden}.forge-drawer.closed{width:0}';let H=class extends N{constructor(){super(),ie(this,dr,hr),this._core=new ce(new he(this))}get hover(){return this.hasAttribute("hover")}set hover(e){this.toggleAttribute("hover",e)}};H=D([F({name:lr.elementName})],H);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function cr(){q(H)}class V{constructor(e,o){this._mediaQuery=null,this._isLargeScreen=!1,this._handleMediaQueryChange=s=>{this._isLargeScreen=s.matches,this._onChange(this._isLargeScreen)},this._getBreakpoint=e,this._onChange=o}get isLargeScreen(){return this._isLargeScreen}setup(){const e=this._getBreakpoint();this._mediaQuery=window.matchMedia(`(min-width: ${e}px)`),this._isLargeScreen=this._mediaQuery.matches,this._mediaQuery.addEventListener("change",this._handleMediaQueryChange),this._onChange(this._isLargeScreen)}cleanup(){this._mediaQuery&&(this._mediaQuery.removeEventListener("change",this._handleMediaQueryChange),this._mediaQuery=null)}update(){this.cleanup(),this.setup()}syncState(e){this._isLargeScreen=e,this._onChange(this._isLargeScreen)}}const gr=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{--_drawer-width: var(--forge-app-layout-drawer-width, 320px);--_dialog-width: var(--forge-app-layout-dialog-width, 320px);--_mini-drawer-z-index: var(--forge-app-layout-mini-drawer-z-index, 3);--_right-drawer-width: var(--forge-app-layout-right-drawer-width, 320px);--_right-dialog-width: var(--forge-app-layout-right-dialog-width, 320px);display:block;height:100%}forge-app-bar{--forge-app-bar-logo-font-size: 40px;--forge-app-bar-columns: auto 1fr auto}forge-app-bar :host(:state(small)){--forge-app-bar-row-padding: 0}slot[name=app-bar-logo]{--forge-icon-font-size: var(--forge-app-bar-logo-font-size)}.drawer-container.mini-hover{z-index:var(--_mini-drawer-z-index);overflow:visible}forge-drawer{--forge-drawer-width: var(--_drawer-width)}.close-drawer-button{padding-inline-start:var(--forge-spacing-xxsmall, 4px)}.left-sheet-dialog{--forge-dialog-width: var(--_dialog-width)}.left-sheet-dialog::part(surface){display:block}.right-sheet-dialog{--forge-dialog-width: var(--_right-dialog-width)}.right-sheet-dialog::part(surface){display:block}.right-drawer-container forge-drawer{--forge-drawer-width: var(--_right-drawer-width)}`;var fr=Object.defineProperty,pr=Object.getOwnPropertyDescriptor,ge=r=>{throw TypeError(r)},h=(r,e,o,s)=>{for(var p=s>1?void 0:s?pr(e,o):e,R=r.length-1,$;R>=0;R--)($=r[R])&&(p=(s?$(e,o,p):$(p))||p);return s&&p&&fr(e,o,p),p},Y=(r,e,o)=>e.has(r)||ge("Cannot "+o),i=(r,e,o)=>(Y(r,e,"read from private field"),o?o.call(r):e.get(r)),g=(r,e,o)=>e.has(r)?ge("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,o),v=(r,e,o,s)=>(Y(r,e,"write to private field"),e.set(r,o),o),a=(r,e,o)=>(Y(r,e,"access private method"),o),_,w,u,d,t,W,P,U,Q,fe,pe,we,Z,T,k,O,G,L,C,A,B,j,ue,J,me,K,ee,b,S,_e,be,ve,ye;const wr="forge-app-layout",ur="data-forge-app-layout-close";let l=class extends Oe{constructor(){super(),g(this,t),this.appTitle="",this.appTitleHref="",this.breakpoint=960,this.useMiniDrawer=!1,this.miniHover=!1,this._isLargeScreen=!1,this._leftDrawerOpen=!1,this._isLeftLargeScreen=!1,this._rightDrawerOpen=!1,this._isRightLargeScreen=!1,g(this,_),g(this,w,null),g(this,u,null),g(this,d),g(this,O,()=>{this._isLeftLargeScreen||(this._leftDrawerOpen=!this._leftDrawerOpen,c(i(this,d),"drawer-open",this._leftDrawerOpen),c(i(this,d),"drawer-closed",!this._leftDrawerOpen),a(this,t,k).call(this),a(this,t,J).call(this,this._leftDrawerOpen))}),g(this,L,()=>{a(this,t,G).call(this)}),g(this,A,()=>{a(this,t,C).call(this,!1)}),g(this,B,r=>{const e=r.target.name;["navigation","body-right-content"].includes(e)&&this.requestUpdate()}),g(this,j,r=>{r.composedPath().some(s=>s instanceof HTMLElement&&s.hasAttribute(ur))&&this.closeDrawer()}),v(this,d,this.attachInternals()),v(this,_,new V(()=>this.breakpoint,r=>a(this,t,fe).call(this,r))),this._leftDrawerOpen=!1}get isLargeScreen(){return this._isLargeScreen}closeDrawer(){this._isLeftLargeScreen||a(this,t,G).call(this)}openRightDrawer(){a(this,t,C).call(this,!0)}closeRightDrawer(){a(this,t,C).call(this,!1)}toggleRightDrawer(){a(this,t,C).call(this,!this._rightDrawerOpen)}connectedCallback(){super.connectedCallback(),i(this,_).setup(),a(this,t,W).call(this),a(this,t,U).call(this)}firstUpdated(r){super.firstUpdated(r),a(this,t,Z).call(this),a(this,t,k).call(this)}updated(r){super.updated(r),r.has("breakpoint")&&i(this,_).update(),r.has("leftBreakpoint")&&(a(this,t,P).call(this),a(this,t,W).call(this)),r.has("rightBreakpoint")&&(a(this,t,Q).call(this),a(this,t,U).call(this))}disconnectedCallback(){super.disconnectedCallback(),i(this,_).cleanup(),a(this,t,P).call(this),a(this,t,Q).call(this)}render(){return f`
      <forge-scaffold>
        <forge-app-bar slot="header" .titleText=${this.appTitle} .href=${this.appTitleHref} theme-mode="scoped">
          <slot name="app-bar-logo" slot="logo">
            <forge-icon name="tyler_talking_t_logo"></forge-icon>
          </slot>
          <slot name="app-bar-start" slot="start"></slot>
          ${xe(!this._isLeftLargeScreen,()=>f`<forge-app-bar-menu-button
                slot="start"
                @click=${i(this,O)}></forge-app-bar-menu-button>`)}
          <slot name="app-bar-center" slot="center"></slot>
          <slot name="app-bar-end" slot="end"></slot>
        </forge-app-bar>

        <!-- Left drawer templates -->
        ${i(this,t,_e)} ${i(this,t,be)}

        <slot name="body-header" slot="body-header"></slot>
        <slot name="body" slot="body"></slot>
        <slot slot="body"></slot>
        <slot name="right" slot="right"></slot>

        <!-- Right drawer templates -->
        ${i(this,t,ve)} ${i(this,t,ye)}

        <slot name="body-right" slot="body-right"></slot>
        <slot name="body-footer" slot="body-footer"></slot>

        <slot name="footer" slot="footer"></slot>
      </forge-scaffold>
    `}};_=new WeakMap;w=new WeakMap;u=new WeakMap;d=new WeakMap;t=new WeakSet;W=function(){if(this.leftBreakpoint!==void 0){const r=this.leftBreakpoint;v(this,w,new V(()=>r,e=>a(this,t,pe).call(this,e))),i(this,w).setup()}else this._isLeftLargeScreen=this._isLargeScreen,a(this,t,T).call(this)};P=function(){i(this,w)&&(i(this,w).cleanup(),v(this,w,null))};U=function(){if(this.rightBreakpoint!==void 0){const r=this.rightBreakpoint;v(this,u,new V(()=>r,e=>a(this,t,we).call(this,e))),i(this,u).setup()}else this._isRightLargeScreen=this._isLargeScreen};Q=function(){i(this,u)&&(i(this,u).cleanup(),v(this,u,null))};fe=function(r){this._isLargeScreen=r,a(this,t,Z).call(this),a(this,t,ue).call(this,r?"large":"small")};pe=function(r){this._isLeftLargeScreen=r,a(this,t,T).call(this)};we=function(r){this._isRightLargeScreen=r};Z=function(){c(i(this,d),"small",!this._isLargeScreen),c(i(this,d),"large",this._isLargeScreen),this.leftBreakpoint===void 0&&(this._isLeftLargeScreen=this._isLargeScreen,a(this,t,T).call(this)),this.rightBreakpoint===void 0&&(this._isRightLargeScreen=this._isLargeScreen),c(i(this,d),"right-drawer-open",this._rightDrawerOpen),c(i(this,d),"right-drawer-closed",!this._rightDrawerOpen),this.hasUpdated&&a(this,t,k).call(this)};T=function(){this._leftDrawerOpen=this._isLeftLargeScreen,c(i(this,d),"drawer-open",this._leftDrawerOpen),c(i(this,d),"drawer-closed",!this._leftDrawerOpen),this.hasUpdated&&a(this,t,k).call(this)};k=function(){const r=this.useMiniDrawer?"forge-mini-drawer":"forge-drawer",e=this.shadowRoot?.querySelector(r);e&&e.open!==this._leftDrawerOpen&&(e.open=this._leftDrawerOpen)};O=new WeakMap;G=function(){this._leftDrawerOpen&&(this._leftDrawerOpen=!1,c(i(this,d),"drawer-open",!1),c(i(this,d),"drawer-closed",!0),a(this,t,J).call(this,!1))};L=new WeakMap;C=function(r){this._rightDrawerOpen!==r&&(this._rightDrawerOpen=r,c(i(this,d),"right-drawer-open",r),c(i(this,d),"right-drawer-closed",!r),a(this,t,me).call(this,r))};A=new WeakMap;B=new WeakMap;j=new WeakMap;ue=function(r){const e=new CustomEvent("forge-app-layout-breakpoint-change",{bubbles:!0,composed:!0,cancelable:!0,detail:{breakpoint:r}});this.dispatchEvent(e)};J=function(r){const e=new CustomEvent("forge-app-layout-drawer-change",{bubbles:!0,composed:!0,cancelable:!0,detail:{open:r}});this.dispatchEvent(e)};me=function(r){const e=new CustomEvent("forge-app-layout-right-drawer-change",{bubbles:!0,composed:!0,cancelable:!0,detail:{open:r}});this.dispatchEvent(e)};K=function(){return this._navigationNodes.length>0};ee=function(){return this._bodyRightContentNodes.length>0};b=function(){return f`<slot name="navigation" @slotchange=${i(this,B)}></slot>`};S=function(){return f`<slot name="body-right-content" @slotchange=${i(this,B)}></slot>`};_e=function(){return this._isLeftLargeScreen?x:i(this,t,K)?f`
      <forge-dialog
        class="left-sheet-dialog"
        fullscreen-threshold="0"
        preset="left-sheet"
        slot="left"
        ?open=${this._leftDrawerOpen}
        @forge-dialog-close=${i(this,L)}>
        <div class="drawer-container">
          <forge-toolbar no-border>
            <forge-icon-button
              autofocus
              class="close-drawer-button"
              slot="before-start"
              aria-label="Close navigation drawer"
              @click=${i(this,O)}>
              <forge-icon name="close"></forge-icon>
            </forge-icon-button>
          </forge-toolbar>
          <aside @click=${i(this,j)}>${i(this,t,b)}</aside>
        </div>
      </forge-dialog>
    `:i(this,t,b)};be=function(){return this._isLeftLargeScreen?i(this,t,K)?f`
      <div class="drawer-container ${this.miniHover?"mini-hover":""}" slot="body-left">
        ${this.useMiniDrawer?f`
              <forge-mini-drawer
                ?hover=${this.miniHover}
                ?open=${this._leftDrawerOpen}
                @forge-drawer-after-close=${i(this,L)}>
                ${i(this,t,b)}
              </forge-mini-drawer>
            `:f`
              <forge-drawer ?open=${this._leftDrawerOpen} @forge-drawer-after-close=${i(this,L)}>
                ${i(this,t,b)}
              </forge-drawer>
            `}
      </div>
    `:i(this,t,b):x};ve=function(){return this._isRightLargeScreen?x:i(this,t,ee)?f`
      <forge-dialog
        class="right-sheet-dialog"
        fullscreen-threshold="0"
        preset="right-sheet"
        slot="right"
        ?open=${this._rightDrawerOpen}
        @forge-dialog-close=${i(this,A)}>
        <div class="drawer-container">
          <forge-toolbar no-border>
            <forge-icon-button
              autofocus
              class="close-drawer-button"
              slot="before-start"
              aria-label="Close right drawer"
              @click=${this.closeRightDrawer}>
              <forge-icon name="close"></forge-icon>
            </forge-icon-button>
          </forge-toolbar>
          <aside>${i(this,t,S)}</aside>
        </div>
      </forge-dialog>
    `:i(this,t,S)};ye=function(){return this._isRightLargeScreen?i(this,t,ee)?f`
      <div class="drawer-container right-drawer-container" slot="body-right">
        <forge-drawer
          direction="right"
          ?open=${this._rightDrawerOpen}
          @forge-drawer-after-close=${i(this,A)}>
          ${i(this,t,S)}
        </forge-drawer>
      </div>
    `:i(this,t,S):x};He();We();nr();cr();Ue();Qe();Je();ae.define([Ie,Me,ze]);l.styles=Ee(gr);h([ne({slot:"navigation",flatten:!0})],l.prototype,"_navigationNodes",2);h([ne({slot:"body-right-content",flatten:!0})],l.prototype,"_bodyRightContentNodes",2);h([m({type:String,attribute:"app-title"})],l.prototype,"appTitle",2);h([m({type:String,attribute:"app-title-href"})],l.prototype,"appTitleHref",2);h([m({type:Number})],l.prototype,"breakpoint",2);h([m({type:Number,attribute:"left-breakpoint"})],l.prototype,"leftBreakpoint",2);h([m({type:Number,attribute:"right-breakpoint"})],l.prototype,"rightBreakpoint",2);h([m({type:Boolean,attribute:"use-mini-drawer"})],l.prototype,"useMiniDrawer",2);h([m({type:Boolean,attribute:"mini-hover"})],l.prototype,"miniHover",2);h([E()],l.prototype,"_isLargeScreen",2);h([E()],l.prototype,"_leftDrawerOpen",2);h([E()],l.prototype,"_isLeftLargeScreen",2);h([E()],l.prototype,"_rightDrawerOpen",2);h([E()],l.prototype,"_isRightLargeScreen",2);l=h([Be(wr)],l);export{cr as a,nr as d};
