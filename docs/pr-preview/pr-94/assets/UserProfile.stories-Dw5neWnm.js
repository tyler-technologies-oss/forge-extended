import{c as ge,r as fe,i as pe,x as i,E as F}from"./iframe-DlbhcOh0.js";import{C as ue,B as ce,m as de,_ as he,l as me,h as ve,I as G,J as ye,K as be,L as _e,i as Oe,e as we,f as Se}from"./with-default-aria-BKiLbwsF.js";import{M as U}from"./index-CWk7euD-.js";import{g as Te}from"./_commonjsHelpers-CqkleIqs.js";import{e as H,n as J}from"./ref-BjkZTZLQ.js";import{n as c}from"./base-button-adapter-DFY95ESq.js";import{d as Ee,r as xe}from"./index-DnFu85j6.js";import{n as ke,a as O}from"./when-DfnyT8j1.js";import"./theme-toggle-BKw5e0PN.js";import"./profile-link-BFrWjMoh.js";import{d as Ce,a as Ae}from"./index-DX44JStu.js";import{d as Ie}from"./index-C6_pQGy3.js";import{d as $e}from"./index-CK0il1_d.js";import{d as De}from"./index-DrG6Dazb.js";import{d as Pe}from"./index-qygbc_DY.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Ne=`${ue}divider`,Le={VERTICAL:"vertical"},d={elementName:Ne,attributes:Le};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Re='<template><div class="forge-divider" part="root"></div></template>',Me=":host{--_divider-margin:var(--forge-divider-margin, 0)}:host{display:block;margin:var(--_divider-margin)}:host([hidden]){display:none}.forge-divider{--_divider-color:var(--forge-divider-color, var(--forge-theme-outline, #e0e0e0));--_divider-width:var(--forge-divider-width, var(--forge-border-thin, 1px));--_divider-border-style:var(--forge-divider-border-style, solid)}.forge-divider{border:none;border-bottom-color:var(--_divider-color);border-bottom-width:var(--_divider-width);border-bottom-style:var(--_divider-border-style);height:0}:host([vertical]){display:inline-block;height:100%}:host([vertical]) .forge-divider{border:none;border-right-color:var(--_divider-color);border-right-width:var(--_divider-width);border-right-style:var(--_divider-border-style);height:100%;width:0}";let C=class extends ce{static get observedAttributes(){return[d.attributes.VERTICAL]}constructor(){super(),de(this,Re,Me)}attributeChangedCallback(e,r,o){switch(e){case d.attributes.VERTICAL:this.vertical=ge(o);break}}get vertical(){return this.hasAttribute(d.attributes.VERTICAL)}set vertical(e){this.toggleAttribute(d.attributes.VERTICAL,e)}};C=he([me({name:d.elementName})],C);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function Be(){ve(C)}var Ue="DARK_MODE",je="UPDATE_DARK_MODE",E,j;function ze(){return j||(j=1,E=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var o,n,a;if(Array.isArray(e)){if(o=e.length,o!=r.length)return!1;for(n=o;n--!==0;)if(!t(e[n],r[n]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(a=Object.keys(e),o=a.length,o!==Object.keys(r).length)return!1;for(n=o;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[n]))return!1;for(n=o;n--!==0;){var f=a[n];if(!t(e[f],r[f]))return!1}return!0}return e!==e&&r!==r}),E}var Ke=ze();const z=Te(Ke);function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}var x;function K(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?K(Object(r),!0).forEach(function(o){Ve(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Ve(t,e,r){return e=qe(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function qe(t){var e=We(t,"string");return v(e)==="symbol"?e:String(e)}function We(t,e){if(v(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(v(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function y(t){return He(t)||Ge(t)||Fe(t)||Ye()}function Ye(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(t,e){if(t){if(typeof t=="string")return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(t,e)}}function Ge(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function He(t){if(Array.isArray(t))return A(t)}function A(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}const{global:Je}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:Ct,SET_STORIES:At,DOCS_RENDERED:It}=__STORYBOOK_MODULE_CORE_EVENTS__;var X=Je,Xe=X.document,w=X.window,Q="sb-addon-themes-3";(x=w.matchMedia)===null||x===void 0||x.call(w,"(prefers-color-scheme: dark)");var I={classTarget:"body",dark:U.dark,darkClass:["dark"],light:U.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},q=function(e){w.localStorage.setItem(Q,JSON.stringify(e))},Qe=function(e,r){var o=r.current,n=r.darkClass,a=n===void 0?I.darkClass:n,f=r.lightClass,N=f===void 0?I.lightClass:f;if(o==="dark"){var L,R;(L=e.classList).remove.apply(L,y(b(N))),(R=e.classList).add.apply(R,y(b(a)))}else{var M,B;(M=e.classList).remove.apply(M,y(b(a))),(B=e.classList).add.apply(B,y(b(N)))}},b=function(e){var r=[];return r.concat(e).map(function(o){return o})},Ze=function(e){var r=Xe.querySelector(e.classTarget);r&&Qe(r,e)},et=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=w.localStorage.getItem(Q);if(typeof r=="string"){var o=JSON.parse(r);return e&&(e.dark&&!z(o.dark,e.dark)&&(o.dark=e.dark,q(o)),e.light&&!z(o.light,e.light)&&(o.light=e.light,q(o))),o}return V(V({},I),e)};Ze(et());const{addons:$t,useState:Dt,useEffect:Pt}=__STORYBOOK_MODULE_PREVIEW_API__,tt=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.sign-in-button{--forge-button-spacing: var(--forge-spacing-xsmall, 8px);--forge-button-pill-padding-inline: 8px;--forge-button-outlined-color: white;--forge-button-outlined-border-color: white;--forge-button-outlined-background: color-mix(in srgb, var(--forge-theme-surface) 16%, transparent)}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Z=t=>{throw TypeError(t)},p=(t,e,r,o)=>{for(var n=o>1?void 0:o?ot(e,r):e,a=t.length-1,f;a>=0;a--)(f=t[a])&&(n=(o?f(e,r,n):f(n))||n);return o&&n&&rt(e,r,n),n},$=(t,e,r)=>e.has(t)||Z("Cannot "+r),s=(t,e,r)=>($(t,e,"read from private field"),r?r.call(t):e.get(t)),u=(t,e,r)=>e.has(t)?Z("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),nt=(t,e,r,o)=>($(t,e,"write to private field"),e.set(t,r),r),S=(t,e,r)=>($(t,e,"access private method"),r),_,T,D,P,m,g,ee,te,re,oe,ne,ie,ae,se;const it="forge-user-profile";let l=class extends pe{constructor(){super(),u(this,g),this.fullName="",this.email="",this.imageUrl="",this.buttonLabel="Open user profile",this.themeToggle=!1,this.open=!1,this._signedIn=!1,u(this,_),u(this,T,i`<slot name="link" id="link-slot"></slot>`),u(this,D,i`<slot name="sign-in-button-text" id="sign-in-button-slot">Sign in</slot>`),u(this,P,i`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`),u(this,m,H()),nt(this,_,this.attachInternals()),this._signedIn=this.fullName.trim().length>0}updated(t){super.updated(t),t.has("open")&&_e(s(this,_),"open",this.open),t.has("fullName")&&(this._signedIn=this.fullName.trim().length>0)}render(){return i`
      ${s(this,g,re)}
      ${O(this._signedIn,()=>i`
        <forge-popover
          id="user-profile-popover"
          anchor="popover-trigger"
          placement="bottom-end"
          arrow
          position-strategy="fixed"
          .open=${this.open}
          @forge-popover-toggle=${S(this,g,ne)}
          @slotchange=${S(this,g,se)}>
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
          ${O(this._slottedLinkNodes.length,()=>i`<forge-divider></forge-divider>`)}
          ${s(this,g,ee)}
          ${s(this,g,te)}
          ${s(this,g,oe)}
        </forge-popover>
      `)}
    `}setTheme(t){s(this,m).value&&s(this,m).value.setTheme(t)}};_=new WeakMap;T=new WeakMap;D=new WeakMap;P=new WeakMap;m=new WeakMap;g=new WeakSet;ee=function(){const t=this._slottedLinkNodes.length>0;return O(t,()=>i` <forge-list>${s(this,T)}</forge-list> `,()=>s(this,T))};te=function(){const t=this.themeToggle;return O(t,()=>i`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle ${J(s(this,m))}></forge-theme-toggle>
        </div>
      `,()=>F)};re=function(){return this._signedIn?i`
          <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
            <forge-avatar .text=${this.fullName} .imageUrl=${this.imageUrl} id="button-avatar"></forge-avatar>
          </forge-icon-button>
        `:i`
          <forge-button variant="outlined" class="sign-in-button" pill @click=${S(this,g,ie)}>
            <forge-icon name="account_outline" slot="start"></forge-icon>
            ${s(this,D)}
          </forge-button>
        `};oe=function(){return i`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-out-button" id="sign-out-button" @click=${S(this,g,ae)}>
            ${s(this,P)}
            <forge-icon name="logout" external slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `};ne=function(t){this.open=t.detail.newState==="open"};ie=function(){const t=new Event("forge-user-profile-sign-in",{bubbles:!0,composed:!0});this.dispatchEvent(t)};ae=function(){const t=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(t)};se=function(t){const e=t.target.name;["profile-button-text","link","sign-in-button-text","sign-out-button-text"].includes(e)&&this.requestUpdate()};Ce();Ie();Be();$e();De();Ee();Pe();G.define([ye,be]);l.styles=fe(tt);p([c({attribute:"full-name"})],l.prototype,"fullName",2);p([c()],l.prototype,"email",2);p([c({attribute:"image-url"})],l.prototype,"imageUrl",2);p([c({attribute:"button-label"})],l.prototype,"buttonLabel",2);p([c({type:Boolean,attribute:"theme-toggle"})],l.prototype,"themeToggle",2);p([c({type:Boolean})],l.prototype,"open",2);p([xe()],l.prototype,"_signedIn",2);p([ke({slot:"link",flatten:!0})],l.prototype,"_slottedLinkNodes",2);l=p([Oe(it)],l);const{addons:at}=__STORYBOOK_MODULE_PREVIEW_API__,{action:le}=__STORYBOOK_MODULE_ACTIONS__,W=at.getChannel();Ae();const st=le("forge-user-profile-sign-out"),lt=le("forge-user-profile-sign-in");G.define([we,Se]);const gt="forge-user-profile";let Y=!1,k=null;const ft={title:"Components/User Profile",render:t=>{const e=H();function r(n){const a=n.detail.theme==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":n.detail.theme;k=n.detail.theme,W.emit(je,a)}function o(n){if(k==="system"){k=null;return}e.value&&e.value.setTheme(n?"dark":"light")}return Y||(W.on(Ue,o),Y=!0),i`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
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
        ${t.showSlottedLinks?i`<forge-profile-link slot="link">
          <forge-icon slot="icon" name="settings"></forge-icon>
          <a href="http://www.google.com" target="_blank">Settings</a>
        </forge-profile-link>
        <forge-profile-link slot="link">
          <forge-icon slot="icon" name="account"></forge-icon>
          <a href="http://www.google.com" target="_blank">Profile</a>
        </forge-profile-link>
        `:F}
        ${t.signInButtonText.length?i`<span slot="sign-in-button-text">${t.signInButtonText}</span>`:""}
        ${t.signOutButtonText.length?i`<span slot="sign-out-button-text">${t.signOutButtonText}</span>`:""}
      </forge-user-profile>
    </forge-app-bar>`},component:gt,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{fullName:{control:"text"},signInButtonText:{control:"text"},signOutButtonText:{control:"text"},buttonAriaLabel:{control:"text"},imageUrl:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"}},args:{fullName:"First Last",signInButtonText:"Sign in",signOutButtonText:"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",imageUrl:"",showSlottedLinks:!0,showThemeToggle:!0}},h={};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};const pt=["Demo"],Nt=Object.freeze(Object.defineProperty({__proto__:null,Demo:h,__namedExportsOrder:pt,default:ft},Symbol.toStringTag,{value:"Module"}));export{h as D,Nt as U};
