import{E as O,x as i,r as W,i as se}from"./iframe-DgB3omVC.js";import{I as Y,v as le,a as ge,l as fe}from"./icon-registry-DgpUaihG.js";import{M}from"./index-CWk7euD-.js";import{g as pe}from"./_commonjsHelpers-CqkleIqs.js";import{e as V,n as F}from"./ref-BqMuLWlQ.js";import{t as G}from"./custom-element-BhZVzxrc.js";import{n as p}from"./property-DMwPPnOv.js";import{n as ue}from"./query-assigned-nodes-cwDSNLIu.js";import{n as A}from"./when-3fO0zp9C.js";import{d as ce}from"./theme-toggle-D4YSTNRb.js";import"./profile-link-BBmFDTd8.js";import{_ as v,C as me,d as he}from"./with-default-aria-BiuBmGh4.js";import{r as de}from"./state-vNP1Z6LS.js";import{o as ve}from"./style-map-DhLns6mF.js";import{e as ye}from"./class-map-CpXUOzHt.js";import{B as be}from"./base-lit-element--NFbynm4.js";import{d as _e}from"./index-Cv1sM1_R.js";import{d as Oe}from"./index-Bfrn15X5.js";import{d as we}from"./index-B3e-imLE.js";import{d as Se}from"./index--eKfv8xD.js";import{d as Te}from"./index-BO8GDWhj.js";import{d as xe}from"./index-BpI5us4X.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */var H;const Ee=':host{display:inline-block}:host([hidden]){display:none}.forge-avatar{--_avatar-size:var(--forge-avatar-size, 40px);--_avatar-background:var(--forge-avatar-background, var(--forge-theme-tertiary, #3d5afe));--_avatar-color:var(--forge-avatar-color, var(--forge-theme-on-tertiary, #ffffff));--_avatar-transition-duration:var(--forge-avatar-transition-duration, var(--forge-animation-duration-short4, 200ms));--_avatar-transition-timing:var(--forge-avatar-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_avatar-shape:var(--forge-avatar-shape, calc(var(--forge-shape-round, 50%) * var(--forge-shape-factor, 1)))}.forge-avatar{display:flex;align-items:center;justify-content:center;overflow:hidden;transition:height var(--_avatar-transition-duration) var(--_avatar-transition-timing),width var(--_avatar-transition-duration) var(--_avatar-transition-timing);border-radius:var(--_avatar-shape);box-sizing:border-box;width:var(--_avatar-size);height:var(--_avatar-size);background-color:var(--_avatar-background);background-position:center;background-repeat:no-repeat;background-size:cover;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-subheading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-subheading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-subheading2-font-size-scale, 1)));font-weight:var(--forge-typography-subheading2-font-weight,400);line-height:var(--forge-typography-subheading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-subheading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-subheading2-letter-spacing, normal);text-transform:var(--forge-typography-subheading2-text-transform,inherit);text-decoration:var(--forge-typography-subheading2-text-decoration,inherit);color:var(--_avatar-color)}.forge-avatar--image{background-color:inherit}',ke=(t,e)=>t?.trim()?e===1?t[0].toUpperCase():(t.match(/\S+/g)??[]).slice(0,e).reduce((o,a)=>o+=a[0].toUpperCase(),""):"",J="forge-avatar";let g=class extends be{constructor(){super(...arguments),this.text="",this.letterCount=2,this.imageUrl=""}willUpdate(e){e.has("imageUrl")&&this._tryLoadImage()}render(){return i`
      <div
        aria-hidden="true"
        part="root"
        class=${ye({"forge-avatar":!0,"forge-avatar--image":!!this._image})}
        style=${this._image?ve({backgroundImage:`url(${this._image.src})`}):O}>
        <slot>${this._image?O:ke(this.text,this.letterCount)}</slot>
      </div>
    `}async _tryLoadImage(){if(this.imageUrl){const e=new Image;e.onload=()=>this._image=e,e.onerror=()=>this._image=void 0,e.src=this.imageUrl}else this._image=void 0}};H=me;g.styles=W(Ee);g[H]=J;v([p()],g.prototype,"text",void 0);v([p({type:Number,attribute:"letter-count"})],g.prototype,"letterCount",void 0);v([p({type:String,attribute:"image-url"})],g.prototype,"imageUrl",void 0);v([de()],g.prototype,"_image",void 0);g=v([G(J)],g);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function Ce(){he(g)}var Ae="DARK_MODE",Pe="UPDATE_DARK_MODE",T,R;function $e(){return R||(R=1,T=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var o,a,n;if(Array.isArray(e)){if(o=e.length,o!=r.length)return!1;for(a=o;a--!==0;)if(!t(e[a],r[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(n=Object.keys(e),o=n.length,o!==Object.keys(r).length)return!1;for(a=o;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[a]))return!1;for(a=o;a--!==0;){var s=n[a];if(!t(e[s],r[s]))return!1}return!0}return e!==e&&r!==r}),T}var De=$e();const I=pe(De);function d(t){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(t)}var x;function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,o)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?N(Object(r),!0).forEach(function(o){Ue(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Ue(t,e,r){return e=Le(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Le(t){var e=ze(t,"string");return d(e)==="symbol"?e:String(e)}function ze(t,e){if(d(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(d(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function y(t){return Ne(t)||Ie(t)||Re(t)||Me()}function Me(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(t,e){if(t){if(typeof t=="string")return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,e)}}function Ie(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ne(t){if(Array.isArray(t))return k(t)}function k(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}const{global:je}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:Tt,SET_STORIES:xt,DOCS_RENDERED:Et}=__STORYBOOK_MODULE_CORE_EVENTS__;var Q=je,Be=Q.document,w=Q.window,X="sb-addon-themes-3";(x=w.matchMedia)===null||x===void 0||x.call(w,"(prefers-color-scheme: dark)");var C={classTarget:"body",dark:M.dark,darkClass:["dark"],light:M.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},B=function(e){w.localStorage.setItem(X,JSON.stringify(e))},Ke=function(e,r){var o=r.current,a=r.darkClass,n=a===void 0?C.darkClass:a,s=r.lightClass,$=s===void 0?C.lightClass:s;if(o==="dark"){var D,U;(D=e.classList).remove.apply(D,y(b($))),(U=e.classList).add.apply(U,y(b(n)))}else{var L,z;(L=e.classList).remove.apply(L,y(b(n))),(z=e.classList).add.apply(z,y(b($)))}},b=function(e){var r=[];return r.concat(e).map(function(o){return o})},qe=function(e){var r=Be.querySelector(e.classTarget);r&&Ke(r,e)},We=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=w.localStorage.getItem(X);if(typeof r=="string"){var o=JSON.parse(r);return e&&(e.dark&&!I(o.dark,e.dark)&&(o.dark=e.dark,B(o)),e.light&&!I(o.light,e.light)&&(o.light=e.light,B(o))),o}return j(j({},C),e)};qe(We());const{addons:kt,useState:Ct,useEffect:At}=__STORYBOOK_MODULE_PREVIEW_API__,Ye=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var Ve=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Z=t=>{throw TypeError(t)},c=(t,e,r,o)=>{for(var a=o>1?void 0:o?Fe(e,r):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(a=(o?s(e,r,a):s(a))||a);return o&&a&&Ve(e,r,a),a},ee=(t,e,r)=>e.has(t)||Z("Cannot "+r),l=(t,e,r)=>(ee(t,e,"read from private field"),r?r.call(t):e.get(t)),_=(t,e,r)=>e.has(t)?Z("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),te=(t,e,r)=>(ee(t,e,"access private method"),r),S,P,h,u,re,oe,ae,ne,ie;const Ge="forge-user-profile";let f=class extends se{constructor(){super(...arguments),_(this,u),this.fullName="",this.email="",this.imageUrl="",this.buttonLabel="Open user profile",this.themeToggle=!1,_(this,S,i`<slot name="link" id="link-slot"></slot>`),_(this,P,i`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`),_(this,h,V())}render(){return i`
      <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
        <forge-avatar .text=${this.fullName} .imageUrl=${this.imageUrl} id="button-avatar"></forge-avatar>
      </forge-icon-button>
      <forge-popover
        id="user-profile-popover"
        anchor="popover-trigger"
        placement="bottom-end"
        arrow
        position-strategy="fixed"
        @slotchange=${te(this,u,ie)}>
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
        ${A(this._slottedLinkNodes.length,()=>i`<forge-divider></forge-divider>`)} 
        ${l(this,u,re)}
        ${l(this,u,oe)} 
        ${l(this,u,ae)}
      </forge-popover>
    `}setTheme(t){l(this,h).value&&l(this,h).value.setTheme(t)}};S=new WeakMap;P=new WeakMap;h=new WeakMap;u=new WeakSet;re=function(){const t=this._slottedLinkNodes.length>0;return A(t,()=>i` <forge-list>${l(this,S)}</forge-list> `,()=>l(this,S))};oe=function(){const t=this.themeToggle;return A(t,()=>i`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle ${F(l(this,h))}></forge-theme-toggle>
        </div>
      `,()=>O)};ae=function(){return i`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-out-button" id="sign-out-button" @click=${te(this,u,ne)}>
            ${l(this,P)}
            <forge-icon name="logout" external slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `};ne=function(){const t=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(t)};ie=function(t){const e=t.target.name;["profile-button-text","link","sign-out-button-text"].includes(e)&&this.requestUpdate()};Ce();_e();Oe();we();Se();ce();Te();Y.define([le]);f.styles=W(Ye);c([p({attribute:"full-name"})],f.prototype,"fullName",2);c([p()],f.prototype,"email",2);c([p({attribute:"image-url"})],f.prototype,"imageUrl",2);c([p({attribute:"button-label"})],f.prototype,"buttonLabel",2);c([p({type:Boolean,attribute:"theme-toggle"})],f.prototype,"themeToggle",2);c([ue({slot:"link",flatten:!0})],f.prototype,"_slottedLinkNodes",2);f=c([G(Ge)],f);const{addons:He}=__STORYBOOK_MODULE_PREVIEW_API__,{action:Je}=__STORYBOOK_MODULE_ACTIONS__,K=He.getChannel();xe();const Qe=Je("forge-user-profile-sign-out");Y.define([ge,fe]);const Xe="forge-user-profile";let q=!1,E=null;const Ze={title:"Components/User Profile",render:t=>{const e=V();function r(a){const n=a.detail.theme==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":a.detail.theme;E=a.detail.theme,K.emit(Pe,n)}function o(a){if(E==="system"){E=null;return}e.value&&e.value.setTheme(a?"dark":"light")}return q||(K.on(Ae,o),q=!0),i`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        ${F(e)}
        @forge-user-profile-sign-out=${a=>Qe(a)}
        @forge-theme-toggle-update=${r}
        slot="end"
        button-label="${t.buttonAriaLabel}"
        ?theme-toggle=${t.showThemeToggle}
        image-url="${t.imageUrl}"
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
        `:O}
        ${t.signOutButtonText.length?i`<span slot="sign-out-button-text">${t.signOutButtonText}</span>`:""}
      </forge-user-profile>
    </forge-app-bar>`},component:Xe,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{signOutButtonText:{control:"text"},buttonAriaLabel:{control:"text"},imageUrl:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"}},args:{signOutButtonText:"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",imageUrl:"",showSlottedLinks:!0,showThemeToggle:!0}},m={};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};const et=["Demo"],Pt=Object.freeze(Object.defineProperty({__proto__:null,Demo:m,__namedExportsOrder:et,default:Ze},Symbol.toStringTag,{value:"Module"}));export{m as D,Pt as U};
