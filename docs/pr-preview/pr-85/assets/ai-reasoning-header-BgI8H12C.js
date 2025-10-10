import{r as h,i as c,x as t}from"./iframe-BM3h9hs5.js";import{t as d}from"./custom-element-BhZVzxrc.js";import{n as p}from"./property-DPSdVyYk.js";const f=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}.button-header{display:grid;grid-template-columns:56px 1fr auto;align-items:center;width:100%;background:none;border:none;cursor:pointer;text-align:start}.button-header svg{fill:var(--forge-theme-text-medium);height:24px;width:24px}.button-header-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6));flex:1}`;var y=Object.defineProperty,m=Object.getOwnPropertyDescriptor,g=(l,r,n,a)=>{for(var e=a>1?void 0:a?m(r,n):r,s=l.length-1,i;s>=0;s--)(i=l[s])&&(e=(a?i(r,n,e):i(e))||e);return a&&e&&y(r,n,e),e};const v="forge-ai-reasoning-header";let o=class extends c{constructor(){super(...arguments),this.expanded=!1,this.reasoning=!1}_handleClick(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("toggle",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}render(){return t`
      <button
        class="button-header"
        type="button"
        @click=${this._handleClick}
        aria-expanded=${this.expanded}
        aria-controls="content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path
            d="M3.5 19A1.5 1.5 0 0 1 5 20.5 1.5 1.5 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5 1.5 1.5 0 0 1 3.5 19m5-3a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 8.5 21 2.5 2.5 0 0 1 6 18.5 2.5 2.5 0 0 1 8.5 16m6-1c-1.19 0-2.27-.5-3-1.35-.73.85-1.81 1.35-3 1.35-1.96 0-3.59-1.41-3.93-3.26A4.02 4.02 0 0 1 2 8a4 4 0 0 1 4-4l.77.07C7.5 3.41 8.45 3 9.5 3c1.19 0 2.27.5 3 1.35.73-.85 1.81-1.35 3-1.35 1.96 0 3.59 1.41 3.93 3.26A4.02 4.02 0 0 1 22 10a4 4 0 0 1-4 4l-.77-.07c-.73.66-1.68 1.07-2.73 1.07M6 6a2 2 0 0 0-2 2 2 2 0 0 0 2 2c.33 0 .64-.08.92-.22A2 2 0 0 0 6.5 11a2 2 0 0 0 2 2c.6 0 1.14-.27 1.5-.69l1.47-1.68L13 12.34c.38.4.91.66 1.5.66 1 0 1.83-.74 2-1.7.34.43.89.7 1.5.7a2 2 0 0 0 2-2 2 2 0 0 0-2-2c-.33 0-.64.08-.92.22A2 2 0 0 0 17.5 7a2 2 0 0 0-2-2c-.59 0-1.12.26-1.5.66l-1.53 1.71L11 5.69c-.36-.42-.9-.69-1.5-.69-1 0-1.83.74-2 1.7C7.16 6.27 6.61 6 6 6m2.5 11.5a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1" />
        </svg>
        <span class="button-header-text">
          ${this.reasoning?t`<slot name="reasoning-title"></slot>`:t`<slot name="title"></slot>`}
        </span>
        ${this.expanded?t`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
              <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>`:t`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
              <path d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6z" />
            </svg>`}
      </button>
    `}};o.styles=h(f);g([p({type:Boolean,reflect:!0})],o.prototype,"expanded",2);g([p({type:Boolean,reflect:!0})],o.prototype,"reasoning",2);o=g([d(v)],o);
