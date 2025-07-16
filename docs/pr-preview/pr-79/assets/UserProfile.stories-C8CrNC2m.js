import{g as D,i as k,E as u,x as i,r as C,c as M}from"./iframe-VV3YJBHb.js";import{_ as h,f as S,r as V,d as T,C as W,B as F,c as G,e as Y,I as $,u as j,t as q,a as K}from"./custom-element-D-kFd47i.js";import{n as f}from"./property-B8xcgQ4b.js";import{n as L,a as _}from"./when-DfnyT8j1.js";import{r as X,d as H}from"./theme-toggle-C_MY1Jmy.js";import{d as J}from"./profile-link-EMI7kqtH.js";import{o as Q}from"./style-map-75UYiIm9.js";import{e as Z}from"./class-map-_cnamMKI.js";import{d as ee}from"./index-BUN2xWL7.js";import{d as te}from"./index-1LAZnW7L.js";import{d as oe}from"./index-BhRCxGpw.js";import{d as re}from"./index-BXPHTufk.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function ae(e){const t=e.shadowRoot,o=e.constructor.styles,a=e.ownerDocument.defaultView;if(!(!D||!t||!o||!a))if(Array.isArray(o)&&o.length){const r=o.map(c=>{const p=new a.CSSStyleSheet;return p.replaceSync(c.toString()),p});t.adoptedStyleSheets=r}else{const r=new a.CSSStyleSheet;r.replaceSync(o.toString()),t.adoptedStyleSheets=[r]}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class ie extends k{adoptedCallback(){ae(this)}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */var O;const ne=':host{display:inline-block}:host([hidden]){display:none}.forge-avatar{--_avatar-size:var(--forge-avatar-size, 40px);--_avatar-background:var(--forge-avatar-background, var(--forge-theme-tertiary, #3d5afe));--_avatar-color:var(--forge-avatar-color, var(--forge-theme-on-tertiary, #ffffff));--_avatar-transition-duration:var(--forge-avatar-transition-duration, var(--forge-animation-duration-short4, 200ms));--_avatar-transition-timing:var(--forge-avatar-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_avatar-shape:var(--forge-avatar-shape, calc(var(--forge-shape-round, 50%) * var(--forge-shape-factor, 1)))}.forge-avatar{display:flex;align-items:center;justify-content:center;overflow:hidden;transition:height var(--_avatar-transition-duration) var(--_avatar-transition-timing),width var(--_avatar-transition-duration) var(--_avatar-transition-timing);border-radius:var(--_avatar-shape);box-sizing:border-box;width:var(--_avatar-size);height:var(--_avatar-size);background-color:var(--_avatar-background);background-position:center;background-repeat:no-repeat;background-size:cover;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-subheading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-subheading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-subheading2-font-size-scale, 1)));font-weight:var(--forge-typography-subheading2-font-weight,400);line-height:var(--forge-typography-subheading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-subheading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-subheading2-letter-spacing, normal);text-transform:var(--forge-typography-subheading2-text-transform,inherit);text-decoration:var(--forge-typography-subheading2-text-decoration,inherit);color:var(--_avatar-color)}.forge-avatar--image{background-color:inherit}',se=(e,t)=>e?.trim()?t===1?e[0].toUpperCase():(e.match(/\S+/g)??[]).slice(0,t).reduce((a,r)=>a+=r[0].toUpperCase(),""):"",z="forge-avatar";let n=class extends ie{constructor(){super(...arguments),this.text="",this.letterCount=2,this.imageUrl=""}willUpdate(t){t.has("imageUrl")&&this._tryLoadImage()}render(){return i`
      <div
        aria-hidden="true"
        part="root"
        class=${Z({"forge-avatar":!0,"forge-avatar--image":!!this._image})}
        style=${this._image?Q({backgroundImage:`url(${this._image.src})`}):u}>
        <slot>${this._image?u:se(this.text,this.letterCount)}</slot>
      </div>
    `}async _tryLoadImage(){if(this.imageUrl){const t=new Image;t.onload=()=>this._image=t,t.onerror=()=>this._image=void 0,t.src=this.imageUrl}else this._image=void 0}};O=V;n.styles=C(ne);n[O]=z;h([f()],n.prototype,"text",void 0);h([f({type:Number,attribute:"letter-count"})],n.prototype,"letterCount",void 0);h([f({type:String,attribute:"image-url"})],n.prototype,"imageUrl",void 0);h([X()],n.prototype,"_image",void 0);n=h([S(z)],n);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function ge(){T(n)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const le=`${W}divider`,fe={VERTICAL:"vertical"},v={elementName:le,attributes:fe};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const de='<template><div class="forge-divider" part="root"></div></template>',pe=":host{--_divider-margin:var(--forge-divider-margin, 0)}:host{display:block;margin:var(--_divider-margin)}:host([hidden]){display:none}.forge-divider{--_divider-color:var(--forge-divider-color, var(--forge-theme-outline, #e0e0e0));--_divider-width:var(--forge-divider-width, var(--forge-border-thin, 1px));--_divider-border-style:var(--forge-divider-border-style, solid)}.forge-divider{border:none;border-bottom-color:var(--_divider-color);border-bottom-width:var(--_divider-width);border-bottom-style:var(--_divider-border-style);height:0}:host([vertical]){display:inline-block;height:100%}:host([vertical]) .forge-divider{border:none;border-right-color:var(--_divider-color);border-right-width:var(--_divider-width);border-right-style:var(--_divider-border-style);height:100%;width:0}";let w=class extends F{static get observedAttributes(){return[v.attributes.VERTICAL]}constructor(){super(),G(this,de,pe)}attributeChangedCallback(t,o,a){switch(t){case v.attributes.VERTICAL:this.vertical=M(a);break}}get vertical(){return this.hasAttribute(v.attributes.VERTICAL)}set vertical(t){this.toggleAttribute(v.attributes.VERTICAL,t)}};w=h([Y({name:v.elementName})],w);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function he(){T(w)}const ce=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var ve=Object.defineProperty,me=Object.getOwnPropertyDescriptor,A=e=>{throw TypeError(e)},d=(e,t,o,a)=>{for(var r=a>1?void 0:a?me(t,o):t,c=e.length-1,p;c>=0;c--)(p=e[c])&&(r=(a?p(t,o,r):p(r))||r);return a&&r&&ve(t,o,r),r},E=(e,t,o)=>t.has(e)||A("Cannot "+o),l=(e,t,o)=>(E(e,t,"read from private field"),o?o.call(e):t.get(e)),x=(e,t,o)=>t.has(e)?A("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),N=(e,t,o)=>(E(e,t,"access private method"),o),y,b,g,I,B,P,R,U;const ue="forge-user-profile";let s=class extends k{constructor(){super(...arguments),x(this,g),this.fullName="",this.email="",this.buttonLabel="Open user profile",this.themeToggle=!1,x(this,y,i`<slot name="link" id="link-slot"></slot>`),x(this,b,i`<slot name="sign-out-button-text" id="sign-out-button-slot"></slot>`)}render(){return i`
      <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
        <forge-avatar .text=${this.fullName} id="button-avatar"></forge-avatar>
      </forge-icon-button>
      <forge-popover
        id="user-profile-popover"
        anchor="popover-trigger"
        placement="bottom-end"
        arrow
        position-strategy="fixed"
        @slotchange=${N(this,g,U)}>
        <div class="user-info-container">
          <forge-avatar
            .text=${this.fullName}
            class="popover-avatar"
            id="popover-avatar"></forge-avatar>
          <div class="user-info">
            <div class="full-name">${this.fullName}</div>
            <div class="email">${this.email}</div>
          </div>
        </div>
        ${_(this._slottedLinkNodes.length,()=>i`<forge-divider></forge-divider>`)} 
        ${l(this,g,I)}
        ${l(this,g,B)} 
        ${l(this,g,P)}
      </forge-popover>
    `}};y=new WeakMap;b=new WeakMap;g=new WeakSet;I=function(){const e=this._slottedLinkNodes.length>0;return _(e,()=>i` <forge-list>${l(this,y)}</forge-list> `,()=>l(this,y))};B=function(){const e=this.themeToggle;return _(e,()=>i`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle></forge-theme-toggle>
        </div>
      `,()=>u)};P=function(){const e=this._slottedSignOutButtonTextNodes.length>0;return _(e,()=>i`
        <forge-toolbar inverted>
          <div slot="end">
            <forge-button class="sign-out-button" id="sign-out-button" @click=${N(this,g,R)}>
              ${l(this,b)}
              <forge-icon name="logout" external slot="end"></forge-icon>
            </forge-button>
          </div>
        </forge-toolbar>
      `,()=>i`${l(this,b)}`)};R=function(){const e=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(e)};U=function(e){const t=e.target.name;["profile-button-text","link","sign-out-button-text"].includes(t)&&this.requestUpdate()};ge();ee();he();te();oe();H();re();$.define([j]);s.styles=C(ce);d([f({attribute:"full-name"})],s.prototype,"fullName",2);d([f()],s.prototype,"email",2);d([f({attribute:"button-label"})],s.prototype,"buttonLabel",2);d([f({type:Boolean,attribute:"theme-toggle"})],s.prototype,"themeToggle",2);d([L({slot:"link",flatten:!0})],s.prototype,"_slottedLinkNodes",2);d([L({slot:"sign-out-button-text",flatten:!0})],s.prototype,"_slottedSignOutButtonTextNodes",2);s=d([S(ue)],s);const{action:ye}=__STORYBOOK_MODULE_ACTIONS__;J();const be=ye("forge-user-profile-sign-out");$.define([q,K]);const _e="forge-user-profile",xe={title:"Components/User Profile",render:e=>i`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        @forge-user-profile-sign-out=${t=>be(t)}
        slot="end"
        button-label="${e.buttonAriaLabel}"
        ?theme-toggle=${e.showThemeToggle}
        full-name="First Last"
        email="first.last@tylertech.com">
        ${e.showSlottedLinks?i`<forge-profile-link slot="link">
          <forge-icon slot="icon" name="settings"></forge-icon>
          <a href="http://www.google.com" target="_blank">Settings</a>
        </forge-profile-link>
        <forge-profile-link slot="link">
          <forge-icon slot="icon" name="account"></forge-icon>
          <a href="http://www.google.com" target="_blank">Profile</a>
        </forge-profile-link>
        `:u}
        ${e.signOutButtonText.length?i`<span slot="sign-out-button-text">${e.signOutButtonText}</span>`:""}
      </forge-user-profile>
    </forge-app-bar>`,component:_e,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{signOutButtonText:{control:"text"},buttonAriaLabel:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"}},args:{signOutButtonText:"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",showSlottedLinks:!0,showThemeToggle:!0}},m={};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};const we=["Demo"],Re=Object.freeze(Object.defineProperty({__proto__:null,Demo:m,__namedExportsOrder:we,default:xe},Symbol.toStringTag,{value:"Module"}));export{m as D,Re as U};
