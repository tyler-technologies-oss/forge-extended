import{c as oe,r as ae,i as ne,x as i,E as V}from"./iframe-CtjffRzz.js";import{C as ie,B as se,m as le,_ as fe,l as ge,h as pe,I as q,J as ce,i as de,e as ue,f as he}from"./with-default-aria-Cx8Zmf_u.js";import{M as $}from"./index-CWk7euD-.js";import{g as me}from"./_commonjsHelpers-CqkleIqs.js";import{e as W,n as Y}from"./ref-BvlzQt0_.js";import{n as O}from"./base-button-adapter-DHRs7UWm.js";import{n as ve,a as x}from"./when-DfnyT8j1.js";import"./theme-toggle-Bvb61_f1.js";import"./profile-link-zIUYRxUN.js";import{d as ye,a as be}from"./index-ChNlk5nS.js";import{d as _e}from"./index-DThoLBad.js";import{d as Oe}from"./index-wc4jRJ3F.js";import{d as Te}from"./index-4GVSbko4.js";import{d as we}from"./index-BdcgIGYG.js";import{d as Se}from"./index-x1PtMRy0.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Ee=`${ie}divider`,Ce={VERTICAL:"vertical"},c={elementName:Ee,attributes:Ce};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const ke='<template><div class="forge-divider" part="root"></div></template>',xe=":host{--_divider-margin:var(--forge-divider-margin, 0)}:host{display:block;margin:var(--_divider-margin)}:host([hidden]){display:none}.forge-divider{--_divider-color:var(--forge-divider-color, var(--forge-theme-outline, #e0e0e0));--_divider-width:var(--forge-divider-width, var(--forge-border-thin, 1px));--_divider-border-style:var(--forge-divider-border-style, solid)}.forge-divider{border:none;border-bottom-color:var(--_divider-color);border-bottom-width:var(--_divider-width);border-bottom-style:var(--_divider-border-style);height:0}:host([vertical]){display:inline-block;height:100%}:host([vertical]) .forge-divider{border:none;border-right-color:var(--_divider-color);border-right-width:var(--_divider-width);border-right-style:var(--_divider-border-style);height:100%;width:0}";let E=class extends se{static get observedAttributes(){return[c.attributes.VERTICAL]}constructor(){super(),le(this,ke,xe)}attributeChangedCallback(e,r,o){switch(e){case c.attributes.VERTICAL:this.vertical=oe(o);break}}get vertical(){return this.hasAttribute(c.attributes.VERTICAL)}set vertical(e){this.toggleAttribute(c.attributes.VERTICAL,e)}};E=fe([ge({name:c.elementName})],E);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function Ae(){pe(E)}var De="DARK_MODE",Pe="UPDATE_DARK_MODE",T,N;function Re(){return N||(N=1,T=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var o,a,n;if(Array.isArray(e)){if(o=e.length,o!=r.length)return!1;for(a=o;a--!==0;)if(!t(e[a],r[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(n=Object.keys(e),o=n.length,o!==Object.keys(r).length)return!1;for(a=o;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[a]))return!1;for(a=o;a--!==0;){var s=n[a];if(!t(e[s],r[s]))return!1}return!0}return e!==e&&r!==r}),T}var Ie=Re();const M=me(Ie);function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}var w;function B(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,o)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?B(Object(r),!0).forEach(function(o){Le(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Le(t,e,r){return e=$e(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function $e(t){var e=Ne(t,"string");return h(e)==="symbol"?e:String(e)}function Ne(t,e){if(h(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(h(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function m(t){return ze(t)||je(t)||Be(t)||Me()}function Me(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(t,e){if(t){if(typeof t=="string")return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(t,e)}}function je(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ze(t){if(Array.isArray(t))return C(t)}function C(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}const{global:Ue}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:yt,SET_STORIES:bt,DOCS_RENDERED:_t}=__STORYBOOK_MODULE_CORE_EVENTS__;var F=Ue,Ke=F.document,b=F.window,G="sb-addon-themes-3";(w=b.matchMedia)===null||w===void 0||w.call(b,"(prefers-color-scheme: dark)");var k={classTarget:"body",dark:$.dark,darkClass:["dark"],light:$.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},z=function(e){b.localStorage.setItem(G,JSON.stringify(e))},Ve=function(e,r){var o=r.current,a=r.darkClass,n=a===void 0?k.darkClass:a,s=r.lightClass,D=s===void 0?k.lightClass:s;if(o==="dark"){var P,R;(P=e.classList).remove.apply(P,m(v(D))),(R=e.classList).add.apply(R,m(v(n)))}else{var I,L;(I=e.classList).remove.apply(I,m(v(n))),(L=e.classList).add.apply(L,m(v(D)))}},v=function(e){var r=[];return r.concat(e).map(function(o){return o})},qe=function(e){var r=Ke.querySelector(e.classTarget);r&&Ve(r,e)},We=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=b.localStorage.getItem(G);if(typeof r=="string"){var o=JSON.parse(r);return e&&(e.dark&&!M(o.dark,e.dark)&&(o.dark=e.dark,z(o)),e.light&&!M(o.light,e.light)&&(o.light=e.light,z(o))),o}return j(j({},k),e)};qe(We());const{addons:Ot,useState:Tt,useEffect:wt}=__STORYBOOK_MODULE_PREVIEW_API__,Ye=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var Fe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,H=t=>{throw TypeError(t)},p=(t,e,r,o)=>{for(var a=o>1?void 0:o?Ge(e,r):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(a=(o?s(e,r,a):s(a))||a);return o&&a&&Fe(e,r,a),a},J=(t,e,r)=>e.has(t)||H("Cannot "+r),l=(t,e,r)=>(J(t,e,"read from private field"),r?r.call(t):e.get(t)),y=(t,e,r)=>e.has(t)?H("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),X=(t,e,r)=>(J(t,e,"access private method"),r),_,A,u,g,Q,Z,ee,te,re;const He="forge-user-profile";let f=class extends ne{constructor(){super(...arguments),y(this,g),this.fullName="",this.email="",this.buttonLabel="Open user profile",this.themeToggle=!1,y(this,_,i`<slot name="link" id="link-slot"></slot>`),y(this,A,i`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`),y(this,u,W())}render(){return i`
      <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
        <forge-avatar .text=${this.fullName} id="button-avatar"></forge-avatar>
      </forge-icon-button>
      <forge-popover
        id="user-profile-popover"
        anchor="popover-trigger"
        placement="bottom-end"
        arrow
        position-strategy="fixed"
        @slotchange=${X(this,g,re)}>
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
        ${x(this._slottedLinkNodes.length,()=>i`<forge-divider></forge-divider>`)} 
        ${l(this,g,Q)}
        ${l(this,g,Z)} 
        ${l(this,g,ee)}
      </forge-popover>
    `}setTheme(t){l(this,u).value&&l(this,u).value.setTheme(t)}};_=new WeakMap;A=new WeakMap;u=new WeakMap;g=new WeakSet;Q=function(){const t=this._slottedLinkNodes.length>0;return x(t,()=>i` <forge-list>${l(this,_)}</forge-list> `,()=>l(this,_))};Z=function(){const t=this.themeToggle;return x(t,()=>i`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle ${Y(l(this,u))}></forge-theme-toggle>
        </div>
      `,()=>V)};ee=function(){return i`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-out-button" id="sign-out-button" @click=${X(this,g,te)}>
            ${l(this,A)}
            <forge-icon name="logout" external slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `};te=function(){const t=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(t)};re=function(t){const e=t.target.name;["profile-button-text","link","sign-out-button-text"].includes(e)&&this.requestUpdate()};ye();_e();Ae();Oe();Te();we();Se();q.define([ce]);f.styles=ae(Ye);p([O({attribute:"full-name"})],f.prototype,"fullName",2);p([O()],f.prototype,"email",2);p([O({attribute:"button-label"})],f.prototype,"buttonLabel",2);p([O({type:Boolean,attribute:"theme-toggle"})],f.prototype,"themeToggle",2);p([ve({slot:"link",flatten:!0})],f.prototype,"_slottedLinkNodes",2);f=p([de(He)],f);const{addons:Je}=__STORYBOOK_MODULE_PREVIEW_API__,{action:Xe}=__STORYBOOK_MODULE_ACTIONS__,U=Je.getChannel();be();const Qe=Xe("forge-user-profile-sign-out");q.define([ue,he]);const Ze="forge-user-profile";let K=!1,S=null;const et={title:"Components/User Profile",render:t=>{const e=W();function r(a){const n=a.detail.theme==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":a.detail.theme;S=a.detail.theme,U.emit(Pe,n)}function o(a){if(S==="system"){S=null;return}e.value&&e.value.setTheme(a?"dark":"light")}return K||(U.on(De,o),K=!0),i`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        ${Y(e)}
        @forge-user-profile-sign-out=${a=>Qe(a)}
        @forge-theme-toggle-update=${r}
        slot="end"
        button-label="${t.buttonAriaLabel}"
        ?theme-toggle=${t.showThemeToggle}
        full-name="First Last"
        email="first.last@tylertech.com">
        ${t.showSlottedLinks?i`<forge-profile-link slot="link">
          <forge-icon slot="icon" name="settings"></forge-icon>
          <a href="http://www.google.com" target="_blank">Settings</a>
        </forge-profile-link>
        <forge-profile-link slot="link">
          <forge-icon slot="icon" name="account"></forge-icon>
          <a href="http://www.google.com" target="_blank">Profile</a>
        </forge-profile-link>
        `:V}
        ${t.signOutButtonText.length?i`<span slot="sign-out-button-text">${t.signOutButtonText}</span>`:""}
      </forge-user-profile>
    </forge-app-bar>`},component:Ze,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{signOutButtonText:{control:"text"},buttonAriaLabel:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"}},args:{signOutButtonText:"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",showSlottedLinks:!0,showThemeToggle:!0}},d={};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};const tt=["Demo"],St=Object.freeze(Object.defineProperty({__proto__:null,Demo:d,__namedExportsOrder:tt,default:et},Symbol.toStringTag,{value:"Module"}));export{d as D,St as U};
