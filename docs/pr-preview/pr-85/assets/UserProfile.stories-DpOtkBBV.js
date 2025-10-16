import{E as w,x as n,r as Y,c as fe,i as pe}from"./iframe-CreInDM6.js";import{I as F,y as de,g as ce,q as ue}from"./icon-registry-CwmqUg58.js";import{M}from"./index-CWk7euD-.js";import{g as he}from"./_commonjsHelpers-CqkleIqs.js";import{e as G,n as H}from"./ref-C1kXUrS8.js";import{t as J}from"./custom-element-BhZVzxrc.js";import{n as p}from"./property-D4vZDycR.js";import{n as me}from"./query-assigned-nodes-cwDSNLIu.js";import{n as D}from"./when-3fO0zp9C.js";import{d as ve}from"./theme-toggle-CCqBOJVE.js";import"./profile-link-DNkcpHT8.js";import{_ as u,C as ye,d as X,c as be}from"./tslib.es6-C1q-6evi.js";import{r as _e}from"./state-BMuFkNwr.js";import{o as Oe}from"./style-map-Bu_7HEbB.js";import{e as we}from"./class-map-CbvGprsY.js";import{B as Te}from"./base-lit-element-BDZ3Sqqv.js";import{C as Ee,B as Se,c as Ce}from"./constants-TV9KMdGq.js";import{d as ke}from"./index-Cqq9RR6S.js";import{d as xe}from"./index-DgE_wAYr.js";import{d as Ae}from"./index-DO8OeINa.js";import{d as Pe}from"./index-DkS7Nifc.js";import{d as De}from"./index-Ct1nLHLf.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */var Q;const $e=':host{display:inline-block}:host([hidden]){display:none}.forge-avatar{--_avatar-size:var(--forge-avatar-size, 40px);--_avatar-background:var(--forge-avatar-background, var(--forge-theme-tertiary, #3d5afe));--_avatar-color:var(--forge-avatar-color, var(--forge-theme-on-tertiary, #ffffff));--_avatar-transition-duration:var(--forge-avatar-transition-duration, var(--forge-animation-duration-short4, 200ms));--_avatar-transition-timing:var(--forge-avatar-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_avatar-shape:var(--forge-avatar-shape, calc(var(--forge-shape-round, 50%) * var(--forge-shape-factor, 1)))}.forge-avatar{display:flex;align-items:center;justify-content:center;overflow:hidden;transition:height var(--_avatar-transition-duration) var(--_avatar-transition-timing),width var(--_avatar-transition-duration) var(--_avatar-transition-timing);border-radius:var(--_avatar-shape);box-sizing:border-box;width:var(--_avatar-size);height:var(--_avatar-size);background-color:var(--_avatar-background);background-position:center;background-repeat:no-repeat;background-size:cover;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-subheading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-subheading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-subheading2-font-size-scale, 1)));font-weight:var(--forge-typography-subheading2-font-weight,400);line-height:var(--forge-typography-subheading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-subheading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-subheading2-letter-spacing, normal);text-transform:var(--forge-typography-subheading2-text-transform,inherit);text-decoration:var(--forge-typography-subheading2-text-decoration,inherit);color:var(--_avatar-color)}.forge-avatar--image{background-color:inherit}',Le=(t,e)=>t?.trim()?e===1?t[0].toUpperCase():(t.match(/\S+/g)??[]).slice(0,e).reduce((o,a)=>o+=a[0].toUpperCase(),""):"",Z="forge-avatar";let g=class extends Te{constructor(){super(...arguments),this.text="",this.letterCount=2,this.imageUrl=""}willUpdate(e){e.has("imageUrl")&&this._tryLoadImage()}render(){return n`
      <div
        aria-hidden="true"
        part="root"
        class=${we({"forge-avatar":!0,"forge-avatar--image":!!this._image})}
        style=${this._image?Oe({backgroundImage:`url(${this._image.src})`}):w}>
        <slot>${this._image?w:Le(this.text,this.letterCount)}</slot>
      </div>
    `}async _tryLoadImage(){if(this.imageUrl){const e=new Image;e.onload=()=>this._image=e,e.onerror=()=>this._image=void 0,e.src=this.imageUrl}else this._image=void 0}};Q=ye;g.styles=Y($e);g[Q]=Z;u([p()],g.prototype,"text",void 0);u([p({type:Number,attribute:"letter-count"})],g.prototype,"letterCount",void 0);u([p({type:String,attribute:"image-url"})],g.prototype,"imageUrl",void 0);u([_e()],g.prototype,"_image",void 0);g=u([J(Z)],g);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function Re(){X(g)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Ie=`${Ee}divider`,Ue={VERTICAL:"vertical"},h={elementName:Ie,attributes:Ue};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Ne='<template><div class="forge-divider" part="root"></div></template>',Me=":host{--_divider-margin:var(--forge-divider-margin, 0)}:host{display:block;margin:var(--_divider-margin)}:host([hidden]){display:none}.forge-divider{--_divider-color:var(--forge-divider-color, var(--forge-theme-outline, #e0e0e0));--_divider-width:var(--forge-divider-width, var(--forge-border-thin, 1px));--_divider-border-style:var(--forge-divider-border-style, solid)}.forge-divider{border:none;border-bottom-color:var(--_divider-color);border-bottom-width:var(--_divider-width);border-bottom-style:var(--_divider-border-style);height:0}:host([vertical]){display:inline-block;height:100%}:host([vertical]) .forge-divider{border:none;border-right-color:var(--_divider-color);border-right-width:var(--_divider-width);border-right-style:var(--_divider-border-style);height:100%;width:0}";let x=class extends Se{static get observedAttributes(){return[h.attributes.VERTICAL]}constructor(){super(),be(this,Ne,Me)}attributeChangedCallback(e,r,o){switch(e){case h.attributes.VERTICAL:this.vertical=fe(o);break}}get vertical(){return this.hasAttribute(h.attributes.VERTICAL)}set vertical(e){this.toggleAttribute(h.attributes.VERTICAL,e)}};x=u([Ce({name:h.elementName})],x);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function ze(){X(x)}var Be="DARK_MODE",je="UPDATE_DARK_MODE",S,z;function Ve(){return z||(z=1,S=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var o,a,i;if(Array.isArray(e)){if(o=e.length,o!=r.length)return!1;for(a=o;a--!==0;)if(!t(e[a],r[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(i=Object.keys(e),o=i.length,o!==Object.keys(r).length)return!1;for(a=o;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[a]))return!1;for(a=o;a--!==0;){var s=i[a];if(!t(e[s],r[s]))return!1}return!0}return e!==e&&r!==r}),S}var Ke=Ve();const B=he(Ke);function y(t){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(t)}var C;function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,o)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?j(Object(r),!0).forEach(function(o){qe(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function qe(t,e,r){return e=We(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function We(t){var e=Ye(t,"string");return y(e)==="symbol"?e:String(e)}function Ye(t,e){if(y(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(y(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function b(t){return Je(t)||He(t)||Ge(t)||Fe()}function Fe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ge(t,e){if(t){if(typeof t=="string")return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(t,e)}}function He(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Je(t){if(Array.isArray(t))return A(t)}function A(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}const{global:Xe}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:Ut,SET_STORIES:Nt,DOCS_RENDERED:Mt}=__STORYBOOK_MODULE_CORE_EVENTS__;var ee=Xe,Qe=ee.document,T=ee.window,te="sb-addon-themes-3";(C=T.matchMedia)===null||C===void 0||C.call(T,"(prefers-color-scheme: dark)");var P={classTarget:"body",dark:M.dark,darkClass:["dark"],light:M.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},K=function(e){T.localStorage.setItem(te,JSON.stringify(e))},Ze=function(e,r){var o=r.current,a=r.darkClass,i=a===void 0?P.darkClass:a,s=r.lightClass,L=s===void 0?P.lightClass:s;if(o==="dark"){var R,I;(R=e.classList).remove.apply(R,b(_(L))),(I=e.classList).add.apply(I,b(_(i)))}else{var U,N;(U=e.classList).remove.apply(U,b(_(i))),(N=e.classList).add.apply(N,b(_(L)))}},_=function(e){var r=[];return r.concat(e).map(function(o){return o})},et=function(e){var r=Qe.querySelector(e.classTarget);r&&Ze(r,e)},tt=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=T.localStorage.getItem(te);if(typeof r=="string"){var o=JSON.parse(r);return e&&(e.dark&&!B(o.dark,e.dark)&&(o.dark=e.dark,K(o)),e.light&&!B(o.light,e.light)&&(o.light=e.light,K(o))),o}return V(V({},P),e)};et(tt());const{addons:zt,useState:Bt,useEffect:jt}=__STORYBOOK_MODULE_PREVIEW_API__,rt=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var ot=Object.defineProperty,at=Object.getOwnPropertyDescriptor,re=t=>{throw TypeError(t)},c=(t,e,r,o)=>{for(var a=o>1?void 0:o?at(e,r):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(a=(o?s(e,r,a):s(a))||a);return o&&a&&ot(e,r,a),a},oe=(t,e,r)=>e.has(t)||re("Cannot "+r),l=(t,e,r)=>(oe(t,e,"read from private field"),r?r.call(t):e.get(t)),O=(t,e,r)=>e.has(t)?re("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),ae=(t,e,r)=>(oe(t,e,"access private method"),r),E,$,v,d,ie,ne,se,le,ge;const it="forge-user-profile";let f=class extends pe{constructor(){super(...arguments),O(this,d),this.fullName="",this.email="",this.imageUrl="",this.buttonLabel="Open user profile",this.themeToggle=!1,O(this,E,n`<slot name="link" id="link-slot"></slot>`),O(this,$,n`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`),O(this,v,G())}render(){return n`
      <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
        <forge-avatar .text=${this.fullName} .imageUrl=${this.imageUrl} id="button-avatar"></forge-avatar>
      </forge-icon-button>
      <forge-popover
        id="user-profile-popover"
        anchor="popover-trigger"
        placement="bottom-end"
        arrow
        position-strategy="fixed"
        @slotchange=${ae(this,d,ge)}>
        <div class="user-info-container">
          <forge-avatar
            .text=${this.fullName}
            class="popover-avatar"
            .imageUrl=${this.imageUrl}
            id="popover-avatar"></forge-avatar>
          <div class="user-info">
            <div class="full-name">${this.fullName}</div>
            <div class="email">${this.email}</div>
          </div>
        </div>
        ${D(this._slottedLinkNodes.length,()=>n`<forge-divider></forge-divider>`)} 
        ${l(this,d,ie)}
        ${l(this,d,ne)} 
        ${l(this,d,se)}
      </forge-popover>
    `}setTheme(t){l(this,v).value&&l(this,v).value.setTheme(t)}};E=new WeakMap;$=new WeakMap;v=new WeakMap;d=new WeakSet;ie=function(){const t=this._slottedLinkNodes.length>0;return D(t,()=>n` <forge-list>${l(this,E)}</forge-list> `,()=>l(this,E))};ne=function(){const t=this.themeToggle;return D(t,()=>n`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle ${H(l(this,v))}></forge-theme-toggle>
        </div>
      `,()=>w)};se=function(){return n`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-out-button" id="sign-out-button" @click=${ae(this,d,le)}>
            ${l(this,$)}
            <forge-icon name="logout" external slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `};le=function(){const t=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(t)};ge=function(t){const e=t.target.name;["profile-button-text","link","sign-out-button-text"].includes(e)&&this.requestUpdate()};Re();ke();ze();xe();Ae();ve();Pe();F.define([de]);f.styles=Y(rt);c([p({attribute:"full-name"})],f.prototype,"fullName",2);c([p()],f.prototype,"email",2);c([p({attribute:"image-url"})],f.prototype,"imageUrl",2);c([p({attribute:"button-label"})],f.prototype,"buttonLabel",2);c([p({type:Boolean,attribute:"theme-toggle"})],f.prototype,"themeToggle",2);c([me({slot:"link",flatten:!0})],f.prototype,"_slottedLinkNodes",2);f=c([J(it)],f);const{addons:nt}=__STORYBOOK_MODULE_PREVIEW_API__,{action:st}=__STORYBOOK_MODULE_ACTIONS__,q=nt.getChannel();De();const lt=st("forge-user-profile-sign-out");F.define([ce,ue]);const gt="forge-user-profile";let W=!1,k=null;const ft={title:"Components/User Profile",render:t=>{const e=G();function r(a){const i=a.detail.theme==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":a.detail.theme;k=a.detail.theme,q.emit(je,i)}function o(a){if(k==="system"){k=null;return}e.value&&e.value.setTheme(a?"dark":"light")}return W||(q.on(Be,o),W=!0),n`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        ${H(e)}
        @forge-user-profile-sign-out=${a=>lt(a)}
        @forge-theme-toggle-update=${r}
        slot="end"
        button-label="${t.buttonAriaLabel}"
        ?theme-toggle=${t.showThemeToggle}
        image-url="${t.imageUrl}"
        full-name="First Last"
        email="first.last@tylertech.com">
        ${t.showSlottedLinks?n`<forge-profile-link slot="link">
          <forge-icon slot="icon" name="settings"></forge-icon>
          <a href="http://www.google.com" target="_blank">Settings</a>
        </forge-profile-link>
        <forge-profile-link slot="link">
          <forge-icon slot="icon" name="account"></forge-icon>
          <a href="http://www.google.com" target="_blank">Profile</a>
        </forge-profile-link>
        `:w}
        ${t.signOutButtonText.length?n`<span slot="sign-out-button-text">${t.signOutButtonText}</span>`:""}
      </forge-user-profile>
    </forge-app-bar>`},component:gt,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{signOutButtonText:{control:"text"},buttonAriaLabel:{control:"text"},imageUrl:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"}},args:{signOutButtonText:"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",imageUrl:"",showSlottedLinks:!0,showThemeToggle:!0}},m={};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};const pt=["Demo"],Vt=Object.freeze(Object.defineProperty({__proto__:null,Demo:m,__namedExportsOrder:pt,default:ft},Symbol.toStringTag,{value:"Module"}));export{m as D,Vt as U};
