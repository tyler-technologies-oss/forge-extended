import{r as pe,i as ue,x as a,E as H}from"./iframe-C6uLETDu.js";import{I as J,Y as he,Z as me,b as ce,J as de}from"./with-default-aria-qK7n-I_R.js";import{M as B}from"./index-BFVZ7Xg9.js";import{g as ye}from"./_commonjsHelpers-CqkleIqs.js";import{e as Z,n as Q}from"./ref-TJsU5Jab.js";import{t as ve}from"./custom-element-CwDoUV0x.js";import{n as h,t as be}from"./utils-CifiO2q4.js";import{r as _e}from"./state-C8p7HGYn.js";import{n as Oe}from"./query-assigned-nodes-cwDSNLIu.js";import{n as _}from"./when-3fO0zp9C.js";import{a as Se}from"./theme-toggle-Dg_f4B5M.js";import"./profile-link-DTa3KKL-.js";import{d as Te}from"./index-CM5Wy5WO.js";import{d as xe}from"./index-BkiBS89O.js";import{d as ke}from"./index-DIE1jr1w.js";import{d as we}from"./index-BoZp-nHZ.js";import{d as Ee}from"./index-mqgXvycp.js";import{d as $e}from"./index-DaO4BDVH.js";import{d as Ae}from"./index-CTj1O39E.js";import{d as Ce}from"./index-7V50f1xP.js";var De="DARK_MODE",Le="UPDATE_DARK_MODE",x,W;function Pe(){return W||(W=1,x=function e(t,o){if(t===o)return!0;if(t&&o&&typeof t=="object"&&typeof o=="object"){if(t.constructor!==o.constructor)return!1;var r,n,s;if(Array.isArray(t)){if(r=t.length,r!=o.length)return!1;for(n=r;n--!==0;)if(!e(t[n],o[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if(s=Object.keys(t),r=s.length,r!==Object.keys(o).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(o,s[n]))return!1;for(n=r;n--!==0;){var u=s[n];if(!e(t[u],o[u]))return!1}return!0}return t!==t&&o!==o}),x}var Ie=Pe();const K=ye(Ie);function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}var k;function q(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,r)}return o}function Y(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?q(Object(o),!0).forEach(function(r){Me(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):q(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Me(e,t,o){return t=Ne(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Ne(e){var t=Ue(e,"string");return d(t)==="symbol"?t:String(t)}function Ue(e,t){if(d(e)!=="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t);if(d(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function y(e){return Be(e)||ze(e)||je(e)||Re()}function Re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(e,t){if(e){if(typeof e=="string")return E(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return E(e,t)}}function ze(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Be(e){if(Array.isArray(e))return E(e)}function E(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}const{global:We}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:xt,SET_STORIES:kt,DOCS_RENDERED:wt}=__STORYBOOK_MODULE_CORE_EVENTS__;var X=We,Ke=X.document,O=X.window,ee="sb-addon-themes-3";(k=O.matchMedia)===null||k===void 0||k.call(O,"(prefers-color-scheme: dark)");var $={classTarget:"body",dark:B.dark,darkClass:["dark"],light:B.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},F=function(t){O.localStorage.setItem(ee,JSON.stringify(t))},qe=function(t,o){var r=o.current,n=o.darkClass,s=n===void 0?$.darkClass:n,u=o.lightClass,N=u===void 0?$.lightClass:u;if(r==="dark"){var U,R;(U=t.classList).remove.apply(U,y(v(N))),(R=t.classList).add.apply(R,y(v(s)))}else{var j,z;(j=t.classList).remove.apply(j,y(v(s))),(z=t.classList).add.apply(z,y(v(N)))}},v=function(t){var o=[];return o.concat(t).map(function(r){return r})},Ye=function(t){var o=Ke.querySelector(t.classTarget);o&&qe(o,t)},Fe=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=O.localStorage.getItem(ee);if(typeof o=="string"){var r=JSON.parse(o);return t&&(t.dark&&!K(r.dark,t.dark)&&(r.dark=t.dark,F(r)),t.light&&!K(r.light,t.light)&&(r.light=t.light,F(r))),r}return Y(Y({},$),t)};Ye(Fe());const{addons:Et,useState:$t,useEffect:At}=__STORYBOOK_MODULE_PREVIEW_API__,Ve=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.sign-in-button{--forge-button-spacing: var(--forge-spacing-xsmall, 8px);--forge-button-pill-padding-inline: var(--forge-spacing-xsmall, 8px);--forge-button-outlined-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-border-color: var(--forge-theme-on-brand, #ffffff);--forge-button-outlined-background: color-mix(in srgb, var(--forge-theme-on-brand, #ffffff) 16%, transparent)}.user-info-container{display:grid;grid-template-columns:56px 1fr;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px);align-items:center}.popover-avatar{--forge-avatar-size: 56px;--forge-avatar-shape: calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1));--forge-avatar-background: var(--forge-theme-secondary-container-low, #fff8e1);--forge-avatar-color: var(--forge-theme-on-secondary-container-low, #8a6804)}.popover-avatar::part(root){font-size:calc(var(--forge-avatar-size) * .4)}.user-info{display:flex;flex-direction:column}.full-name{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-font-size-scale, 1)));font-weight:var(--forge-typography-heading2-font-weight, 500);line-height:var(--forge-typography-heading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-heading2-letter-spacing, .0125em);text-transform:var(--forge-typography-heading2-text-transform, inherit);text-decoration:var(--forge-typography-heading2-text-decoration, inherit)}.email{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.additional-links{padding-block:var(--forge-spacing-xsmall, 8px)}.theme-toggle-container{padding:var(--forge-spacing-medium, 16px)}.toolbar-actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.sign-out-button{--forge-button-color: var(--forge-theme-text-high, rgba(0, 0, 0, .87))}`;var Ge=Object.defineProperty,He=Object.getOwnPropertyDescriptor,te=e=>{throw TypeError(e)},p=(e,t,o,r)=>{for(var n=r>1?void 0:r?He(t,o):t,s=e.length-1,u;s>=0;s--)(u=e[s])&&(n=(r?u(t,o,n):u(n))||n);return r&&n&&Ge(t,o,n),n},A=(e,t,o)=>t.has(e)||te("Cannot "+o),i=(e,t,o)=>(A(e,t,"read from private field"),o?o.call(e):t.get(e)),g=(e,t,o)=>t.has(e)?te("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Je=(e,t,o,r)=>(A(e,t,"write to private field"),t.set(e,o),o),S=(e,t,o)=>(A(e,t,"access private method"),o),b,T,C,D,L,P,I,M,c,f,oe,re,ne,ae,ie,le,se,ge;const Ze="forge-user-profile";let l=class extends ue{constructor(){super(),g(this,f),this.fullName="",this.email="",this.imageUrl="",this.buttonLabel="Open user profile",this.themeToggle=!1,this.themeToggleAriaLabel="Select a theme",this.open=!1,this._signedIn=!1,g(this,b),g(this,T,a`<slot name="link" id="link-slot"></slot>`),g(this,C,a`<slot name="sign-in-button-text" id="sign-in-button-slot">Sign in</slot>`),g(this,D,a`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`),g(this,L,a`<slot name="theme-toggle-title" slot="title">Theme</slot>`),g(this,P,a`<slot name="theme-toggle-light-label" slot="light-label">Light</slot>`),g(this,I,a`<slot name="theme-toggle-dark-label" slot="dark-label">Dark</slot>`),g(this,M,a`<slot name="theme-toggle-system-label" slot="system-label">System</slot>`),g(this,c,Z()),Je(this,b,this.attachInternals()),this._signedIn=this.fullName.trim().length>0}updated(e){super.updated(e),e.has("open")&&be(i(this,b),"open",this.open),e.has("fullName")&&(this._signedIn=this.fullName.trim().length>0)}render(){return a`
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
    `}setTheme(e){i(this,c).value?i(this,c).value.setTheme(e):Se(e)}};b=new WeakMap;T=new WeakMap;C=new WeakMap;D=new WeakMap;L=new WeakMap;P=new WeakMap;I=new WeakMap;M=new WeakMap;c=new WeakMap;f=new WeakSet;oe=function(){const e=this._slottedLinkNodes.length>0;return _(e,()=>a` <forge-list>${i(this,T)}</forge-list> `,()=>i(this,T))};re=function(){const e=this.themeToggle;return _(e,()=>a`
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
    `};ie=function(e){this.open=e.detail.newState==="open"};le=function(){const e=new Event("forge-user-profile-sign-in",{bubbles:!0,composed:!0});this.dispatchEvent(e)};se=function(){const e=new Event("forge-user-profile-sign-out",{bubbles:!0,composed:!0});this.dispatchEvent(e)};ge=function(e){const t=e.target.name;["profile-button-text","link","sign-in-button-text","sign-out-button-text"].includes(t)&&this.requestUpdate()};Te();xe();ke();we();Ee();$e();Ae();J.define([he,me]);l.styles=pe(Ve);p([h({attribute:"full-name"})],l.prototype,"fullName",2);p([h()],l.prototype,"email",2);p([h({attribute:"image-url"})],l.prototype,"imageUrl",2);p([h({attribute:"button-label"})],l.prototype,"buttonLabel",2);p([h({type:Boolean,attribute:"theme-toggle"})],l.prototype,"themeToggle",2);p([h({attribute:"theme-toggle-aria-label"})],l.prototype,"themeToggleAriaLabel",2);p([h({type:Boolean})],l.prototype,"open",2);p([_e()],l.prototype,"_signedIn",2);p([Oe({slot:"link",flatten:!0})],l.prototype,"_slottedLinkNodes",2);l=p([ve(Ze)],l);const{addons:Qe}=__STORYBOOK_MODULE_PREVIEW_API__,{action:fe}=__STORYBOOK_MODULE_ACTIONS__,V=Qe.getChannel();Ce();const Xe=fe("forge-user-profile-sign-out"),et=fe("forge-user-profile-sign-in");J.define([ce,de]);const tt="forge-user-profile";let G=!1,w=null;const ot={title:"Components/User Profile",render:e=>{const t=Z();function o(n){w=n.detail.theme,V.emit(Le,n.detail.resolvedTheme)}function r(n){if(w==="system"){w=null;return}t.value&&t.value.setTheme(n?"dark":"light")}return G||(V.on(De,r),G=!0),a`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        ${Q(t)}
        @forge-user-profile-sign-in=${n=>et(n)}
        @forge-user-profile-sign-out=${n=>Xe(n)}
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
    </forge-app-bar>`},component:tt,subcomponents:{"Profile Link":"forge-profile-link"},argTypes:{fullName:{control:"text"},"sign-in-button-text":{control:"text"},"sign-out-button-text":{control:"text"},buttonAriaLabel:{control:"text"},imageUrl:{control:"text"},showSlottedLinks:{control:"boolean"},showThemeToggle:{control:"boolean"},themeToggleAriaLabel:{control:"text"},"theme-toggle-title":{control:"text"},"theme-toggle-light-label":{control:"text"},"theme-toggle-dark-label":{control:"text"},"theme-toggle-system-label":{control:"text"}},args:{fullName:"First Last","sign-in-button-text":"Sign in","sign-out-button-text":"Sign Out",buttonAriaLabel:"Open the incredibly awesome profile menu",imageUrl:"",showSlottedLinks:!0,showThemeToggle:!0,themeToggleAriaLabel:"Select a theme","theme-toggle-title":"Theme","theme-toggle-light-label":"Light","theme-toggle-dark-label":"Dark","theme-toggle-system-label":"System"}},m={};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};const rt=["Demo"],Ct=Object.freeze(Object.defineProperty({__proto__:null,Demo:m,__namedExportsOrder:rt,default:ot},Symbol.toStringTag,{value:"Module"}));export{m as D,Ct as U};
