import{r as g,i as m,x as L}from"./iframe-1nQRahsv.js";import{t as w}from"./custom-element-BhZVzxrc.js";import{n as u}from"./property-Cjadod3R.js";import{t as y}from"./utils-Oij4eZxH.js";const C=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:grid;place-items:center;height:1em;width:1em;font-size:24px}svg{fill:var(--forge-theme-tertiary, #3d5afe);height:1em;width:1em}:host(:state(outline)){font-size:36px}:host(:state(outline)) svg{height:.5em;width:.5em}`;var x=Object.defineProperty,A=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},d=(t,e,i,r)=>{for(var s=r>1?void 0:r?A(e,i):e,h=t.length-1,l;h>=0;h--)(l=t[h])&&(s=(r?l(e,i,s):l(s))||s);return r&&s&&x(e,i,s),s},c=(t,e,i)=>e.has(t)||_("Cannot "+i),I=(t,e,i)=>(c(t,e,"read from private field"),i?i.call(t):e.get(t)),v=(t,e,i)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),S=(t,e,i,r)=>(c(t,e,"write to private field"),e.set(t,i),i),f=(t,e,i)=>(c(t,e,"access private method"),i),n,a,p;const M="forge-ai-icon";let o=class extends m{constructor(){super(),v(this,a),this.outline=!1,v(this,n),S(this,n,this.attachInternals()),f(this,a,p).call(this)}willUpdate(t){t.has("outline")&&f(this,a,p).call(this)}render(){return L`
      <svg width="24" height="24" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.375 10.625L15 12.5L9.375 14.375L7.5 20L5.625 14.375L0 12.5L5.625 10.625L7.5 5L9.375 10.625ZM16.25 3.75L20 5L16.25 6.25L15 10L13.75 6.25L10 5L13.75 3.75L15 0L16.25 3.75Z" />
      </svg>
    `}};n=new WeakMap;a=new WeakSet;p=function(){y(I(this,n),"outline",this.outline)};o.styles=g(C);d([u({type:Boolean})],o.prototype,"outline",2);o=d([w(M)],o);
