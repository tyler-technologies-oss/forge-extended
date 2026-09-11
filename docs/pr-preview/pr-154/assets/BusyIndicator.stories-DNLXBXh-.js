import{r as M,i as L,x as n}from"./iframe-pX2mP6Yq.js";import{n as D,e as A}from"./ref-BwX5iq2r.js";import{s as R}from"./utils-BS9NwPQi.js";import{s as F}from"./decorators-Dk2-X6A_.js";import{t as U}from"./custom-element-DER5CWwz.js";import{n as s}from"./utils-BfHhYyJi.js";import{n as $}from"./query-assigned-nodes-cwDSNLIu.js";import{e as W}from"./class-map-D3M3IjTv.js";import{n as g}from"./when-3fO0zp9C.js";import{c as _}from"./slot-utils-DH2anZHy.js";import{d as q}from"./index-D1jsQCkd.js";import{d as G}from"./index-DYG5s12s.js";import{d as K}from"./index-DBh2dQPu.js";import{d as Y}from"./index-B9wBF_Rg.js";const H=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */@keyframes forge-dialog-zoom-in{0%{opacity:var(--_dialog-zoom-opacity);scale:var(--_dialog-zoom-scale)}to{opacity:1;scale:1}}@keyframes forge-dialog-zoom-out{0%{opacity:1;scale:1}to{opacity:var(--_dialog-zoom-opacity);scale:var(--_dialog-zoom-scale)}}@keyframes forge-dialog-fade-in{0%{opacity:var(--_dialog-fade-opacity)}to{opacity:1}}@keyframes forge-dialog-fade-out{0%{opacity:1}to{opacity:var(--_dialog-fade-opacity)}}@keyframes forge-dialog-slide-in{0%{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}to{opacity:1;translate:0 0}}@keyframes forge-dialog-slide-out{0%{opacity:1;translate:0 0}to{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}}:host{display:contents;border-radius:inherit}.surface{padding:var(--forge-spacing-large, 24px);display:grid;gap:var(--forge-spacing-large, 24px)}.layout-container{display:flex;align-items:center;gap:var(--forge-spacing-large, 24px)}.layout-container .content{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px);width:100%}.message{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);flex:1 auto;margin-block:0;color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6))}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);margin:0}.progress-container{min-width:244px}forge-dialog.inline{border-radius:inherit}forge-dialog.inline::part(root){position:absolute;overflow:clip}forge-dialog.inline::part(root),forge-dialog.inline::part(backdrop){border-radius:inherit}.transparent{--forge-dialog-background: transparent;--forge-dialog-elevation: none}`;var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},r=(e,t,a,f)=>{for(var p=f>1?void 0:f?Q(t,a):t,y=e.length-1,u;y>=0;y--)(u=e[y])&&(p=(f?u(t,a,p):u(p))||p);return f&&p&&J(t,a,p),p},v=(e,t,a)=>t.has(e)||w("Cannot "+a),l=(e,t,a)=>(v(e,t,"read from private field"),a?a.call(e):t.get(e)),x=(e,t,a)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),T=(e,t,a,f)=>(v(e,t,"write to private field"),t.set(e,a),a),d=(e,t,a)=>(v(e,t,"access private method"),a),c,i,C,z,S,k,B,P,I,N,O,b,E;const V="forge-busy-indicator";let o=class extends L{constructor(){super(...arguments),x(this,i),this.open=!1,this.mode="fullscreen",this.headingLevel=1,this.cancelable=!1,this.variant="spinner",this.determinate=!1,this.progress=0,this.buffer=0,this.transparent=!1,x(this,c,null)}disconnectedCallback(){l(this,c)&&d(this,i,b).call(this),super.disconnectedCallback()}willUpdate(e){e.has("open")&&d(this,i,N).call(this)}render(){return n`
      <forge-dialog
        class=${W({inline:this.mode==="inline",transparent:this.transparent})}
        persistent
        fullscreen-threshold="0"
        .open=${this.open}
        .mode=${this.mode==="inline"?"inline-modal":"modal"}
        .label=${this.label||this.titleText||_(this._slottedTitleNodes)||""}
        .description=${this.description||this.message||_(this._slottedMessageNodes)||""}>
        <div class="surface" @slotchange=${d(this,i,E)}>
          ${l(this,i,C)}
          ${g(this.variant==="spinner"||this.variant==="message-only"||this.message||this.cancelable,()=>n`<div class="layout-container">${l(this,i,S)} ${l(this,i,k)}</div>`)}
          ${l(this,i,P)}
        </div>
      </forge-dialog>
    `}};c=new WeakMap;i=new WeakSet;C=function(){const e=!!this.titleText?.trim()||this._slottedTitleNodes.length>0;return g(e,()=>n`<div role="heading" aria-level=${this.headingLevel} id="title" class="title"><slot name="title">${this.titleText}</slot></div>`,()=>n`<slot name="title"></slot>`)};z=function(){const e=!!this.message?.trim()||this._slottedMessageNodes.length>0;return g(e,()=>n`<p id="message" class="message"><slot name="message">${this.message}</slot></p>`,()=>n`<slot name="message"></slot>`)};S=function(){return g(this.variant==="spinner",()=>n`<div>
          <forge-circular-progress
            class="spinner"
            aria-hidden="true"
            ?determinate="${this.determinate}"
            .progress=${this.progress}></forge-circular-progress>
        </div>`)};k=function(){const e=this.variant==="message-only"||this.message||this.cancelable;return g(e,()=>n`<div class="content">${l(this,i,z)} ${l(this,i,B)}</div>`)};B=function(){return g(this.cancelable,()=>n`<forge-button class="cancel-button" variant="outlined" @click=${d(this,i,I)}>
          <slot name="cancel-text">Cancel</slot>
        </forge-button>`)};P=function(){return g(this.variant==="progress",()=>n`<div class="progress-container">
          <forge-linear-progress
            aria-hidden="true"
            .determinate="${this.determinate}"
            .buffer=${this.buffer}
            .progress=${this.progress}></forge-linear-progress>
        </div>`)};I=function(){const e=new CustomEvent("forge-busy-indicator-cancel",{bubbles:!0,cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)};N=function(){this.open&&this.mode==="fullscreen"?d(this,i,O).call(this):l(this,c)&&d(this,i,b).call(this)};O=function(){T(this,c,document.activeElement)};b=function(){l(this,c)?.focus({preventScroll:!0}),T(this,c,null)};E=function(e){const t=e.target.name;["title","message"].includes(t)&&this.requestUpdate()};K();q();G();Y();o.styles=M(H);r([s({type:Boolean})],o.prototype,"open",2);r([s({type:String})],o.prototype,"mode",2);r([s({attribute:"title-text"})],o.prototype,"titleText",2);r([s({attribute:"heading-level",type:Number})],o.prototype,"headingLevel",2);r([s()],o.prototype,"message",2);r([s()],o.prototype,"label",2);r([s()],o.prototype,"description",2);r([s({type:Boolean})],o.prototype,"cancelable",2);r([s()],o.prototype,"variant",2);r([s({type:Boolean})],o.prototype,"determinate",2);r([s({type:Number})],o.prototype,"progress",2);r([s({type:Number})],o.prototype,"buffer",2);r([s({type:Boolean})],o.prototype,"transparent",2);r([$({slot:"title",flatten:!0})],o.prototype,"_slottedTitleNodes",2);r([$({slot:"message",flatten:!0})],o.prototype,"_slottedMessageNodes",2);o=r([U(V)],o);const{action:X}=__STORYBOOK_MODULE_ACTIONS__,Z="forge-busy-indicator",j=X("forge-busy-indicator-cancel"),ee={title:"Components/Busy Indicator",component:Z,render:e=>{const t=A();function a(){t.value.open=!0,setTimeout(()=>t.value.open=!1,3e3)}return n`
      <forge-button variant="raised" @click=${a}>Show Busy Indicator</forge-button>
      <forge-busy-indicator
        ${D(t)}
        @forge-busy-indicator-cancel=${j}
        .mode=${e.mode}
        .titleText="${e.titleText}"
        .message=${e.message}
        .cancelable=${e.cancelable}
        .variant=${e.variant}
        .determinate=${e.determinate}
        .progress=${e.progress}
        .buffer=${e.buffer}
        .transparent=${e.transparent}></forge-busy-indicator>
    `},argTypes:{mode:{control:"select",options:["modal","inline"]},variant:{control:"select",options:["spinner","progress","message-only"]}},args:{mode:"modal",titleText:"",message:"Please wait while we load your data...",cancelable:!1,variant:"spinner",progress:.5,buffer:1,determinate:!1,transparent:!1}},h={},m={...R,decorators:[F(`
    .parent {
      position: relative;
      height: 300px;
      border: 1px solid var(--forge-theme-outline);
      border-radius: var(--forge-shape-large);
    }
  `)],render:()=>n`
      <div class="parent">
        <forge-busy-indicator
          open
          mode="inline"
          title-text="Loading"
          message="Please wait while we load your data..."></forge-busy-indicator>
      </div>
    `};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  decorators: [storyStyles(\`
    .parent {
      position: relative;
      height: 300px;
      border: 1px solid var(--forge-theme-outline);
      border-radius: var(--forge-shape-large);
    }
  \`)],
  render: () => {
    return html\`
      <div class="parent">
        <forge-busy-indicator
          open
          mode="inline"
          title-text="Loading"
          message="Please wait while we load your data..."></forge-busy-indicator>
      </div>
    \`;
  }
}`,...m.parameters?.docs?.source}}};const te=["Demo","Inline"],ye=Object.freeze(Object.defineProperty({__proto__:null,Demo:h,Inline:m,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{ye as B,h as D,m as I};
