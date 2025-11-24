import{c as ne,r as ie,i as se,x as s,E as Y}from"./iframe-BQH4m3ZX.js";import{C as le,B as fe,m as ge,_ as pe,l as de,h as ce,I as F,N as ue,n as d,O as he,i as me,e as ve,f as ye}from"./with-default-aria-BBCErNbO.js";import{M as U}from"./index-BFVZ7Xg9.js";import{g as be}from"./_commonjsHelpers-CqkleIqs.js";import{e as G,n as H}from"./ref-CF0fVRZP.js";import{n as _e,a as D}from"./when-DfnyT8j1.js";import"./theme-toggle-5rvi1ECf.js";import"./profile-link-OQgLvDYd.js";import{d as Oe,a as we}from"./index-Dr61Spdq.js";import{d as Se}from"./index-vtwZezmV.js";import{d as Te}from"./index-DUGGTb_G.js";import{d as Ee}from"./index-DjhE9wlZ.js";import{d as Ce}from"./index-B6sHZcjk.js";import{d as ke}from"./index-B2_5D0ds.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const xe=`${le}divider`,Ae={VERTICAL:"vertical"},u={elementName:xe,attributes:Ae};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const De='<template><div class="forge-divider" part="root"></div></template>',Pe=":host{--_divider-margin:var(--forge-divider-margin, 0)}:host{display:block;margin:var(--_divider-margin)}:host([hidden]){display:none}.forge-divider{--_divider-color:var(--forge-divider-color, var(--forge-theme-outline, #e0e0e0));--_divider-width:var(--forge-divider-width, var(--forge-border-thin, 1px));--_divider-border-style:var(--forge-divider-border-style, solid)}.forge-divider{border:none;border-bottom-color:var(--_divider-color);border-bottom-width:var(--_divider-width);border-bottom-style:var(--_divider-border-style);height:0}:host([vertical]){display:inline-block;height:100%}:host([vertical]) .forge-divider{border:none;border-right-color:var(--_divider-color);border-right-width:var(--_divider-width);border-right-style:var(--_divider-border-style);height:100%;width:0}";let C=class extends fe{static get observedAttributes(){return[u.attributes.VERTICAL]}constructor(){super(),ge(this,De,Pe)}attributeChangedCallback(e,r,o){switch(e){case u.attributes.VERTICAL:this.vertical=ne(o);break}}get vertical(){return this.hasAttribute(u.attributes.VERTICAL)}set vertical(e){this.toggleAttribute(u.attributes.VERTICAL,e)}};C=pe([de({name:u.elementName})],C);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function $e(){ce(C)}var Ie="DARK_MODE",Re="UPDATE_DARK_MODE",S,B;function Le(){return B||(B=1,S=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var o,a,n;if(Array.isArray(e)){if(o=e.length,o!=r.length)return!1;for(a=o;a--!==0;)if(!t(e[a],r[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(n=Object.keys(e),o=n.length,o!==Object.keys(r).length)return!1;for(a=o;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[a]))return!1;for(a=o;a--!==0;){var f=n[a];if(!t(e[f],r[f]))return!1}return!0}return e!==e&&r!==r}),S}var Ne=Le();const j=be(Ne);function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}var T;function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,o)}return r}function K(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?z(Object(r),!0).forEach(function(o){Me(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Me(t,e,r){return e=Ue(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Ue(t){var e=Be(t,"string");return v(e)==="symbol"?e:String(e)}function Be(t,e){if(v(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(v(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function y(t){return Ve(t)||Ke(t)||ze(t)||je()}function je(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ze(t,e){if(t){if(typeof t=="string")return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,e)}}function Ke(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ve(t){if(Array.isArray(t))return k(t)}function k(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}const{global:qe}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:Ot,SET_STORIES:wt,DOCS_RENDERED:St}=__STORYBOOK_MODULE_CORE_EVENTS__;var J=qe,We=J.document,O=J.window,X="sb-addon-themes-3";(T=O.matchMedia)===null||T===void 0||T.call(O,"(prefers-color-scheme: dark)");var x={classTarget:"body",dark:U.dark,darkClass:["dark"],light:U.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},V=function(e){O.localStorage.setItem(X,JSON.stringify(e))},Ye=function(e,r){var o=r.current,a=r.darkClass,n=a===void 0?x.darkClass:a,f=r.lightClass,I=f===void 0?x.lightClass:f;if(o==="dark"){var R,L;(R=e.classList).remove.apply(R,y(b(I))),(L=e.classList).add.apply(L,y(b(n)))}else{var N,M;(N=e.classList).remove.apply(N,y(b(n))),(M=e.classList).add.apply(M,y(b(I)))}},b=function(e){var r=[];return r.concat(e).map(function(o){return o})},Fe=function(e){var r=We.querySelector(e.classTarget);r&&Ye(r,e)},Ge=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=O.localStorage.getItem(X);if(typeof r=="string"){var o=JSON.parse(r);return e&&(e.dark&&!j(o.dark,e.dark)&&(o.dark=e.dark,V(o)),e.light&&!j(o.light,e.light)&&(o.light=e.light,V(o))),o}return K(K({},x),e)};Fe(Ge());const{addons:Tt,useState:Et,useEffect:Ct}=__STORYBOOK_MODULE_PREVIEW_API__,He=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var Je=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Q=t=>{throw TypeError(t)},p=(t,e,r,o)=>{for(var a=o>1?void 0:o?Xe(e,r):e,n=t.length-1,f;n>=0;n--)(f=t[n])&&(a=(o?f(e,r,a):f(a))||a);return o&&a&&Je(e,r,a),a},P=(t,e,r)=>e.has(t)||Q("Cannot "+r),i=(t,e,r)=>(P(t,e,"read from private field"),r?r.call(t):e.get(t)),c=(t,e,r)=>e.has(t)?Q("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Qe=(t,e,r,o)=>(P(t,e,"write to private field"),e.set(t,r),r),A=(t,e,r)=>(P(t,e,"access private method"),r),_,w,$,m,g,Z,ee,te,re,oe,ae;const Ze="forge-user-profile";let l=class extends se{constructor(){super(),c(this,g),this.fullName="",this.email="",this.imageUrl="",this.buttonLabel="Open user profile",this.themeToggle=!1,this.open=!1,c(this,_),c(this,w,s`<slot name="link" id="link-slot"></slot>`),c(this,$,s`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`),c(this,m,G()),Qe(this,_,this.attachInternals())}updated(t){super.updated(t),t.has("open")&&he(i(this,_),"open",this.open)}render(){return s`
      <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
        <forge-avatar .text=${this.fullName} .imageUrl=${this.imageUrl} id="button-avatar"></forge-avatar>
      </forge-icon-button>
      <forge-popover
        id="user-profile-popover"
        anchor="popover-trigger"
        placement="bottom-end"
        arrow
        position-strategy="fixed"
        .open=${this.open}
        @forge-popover-toggle=${A(this,g,re)}
        @slotchange=${A(this,g,ae)}>
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
        ${D(this._slottedLinkNodes.length,()=>s`<forge-divider></forge-divider>`)} 
        ${i(this,g,Z)}
        ${i(this,g,ee)} 
        ${i(this,g,te)}
      </forge-popover>
    `}setTheme(t){i(this,m).value&&i(this,m).value.setTheme(t)}};_=new WeakMap;w=new WeakMap;$=new WeakMap;m=new WeakMap;g=new WeakSet;Z=function(){const t=this._slottedLinkNodes.length>0;return D(t,()=>s` <forge-list>${i(this,w)}</forge-list> `,()=>i(this,w))};ee=function(){const t=this.themeToggle;return D(t,()=>s`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle ${H(i(this,m))}></forge-theme-toggle>
        </div>
      `,()=>Y)};te=function(){return s`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-out-button" id="sign-out-button" @click=${A(this,g,oe)}>
            ${i(this,$)}
            <forge-icon name="logout" external slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `};re=function(t){this.open=t.detail.newState==="open"};oe=function(){const t=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(t)};ae=function(t){const e=t.target.name;["profile-button-text","link","sign-out-button-text"].includes(e)&&this.requestUpdate()};Oe();Se();$e();Te();Ee();Ce();ke();F.define([ue]);l.styles=ie(He);p([d({attribute:"full-name"})],l.prototype,"fullName",2);p([d()],l.prototype,"email",2);p([d({attribute:"image-url"})],l.prototype,"imageUrl",2);p([d({attribute:"button-label"})],l.prototype,"buttonLabel",2);p([d({type:Boolean,attribute:"theme-toggle"})],l.prototype,"themeToggle",2);p([d({type:Boolean})],l.prototype,"open",2);p([_e({slot:"link",flatten:!0})],l.prototype,"_slottedLinkNodes",2);l=p([me(Ze)],l);const{addons:et}=__STORYBOOK_MODULE_PREVIEW_API__,{action:tt}=__STORYBOOK_MODULE_ACTIONS__,q=et.getChannel();we();const rt=tt("forge-user-profile-sign-out");F.define([ve,ye]);const ot="forge-user-profile";let W=!1,E=null;const at={title:"Components/User Profile",render:t=>{const e=G();function r(a){const n=a.detail.theme==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":a.detail.theme;E=a.detail.theme,q.emit(Re,n)}function o(a){if(E==="system"){E=null;return}e.value&&e.value.setTheme(a?"dark":"light")}return W||(q.on(Ie,o),W=!0),s`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        ${H(e)}
        @forge-user-profile-sign-out=${a=>rt(a)}
        @forge-theme-toggle-update=${r}
        slot="end"
        button-label="${t.buttonAriaLabel}"
        ?theme-toggle=${t.showThemeToggle}
        image-url="${t.imageUrl}"
        full-name="First Last"
        email="first.last@tylertech.com">
        ${t.showSlottedLinks?s`<forge-profile-link slot="link">
          <forge-icon slot="icon" name="settings"></forge-icon>
          <a href="http://www.google.com" target="_blank">Settings</a>
        </forge-profile-link>
        <forge-profile-link slot="link">
          <forge-icon slot="icon" name="account"></forge-icon>
          <a href="http://www.google.com" target="_blank">Profile</a>
        </forge-profile-link>
        `:Y}
        ${t.signOutButtonText.length?s`<span slot="sign-out-button-text">${t.signOutButtonText}</span>`:""}
      </forge-user-profile>
    </forge-app-bar>`},component:ot,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{signOutButtonText:{control:"text"},buttonAriaLabel:{control:"text"},imageUrl:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"}},args:{signOutButtonText:"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",imageUrl:"",showSlottedLinks:!0,showThemeToggle:!0}},h={};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};const nt=["Demo"],kt=Object.freeze(Object.defineProperty({__proto__:null,Demo:h,__namedExportsOrder:nt,default:at},Symbol.toStringTag,{value:"Module"}));export{h as D,kt as U};
