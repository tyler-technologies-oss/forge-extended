import{_ as n,i as p,y as v,h as c}from"./with-default-aria-CHTEkAjF.js";import{e as m,i as y,r as u,E as h,x as _}from"./iframe-DoQzqFxN.js";import{n as s}from"./base-button-adapter-BTQl3Cnl.js";import{r as b}from"./index-CjGbPHy2.js";import{o as S}from"./style-map--tgTp8zM.js";import{e as w}from"./class-map-DIAVXfHh.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function x(t){const a=t.shadowRoot,e=t.constructor.styles,i=t.ownerDocument.defaultView;if(!(!m||!a||!e||!i))if(Array.isArray(e)&&e.length){const o=e.map(l=>{const g=new i.CSSStyleSheet;return g.replaceSync(l.toString()),g});a.adoptedStyleSheets=o}else{const o=new i.CSSStyleSheet;o.replaceSync(e.toString()),a.adoptedStyleSheets=[o]}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class C extends y{adoptedCallback(){x(this)}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */var d;const z=':host{display:inline-block}:host([hidden]){display:none}.forge-avatar{--_avatar-size:var(--forge-avatar-size, 40px);--_avatar-background:var(--forge-avatar-background, var(--forge-theme-tertiary, #3d5afe));--_avatar-color:var(--forge-avatar-color, var(--forge-theme-on-tertiary, #ffffff));--_avatar-transition-duration:var(--forge-avatar-transition-duration, var(--forge-animation-duration-short4, 200ms));--_avatar-transition-timing:var(--forge-avatar-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_avatar-shape:var(--forge-avatar-shape, calc(var(--forge-shape-round, 50%) * var(--forge-shape-factor, 1)))}.forge-avatar{display:flex;align-items:center;justify-content:center;overflow:hidden;transition:height var(--_avatar-transition-duration) var(--_avatar-transition-timing),width var(--_avatar-transition-duration) var(--_avatar-transition-timing);border-radius:var(--_avatar-shape);box-sizing:border-box;width:var(--_avatar-size);height:var(--_avatar-size);background-color:var(--_avatar-background);background-position:center;background-repeat:no-repeat;background-size:cover;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-subheading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-subheading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-subheading2-font-size-scale, 1)));font-weight:var(--forge-typography-subheading2-font-weight,400);line-height:var(--forge-typography-subheading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-subheading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-subheading2-letter-spacing, normal);text-transform:var(--forge-typography-subheading2-text-transform,inherit);text-decoration:var(--forge-typography-subheading2-text-decoration,inherit);color:var(--_avatar-color)}.forge-avatar--image{background-color:inherit}',k=(t,a)=>t?.trim()?a===1?t[0].toUpperCase():(t.match(/\S+/g)??[]).slice(0,a).reduce((i,o)=>i+=o[0].toUpperCase(),""):"",f="forge-avatar";let r=class extends C{constructor(){super(...arguments),this.text="",this.letterCount=2,this.imageUrl=""}willUpdate(a){a.has("imageUrl")&&this._tryLoadImage()}render(){return _`
      <div
        aria-hidden="true"
        part="root"
        class=${w({"forge-avatar":!0,"forge-avatar--image":!!this._image})}
        style=${this._image?S({backgroundImage:`url(${this._image.src})`}):h}>
        <slot>${this._image?h:k(this.text,this.letterCount)}</slot>
      </div>
    `}async _tryLoadImage(){if(this.imageUrl){const a=new Image;a.onload=()=>this._image=a,a.onerror=()=>this._image=void 0,a.src=this.imageUrl}else this._image=void 0}};d=v;r.styles=u(z);r[d]=f;n([s()],r.prototype,"text",void 0);n([s({type:Number,attribute:"letter-count"})],r.prototype,"letterCount",void 0);n([s({type:String,attribute:"image-url"})],r.prototype,"imageUrl",void 0);n([b()],r.prototype,"_image",void 0);r=n([p(f)],r);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function I(){c(r)}export{C as B,I as d};
