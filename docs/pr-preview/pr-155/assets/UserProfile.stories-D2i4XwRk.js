import{r as pe,i as ue,x as a,E as H}from"./iframe-CEaEySpr.js";import{I as J,Y as he,Z as me,b as ce,J as de}from"./with-default-aria-C4n4_au4.js";import{M as B}from"./index-BFVZ7Xg9.js";import{g as ye}from"./_commonjsHelpers-CqkleIqs.js";import{e as Z,n as Q}from"./ref-bMVTwbCk.js";import{t as ve}from"./custom-element-B0HNckU6.js";import{n as h,t as be}from"./utils-DtyNcxMd.js";import{r as _e}from"./state-CgEwcDA1.js";import{n as Oe}from"./query-assigned-nodes-cwDSNLIu.js";import{n as _}from"./when-3fO0zp9C.js";import"./theme-toggle-sabeByIL.js";import"./profile-link-CsoRYDNB.js";import{d as Se}from"./index-DVMV2Myl.js";import{d as xe}from"./index-DzZirHD5.js";import{d as Te}from"./index-B_rMsSzo.js";import{d as ke}from"./index-BTu78JOc.js";import{d as we}from"./index-DnaM4FFE.js";import{d as $e}from"./index-CgsVRZDe.js";import{d as Ee}from"./index-Dt8cSLpD.js";import{d as Ae}from"./index-CIhYfSWK.js";var Ce="DARK_MODE",De="UPDATE_DARK_MODE",T,W;function Le(){return W||(W=1,T=function e(t,o){if(t===o)return!0;if(t&&o&&typeof t=="object"&&typeof o=="object"){if(t.constructor!==o.constructor)return!1;var r,n,l;if(Array.isArray(t)){if(r=t.length,r!=o.length)return!1;for(n=r;n--!==0;)if(!e(t[n],o[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if(l=Object.keys(t),r=l.length,r!==Object.keys(o).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(o,l[n]))return!1;for(n=r;n--!==0;){var u=l[n];if(!e(t[u],o[u]))return!1}return!0}return t!==t&&o!==o}),T}var Pe=Le();const K=ye(Pe);function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}var k;function q(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,r)}return o}function Y(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?q(Object(o),!0).forEach(function(r){Ie(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):q(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Ie(e,t,o){return t=Me(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Me(e){var t=Ne(e,"string");return d(t)==="symbol"?t:String(t)}function Ne(e,t){if(d(e)!=="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t);if(d(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function y(e){return ze(e)||je(e)||Re(e)||Ue()}function Ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(e,t){if(e){if(typeof e=="string")return $(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return $(e,t)}}function je(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ze(e){if(Array.isArray(e))return $(e)}function $(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}const{global:Be}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:xt,SET_STORIES:Tt,DOCS_RENDERED:kt}=__STORYBOOK_MODULE_CORE_EVENTS__;var X=Be,We=X.document,O=X.window,ee="sb-addon-themes-3";(k=O.matchMedia)===null||k===void 0||k.call(O,"(prefers-color-scheme: dark)");var E={classTarget:"body",dark:B.dark,darkClass:["dark"],light:B.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},F=function(t){O.localStorage.setItem(ee,JSON.stringify(t))},Ke=function(t,o){var r=o.current,n=o.darkClass,l=n===void 0?E.darkClass:n,u=o.lightClass,N=u===void 0?E.lightClass:u;if(r==="dark"){var U,R;(U=t.classList).remove.apply(U,y(v(N))),(R=t.classList).add.apply(R,y(v(l)))}else{var j,z;(j=t.classList).remove.apply(j,y(v(l))),(z=t.classList).add.apply(z,y(v(N)))}},v=function(t){var o=[];return o.concat(t).map(function(r){return r})},qe=function(t){var o=We.querySelector(t.classTarget);o&&Ke(o,t)},Ye=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=O.localStorage.getItem(ee);if(typeof o=="string"){var r=JSON.parse(o);return t&&(t.dark&&!K(r.dark,t.dark)&&(r.dark=t.dark,F(r)),t.light&&!K(r.light,t.light)&&(r.light=t.light,F(r))),r}return Y(Y({},E),t)};qe(Ye());const{addons:wt,useState:$t,useEffect:Et}=__STORYBOOK_MODULE_PREVIEW_API__,Fe=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.sign-in-button{--forge-button-spacing: var(--forge-spacing-xsmall, 8px);--forge-button-pill-padding-inline: var(--forge-spacing-xsmall, 8px);--forge-button-outlined-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-border-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-background: color-mix(in srgb, var(--forge-theme-on-brand, #ffffff) 16%, transparent)}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var Ve=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,te=e=>{throw TypeError(e)},p=(e,t,o,r)=>{for(var n=r>1?void 0:r?Ge(t,o):t,l=e.length-1,u;l>=0;l--)(u=e[l])&&(n=(r?u(t,o,n):u(n))||n);return r&&n&&Ve(t,o,n),n},A=(e,t,o)=>t.has(e)||te("Cannot "+o),i=(e,t,o)=>(A(e,t,"read from private field"),o?o.call(e):t.get(e)),g=(e,t,o)=>t.has(e)?te("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),He=(e,t,o,r)=>(A(e,t,"write to private field"),t.set(e,o),o),S=(e,t,o)=>(A(e,t,"access private method"),o),b,x,C,D,L,P,I,M,c,f,oe,re,ne,ae,ie,le,se,ge;const Je="forge-user-profile";let s=class extends ue{constructor(){super(),g(this,f),this.fullName="",this.email="",this.imageUrl="",this.buttonLabel="Open user profile",this.themeToggle=!1,this.themeToggleAriaLabel="Select a theme",this.open=!1,this._signedIn=!1,g(this,b),g(this,x,a`<slot name="link" id="link-slot"></slot>`),g(this,C,a`<slot name="sign-in-button-text" id="sign-in-button-slot">Sign in</slot>`),g(this,D,a`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`),g(this,L,a`<slot name="theme-toggle-title" slot="title"></slot>`),g(this,P,a`<slot name="theme-toggle-light-label" slot="light-label"></slot>`),g(this,I,a`<slot name="theme-toggle-dark-label" slot="dark-label"></slot>`),g(this,M,a`<slot name="theme-toggle-system-label" slot="system-label"></slot>`),g(this,c,Z()),He(this,b,this.attachInternals()),this._signedIn=this.fullName.trim().length>0}updated(e){super.updated(e),e.has("open")&&be(i(this,b),"open",this.open),e.has("fullName")&&(this._signedIn=this.fullName.trim().length>0)}render(){return a`
      ${i(this,f,ne)}
      ${_(this._signedIn,()=>a`
        <forge-popover
          id="user-profile-popover"
          anchor="popover-trigger"
          placement="bottom-end"
          arrow
          position-strategy="fixed"
          .open=${this.open}
          @forge-popover-toggle=${S(this,f,ie)}
          @slotchange=${S(this,f,ge)}>
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
          ${i(this,f,oe)}
          ${i(this,f,re)}
          ${i(this,f,ae)}
        </forge-popover>
      `)}
    `}setTheme(e){i(this,c).value&&i(this,c).value.setTheme(e)}};b=new WeakMap;x=new WeakMap;C=new WeakMap;D=new WeakMap;L=new WeakMap;P=new WeakMap;I=new WeakMap;M=new WeakMap;c=new WeakMap;f=new WeakSet;oe=function(){const e=this._slottedLinkNodes.length>0;return _(e,()=>a` <forge-list>${i(this,x)}</forge-list> `,()=>i(this,x))};re=function(){const e=this.themeToggle;return _(e,()=>a`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle ${Q(i(this,c))} .groupAriaLabel=${this.themeToggleAriaLabel}>
            ${i(this,L)} ${i(this,P)} ${i(this,I)}
            ${i(this,M)}
          </forge-theme-toggle>
        </div>
      `,()=>H)};ne=function(){return this._signedIn?a`
          <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
            <forge-avatar .text=${this.fullName} .imageUrl=${this.imageUrl} id="button-avatar"></forge-avatar>
          </forge-icon-button>
        `:a`
          <forge-button variant="outlined" class="sign-in-button" pill @click=${S(this,f,le)}>
            <forge-icon name="account_outline" slot="start"></forge-icon>
            ${i(this,C)}
          </forge-button>
        `};ae=function(){return a`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-out-button" id="sign-out-button" @click=${S(this,f,se)}>
            ${i(this,D)}
            <forge-icon name="logout" external slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `};ie=function(e){this.open=e.detail.newState==="open"};le=function(){const e=new Event("forge-user-profile-sign-in",{bubbles:!0,composed:!0});this.dispatchEvent(e)};se=function(){const e=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(e)};ge=function(e){const t=e.target.name;["profile-button-text","link","sign-in-button-text","sign-out-button-text"].includes(t)&&this.requestUpdate()};Se();xe();Te();ke();we();$e();Ee();J.define([he,me]);s.styles=pe(Fe);p([h({attribute:"full-name"})],s.prototype,"fullName",2);p([h()],s.prototype,"email",2);p([h({attribute:"image-url"})],s.prototype,"imageUrl",2);p([h({attribute:"button-label"})],s.prototype,"buttonLabel",2);p([h({type:Boolean,attribute:"theme-toggle"})],s.prototype,"themeToggle",2);p([h({attribute:"theme-toggle-aria-label"})],s.prototype,"themeToggleAriaLabel",2);p([h({type:Boolean})],s.prototype,"open",2);p([_e()],s.prototype,"_signedIn",2);p([Oe({slot:"link",flatten:!0})],s.prototype,"_slottedLinkNodes",2);s=p([ve(Je)],s);const{addons:Ze}=__STORYBOOK_MODULE_PREVIEW_API__,{action:fe}=__STORYBOOK_MODULE_ACTIONS__,V=Ze.getChannel();Ae();const Qe=fe("forge-user-profile-sign-out"),Xe=fe("forge-user-profile-sign-in");J.define([ce,de]);const et="forge-user-profile";let G=!1,w=null;const tt={title:"Components/User Profile",render:e=>{const t=Z();function o(n){const l=n.detail.theme==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":n.detail.theme;w=n.detail.theme,V.emit(De,l)}function r(n){if(w==="system"){w=null;return}t.value&&t.value.setTheme(n?"dark":"light")}return G||(V.on(Ce,r),G=!0),a`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        ${Q(t)}
        @forge-user-profile-sign-in=${n=>Xe(n)}
        @forge-user-profile-sign-out=${n=>Qe(n)}
        @forge-theme-toggle-update=${o}
        slot="end"
        button-label="${e.buttonAriaLabel}"
        ?theme-toggle=${e.showThemeToggle}
        image-url="${e.imageUrl}"
        full-name="${e.fullName}"
        email="first.last@tylertech.com"
        theme-toggle-aria-label="${e.themeToggleAriaLabel}">
        ${e.showSlottedLinks?a`<forge-profile-link slot="link">
          <forge-icon slot="icon" name="settings"></forge-icon>
          <a href="http://www.google.com" target="_blank">Settings</a>
        </forge-profile-link>
        <forge-profile-link slot="link">
          <forge-icon slot="icon" name="account"></forge-icon>
          <a href="http://www.google.com" target="_blank">Profile</a>
        </forge-profile-link>
        `:H}
        ${e["sign-in-button-text"].length?a`<span slot="sign-in-button-text">${e["sign-in-button-text"]}</span>`:""}
        ${e["sign-out-button-text"].length?a`<span slot="sign-out-button-text">${e["sign-out-button-text"]}</span>`:""}
        ${e["theme-toggle-title"].length?a`<span slot="theme-toggle-title">${e["theme-toggle-title"]}</span>`:""}
        ${e["theme-toggle-light-label"].length?a`<span slot="theme-toggle-light-label">${e["theme-toggle-light-label"]}</span>`:""}
        ${e["theme-toggle-dark-label"].length?a`<span slot="theme-toggle-dark-label">${e["theme-toggle-dark-label"]}</span>`:""}
        ${e["theme-toggle-system-label"].length?a`<span slot="theme-toggle-system-label">${e["theme-toggle-system-label"]}</span>`:""}
      </forge-user-profile>
    </forge-app-bar>`},component:et,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{fullName:{control:"text"},"sign-in-button-text":{control:"text"},"sign-out-button-text":{control:"text"},buttonAriaLabel:{control:"text"},imageUrl:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"},themeToggleAriaLabel:{control:"text"},"theme-toggle-title":{control:"text"},"theme-toggle-light-label":{control:"text"},"theme-toggle-dark-label":{control:"text"},"theme-toggle-system-label":{control:"text"}},args:{fullName:"First Last","sign-in-button-text":"Sign in","sign-out-button-text":"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",imageUrl:"",showSlottedLinks:!0,showThemeToggle:!0,themeToggleAriaLabel:"Select a theme","theme-toggle-title":"Theme","theme-toggle-light-label":"Light","theme-toggle-dark-label":"Dark","theme-toggle-system-label":"System"}},m={};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};const ot=["Demo"],At=Object.freeze(Object.defineProperty({__proto__:null,Demo:m,__namedExportsOrder:ot,default:tt},Symbol.toStringTag,{value:"Module"}));export{m as D,At as U};
