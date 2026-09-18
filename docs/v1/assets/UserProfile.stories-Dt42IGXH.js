var q=t=>{throw TypeError(t)};var L=(t,e,o)=>e.has(t)||q("Cannot "+o);var l=(t,e,o)=>(L(t,e,"read from private field"),o?o.call(t):e.get(t)),f=(t,e,o)=>e.has(t)?q("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),p=(t,e,o,r)=>(L(t,e,"write to private field"),r?r.call(t,o):e.set(t,o),o),y=(t,e,o)=>(L(t,e,"access private method"),o);import{i as me,x as a,r as he,E as Q}from"./iframe-CSr27Gi9.js";import{I as X,Z as ce,_ as de,b as ye,J as be}from"./with-default-aria-DqAXseBi.js";import{M as Y}from"./index-BFVZ7Xg9.js";import{g as ve}from"./_commonjsHelpers-CqkleIqs.js";import{e as ee,n as te}from"./ref-CJF3Mb8J.js";import{t as _e,n as c}from"./utils-CaDkb-CY.js";import{r as Oe}from"./state-C-klXQBz.js";import{n as Se}from"./query-assigned-nodes-cwDSNLIu.js";import{n as E}from"./when-3fO0zp9C.js";import{t as xe}from"./component-utils-DDaW1mI9.js";import{a as Te}from"./theme-toggle-DzwOs-wO.js";import"./profile-link-uRYmWOwl.js";import{d as ke}from"./index-BlcsOMle.js";import{d as $e}from"./index-C0ZwjHuE.js";import{d as Ee}from"./index-DAC_y64Q.js";import{d as we}from"./index-DX-PHoPv.js";import{d as Ae}from"./index-XImc70I8.js";import{d as De}from"./index-t1ElOkOp.js";import{d as Le}from"./index-7VsvyswD.js";import{d as Ce}from"./index-DeS0RcN3.js";var Ie="DARK_MODE",Pe="UPDATE_DARK_MODE",C,F;function Ne(){return F||(F=1,C=function t(e,o){if(e===o)return!0;if(e&&o&&typeof e=="object"&&typeof o=="object"){if(e.constructor!==o.constructor)return!1;var r,n,g;if(Array.isArray(e)){if(r=e.length,r!=o.length)return!1;for(n=r;n--!==0;)if(!t(e[n],o[n]))return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if(g=Object.keys(e),r=g.length,r!==Object.keys(o).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(o,g[n]))return!1;for(n=r;n--!==0;){var m=g[n];if(!t(e[m],o[m]))return!1}return!0}return e!==e&&o!==o}),C}var Re=Ne();const V=ve(Re);function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}var I;function G(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,r)}return o}function H(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?G(Object(o),!0).forEach(function(r){je(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):G(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function je(t,e,o){return e=Ue(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function Ue(t){var e=Me(t,"string");return v(e)==="symbol"?e:String(e)}function Me(t,e){if(v(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,e);if(v(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function w(t){return qe(t)||Ke(t)||Be(t)||ze()}function ze(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(t,e){if(t){if(typeof t=="string")return N(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return N(t,e)}}function Ke(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qe(t){if(Array.isArray(t))return N(t)}function N(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}const{global:Ye}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:kt,SET_STORIES:$t,DOCS_RENDERED:Et}=__STORYBOOK_MODULE_CORE_EVENTS__;var oe=Ye,Fe=oe.document,D=oe.window,re="sb-addon-themes-3";(I=D.matchMedia)===null||I===void 0||I.call(D,"(prefers-color-scheme: dark)");var R={classTarget:"body",dark:Y.dark,darkClass:["dark"],light:Y.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},J=function(e){D.localStorage.setItem(re,JSON.stringify(e))},Ve=function(e,o){var r=o.current,n=o.darkClass,g=n===void 0?R.darkClass:n,m=o.lightClass,U=m===void 0?R.lightClass:m;if(r==="dark"){var M,z;(M=e.classList).remove.apply(M,w(A(U))),(z=e.classList).add.apply(z,w(A(g)))}else{var B,K;(B=e.classList).remove.apply(B,w(A(g))),(K=e.classList).add.apply(K,w(A(U)))}},A=function(e){var o=[];return o.concat(e).map(function(r){return r})},Ge=function(e){var o=Fe.querySelector(e.classTarget);o&&Ve(o,e)},He=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=D.localStorage.getItem(re);if(typeof o=="string"){var r=JSON.parse(o);return e&&(e.dark&&!V(r.dark,e.dark)&&(r.dark=e.dark,J(r)),e.light&&!V(r.light,e.light)&&(r.light=e.light,J(r))),r}return H(H({},R),e)};Ge(He());const{addons:wt,useState:At,useEffect:Dt}=__STORYBOOK_MODULE_PREVIEW_API__,Je=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.sign-in-button{--forge-button-spacing: var(--forge-spacing-xsmall, 8px);--forge-button-pill-padding-inline: var(--forge-spacing-xsmall, 8px);--forge-button-outlined-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-border-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-background: color-mix(in srgb, var(--forge-theme-on-brand, #ffffff) 16%, transparent)}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var We=Object.defineProperty,u=(t,e,o,r)=>{for(var n=void 0,g=t.length-1,m;g>=0;g--)(m=t[g])&&(n=m(e,o,n)||n);return n&&We(e,o,n),n};const Ze="forge-user-profile";var _,d,O,S,x,T,k,$,h,i,ne,ae,ie,le,se,ge,fe,pe;const j=class j extends me{constructor(){super();f(this,i);f(this,_);f(this,d);f(this,O);f(this,S);f(this,x);f(this,T);f(this,k);f(this,$);f(this,h);this.fullName="",this.email="",this.imageUrl="",this.buttonLabel="Open user profile",this.themeToggle=!1,this.themeToggleAriaLabel="Select a theme",this.open=!1,this._signedIn=!1,p(this,d,a`<slot name="link" id="link-slot"></slot>`),p(this,O,a`<slot name="sign-in-button-text" id="sign-in-button-slot">Sign in</slot>`),p(this,S,a`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`),p(this,x,a`<slot name="theme-toggle-title" slot="title">Theme</slot>`),p(this,T,a`<slot name="theme-toggle-light-label" slot="light-label">Light</slot>`),p(this,k,a`<slot name="theme-toggle-dark-label" slot="dark-label">Dark</slot>`),p(this,$,a`<slot name="theme-toggle-system-label" slot="system-label">System</slot>`),p(this,h,ee()),p(this,_,this.attachInternals()),this._signedIn=this.fullName.trim().length>0}updated(o){super.updated(o),o.has("open")&&_e(l(this,_),"open",this.open),o.has("fullName")&&(this._signedIn=this.fullName.trim().length>0)}render(){return a`
      ${l(this,i,ie)}
      ${E(this._signedIn,()=>a`
        <forge-popover
          id="user-profile-popover"
          anchor="popover-trigger"
          placement="bottom-end"
          arrow
          position-strategy="fixed"
          .open=${this.open}
          @forge-popover-toggle=${y(this,i,se)}
          @slotchange=${y(this,i,pe)}>
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
          ${E(this._slottedLinkNodes.length,()=>a`<forge-divider></forge-divider>`)}
          ${l(this,i,ne)}
          ${l(this,i,ae)}
          ${l(this,i,le)}
        </forge-popover>
      `)}
    `}setTheme(o){l(this,h).value?l(this,h).value.setTheme(o):Te(o)}};_=new WeakMap,d=new WeakMap,O=new WeakMap,S=new WeakMap,x=new WeakMap,T=new WeakMap,k=new WeakMap,$=new WeakMap,h=new WeakMap,i=new WeakSet,ne=function(){const o=this._slottedLinkNodes.length>0;return E(o,()=>a` <forge-list>${l(this,d)}</forge-list> `,()=>l(this,d))},ae=function(){const o=this.themeToggle;return E(o,()=>a`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle ${te(l(this,h))} .groupAriaLabel=${this.themeToggleAriaLabel}>
            ${l(this,x)} ${l(this,T)} ${l(this,k)}
            ${l(this,$)}
          </forge-theme-toggle>
        </div>
      `,()=>Q)},ie=function(){return this._signedIn?a`
          <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
            <forge-avatar .text=${this.fullName} .imageUrl=${this.imageUrl} id="button-avatar"></forge-avatar>
          </forge-icon-button>
        `:a`
          <forge-button variant="outlined" class="sign-in-button" pill @click=${y(this,i,ge)}>
            <forge-icon name="account_outline" slot="start"></forge-icon>
            ${l(this,O)}
          </forge-button>
        `},le=function(){return a`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-out-button" id="sign-out-button" @click=${y(this,i,fe)}>
            ${l(this,S)}
            <forge-icon name="logout" external slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `},se=function(o){this.open=o.detail.newState==="open"},ge=function(){const o=new Event("forge-user-profile-sign-in",{bubbles:!0,composed:!0});this.dispatchEvent(o)},fe=function(){const o=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(o)},pe=function(o){const r=o.target.name;["profile-button-text","link","sign-in-button-text","sign-out-button-text"].includes(r)&&this.requestUpdate()},ke(),$e(),Ee(),we(),Ae(),De(),Le(),X.define([ce,de]),j.styles=he(Je);let s=j;u([c({attribute:"full-name"})],s.prototype,"fullName");u([c()],s.prototype,"email");u([c({attribute:"image-url"})],s.prototype,"imageUrl");u([c({attribute:"button-label"})],s.prototype,"buttonLabel");u([c({type:Boolean,attribute:"theme-toggle"})],s.prototype,"themeToggle");u([c({attribute:"theme-toggle-aria-label"})],s.prototype,"themeToggleAriaLabel");u([c({type:Boolean})],s.prototype,"open");u([Oe()],s.prototype,"_signedIn");u([Se({slot:"link",flatten:!0})],s.prototype,"_slottedLinkNodes");xe(Ze,s);const{addons:Qe}=__STORYBOOK_MODULE_PREVIEW_API__,{action:ue}=__STORYBOOK_MODULE_ACTIONS__,W=Qe.getChannel();Ce();const Xe=ue("forge-user-profile-sign-out"),et=ue("forge-user-profile-sign-in");X.define([ye,be]);const tt="forge-user-profile";let Z=!1,P=null;const ot={title:"Components/User Profile",render:t=>{const e=ee();function o(n){P=n.detail.theme,W.emit(Pe,n.detail.resolvedTheme)}function r(n){if(P==="system"){P=null;return}e.value&&e.value.setTheme(n?"dark":"light")}return Z||(W.on(Ie,r),Z=!0),a`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        ${te(e)}
        @forge-user-profile-sign-in=${n=>et(n)}
        @forge-user-profile-sign-out=${n=>Xe(n)}
        @forge-theme-toggle-update=${o}
        slot="end"
        button-label="${t.buttonAriaLabel}"
        ?theme-toggle=${t.showThemeToggle}
        image-url="${t.imageUrl}"
        full-name="${t.fullName}"
        email="first.last@tylertech.com"
        theme-toggle-aria-label="${t.themeToggleAriaLabel}">
        ${t.showSlottedLinks?a`<forge-profile-link slot="link">
          <forge-icon slot="icon" name="settings"></forge-icon>
          <a href="http://www.google.com" target="_blank">Settings</a>
        </forge-profile-link>
        <forge-profile-link slot="link">
          <forge-icon slot="icon" name="account"></forge-icon>
          <a href="http://www.google.com" target="_blank">Profile</a>
        </forge-profile-link>
        `:Q}
        ${t["sign-in-button-text"].length?a`<span slot="sign-in-button-text">${t["sign-in-button-text"]}</span>`:""}
        ${t["sign-out-button-text"].length?a`<span slot="sign-out-button-text">${t["sign-out-button-text"]}</span>`:""}
        ${t["theme-toggle-title"].length?a`<span slot="theme-toggle-title">${t["theme-toggle-title"]}</span>`:""}
        ${t["theme-toggle-light-label"].length?a`<span slot="theme-toggle-light-label">${t["theme-toggle-light-label"]}</span>`:""}
        ${t["theme-toggle-dark-label"].length?a`<span slot="theme-toggle-dark-label">${t["theme-toggle-dark-label"]}</span>`:""}
        ${t["theme-toggle-system-label"].length?a`<span slot="theme-toggle-system-label">${t["theme-toggle-system-label"]}</span>`:""}
      </forge-user-profile>
    </forge-app-bar>`},component:tt,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{fullName:{control:"text"},"sign-in-button-text":{control:"text"},"sign-out-button-text":{control:"text"},buttonAriaLabel:{control:"text"},imageUrl:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"},themeToggleAriaLabel:{control:"text"},"theme-toggle-title":{control:"text"},"theme-toggle-light-label":{control:"text"},"theme-toggle-dark-label":{control:"text"},"theme-toggle-system-label":{control:"text"}},args:{fullName:"First Last","sign-in-button-text":"Sign in","sign-out-button-text":"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",imageUrl:"",showSlottedLinks:!0,showThemeToggle:!0,themeToggleAriaLabel:"Select a theme","theme-toggle-title":"Theme","theme-toggle-light-label":"Light","theme-toggle-dark-label":"Dark","theme-toggle-system-label":"System"}},b={};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{}",...b.parameters?.docs?.source}}};const rt=["Demo"],Lt=Object.freeze(Object.defineProperty({__proto__:null,Demo:b,__namedExportsOrder:rt,default:ot},Symbol.toStringTag,{value:"Module"}));export{b as D,Lt as U};
