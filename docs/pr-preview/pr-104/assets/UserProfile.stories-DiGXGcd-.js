import{r as se,i as le,x as a,E as Y}from"./iframe-BalPjLB1.js";import{I as F,L as fe,M as ge,n as c,o as pe,k as ue,l as ce}from"./with-default-aria-CgGVtW00.js";import{M as U}from"./index-BFVZ7Xg9.js";import{g as me}from"./_commonjsHelpers-CqkleIqs.js";import{e as V,n as G}from"./ref-B0FTt5K2.js";import{d as he,t as de}from"./constants-DrpErmGl.js";import{d as ye,r as ve}from"./index-DZDrNZ_0.js";import{n as be,a as _}from"./when-DfnyT8j1.js";import"./theme-toggle-prTgSyXQ.js";import"./profile-link-93kwPQko.js";import{D as _e}from"./divider-8j1SECf4.js";import{d as Oe,a as Se}from"./index-8eRgR1EE.js";import{d as xe}from"./index-BptDatkp.js";import{d as Te}from"./index-kk4BV0dI.js";import{d as we}from"./index-X2uJkQIO.js";import{d as Ee}from"./index-q-bLgefN.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function ke(){he(_e)}var Ce="DARK_MODE",$e="UPDATE_DARK_MODE",T,R;function Ae(){return R||(R=1,T=function e(t,o){if(t===o)return!0;if(t&&o&&typeof t=="object"&&typeof o=="object"){if(t.constructor!==o.constructor)return!1;var r,n,i;if(Array.isArray(t)){if(r=t.length,r!=o.length)return!1;for(n=r;n--!==0;)if(!e(t[n],o[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if(i=Object.keys(t),r=i.length,r!==Object.keys(o).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(o,i[n]))return!1;for(n=r;n--!==0;){var g=i[n];if(!e(t[g],o[g]))return!1}return!0}return t!==t&&o!==o}),T}var De=Ae();const B=me(De);function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}var w;function j(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,r)}return o}function z(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?j(Object(o),!0).forEach(function(r){Ie(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):j(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Ie(e,t,o){return t=Pe(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Pe(e){var t=Me(e,"string");return d(t)==="symbol"?t:String(t)}function Me(e,t){if(d(e)!=="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t);if(d(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function y(e){return Re(e)||Ue(e)||Le(e)||Ne()}function Ne(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e,t){if(e){if(typeof e=="string")return k(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return k(e,t)}}function Ue(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Re(e){if(Array.isArray(e))return k(e)}function k(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}const{global:Be}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:yt,SET_STORIES:vt,DOCS_RENDERED:bt}=__STORYBOOK_MODULE_CORE_EVENTS__;var H=Be,je=H.document,O=H.window,J="sb-addon-themes-3";(w=O.matchMedia)===null||w===void 0||w.call(O,"(prefers-color-scheme: dark)");var C={classTarget:"body",dark:U.dark,darkClass:["dark"],light:U.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},K=function(t){O.localStorage.setItem(J,JSON.stringify(t))},ze=function(t,o){var r=o.current,n=o.darkClass,i=n===void 0?C.darkClass:n,g=o.lightClass,I=g===void 0?C.lightClass:g;if(r==="dark"){var P,M;(P=t.classList).remove.apply(P,y(v(I))),(M=t.classList).add.apply(M,y(v(i)))}else{var N,L;(N=t.classList).remove.apply(N,y(v(i))),(L=t.classList).add.apply(L,y(v(I)))}},v=function(t){var o=[];return o.concat(t).map(function(r){return r})},Ke=function(t){var o=je.querySelector(t.classTarget);o&&ze(o,t)},qe=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=O.localStorage.getItem(J);if(typeof o=="string"){var r=JSON.parse(o);return t&&(t.dark&&!B(r.dark,t.dark)&&(r.dark=t.dark,K(r)),t.light&&!B(r.light,t.light)&&(r.light=t.light,K(r))),r}return z(z({},C),t)};Ke(qe());const{addons:_t,useState:Ot,useEffect:St}=__STORYBOOK_MODULE_PREVIEW_API__,We=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.sign-in-button{--forge-button-spacing: var(--forge-spacing-xsmall, 8px);--forge-button-pill-padding-inline: var(--forge-spacing-xsmall, 8px);--forge-button-outlined-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-border-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-background: color-mix(in srgb, var(--forge-theme-on-brand, #ffffff) 16%, transparent)}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var Ye=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Q=e=>{throw TypeError(e)},p=(e,t,o,r)=>{for(var n=r>1?void 0:r?Fe(t,o):t,i=e.length-1,g;i>=0;i--)(g=e[i])&&(n=(r?g(t,o,n):g(n))||n);return r&&n&&Ye(t,o,n),n},$=(e,t,o)=>t.has(e)||Q("Cannot "+o),s=(e,t,o)=>($(e,t,"read from private field"),o?o.call(e):t.get(e)),u=(e,t,o)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Ve=(e,t,o,r)=>($(e,t,"write to private field"),t.set(e,o),o),S=(e,t,o)=>($(e,t,"access private method"),o),b,x,A,D,h,f,X,Z,ee,te,oe,re,ne,ae;const Ge="forge-user-profile";let l=class extends le{constructor(){super(),u(this,f),this.fullName="",this.email="",this.imageUrl="",this.buttonLabel="Open user profile",this.themeToggle=!1,this.open=!1,this._signedIn=!1,u(this,b),u(this,x,a`<slot name="link" id="link-slot"></slot>`),u(this,A,a`<slot name="sign-in-button-text" id="sign-in-button-slot">Sign in</slot>`),u(this,D,a`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`),u(this,h,V()),Ve(this,b,this.attachInternals()),this._signedIn=this.fullName.trim().length>0}updated(e){super.updated(e),e.has("open")&&pe(s(this,b),"open",this.open),e.has("fullName")&&(this._signedIn=this.fullName.trim().length>0)}render(){return a`
      ${s(this,f,ee)}
      ${_(this._signedIn,()=>a`
        <forge-popover
          id="user-profile-popover"
          anchor="popover-trigger"
          placement="bottom-end"
          arrow
          position-strategy="fixed"
          .open=${this.open}
          @forge-popover-toggle=${S(this,f,oe)}
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
    `}setTheme(e){s(this,h).value&&s(this,h).value.setTheme(e)}};b=new WeakMap;x=new WeakMap;A=new WeakMap;D=new WeakMap;h=new WeakMap;f=new WeakSet;X=function(){const e=this._slottedLinkNodes.length>0;return _(e,()=>a` <forge-list>${s(this,x)}</forge-list> `,()=>s(this,x))};Z=function(){const e=this.themeToggle;return _(e,()=>a`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle ${G(s(this,h))}></forge-theme-toggle>
        </div>
      `,()=>Y)};ee=function(){return this._signedIn?a`
          <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
            <forge-avatar .text=${this.fullName} .imageUrl=${this.imageUrl} id="button-avatar"></forge-avatar>
          </forge-icon-button>
        `:a`
          <forge-button variant="outlined" class="sign-in-button" pill @click=${S(this,f,re)}>
            <forge-icon name="account_outline" slot="start"></forge-icon>
            ${s(this,A)}
          </forge-button>
        `};te=function(){return a`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-out-button" id="sign-out-button" @click=${S(this,f,ne)}>
            ${s(this,D)}
            <forge-icon name="logout" external slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `};oe=function(e){this.open=e.detail.newState==="open"};re=function(){const e=new Event("forge-user-profile-sign-in",{bubbles:!0,composed:!0});this.dispatchEvent(e)};ne=function(){const e=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(e)};ae=function(e){const t=e.target.name;["profile-button-text","link","sign-in-button-text","sign-out-button-text"].includes(t)&&this.requestUpdate()};Oe();xe();ke();Te();we();ye();Ee();F.define([fe,ge]);l.styles=se(We);p([c({attribute:"full-name"})],l.prototype,"fullName",2);p([c()],l.prototype,"email",2);p([c({attribute:"image-url"})],l.prototype,"imageUrl",2);p([c({attribute:"button-label"})],l.prototype,"buttonLabel",2);p([c({type:Boolean,attribute:"theme-toggle"})],l.prototype,"themeToggle",2);p([c({type:Boolean})],l.prototype,"open",2);p([ve()],l.prototype,"_signedIn",2);p([be({slot:"link",flatten:!0})],l.prototype,"_slottedLinkNodes",2);l=p([de(Ge)],l);const{addons:He}=__STORYBOOK_MODULE_PREVIEW_API__,{action:ie}=__STORYBOOK_MODULE_ACTIONS__,q=He.getChannel();Se();const Je=ie("forge-user-profile-sign-out"),Qe=ie("forge-user-profile-sign-in");F.define([ue,ce]);const Xe="forge-user-profile";let W=!1,E=null;const Ze={title:"Components/User Profile",render:e=>{const t=V();function o(n){const i=n.detail.theme==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":n.detail.theme;E=n.detail.theme,q.emit($e,i)}function r(n){if(E==="system"){E=null;return}t.value&&t.value.setTheme(n?"dark":"light")}return W||(q.on(Ce,r),W=!0),a`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        ${G(t)}
        @forge-user-profile-sign-in=${n=>Qe(n)}
        @forge-user-profile-sign-out=${n=>Je(n)}
        @forge-theme-toggle-update=${o}
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
    </forge-app-bar>`},component:Xe,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{fullName:{control:"text"},signInButtonText:{control:"text"},signOutButtonText:{control:"text"},buttonAriaLabel:{control:"text"},imageUrl:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"}},args:{fullName:"First Last",signInButtonText:"Sign in",signOutButtonText:"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",imageUrl:"",showSlottedLinks:!0,showThemeToggle:!0}},m={};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};const et=["Demo"],xt=Object.freeze(Object.defineProperty({__proto__:null,Demo:m,__namedExportsOrder:et,default:Ze},Symbol.toStringTag,{value:"Module"}));export{m as D,xt as U};
