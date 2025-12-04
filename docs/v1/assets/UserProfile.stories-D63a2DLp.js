import{c as fe,r as ge,i as pe,x as a,E as F}from"./iframe-Or4Dz0mn.js";import{C as ue,B as ce,m as de,_ as he,l as me,h as ve,I as G,N as ye,O as be,n as c,P as _e,i as Oe,e as Se,f as Te}from"./with-default-aria-Dwzg2Kkq.js";import{M as U}from"./index-BFVZ7Xg9.js";import{g as we}from"./_commonjsHelpers-CqkleIqs.js";import{e as H,n as J}from"./ref-C5ebN-PV.js";import{d as xe,r as Ee}from"./index-D_DeIsd4.js";import{n as ke,a as O}from"./when-DfnyT8j1.js";import"./theme-toggle-D177IrkW.js";import"./profile-link-DMZsojkQ.js";import{d as Ce,a as Ae}from"./index-BYjnVzhQ.js";import{d as Ie}from"./index-DMOptTfS.js";import{d as $e}from"./index-CcPZYkYq.js";import{d as De}from"./index-DLZ6ft-X.js";import{d as Pe}from"./index-DlTKQSMO.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Ne=`${ue}divider`,Re={VERTICAL:"vertical"},d={elementName:Ne,attributes:Re};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Le='<template><div class="forge-divider" part="root"></div></template>',Me=":host{--_divider-margin:var(--forge-divider-margin, 0)}:host{display:block;margin:var(--_divider-margin)}:host([hidden]){display:none}.forge-divider{--_divider-color:var(--forge-divider-color, var(--forge-theme-outline, #e0e0e0));--_divider-width:var(--forge-divider-width, var(--forge-border-thin, 1px));--_divider-border-style:var(--forge-divider-border-style, solid)}.forge-divider{border:none;border-bottom-color:var(--_divider-color);border-bottom-width:var(--_divider-width);border-bottom-style:var(--_divider-border-style);height:0}:host([vertical]){display:inline-block;height:100%}:host([vertical]) .forge-divider{border:none;border-right-color:var(--_divider-color);border-right-width:var(--_divider-width);border-right-style:var(--_divider-border-style);height:100%;width:0}";let C=class extends ce{static get observedAttributes(){return[d.attributes.VERTICAL]}constructor(){super(),de(this,Le,Me)}attributeChangedCallback(e,r,o){switch(e){case d.attributes.VERTICAL:this.vertical=fe(o);break}}get vertical(){return this.hasAttribute(d.attributes.VERTICAL)}set vertical(e){this.toggleAttribute(d.attributes.VERTICAL,e)}};C=he([me({name:d.elementName})],C);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function Be(){ve(C)}var Ue="DARK_MODE",je="UPDATE_DARK_MODE",x,j;function ze(){return j||(j=1,x=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var o,n,i;if(Array.isArray(e)){if(o=e.length,o!=r.length)return!1;for(n=o;n--!==0;)if(!t(e[n],r[n]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(i=Object.keys(e),o=i.length,o!==Object.keys(r).length)return!1;for(n=o;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[n]))return!1;for(n=o;n--!==0;){var g=i[n];if(!t(e[g],r[g]))return!1}return!0}return e!==e&&r!==r}),x}var Ke=ze();const z=we(Ke);function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}var E;function K(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?K(Object(r),!0).forEach(function(o){Ve(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Ve(t,e,r){return e=qe(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function qe(t){var e=We(t,"string");return v(e)==="symbol"?e:String(e)}function We(t,e){if(v(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(v(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function y(t){return He(t)||Ge(t)||Fe(t)||Ye()}function Ye(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(t,e){if(t){if(typeof t=="string")return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(t,e)}}function Ge(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function He(t){if(Array.isArray(t))return A(t)}function A(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}const{global:Je}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:kt,SET_STORIES:Ct,DOCS_RENDERED:At}=__STORYBOOK_MODULE_CORE_EVENTS__;var X=Je,Xe=X.document,S=X.window,Q="sb-addon-themes-3";(E=S.matchMedia)===null||E===void 0||E.call(S,"(prefers-color-scheme: dark)");var I={classTarget:"body",dark:U.dark,darkClass:["dark"],light:U.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},q=function(e){S.localStorage.setItem(Q,JSON.stringify(e))},Qe=function(e,r){var o=r.current,n=r.darkClass,i=n===void 0?I.darkClass:n,g=r.lightClass,N=g===void 0?I.lightClass:g;if(o==="dark"){var R,L;(R=e.classList).remove.apply(R,y(b(N))),(L=e.classList).add.apply(L,y(b(i)))}else{var M,B;(M=e.classList).remove.apply(M,y(b(i))),(B=e.classList).add.apply(B,y(b(N)))}},b=function(e){var r=[];return r.concat(e).map(function(o){return o})},Ze=function(e){var r=Xe.querySelector(e.classTarget);r&&Qe(r,e)},et=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=S.localStorage.getItem(Q);if(typeof r=="string"){var o=JSON.parse(r);return e&&(e.dark&&!z(o.dark,e.dark)&&(o.dark=e.dark,q(o)),e.light&&!z(o.light,e.light)&&(o.light=e.light,q(o))),o}return V(V({},I),e)};Ze(et());const{addons:It,useState:$t,useEffect:Dt}=__STORYBOOK_MODULE_PREVIEW_API__,tt=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.sign-in-button{--forge-button-spacing: var(--forge-spacing-xsmall, 8px);--forge-button-pill-padding-inline: var(--forge-spacing-xsmall, 8px);--forge-button-outlined-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-border-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-background: color-mix(in srgb, var(--forge-theme-on-brand, #ffffff) 16%, transparent)}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Z=t=>{throw TypeError(t)},p=(t,e,r,o)=>{for(var n=o>1?void 0:o?ot(e,r):e,i=t.length-1,g;i>=0;i--)(g=t[i])&&(n=(o?g(e,r,n):g(n))||n);return o&&n&&rt(e,r,n),n},$=(t,e,r)=>e.has(t)||Z("Cannot "+r),s=(t,e,r)=>($(t,e,"read from private field"),r?r.call(t):e.get(t)),u=(t,e,r)=>e.has(t)?Z("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),nt=(t,e,r,o)=>($(t,e,"write to private field"),e.set(t,r),r),T=(t,e,r)=>($(t,e,"access private method"),r),_,w,D,P,m,f,ee,te,re,oe,ne,ae,ie,se;const at="forge-user-profile";let l=class extends pe{constructor(){super(),u(this,f),this.fullName="",this.email="",this.imageUrl="",this.buttonLabel="Open user profile",this.themeToggle=!1,this.open=!1,this._signedIn=!1,u(this,_),u(this,w,a`<slot name="link" id="link-slot"></slot>`),u(this,D,a`<slot name="sign-in-button-text" id="sign-in-button-slot">Sign in</slot>`),u(this,P,a`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`),u(this,m,H()),nt(this,_,this.attachInternals()),this._signedIn=this.fullName.trim().length>0}updated(t){super.updated(t),t.has("open")&&_e(s(this,_),"open",this.open),t.has("fullName")&&(this._signedIn=this.fullName.trim().length>0)}render(){return a`
      ${s(this,f,re)}
      ${O(this._signedIn,()=>a`
        <forge-popover
          id="user-profile-popover"
          anchor="popover-trigger"
          placement="bottom-end"
          arrow
          position-strategy="fixed"
          .open=${this.open}
          @forge-popover-toggle=${T(this,f,ne)}
          @slotchange=${T(this,f,se)}>
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
          ${O(this._slottedLinkNodes.length,()=>a`<forge-divider></forge-divider>`)}
          ${s(this,f,ee)}
          ${s(this,f,te)}
          ${s(this,f,oe)}
        </forge-popover>
      `)}
    `}setTheme(t){s(this,m).value&&s(this,m).value.setTheme(t)}};_=new WeakMap;w=new WeakMap;D=new WeakMap;P=new WeakMap;m=new WeakMap;f=new WeakSet;ee=function(){const t=this._slottedLinkNodes.length>0;return O(t,()=>a` <forge-list>${s(this,w)}</forge-list> `,()=>s(this,w))};te=function(){const t=this.themeToggle;return O(t,()=>a`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle ${J(s(this,m))}></forge-theme-toggle>
        </div>
      `,()=>F)};re=function(){return this._signedIn?a`
          <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
            <forge-avatar .text=${this.fullName} .imageUrl=${this.imageUrl} id="button-avatar"></forge-avatar>
          </forge-icon-button>
        `:a`
          <forge-button variant="outlined" class="sign-in-button" pill @click=${T(this,f,ae)}>
            <forge-icon name="account_outline" slot="start"></forge-icon>
            ${s(this,D)}
          </forge-button>
        `};oe=function(){return a`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-out-button" id="sign-out-button" @click=${T(this,f,ie)}>
            ${s(this,P)}
            <forge-icon name="logout" external slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `};ne=function(t){this.open=t.detail.newState==="open"};ae=function(){const t=new Event("forge-user-profile-sign-in",{bubbles:!0,composed:!0});this.dispatchEvent(t)};ie=function(){const t=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(t)};se=function(t){const e=t.target.name;["profile-button-text","link","sign-in-button-text","sign-out-button-text"].includes(e)&&this.requestUpdate()};Ce();Ie();Be();$e();De();xe();Pe();G.define([ye,be]);l.styles=ge(tt);p([c({attribute:"full-name"})],l.prototype,"fullName",2);p([c()],l.prototype,"email",2);p([c({attribute:"image-url"})],l.prototype,"imageUrl",2);p([c({attribute:"button-label"})],l.prototype,"buttonLabel",2);p([c({type:Boolean,attribute:"theme-toggle"})],l.prototype,"themeToggle",2);p([c({type:Boolean})],l.prototype,"open",2);p([Ee()],l.prototype,"_signedIn",2);p([ke({slot:"link",flatten:!0})],l.prototype,"_slottedLinkNodes",2);l=p([Oe(at)],l);const{addons:it}=__STORYBOOK_MODULE_PREVIEW_API__,{action:le}=__STORYBOOK_MODULE_ACTIONS__,W=it.getChannel();Ae();const st=le("forge-user-profile-sign-out"),lt=le("forge-user-profile-sign-in");G.define([Se,Te]);const ft="forge-user-profile";let Y=!1,k=null;const gt={title:"Components/User Profile",render:t=>{const e=H();function r(n){const i=n.detail.theme==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":n.detail.theme;k=n.detail.theme,W.emit(je,i)}function o(n){if(k==="system"){k=null;return}e.value&&e.value.setTheme(n?"dark":"light")}return Y||(W.on(Ue,o),Y=!0),a`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        ${J(e)}
        @forge-user-profile-sign-in=${n=>lt(n)}
        @forge-user-profile-sign-out=${n=>st(n)}
        @forge-theme-toggle-update=${r}
        slot="end"
        button-label="${t.buttonAriaLabel}"
        ?theme-toggle=${t.showThemeToggle}
        image-url="${t.imageUrl}"
        full-name="${t.fullName}"
        email="first.last@tylertech.com">
        ${t.showSlottedLinks?a`<forge-profile-link slot="link">
          <forge-icon slot="icon" name="settings"></forge-icon>
          <a href="http://www.google.com" target="_blank">Settings</a>
        </forge-profile-link>
        <forge-profile-link slot="link">
          <forge-icon slot="icon" name="account"></forge-icon>
          <a href="http://www.google.com" target="_blank">Profile</a>
        </forge-profile-link>
        `:F}
        ${t.signInButtonText.length?a`<span slot="sign-in-button-text">${t.signInButtonText}</span>`:""}
        ${t.signOutButtonText.length?a`<span slot="sign-out-button-text">${t.signOutButtonText}</span>`:""}
      </forge-user-profile>
    </forge-app-bar>`},component:ft,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{fullName:{control:"text"},signInButtonText:{control:"text"},signOutButtonText:{control:"text"},buttonAriaLabel:{control:"text"},imageUrl:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"}},args:{fullName:"First Last",signInButtonText:"Sign in",signOutButtonText:"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",imageUrl:"",showSlottedLinks:!0,showThemeToggle:!0}},h={};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};const pt=["Demo"],Pt=Object.freeze(Object.defineProperty({__proto__:null,Demo:h,__namedExportsOrder:pt,default:gt},Symbol.toStringTag,{value:"Module"}));export{h as D,Pt as U};
