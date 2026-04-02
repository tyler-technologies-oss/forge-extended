import{r as se,i as le,x as a,E as Y}from"./iframe-COytv9dl.js";import{I as F,Q as fe,R as ge,b as pe,u as ue}from"./icon-registry-CxyCioWM.js";import{M as R}from"./index-BFVZ7Xg9.js";import{g as ce}from"./_commonjsHelpers-CqkleIqs.js";import{e as V,n as G}from"./ref-BUaXLJ1D.js";import{n as c,b as me,t as he}from"./base-lit-element--sa9p8lJ.js";import{r as de}from"./state-BXFBHHkV.js";import{n as ye,a as _}from"./when-DfnyT8j1.js";import"./theme-toggle-BV2AEYIW.js";import"./profile-link-DIHmKsEd.js";import{d as ve}from"./index-DEpzmQyA.js";import{d as be}from"./index-BMC9qvNa.js";import{d as _e}from"./index-CtvB_qO1.js";import{d as Oe}from"./index-B2zzxblL.js";import{d as Se}from"./index-Bff1kzi-.js";import{d as xe}from"./index-B8N4y2fn.js";import{d as Te}from"./index-B12YQE0W.js";import{d as we}from"./index-EE09NF4X.js";var Ee="DARK_MODE",ke="UPDATE_DARK_MODE",T,U;function $e(){return U||(U=1,T=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var o,n,i;if(Array.isArray(t)){if(o=t.length,o!=r.length)return!1;for(n=o;n--!==0;)if(!e(t[n],r[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(i=Object.keys(t),o=i.length,o!==Object.keys(r).length)return!1;for(n=o;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[n]))return!1;for(n=o;n--!==0;){var g=i[n];if(!e(t[g],r[g]))return!1}return!0}return t!==t&&r!==r}),T}var Ce=$e();const B=ce(Ce);function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}var w;function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(o){Ae(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Ae(e,t,r){return t=Ie(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ie(e){var t=De(e,"string");return d(t)==="symbol"?t:String(t)}function De(e,t){if(d(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t);if(d(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function y(e){return Le(e)||Me(e)||Ne(e)||Pe()}function Pe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ne(e,t){if(e){if(typeof e=="string")return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}}function Me(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Le(e){if(Array.isArray(e))return k(e)}function k(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}const{global:Re}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:yt,SET_STORIES:vt,DOCS_RENDERED:bt}=__STORYBOOK_MODULE_CORE_EVENTS__;var H=Re,Ue=H.document,O=H.window,J="sb-addon-themes-3";(w=O.matchMedia)===null||w===void 0||w.call(O,"(prefers-color-scheme: dark)");var $={classTarget:"body",dark:R.dark,darkClass:["dark"],light:R.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},K=function(t){O.localStorage.setItem(J,JSON.stringify(t))},Be=function(t,r){var o=r.current,n=r.darkClass,i=n===void 0?$.darkClass:n,g=r.lightClass,D=g===void 0?$.lightClass:g;if(o==="dark"){var P,N;(P=t.classList).remove.apply(P,y(v(D))),(N=t.classList).add.apply(N,y(v(i)))}else{var M,L;(M=t.classList).remove.apply(M,y(v(i))),(L=t.classList).add.apply(L,y(v(D)))}},v=function(t){var r=[];return r.concat(t).map(function(o){return o})},je=function(t){var r=Ue.querySelector(t.classTarget);r&&Be(r,t)},ze=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=O.localStorage.getItem(J);if(typeof r=="string"){var o=JSON.parse(r);return t&&(t.dark&&!B(o.dark,t.dark)&&(o.dark=t.dark,K(o)),t.light&&!B(o.light,t.light)&&(o.light=t.light,K(o))),o}return z(z({},$),t)};je(ze());const{addons:_t,useState:Ot,useEffect:St}=__STORYBOOK_MODULE_PREVIEW_API__,Ke=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.sign-in-button{--forge-button-spacing: var(--forge-spacing-xsmall, 8px);--forge-button-pill-padding-inline: var(--forge-spacing-xsmall, 8px);--forge-button-outlined-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-border-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-background: color-mix(in srgb, var(--forge-theme-on-brand, #ffffff) 16%, transparent)}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var qe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Q=e=>{throw TypeError(e)},p=(e,t,r,o)=>{for(var n=o>1?void 0:o?We(t,r):t,i=e.length-1,g;i>=0;i--)(g=e[i])&&(n=(o?g(t,r,n):g(n))||n);return o&&n&&qe(t,r,n),n},C=(e,t,r)=>t.has(e)||Q("Cannot "+r),s=(e,t,r)=>(C(e,t,"read from private field"),r?r.call(e):t.get(e)),u=(e,t,r)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Ye=(e,t,r,o)=>(C(e,t,"write to private field"),t.set(e,r),r),S=(e,t,r)=>(C(e,t,"access private method"),r),b,x,A,I,h,f,X,Z,ee,te,re,oe,ne,ae;const Fe="forge-user-profile";let l=class extends le{constructor(){super(),u(this,f),this.fullName="",this.email="",this.imageUrl="",this.buttonLabel="Open user profile",this.themeToggle=!1,this.open=!1,this._signedIn=!1,u(this,b),u(this,x,a`<slot name="link" id="link-slot"></slot>`),u(this,A,a`<slot name="sign-in-button-text" id="sign-in-button-slot">Sign in</slot>`),u(this,I,a`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`),u(this,h,V()),Ye(this,b,this.attachInternals()),this._signedIn=this.fullName.trim().length>0}updated(e){super.updated(e),e.has("open")&&me(s(this,b),"open",this.open),e.has("fullName")&&(this._signedIn=this.fullName.trim().length>0)}render(){return a`
      ${s(this,f,ee)}
      ${_(this._signedIn,()=>a`
        <forge-popover
          id="user-profile-popover"
          anchor="popover-trigger"
          placement="bottom-end"
          arrow
          position-strategy="fixed"
          .open=${this.open}
          @forge-popover-toggle=${S(this,f,re)}
          @slotchange=${S(this,f,ae)}>
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
          ${_(this._slottedLinkNodes.length,()=>a`<forge-divider></forge-divider>`)}
          ${s(this,f,X)}
          ${s(this,f,Z)}
          ${s(this,f,te)}
        </forge-popover>
      `)}
    `}setTheme(e){s(this,h).value&&s(this,h).value.setTheme(e)}};b=new WeakMap;x=new WeakMap;A=new WeakMap;I=new WeakMap;h=new WeakMap;f=new WeakSet;X=function(){const e=this._slottedLinkNodes.length>0;return _(e,()=>a` <forge-list>${s(this,x)}</forge-list> `,()=>s(this,x))};Z=function(){const e=this.themeToggle;return _(e,()=>a`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle ${G(s(this,h))}></forge-theme-toggle>
        </div>
      `,()=>Y)};ee=function(){return this._signedIn?a`
          <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
            <forge-avatar .text=${this.fullName} .imageUrl=${this.imageUrl} id="button-avatar"></forge-avatar>
          </forge-icon-button>
        `:a`
          <forge-button variant="outlined" class="sign-in-button" pill @click=${S(this,f,oe)}>
            <forge-icon name="account_outline" slot="start"></forge-icon>
            ${s(this,A)}
          </forge-button>
        `};te=function(){return a`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-out-button" id="sign-out-button" @click=${S(this,f,ne)}>
            ${s(this,I)}
            <forge-icon name="logout" external slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `};re=function(e){this.open=e.detail.newState==="open"};oe=function(){const e=new Event("forge-user-profile-sign-in",{bubbles:!0,composed:!0});this.dispatchEvent(e)};ne=function(){const e=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(e)};ae=function(e){const t=e.target.name;["profile-button-text","link","sign-in-button-text","sign-out-button-text"].includes(t)&&this.requestUpdate()};ve();be();_e();Oe();Se();xe();Te();F.define([fe,ge]);l.styles=se(Ke);p([c({attribute:"full-name"})],l.prototype,"fullName",2);p([c()],l.prototype,"email",2);p([c({attribute:"image-url"})],l.prototype,"imageUrl",2);p([c({attribute:"button-label"})],l.prototype,"buttonLabel",2);p([c({type:Boolean,attribute:"theme-toggle"})],l.prototype,"themeToggle",2);p([c({type:Boolean})],l.prototype,"open",2);p([de()],l.prototype,"_signedIn",2);p([ye({slot:"link",flatten:!0})],l.prototype,"_slottedLinkNodes",2);l=p([he(Fe)],l);const{addons:Ve}=__STORYBOOK_MODULE_PREVIEW_API__,{action:ie}=__STORYBOOK_MODULE_ACTIONS__,q=Ve.getChannel();we();const Ge=ie("forge-user-profile-sign-out"),He=ie("forge-user-profile-sign-in");F.define([pe,ue]);const Je="forge-user-profile";let W=!1,E=null;const Qe={title:"Components/User Profile",render:e=>{const t=V();function r(n){const i=n.detail.theme==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":n.detail.theme;E=n.detail.theme,q.emit(ke,i)}function o(n){if(E==="system"){E=null;return}t.value&&t.value.setTheme(n?"dark":"light")}return W||(q.on(Ee,o),W=!0),a`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        ${G(t)}
        @forge-user-profile-sign-in=${n=>He(n)}
        @forge-user-profile-sign-out=${n=>Ge(n)}
        @forge-theme-toggle-update=${r}
        slot="end"
        button-label="${e.buttonAriaLabel}"
        ?theme-toggle=${e.showThemeToggle}
        image-url="${e.imageUrl}"
        full-name="${e.fullName}"
        email="first.last@tylertech.com">
        ${e.showSlottedLinks?a`<forge-profile-link slot="link">
          <forge-icon slot="icon" name="settings"></forge-icon>
          <a href="http://www.google.com" target="_blank">Settings</a>
        </forge-profile-link>
        <forge-profile-link slot="link">
          <forge-icon slot="icon" name="account"></forge-icon>
          <a href="http://www.google.com" target="_blank">Profile</a>
        </forge-profile-link>
        `:Y}
        ${e.signInButtonText.length?a`<span slot="sign-in-button-text">${e.signInButtonText}</span>`:""}
        ${e.signOutButtonText.length?a`<span slot="sign-out-button-text">${e.signOutButtonText}</span>`:""}
      </forge-user-profile>
    </forge-app-bar>`},component:Je,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{fullName:{control:"text"},signInButtonText:{control:"text"},signOutButtonText:{control:"text"},buttonAriaLabel:{control:"text"},imageUrl:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"}},args:{fullName:"First Last",signInButtonText:"Sign in",signOutButtonText:"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",imageUrl:"",showSlottedLinks:!0,showThemeToggle:!0}},m={};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};const Xe=["Demo"],xt=Object.freeze(Object.defineProperty({__proto__:null,Demo:m,__namedExportsOrder:Xe,default:Qe},Symbol.toStringTag,{value:"Module"}));export{m as D,xt as U};
